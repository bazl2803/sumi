import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { LucideBox, LucideMoreVertical } from "lucide-react";
import Image from "next/image";

export const ProductsTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-fit">Producto</TableHead>
          <TableHead className="text-center">Categoría</TableHead>
          <TableHead className="text-center">Marca</TableHead>
          <TableHead className="text-center">Existencia</TableHead>
          <TableHead className="text-center">Precio</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow className="select-none">
          <TableCell>
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col gap-1">
                <div className="flex flex-row items-center gap-4">
                  <div className="h-15 min-h-15 w-15 min-w-15 overflow-hidden rounded-xl border bg-white p-2">
                    <Image
                      className="object-cover mix-blend-multiply"
                      src="/9ccefc86-cd42-43c1-bd73-bf8ba834e561.jpg"
                      alt="product1"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="line-clamp-1">
                      Lámpara colgante moderna negro 3 luces
                    </span>
                    <span className="text-neutral-500">e27 21268</span>
                  </div>
                </div>
              </div>
            </div>
          </TableCell>
          <TableCell>
            <div className="text-center font-medium">Iluminación</div>
          </TableCell>
          <TableCell>
            <div className="text-center font-medium">N/A</div>
          </TableCell>
          <TableCell>
            <div className="flex flex-row items-center justify-center gap-2">
              <LucideBox />
              11
            </div>
          </TableCell>
          <TableCell className="text-center">${(100).toFixed(2)}</TableCell>
          <TableCell>
            <Button variant="ghost" size="icon">
              <LucideMoreVertical />
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
