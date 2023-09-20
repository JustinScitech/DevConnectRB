'use client';
import React, { useState } from 'react';
import Navbar from '@/components/Search/Navbar';
import Sidebar from '@/components/Search/Sidebar';

export default function SidebarToggleWrapper({ children }) {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarVisible(prev => !prev);
  };

  return (
    <div className="flex flex-col">
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="flex flex-row">
        <div style={{ width: "100px"}}>
          {isSidebarVisible ? <Sidebar /> : null}
        </div>
        <div className="flex-grow text-center">
          {children}
        </div>
      </div>
    </div>
  );
}
