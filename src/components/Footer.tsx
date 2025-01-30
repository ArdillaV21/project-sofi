import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa"
import React from "react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4">Ana García</h3>
            <p className="text-gray-400">Fotógrafa Profesional</p>
            <p className="mt-4 text-sm text-gray-400">Capturando momentos, creando recuerdos desde 2010</p>
          </div>
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-4">Contacto</h4>
            <p className="mb-2">
              <a href="mailto:ana@ejemplo.com" className="hover:text-blue-400 transition duration-300">
                ana@ejemplo.com
              </a>
            </p>
            <p className="mb-2">
              <a href="tel:+34123456789" className="hover:text-blue-400 transition duration-300">
                +34 123 456 789
              </a>
            </p>
            <p>Madrid, España</p>
          </div>
          <div className="text-center md:text-right">
            <h4 className="text-xl font-semibold mb-4">Sígueme</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              <a href="#" className="hover:text-blue-400 transition duration-300">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="hover:text-blue-400 transition duration-300">
                <FaFacebookF size={24} />
              </a>
              <a href="#" className="hover:text-blue-400 transition duration-300">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Ana García Fotografía. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

