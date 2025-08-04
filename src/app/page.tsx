"use client";



import React from 'react';
import Link from 'next/link';
import { useState } from 'react';

// ...existing code...
export default function Home() {
  const handleDownloadPDF = () => {
    window.print();
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Zainab Khan - Profile',
          text: 'Check out my professional profile',
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      navigator.clipboard.writeText(window.location.href).then(() => {
        alert('Profile URL copied to clipboard!');
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-8 px-4 print:bg-white print:py-4 relative overflow-hidden">
      {/* ...existing code... */}
    </div>

  );
}

