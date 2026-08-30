export type Language = 'ar' | 'en' | 'tr'

export const translations = {
  ar: {
    // Top banner
    topBanner: '⚡ خدمات هندسة البيانات المتقدمة والذكاء الاصطناعي التوليدي RAG للمنشآت والمتاجر · عوائد قابلة للقياس',
    joinWhatsApp: 'تواصل فوري مع مهندس البيانات →',
    
    // Header
    brandTag: 'هندسة البيانات والذكاء الاصطناعي',
    brandDesc: 'حلول بيانات مؤسسية و RAG مؤتمت',
    navHome: 'الرئيسية',
    navServices: 'خدماتنا الأساسية',
    navDemo: 'المحاكي التفاعلي',
    navRoi: 'حاسبة العائد ROI',
    navSolutions: 'بنية الحلول',
    navFaq: 'الأسئلة الشائعة',
    chatWhatsApp: 'تواصل عبر واتساب',
    liveStatus: 'جاهزية هندسية 100%',

    // Hero
    heroBadge: '⚡ بنية تحتية للبيانات والذكاء الاصطناعي ذات عوائد استثمارية ملموسة',
    heroTitlePrefix: 'حوّل بيانات شركتك إلى ',
    heroTitleHighlight: 'أصول ذكية ومؤتمتة',
    heroTitleSuffix: ' تدعم اتخاذ القرار وتضاعف الأرباح',
    heroSubtitle: 'نساعد الشركات والمتاجر على ربط نماذج الذكاء الاصطناعي ببياناتها الخاصة بأمان تام دون أخطاء (RAG)، أتمتة خطوط نقل البيانات (ETL)، تسريع قواعد البيانات، وخفض تكاليف السحابة إلى النصف.',
    heroCtaPrimary: 'استكشف الخدمات التفاعلية',
    heroCtaWhatsApp: 'استشارة فورية عبر واتساب',
    heroCardMsg: 'اربط أنظمة مبيعاتك، إعلاناتك، وبرامجك المحاسبية بقواعد بيانات موحدة ونماذج ذكاء اصطناعي خاصة تفهم أرقامك وتمنع التسريب أو الهلوسة، ليتفرغ فريقك للنمو وتوسيع النشاط.',
    heroStat1Val: '100%',
    heroStat1Lbl: 'أمان وسرية تامة للبيانات دون أي تسريب',
    heroStat2Val: '60%',
    heroStat2Lbl: 'متوسط خفض فواتير السحابة وتسريع الاستعلامات',

    // 4 Core Services
    service1Title: '1. الذكاء الاصطناعي التوليدي وبنية RAG الآمنة',
    service1Sub: 'AI Infrastructure & Enterprise RAG',
    service1Desc: 'مع انتشار الذكاء الاصطناعي، تعاني معظم الشركات من كيفية ربط النماذج الذكية ببياناتها الداخلية ومستنداتها دون تسريبها أو الوقوع في أخطاء وهلوسة (Hallucinations). نبني لك بنية RAG خاصة تضمن إجابات دقيقة 100% موثقة بالمصادر.',
    service1Feat1: 'ربط آمن للوثائق وقواعد البيانات دون مغادرة بيئتك السحابية',
    service1Feat2: 'حماية كاملة من الهلوسة بالاعتماد على قواعد المتجهات (Vector DBs)',
    service1Feat3: 'مساعدون أذكياء للموظفين والمدراء يجيبون على أدق الأسئلة بلحظات',

    service2Title: '2. هندسة وأتمتة خطوط البيانات (ETL/ELT Pipelines)',
    service2Sub: 'Data Engineering & Workflow Automation',
    service2Desc: 'تحتاج الشركات باستمرار إلى تحويل البيانات الخام المشتتة إلى بيانات منظمة وجاهزة لاتخاذ القرارات. نؤتمت أنابيب نقل البيانات بربط منصات المبيعات (سلة، زد، Shopify)، الإعلانات (Meta، Google)، وأنظمة ERP المحاسبية في مكان مركزي واحد.',
    service2Feat1: 'ربط مؤتمت 24/7 دون أي إدخال يدوي مكرر في ملفات إكسل',
    service2Feat2: 'تنظيف البيانات ومطابقة المبيعات مع المخزون والحسابات لحظياً',
    service2Feat3: 'منع تضارب الأرقام وبناء مصدر موحد ووحيد للحقيقة (Single Source of Truth)',

    service3Title: '3. تحسين أداء قواعد البيانات وخفض التكلفة السحابية',
    service3Sub: 'Database & Cloud Cost Optimization',
    service3Desc: 'تُعد الخدمة الأسهل والأسرع من حيث إقناع العملاء لأنها توفر لهم المال مباشرة مع عائد مالي ملموس (Measurable ROI). نفحص استعلامات SQL وخوادمك السحابية (AWS، Snowflake، GCP، Postgres) لتسريع التقارير وخفض الفاتورة الشهرية.',
    service3Feat1: 'تسريع الاستعلامات البطيئة حتى 10 أضعاف (Index & Query Tuning)',
    service3Feat2: 'إلغاء الموارد المهدرة وضبط حجم الحوسبة لتقليص الفاتورة 30% إلى 60%',
    service3Feat3: 'تقرير تدقيق هندسي شامل يوضح الوفر المالي الدقيق قبل وبعد التحسين',

    service4Title: '4. تحليلات العمليات والمراقبة اللحظية (Dashboards)',
    service4Sub: 'Operational Analytics & Real-Time Monitoring',
    service4Desc: 'تركز على تحويل البيانات الرقمية المعقدة إلى واجهات ومؤشرات تفاعلية بسيطة يفهمها الجميع للمساعدة في اتخاذ القرار في الوقت الفعلي، مع تنبيهات ذكية ترسل للواتساب عند حدوث أي خلل أو تحقيق مستهدف.',
    service4Feat1: 'لوحات تحكم تنفيذية واضحة باللغة العربية تعمل على الجوال والحاسوب',
    service4Feat2: 'مراقبة حية لهوامش الربح، نفاذ المخزون، ونشاط الفروع لحظة بلحظة',
    service4Feat3: 'تنبيهات فورية على واتساب عند هبوط المبيعات أو تعطل أي عملية تشغيلية',

    // Simulator
    simBadge: 'تجربة حية تفاعلية للخدمات الأربع',
    simTitle: 'محاكي بنية البيانات وحلول الذكاء الاصطناعي',
    simSubtitle: 'اختر إحدى الخدمات الأربع لتشاهد كيف تتحول الأرقام والمستندات المبعثرة إلى بنية ذكية توفر المال والوقت.',

    // Calculator
    calcBadge: 'حاسبة المشروع والعائد المالي (ROI)',
    calcTitle: 'صمم خطة التطوير وقدر الوفر المالي',
    calcSubtitle: 'حدد الأنظمة والخدمات التي تحتاجها في منشأتك لتوليد ملخص تقني شامل لمناقشته مباشرة مع مهندس البيانات.',

    // FAQ
    faqBadge: 'الأسئلة الشائعة',
    faqTitle: 'معلومات أساسية حول خدمات البيانات والذكاء الاصطناعي',
    faqSubtitle: 'إجابات تقنية ومباشرة تساعدك على تقييم احتياجات منشأتك.',
    
    // Contact
    contactTitle: 'هل تريد دراسة جدوى فنية وتحديد الوفر المالي لمنشأتك؟',
    contactDesc: 'مهندس البيانات متاح لمراجعة بنيتكم الحالية وتقديم استشارة وتجربة عملية مباشرة عبر واتساب.',
    contactBtn: 'تواصل مباشرة عبر واتساب (+90 553 745 76 44)',

    // Footer
    footerDesc: 'المنصة الهندسية الرائدة في بناء بنية الذكاء الاصطناعي RAG، أتمتة خطوط البيانات ETL، تسريع قواعد البيانات، وخفض التكاليف السحابية.',
  },

  en: {
    // Top banner
    topBanner: '⚡ Enterprise Data Engineering & Secure Generative AI (RAG) Solutions · Direct Measurable ROI',
    joinWhatsApp: 'Instant Data Engineer Connect →',
    
    // Header
    brandTag: 'Data Engineering & AI Solutions',
    brandDesc: 'Enterprise RAG & Data Pipelines',
    navHome: 'Home',
    navServices: 'Core Services',
    navDemo: 'Live Simulator',
    navRoi: 'ROI Calculator',
    navSolutions: 'Solutions',
    navFaq: 'FAQ',
    chatWhatsApp: 'Chat on WhatsApp',
    liveStatus: '100% Engineering Ready',

    // Hero
    heroBadge: '⚡ High-Impact Data Infrastructure & AI with Measurable ROI',
    heroTitlePrefix: 'Transform Enterprise Data into ',
    heroTitleHighlight: 'Intelligent Automated Assets',
    heroTitleSuffix: ' that Accelerate Growth',
    heroSubtitle: 'We empower companies to connect private data to generative AI models with zero hallucinations (RAG), automate end-to-end data pipelines (ETL), optimize slow databases, and trim cloud spend by up to 60%.',
    heroCtaPrimary: 'Explore Interactive Demos',
    heroCtaWhatsApp: 'Instant WhatsApp Consultation',
    heroCardMsg: 'Unify sales platforms, marketing ads, and ERP accounting systems into a single source of truth with private AI agents that understand your metrics with zero leaks and zero hallucinations.',
    heroStat1Val: '100%',
    heroStat1Lbl: 'Data Privacy & Zero LLM Hallucination',
    heroStat2Val: '60%',
    heroStat2Lbl: 'Avg Cloud Bill Reduction & 10x Query Speedup',

    // 4 Core Services
    service1Title: '1. AI Infrastructure & Enterprise RAG',
    service1Sub: 'Secure Generative AI & Knowledge Retrieval',
    service1Desc: 'With the explosion of GenAI, companies struggle with connecting LLMs to proprietary internal data without leaks or hallucinations. We deploy private RAG architectures ensuring 100% fact-grounded, cited answers with zero data leakage.',
    service1Feat1: 'Secure integration of internal docs & SQL databases inside your VPC',
    service1Feat2: 'Elimination of hallucinations using high-precision vector search',
    service1Feat3: 'Autonomous internal AI copilots for staff and executives',

    service2Title: '2. Data Engineering & Automation (ETL/ELT)',
    service2Sub: 'Automated Pipelines & Data Lakehouse',
    service2Desc: 'Enterprises continuously need to convert chaotic raw data into structured assets ready for decision-making. We automate pipelines connecting E-Commerce (Shopify, Salla, Zid), Ads (Meta, Google), and ERP systems into a unified warehouse.',
    service2Feat1: '24/7 autonomous data pipelines eliminating manual Excel entry',
    service2Feat2: 'Real-time data cleaning, reconciliation, and inventory matching',
    service2Feat3: 'Reliable single source of truth preventing metric discrepancies',

    service3Title: '3. Database & Cloud Cost Optimization',
    service3Sub: 'Performance Tuning & Measurable ROI',
    service3Desc: 'The highest-ROI service for modern businesses because it saves money immediately. We audit and fine-tune your SQL queries, indexes, and cloud infrastructure (AWS, Snowflake, GCP, Postgres) to slash monthly bills by 30% to 60%.',
    service3Feat1: 'Up to 10x query execution speedup via index and schema tuning',
    service3Feat2: 'Rightsizing over-provisioned compute to cut cloud invoices',
    service3Feat3: 'Comprehensive engineering audit showing exact pre/post ROI savings',

    service4Title: '4. Operational Analytics & Real-Time Monitoring',
    service4Sub: 'Real-Time Executive Dashboards & Alerting',
    service4Desc: 'Transforming complex multi-source digital data into clear, intuitive decision dashboards in real time, accompanied by intelligent anomaly triggers delivered straight to your WhatsApp or Slack.',
    service4Feat1: 'Intuitive Arabic and English dashboards for desktop and mobile',
    service4Feat2: 'Live monitoring of gross margins, stock alerts, and branch velocity',
    service4Feat3: 'Automated WhatsApp alerts on sales dips or pipeline anomalies',

    // Simulator
    simBadge: 'Interactive Live Sandbox for All 4 Services',
    simTitle: 'Enterprise Data & AI Architecture Simulator',
    simSubtitle: 'Experience how our four core services convert messy data into high-value automated workflows in real time.',

    // Calculator
    calcBadge: 'Project & ROI Calculator',
    calcTitle: 'Configure Scope & Estimate Cost Savings',
    calcSubtitle: 'Select your systems and required capabilities to generate a detailed technical specification for discussion on WhatsApp.',

    // FAQ
    faqBadge: 'Frequently Asked Questions',
    faqTitle: 'Key Knowledge for Enterprise Data & AI Decisions',
    faqSubtitle: 'Clear, technical answers to evaluate your organization\'s infrastructure needs.',

    // Contact
    contactTitle: 'Need a technical assessment & custom ROI calculation?',
    contactDesc: 'Our lead data engineer is available to review your current architecture and provide a live pilot on WhatsApp.',
    contactBtn: 'Connect Directly on WhatsApp (+90 553 745 76 44)',

    // Footer
    footerDesc: 'Leading data engineering and generative AI platform specializing in private RAG architectures, automated ETL pipelines, database optimization, and real-time operational analytics.',
  },

  tr: {
    // Top banner
    topBanner: '⚡ Kurumsal Veri Mühendisliği & Güvenli Üretken Yapay Zeka (RAG) Çözümleri · Ölçülebilir ROI',
    joinWhatsApp: 'Veri Mühendisiyle Canlı İletişim →',
    
    // Header
    brandTag: 'Veri Mühendisliği & Yapay Zeka',
    brandDesc: 'Kurumsal RAG & Otomatik Veri Hatları',
    navHome: 'Ana Sayfa',
    navServices: 'Temel Hizmetler',
    navDemo: 'Canlı Simülatör',
    navRoi: 'ROI Hesaplayıcı',
    navSolutions: 'Mimari Çözümler',
    navFaq: 'Sıkça Sorulanlar',
    chatWhatsApp: 'WhatsApp ile İletişim',
    liveStatus: '%100 Mühendislik Hazırlığı',

    // Hero
    heroBadge: '⚡ Ölçülebilir Yatırım Getirisi (ROI) Sağlayan Veri ve Yapay Zeka Altyapısı',
    heroTitlePrefix: 'Şirketinizin Verilerini ',
    heroTitleHighlight: 'Akıllı ve Otomatik Varlıklara',
    heroTitleSuffix: ' Dönüştürün',
    heroSubtitle: 'Şirketlerin özel verilerini güvenle ve sıfır sızıntı/halüsinasyon riskiyle Yapay Zeka modellerine bağlamalarını (RAG), veri boru hatlarını otomatikleştirmelerini (ETL), veritabanlarını hızlandırmalarını ve bulut faturalarını %60’a varan oranda düşürmelerini sağlıyoruz.',
    heroCtaPrimary: 'İnteraktif Çözümleri İncele',
    heroCtaWhatsApp: 'Anında WhatsApp Danışmanlığı',
    heroCardMsg: 'E-ticaret, reklam ve ERP muhasebe sistemlerinizi tek bir güvenilir veri ambarına bağlayın; verilerinizi anlayan, sızıntı ve halüsinasyon üretmeyen özel yapay zeka sistemleri kurun.',
    heroStat1Val: '%100',
    heroStat1Lbl: 'Özel VPC Güvenliği & Sıfır Veri Sızıntısı',
    heroStat2Val: '%60',
    heroStat2Lbl: 'Bulut Faturası Tasarrufu & 10x Sorgu Hızı',

    // 4 Core Services
    service1Title: '1. Üretken Yapay Zeka & Kurumsal Güvenli RAG',
    service1Sub: 'Yapay Zeka Altyapısı & Kurumsal RAG',
    service1Desc: 'Yapay zeka modellerini şirket içi belgelere bağlarken yaşanan veri sızıntısı ve halüsinasyon risklerini tamamen ortadan kaldırıyoruz. Özel VPC içerisinde %100 kaynak doğrulamalı RAG mimarisi kuruyoruz.',
    service1Feat1: 'Belge ve SQL veritabanlarının özel bulutunuzdan (VPC) çıkmadan güvenli entegrasyonu',
    service1Feat2: 'Yüksek hassasiyetli vektör veritabanları (Vector DB) ile halüsinasyonsuz yanıtlar',
    service1Feat3: 'Çalışanlar ve yöneticiler için şirket verilerini saniyeler içinde yanıtlayan yapay zeka asistanları',

    service2Title: '2. Veri Mühendisliği & Otomasyon (ETL/ELT Boru Hatları)',
    service2Sub: 'Veri Boru Hatları & Merkezi Lakehouse',
    service2Desc: 'Farklı kaynaklara dağılmış ham verileri temiz ve anlık karar alınabilir hale getiriyoruz. E-ticaret (Shopify, Salla, Zid), reklam (Meta, Google) ve ERP sistemlerini tek merkezde topluyoruz.',
    service2Feat1: 'Manuel Excel girişlerini ortadan kaldıran 7/24 kesintisiz otomatik veri boru hatları',
    service2Feat2: 'Gerçek zamanlı veri temizleme, satış-stok eşleştirme ve muhasebe mutabakatı',
    service2Feat3: 'Rakam çelişkilerini önleyen güvenilir tek gerçeklik kaynağı (Single Source of Truth)',

    service3Title: '3. Veritabanı Hızlandırma & Bulut Maliyet Optimizasyonu',
    service3Sub: 'Performans İyileştirme & Doğrudan Tasarruf (ROI)',
    service3Desc: 'Doğrudan maliyet tasarrufu sağlayan en hızlı yatırım getirisi (ROI) hizmetimiz. SQL sorgularınızı, indekslerinizi ve bulut sunucularınızı (AWS, Snowflake, GCP, Postgres) optimize ederek faturalarınızı %30-%60 düşürüyoruz.',
    service3Feat1: 'İndeks ve şema optimizasyonu ile 10 kata varan sorgu hızlanması',
    service3Feat2: 'Gereksiz kaynak tüketimini sıfırlayarak aylık bulut faturasını küçültme',
    service3Feat3: 'İyileştirme öncesi ve sonrası net finansal tasarrufu gösteren kapsamlı mühendislik denetimi',

    service4Title: '4. Operasyonel Analitik & Gerçek Zamanlı İzleme (Dashboard)',
    service4Sub: 'Yönetici Panelleri & WhatsApp Alarmları',
    service4Desc: 'Karmaşık dijital verileri herkesin kolayca anlayabileceği sade gösterge panellerine dönüştürüyor; stok bitmesi veya satış anomalilerinde anında WhatsApp bildirimleri gönderiyoruz.',
    service4Feat1: 'Mobil ve masaüstü uyumlu, gerçek zamanlı Türkçe, Arapça ve İngilizce yönetici panelleri',
    service4Feat2: 'Brüt kar marjı, stok tükenme riski ve şube performansının anlık takibi',
    service4Feat3: 'Operasyonel aksamalarda anında cep telefonunuza iletilen otomatik WhatsApp uyarıları',

    // Simulator
    simBadge: '4 Temel Hizmet İçin Canlı İnteraktif Simülatör',
    simTitle: 'Kurumsal Veri & Yapay Zeka Mimarisi Simülatörü',
    simSubtitle: 'Dağınık verilerin nasıl anlık olarak güvenli ve yüksek değerli iş akışlarına dönüştüğünü test edin.',

    // Calculator
    calcBadge: 'Proje & Tasarruf Hesaplayıcı (ROI)',
    calcTitle: 'Geliştirme Planını Belirleyin ve Mali Tasarrufu Hesaplayın',
    calcSubtitle: 'Mühendisimizle doğrudan görüşmek üzere sistemlerinizi ve ihtiyaçlarınızı seçin.',

    // FAQ
    faqBadge: 'Sıkça Sorulan Sorular',
    faqTitle: 'Veri ve Yapay Zeka Kararları İçin Temel Bilgiler',
    faqSubtitle: 'Kurumsal altyapı gereksinimlerinizi netleştirecek teknik ve doğrudan yanıtlar.',

    // Contact
    contactTitle: 'Şirketiniz için teknik analiz ve tasarruf hesaplaması ister misiniz?',
    contactDesc: 'Kıdemli veri mühendisimiz mevcut altyapınızı incelemek ve WhatsApp üzerinden canlı demo sunmak için hazır.',
    contactBtn: 'WhatsApp ile Doğrudan Bağlanın (+90 553 745 76 44)',

    // Footer
    footerDesc: 'Güvenli kurumsal RAG mimarileri, otomatik ETL boru hatları, veritabanı optimizasyonu ve gerçek zamanlı analitik konularında uzmanlaşmış veri mühendisliği platformu.',
  },
}
