
import React from 'react';
import type { Translations } from '../types';

const FertilizationPlanner: React.FC<{ translations: Translations }> = ({ translations }) => {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-dark-green text-center">{translations.fertilizerTitle}</h2>
            <div className="bg-white p-6 rounded-xl shadow-md border border-green-100">
                <h3 className="font-bold text-dark-green mb-2">{translations.nextFertilizing}</h3>
                <p className="text-xl text-gray-700">In 5 days</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-green-100">
                <h3 className="font-bold text-dark-green mb-2">{translations.recommendation}</h3>
                <p className="text-lg text-gray-700">{translations.fertilizerType}</p>
                <p className="text-sm text-gray-500 mt-2">{translations.lastApplied}</p>
            </div>
            <img src="https://picsum.photos/400/200?random=2" alt="Fertilizer" className="rounded-xl object-cover w-full h-32" />
        </div>
    );
};

export default FertilizationPlanner;
