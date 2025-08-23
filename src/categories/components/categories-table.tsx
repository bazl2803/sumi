import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { LucidePackage, LucideEdit, LucideTrash2 } from "lucide-react";

export const CategoriesTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Categoría</TableHead>
          <TableHead className="text-center">Productos</TableHead>
          <TableHead className="text-center">Valor en Inventario</TableHead>
          <TableHead className="text-center">Secciones</TableHead>
          <TableHead className="text-end">Acciones</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>
            <div className="flex flex-row items-center gap-2">
              <div className="h-12 w-12 rounded-2xl bg-neutral-300" />
              <span>Categoría 1</span>
            </div>
          </TableCell>
          <TableCell className="text-center">
            <div className="flex flex-row items-center justify-center gap-2">
              <LucidePackage />1
            </div>
          </TableCell>
          <TableCell className="text-center">$100</TableCell>
          <TableCell className="text-center">3</TableCell>
          <TableCell>
            <div className="flex flex-row items-center justify-end gap-2">
              <Button variant={"outline"}>
                <LucideEdit />
                Editar
              </Button>
              <Button variant={"destructive"}>
                <LucideTrash2 />
                Eliminar
              </Button>
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
