import Hero from "./components/Hero"
import AboutSection from "./components/About"
import Gallery from "./components/Gallery"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen w-full max-w-full">
      <Hero />
      <AboutSection />
      <Gallery />
      <Footer />
    </main>
  )
}

