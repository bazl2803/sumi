import prisma from "@/lib/prisma";

export async function createProduct(values: any) {
  "use server";

  await prisma.product.create({
    data: {
      ...values,
    },
  });
}
