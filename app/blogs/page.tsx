import { Suspense } from 'react';
import QueryBlogs from './QueryBlogs';
import Refresh from '../component/RefreshBlogs';
import RequestBlogs from './RequestBlogs';
interface PageProps {
  searchParams: Promise<{
    search?: string;
  }>;
}

export default async function BlogPage({ searchParams }: PageProps) {
  // 1. Unpack the search parameter from the incoming request URL safely
  const resolvedParams = await searchParams;
  const currentSearchTerm = resolvedParams.search || "";

  return (
    <section className="bg-white min-h-screen  pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block & Client Side Input Component */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 ">
          <Refresh/>

          {/* Mount our client side input box */}
          <QueryBlogs />
        </div>

        {/* 2. Keying Suspense to the string forces a smooth loading state fallback over the grid when typing */}
        <Suspense key={currentSearchTerm} fallback={
          <div className="text-center py-32">
            <p className="text-slate-400 font-medium animate-pulse text-xl">Recalculating ledger parameters...</p>
          </div>
        }>
          {/* Feed parameter directly into the Server layout */}
          <RequestBlogs searchParam={currentSearchTerm} />
        </Suspense>

      </div>
    </section>
  );
}