import Footer from '@/components/Footer';
import Navbar from '@/components/navbar/Navbar';
import ReactQueryProvider from '@/providers/ReactQueryProvider';
import React from 'react';

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <ReactQueryProvider> 
    <div className="text-gray-500">
   
    <Navbar/>
      <main className="  pt-12 min-h-screen">
        
            {children}
                
      
      </main>
      {/* footer  */}
      <div>
      <Footer/>
      </div>
      </div>
      </ReactQueryProvider> 
  );
};

export default layout;