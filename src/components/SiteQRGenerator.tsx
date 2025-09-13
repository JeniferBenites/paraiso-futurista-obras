import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Download, QrCode } from 'lucide-react';
import QRCode from 'qrcode';

export const SiteQRGenerator: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      // URL do site atual
      const siteUrl = window.location.origin;
      
      QRCode.toCanvas(canvasRef.current, siteUrl, {
        width: 400,
        margin: 3,
        color: {
          dark: '#1f2937',
          light: '#ffffff'
        }
      });
    }
  }, []);

  const downloadQR = () => {
    if (canvasRef.current) {
      const link = document.createElement('a');
      link.download = 'ferreteria-paraiso-site-qr.png';
      link.href = canvasRef.current.toDataURL('image/png', 1.0);
      link.click();
    }
  };

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-background border rounded-xl p-8 max-w-md w-full text-center shadow-2xl">
        <QrCode className="h-12 w-12 text-primary mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2">QR Code do Site</h2>
        <p className="text-muted-foreground mb-6">
          Escaneie para acessar o site da Ferretería PARAISO
        </p>
        
        <canvas 
          ref={canvasRef}
          className="mx-auto mb-6 border rounded-lg shadow-lg bg-white p-4"
        />
        
        <div className="space-y-3">
          <Button
            onClick={downloadQR}
            className="w-full"
          >
            <Download className="mr-2 h-5 w-5" />
            Baixar QR Code
          </Button>
          
          <Button
            variant="outline"
            onClick={() => window.location.reload()}
            className="w-full"
          >
            Fechar
          </Button>
        </div>
      </div>
    </div>
  );
};