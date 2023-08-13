'use client'

import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
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
    <FormControlLabel control={<Switch
          checked={theme === 'dark'}
          onChange={toggleTheme}
          color="default"
          inputProps={{ 'aria-label': 'theme toggle' }} />} label={undefined}    />
  );
};

export default ThemeToggle;
