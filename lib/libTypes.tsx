export interface HomepageHero {
    hero_background_image: string;
    hero_heading: string;
    hero_subtext: string;
    primary_button_text: string;
    primary_button_link: string;
}

export interface Executive {
    id: number | string;
    full_name: string;
    role: string;
    bio: string;
    profile_image: string;
    sort: number;
}

export interface Blog {
    id: number | string;
    title: string;
    summary: string;
    author: string;
    publish_date: string;
    cover_image: string;
    slug: string;
    content : string

}

export interface Opportunity {
    id: number | string;
    company_name: string;
    position: string;
    deadline: string;
    type_badge: string;
    popup_details: string;
    application_link: string;
}

export interface Announcement {
    id: number | string;
    title: string;
    badge_type: string;
    timestamp: string;
    full_message: string;
}

export interface ContactInquiry {
    id?: number | string;
    organisation?: string;
    full_name_and_position: string;
    phone_whatsapp?: string;
    contact_email: string;
    engagement_purpose: string;
}

/**
 * Combine everything into the Directus Schema
 */
export interface Schema {
    homepage_hero: HomepageHero;
    executives: Executive[];
    blogs: Blog[];
    internships_opportunities: Opportunity[];
    announcements: Announcement[];
    contact_inquiries: ContactInquiry[];
    testimonials : Testimonial[]
}

export type Testimonial = {
    id : number;
    quote : string;
    author_name : string;
    author_role : string;
    author_avatar : string;
    sort : number
  }