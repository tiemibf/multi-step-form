import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Multi-Step Form",
    description: "MultiStep Form Challenge by Front End Mentor"
};

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="bg-blue-50 min-h-screen flex justify-center items-center">
                    <main className="w-[940px] h-[600px] bg-white p-4 rounded-2xl">
                        <aside className="bg-[url('../assets/bg-sidebar.svg')] bg-cover flex w-[274px] h-full rounded-xl"></aside>
                    </main>
                </div>
            </body>
        </html>
    );
}
