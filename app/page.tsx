import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Features from "@/components/features"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function LandingPage() {

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Features />
      <Contact />
      <Footer />
    </div>
  )
}
