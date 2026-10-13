export interface EntrySituation {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: 'task' | 'idea' | 'materials' | 'problem' | 'custom';
}

export interface PossibleFormat {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: 'web' | 'visual' | 'content' | 'creative' | 'custom';
}

export interface ProcessStep {
  number: string;
  stageName: string;
  title: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  type: 'book' | 'presentation' | 'game' | 'video' | 'website' | 'visual';
  featured: boolean;
  imageUrl: string;
  linkText?: string;
  linkUrl?: string;
}

export interface SiteContent {
  brand: {
    name: string;
    founder: string;
    tagline: string;
  };
  portfolioUrl: string;
  contacts: {
    email: string;
    telegram: string;
    vk?: string;
    max?: string;
    status: string;
  };
  hero: {
    title: string;
    subtitle: string;
    reassuranceNote: string;
    primaryCta: string;
    secondaryCta: string;
  };
  entrySituations: {
    sectionTitle: string;
    sectionSubtitle: string;
    reassuranceQuote: string;
    bottomNote: string;
    items: EntrySituation[];
  };
  possibleFormats: {
    sectionTitle: string;
    sectionSubtitle: string;
    items: PossibleFormat[];
    faqQuestion: string;
    faqAnswer: string;
  };
  aboutFounder: {
    sectionTitle: string;
    textParagraphs: string[];
    founderName: string;
    founderTitle: string;
    founderImageUrl?: string;
  };
  process: {
    sectionTitle: string;
    sectionSubtitle: string;
    steps: ProcessStep[];
  };
  caseStudies: {
    sectionTitle: string;
    sectionSubtitle: string;
    viewAllButtonText: string;
    items: ProjectItem[];
  };
  manifesto: {
    sectionTitle: string;
    sectionSubtitle: string;
    features: Array<{
      title: string;
      description: string;
    }>;
  };
  finalCta: {
    sectionTitle: string;
    description: string;
    ctaButton: string;
  };
  unusualTask: {
    sectionTitle: string;
    description: string;
    ctaButton: string;
  };
  whatHappensNext: {
    sectionTitle: string;
    steps: Array<{
      number: string;
      title: string;
      description: string;
    }>;
  };
  portfolioLink: {
    text: string;
  };
  contactForm: {
    sectionTitle: string;
    sectionSubtitle: string;
    fields: {
      namePlaceholder: string;
      contactPlaceholder: string;
      messagePlaceholder: string;
    };
    submitButton: string;
  };
}

export const siteContent: SiteContent = {
  brand: {
    name: "EK STUDIO",
    founder: "Екатерина",
    tagline: "Студия авторских цифровых и визуальных решений"
  },
  portfolioUrl: "https://savinaekaterina.github.io/ek-studio/",
  contacts: {
    email: "hello@ek-studio.design",
    telegram: "@ek_studio",
    status: "Открыта к новым задачам"
  },
  hero: {
    title: "Не знаете, во что превратить идею? Давайте разберёмся вместе.",
    subtitle: "Помогаю превращать идеи и задачи в готовые цифровые и визуальные проекты — от сайтов и контента до необычных решений с помощью нейросетей.",
    reassuranceNote: "Не обязательно заранее знать, какой формат вам нужен. Начнём с вашей идеи.",
    primaryCta: "Рассказать о задаче",
    secondaryCta: "Посмотреть проекты"
  },
  entrySituations: {
    sectionTitle: "С чем можно прийти?",
    sectionSubtitle: "Необязательно знать, как это называется и какими инструментами делается. Расскажите, что вам нужно, — вместе найдём подходящий формат.",
    reassuranceQuote: "Вам не нужно готовить сложное ТЗ — мы начнём с обычного диалога.",
    bottomNote: "Не нужно приходить с готовым техническим заданием. Можно просто начать с разговора.",
    items: [
      {
        id: "idea",
        number: "01",
        title: "Есть идея",
        subtitle: "С чего начать",
        description: "Но пока непонятно, как воплотить её в жизнь и с чего начать.",
        iconName: "idea"
      },
      {
        id: "website",
        number: "02",
        title: "Нужен сайт",
        subtitle: "Представительство в сети",
        description: "Хочется представить свой проект, услугу или дело в интернете.",
        iconName: "task"
      },
      {
        id: "visual",
        number: "03",
        title: "Нужно создать что-то красивое",
        subtitle: "Визуал & Контент",
        description: "Визуалы, открытки, видео, оформление или другой творческий материал.",
        iconName: "custom"
      },
      {
        id: "automation",
        number: "04",
        title: "Хочется упростить работу",
        subtitle: "ИИ & Автоматизация",
        description: "Есть задача, для которой можно подобрать ИИ-инструмент или автоматизацию.",
        iconName: "problem"
      }
    ]
  },
  possibleFormats: {
    sectionTitle: "Во что может превратиться ваша идея",
    sectionSubtitle: "Формат зависит от задачи. Это примеры возможностей, а не полный и сухой прейскурант.",
    items: [
      {
        id: "web",
        number: "01",
        title: "Сайты и цифровые проекты",
        description: "Сайт, лендинг, портфолио, специальная страница, интерактивный проект и другие цифровые решения.",
        iconName: "web"
      },
      {
        id: "visual",
        number: "02",
        title: "Визуальные материалы",
        description: "Презентации, открытки, сертификаты, флаеры, макеты, оформление и другие визуальные материалы.",
        iconName: "visual"
      },
      {
        id: "content",
        number: "03",
        title: "Контент и AI-инструменты",
        description: "Контентные решения, визуалы, сценарии, системы работы с AI и инструменты, которые помогают создавать и упаковывать идеи.",
        iconName: "content"
      },
      {
        id: "creative",
        number: "04",
        title: "Творческие проекты",
        description: "Книги, сказки, необычные цифровые проекты, визуальные истории и идеи, которым ещё только предстоит обрести форму.",
        iconName: "creative"
      },
      {
        id: "custom",
        number: "05",
        title: "Нестандартные задачи",
        description: "Если задача не подходит ни под одну категорию — это нормально. Расскажите, что вы задумали.",
        iconName: "custom"
      }
    ],
    faqQuestion: "А если я пока сама не знаю, что мне нужно?",
    faqAnswer: "Это тоже задача. Начнём с разговора."
  },
  aboutFounder: {
    sectionTitle: "Привет! Я Екатерина.",
    founderName: "Екатерина Савина",
    founderTitle: "Основатель EK Studio",
    founderImageUrl: "/assets/ekaterina_savina.jpg",
    textParagraphs: [
      "Создаю EK Studio — пространство, где творчество встречается с технологиями, а идеи постепенно превращаются в реальные проекты.",
      "Мне интересно искать нестандартные решения, экспериментировать с нейросетями, соединять визуальные образы, дизайн и интерактивность. Не просто делать что-то красивое, а находить форму, которая подходит именно вашей задаче.",
      "Поэтому ко мне можно прийти даже с идеей, которая пока существует только в голове. Вместе разберёмся, что из неё можно создать и с чего лучше начать.",
      "Люблю идеи, у которых ещё нет готового шаблона."
    ]
  },
  process: {
    sectionTitle: "Как идея превращается в результат",
    sectionSubtitle: "Простой и понятный путь взаимодействия без лишней бюрократии.",
    steps: [
      {
        number: "01",
        stageName: "Обсуждение",
        title: "Обсуждаем идею",
        description: "Ты рассказываешь, что хочешь получить. Даже если пока не знаешь, как это должно выглядеть."
      },
      {
        number: "02",
        stageName: "Поиск решения",
        title: "Ищем решение",
        description: "Вместе определяем подходящий формат, продумываем детали и выбираем инструменты."
      },
      {
        number: "03",
        stageName: "Создание",
        title: "Создаём проект",
        description: "Работаем над согласованным вариантом, показываем результат и при необходимости вносим правки."
      },
      {
        number: "04",
        stageName: "Передача",
        title: "Передаём готовую работу",
        description: "Ты получаешь результат, который можно использовать для своей задачи."
      }
    ]
  },
  caseStudies: {
    sectionTitle: "У каждой задачи своя форма",
    sectionSubtitle: "Не всегда заранее понятно, каким должен быть результат. Иногда это сайт, иногда книга, презентация, видео или интерактивный проект. Я помогаю найти подходящую форму и довести идею до готового результата.",
    viewAllButtonText: "Посмотреть все работы →",
    items: [
      {
        id: "evdokya",
        title: "Евдокия. Девочка лунного света",
        category: "Авторская книга · Иллюстрация · AI Art",
        description: "Авторская детская книга, где идея, текст, иллюстрации и визуальная концепция собраны в единое произведение.",
        type: "book",
        featured: true,
        imageUrl: "https://savinaekaterina.github.io/skaskaproEvdokiu/image/front-cover.webp",
        linkText: "Смотреть проект →",
        linkUrl: "https://savinaekaterina.github.io/skaskaproEvdokiu/"
      },
      {
        id: "we_are_all_different",
        title: "Мы все разные",
        category: "Презентация · Образовательный проект · AI Design",
        description: "Сложную тему превратили в понятную визуальную историю — через метафоры, иллюстрации и простую систему образов.",
        type: "presentation",
        featured: true,
        imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
        linkText: "Смотреть проект →",
        linkUrl: "https://notebooklm.link.google/1SUDdTV6Bstd"
      },
      {
        id: "umi_world",
        title: "Мир Луми",
        category: "Интерактивный проект · Game Design · AI",
        description: "Интерактивный проект, в котором идея превращается в игровой мир с собственной логикой, персонажами и механиками.",
        type: "game",
        featured: true,
        imageUrl: "https://savinaekaterina.github.io/mirlumi/lumi/character/lumi_retry.webp",
        linkText: "Смотреть проект →",
        linkUrl: "https://savinaekaterina.github.io/mirlumi/"
      },
      {
        id: "petersburg_walk",
        title: "Прогулка по Петербургу",
        category: "Промо-видео · AI Video · Туризм",
        description: "Промо-видео, где исторический образ Петербурга соединён с современным AI-видеоподходом и превращён в визуальное путешествие.",
        type: "video",
        featured: true,
        imageUrl: "/assets/petersburg_cover_opt.jpg",
        linkText: "Смотреть клип в VK →",
        linkUrl: "https://vk.ru/clip-181151717_456239049"
      },
      {
        id: "memory",
        title: "Хранители памяти",
        category: "Собственный проект · Восстановление фото",
        description: "Самостоятельный сайт услуг по восстановлению и оживлению семейных фотографий.",
        type: "website",
        featured: true,
        imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
        linkText: "Посмотреть сайт →",
        linkUrl: "https://savinaekaterina.github.io/hranitelipamyati/"
      },
      {
        id: "academic",
        title: "Сайт преподавателя",
        category: "Персональный бренд · Курсы",
        description: "Системная и доверительная подача академических программ и авторских курсов.",
        type: "website",
        featured: false,
        imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
        linkText: "Смотреть проект →",
        linkUrl: "https://savinaekaterina.github.io/ek-studio/"
      },
      {
        id: "lash_architecture",
        title: "Архитектура ресниц",
        category: "Брендинг · Визуальный стиль",
        description: "Концептуальное оформление, айдентика и визуальные материалы для эстетической студии.",
        type: "visual",
        featured: false,
        imageUrl: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
        linkText: "Смотреть проект →",
        linkUrl: "https://savinaekaterina.github.io/ek-studio/"
      }
    ]
  },
  manifesto: {
    sectionTitle: "Не по шаблону, а под вашу задачу",
    sectionSubtitle: "Принципы, на которых строится работа в EK Studio.",
    features: [
      {
        title: "Индивидуальный подход",
        description: "Не подгоняем идею под готовую услугу, а ищем подходящий формат."
      },
      {
        title: "Творчество и технологии",
        description: "Соединяем визуальную составляющую, нейросети и интерактивные решения там, где они действительно нужны."
      },
      {
        title: "От идеи до результата",
        description: "Помогаем пройти путь от задумки до готового проекта."
      }
    ]
  },
  finalCta: {
    sectionTitle: "Не знаете, с чего начать?",
    description: "Расскажите, что вы задумали. Вместе подумаем, как воплотить вашу идею в жизнь — без сложных терминов и необходимости заранее во всём разбираться.",
    ctaButton: "Есть идея? Давайте обсудим"
  },
  unusualTask: {
    sectionTitle: "Переведём вашу идею на язык визуальной культуры",
    description: "Создаю цифровые пространства, книги, презентации и визуальные миры, в которых AI и технологии соединяются с тонким чувством стиля. Давайте сделаем что-то живое и запоминающееся.",
    ctaButton: "РАССКАЗАТЬ О ПРОЕКТЕ →"
  },
  whatHappensNext: {
    sectionTitle: "Что происходит после обращения",
    steps: [
      {
        number: "01",
        title: "Вы рассказываете, что хотите сделать.",
        description: "Можно своими словами. Без технического задания."
      },
      {
        number: "02",
        title: "Мы разбираемся в задаче.",
        description: "Определяем, что действительно нужно и какой формат подойдёт."
      },
      {
        number: "03",
        title: "Предлагаем путь реализации.",
        description: "После этого становится понятно, что делать дальше."
      }
    ]
  },
  portfolioLink: {
    text: "Посмотреть больше проектов в EK Studio"
  },
  contactForm: {
    sectionTitle: "Мои контакты",
    sectionSubtitle: "Выберите удобный канал связи — Telegram, ВКонтакте или MAX. Напишите мне прямо сейчас — обсудим вашу задачу и вместе найдём лучшее решение.",
    fields: {
      namePlaceholder: "Как вас зовут?",
      contactPlaceholder: "Ваш ник / Телефон / Email",
      messagePlaceholder: "Напишите пару слов о вашей идее..."
    },
    submitButton: "Отправить сообщение"
  }
};
