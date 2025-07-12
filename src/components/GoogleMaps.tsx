import { useEffect, useRef } from 'react';

export const GoogleMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mapRef.current) {
      // For now, we'll use an embedded iframe. In production, you'd use Google Maps API
      const iframe = document.createElement('iframe');
      iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.2966363344254!2d35.5057!3d33.8938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDUzJzM3LjciTiAzNcKwMzAnMjAuNSJF!5e0!3m2!1sen!2slb!4v1635000000000!5m2!1sen!2slb";
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
