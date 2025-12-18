"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github, Linkedin, Mail } from "lucide-react";
import "./globals.css";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className="bg-gray-200 text-black font-[Tahoma]">
        <nav className="w-full bg-[#2158d1] border-b border-black text-white font-['Trebuchet MS'] shadow-[inset_0_-2px_#000] text-base">
          <div className="flex items-center justify-between px-3 py-[10px]">
            
            <div className="flex items-center gap-3">
              {navItems.map(({ name, href }) => {
                const isActive = pathname === href;
                return (
                  <Link
                    key={name}
                    href={href}
                    className={`px-4 py-[6px] border border-black rounded-sm transition-all ${
                      isActive
                        ? "bg-white text-[#2158d1] font-bold shadow-[inset_2px_2px_#999]"
                        : "bg-[#3b78dd] hover:bg-white hover:text-[#2158d1] hover:shadow-[inset_2px_2px_#999]"
                    }`}
                  >
                    {name}
                  </Link>
                );
              })}
            </div>
           
            <div className="flex items-center gap-3 ml-4">
              {[
                {
                  href: "mailto:affiqem@gmail.com",
                  Icon: Mail,
                  label: "Email",
                },
                {
                  href: "https://github.com/affiq23",
                  Icon: Github,
                  label: "GitHub",
                },
                {
                  href: "https://www.linkedin.com/in/affiq-mohammed-920bb0201/",
                  Icon: Linkedin,
                  label: "LinkedIn",
                },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="px-4 py-[6px] border border-black rounded-sm bg-[#3b78dd] text-white transition-all hover:bg-white hover:text-[#2158d1] hover:shadow-[inset_2px_2px_#999]"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </nav>

        <div className="pt-20 max-w-6xl mx-auto p-6">{children}</div>
      </body>
    </html>
  );
}
