import Sidebar from "@/components/sidebar/Sidebar";
import PageHeader from "@/components/ui/pageHeader/PageHeader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex bg-gradient-linear gap-2">
      <Sidebar />

      <section className="flex-1 space-y-2">
        <PageHeader />

        {children}
      </section>
    </div>
  );
}
