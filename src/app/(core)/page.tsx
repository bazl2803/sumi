import Image from "next/image";
import { MainNavbar } from "./components/main-navbar";

export default function Home() {
  return (
    <div className="bg-neutral-100">
      <MainNavbar />
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-center text-4xl font-bold">
          Soluciones Eléctricas
          <br /> para su Hogar
          <br />o Proyecto
        </h1>
        <Image
          className="h-auto w-full mix-blend-multiply"
          src={"/image-1.png"}
          alt="hero"
          sizes="320px"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
}
