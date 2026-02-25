"use client";
import { useState } from 'react';
import {announcements} from "../assets/Announcement";
const AnnouncementChannel = () => {
  const [activeNews, setActiveNews] = useState<any>(null);

  return (
    <section className="bg-white py-20 px-4 mt-10 min-h-screen">
      {/* Centered Container for Large Screens, Full Width for Small */}
      <div className="max-w-3xl mx-auto w-full"> 
        
        <div className="flex items-center justify-between mb-10 border-b border-slate-100 pb-6">
          <div>
            <h2 className="text-[#1853ad] text-xs font-black tracking-[0.4em] uppercase">Live Channel</h2>
            <p className="text-3xl font-bold text-slate-900">Broadcasts</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#b24a53] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#b24a53]"></span>
            </span>
            <span className="text-[10px] font-bold uppercase text-[#6c788e]">Live Tracking</span>
          </div>
        </div>

        {/* The Update Feed */}
        <div className="space-y-3">
          {announcements.map((news) => (
            <div 
              key={news.id}
              onClick={() => setActiveNews(news)}
              className="group flex items-center bg-[#f7f7f6] p-4 md:p-6 rounded-xl cursor-pointer hover:bg-white hover:shadow-xl hover:ring-1 hover:ring-[#1853ad]/20 transition-all duration-300"
            >
              {/* Rectangular Accent */}
              <div className={`w-1.5 h-12 rounded-full mr-6 ${
                news.priority === 'high' ? 'bg-[#b24a53]' : 'bg-[#0c95d9]'
              }`} />

              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-1">
                  <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded ${
                    news.priority === 'high' ? 'bg-[#b24a53]/10 text-[#b24a53]' : 'bg-[#0c95d9]/10 text-[#0c95d9]'
                  }`}>
                    {news.tag}
                  </span>
                  <span className="text-[#6c788e] text-[10px] font-medium uppercase tracking-tighter">{news.time}</span>
                </div>
                <h3 className="text-slate-900 font-bold md:text-lg group-hover:text-[#1853ad] transition-colors">
                  {news.title}
                </h3>
              </div>

              <div className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[#1853ad] font-bold">Details →</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- MODAL POPUP --- */}
      {activeNews && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
          {/* Main Page Blur Backdrop */}
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-xl animate-in fade-in duration-300" 
            onClick={() => setActiveNews(null)}
          />
          
          <div className="relative bg-white w-full max-w-lg rounded-3xl p-8 md:p-12 shadow-2xl animate-in zoom-in duration-300">
            <button 
              onClick={() => setActiveNews(null)}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-900"
            >
              ✕
            </button>

            <div className="mb-6">
              <p className="text-[#b24a53] text-[10px] font-black uppercase tracking-widest mb-2 italic">Official Announcement</p>
              <h4 className="text-2xl md:text-3xl font-black text-[#1853ad] leading-tight mb-4">
                {activeNews.title}
              </h4>
              <div className="h-1 w-20 bg-[#0c95d9] mb-6" />
            </div>

            <p className="text-[#6c788e] text-lg leading-relaxed font-medium italic mb-8">
              {activeNews.details}
            </p>

            <div className="flex justify-between items-center pt-6 border-t border-slate-100">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">FINSA Public Relations</span>
              <button 
                onClick={() => setActiveNews(null)}
                className="bg-[#1853ad] text-white px-6 py-2 rounded-lg text-xs font-bold uppercase tracking-widest shadow-lg shadow-[#1853ad]/30"
              >
                Acknowledged
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AnnouncementChannel;