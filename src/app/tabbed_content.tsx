'use client'

import React, { useState } from 'react';

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

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow dark:bg-gray-900">
      <div className="flex border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`${
              activeTab === tab.id ? 'bg-blue-500 text-white' : 'text-blue-500'
            } hover:bg-blue-200 focus:outline-none px-4 py-2 rounded-t-lg`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4">{tabs.find((tab) => tab.id === activeTab)?.content}</div>
    </div>
  );
};

export default TabbedContent;