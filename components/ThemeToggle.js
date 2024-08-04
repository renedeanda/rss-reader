import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.add(storedTheme);
    } else {
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className="flex items-center">
      <span className="text-gray-900 dark:text-gray-100 mr-2">Light</span>
      <button
        onClick={toggleTheme}
        className={`w-12 h-6 rounded-full ${theme === 'dark' ? 'bg-amber-500' : 'bg-gray-300'} relative transition-colors duration-300`}
      >
        <div
          className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${theme === 'dark' ? 'translate-x-6' : ''}`}
        ></div>
      </button>
      <span className="text-gray-900 dark:text-gray-100 ml-2">Dark</span>
    </div>
  );
};

export default ThemeToggle;
