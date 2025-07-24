import { ProductForm } from "@/modules/product/components/product-form";

export default function NewProductPage() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold my-4">Nuevo Producto</h1>
      <ProductForm />
    </div>
  );
}
