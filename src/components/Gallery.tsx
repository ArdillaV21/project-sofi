"use client"

import { useState } from "react"
import { Dialog, DialogContent } from "../components/ui/dialog"
import { cn } from "../lib/utils"
import { motion, AnimatePresence } from "framer-motion"

interface Photo {
  id: number
  src: string
  alt: string
  category: string
}



const categoryDescriptions: Record<string, string> = {
  Todos:
    "Explora mi colección completa de fotografías, desde retratos íntimos hasta paisajes impresionantes. Cada imagen cuenta una historia única y especial.",
  Retratos:
    "Capturo la esencia y personalidad de cada persona. Me especializo en crear un ambiente cómodo donde las emociones naturales florezcan frente a la cámara.",
  Bodas:
    "Documento los momentos más especiales de tu día. Desde las miradas cómplices hasta las celebraciones más emotivas, cada detalle quedará inmortalizado.",
  Paisajes:
    "La naturaleza nos regala escenas maravillosas. A través de mi lente, busco transmitir la paz y la grandeza de los paisajes que nos rodean.",
}

// Sample photos array - replace with your actual photos
const photos: Photo[] = [
  { id: 1, src: "/placeholder.svg?height=600&width=800", alt: "Fotografía 1", category: "Retratos" },
  { id: 2, src: "/placeholder.svg?height=600&width=800", alt: "Fotografía 2", category: "Bodas" },
  { id: 3, src: "/placeholder.svg?height=600&width=800", alt: "Fotografía 3", category: "Paisajes" },
  // Add more photos as needed
]

const categories = ["Todos", "Retratos", "Bodas", "Paisajes"]

export function PhotoGallery() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)

  const filteredPhotos =
    selectedCategory === "Todos" ? photos : photos.filter((photo) => photo.category === selectedCategory)

  return (
    <section className="w-full py-12 bg-[#def2fd]">
      <div className="container px-4 mx-auto">
        <h2 className="text-5xl md:text-7xl font-bold text-center mb-8">
          <span className="text-[#87CEEB]">Mi </span>
          <span className=" text-gray-900">Galería</span>
        </h2>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "px-4 py-2 rounded-full transition-colors",
                selectedCategory === category ? "bg-[#87CEEB] text-white" : "bg-white text-gray-600 hover:bg-gray-100",
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Category Description */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center max-w-2xl mx-auto mb-8 text-gray-600"
          >
            <p>{categoryDescriptions[selectedCategory]}</p>
          </motion.div>
        </AnimatePresence>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {filteredPhotos.map((photo) => (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-[4/3] overflow-hidden rounded-lg cursor-zoom-in group"
                onClick={() => setSelectedPhoto(photo)}
              >
                <img
                  src={photo.src || "/placeholder.svg"}
                  alt={photo.alt}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-medium">Ver foto</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Lightbox Dialog */}
        <Dialog open={!!selectedPhoto} onOpenChange={() => setSelectedPhoto(null)}>
          <DialogContent className="max-w-4xl bg-black/95 border-none">
            {selectedPhoto && (
              <div className="relative aspect-[4/3] w-full">
                <img
                  src={selectedPhoto.src || "/placeholder.svg"}
                  alt={selectedPhoto.alt}
                  className="object-contain"
                />
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}

