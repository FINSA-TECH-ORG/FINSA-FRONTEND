"use client" //Remove the Use client when the directus application is ready
import Image from "next/image";
//import { getBlogs } from "@app/lib/Finsa";
import Link from "next/link";
import {blogData} from "../assets/blogPost";
//const baseUrl = `${process.env.NEXT_PUBLIC_DIRECTUS_URL}`

type BlogType = {
  id : number
  author : string;
  title : string;
  slug : string;
  publish_date : string;
  summary : string;
  cover_image : string;
  content : string

}


//Make Sure to change the requestBlogs back into a server component when the directus application endpoint is ready
export default  function RequestBlogs({searchParam} : {searchParam : string }) {


 
 //const posts = await getBlogs(searchParam, 10);


  


    //console.log(posts)
const posts = blogData
   const filteredBlogs = posts.filter((blog) => searchParam?.length > 1 ?

     blog.title.toLowerCase().includes(searchParam.toLowerCase()) ||
     blog.author.toLowerCase().includes(searchParam.toLowerCase()) ||
 blog.summary.toLowerCase().includes(searchParam.toLowerCase()) : posts
    )
    console.log(searchParam)


  return (
    <div className="bg-white min-h-screen  pb-24 ">
    
        {/* Dynamic Card Grid */}
        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredBlogs.map((blog) => (
              <article 
                key={blog.id} 
                className="group flex flex-col bg-[#f7f7f6] rounded-[2.5rem] overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Image Section */}
                <div className="relative h-64 w-full overflow-hidden">
                  <Image 
                  //  src={`${baseUrl}/assets/${blog?.cover_image}`} 
                  src={blog?.cover_image}
                    alt={blog.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                       {/* <Image 
                       objectFit="cover"
                    src={blog?.cover_image} 
                    alt={blog.title} 
                    fill 
                    className="w-full group-hover:scale-110 transition-transform duration-700"
                  /> */}
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full shadow-sm">
                NEW
                  </div>
                </div>

                {/* Text Content */}
                <div className="p-10 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-[#b24a53] text-[10px] font-black uppercase tracking-widest">{blog.publish_date ? blog?.publish_date?.slice(0, 10) : ""}</span>
                                  {/* <span className="text-[#b24a53] text-[10px] font-black uppercase tracking-widest">{blog.publish_date ? blog?.publish_date : ""}</span> */}
                      <span className="h-1 w-1 bg-slate-300 rounded-full" />
                      <span className="text-[#6c788e] text-[10px] font-bold uppercase tracking-widest">By {blog.author}</span>
                    </div>
                    
                    <h3 className="text-[#1853ad] text-2xl font-bold mb-4 leading-tight group-hover:text-[#0c95d9] transition-colors">
                      {blog.title}
                    </h3>
                    
                   <p className="text-[#6c788e] text-sm leading-relaxed mb-8 line-clamp-3">
                      {blog.summary}
                    </p> 
                  </div>

                  <Link href={`/blogs/${blog?.slug}`} className="flex items-center gap-3 text-[#1853ad] font-black text-xs uppercase tracking-[0.2em] group/btn">
                    Read Analysis 
                    <span className="group-hover/btn:translate-x-2 transition-transform duration-300 text-lg">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-32 border-2 border-dashed border-slate-100 rounded-[3rem]">
            <p className="text-slate-400 font-medium italic text-xl">
              {`No insights found matching "${searchParam}" `}
              </p>
          </div>
        )}
      
    </div>
  );
};

