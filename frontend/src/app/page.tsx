"use client"
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import { AppSidebar } from "./components/app-sidebar";


export default function Home() {
  return (
    <div className="flex">
      {/* <Sidebar />
      <div className="w-full">
        <header>
          <Header />
        </header>
        <main className="bg-gray-100 px-[40px] py-[40px] w-full">
          <Dashboard   />
        </main>
      </div> */}
      <SidebarProvider>
        <AppSidebar />
        <main>
          <SidebarTrigger />
          <Header />
        </main>
      </SidebarProvider>
    </div>
  );
}

// homework 
// install Headless ui and shadcn tohether ცალ ცალკე