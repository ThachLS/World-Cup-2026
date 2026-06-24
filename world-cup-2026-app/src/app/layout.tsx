import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <header>
                <Navigation />
            </header>
            <main className="flex-grow">
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Layout;