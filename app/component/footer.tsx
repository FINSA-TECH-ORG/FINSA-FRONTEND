import React from 'react'
import Link from 'next/link'
export const Footer= () => {
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

            <Link
              href="#"
              className="inline-block px-5 py-2 rounded-md text-sm font-semibold"
              style={{
                backgroundColor: "#B24A53",
                color: "#FFFFFF"
              }}
            >
              Partner With Us
            </Link>
          </div>

        </div>

        {/* Divider */}
        <div
          className="mt-12 h-[1px] w-full"
          style={{ backgroundColor: "#6C788E" }}
        />

        {/* Bottom Section */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p
            className="text-xs"
            style={{ color: "#F7FFF6" }}
          >
            © {new Date().getFullYear()} FINSA — Finance Student Association, University of Lagos.
          </p>

          <div className="flex gap-6 text-xs">
            <Link href="#" style={{ color: "#F7FFF6" }}>
              Privacy Policy
            </Link>
            <Link href="#" style={{ color: "#F7FFF6" }}>
              Terms of Use
            </Link>
            <Link href="#" style={{ color: "#F7FFF6" }}>
              Contact
            </Link>
          </div>

        </div>

      </div>
    </footer>
  )
}


