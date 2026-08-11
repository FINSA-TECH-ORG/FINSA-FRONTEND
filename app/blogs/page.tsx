 // This was changed to a client component for NextJs to recognize static export module
import QueryBlogs from './QueryBlogs';
import Refresh from '../component/RefreshBlogs';
import RequestBlogs from './RequestBlogs';
import { Suspense } from 'react';


//Part of Directus set up
// interface PageProps {
//   searchParams: Promise<{
//     search?: string;
//   }>;
// }


//Change back to a server component when directus is back up
export default async  function BlogPage({searchParam} :{searchParam : string}) {
  // 1. Unpack the  parameter from the incoming request URL safely
  // const resolvedParams =  searchParams;
  // const currentSearchTerm = resolvedParams.search || "";

  return (
    <section className="bg-white min-h-screen  pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block & Client Side Input Component */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 ">
          <Refresh/>

          {/* Mount our client side input box */}
          <Suspense>
          <QueryBlogs />
          </Suspense>
        </div>

        {/* 2. Keying Suspense to the string forces a smooth loading state fallback over the grid when typing */}
        {/* <Suspense key={currentSearchTerm} fallback={
          <div className="text-center py-32">
            <p className="text-slate-400 font-medium animate-pulse text-xl">Fetching Available Blogs...</p>
          </div>
        }> */}
          {/* Feed parameter directly into the Server layout */}
          {/* <RequestBlogs searchParam={currentSearchTerm} /> */}
   <Suspense>
          <RequestBlogs searchParam={searchParam} />
          </Suspense>
        {/* </Suspense> */}

      </div>
    </section>
  );
}