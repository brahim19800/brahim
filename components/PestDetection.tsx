
import React, { useState, useRef } from 'react';
import { analyzePlantImage } from '../services/geminiService';
import type { Language, Translations } from '../types';

interface PestDetectionProps {
    translations: Translations;
    language: Language;
}

const PestDetection: React.FC<PestDetectionProps> = ({ translations, language }) => {
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const [analysis, setAnalysis] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = (reader.result as string).split(',')[1];
                setImageSrc(reader.result as string);
                setAnalysis('');
                setError('');
                handleAnalysis(base64String, file.type);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleAnalysis = async (base64Image: string, mimeType: string) => {
        setIsLoading(true);
        setError('');
        try {
            const result = await analyzePlantImage(base64Image, mimeType, language);
            setAnalysis(result);
        } catch (err) {
            setError(translations.error);
        } finally {
            setIsLoading(false);
        }
    };

    const triggerFileInput = () => {
        fileInputRef.current?.click();
    };

    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-bold text-dark-green text-center">{translations.pestTitle}</h2>
            <div className="bg-white p-4 rounded-xl shadow-md border border-green-100 text-center">
                <p className="text-gray-600 mb-4">{translations.uploadPrompt}</p>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    ref={fileInputRef}
                    className="hidden"
                />
                <button
                    onClick={triggerFileInput}
                    disabled={isLoading}
                    className="bg-dark-green text-white font-bold py-3 px-6 rounded-full w-full transition-colors hover:bg-green-800 disabled:bg-gray-400"
                >
                    {translations.uploadButton}
                </button>
            </div>

            {imageSrc && (
                <div className="bg-white p-4 rounded-xl shadow-md border border-green-100">
                    <img src={imageSrc} alt="Uploaded plant" className="rounded-lg w-full max-h-48 object-contain" />
                </div>
            )}

            {isLoading && (
                <div className="bg-white p-4 rounded-xl shadow-md border border-green-100 text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-dark-green mx-auto mb-2"></div>
                    <p className="text-dark-green font-semibold">{translations.analyzing}</p>
                </div>
            )}
            
            {error && <p className="text-red-500 text-center">{error}</p>}

            {analysis && (
                 <div className="bg-white p-4 rounded-xl shadow-md border border-green-100 space-y-2">
                    <h3 className="text-lg font-bold text-dark-green">{translations.analysisResult}</h3>
                    <div className="text-gray-700 whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: analysis.replace(/\n/g, '<br />').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                </div>
            )}
        </div>
    );
};

export default PestDetection;
