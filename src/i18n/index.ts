import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  pt: {
    translation: {
      // Hero Section
      "hero.title": "Central Churrasco",
      "hero.since": "DESDE 1974",
      "hero.reserve": "RESERVE JÁ",
      "hero.menu": "VER MENU",

      // Características
      "features.title": "Nossas Características",
      "features.parking": "Estacionamento",
      "features.parking.desc": "Amplo estacionamento gratuito",
      "features.wine": "Carta de Vinhos",
      "features.wine.desc": "Seleção premium de vinhos portugueses",
      "features.wifi": "Wi-Fi Grátis",
      "features.wifi.desc": "Conexão de alta velocidade",
      "features.grill": "Grelhados na Brasa",
      "features.grill.desc": "Carnes selecionadas e grelhadas na hora",

      // Menu
      "menu.title": "O Nosso Menu",
      "menu.entradas": "Entradas",
      "menu.saladas": "Saladas",
      "menu.carnes": "Carnes",
      "menu.peixes": "Peixes",
      "menu.acompanhamentos": "Acompanhamentos",

      // Pratos
      "menu.items.camarao": "Camarão Grelhado",
      "menu.items.chourico": "Chouriço",
      "menu.items.presunto": "Prato de Presunto",
      "menu.items.queijo": "Queijo & Manteiga",
      "menu.items.azeitonas": "Azeitonas",
      "menu.items.paoalho": "Pão de Alho",
      "menu.items.codorniz": "Codorniz",
      "menu.items.caldoverde": "Caldo Verde",
      "menu.items.sopadodia": "Sopa do Dia",
      "menu.items.saladamed": "Salada Mediterrânica",
      "menu.items.saladatomate": "Salada de Tomate",
      "menu.items.saladamista": "Salada Mista",
      "menu.items.saladamistapimento": "Salada Mista c/ Pimento",
      "menu.items.saladaalface": "Salada de Alface",
      "menu.items.saladapimentos": "Salada de Pimentos",
      "menu.items.picanha": "Picanha",
      "menu.items.secretos": "Secretos de Porco Ibérico",
      "menu.items.espetada": "Espetada de Bovino",
      "menu.items.costeletao": "Costeletão à Transmontana",
      "menu.items.alcatra": "Coração de Alcatra c/ Molho Madeira",
      "menu.items.tornedo": "Tornedó c/ Molho 4 Pimentas",
      "menu.items.lombo": "Lombo de Porco Ibérico",
      "menu.items.bacalhauassado": "Bacalhau Assado na Brasa",
      "menu.items.bacalhaubraga": "Bacalhau à Braga",
      "menu.items.bacalhaubroa": "Bacalhau c/ Broa",
      "menu.items.dourada": "Dourada Escalada",
      "menu.items.robalo": "Robalo Escalado",
      "menu.items.salmao": "Salmão Grelhado",
      "menu.items.polvo": "Espetada de Polvo",
      "menu.items.batata": "Batata à Murro",
      "menu.items.espinafres": "Espinafres Salteados",
      "menu.items.legumes": "Legumes Salteados",
      "menu.items.arroz": "Arroz de Feijão",
      "menu.items.batatasfrita": "Batata Frita",

      // Localização
      "location.title": "Localização Privilegiada",
      "location.desc": "Situado no coração de Matosinhos, a poucos metros da praia e do Porto de Leixões. O local perfeito para desfrutar da melhor gastronomia portuguesa.",

      // Sobre
      "about.title": "Tradição em Churrasco",
      "about.desc": "Há mais de 45 anos servindo as melhores carnes grelhadas do Porto. Nossa tradição passa de geração em geração, mantendo o sabor autêntico do verdadeiro churrasco português.",

      // Galeria
      "gallery.title": "Galeria",
      "gallery.interior": "Interior do Restaurante",
      "gallery.grill": "Grelhados na Brasa",
      "gallery.specialties": "Especialidades da Casa",
      "gallery.ambient": "Ambiente Acolhedor",
      "gallery.traditional": "Pratos Tradicionais",
      "gallery.kitchen": "Nossa Cozinha",

      // Reserva
      "reservation.title": "Fazer Reserva",
      "reservation.name": "Nome",
      "reservation.email": "Email",
      "reservation.phone": "Telefone",
      "reservation.date": "Data",
      "reservation.time": "Hora",
      "reservation.people": "Número de Pessoas",
      "reservation.submit": "Confirmar Reserva",
      "reservation.close": "Fechar",

      // Footer
      "footer.about.title": "Sobre Nós",
      "footer.about.desc": "Desde 1974, servindo a melhor gastronomia portuguesa em Matosinhos.",
      "footer.hours.title": "Horário",
      "footer.hours.weekdays": "Segunda a Sexta",
      "footer.hours.weekends": "Sábado e Domingo",
      "footer.hours.holidays": "Feriados",
      "footer.contact.title": "Contactos",
      "footer.contact.open": "Aberto todos os dias",
      "footer.newsletter.title": "Newsletter",
      "footer.newsletter.desc": "Subscreva para receber as nossas novidades",
      "footer.newsletter.placeholder": "O seu email",
      "footer.newsletter.subscribe": "Subscrever",
      "footer.rights": "Todos os direitos reservados.",
      "footer.privacy": "Política de Privacidade",
      "footer.terms": "Termos e Condições",
      "footer.cookies": "Política de Cookies"
    }
  },
  en: {
    translation: {
      // Hero Section
      "hero.title": "Central Churrasco",
      "hero.since": "SINCE 1974",
      "hero.reserve": "BOOK NOW",
      "hero.menu": "VIEW MENU",

      // Features
      "features.title": "Our Features",
      "features.parking": "Parking",
      "features.parking.desc": "Large free parking area",
      "features.wine": "Wine List",
      "features.wine.desc": "Premium Portuguese wine selection",
      "features.wifi": "Free Wi-Fi",
      "features.wifi.desc": "High-speed connection",
      "features.grill": "Charcoal Grilled",
      "features.grill.desc": "Selected meats grilled to order",

      // Menu
      "menu.title": "Our Menu",
      "menu.entradas": "Starters",
      "menu.saladas": "Salads",
      "menu.carnes": "Meats",
      "menu.peixes": "Fish",
      "menu.acompanhamentos": "Side Dishes",

      // ... (continuar com todas as traduções em inglês)
    }
  },
  es: {
    translation: {
      // Hero Section
      "hero.title": "Central Churrasco",
      "hero.since": "DESDE 1974",
      "hero.reserve": "RESERVAR AHORA",
      "hero.menu": "VER MENÚ",

      // ... (continuar com todas as traduções em espanhol)
    }
  },
  fr: {
    translation: {
      // Hero Section
      "hero.title": "Central Churrasco",
      "hero.since": "DEPUIS 1974",
      "hero.reserve": "RÉSERVER",
      "hero.menu": "VOIR LE MENU",

      // ... (continuar com todas as traduções em francês)
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pt',
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 