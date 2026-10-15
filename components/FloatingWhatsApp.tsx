import React from 'react';

const WHATSAPP_NUMBER = '9779766715793';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 32 32"
    fill="currentColor"
    className={className}
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.11 17.44c-.29-.15-1.73-.85-2-.95-.27-.1-.47-.15-.67.15-.2.29-.77.95-.94 1.15-.17.2-.35.22-.64.07-.29-.15-1.24-.46-2.37-1.46-.88-.78-1.47-1.75-1.64-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.29.3-.49.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.48.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.73-.71 1.98-1.39.25-.68.25-1.27.17-1.39-.07-.12-.27-.2-.57-.35ZM16.03 3C8.86 3 3.03 8.83 3.03 16c0 2.29.6 4.52 1.74 6.49L3 29l6.66-1.75A12.91 12.91 0 0 0 16.03 29c7.17 0 13-5.83 13-13s-5.83-13-13-13Zm0 23.8c-2.05 0-4.04-.58-5.76-1.68l-.41-.26-3.95 1.04 1.05-3.86-.27-.42A10.77 10.77 0 0 1 5.23 16c0-5.96 4.85-10.8 10.8-10.8 5.96 0 10.8 4.84 10.8 10.8 0 5.95-4.84 10.8-10.8 10.8Z" />
  </svg>
);

const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with AuralithBit on WhatsApp"
      title="Chat on WhatsApp"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[100] flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-emerald-500/30 transition-all hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-emerald-300 active:scale-95"
    >
      <WhatsAppIcon className="h-8 w-8 sm:h-9 sm:w-9" />
    </a>
  );
};

export default FloatingWhatsApp;
