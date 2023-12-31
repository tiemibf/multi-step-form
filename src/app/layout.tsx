import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({ weight: ["400", "500", "700"], subsets: ["latin"] });

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
            <body className={`${ubuntu.className} font-bold`}>
                <div className="bg-blue-50 min-h-screen flex justify-center items-center">
                    <main className="w-[940px] h-[600px] bg-white p-4 rounded-2xl flex">
                        {children}
                    </main>
                </div>
            </body>
        </html>
    );
}
