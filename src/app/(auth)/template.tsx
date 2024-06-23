'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { name: "Login", href: "/login" },
  { name: "Register", href: "/register" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function Layout({ 
  children 
}: { 
  children: React.ReactNode 
}) {

  const pathname = usePathname();
  const [input, setInput] = useState("");
  
  return (
    <div className="border-solid border-2 border-indigo-500 rounded p-5 m-3 bg-gray-200 ">
      <div>
        <input className="m-4" value={input} onChange={(e) => setInput(e.target.value)} />
      </div>  
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);
        const linkStyle =
          "p-1 rounded shadow-md m-4 bg-lime-200";
        return (
          <Link
            className={isActive ? `${linkStyle} font-bold text-blue-500` : linkStyle}
            key={link.name}
            href={link.href}
            >
            {link.name}
          </Link>
        );
      })}
      {children}
    </div>
  );
}