import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getBlogsBySlug } from '@app/lib/Finsa'; // Adjust import based on your architecture

export type BlogType = {
  id: number;
  author: string;
  title: string;
  slug: string;
  publish_date: string;
  summary: string;
  cover_image: string;
  content: string;
  link : string
};

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  //console.log(slug)
  // Fetching single blog post from Directus using your SDK helper
  const rawBlog = await getBlogsBySlug(slug);
// const blog = blogData?.find((item)=> item?.slug === slug) || {
//   id: 0,
//   author: "",
//   title: "",
//   slug: "",
//   publish_date: "",
//   summary: "",
//   cover_image: "",
//   content: "",
//   link : ""
// }
  if (!rawBlog) {
    notFound();
  }

  // Explicit type matching for your custom structure
  const passedData = rawBlog as unknown as BlogType[];
 const blog = passedData[0];
  const imagesBaseUrl = process.env.NEXT_PUBLIC_DIRECTUS_URL || "http://localhost:8055";
//console.log(blog?.cover_image);
  return (
    <main className="min-h-screen bg-white pt-36 pb-32 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Navigation Breadcrumb back to ledger */}
        <div className="mb-12">
          <Link 
            href="/blogs" 
            className="text-xs font-black uppercase tracking-[0.2em] text-[#6c788e] hover:text-[#1853ad] transition-colors flex items-center gap-2 group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span> All Blogs Page
          </Link>
        </div>

        {/* Header Block */}
        <header className="mb-12">
          {/* Big Bold Finsa Blue Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1853ad] tracking-tight leading-[1.1] mb-6">
            {blog.title}
          </h1>

          {/* Author Name and Date on the exact same line */}
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#6c788e]">
            <span>By {blog.author}</span>
            <span className="h-1.5 w-1.5 bg-[#b24a53] rounded-full" /> {/* Accent Finsa Red Separator Dot */}
            <span className="text-slate-400">
              {blog.publish_date ? new Date(blog.publish_date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              }) : 'Recent Insight'}
            </span>
          </div>
        </header>

        {/* Large Cinematic Banner Cover Image */}
        {blog.cover_image && (
          <div className="relative h-[300px] md:h-[480px] w-full rounded-[2.5rem] overflow-hidden mb-16 shadow-sm border border-slate-100 bg-[#f7f7f6]">
            <Image
              src={`${imagesBaseUrl}/assets/${blog.cover_image}`}
              alt={blog.title}
              fill
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 896px"
              priority
            />
               {/* <Image
              src={`${blog.cover_image}`}
              alt={blog.title}
              fill
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 896px"
              priority
            /> */}
          </div>
        )}

        {/* Article Summary Block / Lead Paragraph */}
        {blog.summary && (
          <div className="border-l-4 border-[#b24a53] pl-6 mb-12">
            <p className="text-lg font-medium italic text-[#6c788e] leading-relaxed">
              {blog.summary}
            </p>
          </div>
        )}

        {/* Content Engine rendered using simplistic off-black text colors */}
        <div className="max-w-3xl mx-auto">
          <div 
            className="
              prose prose-slate max-w-none
              text-[#1c1e21] text-lg leading-relaxed font-normal
              
              /* Tailoring elements coming dynamically out of the Directus WYSIWYG editor */
              prose-headings:text-[#1853ad] prose-headings:font-black prose-headings:tracking-tight
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
              
              prose-p:mb-6 prose-p:text-[#1c1e21]
              
              prose-strong:text-[#1853ad] prose-strong:font-bold
              
              prose-a:text-[#b24a53] prose-a:underline prose-a:font-bold hover:prose-a:text-[#1853ad] transition-colors
              
              prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-6
              prose-ol:list-decimal prose-ol:pl-6 prose-ol:mb-6
              prose-li:mb-2
            "
            dangerouslySetInnerHTML={{ __html: typeof blog.content === "string" ? blog.content : "" }}
          />
            {blog?.link && (
          <Link href={blog?.link} className='mt-4 text-[16px] leading-5 text-blue-700 '>
             {blog?.link}
          </Link>
        )}
        </div>
      
      </div>
    </main>
  );
}