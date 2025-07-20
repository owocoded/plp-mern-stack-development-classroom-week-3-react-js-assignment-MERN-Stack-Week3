import React from 'react';

function Footer() {
    return (
        <footer className="bg-white dark:bg-gray-800 shadow mt-auto">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
                <p className="text-center text-gray-500 dark:text-gray-400">
                    © {new Date().getFullYear()} PLP Task Manager. All rights reserved.
                </p>
                <div className="space-x-4 mt-2 md:mt-0">
                    <a href="/" className="text-blue-600 dark:text-blue-400 hover:underline">Home</a>
                    <a href="/about" className="text-blue-600 dark:text-blue-400 hover:underline">About</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
