import GlassPane from "@/components/GlassPane";

const DashboardRootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <head />
      <body className='h-screen w-screen rainvox-mesh p-6'>
        <GlassPane className='w-full h-full flex items-center justify-center' />
        {children}
      </body>
    </html>
  );
};

export default DashboardRootLayout;
