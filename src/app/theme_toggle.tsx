'use client'

import { Fade, Tooltip } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import React, { useState, useEffect } from 'react';

const ThemeToggle = ({ mobile = false }) => {
  const [theme, setTheme] = useState('light');
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      const menu = (mobile ? document.getElementById('mobileMenu') : document.getElementById('desktopMenu')) || new HTMLElement();
      if (window.getComputedStyle(menu).display !== 'none') setShowTooltip(true);
    }
  }, []);

  useEffect(() => {
    if (showTooltip) {
      const timer = setTimeout(() => {
        setShowTooltip(false);
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [showTooltip]);

  const toggleTheme = () => {
    showTooltip && setShowTooltip(false);
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.add('transition');
    window.requestAnimationFrame(() => {
      document.documentElement.classList.remove('transition');
    });
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <Tooltip 
      title="Toggle me!" 
      open={showTooltip} 
      arrow 
      placement="left"
      TransitionComponent={Fade}
      TransitionProps={{ timeout: 1500 }}
    >
      <div className="ml-auto">
          <FormControlLabel control={<Switch
            checked={theme === 'dark'}
            onChange={toggleTheme}
            color="default"
            inputProps={{ 'aria-label': 'theme toggle' }} />} 
            label={undefined}    
          />
      </div>
    </Tooltip>
  );
};

export default ThemeToggle;
