import React from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppFloatProps {
  onClick: () => void;
}

export const WhatsAppFloat: React.FC<WhatsAppFloatProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="whatsapp-float"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-8 w-8" />
    </button>
  );
};