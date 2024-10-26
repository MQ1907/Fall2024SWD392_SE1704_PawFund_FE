'use client';
import { AntdRegistry } from "@ant-design/nextjs-registry";
import StoreProvider from './StoreProvider'; 
export default function ShelterStaffLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AntdRegistry>
      <StoreProvider>
        {children}
      </StoreProvider>
    </AntdRegistry>
  );
}