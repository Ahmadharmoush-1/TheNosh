import { useEffect, useRef } from 'react';

export const GoogleMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mapRef.current) {
      // For now, we'll use an embedded iframe. In production, you'd use Google Maps API
      const iframe = document.createElement('iframe');
      iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d364.17943174054074!2d35.567028052612585!3d33.76307903069235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f1900545767dd%3A0x1ab1f2a5640afe79!2zTMOJVk9JUg!5e1!3m2!1sen!2slb!4v1752413004922!5m2!1sen!2slb";
      iframe.width = "100%";
      iframe.height = "100%";
      iframe.style.border = "0";
      iframe.allowFullscreen = true;
      iframe.loading = "lazy";
      iframe.referrerPolicy = "no-referrer-when-downgrade";
      
      mapRef.current.appendChild(iframe);
    }
  }, []);

  return (
    <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
      <div ref={mapRef} className="w-full h-full bg-gray-200 animate-pulse"></div>
    </div>
  );
};
