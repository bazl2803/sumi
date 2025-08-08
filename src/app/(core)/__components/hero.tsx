import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gray-100 py-12 md:py-24 lg:py-32">
      <div className="container mx-auto grid grid-cols-1 items-center gap-8 px-4 md:grid-cols-2">
        <div className="text-center md:text-left">
          <h1 className="mb-4 text-4xl font-bold text-gray-800">
            Soluciones Eléctricas para su Hogar o Proyecto
          </h1>
          <p className="mb-8 text-lg text-gray-700">
            Somos una tienda de materiales eléctricos. Encuentra todo lo que necesitas para tus proyectos con la mejor calidad.
          </p>
          <button className="rounded-md bg-blue-600 px-6 py-3 text-white transition duration-300 hover:bg-blue-700">
            Obtener Presupuesto
          </button>
        </div>
        <div className="flex justify-center md:justify-end">
          <Card className="overflow-hidden rounded-lg shadow-lg">
            <CardContent className="p-0">
              <Image
                src="/image-1.png"
                alt="Electrician working on a house"
                width={600}
                height={400}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hero;
