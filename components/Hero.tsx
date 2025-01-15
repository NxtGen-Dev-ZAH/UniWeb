//Hero.tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
//import Image from "next/image";
import { ChevronDown, Search, Home, TrendingUp, Link } from "lucide-react";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const features = [
    {
      icon: Search,
      title: "Smart Search",
      description: "Find properties with potential",
    },
    {
      icon: Home,
      title: "Renovation Plans",
      description: "Expert renovation guidance",
    },
    {
      icon: TrendingUp,
      title: "ROI Analysis",
      description: "Investment return forecasts",
    },
  ];

  return (
    <section className="relative  w-screen min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y }}
        initial={{ y: 0 }} // Ensure it starts visible
        animate={{ y: 100 }} // Example animation
      >
        <img
          src="/imagemain.png"
          alt="Modern home interior"
          className="object-fill w-full h-full"
          //quality={100}
        />
      </motion.div>

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 z-10"></div>

      <div className="container mx-auto px-4 z-20">
        <motion.div
          className="max-w-4xl mx-auto text-center text-white"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          <motion.div variants={fadeInUpVariants}>
            <h1 className="text-3xl md:text-5xl lg:text-7x font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
              Transform Your Real Estate Investment
            </h1>
          </motion.div>

          <motion.p
            variants={fadeInUpVariants}
            className="text-base md:text-lg lg:text-xl mb-8 text-gray-200"
          >
            Discover properties with renovation potential and maximize your
            returns with Renograte's integrated approach to real estate
            transformation.
          </motion.p>

          <motion.div
            variants={fadeInUpVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <motion.button
              className="px-8 py-4 bg-white text-[#0C71C3] rounded-lg font-semibold text-lg hover:bg-[#0C71C3] hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => (window.location.href = "/properties")}
            >
              Explore Properties
            </motion.button>

            <motion.button
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => (window.location.href = "/about")}
            >
              How It Works
            </motion.button>
          </motion.div>

          <motion.div
            variants={fadeInUpVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <feature.icon className="w-10 h-10 mb-4 mx-auto text-white" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-cyan-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-white" />
      </motion.div>
    </section>
  );
}
