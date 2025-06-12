"use client"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from 'motion/react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Grid Effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-white/5 to-transparent rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex">
        <div className="max-w-6xl mx-auto text-center my-32">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 2 }
            }}
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-8 tracking-tight leading-none">
              Build the
              <br />
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Future</span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 2, delay: 1 }
            }}
          >
            <p className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed max-w-3xl mx-auto">
              Transform your ideas into reality with our cutting-edge platform. Experience the power of innovation at
              your fingertips.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 150, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 1, ease: 'circOut' }
            }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-medium transition-all duration-200 transform hover:scale-105 group"
            >
              Start Building
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border border-white/20 text-foreground hover:bg-white/5 hover:text-white px-8 py-4 text-lg transition-all duration-200 transform hover:scale-105"
            >
              View Demo
            </Button>
          </motion.div>

          {/* Trust Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 1, ease: 'circOut' }
            }}
            className="mb-16">
            <div className="inline-flex items-center space-x-2 text-sm text-gray-500">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Trusted by 10,000+ developers worldwide</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
