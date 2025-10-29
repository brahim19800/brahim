
import React from 'react';
import type { Translations } from '../types';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Week 1', height: 5 },
    { name: 'Week 2', height: 8 },
    { name: 'Week 3', height: 13 },
    { name: 'Week 4', height: 19 },
    { name: 'Week 5', height: 25 },
    { name: 'Week 6', height: 32 },
];

const GrowthTracker: React.FC<{ translations: Translations }> = ({ translations }) => {
    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-bold text-dark-green text-center">{translations.growthTitle}</h2>
            <div className="bg-white p-4 rounded-xl shadow-md border border-green-100 w-full h-64">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                        <XAxis dataKey="name" tick={{ fill: '#3A6B35' }} />
                        <YAxis label={{ value: translations.height, angle: -90, position: 'insideLeft', fill: '#3A6B35' }} tick={{ fill: '#3A6B35' }} />
                        <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc' }} />
                        <Line type="monotone" dataKey="height" stroke="#3A6B35" strokeWidth={3} activeDot={{ r: 8 }} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <img src="https://picsum.photos/400/200?random=3" alt="Growing Plant" className="rounded-xl object-cover w-full h-32" />
        </div>
    );
};

export default GrowthTracker;
