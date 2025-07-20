import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from '../vite-project/src/components/Layout';
import TaskManager from '../vite-project/src/components/TaskManager';
import ApiData from '../vite-project/src/components/ApiData';

function Home() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Home Page</h2>
      <p>Welcome to the PLP Task Manager Home Page!</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">About</h2>
      <p>This is the About page for PLP Task Manager.</p>
    </div>
  );
}

function ThemeSwitcher({ theme, setTheme }) {
  return (
    <button
      className={`fixed bottom-6 right-6 px-4 py-2 rounded-full shadow-lg transition-all duration-300 ${theme === 'dark' ? 'bg-yellow-400 text-gray-900' : 'bg-gray-900 text-white'}`}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}

function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  // Apply theme to html tag
  React.useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <Router>
      <Layout>
        <ThemeSwitcher theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6 transition-all duration-300">
          <div className="flex flex-col items-center justify-center">
            <p className="text-lg mb-4">
              Edit <code className="font-mono bg-gray-200 dark:bg-gray-700 p-1 rounded">src/App.jsx</code> and save to test HMR
            </p>
            <div className="flex items-center gap-4 my-4">
              <button
                onClick={() => setCount((count) => count - 1)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-300"
              >
                -
              </button>
              <span className="text-xl font-bold">{count}</span>
              <button
                onClick={() => setCount((count) => count + 1)}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors duration-300"
              >
                +
              </button>
            </div>
            <div className="w-full">
              <TaskManager />
            </div>
          </div>
        </div>
        {/* API data display will go here */}
        <div className="mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6 transition-all duration-300">
          <h2 className="text-2xl font-bold mb-4">API Data</h2>
          <ApiData />
        </div>
      </Layout>
    </Router>
  );
}

export default App;