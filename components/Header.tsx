
import React from 'react';
import type { Language, Translations } from '../types';

interface HeaderProps {
    language: Language;
    setLanguage: (lang: Language) => void;
    translations: Translations;
}

const Header: React.FC<HeaderProps> = ({ language, setLanguage, translations }) => {
    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'ar' : 'en');
    };

    return (
        <header className="bg-white shadow-md p-4 flex justify-between items-center flex-shrink-0 z-10">
             <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-dark-green" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h10a3 3 0 013 3v5a.997.997 0 01-.293-.707zM10 2a4 4 0 00-4 4v.281l4 4 4-4V6a4 4 0 00-4-4z" clipRule="evenodd" />
                </svg>
                <h1 className="text-xl font-bold text-dark-green">{translations.appName}</h1>
            </div>
            <button
                onClick={toggleLanguage}
                className="bg-soft-green text-dark-green font-bold py-2 px-4 rounded-full transition-transform transform hover:scale-105"
            >
                {language === 'en' ? 'AR' : 'EN'}
            </button>
        </header>
    );
};

export default Header;
