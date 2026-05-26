"use client"

import { useTransition } from "react";
import { useSearchParams, useRouter } from "next/navigation";
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
const QueryBlogs = ()=>  {
  const router = useRouter();
  const params = useSearchParams()
const [isPending, startTransition] = useTransition();

  const handleSearch = (value : string)=> {
  const search = new URLSearchParams(params?.toString())
  if(value){
    search?.set("search", value)
  }else{
    search?.delete("search")
  }
  startTransition(()=> {
    router.push(`/blogs?${search?.toString()}`)
  })
  }
//const [searchQuery, setSearchQuery] = useState("")
   


  return (
    <section className="w-full h-auto pt-32  px-6 bg-white mb-20">
      <div className="w-full ">
        
        {/* Header & Search Engine */}
        <div className="flex flex-col w-full md:flex-row md:items-end justify-between gap-10">
          <div className="w-full">
            <h1 className="text-[#6c788e] text-xs font-bold tracking-[0.5em] uppercase mb-4">The Ledger</h1>
            <p className="text-5xl font-black text-[#1853ad] italic tracking-tighter">
              Financial <span className="text-[#b24a53]">Intelligence.</span>
            </p>
          </div>

          <div className="relative w-full group">
            <input 
              type="text"
           //   value={searchQuery}
              defaultValue={params?.get("search") || ""}
              placeholder="Search by title, author, or keyword..."
              className="w-full border-b-2 border-slate-200 py-3 px-2 focus:border-[#1853ad] outline-none transition-all text-[#6c788e] font-medium placeholder:text-slate-300"
             onChange={(e) => handleSearch(e.target.value)}
            />
            <div className="absolute right-2 top-3 transition-transform group-focus-within:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

      </div>
     
       {isPending && (
        <span className="absolute right-10 top-4 text-xs text-slate-400 animate-pulse">
          Crunched...
        </span>
      )}
    </section>
  );
};
export default QueryBlogs;
