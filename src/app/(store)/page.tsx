import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col">
      <header className="flex flex-col gap-4 p-4 sm:p-8">
        <Image
          className="h-8 w-fit"
          src="logo-alt.svg"
          alt="logo"
          width={100}
          height={100}
        />
        <h1 className="text-3xl font-bold sm:text-4xl">
          Soluciones Eléctricas
          <br /> para su Hogar o Proyecto
        </h1>
      </header>

      <div className="p-4 sm:p-8">
        <h3 className="mb-4 text-xl font-semibold">Categorías</h3>
        <h3 className="mb-4 text-xl font-semibold">
          Lo más Destacado
        </h3>
        <h3 className="mb-4 text-xl font-semibold">Más Cotizados</h3>
        <h3 className="mb-4 text-xl font-semibold">Nuestras Marcas</h3>
        <h3 className="mb-4 text-xl font-semibold">Recien Llegados</h3>
      </div>
    </main>
  );
}
