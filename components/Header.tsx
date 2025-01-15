// // Header.tsx
"use client";

import { useState, useEffect } from "react";
// import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed w-screen z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white/50 backdrop-blur-sm"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between"> */}
      {/* <div></div>
          <nav className="hidden md:block">
            <ul className="flex pl-16 space-x-8 text-base items-center">
              <li>
                <Link
                  href="/properties"
                  className="text-gray-800 hover:text-[#0C71C3] hover:font-semibold transition duration-300"
                >
                  Properties
                </Link>
              </li>
              <li>
                <Link
                  href="/renogratefeature"
                  className="text-gray-800 hover:text-[#0C71C3] hover:font-semibold transition duration-300"
                >
                  Renograte Features
                </Link>
              </li>
              <li>
                <Link
                  href="/listings"
                  className="text-gray-800 hover:text-[#0C71C3] hover:font-semibold transition duration-300"
                >
                  Listings
                </Link>
              </li>
              <Link href="/" className="flex items-center">
                <img
                  src="/logo.png"
                  alt="Renograte Logo"
                  // width={290}
                  // height={50}
                  className="h-10"
//                  quality={100}
                />
              </Link>
              <li>
                <Link
                  href="/marketanalysis"
                  className="text-gray-800 hover:text-[#0C71C3] hover:font-semibold transition duration-300"
                >
                  Market Analysis
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-800 hover:text-[#0C71C3] hover:font-semibold transition duration-300"
                >
                  About
                </Link>
                <li>
                <Link
                  href="/properties"
                  className="text-gray-800 hover:text-[#0C71C3] transition duration-300"
                >
                  Properties
                </Link>
              </li> 
              </li>
            </ul>
          </nav> */}

      <div className="flex items-center justify-end pr-20 gap-8 my-3 ">
        <Link href="/signup">
          <motion.button
            className="btn-primary px-6 py-2 bg-[#0C71C3] text-white rounded-lg hover:bg-[#0C71C3]/90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Sign Up
          </motion.button>
        </Link>
        <Link href="/login">
          <motion.button
            className="text-black hover:text-[#0C71C3]"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {/* <MagnifyingGlassIcon className="h-6 w-6" /> */}
            Log In
          </motion.button>
        </Link>
      </div>
    </motion.header>
  );
}

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
// import { motion } from "framer-motion";

// export default function Header() {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <motion.header
//       className={`fixed w-full z-50 transition-all duration-300 ${
//         isScrolled ? "bg-white shadow-md" : "bg-white bg-opacity-50 "
//       }`}
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div className="container mx-auto px-4 py-4 flex items-center justify-between">
//         <Link href="/">
//           <img src="/logo.png" alt="Renograte Logo" className="h-10" />
//         </Link>
//         <nav>
//           <ul className="flex space-x-6 text-lg">
//             <li>
//               <Link
//                 href="/properties"
//                 className="hover:text-[#0C71C3] transition duration-300"
//               >
//                 Properties
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/renovations"
//                 className="hover:text-[#0C71C3] transition duration-300"
//               >
//                 Renovations
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/market-analysis"
//                 className="hover:text-[#0C71C3] transition duration-300 "
//               >
//                 Market Analysis
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/about"
//                 className="hover:text-[#0C71C3] transition duration-300"
//               >
//                 About
//               </Link>
//             </li>
//           </ul>
//         </nav>

//       </div>
//     </motion.header>
//   );
// }
