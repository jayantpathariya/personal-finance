import { Sidebar } from "@/components/sidebar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-full">
      <main className="h-full p-4 pb-[65px] text-grey-900 md:pb-[90px] lg:pb-4 lg:pl-[316px]">
        {children}
      </main>
      <Sidebar />
    </div>
  );
};
export default MainLayout;
