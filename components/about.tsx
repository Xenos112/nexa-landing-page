"use client"
import { Users, Star, Shield } from "lucide-react"
import { motion } from "motion/react"

const stats = [
  {
    icon: Users,
    value: "10M+",
    description: "Active users",
    delay: "delay-100",
  },
  {
    icon: Star,
    value: "99.9%",
    description: "Uptime guaranteed",
    delay: "delay-200",
  },
  {
    icon: Shield,
    value: "100%",
    description: "Enterprise-grade security",
    delay: "delay-300",
  },
]

export default function About() {
  return (
    <section id="about" className="py-32 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="animate-fade-in-up">
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: { duration: 2 }
                }}
                className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                Why Choose
                <span className="block bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  NexaFlow
                </span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: { duration: 1, delay: 0.5 }
                }}
                className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                We're pioneering the next generation of digital solutions with uncompromising quality and performance.
              </motion.p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index} className={`animate-fade-in-up ${stat.delay} group`}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{
                    opacity: 1,
                    transition: { duration: 0.5, delay: index, ease: 'circInOut' }
                  }}
                  className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 hover:bg-white/10">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors duration-300">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-white">{stat.value}</h3>
                  <p className="text-gray-400 text-lg">{stat.description}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
