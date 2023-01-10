import clsx from "clsx";
import Sidebar from "@/components/Sidebar";
import GlassPane from "@/components/GlassPane";
import { Inter } from "@next/font/google";
import "@/styles/global.css";

const inter = Inter({
  variable: "--font-inter",
});

const DashboardRootLayout = ({ children }) => {
  return (
    <html lang='en' className={clsx(inter.variable, "dark")}>
      <head />
      <body className='h-screen w-screen candy-mesh p-6'>
        <GlassPane className='w-full h-full p-6 flex align-center container mx-auto'>
          <Sidebar />
          <main className='w-full pl-6 h-full'>{children}</main>
        </GlassPane>
        <div id='modal'></div>
      </body>
    </html>
  );
};

export default DashboardRootLayout;
