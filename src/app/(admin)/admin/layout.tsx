import { Card } from "@/components/ui/card";
import { Sidebar, SidebarContent } from "@/components/ui/sidebar";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-3">
      <Sidebar>
        <SidebarContent>
          
        </SidebarContent>
      </Sidebar>

      <Card className="col-start-2 col-end-4">{children}</Card>
    </div>
  );
};

export default AdminLayout;
