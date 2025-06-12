"use client"
import { Zap } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-black" />
            </div>
            <span className="text-xl font-semibold text-white">NexaFlow</span>
          </div>

          {/* Copyright */}
          <p className="text-gray-500">© 2024 NexaFlow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
