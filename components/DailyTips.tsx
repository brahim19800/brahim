
import React from 'react';
import type { Translations } from '../types';

const DailyTips: React.FC<{ translations: Translations }> = ({ translations }) => {
    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-bold text-dark-green text-center">{translations.tipsTitle}</h2>
            <div className="bg-cream p-6 rounded-xl shadow-md border border-yellow-200 relative">
                <div className="absolute top-2 right-2 text-4xl opacity-20 rtl:right-auto rtl:left-2">💡</div>
                <p className="text-lg text-gray-800 leading-relaxed z-10 relative">{translations.tipContent}</p>
            </div>
            <img src="https://picsum.photos/400/200?random=4" alt="Healthy Plant" className="rounded-xl object-cover w-full h-48" />
        </div>
    );
};

export default DailyTips;
