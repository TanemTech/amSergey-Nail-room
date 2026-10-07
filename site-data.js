(function(global){
  'use strict';
  // Fill client information in this file, then rename it to site-data.js.
  // Never publish a client site while mode is 'template'.
  const t=(ru='',en='',hy='',uz='',tg='')=>({ru,en,hy,uz,tg});
  // Approved universal copy. Keep it unchanged for every salon.
  const heroDescription=t(
    'Ваша красота. Ваша уверенность.',
    'Your beauty. Your confidence.',
    'Ձեր գեղեցկությունը։ Ձեր վստահությունը։'
  );
  const about=t(
    'В основе нашей работы — профессиональный подход, внимание к деталям и уважение к индивидуальности каждого гостя. Мы создаём комфортное пространство, где качество и забота остаются главным приоритетом.',
    'Our work is built on professionalism, attention to detail, and respect for every guest’s individuality. We create a comfortable space where quality and care remain our highest priorities.',
    'Մեր աշխատանքի հիմքում մասնագիտական մոտեցումն է, ուշադրությունը մանրուքներին և հարգանքը յուրաքանչյուր հյուրի անհատականության նկատմամբ։ Մենք ստեղծում ենք հարմարավետ միջավայր, որտեղ որակն ու հոգատարությունը մնում են գլխավոր առաջնահերթությունները։'
  );
  const data={
  "schemaVersion": 1,
  "mode": "production",
  "country": "AM",
  "locales": [
    "ru",
    "en",
    "hy"
  ],
  "defaultLocale": "ru",
  "salon": {
    "name": {
      "ru": "Nail Room",
      "en": "Nail Room",
      "hy": "Nail Room",
      "uz": "",
      "tg": ""
    },
    "kind": {
      "ru": "Салон красоты",
      "en": "Beauty salon",
      "hy": "Գեղեցկության սրահ",
      "uz": "",
      "tg": ""
    },
    "city": {
      "ru": "Ереван",
      "en": "Yerevan",
      "hy": "Երևան",
      "uz": "",
      "tg": ""
    },
    "address": {
      "ru": "проспект Саят-Новы, 18",
      "en": "18 Sayat-Nova Ave",
      "hy": "Սայաթ-Նովայի պողոտա, 18",
      "uz": "",
      "tg": ""
    },
    "fullAddress": {
      "ru": "Армения, Ереван 0060, проспект Саят-Новы, 18",
      "en": "18 Sayat-Nova Ave, Yerevan 0060, Armenia",
      "hy": "Հայաստան, Երևան 0060, Սայաթ-Նովայի պողոտա, 18",
      "uz": "",
      "tg": ""
    },
    "heroDescription": {
      "ru": "Ваша красота. Ваша уверенность.",
      "en": "Your beauty. Your confidence.",
      "hy": "Ձեր գեղեցկությունը։ Ձեր վստահությունը։",
      "uz": "",
      "tg": ""
    },
    "about": {
      "ru": "В основе нашей работы — профессиональный подход, внимание к деталям и уважение к индивидуальности каждого гостя. Мы создаём комфортное пространство, где качество и забота остаются главным приоритетом.",
      "en": "Our work is built on professionalism, attention to detail, and respect for every guest’s individuality. We create a comfortable space where quality and care remain our highest priorities.",
      "hy": "Մեր աշխատանքի հիմքում մասնագիտական մոտեցումն է, ուշադրությունը մանրուքներին և հարգանքը յուրաքանչյուր հյուրի անհատականության նկատմամբ։ Մենք ստեղծում ենք հարմարավետ միջավայր, որտեղ որակն ու հոգատարությունը մնում են գլխավոր առաջնահերթությունները։",
      "uz": "",
      "tg": ""
    }
  },
  "schedule": {
    "timezone": "Asia/Yerevan",
    "periods": [
      {
        "days": [
          1,
          2,
          3,
          4,
          5,
          6,
          7
        ],
        "open": "10:00",
        "close": "20:00"
      }
    ],
    "fallback": {
      "ru": "Ежедневно 10:00–20:00",
      "en": "Daily 10:00–20:00",
      "hy": "Ամեն օր՝ 10:00–20:00",
      "uz": "",
      "tg": ""
    }
  },
  "contacts": {
    "phone": "+374 99 525505",
    "phoneLabel": {
      "ru": "Позвонить",
      "en": "Call",
      "hy": "Զանգահարել",
      "uz": "",
      "tg": ""
    },
    "messengerUrl": "",
    "messengerLabel": {
      "ru": "Написать",
      "en": "Message",
      "hy": "Գրել",
      "uz": "",
      "tg": ""
    },
    "messengerHandle": "",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Nail%20Room%20Yerevan&query_place_id=ChIJMRHE4y29akARZ84GytMLYjM",
    "mapEmbedUrl": "https://www.google.com/maps?q=Nail+Room+18+Sayat-Nova+Ave+Yerevan&output=embed",
    "reviewsUrl": "https://www.google.com/maps/search/?api=1&query=Nail%20Room%20Yerevan&query_place_id=ChIJMRHE4y29akARZ84GytMLYjM",
    "booking": [
      {
        "type": "online",
        "label": {
          "ru": "Онлайн-запись",
          "en": "Online booking",
          "hy": "Առցանց ամրագրում",
          "uz": "",
          "tg": ""
        },
        "url": "https://widget.sonline.su/ru/services/?placeid=775168886"
      }
    ]
  },
  "rating": {
    "value": 4.8,
    "count": 76
  },
  "media": {
    "logo": "",
    "hero": [
      {
        "src": "hero.webp",
        "alt": {
          "ru": "Интерьер Nail Room",
          "en": "Nail Room interior",
          "hy": "Nail Room-ի ինտերիեր",
          "uz": "",
          "tg": ""
        }
      }
    ],
    "about": "profile.webp",
    "portfolio": [
      {
        "src": "gallery-01.webp",
        "alt": {
          "ru": "Маникюр Nail Room",
          "en": "Nail Room manicure",
          "hy": "Nail Room մատնահարդարում",
          "uz": "",
          "tg": ""
        }
      },
      {
        "src": "gallery-02.webp",
        "alt": {
          "ru": "Маникюр Nail Room",
          "en": "Nail Room manicure",
          "hy": "Nail Room մատնահարդարում",
          "uz": "",
          "tg": ""
        }
      },
      {
        "src": "gallery-03.webp",
        "alt": {
          "ru": "Маникюр Nail Room",
          "en": "Nail Room manicure",
          "hy": "Nail Room մատնահարդարում",
          "uz": "",
          "tg": ""
        }
      },
      {
        "src": "gallery-04.webp",
        "alt": {
          "ru": "Маникюр Nail Room",
          "en": "Nail Room manicure",
          "hy": "Nail Room մատնահարդարում",
          "uz": "",
          "tg": ""
        }
      },
      {
        "src": "gallery-05.webp",
        "alt": {
          "ru": "Маникюр Nail Room",
          "en": "Nail Room manicure",
          "hy": "Nail Room մատնահարդարում",
          "uz": "",
          "tg": ""
        }
      },
      {
        "src": "gallery-06.webp",
        "alt": {
          "ru": "Маникюр Nail Room",
          "en": "Nail Room manicure",
          "hy": "Nail Room մատնահարդարում",
          "uz": "",
          "tg": ""
        }
      },
      {
        "src": "gallery-07.webp",
        "alt": {
          "ru": "Маникюр Nail Room",
          "en": "Nail Room manicure",
          "hy": "Nail Room մատնահարդարում",
          "uz": "",
          "tg": ""
        }
      },
      {
        "src": "gallery-08.webp",
        "alt": {
          "ru": "Маникюр Nail Room",
          "en": "Nail Room manicure",
          "hy": "Nail Room մատնահարդարում",
          "uz": "",
          "tg": ""
        }
      }
    ],
    "gallery": {
      "Маникюр": [
        {
          "src": "gallery-01.webp",
          "alt": {
            "ru": "Маникюр Nail Room",
            "en": "Nail Room manicure",
            "hy": "Nail Room մատնահարդարում",
            "uz": "",
            "tg": ""
          }
        },
        {
          "src": "gallery-02.webp",
          "alt": {
            "ru": "Маникюр Nail Room",
            "en": "Nail Room manicure",
            "hy": "Nail Room մատնահարդարում",
            "uz": "",
            "tg": ""
          }
        },
        {
          "src": "gallery-03.webp",
          "alt": {
            "ru": "Маникюр Nail Room",
            "en": "Nail Room manicure",
            "hy": "Nail Room մատնահարդարում",
            "uz": "",
            "tg": ""
          }
        },
        {
          "src": "gallery-04.webp",
          "alt": {
            "ru": "Маникюр Nail Room",
            "en": "Nail Room manicure",
            "hy": "Nail Room մատնահարդարում",
            "uz": "",
            "tg": ""
          }
        },
        {
          "src": "gallery-05.webp",
          "alt": {
            "ru": "Маникюр Nail Room",
            "en": "Nail Room manicure",
            "hy": "Nail Room մատնահարդարում",
            "uz": "",
            "tg": ""
          }
        },
        {
          "src": "gallery-06.webp",
          "alt": {
            "ru": "Маникюр Nail Room",
            "en": "Nail Room manicure",
            "hy": "Nail Room մատնահարդարում",
            "uz": "",
            "tg": ""
          }
        },
        {
          "src": "gallery-07.webp",
          "alt": {
            "ru": "Маникюр Nail Room",
            "en": "Nail Room manicure",
            "hy": "Nail Room մատնահարդարում",
            "uz": "",
            "tg": ""
          }
        },
        {
          "src": "gallery-08.webp",
          "alt": {
            "ru": "Маникюр Nail Room",
            "en": "Nail Room manicure",
            "hy": "Nail Room մատնահարդարում",
            "uz": "",
            "tg": ""
          }
        },
        {
          "src": "gallery-09.webp",
          "alt": {
            "ru": "Маникюр Nail Room",
            "en": "Nail Room manicure",
            "hy": "Nail Room մատնահարդարում",
            "uz": "",
            "tg": ""
          }
        },
        {
          "src": "gallery-10.webp",
          "alt": {
            "ru": "Маникюр Nail Room",
            "en": "Nail Room manicure",
            "hy": "Nail Room մատնահարդարում",
            "uz": "",
            "tg": ""
          }
        },
        {
          "src": "gallery-11.webp",
          "alt": {
            "ru": "Маникюр Nail Room",
            "en": "Nail Room manicure",
            "hy": "Nail Room մատնահարդարում",
            "uz": "",
            "tg": ""
          }
        },
        {
          "src": "gallery-12.webp",
          "alt": {
            "ru": "Маникюр Nail Room",
            "en": "Nail Room manicure",
            "hy": "Nail Room մատնահարդարում",
            "uz": "",
            "tg": ""
          }
        },
        {
          "src": "gallery-13.webp",
          "alt": {
            "ru": "Маникюр Nail Room",
            "en": "Nail Room manicure",
            "hy": "Nail Room մատնահարդարում",
            "uz": "",
            "tg": ""
          }
        },
        {
          "src": "gallery-14.webp",
          "alt": {
            "ru": "Маникюр Nail Room",
            "en": "Nail Room manicure",
            "hy": "Nail Room մատնահարդարում",
            "uz": "",
            "tg": ""
          }
        },
        {
          "src": "gallery-15.webp",
          "alt": {
            "ru": "Маникюр Nail Room",
            "en": "Nail Room manicure",
            "hy": "Nail Room մատնահարդարում",
            "uz": "",
            "tg": ""
          }
        },
        {
          "src": "gallery-16.webp",
          "alt": {
            "ru": "Маникюр Nail Room",
            "en": "Nail Room manicure",
            "hy": "Nail Room մատնահարդարում",
            "uz": "",
            "tg": ""
          }
        },
        {
          "src": "gallery-17.webp",
          "alt": {
            "ru": "Маникюр Nail Room",
            "en": "Nail Room manicure",
            "hy": "Nail Room մատնահարդարում",
            "uz": "",
            "tg": ""
          }
        },
        {
          "src": "gallery-18.webp",
          "alt": {
            "ru": "Маникюр Nail Room",
            "en": "Nail Room manicure",
            "hy": "Nail Room մատնահարդարում",
            "uz": "",
            "tg": ""
          }
        },
        {
          "src": "gallery-19.webp",
          "alt": {
            "ru": "Маникюр Nail Room",
            "en": "Nail Room manicure",
            "hy": "Nail Room մատնահարդարում",
            "uz": "",
            "tg": ""
          }
        },
        {
          "src": "gallery-20.webp",
          "alt": {
            "ru": "Маникюр Nail Room",
            "en": "Nail Room manicure",
            "hy": "Nail Room մատնահարդարում",
            "uz": "",
            "tg": ""
          }
        },
        {
          "src": "gallery-21.webp",
          "alt": {
            "ru": "Маникюр Nail Room",
            "en": "Nail Room manicure",
            "hy": "Nail Room մատնահարդարում",
            "uz": "",
            "tg": ""
          }
        },
        {
          "src": "gallery-22.webp",
          "alt": {
            "ru": "Маникюр Nail Room",
            "en": "Nail Room manicure",
            "hy": "Nail Room մատնահարդարում",
            "uz": "",
            "tg": ""
          }
        },
        {
          "src": "gallery-23.webp",
          "alt": {
            "ru": "Маникюр Nail Room",
            "en": "Nail Room manicure",
            "hy": "Nail Room մատնահարդարում",
            "uz": "",
            "tg": ""
          }
        },
        {
          "src": "gallery-24.webp",
          "alt": {
            "ru": "Маникюр Nail Room",
            "en": "Nail Room manicure",
            "hy": "Nail Room մատնահարդարում",
            "uz": "",
            "tg": ""
          }
        },
        {
          "src": "gallery-25.webp",
          "alt": {
            "ru": "Маникюр Nail Room",
            "en": "Nail Room manicure",
            "hy": "Nail Room մատնահարդարում",
            "uz": "",
            "tg": ""
          }
        }
      ]
    },
    "desktopGalleryLimits": {}
  },
  "categoryLabels": {
    "Маникюр": {
      "ru": "Маникюр",
      "en": "Manicure",
      "hy": "Մատնահարդարում",
      "uz": "",
      "tg": ""
    },
    "Педикюр": {
      "ru": "Педикюр",
      "en": "Pedicure",
      "hy": "Ոտնահարդարում",
      "uz": "",
      "tg": ""
    }
  },
  "categoryOrder": [
    "Маникюр",
    "Педикюр"
  ],
  "services": [
    {
      "id": "nail-room-001",
      "category": "Маникюр",
      "title": {
        "ru": "Маникюр",
        "en": "Manicure",
        "hy": "Մատնահարդարում (չիստկա)",
        "uz": "",
        "tg": ""
      },
      "price": {
        "ru": "3000–4000 ֏",
        "en": "3000–4000 ֏",
        "hy": "3000–4000 ֏",
        "uz": "",
        "tg": ""
      },
      "duration": {
        "ru": "30 мин",
        "en": "30 min",
        "hy": "30 րոպե",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": []
    },
    {
      "id": "nail-room-002",
      "category": "Маникюр",
      "title": {
        "ru": "Японский маникюр",
        "en": "Japanese manicure",
        "hy": "Ճապոնական մատնահարդարում",
        "uz": "",
        "tg": ""
      },
      "price": {
        "ru": "6000 ֏",
        "en": "6000 ֏",
        "hy": "6000 ֏",
        "uz": "",
        "tg": ""
      },
      "duration": {
        "ru": "60 мин",
        "en": "60 min",
        "hy": "60 րոպե",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": []
    },
    {
      "id": "nail-room-003",
      "category": "Маникюр",
      "title": {
        "ru": "Покрытие лаком",
        "en": "Nail polish",
        "hy": "Լաքապատում",
        "uz": "",
        "tg": ""
      },
      "price": {
        "ru": "2000–3000 ֏",
        "en": "2000–3000 ֏",
        "hy": "2000–3000 ֏",
        "uz": "",
        "tg": ""
      },
      "duration": {
        "ru": "30 мин",
        "en": "30 min",
        "hy": "30 րոպե",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": []
    },
    {
      "id": "nail-room-004",
      "category": "Маникюр",
      "title": {
        "ru": "Маникюр + Покрытие лаком",
        "en": "Manicure + nail polish",
        "hy": "Մատնահարդարում + Լաքապատում",
        "uz": "",
        "tg": ""
      },
      "price": {
        "ru": "3000–4000 ֏",
        "en": "3000–4000 ֏",
        "hy": "3000–4000 ֏",
        "uz": "",
        "tg": ""
      },
      "duration": {
        "ru": "60 мин",
        "en": "60 min",
        "hy": "60 րոպե",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": []
    },
    {
      "id": "nail-room-005",
      "category": "Маникюр",
      "title": {
        "ru": "Маникюр + покрытие гель-лаком",
        "en": "Manicure + gel polish",
        "hy": "Մատնահարդարում + գելլաք (շելլաք)",
        "uz": "",
        "tg": ""
      },
      "price": {
        "ru": "7000–8000 ֏",
        "en": "7000–8000 ֏",
        "hy": "7000–8000 ֏",
        "uz": "",
        "tg": ""
      },
      "duration": {
        "ru": "90 мин",
        "en": "90 min",
        "hy": "90 րոպե",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": []
    },
    {
      "id": "nail-room-006",
      "category": "Маникюр",
      "title": {
        "ru": "Маникюр + гель-лак — счастливые часы ✨",
        "en": "Manicure + gel polish — happy hours ✨",
        "hy": "Մատնահարդարում + գելլաք — Հաջողակ ժամ ✨",
        "uz": "",
        "tg": ""
      },
      "price": {
        "ru": "от 6000 ֏",
        "en": "from 6000 ֏",
        "hy": "սկսած 6000 ֏",
        "uz": "",
        "tg": ""
      },
      "duration": {
        "ru": "90 мин",
        "en": "90 min",
        "hy": "90 րոպե",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": []
    },
    {
      "id": "nail-room-007",
      "category": "Маникюр",
      "title": {
        "ru": "Снятие гель-лака",
        "en": "Gel polish removal",
        "hy": "Գելլաքի (շելլաք) հեռացում",
        "uz": "",
        "tg": ""
      },
      "price": {
        "ru": "1000 ֏",
        "en": "1000 ֏",
        "hy": "1000 ֏",
        "uz": "",
        "tg": ""
      },
      "duration": {
        "ru": "15 мин",
        "en": "15 min",
        "hy": "15 րոպե",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": []
    },
    {
      "id": "nail-room-008",
      "category": "Маникюр",
      "title": {
        "ru": "Снятие нарощенных ногтей",
        "en": "Nail extension removal",
        "hy": "Լիցքի հեռացում",
        "uz": "",
        "tg": ""
      },
      "price": {
        "ru": "от 2000 ֏",
        "en": "from 2000 ֏",
        "hy": "սկսած 2000 ֏",
        "uz": "",
        "tg": ""
      },
      "duration": {
        "ru": "30 мин",
        "en": "30 min",
        "hy": "30 րոպե",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": []
    },
    {
      "id": "nail-room-009",
      "category": "Маникюр",
      "title": {
        "ru": "Укрепление ногтей",
        "en": "Nail strengthening",
        "hy": "Եղունգների ամրեցում",
        "uz": "",
        "tg": ""
      },
      "price": {
        "ru": "от 5000 ֏",
        "en": "from 5000 ֏",
        "hy": "սկսած 5000 ֏",
        "uz": "",
        "tg": ""
      },
      "duration": {
        "ru": "30 мин",
        "en": "30 min",
        "hy": "30 րոպե",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": []
    },
    {
      "id": "nail-room-010",
      "category": "Маникюр",
      "title": {
        "ru": "Укрепление одного ногтя",
        "en": "Single nail strengthening",
        "hy": "1 մատի ամրեցում",
        "uz": "",
        "tg": ""
      },
      "price": {
        "ru": "500 ֏",
        "en": "500 ֏",
        "hy": "500 ֏",
        "uz": "",
        "tg": ""
      },
      "duration": {
        "ru": "15 мин",
        "en": "15 min",
        "hy": "15 րոպե",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": []
    },
    {
      "id": "nail-room-011",
      "category": "Маникюр",
      "title": {
        "ru": "Наращивание одного ногтя",
        "en": "Single nail extension",
        "hy": "1 մատի լիցք",
        "uz": "",
        "tg": ""
      },
      "price": {
        "ru": "1000 ֏",
        "en": "1000 ֏",
        "hy": "1000 ֏",
        "uz": "",
        "tg": ""
      },
      "duration": {
        "ru": "30 мин",
        "en": "30 min",
        "hy": "30 րոպե",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": []
    },
    {
      "id": "nail-room-012",
      "category": "Маникюр",
      "title": {
        "ru": "Дизайн одного ногтя",
        "en": "Single nail design",
        "hy": "1 մատի դիզայն",
        "uz": "",
        "tg": ""
      },
      "price": {
        "ru": "от 500 ֏",
        "en": "from 500 ֏",
        "hy": "սկսած 500 ֏",
        "uz": "",
        "tg": ""
      },
      "duration": {
        "ru": "15 мин",
        "en": "15 min",
        "hy": "15 րոպե",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": []
    },
    {
      "id": "nail-room-013",
      "category": "Маникюр",
      "title": {
        "ru": "Трендовый дизайн",
        "en": "Trending nail design",
        "hy": "Թրենդային դիզայն",
        "uz": "",
        "tg": ""
      },
      "price": {
        "ru": "от 3000 ֏",
        "en": "from 3000 ֏",
        "hy": "սկսած 3000 ֏",
        "uz": "",
        "tg": ""
      },
      "duration": {
        "ru": "30 мин",
        "en": "30 min",
        "hy": "30 րոպե",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": []
    },
    {
      "id": "nail-room-014",
      "category": "Маникюр",
      "title": {
        "ru": "Френч",
        "en": "French manicure",
        "hy": "Ֆրանսիական մատնահարդարում",
        "uz": "",
        "tg": ""
      },
      "price": {
        "ru": "от 2000 ֏",
        "en": "from 2000 ֏",
        "hy": "սկսած 2000 ֏",
        "uz": "",
        "tg": ""
      },
      "duration": {
        "ru": "30 мин",
        "en": "30 min",
        "hy": "30 րոպե",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": []
    },
    {
      "id": "nail-room-015",
      "category": "Маникюр",
      "title": {
        "ru": "Омбре",
        "en": "Ombré",
        "hy": "Օմբրե",
        "uz": "",
        "tg": ""
      },
      "price": {
        "ru": "3000 ֏",
        "en": "3000 ֏",
        "hy": "3000 ֏",
        "uz": "",
        "tg": ""
      },
      "duration": {
        "ru": "30 мин",
        "en": "30 min",
        "hy": "30 րոպե",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": []
    },
    {
      "id": "nail-room-016",
      "category": "Маникюр",
      "title": {
        "ru": "Втирка",
        "en": "Chrome powder",
        "hy": "Втирка",
        "uz": "",
        "tg": ""
      },
      "price": {
        "ru": "3000 ֏",
        "en": "3000 ֏",
        "hy": "3000 ֏",
        "uz": "",
        "tg": ""
      },
      "duration": {
        "ru": "30 мин",
        "en": "30 min",
        "hy": "30 րոպե",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": []
    },
    {
      "id": "nail-room-017",
      "category": "Маникюр",
      "title": {
        "ru": "Акриловая пудра",
        "en": "Acrylic powder",
        "hy": "Ակրիլի փոշի",
        "uz": "",
        "tg": ""
      },
      "price": {
        "ru": "2000 ֏",
        "en": "2000 ֏",
        "hy": "2000 ֏",
        "uz": "",
        "tg": ""
      },
      "duration": {
        "ru": "30 мин",
        "en": "30 min",
        "hy": "30 րոպե",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": []
    },
    {
      "id": "nail-room-018",
      "category": "Маникюр",
      "title": {
        "ru": "Топ изнутри ногтя",
        "en": "Top coat under the nail",
        "hy": "Տոպ եղունգի ներսից",
        "uz": "",
        "tg": ""
      },
      "price": {
        "ru": "",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "duration": {
        "ru": "30 мин",
        "en": "30 min",
        "hy": "30 րոպե",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": []
    },
    {
      "id": "nail-room-019",
      "category": "Маникюр",
      "title": {
        "ru": "База + топ",
        "en": "Base coat + top coat",
        "hy": "Բազա + տոպ",
        "uz": "",
        "tg": ""
      },
      "price": {
        "ru": "6000–7000 ֏",
        "en": "6000–7000 ֏",
        "hy": "6000–7000 ֏",
        "uz": "",
        "tg": ""
      },
      "duration": {
        "ru": "30 мин",
        "en": "30 min",
        "hy": "30 րոպե",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": []
    },
    {
      "id": "nail-room-020",
      "category": "Маникюр",
      "title": {
        "ru": "Парафинотерапия рук",
        "en": "Hand paraffin treatment",
        "hy": "Ձեռքերի պարաֆինոթերապիա",
        "uz": "",
        "tg": ""
      },
      "price": {
        "ru": "3000–4000 ֏",
        "en": "3000–4000 ֏",
        "hy": "3000–4000 ֏",
        "uz": "",
        "tg": ""
      },
      "duration": {
        "ru": "30 мин",
        "en": "30 min",
        "hy": "30 րոպե",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": []
    },
    {
      "id": "nail-room-021",
      "category": "Маникюр",
      "title": {
        "ru": "Моделирование гелем",
        "en": "Gel nail modelling",
        "hy": "Գելային մոդելավորում (լիցք)",
        "uz": "",
        "tg": ""
      },
      "price": {
        "ru": "16000–17000 ֏",
        "en": "16000–17000 ֏",
        "hy": "16000–17000 ֏",
        "uz": "",
        "tg": ""
      },
      "duration": {
        "ru": "120 мин",
        "en": "120 min",
        "hy": "120 րոպե",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": []
    },
    {
      "id": "nail-room-022",
      "category": "Маникюр",
      "title": {
        "ru": "Наращивание Gel - X с моделированием",
        "en": "Gel-X extensions + gel modelling",
        "hy": "Gel-X + գել",
        "uz": "",
        "tg": ""
      },
      "price": {
        "ru": "16000–17000 ֏",
        "en": "16000–17000 ֏",
        "hy": "16000–17000 ֏",
        "uz": "",
        "tg": ""
      },
      "duration": {
        "ru": "165 мин",
        "en": "165 min",
        "hy": "165 րոպե",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": []
    },
    {
      "id": "nail-room-023",
      "category": "Маникюр",
      "title": {
        "ru": "Коррекция гелем",
        "en": "Gel correction",
        "hy": "Գելային կորեկցիա",
        "uz": "",
        "tg": ""
      },
      "price": {
        "ru": "8000 ֏",
        "en": "8000 ֏",
        "hy": "8000 ֏",
        "uz": "",
        "tg": ""
      },
      "duration": {
        "ru": "90 мин",
        "en": "90 min",
        "hy": "90 րոպե",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": []
    },
    {
      "id": "nail-room-024",
      "category": "Маникюр",
      "title": {
        "ru": "Укрепление гелем",
        "en": "Gel strengthening",
        "hy": "Գելով ամրացում",
        "uz": "",
        "tg": ""
      },
      "price": {
        "ru": "8000–9000 ֏",
        "en": "8000–9000 ֏",
        "hy": "8000–9000 ֏",
        "uz": "",
        "tg": ""
      },
      "duration": {
        "ru": "90 мин",
        "en": "90 min",
        "hy": "90 րոպե",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": []
    },
    {
      "id": "nail-room-025",
      "category": "Маникюр",
      "title": {
        "ru": "Моделирование полигелем",
        "en": "Polygel modelling",
        "hy": "Պոլիգելով մոդելավորում (լիցք)",
        "uz": "",
        "tg": ""
      },
      "price": {
        "ru": "от 12000 ֏",
        "en": "from 12000 ֏",
        "hy": "սկսած 12000 ֏",
        "uz": "",
        "tg": ""
      },
      "duration": {
        "ru": "120 мин",
        "en": "120 min",
        "hy": "120 րոպե",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": []
    },
    {
      "id": "nail-room-026",
      "category": "Маникюр",
      "title": {
        "ru": "Коррекция полигелем",
        "en": "Polygel correction",
        "hy": "Պոլիգելով կորեկցիա",
        "uz": "",
        "tg": ""
      },
      "price": {
        "ru": "8000 ֏",
        "en": "8000 ֏",
        "hy": "8000 ֏",
        "uz": "",
        "tg": ""
      },
      "duration": {
        "ru": "90 мин",
        "en": "90 min",
        "hy": "90 րոպե",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": []
    },
    {
      "id": "nail-room-027",
      "category": "Маникюр",
      "title": {
        "ru": "Моделирование с формой",
        "en": "Nail modelling with forms",
        "hy": "Ֆորմայով մոդելավորում",
        "uz": "",
        "tg": ""
      },
      "price": {
        "ru": "12000 ֏",
        "en": "12000 ֏",
        "hy": "12000 ֏",
        "uz": "",
        "tg": ""
      },
      "duration": {
        "ru": "120 мин",
        "en": "120 min",
        "hy": "120 րոպե",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": []
    },
    {
      "id": "nail-room-028",
      "category": "Маникюр",
      "title": {
        "ru": "Мужской маникюр",
        "en": "Men’s manicure",
        "hy": "Տղամարդկանց ձեռքերի չիստկա",
        "uz": "",
        "tg": ""
      },
      "price": {
        "ru": "5000–6000 ֏",
        "en": "5000–6000 ֏",
        "hy": "5000–6000 ֏",
        "uz": "",
        "tg": ""
      },
      "duration": {
        "ru": "45 мин",
        "en": "45 min",
        "hy": "45 րոպե",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": []
    },
    {
      "id": "nail-room-029",
      "category": "Педикюр",
      "title": {
        "ru": "Покрытие лаком ног",
        "en": "Toenail polish",
        "hy": "Ոտքերի լաքապատում",
        "uz": "",
        "tg": ""
      },
      "price": {
        "ru": "3000–4000 ֏",
        "en": "3000–4000 ֏",
        "hy": "3000–4000 ֏",
        "uz": "",
        "tg": ""
      },
      "duration": {
        "ru": "30 мин",
        "en": "30 min",
        "hy": "30 րոպե",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": []
    },
    {
      "id": "nail-room-030",
      "category": "Педикюр",
      "title": {
        "ru": "Педикюр без обработки стоп",
        "en": "Pedicure without sole treatment",
        "hy": "Ոտքերի չիստկա",
        "uz": "",
        "tg": ""
      },
      "price": {
        "ru": "7000–8000 ֏",
        "en": "7000–8000 ֏",
        "hy": "7000–8000 ֏",
        "uz": "",
        "tg": ""
      },
      "duration": {
        "ru": "45 мин",
        "en": "45 min",
        "hy": "45 րոպե",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": []
    },
    {
      "id": "nail-room-031",
      "category": "Педикюр",
      "title": {
        "ru": "Педикюр",
        "en": "Pedicure",
        "hy": "Ոտնահարդարում",
        "uz": "",
        "tg": ""
      },
      "price": {
        "ru": "9000–10000 ֏",
        "en": "9000–10000 ֏",
        "hy": "9000–10000 ֏",
        "uz": "",
        "tg": ""
      },
      "duration": {
        "ru": "90 мин",
        "en": "90 min",
        "hy": "90 րոպե",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": []
    },
    {
      "id": "nail-room-032",
      "category": "Педикюр",
      "title": {
        "ru": "Снятие гель-лака ног",
        "en": "Toenail gel polish removal",
        "hy": "Ոտքերի գելլաքի հեռացում",
        "uz": "",
        "tg": ""
      },
      "price": {
        "ru": "2000 ֏",
        "en": "2000 ֏",
        "hy": "2000 ֏",
        "uz": "",
        "tg": ""
      },
      "duration": {
        "ru": "15 мин",
        "en": "15 min",
        "hy": "15 րոպե",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": []
    },
    {
      "id": "nail-room-033",
      "category": "Педикюр",
      "title": {
        "ru": "Педикюр (без обработки стоп) + покрытие лаком",
        "en": "Pedicure without sole treatment + nail polish",
        "hy": "Ոտքերի չիստկա + լաքապատում",
        "uz": "",
        "tg": ""
      },
      "price": {
        "ru": "7000–8000 ֏",
        "en": "7000–8000 ֏",
        "hy": "7000–8000 ֏",
        "uz": "",
        "tg": ""
      },
      "duration": {
        "ru": "60 мин",
        "en": "60 min",
        "hy": "60 րոպե",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": []
    },
    {
      "id": "nail-room-034",
      "category": "Педикюр",
      "title": {
        "ru": "Педикюр + покрытие лаком",
        "en": "Pedicure + nail polish",
        "hy": "Ոտնահարդարում + լաքապատում",
        "uz": "",
        "tg": ""
      },
      "price": {
        "ru": "9000–10000 ֏",
        "en": "9000–10000 ֏",
        "hy": "9000–10000 ֏",
        "uz": "",
        "tg": ""
      },
      "duration": {
        "ru": "90 мин",
        "en": "90 min",
        "hy": "90 րոպե",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": []
    },
    {
      "id": "nail-room-035",
      "category": "Педикюр",
      "title": {
        "ru": "Педикюр (без обработки стоп) + покрытие гель-лаком",
        "en": "Pedicure without sole treatment + gel polish",
        "hy": "Ոտքերի չիստկա + գելլաք (շելլաք)",
        "uz": "",
        "tg": ""
      },
      "price": {
        "ru": "10000–11000 ֏",
        "en": "10000–11000 ֏",
        "hy": "10000–11000 ֏",
        "uz": "",
        "tg": ""
      },
      "duration": {
        "ru": "90 мин",
        "en": "90 min",
        "hy": "90 րոպե",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": []
    },
    {
      "id": "nail-room-036",
      "category": "Педикюр",
      "title": {
        "ru": "Педикюр + покрытие гель-лаком",
        "en": "Pedicure + gel polish",
        "hy": "Ոտնահարդարում + գելլաք (շելլաք)",
        "uz": "",
        "tg": ""
      },
      "price": {
        "ru": "12000–13000 ֏",
        "en": "12000–13000 ֏",
        "hy": "12000–13000 ֏",
        "uz": "",
        "tg": ""
      },
      "duration": {
        "ru": "105 мин",
        "en": "105 min",
        "hy": "105 րոպե",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": []
    },
    {
      "id": "nail-room-037",
      "category": "Педикюр",
      "title": {
        "ru": "Педикюр + гель-лак — счастливые часы ✨",
        "en": "Pedicure + gel polish — happy hours ✨",
        "hy": "Ոտնահարդարում գելլաք — Հաջողակ ժամ✨",
        "uz": "",
        "tg": ""
      },
      "price": {
        "ru": "от 10000 ֏",
        "en": "from 10000 ֏",
        "hy": "սկսած 10000 ֏",
        "uz": "",
        "tg": ""
      },
      "duration": {
        "ru": "90 мин",
        "en": "90 min",
        "hy": "90 րոպե",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": []
    },
    {
      "id": "nail-room-038",
      "category": "Педикюр",
      "title": {
        "ru": "Парафинотерапия ног",
        "en": "Foot paraffin treatment",
        "hy": "Ոտքերի պարաֆինոթերապիա",
        "uz": "",
        "tg": ""
      },
      "price": {
        "ru": "от 5000 ֏",
        "en": "from 5000 ֏",
        "hy": "սկսած 5000 ֏",
        "uz": "",
        "tg": ""
      },
      "duration": {
        "ru": "30 мин",
        "en": "30 min",
        "hy": "30 րոպե",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": []
    },
    {
      "id": "nail-room-039",
      "category": "Педикюр",
      "title": {
        "ru": "Мужской педикюр",
        "en": "Men’s pedicure",
        "hy": "Տղամարդկանց ոտնահարդարում",
        "uz": "",
        "tg": ""
      },
      "price": {
        "ru": "11000–12000 ֏",
        "en": "11000–12000 ֏",
        "hy": "11000–12000 ֏",
        "uz": "",
        "tg": ""
      },
      "duration": {
        "ru": "60 мин",
        "en": "60 min",
        "hy": "60 րոպե",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": []
    }
  ],
  "team": [],
  "reviews": [
    {
      "id": "google-irene-malkh",
      "author": {
        "ru": "Irene Malkh",
        "en": "Irene Malkh",
        "hy": "Irene Malkh",
        "uz": "",
        "tg": ""
      },
      "text": {
        "ru": "Отличный сервис, приятные сотрудники, а качество работы просто супер! Очень советую это место :) 100% я вернусь!",
        "en": "Excellent service, pleasant staff, and the quality of the work is just superb! I highly recommend this place :) I will definitely be back!",
        "hy": "Գերազանց սպասարկում, հաճելի աշխատակիցներ, իսկ աշխատանքի որակը պարզապես հրաշալի է։ Շատ եմ խորհուրդ տալիս այս վայրը :) Անպայման կվերադառնամ։",
        "uz": "",
        "tg": ""
      },
      "source": {
        "ru": "Google Maps",
        "en": "Google Maps",
        "hy": "Google Maps",
        "uz": "",
        "tg": ""
      },
      "rating": 5,
      "url": "https://www.google.com/maps/search/?api=1&query=Nail%20Room%20Yerevan&query_place_id=ChIJMRHE4y29akARZ84GytMLYjM"
    }
  ]
};
  global.TANEM_SITE_DATA=data;
  const rows=[];
  const collect=value=>{
    if(!value||typeof value!=='object')return;
    if(typeof value.ru==='string'&&typeof value.en==='string'&&typeof value.hy==='string'){
      if(value.ru)rows.push([value.ru,value.hy,value.en]);
      return;
    }
    if(Array.isArray(value))value.forEach(collect);
    else Object.values(value).forEach(collect);
  };
  collect(data);
  global.TANEM_SITE_I18N_ROWS=rows;
})(window);
