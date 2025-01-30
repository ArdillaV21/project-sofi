"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

type Category = {
  id: string
  name: string
  description?: string
}

type Image = {
  id: number
  src: string
  category: string
  title: string
}

const categories: Category[] = [
  { id: "all", name: "Todos" },
  {
    id: "portraits",
    name: "Retratos",
    description: "Capturando la esencia y personalidad de cada individuo en imágenes que cuentan historias.",
  },
  {
    id: "weddings",
    name: "Bodas",
    description: "Inmortalizando los momentos más especiales y emotivos de tu día más importante.",
  },
  {
    id: "landscapes",
    name: "Paisajes",
    description: "Revelando la belleza y majestuosidad de la naturaleza a través de mi lente.",
  },
]

const images: Image[] = [
  { id: 1, src: "/placeholder.svg?height=300&width=300", category: "portraits", title: "Retrato en el parque" },
  { id: 2, src: "/placeholder.svg?height=300&width=300", category: "weddings", title: "Boda en la playa" },
  { id: 3, src: "/placeholder.svg?height=300&width=300", category: "landscapes", title: "Atardecer en la montaña" },
  { id: 4, src: "/placeholder.svg?height=300&width=300", category: "portraits", title: "Retrato en estudio" },
  { id: 5, src: "/placeholder.svg?height=300&width=300", category: "weddings", title: "Ceremonia en la iglesia" },
  { id: 6, src: "/placeholder.svg?height=300&width=300", category: "landscapes", title: "Cascada en el bosque" },
]

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [selectedImage, setSelectedImage] = useState<Image | null>(null)

  const filteredImages =
    selectedCategory === "all" ? images : images.filter((image) => image.category === selectedCategory)

  const currentCategory = categories.find((cat) => cat.id === selectedCategory)

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Galería</h2>
        <div className="flex justify-center mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`mx-2 px-6 py-2 rounded-full transition duration-300 ${
                selectedCategory === category.id ? "bg-blue-500 text-white" : "bg-white text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        {currentCategory && currentCategory.id !== "all" && (
          <p className="text-xl text-gray-600 mb-8 text-center max-w-2xl mx-auto">{currentCategory.description}</p>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative cursor-pointer" onClick={() => setSelectedImage(image)}>
                  <img
                    src={image.src || "../../public/placeholder.svg"}
                    alt={image.title}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover transition-transform duration-300 transform hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <h4 className="text-white text-xl font-semibold text-center px-4">{image.title}</h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div 
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="max-w-3xl max-h-full p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src || "/placeholder.svg"}
              alt={selectedImage.title}
              width={600}
              height={600}
              className="w-full h-full object-contain"
            />
            <h3 className="text-white text-2xl font-semibold mt-4 text-center">{selectedImage.title}</h3>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}