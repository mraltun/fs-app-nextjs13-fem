import GlassPane from "@/components/GlassPane";
import { Inter } from "@next/font/google";
import "@/styles/global.css";

const inter = Inter({
  variable: "--font-inter",
});

const AuthRootLayout = ({ children }) => {
  return (
    <html lang='en' className={inter.variable}>
      <head />
      <body className='h-screen w-screen rainbow-mesh p-6'>
        <GlassPane className='w-full h-full flex items-center justify-center' />
        {children}
      </body>
    </html>
  );
};

export default AuthRootLayout;
