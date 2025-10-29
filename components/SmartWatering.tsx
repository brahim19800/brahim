
import React from 'react';
import type { Translations } from '../types';

const SmartWatering: React.FC<{ translations: Translations }> = ({ translations }) => {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-dark-green text-center">{translations.wateringTitle}</h2>
            <div className="bg-white p-6 rounded-xl shadow-md border border-green-100 text-center">
                <p className="text-gray-500">{translations.nextWatering}</p>
                <div className="text-4xl font-bold text-dark-green my-2">
                    2 <span className="text-2xl">{translations.days}</span> 10 <span className="text-2xl">{translations.hours}</span>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl shadow-md border border-green-100 text-center">
                    <p className="font-bold text-dark-green">{translations.soilMoisture}</p>
                    <p className="text-2xl font-semibold text-blue-500">65%</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-md border border-green-100 text-center">
                    <p className="font-bold text-dark-green">{translations.weatherForecast}</p>
                    <p className="text-2xl font-semibold text-orange-400">☀️ {translations.sunny}</p>
                </div>
            </div>
             <img src="https://picsum.photos/400/200?random=1" alt="Watering" className="rounded-xl object-cover w-full h-32" />
        </div>
    );
};

export default SmartWatering;
