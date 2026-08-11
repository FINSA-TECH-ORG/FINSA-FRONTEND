import {
    createDirectus,
    rest,
    readItems,
    readSingleton,
    createItem,
    type DirectusClient,
    type RestClient,
} from "@directus/sdk";

import { Schema, Testimonial, HomepageHero, Executive, Blog, Opportunity, Announcement, ContactInquiry } from "./libTypes";
import {BlogType} from "../app/assets/blogPost"



// 2. Map the collection names to their type definitions

// ── Configuration ──────────────────────────────────────────────
const DIRECTUS_URL =
    process.env.DIRECTUS_URL ||
    `${process.env.NEXT_PUBLIC_DIRECTUS_URL}` ||
    "http://localhost:8055";

const TIMEOUT_MS = 5_000;

// ── Client setup ───────────────────────────────────────────────
// Pass the Schema here to enable library-wide type safety
const client = createDirectus<Schema>(DIRECTUS_URL).with(rest());

// ── Helpers ────────────────────────────────────────────────────

async function withTimeout<T>(promise: Promise<T>): Promise<T> {
    const timeout = new Promise<never>((_, reject) =>
        setTimeout(
            () => reject(new Error(`Request timed out after ${TIMEOUT_MS}ms`)),
            TIMEOUT_MS
        )
    );
    try {
      //  if(!timeout) return;
      const response =   await Promise.race([promise, timeout]);
      if(!response) throw new Error("No response received");
        return  response
      
    } catch (error: any) {
     //   console.error("[FINSA SDK]", error?.message ?? error);
        throw error;
    }
}

// ── Public API ─────────────────────────────────────────────────

export async function getHero(): Promise<HomepageHero> {
    return withTimeout(
        client.request(
            readSingleton("homepage_hero", {
                fields: [
                    "hero_background_image",
                    "hero_heading",
                    "hero_subtext",
                    "primary_button_text",
                    "primary_button_link",
                ],
            })
        )
    );
}

export async function getExecutives(): Promise<Executive[]> {
    return withTimeout(
        client.request(
            readItems("executives", {
                fields: ["id", "full_name", "role", "bio", "profile_image", "sort"],
                sort: ["sort"],
            })
        )
    );
}

export async function getTestimonial(): Promise<Testimonial[]> {
    return withTimeout(
        client.request(
            readItems("testimonials", {
                fields: ["id", "quote", "author_name", "author_role", "author_avatar", "sort"],
                sort: ["id"],
            })
        )
    );
}

interface GetBlogsOptions {
    search?: string;
    limit?: number;
}

export async function getBlogs(search = "", limit : 10): Promise<Blog[]> {
    return withTimeout(
        client.request(
            readItems("blogs" , {
                fields: [
                    "id",
                    "title",
                    "summary",
                    "author",
                    "publish_date",
                    "cover_image",
                    "slug",
                     "content",
                     "link"
                ],
               
                sort: ["-publish_date"],
                limit ,
               ...(search ? { search } : {}),
            })
        )
    );
}

export async function getBlogsBySlug(slug : string): Promise<Blog[]> {
    return withTimeout(
        client.request(
            readItems("blogs" , {
                fields: [
                    "id",
                    "title",
                    "summary",
                    "author",
                    "publish_date",
                    "cover_image",
                    "slug",
                     "content"
                ],
                filter : {
                    slug: {
                      _eq : slug
                    }
                },
                sort: ["-publish_date"],
               
            })
        )
    );
}

// export  function clientGetBlogsBySlug(slug : string): Promise<BlogType[]> {
//     return withTimeout(
//         client.request(
//             readItems("blogs" , {
//                 fields: [
//                     "id",
//                     "title",
//                     "summary",
//                     "author",
//                     "publish_date",
//                     "cover_image",
//                     "slug",
//                      "content",
//                      "link"
                    
//                 ],
//                 filter : {
//                     slug: {
//                       _eq : slug
//                     }
//                 },
//                 sort: ["-publish_date"],
               
//             })
//         )
//     );
// }

export async function getOpportunities(): Promise<Opportunity[]> {
    return withTimeout(
        client.request(
            readItems("internships_opportunities", {
                fields: [
                    "id",
                    "company_name",
                    "position",
                    "deadline",
                    "type_badge",
                    "popup_details",
                    "application_link",
                ],
                
                sort: ["deadline"],
            })
        )
    );
}

export async function getAnnouncements(): Promise<Announcement[]> {
    return withTimeout(
        client.request(
            readItems("announcements", {
                fields: ["id", "title", "badge_type", "timestamp", "full_message"],
                sort: ["-timestamp"],
            })
        )
    );
}

export async function submitInquiry(data: ContactInquiry): Promise<ContactInquiry> {
    // Basic runtime validation (TS handles the rest during dev)
    const required: (keyof ContactInquiry)[] = [
        "full_name_and_position",
        "contact_email",
        "engagement_purpose",
    ];

    for (const field of required) {
        if (!data[field]) {
            throw new Error(`Missing required field: ${field as string}`);
        }
    }

    return withTimeout(
        client.request(createItem("contact_inquiries", data))
    );
}

// ── Default export ─────────────────────────────────────────────
export default {
    getHero,
    getExecutives,
    getBlogs,
    getOpportunities,
    getAnnouncements,
    submitInquiry,
};