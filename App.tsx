
import React, { useState, useEffect } from 'react';
import type { Language, Section } from './types';
import { translations } from './constants';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import PlantingGuide from './components/PlantingGuide';
import SmartWatering from './components/SmartWatering';
import FertilizationPlanner from './components/FertilizationPlanner';
import GrowthTracker from './components/GrowthTracker';
import PestDetection from './components/PestDetection';
import DailyTips from './components/DailyTips';

const App: React.FC = () => {
    const [language, setLanguage] = useState<Language>('en');
    const [activeSection, setActiveSection] = useState<Section>('tracker');

    useEffect(() => {
        document.documentElement.lang = language;
        document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
        document.body.className = language === 'ar' ? 'font-cairo' : 'font-poppins';
    }, [language]);

    const renderSection = () => {
        const props = { translations: translations[language] };
        switch (activeSection) {
            case 'planting':
                return <PlantingGuide {...props} />;
            case 'watering':
                return <SmartWatering {...props} />;
            case 'fertilizing':
                return <FertilizationPlanner {...props} />;
            case 'tracker':
                return <GrowthTracker {...props} />;
            case 'pest':
                return <PestDetection {...props} language={language}/>;
            case 'tips':
                return <DailyTips {...props} />;
            default:
                return <GrowthTracker {...props} />;
        }
    };

    return (
        <div className="w-full min-h-screen bg-beige flex justify-center items-center p-2 md:p-4">
            <div className="w-full max-w-sm h-[800px] max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col relative">
                <Header
                    language={language}
                    setLanguage={setLanguage}
                    translations={translations[language]}
                />
                <main className="flex-grow overflow-y-auto p-4 bg-beige/50 pb-24">
                    {renderSection()}
                </main>
                <BottomNav
                    activeSection={activeSection}
                    setActiveSection={setActiveSection}
                    translations={translations[language]}
                    language={language}
                />
            </div>
        </div>
    );
};

export default App;
