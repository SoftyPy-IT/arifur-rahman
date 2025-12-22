import Footer from "@/components/Footer";
import Navbar from "@/components/navbar/Navbar";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <ReactQueryProvider>
      <div className="text-black">
        <Navbar />
        <main className="">{children}</main>
        <Footer />
      </div>
    </ReactQueryProvider>
  );
};

export default layout;
