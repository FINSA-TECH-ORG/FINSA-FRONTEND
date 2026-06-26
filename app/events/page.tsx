import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FINSA_EVENTS_DATA } from '../component/EventsModule';

export default function FinsaEventsPage() {
  return (
    <div className="min-h-screen bg-white py-32 mt-10 sm:py-24">
      {/* Page Header Header */}
      <div className="mx-auto max-w-4xl px-6 text-center mb-20 sm:mb-28">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          Association Activity & <span className="text-blue-600">Events Hub</span>
        </h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          Discover the landmark gatherings, skill bootcamps, and celebratory nights that shape our vibrant student community throughout the academic calendar.
        </p>
      </div>

      {/* Dynamic alternating Event Sections Matrix */}
      <div className="space-y-24 sm:space-y-36 max-w-7xl mx-auto px-6">
        {FINSA_EVENTS_DATA.map((event) => {
          const isReverse = event.layoutDirection === 'reverse';

          return (
            <section 
              key={event.id}
              className={`flex flex-col gap-12 lg:gap-16 items-center lg:flex-row ${
                isReverse ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Media Content Box */}
              <div className="w-full lg:w-1/2">
                <div className={`relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl transition-transform duration-300 hover:scale-[1.01] ${event.styles.cardBg}`}>
                  {/* Decorative Gradient Overlay Accent */}
                  <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${event.styles.gradientBg}`} />
                  
                  {/* Image implementation with dynamic fallbacks until variables are connected to Directus */}
                  <div className="w-full h-full bg-slate-100 flex items-center justify-center relative">
                    {/* <span className="text-sm font-medium text-slate-400">
                      [ {event.title} Display Image ]
                    </span> */}
                
                    <Image
                      src={event.imagePath}
                      alt={event.title}
                      fill
                      priority
                      className="object-cover object-center"
                      sizes="(max-w-7xl) 50vw, 100vw"
                    />
                   
                  </div>
                </div>
              </div>

              {/* Text Description Block */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <div>
                  <span className={`inline-flex items-center rounded-md px-3 py-1 text-xs font-semibold uppercase tracking-wider ${event.styles.badgeBg} ${event.styles.badgeText}`}>
                    FINSA Event Series
                  </span>
                </div>
                
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  {event.title}
                </h2>
                
                <p className={`mt-2 text-md font-medium ${event.styles.accentText}`}>
                  {event.tagline}
                </p>
                
                <p className="mt-6 text-base leading-7 text-slate-600">
                  {event.description}
                </p>

                {/* LinkedIn Reference Blockquote Box */}
                <div className="mt-6 border-l-4 border-slate-200 bg-slate-50/70 p-4 rounded-r-lg">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                    LinkedIn Broadcaster Outline
                  </p>
                  <p className="text-sm italic text-slate-600">
                  {`  "${event.linkedinText}"`}
                                  </p>
                </div>

                {/* Action Anchor CTA */}
                <div className="mt-8">
                  <Link
                    href={event.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex items-center justify-center rounded-lg bg-gradient-to-r ${event.styles.gradientBg} px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-95 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`}
                  >
                    View Official Press Coverage
                  </Link>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}