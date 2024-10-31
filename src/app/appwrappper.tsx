"use client";
import { Toaster } from "@/components/ui/toaster";
import { useAppSelector } from "@/hooks/hook";
import StoreProvider from "@/store/store";
import { useEffect } from "react";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const { isdarkMode } = useAppSelector((state) => state.global);

  useEffect(() => {
    if (isdarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isdarkMode]);

  return (
    <div className="text-primary-600 flex min-h-screen w-full">
      <main className="dark:bg-dark-primary flex w-full flex-col">
        {children}
      </main>
    </div>
  );
};

const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <Toaster />
      <AppLayout>{children}</AppLayout>
    </StoreProvider>
  );
};

export default AppWrapper;
