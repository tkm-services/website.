// Embedded lightweight language system (AR + EN)
const LANG_DATA = {
  "ar": {
    "nav_home":"الرئيسية",
    "nav_services":"الخدمات",
    "nav_portfolio":"أعمالنا",
    "nav_about":"من نحن",
    "nav_contact":"تواصل",

    "brand_title":"TKM — خدمات رقمية احترافية",
    "hero_title":"TKM — خدمات رقمية احترافية",
    "hero_desc":"نقدم خدمات السوشيال ميديا، التصميم، والاشتراكات الرقمية بجودة عالية.",
    "hero_cta1":"اطلب الآن",
    "hero_cta2":"اكتشف خدماتنا",

    "services_title":"خدمات TKM",
    "service1_title":"إدارة السوشيال ميديا",
    "service1_desc":"تسيير الصفحات، إنشاء المحتوى، الإعلانات، والجرافيك.",
    "service2_title":"الاشتراكات المميزة",
    "service2_desc":"YouTube Premium - ChatGPT Plus - Canva Pro - CapCut ...",
    "service3_title":"التصميم الجرافيكي",
    "service3_desc":"تصميم لوجوهات، بوستات، كوفرات، إشهارات.",
    "service4_title":"خدمات أخرى",
    "service4_desc":"مونطاج ومحتوى فيديو وخدمات رقمية متعددة.",

    "about_title":"من نحن",
    "about_subtitle":"منصة TKM",
    "about_text":"TKM هي وكالة رقمية متخصصة في إدارة صفحات التواصل الاجتماعي، التصميم، وبيع الاشتراكات الرقمية.",
    "mission_title":"مهمتنا",
    "mission_text":"تسهيل الوصول لخدمات رقمية متميزة وبأسعار معقولة.",
    "vision_title":"رؤيتنا",
    "vision_text":"أن نكون مرجعًا موثوقًا في المنطقة.",

    "contact_title":"تواصل معنا",
    "contact_desc":"عمّر الفورم أو تواصل معنا عبر الواتساب.",
    "send_btn":"أرسل",

    "contact_info_title":"معلومات التواصل",
    "contact_phone":"واتساب: +212 000 000 000",
    "contact_email":"البريد: hello@tkm.example",
    "contact_inst":"إنستغرام: @teamkhalidmedia",

    "portfolio_title":"أعمالنا",
    "portfolio_desc":"بعض المشاريع التي اشتغلنا عليها.",
    "project1_title":"تصميم لوجو احترافي",
    "project2_title":"إدارة صفحة انستغرام",
    "project3_title":"بوستات سوشيال ميديا",
    "project4_title":"مونطاج فيديو قصير",

    "footer_text":"© جميع الحقوق محفوظة — TKM"
  },

  "en": {
    "nav_home":"Home",
    "nav_services":"Services",
    "nav_portfolio":"Portfolio",
    "nav_about":"About",
    "nav_contact":"Contact",

    "brand_title":"TKM — Professional Digital Services",
    "hero_title":"TKM — Professional Digital Services",
    "hero_desc":"We provide social media services, design, and premium subscriptions.",
    "hero_cta1":"Order Now",
    "hero_cta2":"Discover Services",

    "services_title":"TKM Services",
    "service1_title":"Social Media Management",
    "service1_desc":"Page management, content creation, ads, and graphics.",
    "service2_title":"Premium Subscriptions",
    "service2_desc":"YouTube Premium - ChatGPT Plus - Canva Pro - CapCut ...",
    "service3_title":"Graphic Design",
    "service3_desc":"Logos, posts, covers, ad creatives.",
    "service4_title":"Other Services",
    "service4_desc":"Video editing, content production and more.",

    "about_title":"About Us",
    "about_subtitle":"TKM Platform",
    "about_text":"TKM is a digital agency specialized in social media, design and subscription services.",
    "mission_title":"Our Mission",
    "mission_text":"Make premium digital services accessible and affordable.",
    "vision_title":"Our Vision",
    "vision_text":"To be a trusted reference in the region.",

    "contact_title":"Contact Us",
    "contact_desc":"Fill the form or contact us on WhatsApp.",
    "send_btn":"Send",

    "contact_info_title":"Contact Info",
    "contact_phone":"WhatsApp: +212 000 000 000",
    "contact_email":"Email: hello@tkm.example",
    "contact_inst":"Instagram: @teamkhalidmedia",

    "portfolio_title":"Portfolio",
    "portfolio_desc":"Some projects we worked on.",
    "project1_title":"Professional Logo Design",
    "project2_title":"Instagram Page Management",
    "project3_title":"Social Posts",
    "project4_title":"Short Video Editing",

    "footer_text":"© All rights reserved — TKM"
  }
};

// ---------------- LANGUAGE SWITCH ----------------
function setLang(lang){
  const data = LANG_DATA[lang] || LANG_DATA['ar'];

  document.querySelectorAll('[data-key]').forEach(el=>{
    const key = el.getAttribute('data-key');
    if(data[key]) el.innerHTML = data[key];
  });

  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = lang;

  const logo = document.getElementById('logo');
  if (logo) logo.src = lang === 'ar' ? 'images/khalid.png' : 'images/logo-en.png';

  localStorage.setItem('lang',lang);
}

// ---------------- CONTACT FORM (MAILTO) ----------------
function sendForm(e){
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const service = document.getElementById('service').value;
  const message = document.getElementById('message').value;

  const subject = encodeURIComponent(طلب خدمة - ${service} - ${name});
  const body = encodeURIComponent(
`Name: ${name}
Email: ${email}
Service: ${service}

Message:
${message}`
  );

  window.location.href = mailto:hello@tkm.example?subject=${subject}&body=${body};
}

// ---------------- MOBILE MENU ----------------
function toggleMenu(){
  const menu = document.querySelector("nav ul");
  menu.classList.toggle("active");
}

// ---------------- INIT ----------------
document.addEventListener('DOMContentLoaded',()=>{
  setLang(localStorage.getItem('lang') || 'ar');
});
function toggleMenu() {
  const menu = document.querySelector("nav ul");
  menu.classList.toggle("active");
}