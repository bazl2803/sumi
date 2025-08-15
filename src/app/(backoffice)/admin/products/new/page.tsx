import { ProductForm } from "@/products/components/product-form";

export default function NewProductPage() {
  return (
    <main className="p-4">
      <header className="sticky top-0 z-40 flex justify-between bg-white/70 p-4 backdrop-blur">
        <h1 className="text-xl font-bold">Nuevo Producto</h1>
      </header>
      <div className="p-4">
        <ProductForm />
      </div>
    </main>
  );
}
