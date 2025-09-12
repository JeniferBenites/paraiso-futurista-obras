import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { QrCode, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import QRCode from 'qrcode';

interface QRCodeSectionProps {
  whatsappNumber: string;
}

export const QRCodeSection: React.FC<QRCodeSectionProps> = ({ whatsappNumber }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const whatsappUrl = `https://wa.me/${whatsappNumber}`;
      QRCode.toCanvas(canvasRef.current, whatsappUrl, {
        width: 256,
        margin: 2,
        color: {
          dark: '#1f2937',
          light: '#ffffff'
        }
      });
    }
  }, [whatsappNumber]);

  const downloadQR = () => {
    if (canvasRef.current) {
      const link = document.createElement('a');
      link.download = 'qr-whatsapp-ferreteria-paraiso.png';
      link.href = canvasRef.current.toDataURL();
      link.click();
    }
  };

  return (
    <section className="py-20 bg-section-alt">
      <div className="container mx-auto px-6">
        <div className="animate-on-scroll text-center mb-12">
          <QrCode className="h-16 w-16 text-primary mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-8 text-gradient">
            Código QR para WhatsApp
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Escaneá el código QR para contactarnos directamente por WhatsApp
          </p>
        </div>
        
        <div className="flex justify-center">
          <Card className="section-card hover-lift animate-on-scroll">
            <CardContent className="p-8 text-center">
              <canvas 
                ref={canvasRef}
                className="mx-auto mb-6 rounded-xl shadow-lg"
              />
              <Button
                onClick={downloadQR}
                variant="outline"
                className="bg-white/10 border-primary/30 text-primary hover:bg-primary/10"
              >
                <Download className="mr-2 h-5 w-5" />
                Descargar QR para Imprimir
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};