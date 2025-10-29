
import React from 'react';

type IconProps = {
  className?: string;
};

export const PlantingIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l-5.486-5.486a5.25 5.25 0 010-7.424L10.5 3l5.486 5.486a5.25 5.25 0 010 7.424L10.5 21z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18" />
  </svg>
);

export const WateringIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.193 11.25a11.25 11.25 0 0117.614 0m-17.614 0A11.25 11.25 0 013.193 11.25m17.614 0A11.25 11.25 0 0120.807 11.25m-17.614 0L3 21m18-9.75L21 21m-9-9.75v12m-3.375-12l-3 12m6.75-12l3 12" />
  </svg>
);

export const FertilizingIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375" />
  </svg>
);

export const TrackerIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-3.75-2.25M21 12l-2.25-1.334" />
  </svg>
);

export const PestIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.5 4.5 0 0018 12.75V9.75a4.5 4.5 0 00-4.5-4.5H12a4.5 4.5 0 00-4.5 4.5v3a4.5 4.5 0 002.818 4.018M12 3v2.25m0 16.5V21m6-12h2.25m-16.5 0H6m12 6l2.25 2.25m-16.5-2.25L6 18m12-6l-2.25 2.25m-12 0L6 12" />
  </svg>
);

export const TipsIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.311l-3.75 0m0 0a1.5 1.5 0 01-1.5-1.5l0-3.75a3 3 0 013-3h1.5a3 3 0 013 3l0 3.75a1.5 1.5 0 01-1.5 1.5m-3.75-6.364V6.364m0 0a1.5 1.5 0 011.5-1.5h1.5a1.5 1.5 0 011.5 1.5v0a1.5 1.5 0 01-1.5 1.5h-1.5A1.5 1.5 0 0112 6.364z" />
  </svg>
);
