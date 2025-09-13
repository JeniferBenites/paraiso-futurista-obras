const QRCode = require('qrcode');

// URL do site - ajuste conforme necessário
const siteUrl = 'https://your-site-url.lovable.app';

QRCode.toFile('site-qr-code.png', siteUrl, {
  width: 300,
  margin: 2,
  color: {
    dark: '#1f2937',
    light: '#ffffff'
  }
}, (err) => {
  if (err) throw err;
  console.log('QR Code gerado com sucesso!');
});