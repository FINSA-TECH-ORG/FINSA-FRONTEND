import React from 'react'
import Link from 'next/link';
import PartnerModal from './PartnerModal';
import Image from 'next/image';
export const Footer= () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      href: "https://www.linkedin.com/in/finsa-unilag-bb871035a/",
      svgPath: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
      // Strict Brand Color Matches:
      hoverBg: 'hover:bg-[#0077b5]',
      hoverBorder: 'hover:border-[#0077b5]',
    },
    {
      name: 'YouTube',
      href:   "https://www.youtube.com/@FINSAUNILAG",
      svgPath: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
      hoverBg: 'hover:bg-[#ff0000]',
      hoverBorder: 'hover:border-[#ff0000]',
    },
    {
      name: 'Instagram',
      href: "https://www.instagram.com/finsa_unilag/",
      svgPath: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
      hoverBg: 'hover:bg-[#e1306c]',
      hoverBorder: 'hover:border-[#e1306c]',
    },
    {
      name: 'Twitter / X',
      href:  "https://x.com/finsa_unilag",
      svgPath: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
      hoverBg: 'hover:bg-[#000000]',
      hoverBorder: 'hover:border-[#000000]',
    },
  ];
  return (
      <footer
      className="w-full pt-16 pb-10 px-6"
      style={{ backgroundColor: "#1853AD" }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand Column */}
          <div>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: "#F7FFF6" }}
            >
              FINSA
            </h2>

            <p
              className="text-sm leading-relaxed"
              style={{ color: "#F7FFF6" }}
            >
              Finance Student Association, University of Lagos.
              Coordinating academic structure, industry exposure,
              mentorship, and professional development for future-ready
              finance leaders.
            </p>
          </div>

          {/* Academic Structure */}
          <div>
            <h3
              className="text-sm font-semibold mb-4 uppercase tracking-wide"
              style={{ color: "#F7FFF6" }}
            >
              Academic Coordination
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" style={{ color: "#F7FFF6" }}>
                  Curriculum Structure
                </Link>
              </li>
              <li>
                <Link href="#" style={{ color: "#F7FFF6" }}>
                  Course Materials
                </Link>
              </li>
              <li>
                <Link href="#" style={{ color: "#F7FFF6" }}>
                  Academic Advisory
                </Link>
              </li>
            </ul>
          </div>

          {/* Industry & Mentorship */}
          <div>
            <h3
              className="text-sm font-semibold mb-4 uppercase tracking-wide"
              style={{ color: "#F7FFF6" }}
            >
              Industry Engagement
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" style={{ color: "#F7FFF6" }}>
                  Career Workshops
                </Link>
              </li>
              <li>
                <Link href="#" style={{ color: "#F7FFF6" }}>
                  Mentorship Programs
                </Link>
              </li>
              <li>
                <Link href="#" style={{ color: "#F7FFF6" }}>
                  Office Visits
                </Link>
              </li>
            </ul>
          </div>

          {/* Partnerships */}
          <div>
            <h3
              className="text-sm font-semibold mb-4 uppercase tracking-wide"
              style={{ color: "#F7FFF6" }}
            >
              Partnerships
            </h3>

            <p
              className="text-sm mb-4"
              style={{ color: "#F7FFF6" }}
            >  
              Collaborate with FINSA to connect with high-potential
              finance undergraduates and future professionals.
            </p>

          <PartnerModal/>
          </div>

        </div>

        {/* Divider */}
        <div
          className="mt-12 h-[1px] w-full"
          style={{ backgroundColor: "#6C788E" }}
        />

        {/* Bottom Section */}
        <div className="mt-6 w-full flex flex-col md:flex-row justify-between items-center gap-4">

          <p
            className="text-xs md:w-1/3 w-full"
            style={{ color: "#F7FFF6" }}
          >
            © {new Date().getFullYear()} FINSA — Finance Student Association, University of Lagos.
          </p>

        

        <div className="flex md:w-1/3 w-full items-center justify-left md:justify-right gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm border border-transparent hover:border-red-100 transition-all duration-200 group"
              aria-label={`Follow FINSA on ${social.name}`}
            >
              <svg
                className="w-5 h-5 fill-[#1853ad] group-hover:fill-[#b24a53] transition-colors duration-200"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d={social.svgPath} />
              </svg>
            </a>
          ))}
        </div>
          <a  href="https://webdevconstruct.tech" className="md:w-1/3 w-full flex justify-left md:justify-center ">
            <Image src={"/Trademark.png"} alt="WebDevConstruct Image" width={100} height={100} />
          </a>

        </div>

      </div>
    </footer>
  )
}


