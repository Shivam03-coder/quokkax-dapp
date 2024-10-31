import AppHeader from "@/components/shared/apphaeder";
import React from "react";

const Rootlayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="h-full w-full">
      <AppHeader />
      {children}
    </div>
  );
};

export default Rootlayout;
