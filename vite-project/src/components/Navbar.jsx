import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="bg-white dark:bg-gray-800 shadow mb-4">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <span className="font-bold text-xl">PLP Task Manager</span>
                <div className="space-x-4">
                    <Link to="/" className="text-blue-600 dark:text-blue-400 hover:underline">Home</Link>
                    <Link to="/about" className="text-blue-600 dark:text-blue-400 hover:underline">About</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
