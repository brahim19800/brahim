
import React from 'react';
import type { Translations } from '../types';

interface PlantingGuideProps {
    translations: Translations;
}

const PlantingGuide: React.FC<PlantingGuideProps> = ({ translations }) => {
    const steps = [
        { title: translations.plantingStep1, description: translations.plantingStep1Desc, icon: '🌿' },
        { title: translations.plantingStep2, description: translations.plantingStep2Desc, icon: ' मिट्टी' },
        { title: translations.plantingStep3, description: translations.plantingStep3Desc, icon: '🌱' },
        { title: translations.plantingStep4, description: translations.plantingStep4Desc, icon: '💧' },
    ];

    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-bold text-dark-green text-center">{translations.plantingTitle}</h2>
            <div className="space-y-4">
                {steps.map((step, index) => (
                    <div key={index} className="bg-white p-4 rounded-xl shadow-md border border-green-100 flex items-start gap-4">
                        <div className="text-3xl bg-soft-green/50 rounded-full p-2">{step.icon}</div>
                        <div>
                            <h3 className="font-bold text-dark-green">{step.title}</h3>
                            <p className="text-gray-600 text-sm">{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PlantingGuide;
