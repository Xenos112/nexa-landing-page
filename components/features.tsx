"use client"
import { Zap, Shield, Users, Star } from "lucide-react"
import { motion } from 'motion/react'

const features = [
  {
    title: "Lightning Fast",
    description: "Optimized for speed with edge computing and global CDN distribution.",
    icon: Zap,
  },
  {
    title: "Secure by Default",
    description: "Built-in security features protect your applications and data automatically.",
    icon: Shield,
  },
  {
    title: "Infinite Scale",
    description: "Auto-scaling infrastructure that grows with your business needs.",
    icon: Users,
  },
  {
    title: "Real-time Analytics",
    description: "Comprehensive insights and monitoring for all your applications.",
    icon: Star,
  },
  {
    title: "Global Edge Network",
    description: "Deploy to 100+ locations worldwide for optimal performance.",
    icon: Zap,
  },
  {
    title: "Developer Experience",
    description: "Intuitive tools and APIs designed for modern development workflows.",
    icon: Users,
  },
]

export default function Features() {
  return (
    <section id="features" className="py-32 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 2 }
              }}
              className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Powerful
              <motion.span
                className="block bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Features
              </motion.span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 1, delay: 0.5 }
              }}
              className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to build, deploy, and scale your applications with confidence.
            </motion.p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: { duration: 0.5, delay: index / 2, ease: 'circInOut' }
                }}
                key={index} className="group" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 hover:bg-white/10 h-full">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
