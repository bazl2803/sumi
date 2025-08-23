import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function Page() {
  return (
    <main className="rouded-xl overflow-hidden">
      <header className="flex h-14 w-full items-center justify-between gap-1 px-4 lg:gap-2 lg:px-6">
        <div className="flex flex-row items-center">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mx-2 data-[orientation=vertical]:h-4"
          />
          <h1 className="text-base font-medium">Consola de Administración</h1>
        </div>
      </header>
    </main>
  );
}
