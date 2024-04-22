
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./Providers";

export const metadata = {
  title: "Auth",
  description: "NextJs Authentication",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
        <Toaster />
      </body>
    </html>
  );
}
