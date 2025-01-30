import React from 'react';


export default function About() {
    return (
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="../../public/placeholder.svg"
              alt="Ana García"
              className="w-80 h-80 rounded-full shadow-lg object-cover"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-3xl font-bold mb-4">Sobre mí</h2>
            <p className="text-lg mb-4">
              Hola, soy Ana García, fotógrafa profesional con más de 10 años de experiencia. Mi pasión por la fotografía
              comenzó cuando era niña y recibí mi primera cámara como regalo de cumpleaños.
            </p>
            <p className="text-lg mb-4">
              Desde entonces, he dedicado mi vida a capturar momentos especiales y contar historias a través de mis
              imágenes. Me especializo en fotografía de retratos, bodas y paisajes, siempre buscando la belleza en lo
              cotidiano y lo extraordinario.
            </p>
            <p className="text-lg">
              Mi enfoque es crear imágenes auténticas y emotivas que reflejen la esencia de mis sujetos y los momentos que
              comparten. Estoy emocionada de compartir mi trabajo contigo y espero tener la oportunidad de capturar tus
              momentos especiales.
            </p>
          </div>
        </div>
      </section>
    );
  }
  