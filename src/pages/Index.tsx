import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Phone,
  MapPin,
  MessageCircle,
  Construction,
  Wrench,
  Droplets,
  Zap,
  Star,
  CheckCircle,
  Building,
  Shield
} from 'lucide-react';
import materialsImage from '@/assets/construction-materials.jpg';
import familyImage from '@/assets/family-business.jpg';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { QRCodeSection } from '@/components/QRCodeSection';
import { SiteQRGenerator } from '@/components/SiteQRGenerator';
import logo from '@/assets/logo.jpg';


const WHATSAPP_NUMBER = "5493764158655";
const WHATSAPP_TEXT = "Hola! Me interesa conocer más sobre sus productos de ferretería.";

const Index = () => {
  useEffect(() => {
    // Agregar animaciones al hacer scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const openWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_TEXT)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background font-poppins">
      {/* 1️⃣ SEÇÃO construction - Cabeçalho principal com logo, título e botões de ação */}
      <section className="relative min-h-screen bg-construction flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${materialsImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.4)'
          }}
        />

        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          {/* Logo Placeholder */}
          <div className="mb-8 animate-on-scroll">
            <div className="inline-flex items-center justify-center w-32 h-32 backdrop-blur-md rounded-2xl">
              <span className="text-white text-sm font-medium"><img
                src={logo}
                alt="Logo Ferretería Paraíso"
                className="w-full rounded-2xl shadow-2xl hover-lift"
              /></span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-on-scroll fade-in-up-delay-1">
            Ferretería y Corralón
            <br />
            <span className="text-gradient">PARAISO</span>
          </h1>

          <p className="text-xl md:text-2xl mb-12 opacity-90 animate-on-scroll fade-in-up-delay-2">
            Todo para tu obra en un solo lugar
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-on-scroll fade-in-up-delay-3">
            <Button
              onClick={openWhatsApp}
              size="lg"
              className="btn-hero text-lg px-8 py-6 rounded-2xl"
            >
              <Phone className="mr-2 h-6 w-6" />
              Contactar por WhatsApp
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open('https://maps.app.goo.gl/4JAwAKU3zgXA9hig6', '_blank')}
              className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 text-lg px-8 py-6 rounded-2xl"
            >
              <MapPin className="mr-2 h-6 w-6" />
              Cómo llegar
            </Button>
          </div>
        </div>
      </section>

      {/* 2️⃣ HISTÓRIA DO NEGÓCIO - Seção sobre a origem e evolução da empresa */}
      <section className="py-20 bg-section-alt">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">
                Nuestra Historia
              </h2>
              <div className="prose prose-lg text-muted-foreground leading-relaxed">
                <p>
                  <strong>FERRETERÍA Y CORRALÓN PARAÍSO</strong> surge de un sueño que me acompaña desde la niñez.
                  Desde pequeño trabajé en la venta de ladrillos y siempre vi en las ferreterías un negocio sólido y con futuro.
                </p>
                <p>
                  Con dedicación, esfuerzo y el apoyo de mi familia, este sueño se convirtió en realidad:
                  hoy somos un emprendimiento que busca crecer de la mano de nuestra comunidad.
                </p>
              </div>
            </div>

            <div className="animate-on-scroll fade-in-up-delay-1">
              <img
                src={familyImage}
                alt="Familia trabajando en ferretería"
                className="w-full rounded-2xl shadow-2xl hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3️⃣ MISSÃO, VISÃO E VALORES - Cards com os pilares da empresa */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="section-card hover-lift animate-on-scroll">
              <CardContent className="p-8 text-center">
                <Shield className="h-16 w-16 mx-auto mb-6 text-primary" />
                <h3 className="text-2xl font-bold mb-4 text-primary">Misión</h3>
                <p className="text-muted-foreground">
                  Trabajar en familia, brindando productos de calidad y un servicio de confianza.
                </p>
              </CardContent>
            </Card>

            <Card className="section-card hover-lift animate-on-scroll fade-in-up-delay-1">
              <CardContent className="p-8 text-center">
                <Building className="h-16 w-16 mx-auto mb-6 text-secondary" />
                <h3 className="text-2xl font-bold mb-4 text-secondary">Visión</h3>
                <p className="text-muted-foreground">
                  Crecer junto a nuestros clientes, construyendo relaciones duraderas y aportando soluciones para cada necesidad.
                </p>
              </CardContent>
            </Card>

            <Card className="section-card hover-lift animate-on-scroll fade-in-up-delay-2">
              <CardContent className="p-8 text-center">
                <CheckCircle className="h-16 w-16 mx-auto mb-6 text-accent" />
                <h3 className="text-2xl font-bold mb-4 text-accent">Valores</h3>
                <p className="text-muted-foreground">
                  Responsabilidad, respeto y honestidad guían cada una de nuestras acciones.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Frase Destacada */}
          <div className="text-center animate-on-scroll zoom-in">
            <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-4">
              "Confiá en nosotros: juntos levantamos tus proyectos"
            </h2>
          </div>
        </div>
      </section>

      {/* 4️⃣ MATERIAIS BÁSICOS DE OBRA - Lista de produtos para construção */}
      <section className="py-20 bg-section-alt">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <Construction className="h-16 w-16 text-primary mb-6" />
              <h2 className="text-4xl font-bold mb-8 text-gradient">
                Materiales Básicos de Obra
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'Ladrillos comunes',
                  'Ladrillos huecos',
                  'Cemento',
                  'Cal',
                  'Plasticor',
                  'Arena',
                  'Piedra'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-secondary" />
                    <span className="text-muted-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-on-scroll fade-in-up-delay-1">
              <img
                src={materialsImage}
                alt="Materiales de construcción"
                className="w-full rounded-2xl shadow-2xl hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5️⃣ ESTRUTURAS E METAIS - Produtos de ferro e estruturas metálicas */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="animate-on-scroll text-center mb-12">
            <Wrench className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-8 text-gradient">
              🏗️ Estructuras y Metales
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Hierros para construcción',
              'Mallas',
              'Varillas de acero',
              'Alambres y alambrón'
            ].map((item, index) => (
              <Card key={index} className="section-card hover-lift animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <CheckCircle className="h-8 w-8 mx-auto mb-4 text-secondary" />
                  <h3 className="font-semibold text-foreground">{item}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 6️⃣ INSTALAÇÕES SANITÁRIAS - Produtos para encanamento e hidráulica */}
      <section className="py-20 bg-section-alt">
        <div className="container mx-auto px-6">
          <div className="animate-on-scroll text-center mb-12">
            <Droplets className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-8 text-gradient">
              🚰 Instalaciones Sanitarias
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Caños de PVC',
              'Codos, curvas y conexiones',
              'Válvulas y grifería',
              'Pegamentos para PVC'
            ].map((item, index) => (
              <Card key={index} className="section-card hover-lift animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <CheckCircle className="h-8 w-8 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold text-foreground">{item}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 7️⃣ INSTALAÇÕES ELÉTRICAS - Produtos para instalação elétrica */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="animate-on-scroll text-center mb-12">
            <Zap className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-8 text-gradient">
              🔌 Instalaciones Eléctricas
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              'Cables unipolares y mellizos',
              'Cajas de luz y llaves térmicas',
              'Disyuntores',
              'Enchufes, interruptores, portalámparas',
              'Lámparas LED y tubos'
            ].map((item, index) => (
              <Card key={index} className="section-card hover-lift animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <CheckCircle className="h-8 w-8 mx-auto mb-4 text-accent" />
                  <h3 className="font-semibold text-foreground">{item}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 8️⃣ DEPOIMENTOS DE CLIENTES - Avaliações e feedback dos clientes */}
      <section className="py-20 bg-section-alt">
        <div className="container mx-auto px-6">
          <div className="animate-on-scroll text-center mb-12">
            <h2 className="text-4xl font-bold mb-8 text-gradient">
              Testimonios de Clientes
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Excelente atención y precios muy competitivos. ⭐⭐⭐⭐⭐",
              "Encontré todo lo que necesitaba para mi obra, muy recomendable. ⭐⭐⭐⭐⭐",
              "Rápidos, confiables y con gran variedad de materiales. ⭐⭐⭐⭐⭐"
            ].map((testimonial, index) => (
              <Card key={index} className="section-card hover-lift animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8 text-center">
                  <Star className="h-8 w-8 mx-auto mb-4 text-yellow-500 fill-current" />
                  <p className="text-muted-foreground italic">"{testimonial}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 9️⃣ CÓDIGO QR PARA WHATSAPP - QR code para contato rápido */}
      <QRCodeSection whatsappNumber={"5493764158655"} />

      {/* 🔟 LOCALIZAÇÃO E MAPA - Informações de endereço e localização */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="animate-on-scroll text-center mb-12">
            <MapPin className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-8 text-gradient">
              Ubicación y Mapa
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Visítanos en Barrio Los Paraíso – Calle 57
            </p>

            <Button
              onClick={() => window.open('https://maps.app.goo.gl/vQog1otA7jEbMrsn7', '_blank')}
              size="lg"
              className="btn-hero"
            >
              <MapPin className="mr-2 h-5 w-5" />
              Ver en el mapa
            </Button>
          </div>

          {/* Placeholder para mapa */}
          <div className="animate-on-scroll fade-in-up-delay-1">
            <div className="bg-muted rounded-2xl p-12 text-center">
              <MapPin className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
              <p className="text-muted-foreground">
                {/* Placeholder para mapa substituído pelo Google Maps */}
                <div className="animate-on-scroll fade-in-up-delay-1">
                  <div className="bg-muted rounded-2xl overflow-hidden shadow-lg">
                    <iframe
                      title="Localização Ferretería Paraíso"
                      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3540.841319178749!2d-55.8877222!3d-27.443055599999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDI2JzM1LjAiUyA1NcKwNTMnMTUuOCJX!5e0!3m2!1ses-419!2sbr!4v1757784154965!5m2!1ses-419!2sbr"
                      width="100%"
                      height="450"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 1️⃣1️⃣ RODAPÉ - Informações de contato e dados da empresa */}
      <footer className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <div className="animate-on-scroll">
            <h3 className="text-3xl font-bold mb-6">
              Ferretería y Corralón PARAISO
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Tu socio de confianza en construcción
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <span>Celular/WhatsApp: 3764158655</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>Hugo Benites</span>
              </div>
            </div>

            <Button
              onClick={openWhatsApp}
              variant="outline"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Contactar Ahora
            </Button>
          </div>
        </div>
      </footer>

      {/* 1️⃣2️⃣ WHATSAPP FLUTUANTE - Botão fixo para contato via WhatsApp */}
      <WhatsAppFloat onClick={openWhatsApp} />
      
      {/* QR Generator temporário para o site */}
      <SiteQRGenerator />
    </div>
  );
};

export default Index;