import React from "react";
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[radial-gradient(ellipse_at_top,theme(colors.sky.500),theme(colors.blue.800))] flex items-center justify-center h-full">
      {children}
    </div>
  );
};

export default AuthLayout;
