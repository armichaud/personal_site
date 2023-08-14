'use client'

import React, { useState } from 'react';
import ThemeToggle from './theme_toggle';
import MenuIcon from '@mui/icons-material/Menu';

type Tab = {
  id: string;
  label: string;
  content: React.ReactNode;
};

interface TabbedContentProps {
  tabs: Tab[];
}

const TabbedContent: React.FC<TabbedContentProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-white p-4 dark:bg-gray-900">
      <div className='sm:hidden flex'>
        <button
            onClick={toggleMenu}
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
        >
          <MenuIcon />
        </button>
        <ThemeToggle />
      </div>
      <div className="hidden sm:flex border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`${
              activeTab === tab.id ? 'bg-orange-500 text-white' : 'text-orange-500'
            } hover:bg-orange-200 focus:outline-none px-4 py-2 rounded-t-lg`}
          >
            {tab.label}
          </button>
        ))}
        <ThemeToggle />
      </div>
      {menuOpen && (
        <div className="pt-4 flex flex-col">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`${
                activeTab === tab.id ? 'bg-orange-500 text-white' : 'text-orange-500'
              } hover:bg-orange-200 focus:outline-none px-4 py-2 rounded-lg`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      )}
      <div className="p-4">{tabs.find((tab) => tab.id === activeTab)?.content}</div>
    </div>
  );
};

export default TabbedContent;