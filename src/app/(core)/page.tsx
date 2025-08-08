import { Card, CardContent } from "@/components/ui/card";
import { Collection } from "@/components/ui/collection";
import { MainNavbar } from "./__components/main-navbar";
import Hero from "./__components/hero";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <MainNavbar />
      <Hero />
    </div>
  );
}
