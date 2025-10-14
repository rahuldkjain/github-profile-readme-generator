'use client';

import { useEffect } from 'react';

export function BuyMeCoffeeWidget() {
  useEffect(() => {
    // Remove any existing BMC scripts first
    const existingScripts = document.querySelectorAll('script[data-name="BMC-Widget"]');
    existingScripts.forEach((script) => script.remove());

    // Create and append the script element
    const script = document.createElement('script');
    script.setAttribute('data-name', 'BMC-Widget');
    script.setAttribute('data-cfasync', 'false');
    script.setAttribute('src', 'https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js');
    script.setAttribute('data-id', 'rahuldkjain');
    script.setAttribute('data-description', 'Support me on Buy me a coffee!');
    script.setAttribute('data-message', 'Loved the tool🚀. Buy me a coffee to support the work!');
    script.setAttribute('data-color', '#FF813F');
    script.setAttribute('data-position', 'Right');
    script.setAttribute('data-x_margin', '18');
    script.setAttribute('data-y_margin', '18');

    // Add onload handler to check if widget loaded
    script.onload = () => {
      console.log('BMC Widget script loaded successfully');
      // Try to trigger widget initialization if needed
      setTimeout(() => {
        if (typeof window.BMC !== 'undefined') {
          console.log('BMC Widget initialized');
        } else {
          console.log('BMC Widget not initialized, checking DOM...');
        }
      }, 1000);
    };

    script.onerror = () => {
      console.error('BMC Widget script failed to load');
    };

    document.head.appendChild(script);

    // Cleanup function
    return () => {
      // Remove the script when component unmounts
      const scriptToRemove = document.querySelector('script[data-name="BMC-Widget"]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return null; // This component doesn't render anything visible
}
