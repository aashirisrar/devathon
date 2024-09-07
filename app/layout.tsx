import { Inter } from "next/font/google";
import RegisterModal from "@/components/modals/register-modal";
import LoginModal from "@/components/modals/login-modal";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Patient Co.",
  description: "Mangage your doctors and patients effectively.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RegisterModal />
        <LoginModal />
        {children}
      </body>
    </html>
  );
}
