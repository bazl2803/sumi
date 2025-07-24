"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  LucideShare,
  LucideFilter,
  LucideBox,
  LucideMoreVertical,
  LucidePlus,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProductPage = () => (
  <div className="h-screen w-screen p-4">
    <Card className="h-full w-full">
      <CardHeader>
        <div className="flex items-center justify-between gap-2 px-4 py-0">
          <h1 className="text-3xl font-bold">Productos</h1>
          <div className="flex gap-2">
            <Button size="icon" variant="outline" disabled>
              <LucideShare />
            </Button>
            <Link href={"products/new"}>
              <Button>
                <LucidePlus /> Nuevo Producto
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex flex-nowrap gap-2 px-4 py-0">
          <Input placeholder="Buscar productos..." />
          <Button variant={"outline"} disabled>
            <LucideFilter />
            Filtrar
          </Button>
        </div>
      </CardHeader>

      <CardContent>
        <div className="p-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-fit">Producto</TableHead>
                <TableHead className="text-center">Marca</TableHead>
                <TableHead className="text-center">Visibilidad</TableHead>
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
                  <div className="text-center font-medium">N/A</div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-row items-center justify-center gap-2 text-center">
                    <Switch />
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-row items-center justify-center gap-2">
                    <LucideBox />
                    11
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  ${(100).toFixed(2)}
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon">
                    <LucideMoreVertical />
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  </div>
);

export default ProductPage;
