import { ProductForm } from "@/products/components/product-form";

export default function NewProductPage() {
  return (
    <div className="container mx-auto max-w-xl space-y-4 p-4">
      <h1 className="text-2xl font-bold">Nuevo Producto</h1>
      <ProductForm />
    </div>
  );
}
