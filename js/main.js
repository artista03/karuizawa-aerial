/* ========================================
   KARUIZAWA AERIAL — main.js (多言語対応)
======================================== */

// ========================================
// 翻訳データ
// ========================================
const translations = {
  jp: {
    'nav.services':  'サービス',
    'nav.videos':    'サンプル動画',
    'nav.process':   '流れ',
    'nav.pricing':   '料金',
    'nav.contact':   'お問い合わせ',

    'hero.sub':       '軽井沢を、空から。',
    'hero.desc':      '軽井沢を拠点に、DJI Mini 5 Pro で空撮しています。<br>この街の自然と日常を、空からの映像で届けます。',
    'hero.btn.primary': '無料相談する',
    'hero.btn.ghost':   'サンプル動画を見る',

    'stats.4k':  '最高画質で撮影',
    'stats.33':  '最大飛行時間',
    'stats.24':  '以内にご返信',
    'stats.all': 'お客様のご要望に応えます',

    'services.label': 'SERVICES',
    'services.title': 'できること',
    'services.desc':  'こんなことができます。詳しくはお気軽にご相談ください。',
    's1.title': '空撮・映像撮影',
    's1.desc':  '4K対応のドローンで空から撮影します。どんな映像が欲しいか、まずお話を聞かせてください。一緒に考えます。',
    's2.title': '不動産・建物の撮影',
    's2.desc':  '物件や土地を空から撮影します。どう使いたいか教えてもらえると、撮り方の提案ができます。',
    's3.title': 'イベント・思い出の記録',
    's3.desc':  '野外イベントや家族の記念日など、特別な瞬間を空から残します。「こんな撮影できる？」は気軽に聞いてください。',
    's4.title': '自然・風景の空撮',
    's4.desc':  '山・森・田んぼ・海など、地上では撮れない景色を届けます。長野県周辺の自然撮影が特に得意です。',
    's5.title': 'SNS・YouTube用の素材',
    's5.desc':  'インスタやYouTube用に空撮素材を撮影します。編集の仕上げ方はご要望に合わせて相談しながら決めましょう。',
    's6.title': '現地同行・ロケハン',
    's6.desc':  'ドローンと機材を積んでModel Yで現地へ伺います。「どこで撮れば一番映えるか」から一緒に考えます。軽井沢・御代田・佐久周辺はお気軽にどうぞ。',

    'videos.label': 'SAMPLE WORKS',
    'videos.title': '撮影サンプル',
    'videos.desc':  '実際の空撮映像をご覧ください',
    'v1.title': '浅間山 空撮',          'v1.cat': '自然・風景',
    'v2.title': '森の低空飛行 | 軽井沢', 'v2.cat': '自然・低空',
    'v3.title': '日常ドローン撮影',      'v3.cat': 'ライフスタイル・家族',
    'v4.title': 'プリンスプラザ 軽井沢', 'v4.cat': '施設・建築',
    'v5.title': 'Tesla Model Y &amp; Supercharger', 'v5.cat': '空撮・ライフスタイル',
    'v6.title': 'ActiveTrack | プリンスプラザ 軽井沢', 'v6.cat': 'モーショントラッキング',

    'process.label': 'PROCESS',
    'process.title': 'だいたいの流れ',
    'process.desc':  'こんな感じで進めています。状況に合わせて柔軟に対応します。',
    'p1.title': 'まず話しましょう',
    'p1.desc':  '「こんな映像が欲しい」「こんな場所で撮りたい」など、ざっくりした内容でOKです。フォームからどうぞ。',
    'p2.title': '場所と内容を確認する',
    'p2.desc':  '撮影場所がドローンを飛ばせるか確認します。飛行申請が必要な場合は一緒に考えます。難しい場合は正直にお伝えします。',
    'p3.title': '撮影する',
    'p3.desc':  '当日は天気や風を見ながら、できる限り良い映像を撮ります。うまくいかなかった部分も包み隠さず共有します。',
    'p4.title': 'お渡しする',
    'p4.desc':  '素材そのまま、または編集してお渡しします。どんな仕上がりにしたいか、一緒に決めましょう。',

    'pricing.label': 'PRICING',
    'pricing.title': '料金について',
    'pricing.desc':  '撮影内容・場所・時間によって変わるため、まずはお気軽にご相談ください。一緒に考えます。',
    'price1.title': '撮影のみ',
    'price1.desc':  '4K素材をそのままお渡し。自社で編集される方や、素材だけほしい方向け。',
    'price2.title': '撮影 ＋ 編集',
    'price2.desc':  'カラーグレーディング・BGM・テロップまで込みで納品。完成映像としてすぐ使えます。',
    'price3.title': 'その他・なんでも',
    'price3.desc':  '「こんなことできる？」という相談大歓迎。できないことは正直にお伝えします。',
    'pricing.note': '料金は撮影場所・時間・内容をお聞きしてから個別にご提案します。まず話しましょう。',
    'pricing.cta':  '無料で相談する',

    'contact.label': 'CONTACT',
    'contact.title': 'お問い合わせ',
    'contact.desc':  'まずはお気軽にご相談ください。24時間以内にご返信します。',
    'form.name.label':    'お名前',
    'form.company.label': '会社名',
    'form.email.label':   'メールアドレス',
    'form.phone.label':   '電話番号',
    'form.service.label': 'ご希望のサービス',
    'form.message.label': 'お問い合わせ内容',
    'form.name.placeholder':    '山田 太郎',
    'form.company.placeholder': '株式会社〇〇',
    'form.email.placeholder':   'example@email.com',
    'form.phone.placeholder':   '090-0000-0000',
    'form.message.placeholder': '撮影場所・日程・ご予算などをお聞かせください',
    'form.service.0': '選択してください',
    'form.service.1': '映像・CM制作',
    'form.service.2': '不動産・建築撮影',
    'form.service.3': 'イベント・式典記録',
    'form.service.4': '施設・インフラ点検',
    'form.service.5': '観光地・自然撮影',
    'form.service.6': 'SNS・YouTube素材',
    'form.service.7': '現地同行・ロケハン',
    'form.service.8': '撮影 ＋ 現地同行（出張プラン）',
    'form.service.9': 'その他',
    'form.submit': '送信する',
    'contact.area.title':  '活動エリア',
    'contact.area.desc':   '軽井沢・御代田・佐久周辺がメインです。出張費なしで伺えます。長野県内のその他エリアは出張費を別途いただく場合があります。都市部は飛行許可の関係で基本的にお受けできません。',
    'contact.hours.title': '対応時間',
    'contact.hours.desc':  '平日 9:00 – 18:00<br>土日祝も相談可',

    'footer.tagline':  '軽井沢の空から届ける、新しい視点。',
    'footer.services': 'サービス',
    'footer.process':  '流れ',
    'footer.pricing':  '料金',
    'footer.contact':  'お問い合わせ',
  },

  en: {
    'nav.services':  'Services',
    'nav.videos':    'Sample Works',
    'nav.process':   'Process',
    'nav.pricing':   'Pricing',
    'nav.contact':   'Contact',

    'hero.sub':       'From the sky over Karuizawa.',
    'hero.desc':      'Based in Karuizawa, we shoot aerial footage with the DJI Mini 5 Pro.<br>Delivering stunning perspectives of this town\'s nature and everyday life.',
    'hero.btn.primary': 'Free Consultation',
    'hero.btn.ghost':   'View Sample Videos',

    'stats.4k':  'Highest Quality',
    'stats.33':  'Max Flight Time',
    'stats.24':  'Reply Within',
    'stats.all': 'Meeting Your Needs',

    'services.label': 'SERVICES',
    'services.title': 'What We Do',
    'services.desc':  'Here\'s what we can offer. Please feel free to contact us for details.',
    's1.title': 'Aerial Video Shooting',
    's1.desc':  'We shoot from the sky with our 4K-capable drone. Tell us what kind of footage you need — we\'ll work it out together.',
    's2.title': 'Real Estate & Architectural Shooting',
    's2.desc':  'We shoot properties and land from above. Tell us how you plan to use the footage and we\'ll suggest the best approach.',
    's3.title': 'Event & Memory Recording',
    's3.desc':  'We capture special moments from above — outdoor events, family anniversaries, and more. Feel free to ask "Can you shoot this?"',
    's4.title': 'Nature & Landscape Aerial Shots',
    's4.desc':  'We capture scenes impossible from the ground — mountains, forests, rice fields, and the sea. We especially excel at nature shots around Nagano Prefecture.',
    's5.title': 'SNS & YouTube Content',
    's5.desc':  'We shoot aerial footage for Instagram and YouTube. We\'ll discuss the editing style together to match your needs.',
    's6.title': 'On-site Scouting & Accompaniment',
    's6.desc':  'We drive out to the location in our Model Y with drone and equipment. We\'ll think together about "where\'s the best spot?" Karuizawa, Miyota, and Saku area — feel free to reach out.',

    'videos.label': 'SAMPLE WORKS',
    'videos.title': 'Sample Works',
    'videos.desc':  'View our actual aerial footage',
    'v1.title': 'Mt. Asama Aerial Shot',          'v1.cat': 'Nature · Landscape',
    'v2.title': 'Low-Altitude Forest Flight | Karuizawa', 'v2.cat': 'Nature · Low Altitude',
    'v3.title': 'Everyday Drone Footage',          'v3.cat': 'Lifestyle · Family',
    'v4.title': 'Prince Plaza Karuizawa',          'v4.cat': 'Facility · Architecture',
    'v5.title': 'Tesla Model Y &amp; Supercharger', 'v5.cat': 'Aerial · Lifestyle',
    'v6.title': 'ActiveTrack | Prince Plaza Karuizawa', 'v6.cat': 'Motion Tracking',

    'process.label': 'PROCESS',
    'process.title': 'How It Works',
    'process.desc':  'Here\'s how we generally proceed. We\'re flexible and adapt to your situation.',
    'p1.title': 'Let\'s Talk First',
    'p1.desc':  '"I want this kind of footage" or "I want to shoot at this location" — rough ideas are fine. Use the form below.',
    'p2.title': 'Confirm Location & Details',
    'p2.desc':  'We check whether the location is flyable. If a permit is required, we\'ll work through it together. We\'ll be upfront if it\'s not feasible.',
    'p3.title': 'Shoot',
    'p3.desc':  'On the day, we capture the best footage while monitoring weather and wind. We\'ll share honestly if anything doesn\'t go as planned.',
    'p4.title': 'Deliver',
    'p4.desc':  'We deliver raw footage or edited video. Let\'s decide together on the final look you want.',

    'pricing.label': 'PRICING',
    'pricing.title': 'Pricing',
    'pricing.desc':  'Pricing varies by content, location, and duration. Please feel free to consult us first — we\'ll work it out together.',
    'price1.title': 'Shooting Only',
    'price1.desc':  'Raw 4K footage delivered as-is. Ideal for those who edit in-house or just need raw material.',
    'price2.title': 'Shooting + Editing',
    'price2.desc':  'Delivered with color grading, BGM, and subtitles. Ready to use as a finished video.',
    'price3.title': 'Other / Anything',
    'price3.desc':  '"Can you do this?" inquiries are very welcome. We\'ll be honest if something isn\'t possible.',
    'pricing.note': 'Pricing is proposed individually after hearing about your location, duration, and content. Let\'s talk first.',
    'pricing.cta':  'Free Consultation',

    'contact.label': 'CONTACT',
    'contact.title': 'Contact Us',
    'contact.desc':  'Please feel free to contact us. We\'ll reply within 24 hours.',
    'form.name.label':    'Your Name',
    'form.company.label': 'Company Name',
    'form.email.label':   'Email Address',
    'form.phone.label':   'Phone Number',
    'form.service.label': 'Service Requested',
    'form.message.label': 'Message',
    'form.name.placeholder':    'John Smith',
    'form.company.placeholder': 'ABC Company',
    'form.email.placeholder':   'example@email.com',
    'form.phone.placeholder':   '+81-90-0000-0000',
    'form.message.placeholder': 'Please share details about the shooting location, schedule, and budget.',
    'form.service.0': 'Please select',
    'form.service.1': 'Video / Commercial Production',
    'form.service.2': 'Real Estate & Architectural Shooting',
    'form.service.3': 'Event & Ceremony Recording',
    'form.service.4': 'Facility & Infrastructure Inspection',
    'form.service.5': 'Tourist Spot & Nature Shooting',
    'form.service.6': 'SNS & YouTube Content',
    'form.service.7': 'On-site Scouting & Accompaniment',
    'form.service.8': 'Shooting + Location (Travel Plan)',
    'form.service.9': 'Other',
    'form.submit': 'Send',
    'contact.area.title':  'Service Area',
    'contact.area.desc':   'Our main area is Karuizawa, Miyota, and Saku — no travel fee. Other areas within Nagano may incur a travel fee. Urban areas are generally not available due to flight permit restrictions.',
    'contact.hours.title': 'Business Hours',
    'contact.hours.desc':  'Weekdays 9:00 – 18:00<br>Weekends &amp; holidays available upon request.',

    'footer.tagline':  'A new perspective from the skies of Karuizawa.',
    'footer.services': 'Services',
    'footer.process':  'Process',
    'footer.pricing':  'Pricing',
    'footer.contact':  'Contact',
  },

  zh: {
    'nav.services':  '服务',
    'nav.videos':    '示例视频',
    'nav.process':   '流程',
    'nav.pricing':   '价格',
    'nav.contact':   '联系我们',

    'hero.sub':       '从空中俯瞰轻井泽。',
    'hero.desc':      '我们以轻井泽为基地，使用DJI Mini 5 Pro进行航拍。<br>将这座城市的自然风光与日常生活以空中视频呈现给您。',
    'hero.btn.primary': '免费咨询',
    'hero.btn.ghost':   '查看示例视频',

    'stats.4k':  '最高画质拍摄',
    'stats.33':  '最大飞行时间',
    'stats.24':  '内回复',
    'stats.all': '满足您的需求',

    'services.label': '服务项目',
    'services.title': '我们能做什么',
    'services.desc':  '以下是我们能提供的服务，欢迎随时咨询详情。',
    's1.title': '航拍与视频拍摄',
    's1.desc':  '我们使用4K无人机进行空中拍摄。请告诉我们您想要什么样的视频，我们一起商量。',
    's2.title': '房产与建筑拍摄',
    's2.desc':  '我们从空中拍摄房产和土地。告诉我们您的用途，我们将为您提供最佳拍摄方案。',
    's3.title': '活动与纪念拍摄',
    's3.desc':  '我们从空中记录特殊时刻——户外活动、家庭纪念日等。随时询问"这个能拍吗？"',
    's4.title': '自然与风景航拍',
    's4.desc':  '我们拍摄地面无法捕捉的景色——山脉、森林、稻田和海洋。尤其擅长长野县周边的自然风光拍摄。',
    's5.title': 'SNS与YouTube素材',
    's5.desc':  '我们为Instagram和YouTube拍摄航拍素材，并根据您的需求商量后期剪辑风格。',
    's6.title': '实地陪同与勘景',
    's6.desc':  '我们将携带无人机和设备乘坐Model Y前往拍摄地点，一起思考"哪里最适合拍摄"。轻井泽、御代田、佐久周边欢迎随时联系。',

    'videos.label': '示例作品',
    'videos.title': '拍摄示例',
    'videos.desc':  '请欣赏我们的实际航拍视频',
    'v1.title': '浅间山航拍',            'v1.cat': '自然·风景',
    'v2.title': '森林低空飞行 | 轻井泽', 'v2.cat': '自然·低空飞行',
    'v3.title': '日常无人机拍摄',        'v3.cat': '生活方式·家庭',
    'v4.title': '轻井泽王子广场',        'v4.cat': '设施·建筑',
    'v5.title': 'Tesla Model Y &amp; 超级充电站', 'v5.cat': '航拍·生活方式',
    'v6.title': 'ActiveTrack | 轻井泽王子广场',  'v6.cat': '运动追踪',

    'process.label': '工作流程',
    'process.title': '基本流程',
    'process.desc':  '以下是我们的基本工作流程，我们会根据情况灵活应对。',
    'p1.title': '先聊聊',
    'p1.desc':  '"我想要这样的视频"或"我想在这个地方拍摄"——大概的想法就可以。请通过下方表单联系我们。',
    'p2.title': '确认地点与内容',
    'p2.desc':  '我们确认拍摄地点是否可以飞行无人机。如需申请飞行许可，我们一起处理。如有困难，我们会诚实告知。',
    'p3.title': '拍摄',
    'p3.desc':  '当天我们会根据天气和风况尽力拍摄最佳画面，并坦诚分享任何不理想的部分。',
    'p4.title': '交付',
    'p4.desc':  '我们提供原始素材或剪辑后的视频，一起决定您想要的最终效果。',

    'pricing.label': '价格',
    'pricing.title': '价格说明',
    'pricing.desc':  '价格因拍摄内容、地点和时长而异，请先与我们免费咨询，一起商量。',
    'price1.title': '仅拍摄',
    'price1.desc':  '原始4K素材直接交付，适合自行剪辑或只需素材的客户。',
    'price2.title': '拍摄＋剪辑',
    'price2.desc':  '包含调色、背景音乐和字幕，作为成品视频直接交付使用。',
    'price3.title': '其他·任何需求',
    'price3.desc':  '欢迎咨询"这个能做吗？"，不能做的我们会诚实告知。',
    'pricing.note': '我们将在了解您的拍摄地点、时长和内容后，为您提供个性化报价。先聊聊吧。',
    'pricing.cta':  '免费咨询',

    'contact.label': '联系我们',
    'contact.title': '联系我们',
    'contact.desc':  '欢迎随时咨询，我们将在24小时内回复。',
    'form.name.label':    '姓名',
    'form.company.label': '公司名称',
    'form.email.label':   '电子邮件',
    'form.phone.label':   '电话号码',
    'form.service.label': '所需服务',
    'form.message.label': '咨询内容',
    'form.name.placeholder':    '张三',
    'form.company.placeholder': '××公司',
    'form.email.placeholder':   'example@email.com',
    'form.phone.placeholder':   '+86-138-0000-0000',
    'form.message.placeholder': '请告知拍摄地点、日程和预算等详情。',
    'form.service.0': '请选择',
    'form.service.1': '视频·广告制作',
    'form.service.2': '房产·建筑拍摄',
    'form.service.3': '活动·典礼记录',
    'form.service.4': '设施·基础设施检查',
    'form.service.5': '观光地·自然拍摄',
    'form.service.6': 'SNS·YouTube素材',
    'form.service.7': '实地陪同·勘景',
    'form.service.8': '拍摄+实地陪同（出行方案）',
    'form.service.9': '其他',
    'form.submit': '发送',
    'contact.area.title':  '服务区域',
    'contact.area.desc':   '主要服务区域是轻井泽、御代田、佐久周边，无差旅费。长野县内其他地区可能需要额外差旅费。由于飞行许可限制，一般不受理城市地区。',
    'contact.hours.title': '服务时间',
    'contact.hours.desc':  '工作日 9:00 – 18:00<br>周末和节假日可商量。',

    'footer.tagline':  '从轻井泽的天空带来全新视角。',
    'footer.services': '服务',
    'footer.process':  '流程',
    'footer.pricing':  '价格',
    'footer.contact':  '联系我们',
  }
};

// ========================================
// 言語切り替え
// ========================================
let currentLang = localStorage.getItem('lang') || 'jp';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);

  const t = translations[lang];

  // テキスト翻訳
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // HTMLを含む翻訳（<br>など）
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // placeholder翻訳
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.dataset.i18nPh;
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  // ボタンのアクティブ状態
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // html lang属性
  const langAttr = { jp: 'ja', en: 'en', zh: 'zh-Hans' };
  document.documentElement.lang = langAttr[lang];

  // 中国語フォント切り替え
  document.body.classList.toggle('lang-zh', lang === 'zh');
}

// 言語ボタンのイベント
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setLang(btn.dataset.lang));
});

// 初期化（保存された言語 or JP）
setLang(currentLang);

// ========================================
// カスタムカーソル
// ========================================
const cursor     = document.getElementById('cursor');
const cursorRing = document.getElementById('cursorRing');
let mouseX = 0, mouseY = 0;
let ringX  = 0, ringY  = 0;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = mouseX + 'px';
  cursor.style.top  = mouseY + 'px';
});

(function animRing() {
  ringX += (mouseX - ringX) * 0.12;
  ringY += (mouseY - ringY) * 0.12;
  cursorRing.style.left = ringX + 'px';
  cursorRing.style.top  = ringY + 'px';
  requestAnimationFrame(animRing);
})();

document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('mouseenter', () => cursorRing.classList.add('hovered'));
  el.addEventListener('mouseleave', () => cursorRing.classList.remove('hovered'));
});

// ========================================
// パララックス（ヒーロー背景）
// ========================================
const heroBg = document.querySelector('.hero__bg');
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  if (heroBg) heroBg.style.transform = `scale(1) translateY(${y * 0.3}px)`;
}, { passive: true });

// ========================================
// Nav スクロール
// ========================================
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// ========================================
// ハンバーガーメニュー
// ========================================
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ========================================
// パーティクル（星屑）
// ========================================
(function initParticles() {
  const canvas    = document.createElement('canvas');
  const ctx       = canvas.getContext('2d');
  const container = document.getElementById('particles');
  container.appendChild(canvas);

  function resize() {
    canvas.width  = container.offsetWidth;
    canvas.height = container.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize, { passive: true });

  const count = 120;
  const particles = Array.from({ length: count }, () => ({
    x:     Math.random(),
    y:     Math.random(),
    r:     Math.random() * 1.4 + 0.3,
    speed: Math.random() * 0.00008 + 0.00003,
    alpha: Math.random() * 0.5 + 0.2,
    phase: Math.random() * Math.PI * 2,
  }));

  let t = 0;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    t += 1;
    particles.forEach(p => {
      const x       = (p.x + p.speed * t) % 1;
      const flicker = p.alpha * (0.6 + 0.4 * Math.sin(p.phase + t * 0.05));
      ctx.beginPath();
      ctx.arc(x * canvas.width, p.y * canvas.height, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(200, 230, 255, ${flicker})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  draw();
})();

// ========================================
// スクロールアニメーション
// ========================================
const animObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      animObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.service-card, .process-step, .pricing__consult-item').forEach((el, i) => {
  el.setAttribute('data-animate', '');
  el.style.transitionDelay = `${i * 0.06}s`;
  animObserver.observe(el);
});

// ========================================
// お問い合わせフォーム
// ========================================
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn  = form.querySelector('button[type="submit"]');
    const orig = btn.textContent;
    btn.disabled = true;

    const sending = { jp: '送信中...', en: 'Sending...', zh: '发送中...' };
    const success = { jp: '送信しました ✓', en: 'Sent ✓', zh: '发送成功 ✓' };
    const error   = { jp: '再度お試しください', en: 'Please try again', zh: '请重试' };

    btn.textContent = sending[currentLang];

    try {
      const res = await fetch(form.action, {
        method:  'POST',
        body:    new FormData(form),
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        btn.textContent      = success[currentLang];
        btn.style.background = '#1a8a1a';
        form.reset();
        setTimeout(() => {
          btn.textContent      = orig;
          btn.style.background = '';
          btn.disabled         = false;
        }, 4000);
      } else { throw new Error(); }
    } catch {
      btn.textContent = error[currentLang];
      btn.disabled    = false;
      setTimeout(() => { btn.textContent = orig; }, 3000);
    }
  });
}

// ========================================
// スムーズスクロール
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    window.scrollTo({
      top:      target.getBoundingClientRect().top + window.scrollY - 80,
      behavior: 'smooth',
    });
  });
});
