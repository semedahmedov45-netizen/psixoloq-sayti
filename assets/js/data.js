const DEFAULT_DATA = {
  name: "Dr. Aytac Ələkbərova",
  experience: "8+",
  heroTitle: {
    az: "Daha sakit, balanslı və özünə inamlı həyat üçün.",
    en: "For a calmer, more balanced and confident life.",
    ru: "Для более спокойной, гармоничной и уверенной жизни."
  },
  heroText: {
    az: "Peşəkar psixoloji konsultasiya ilə özünüzü daha yaxşı tanımağa və həyatınızdakı dəyişikliklərə addım-addım hazır olmağa başlayın.",
    en: "Start understanding yourself better and moving toward meaningful change with professional psychological support.",
    ru: "Начните лучше понимать себя и шаг за шагом двигаться к изменениям с профессиональной психологической поддержкой."
  },
  heroImage: "assets/images/psychologist.svg",
  aboutTitle: {
    az: "Sizin hekayəniz önəmlidir.",
    en: "Your story matters.",
    ru: "Ваша история важна."
  },
  aboutText: {
    az: "Məqsədim sizin üçün rahat və güvənli ünsiyyət mühiti yaratmaq, yaşadığınız çətinlikləri anlamaq və uyğun psixoloji yanaşmanı birlikdə seçməkdir.",
    en: "My goal is to create a safe and comfortable space, understand your challenges and choose the right psychological approach together.",
    ru: "Моя цель — создать безопасное пространство, понять ваши трудности и вместе выбрать подходящий психологический подход."
  },
  education: "Bakı Dövlət Universiteti",
  qualification: "Klinik Psixoloq",
  sessionMode: "Online + Canlı",
  aboutImage: "assets/images/psychologist.svg",
  whatsapp: "994500000000",
  instagram: "#",
  facebook: "#",
  youtube: "#",
  tiktok: "#",
  services: [
    {icon:"♡", title:{az:"Anksiyete",en:"Anxiety",ru:"Тревожность"}, text:{az:"Narahatlıq və həddindən artıq düşüncələrlə işləmək.",en:"Support for anxiety and excessive worrying.",ru:"Работа с тревогой и чрезмерными переживаниями."}},
    {icon:"◉", title:{az:"Panik atak",en:"Panic attacks",ru:"Панические атаки"}, text:{az:"Panik simptomlarını anlamaq və idarə etməyi öyrənmək.",en:"Understanding and managing panic symptoms.",ru:"Понимание и управление симптомами паники."}},
    {icon:"◇", title:{az:"Özünə inam",en:"Self-confidence",ru:"Уверенность в себе"}, text:{az:"Öz dəyərini və sağlam özünə münasibəti gücləndirmək.",en:"Building self-worth and healthy self-esteem.",ru:"Развитие самоценности и здоровой самооценки."}},
    {icon:"∞", title:{az:"Münasibətlər",en:"Relationships",ru:"Отношения"}, text:{az:"Sağlam sərhədlər, ünsiyyət və münasibət çətinlikləri.",en:"Boundaries, communication and relationship challenges.",ru:"Границы, коммуникация и сложности в отношениях."}}
  ],
  articles: [
    {image:"assets/images/article.svg", title:{az:"Həddindən artıq düşünmə ilə necə işləmək olar?",en:"How to work with overthinking?",ru:"Как справляться с чрезмерными мыслями?"}, text:{az:"Düşüncələrinizin sizi idarə etdiyi anları tanımaq üçün kiçik addımlar.",en:"Small steps to recognize when thoughts begin to control you.",ru:"Небольшие шаги, чтобы замечать, когда мысли начинают управлять вами."}},
    {image:"assets/images/article.svg", title:{az:"Sağlam sərhədlər nədir?",en:"What are healthy boundaries?",ru:"Что такое здоровые границы?"}, text:{az:"Münasibətlərdə öz ehtiyaclarınızı ifadə etməyin yolları.",en:"Ways to express your needs in relationships.",ru:"Как выражать свои потребности в отношениях."}},
    {image:"assets/images/article.svg", title:{az:"Emosiyaları qəbul etmək",en:"Accepting emotions",ru:"Принятие эмоций"}, text:{az:"Emosiyaları boğmaq əvəzinə onları anlamağa başlamaq.",en:"Learning to understand emotions instead of suppressing them.",ru:"Как учиться понимать эмоции, а не подавлять их."}}
  ],
  faq: [
    {q:{az:"İlk konsultasiyada nə baş verir?",en:"What happens in the first consultation?",ru:"Что происходит на первой консультации?"},a:{az:"İlk görüşdə müraciət səbəbinizi, gözləntilərinizi və sizə uyğun iş formasını birlikdə müzakirə edirik.",en:"We discuss your reason for seeking support, expectations and the most suitable format of work.",ru:"Мы обсуждаем причину обращения, ожидания и наиболее подходящий формат работы."}},
    {q:{az:"Seanslar online keçirilə bilər?",en:"Can sessions be online?",ru:"Можно ли проводить сессии онлайн?"},a:{az:"Bəli. Online və canlı görüş formatları mümkündür.",en:"Yes. Both online and in-person sessions are available.",ru:"Да. Доступны онлайн и очные встречи."}},
    {q:{az:"Seans nə qədər davam edir?",en:"How long is a session?",ru:"Сколько длится сессия?"},a:{az:"Standart konsultasiya müddəti 50–60 dəqiqədir.",en:"A standard consultation lasts 50–60 minutes.",ru:"Стандартная консультация длится 50–60 минут."}}
  ]
};
function loadSiteData(){try{return JSON.parse(localStorage.getItem("psychologistSiteData"))||structuredClone(DEFAULT_DATA)}catch(e){return structuredClone(DEFAULT_DATA)}}
function saveSiteData(data){localStorage.setItem("psychologistSiteData",JSON.stringify(data))}
