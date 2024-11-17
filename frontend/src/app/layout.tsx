"use client"
import { AppSidebar } from "@/components/Header/app-sidebar";
import Header from "@/components/Header/Header";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import "./styles/globals.css"
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        // <ClerkProvider>
            <html lang="en">
                <body>
                    <SidebarProvider >
                        <AppSidebar />
                        <div className=" flex flex-col w-full  bg-secondary100/35">
                            <header className="sm:px-[30px] px-[25px] bg-white">
                                <Header />
                            </header>
                            <main className="sm:px-[30px] px-[25px]">
                                {children}
                            </main>
                        </div>
                    </SidebarProvider>
                </body>
            </html >
        // </ClerkProvider>
    );
}
