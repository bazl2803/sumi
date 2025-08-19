import { Button } from "@/components/ui/button";
import { ProductForm } from "@/products/components/product-form";
import { LucideChevronLeft } from "lucide-react";
import Link from "next/link";

export default function NewProductPage() {
  return (
    <main>
      <header className="sticky top-0 z-40 flex h-14 items-center gap-2 bg-white/70 p-4 backdrop-blur md:rounded-t-xl md:p-6 lg:p-8">
        <Link href={"/admin/products"}>
          <Button variant="ghost">
            <LucideChevronLeft />
          </Button>
        </Link>
        <h1 className="text-base font-medium">Nuevo Producto</h1>
      </header>
      <div className="container p-4 md:p-6 lg:p-8">
        <ProductForm />
      </div>
    </main>
  );
}
