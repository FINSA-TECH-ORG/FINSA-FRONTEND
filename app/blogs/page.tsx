"use client"
import {useState, useMemo} from "react"
import Image from "next/image";
import { blogData } from "../assets/blogPost";
const FinsaBlog = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Search through Title, Author (Name), and Description
  const filteredBlogs = useMemo(() => {
    return blogData.filter((blog) =>
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <section className="bg-white min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header & Search Engine */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
          <div className="max-w-xl">
            <h1 className="text-[#6c788e] text-xs font-bold tracking-[0.5em] uppercase mb-4">The Ledger</h1>
            <p className="text-5xl font-black text-[#1853ad] italic tracking-tighter">
              Financial <span className="text-[#b24a53]">Intelligence.</span>
            </p>
          </div>

          <div className="relative w-full md:w-96 group">
            <input 
              type="text"
              placeholder="Search by title, author, or keyword..."
              className="w-full border-b-2 border-slate-200 py-3 px-2 focus:border-[#1853ad] outline-none transition-all text-[#6c788e] font-medium placeholder:text-slate-300"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute right-2 top-3 transition-transform group-focus-within:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

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
                    src={blog.image} 
                    alt={blog.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full shadow-sm">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#1853ad]">
                      {blog.category}
                    </span>
                  </div>
                </div>

                {/* Text Content */}
                <div className="p-10 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-[#b24a53] text-[10px] font-black uppercase tracking-widest">{blog.date}</span>
                      <span className="h-1 w-1 bg-slate-300 rounded-full" />
                      <span className="text-[#6c788e] text-[10px] font-bold uppercase tracking-widest">By {blog.author}</span>
                    </div>
                    
                    <h3 className="text-[#1853ad] text-2xl font-bold mb-4 leading-tight group-hover:text-[#0c95d9] transition-colors">
                      {blog.title}
                    </h3>
                    
                    <p className="text-[#6c788e] text-sm leading-relaxed mb-8 line-clamp-3">
                      {blog.description}
                    </p>
                  </div>

                  <button className="flex items-center gap-3 text-[#1853ad] font-black text-xs uppercase tracking-[0.2em] group/btn">
                    Read Analysis 
                    <span className="group-hover/btn:translate-x-2 transition-transform duration-300 text-lg">→</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-32 border-2 border-dashed border-slate-100 rounded-[3rem]">
            <p className="text-slate-400 font-medium italic text-xl">{`No insights found matching "${searchQuery}" `}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FinsaBlog;