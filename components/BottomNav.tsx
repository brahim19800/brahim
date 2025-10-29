
import React from 'react';
import type { Section, Translations, Language } from '../types';
import { PlantingIcon, WateringIcon, FertilizingIcon, TrackerIcon, PestIcon, TipsIcon } from './Icons';

interface BottomNavProps {
    activeSection: Section;
    setActiveSection: (section: Section) => void;
    translations: Translations;
    language: Language;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeSection, setActiveSection, translations, language }) => {
    const navItems = [
        { id: 'planting', icon: PlantingIcon, label: translations.planting },
        { id: 'watering', icon: WateringIcon, label: translations.watering },
        { id: 'fertilizing', icon: FertilizingIcon, label: translations.fertilizing },
        { id: 'tracker', icon: TrackerIcon, label: translations.tracker },
        { id: 'pest', icon: PestIcon, label: translations.pest },
        { id: 'tips', icon: TipsIcon, label: translations.tips },
    ] as const;

    return (
        <nav className="absolute bottom-0 left-0 right-0 bg-white shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.1)] rounded-t-2xl px-2 py-3">
            <div className={`grid ${language === 'ar' ? 'grid-cols-3' : 'grid-cols-6'} md:grid-cols-6 gap-1`}>
                 {navItems.map(item => (
                    <button
                        key={item.id}
                        onClick={() => setActiveSection(item.id)}
                        className={`flex flex-col items-center justify-center p-1 rounded-lg transition-colors ${
                            activeSection === item.id ? 'text-dark-green' : 'text-gray-400'
                        }`}
                    >
                        <item.icon className="w-7 h-7 mb-1" />
                        <span className="text-xs font-medium">{item.label}</span>
                    </button>
                ))}
            </div>
        </nav>
    );
};

export default BottomNav;
