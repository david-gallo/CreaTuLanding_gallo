const products = [
  {
    "id": 1,
    "tipo": "GPU",
    "marca": "NVIDIA",
    "modelo": "GeForce RTX 4090",
    "año": 2022,
    "estado": "nuevo",
    "precio": 1599,
    "imagen": "https://m.media-amazon.com/images/I/619QTa9dXXL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
  },
  {
    "id": 2,
    "tipo": "CPU",
    "marca": "AMD",
    "modelo": "Ryzen 9 7950X",
    "año": 2022,
    "estado": "nuevo",
    "precio": 699,
    "imagen": "https://m.media-amazon.com/images/I/5116zdA9uyL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
  },
  {
    "id": 3,
    "tipo": "SSD",
    "marca": "Samsung",
    "modelo": "980 PRO 1TB",
    "año": 2020,
    "estado": "nuevo",
    "precio": 120,
    "imagen": "https://http2.mlstatic.com/D_NQ_NP_831211-MLU74962898457_032024-O.webp"
  },
  {
    "id": 4,
    "tipo": "RAM",
    "marca": "Corsair",
    "modelo": "Vengeance RGB DDR5 32GB",
    "año": 2022,
    "estado": "nuevo",
    "precio": 180,
    "imagen": "https://m.media-amazon.com/images/I/61XsKRKsGoL._AC_SL1500_.jpg"
  },
  {
    "id": 5,
    "tipo": "Placa Madre",
    "marca": "ASUS",
    "modelo": "ROG Crosshair X670E Hero",
    "año": 2022,
    "estado": "nuevo",
    "precio": 499,
    "imagen": "https://m.media-amazon.com/images/I/81ohPDfik0L._AC_SL1500_.jpg"
  },
  {
    "id": 6,
    "tipo": "Gabinete",
    "marca": "NZXT",
    "modelo": "H510 Elite",
    "año": 2019,
    "estado": "nuevo",
    "precio": 150,
    "imagen": "https://m.media-amazon.com/images/I/713NuIfbhZL._AC_SL1500_.jpg"
  },
  {
    "id": 7,
    "tipo": "GPU",
    "marca": "AMD",
    "modelo": "Radeon RX 7900 XTX",
    "año": 2022,
    "estado": "nuevo",
    "precio": 999,
    "imagen": "https://m.media-amazon.com/images/I/71vGm7dSHoL._AC_SL1500_.jpg"
  },
  {
    "id": 8,
    "tipo": "CPU",
    "marca": "Intel",
    "modelo": "Core i9-14900K",
    "año": 2023,
    "estado": "nuevo",
    "precio": 589,
    "imagen": "https://m.media-amazon.com/images/I/619ytLAytAL._AC_SL1500_.jpg"
  },
  {
    "id": 9,
    "tipo": "Refrigeración",
    "marca": "Noctua",
    "modelo": "NH-D15",
    "año": 2014,
    "estado": "nuevo",
    "precio": 100,
    "imagen": "https://m.media-amazon.com/images/I/81i9YOlnPEL._SL1500_.jpg"
  },
  {
    "id": 10,
    "tipo": "Fuente",
    "marca": "EVGA",
    "modelo": "SuperNOVA 850 G5",
    "año": 2020,
    "estado": "nuevo",
    "precio": 130,
    "imagen": "https://m.media-amazon.com/images/I/71C+-8fm0gL._AC_SL1500_.jpg"
  },
  {
    "id": 11,
    "tipo": "Monitor",
    "marca": "LG",
    "modelo": "UltraGear 27GN950-B",
    "año": 2021,
    "estado": "nuevo",
    "precio": 699,
    "imagen": "https://m.media-amazon.com/images/I/81El4887iLL._AC_SL1500_.jpg"
  },
  {
    "id": 12,
    "tipo": "Mouse",
    "marca": "Logitech",
    "modelo": "G Pro X Superlight",
    "año": 2020,
    "estado": "nuevo",
    "precio": 150,
    "imagen": "https://m.media-amazon.com/images/I/51uy8gOG-iL._AC_SL1400_.jpg"
  },
  {
    "id": 13,
    "tipo": "Teclado",
    "marca": "SteelSeries",
    "modelo": "Apex Pro",
    "año": 2022,
    "estado": "nuevo",
    "precio": 200,
    "imagen": "https://m.media-amazon.com/images/I/71vg6iuhKOL._AC_SL1500_.jpg"
  },
  {
    "id": 14,
    "tipo": "Auriculares",
    "marca": "Razer",
    "modelo": "BlackShark V2",
    "año": 2020,
    "estado": "nuevo",
    "precio": 100,
    "imagen": "https://m.media-amazon.com/images/I/71nMyOYkzDL._AC_SL1500_.jpg"
  },
  {
    "id": 15,
    "tipo": "Webcam",
    "marca": "Logitech",
    "modelo": "C920 HD Pro",
    "año": 2012,
    "estado": "nuevo",
    "precio": 90,
    "imagen": "https://m.media-amazon.com/images/I/71YN85pLGcL._AC_SL1500_.jpg"
  },
  {
    "id": 16,
    "tipo": "Micrófono",
    "marca": "  ",
    "modelo": " ",
    "año": 2009,
    "estado": "nuevo",
    "precio": 130,
    "imagen": "https://m.media-amazon.com/images/I/61KTMvS5JBL._AC_SL1500_.jpg"
  },
  {
    "id": 17,
    "tipo": "Router",
    "marca": "TP-Link",
    "modelo": "Archer AX6000",
    "año": 2021,
    "estado": "nuevo",
    "precio": 280,
    "imagen": "https://m.media-amazon.com/images/I/71MB7bAot3L._AC_SL1500_.jpg"
  },
  {
    "id": 18,
    "tipo": "Capturadora",
    "marca": "Elgato",
    "modelo": "HD60 X",
    "año": 2022,
    "estado": "nuevo",
    "precio": 200,
    "imagen": "https://m.media-amazon.com/images/I/51M6As4xKlL._AC_SL1000_.jpg"
  },
  {
    "id": 19,
    "tipo": "Tarjeta de sonido",
    "marca": "Creative",
    "modelo": "Sound BlasterX AE-5",
    "año": 2017,
    "estado": "nuevo",
    "precio": 130,
    "imagen": "https://m.media-amazon.com/images/I/51sXXYurtyL._AC_SX466_.jpg"
  },
  {
    "id": 20,
    "tipo": "Soporte GPU",
    "marca": "Cooler Master",
    "modelo": "Universal ARGB",
    "año": 2021,
    "estado": "nuevo",
    "precio": 45,
    "imagen": "https://m.media-amazon.com/images/I/61OAE-LAotL._SX522_.jpg"
  }
]

export default products;
