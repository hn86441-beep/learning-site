/* =========================================================
   جواز سفر اللغوي — بيانات المفردات
   كل لغة عبارة عن مصفوفة كلمات. أضف/عدّل كما تشاء.
   الحقول: word (بالّلغة الهدف) | translit (نطق تقريبي، اختياري)
   meaning (المعنى بالعربية) | example (جملة بالّلغة الهدف)
   example_ar (ترجمة الجملة) | tag (تصنيف موضوعي)
   ========================================================= */

const LANG_META = {
  en: { name: "الإنجليزية", native: "English", dir: "ltr", ink: "#335C3B", font: "display-latin" },
  es: { name: "الإسبانية", native: "Español", dir: "ltr", ink: "#C1652F", font: "display-latin" },
  ru: { name: "الروسية", native: "Русский", dir: "ltr", ink: "#1D5C6B", font: "display-cyr" },
  ar: { name: "العربية الفصحى", native: "العربية", dir: "rtl", ink: "#9B2226", font: "display-arabic" },
};

const VOCAB = {
  en: [
    { word: "Wanderlust", meaning: "شغف الترحال والسفر", example: "She was full of wanderlust after reading the atlas.", example_ar: "امتلأت شغفًا بالترحال بعد قراءة الأطلس.", tag: "سفر" },
    { word: "Resilience", meaning: "المرونة، القدرة على الصمود", example: "His resilience helped him overcome every setback.", example_ar: "ساعدته مرونته على تجاوز كل نكسة.", tag: "شخصية" },
    { word: "Serendipity", meaning: "اكتشاف سعيد بالصدفة", example: "Meeting her was pure serendipity.", example_ar: "كان لقاؤها محض صدفة سعيدة.", tag: "مشاعر" },
    { word: "Fluent", meaning: "طليق، متمكن من لغة", example: "He became fluent in three languages.", example_ar: "أصبح طليقًا في ثلاث لغات.", tag: "لغة" },
    { word: "Deadline", meaning: "الموعد النهائي", example: "We must finish the report before the deadline.", example_ar: "يجب أن ننهي التقرير قبل الموعد النهائي.", tag: "عمل" },
    { word: "Overwhelmed", meaning: "غارق في المشاعر أو المهام", example: "She felt overwhelmed by the workload.", example_ar: "شعرت بالإرهاق من كثرة العمل.", tag: "مشاعر" },
    { word: "Bittersweet", meaning: "مزيج من الفرح والحزن", example: "Graduation day felt bittersweet.", example_ar: "كان يوم التخرج مزيجًا من الفرح والحزن.", tag: "مشاعر" },
    { word: "Negotiate", meaning: "يتفاوض", example: "They negotiated a better contract.", example_ar: "تفاوضوا على عقد أفضل.", tag: "عمل" },
    { word: "Itinerary", meaning: "خط سير الرحلة", example: "Our itinerary includes three cities.", example_ar: "يتضمن خط سيرنا ثلاث مدن.", tag: "سفر" },
    { word: "Empathy", meaning: "التعاطف، تفهّم مشاعر الآخر", example: "Good translators need empathy.", example_ar: "يحتاج المترجمون الجيدون إلى التعاطف.", tag: "شخصية" },
    { word: "Ambiguous", meaning: "غامض، يحتمل أكثر من معنى", example: "The sentence was grammatically ambiguous.", example_ar: "كانت الجملة غامضة نحويًا.", tag: "لغة" },
    { word: "Curriculum", meaning: "المنهج الدراسي", example: "The faculty updated the curriculum.", example_ar: "حدّثت الكلية المنهج الدراسي.", tag: "دراسة" },
    { word: "Nostalgic", meaning: "حنيني، يشعر بالحنين", example: "The old photos made him nostalgic.", example_ar: "أشعرته الصور القديمة بالحنين.", tag: "مشاعر" },
    { word: "Breakthrough", meaning: "إنجاز أو اختراق كبير", example: "It was a breakthrough in translation studies.", example_ar: "كان إنجازًا كبيرًا في دراسات الترجمة.", tag: "دراسة" },
    { word: "Commute", meaning: "التنقل اليومي إلى العمل", example: "Her commute takes almost an hour.", example_ar: "يستغرق تنقلها اليومي ساعة تقريبًا.", tag: "حياة يومية" },
    { word: "Idiom", meaning: "تعبير اصطلاحي", example: "That idiom doesn't translate literally.", example_ar: "لا يُترجم هذا التعبير حرفيًا.", tag: "لغة" },
  ],

  es: [
    { word: "Sobremesa", meaning: "الجلسة بعد الطعام للحديث", example: "La sobremesa duró más que la comida.", example_ar: "استمرت جلسة ما بعد الطعام أطول من الأكل نفسه.", tag: "ثقافة" },
    { word: "Madrugar", meaning: "الاستيقاظ باكرًا جدًا", example: "Tengo que madrugar mañana.", example_ar: "يجب أن أستيقظ باكرًا جدًا غدًا.", tag: "حياة يومية" },
    { word: "Añoranza", meaning: "الحنين، الشوق", example: "Sintió añoranza por su ciudad natal.", example_ar: "شعر بالحنين إلى مدينته الأم.", tag: "مشاعر" },
    { word: "Empresa", meaning: "شركة، مؤسسة", example: "Trabaja en una empresa internacional.", example_ar: "يعمل في شركة عالمية.", tag: "عمل" },
    { word: "Agotado", meaning: "منهك، مُتعَب تمامًا", example: "Llegó agotado después del examen.", example_ar: "وصل منهكًا بعد الامتحان.", tag: "مشاعر" },
    { word: "Sinvergüenza", meaning: "وقح، عديم الحياء (بلطف)", example: "¡Qué sinvergüenza eres!", example_ar: "يا لك من وقح!", tag: "شخصية" },
    { word: "Itinerario", meaning: "خط سير الرحلة", example: "El itinerario incluye Madrid y Sevilla.", example_ar: "يتضمن خط السير مدريد وإشبيلية.", tag: "سفر" },
    { word: "Aprovechar", meaning: "يستفيد، يغتنم الفرصة", example: "Debemos aprovechar el tiempo libre.", example_ar: "يجب أن نستفيد من وقت الفراغ.", tag: "حياة يومية" },
    { word: "Plazo", meaning: "الموعد النهائي، المهلة", example: "El plazo de entrega es mañana.", example_ar: "الموعد النهائي للتسليم غدًا.", tag: "عمل" },
    { word: "Cariño", meaning: "الحنان، المودة", example: "Le habló con mucho cariño.", example_ar: "تحدث إليه بحنان شديد.", tag: "مشاعر" },
    { word: "Idioma", meaning: "لغة", example: "El español es un idioma hermoso.", example_ar: "الإسبانية لغة جميلة.", tag: "لغة" },
    { word: "Ambiguo", meaning: "غامض، مبهم", example: "Su respuesta fue muy ambigua.", example_ar: "كانت إجابته غامضة جدًا.", tag: "لغة" },
    { word: "Madrugada", meaning: "الفجر، ساعات الليل الأخيرة", example: "Volvió a casa de madrugada.", example_ar: "عاد إلى المنزل في الفجر.", tag: "حياة يومية" },
    { word: "Compañero", meaning: "زميل، رفيق", example: "Es mi compañero de clase.", example_ar: "هو زميلي في الدراسة.", tag: "دراسة" },
    { word: "Sobrevivir", meaning: "ينجو، يصمد", example: "Logró sobrevivir a la tormenta.", example_ar: "تمكن من الصمود أمام العاصفة.", tag: "شخصية" },
    { word: "Tertulia", meaning: "جلسة نقاش أدبي أو ثقافي", example: "Asistimos a una tertulia literaria.", example_ar: "حضرنا جلسة نقاش أدبية.", tag: "ثقافة" },
  ],

  ru: [
    { word: "Тоска", translit: "toská", meaning: "حزن عميق ممزوج بالشوق", example: "Его охватила тоска по родине.", example_ar: "انتابه حنين عميق إلى وطنه.", tag: "مشاعر" },
    { word: "Дружба", translit: "drúzhba", meaning: "الصداقة", example: "Их дружба длится уже десять лет.", example_ar: "استمرت صداقتهما عشر سنوات.", tag: "علاقات" },
    { word: "Работа", translit: "rabóta", meaning: "العمل، الوظيفة", example: "Моя работа начинается в девять.", example_ar: "يبدأ عملي في التاسعة.", tag: "عمل" },
    { word: "Путешествие", translit: "puteshéstviye", meaning: "الرحلة، السفر", example: "Это было незабываемое путешествие.", example_ar: "كانت رحلة لا تُنسى.", tag: "سفر" },
    { word: "Усталость", translit: "ustálost'", meaning: "الإرهاق، التعب", example: "Усталость чувствовалась во всём теле.", example_ar: "شعر بالإرهاق في كل جسده.", tag: "مشاعر" },
    { word: "Язык", translit: "yazýk", meaning: "لغة أو لسان", example: "Русский язык очень богат.", example_ar: "اللغة الروسية غنية جدًا.", tag: "لغة" },
    { word: "Срок", translit: "srok", meaning: "الموعد النهائي، المهلة", example: "Срок сдачи проекта — завтра.", example_ar: "موعد تسليم المشروع غدًا.", tag: "عمل" },
    { word: "Терпение", translit: "terpéniye", meaning: "الصبر", example: "Изучение языков требует терпения.", example_ar: "تعلم اللغات يتطلب صبرًا.", tag: "شخصية" },
    { word: "Родина", translit: "ródina", meaning: "الوطن الأم", example: "Он никогда не забывал родину.", example_ar: "لم ينسَ وطنه أبدًا.", tag: "ثقافة" },
    { word: "Загадочный", translit: "zagádochnyy", meaning: "غامض، غريب", example: "Это был загадочный случай.", example_ar: "كانت تلك حالة غامضة.", tag: "لغة" },
    { word: "Однокурсник", translit: "odnokúrsnik", meaning: "زميل الدراسة", example: "Он мой однокурсник по университету.", example_ar: "هو زميلي في الجامعة.", tag: "دراسة" },
    { word: "Счастье", translit: "schást'ye", meaning: "السعادة", example: "Счастье не измеряется деньгами.", example_ar: "السعادة لا تُقاس بالمال.", tag: "مشاعر" },
    { word: "Перевод", translit: "perevód", meaning: "الترجمة", example: "Это очень точный перевод.", example_ar: "هذه ترجمة دقيقة جدًا.", tag: "لغة" },
    { word: "Возможность", translit: "vozmózhnost'", meaning: "الفرصة، الإمكانية", example: "У неё появилась новая возможность.", example_ar: "ظهرت لديها فرصة جديدة.", tag: "عمل" },
    { word: "Привычка", translit: "privýchka", meaning: "العادة", example: "Чтение — его любимая привычка.", example_ar: "القراءة عادته المفضلة.", tag: "حياة يومية" },
    { word: "Гостеприимство", translit: "gostepriímstvo", meaning: "كرم الضيافة", example: "Русское гостеприимство известно всем.", example_ar: "كرم الضيافة الروسي معروف للجميع.", tag: "ثقافة" },
  ],

  ar: [
    { word: "أَرَق", meaning: "عدم القدرة على النوم", example: "أصابه الأرق بعد ليلة القلق.", example_ar: "شرح: يُستخدم الأرق طبيًا وأدبيًا على حد سواء.", tag: "مشاعر" },
    { word: "دَأَب", meaning: "المثابرة والاستمرار على العمل", example: "دأب الطالب على المذاكرة كل مساء.", example_ar: "شرح: الدأب فعل وصفة تدل على الجدّ.", tag: "شخصية" },
    { word: "أُفُق", meaning: "الحد الفاصل بين السماء والأرض، أو المجال المستقبلي", example: "توسّعت آفاقه بعد دراسة اللغات.", example_ar: "شرح: يُستخدم مجازًا للدلالة على الطموح.", tag: "دراسة" },
    { word: "تَرَقُّب", meaning: "الانتظار بشوق وتوتر", example: "عاش لحظات من الترقب قبل النتيجة.", example_ar: "شرح: يجمع بين الأمل والقلق معًا.", tag: "مشاعر" },
    { word: "مُثابَرة", meaning: "الإصرار على تحقيق هدف رغم الصعاب", example: "نجح بفضل مثابرته لا حظه.", example_ar: "شرح: تُستخدم كثيرًا في سياقات النجاح.", tag: "شخصية" },
    { word: "بَراعة", meaning: "المهارة الفائقة في أمر ما", example: "تميز المترجم ببراعته اللغوية.", example_ar: "شرح: تدل على إتقان يفوق المعتاد.", tag: "لغة" },
    { word: "اِنْبِهار", meaning: "شدة الإعجاب والدهشة", example: "وقف الجمهور في انبهار تام.", example_ar: "شرح: أقوى من مجرد الإعجاب العادي.", tag: "مشاعر" },
    { word: "تَفانٍ", meaning: "بذل الجهد الكامل والإخلاص في العمل", example: "عملت بتفانٍ من أجل زملائها.", example_ar: "شرح: يتضمن معنى التضحية الذاتية.", tag: "عمل" },
    { word: "مُفارَقة", meaning: "أمر غريب يجمع بين متناقضين", example: "من المفارقة أنه نجح بعد فشله المتكرر.", example_ar: "شرح: تشبه كلمة Paradox في الإنجليزية.", tag: "لغة" },
    { word: "شَغَف", meaning: "حب شديد مصحوب بحماس", example: "درست الروسية بشغف كبير.", example_ar: "شرح: أقوى من الاهتمام العادي.", tag: "مشاعر" },
    { word: "تَجَذُّر", meaning: "الرسوخ والثبات العميق", example: "تجذرت العادة في شخصيته.", example_ar: "شرح: مأخوذة من جذر النبات مجازًا.", tag: "شخصية" },
    { word: "إِسْهاب", meaning: "الإطالة الزائدة في الكلام", example: "تجنّب الإسهاب في إجابته.", example_ar: "شرح: عكسه الإيجاز والاختصار.", tag: "لغة" },
    { word: "تَرَيُّث", meaning: "التأني وعدم التسرع", example: "قرر التريث قبل اتخاذ القرار.", example_ar: "شرح: مرادف مهذب لكلمة الانتظار.", tag: "شخصية" },
    { word: "وَفْرَة", meaning: "الكثرة والغزارة", example: "توجد وفرة من الكتب في مكتبة الكلية.", example_ar: "شرح: تستخدم للموارد والمواد.", tag: "دراسة" },
    { word: "تَأَقْلُم", meaning: "التكيّف مع بيئة أو ثقافة جديدة", example: "سرعان ما تأقلم مع الحياة الجامعية.", example_ar: "شرح: مهمة لكل مسافر أو مغترب.", tag: "ثقافة" },
    { word: "إِبْحار", meaning: "الانطلاق في رحلة أو تعمّق في موضوع", example: "أبحر الطالب في تفاصيل النص الأدبي.", example_ar: "شرح: يُستخدم حقيقيًا ومجازيًا.", tag: "سفر" },
  ],
};

/* عبارات ترحيبية عشوائية تظهر عند فتح كل صفحة لغة */
const WELCOME_LINES = {
  en: ["Every word is a new stamp in your passport.", "Fluency is built one page at a time."],
  es: ["Cada palabra es un sello nuevo en tu pasaporte.", "La fluidez se construye página a página."],
  ru: ["Каждое слово — новый штамп в твоём паспорте.", "Беглость строится страница за страницей."],
  ar: ["كل كلمة جديدة ختمٌ إضافي في جواز سفرك.", "الفصاحة تُبنى صفحة بعد صفحة."],
};

/* =========================================================
   زاوية المترجم — تمارين ترجمة حقيقية مبنية على تصنيف
   فينييه ودربلنيه (Vinay & Darbelnet) لتقنيات الترجمة:
   حرفية / اقتراض / محاكاة / نقل (تحويل نوع الكلمة) /
   تحوير (Modulation) / مكافأة (Equivalence) / تكييف (Adaptation)
   الحقول: source (الجملة الأصلية) | source_lang (اسم لغة المصدر)
   target_lang (اسم لغة الهدف) | model (ترجمة مقترحة)
   technique (اسم التقنية) | note (تعليق تحليلي قصير)
   ========================================================= */
const TRANSLATION_LAB = {
  en: [
    { source: "It's raining cats and dogs.", source_lang: "الإنجليزية", target_lang: "العربية",
      model: "الدنيا بتمطر بغزارة شديدة.", technique: "المكافأة (Equivalence)",
      note: "الترجمة الحرفية 'قطط وكلاب' بلا معنى بالعربية؛ المكافأة تستبدل الصورة كلها بأخرى تؤدي نفس الأثر." },
    { source: "The committee reached a decision after long deliberation.", source_lang: "الإنجليزية", target_lang: "العربية",
      model: "توصّلت اللجنة إلى قرار بعد مداولات طويلة.", technique: "النقل (Transposition)",
      note: "الاسم 'deliberation' يقابله هنا اسم عربي أيضًا، لكن بنية الجملة الاسمية تغيّرت لتناسب تركيب العربية." },
    { source: "He kicked the bucket last night.", source_lang: "الإنجليزية", target_lang: "العربية",
      model: "توفي الليلة الماضية.", technique: "التكييف (Adaptation)",
      note: "تعبير عامي عن الموت لا مقابل حرفي له؛ التكييف يستبدله بصياغة تناسب سجل الجملة ومعناها الحقيقي لا صورتها." },
    { source: "Please find attached the requested document.", source_lang: "الإنجليزية", target_lang: "العربية",
      model: "تجدون طيه المستند المطلوب.", technique: "الترجمة الحرفية المُعدَّلة",
      note: "صيغة مراسلات رسمية تُترجم شبه حرفيًا لأن العربية تملك تعبيرًا مكافئًا بنفس الدرجة من الرسمية." },
    { source: "She has a chip on her shoulder about her accent.", source_lang: "الإنجليزية", target_lang: "العربية",
      model: "لديها حساسية زائدة تجاه لكنتها.", technique: "التحوير (Modulation)",
      note: "التحوير يغيّر زاوية النظر للفكرة (من صورة جسدية إلى وصف نفسي) مع الحفاظ على المعنى الكامل." },
  ],
  es: [
    { source: "No hay mal que por bien no venga.", source_lang: "الإسبانية", target_lang: "العربية",
      model: "رُبَّ ضارة نافعة.", technique: "المكافأة (Equivalence)",
      note: "مَثَل شعبي إسباني قابلناه بمثل عربي مكافئ له في المعنى والوظيفة لا في الألفاظ." },
    { source: "Se me fue el santo al cielo.", source_lang: "الإسبانية", target_lang: "العربية",
      model: "سرحت وشرَدَ ذهني تمامًا عمّا كنت أفعله.", technique: "التكييف (Adaptation)",
      note: "تعبير ديني الصورة (القديس يطير للسماء) لا مقابل ثقافي له، فاستُبدل بوصف الحالة الذهنية نفسها." },
    { source: "El proyecto sigue en marcha pese a los retrasos.", source_lang: "الإسبانية", target_lang: "العربية",
      model: "لا يزال المشروع قيد التنفيذ رغم التأخيرات.", technique: "الترجمة الحرفية",
      note: "بنية الجملة ومعانيها متوازية بين اللغتين، فالترجمة شبه المباشرة كافية وسليمة هنا." },
    { source: "Me costó horrores terminar la tesis.", source_lang: "الإسبانية", target_lang: "العربية",
      model: "بذلت جهدًا مضنيًا لإنهاء الرسالة الجامعية.", technique: "التحوير (Modulation)",
      note: "'costar horrores' حرفيًا 'يكلّف أهوالًا'؛ التحوير ينقل الإحساس بالمشقة بصياغة عربية طبيعية." },
    { source: "Ojalá que llegue a tiempo.", source_lang: "الإسبانية", target_lang: "العربية",
      model: "إن شاء الله يوصل في الميعاد.", technique: "الاقتراض التاريخي (Loan origin)",
      note: "كلمة 'Ojalá' نفسها مقترضة أصلًا من العربية 'لو شاء الله'، فهذه الجملة ترجمة ترجع لأصلها!" },
  ],
  ru: [
    { source: "Без труда не вытащишь и рыбку из пруда.", source_lang: "الروسية", target_lang: "العربية",
      model: "من جدّ وجد، ومن زرع حصد.", technique: "المكافأة (Equivalence)",
      note: "مثل روسي معناه الحرفي 'بلا تعب لن تُخرج حتى سمكة من البركة'، قابلناه بمثل عربي بنفس الحكمة." },
    { source: "У меня душа не на месте.", source_lang: "الروسية", target_lang: "العربية",
      model: "قلبي مشغول ولا يهدأ لي بال.", technique: "التحوير (Modulation)",
      note: "حرفيًا 'روحي ليست في مكانها'؛ التحوير ينقل الصورة الجسدية لصورة عربية أليفة عن القلق." },
    { source: "Он работает спустя рукава.", source_lang: "الروسية", target_lang: "العربية",
      model: "يعمل بإهمال وبلا جدّية.", technique: "التكييف (Adaptation)",
      note: "حرفيًا 'يعمل والأكمام مرخاة' كناية روسية عن التراخي، تُستبدل بوصف مباشر مكافئ." },
    { source: "Договор вступает в силу с момента подписания.", source_lang: "الروسية", target_lang: "العربية",
      model: "يدخل العقد حيّز التنفيذ من تاريخ توقيعه.", technique: "الترجمة الحرفية القانونية",
      note: "النصوص القانونية غالبًا تُترجم شبه حرفيًا للحفاظ على الدقة القانونية والمصطلحية." },
    { source: "Это не моя чашка чая.", source_lang: "الروسية", target_lang: "العربية",
      model: "هذا ليس من اهتماماتي إطلاقًا.", technique: "التكييف (Adaptation)",
      note: "تعبير 'ليس فنجان شايي' مستعار أصلًا من الإنجليزية 'not my cup of tea'، يُترجم بوظيفته لا بصورته." },
  ],
  ar: [
    { source: "رُبَّ ضارة نافعة.", source_lang: "العربية", target_lang: "الإنجليزية",
      model: "Every cloud has a silver lining.", technique: "المكافأة (Equivalence)",
      note: "مثل عربي فصيح قوبل بمثل إنجليزي مكافئ وظيفيًا رغم اختلاف الصورة البلاغية تمامًا." },
    { source: "لا تؤجل عمل اليوم إلى الغد.", source_lang: "العربية", target_lang: "الإنجليزية",
      model: "Don't put off till tomorrow what you can do today.", technique: "الترجمة الحرفية",
      note: "التوازي شبه التام بين تركيب الجملتين يسمح بترجمة قريبة من الحرفية بلا إخلال بالمعنى." },
    { source: "طار صوابه من الغضب.", source_lang: "العربية", target_lang: "الإنجليزية",
      model: "He flew into a rage.", technique: "النقل + التحوير",
      note: "'طار' فعل حركي يُنقل إلى تعبير إنجليزي بصورة مشابهة (fly into) لكن ببنية نحوية مختلفة." },
    { source: "بين يديك مستقبل واعد.", source_lang: "العربية", target_lang: "الإنجليزية",
      model: "You hold a promising future in your hands.", technique: "الترجمة الحرفية المعدّلة",
      note: "صورة 'بين يديك' الجسدية محفوظة في الإنجليزية 'in your hands' لتطابق التصور الثقافي بين اللغتين." },
    { source: "خير الكلام ما قلّ ودلّ.", source_lang: "العربية", target_lang: "الإنجليزية",
      model: "Brevity is the soul of wit.", technique: "المكافأة (Equivalence)",
      note: "حكمة عربية عن الإيجاز قوبلت بعبارة شكسبيرية شهيرة تؤدي المعنى والوظيفة نفسها لا الألفاظ." },
  ],
};

/* =========================================================
   جذور وروابط — تتبع الكلمات عبر اللغات (اقتراض/أصل تاريخي)
   الحقول: word (الكلمة) | root (الأصل) | path (مسار الانتقال)
   note (شرح لغوي مختصر)
   ========================================================= */
const ETYMOLOGY = {
  es: [
    { word: "Aceite", root: "الزيت", path: "العربية الأندلسية ← الإسبانية", note: "من أكثر من 4000 كلمة إسبانية بأصل عربي، أغلبها دخل عبر الأندلس." },
    { word: "Alcalde", root: "القاضي", path: "العربية ← الإسبانية", note: "تعني اليوم 'العمدة'؛ لاحظ بقاء أداة التعريف 'ال' ملتصقة بالكلمة." },
    { word: "Almohada", root: "المخدّة", path: "العربية ← الإسبانية", note: "مثال واضح على بقاء 'ال' التعريف كجزء أصيل من الكلمة الإسبانية." },
    { word: "Ojalá", root: "لو شاء الله / يا الله", path: "العربية ← الإسبانية", note: "من أجمل الأمثلة: تحوّلت من دعاء عربي إلى أداة تمنٍّ إسبانية شائعة جدًا." },
    { word: "Azúcar", root: "السكّر", path: "العربية ← الإسبانية (وعبرها لعدة لغات أوروبية)", note: "نفس الأصل أعطى 'sugar' بالإنجليزية و'сахар' تأثرًا غير مباشر بالروسية." },
    { word: "Rehén", root: "الرهن", path: "العربية ← الإسبانية", note: "احتفظت بالمعنى القانوني الأصلي: الشخص أو الشيء المرهون كضمان." },
    { word: "Tarea", root: "الطريحة", path: "العربية ← الإسبانية", note: "أصل الكلمة يشير إلى 'المهمة المفروضة'، ومنها المعنى الحديث 'الواجب'." },
    { word: "Hasta", root: "حتى", path: "العربية ← الإسبانية", note: "من أدوات الربط القليلة التي انتقلت شبه كما هي في النطق والمعنى." },
  ],
  en: [
    { word: "Algebra", root: "الجبر", path: "العربية ← اللاتينية ← الإنجليزية", note: "من عنوان كتاب الخوارزمي 'الجبر والمقابلة' في الرياضيات." },
    { word: "Alcohol", root: "الكُحل", path: "العربية ← اللاتينية ← الإنجليزية", note: "الكحل كان يشير أصلًا لمسحوق دقيق، ثم تطور المعنى إلى المادة الكيميائية." },
    { word: "Admiral", root: "أمير البحر", path: "العربية ← الإسبانية/الفرنسية ← الإنجليزية", note: "من لقب 'أمير' العسكري البحري في الأندلس والحملات الصليبية." },
    { word: "Sofa", root: "الصُّفّة", path: "العربية ← التركية ← الإنجليزية", note: "الصُّفّة كانت مكانًا مرتفعًا للجلوس، وتطور المعنى إلى قطعة الأثاث المعروفة." },
    { word: "Magazine", root: "مخازن", path: "العربية ← الإيطالية/الفرنسية ← الإنجليزية", note: "المعنى الأصلي 'أماكن التخزين'، ثم تحوّل مجازًا إلى 'مخزن للمعلومات' أي المجلة." },
    { word: "Cotton", root: "قُطن", path: "العربية ← الفرنسية القديمة ← الإنجليزية", note: "انتقلت الكلمة كما هي تقريبًا في النطق عبر طريق الحرير والتجارة المتوسطية." },
  ],
  ru: [
    { word: "Кофе (Kofe)", root: "قهوة", path: "العربية ← التركية ← الهولندية ← الروسية", note: "رحلة القهوة اللغوية طويلة، لكن الجذر العربي واضح في كل محطاتها." },
    { word: "Магазин (Magazin)", root: "مخازن", path: "العربية ← الفرنسية ← الروسية", note: "نفس أصل الكلمة الإنجليزية 'Magazine' لكنها في الروسية احتفظت بمعنى 'متجر'." },
    { word: "Алгебра (Algebra)", root: "الجبر", path: "العربية ← اللاتينية ← الروسية", note: "استعارة علمية مباشرة دخلت أغلب لغات العالم بنفس الجذر تقريبًا." },
  ],
  ar: [
    { word: "السكّر", root: "→ Sugar / Azúcar / Сахар (تأثر)", path: "العربية ← عبرت لعدة لغات أوروبية", note: "كلمة عربية واحدة سافرت لتصبح جزءًا من مفردات يومية في لغات لا تمت للعربية بصلة." },
    { word: "القطن", root: "→ Cotton / Algodón", path: "العربية ← الفرنسية/الإسبانية القديمة", note: "لاحظ بقاء 'ال' التعريف في الشكل الإسباني 'Algodón' كاملة تقريبًا." },
    { word: "الجبر", root: "→ Algebra / Алгебра", path: "العربية ← اللاتينية", note: "من أوضح الأمثلة على أثر الحضارة العلمية العربية في المصطلح العلمي العالمي." },
    { word: "القهوة", root: "→ Coffee / Café / Кофе", path: "العربية ← التركية ← أوروبا", note: "كلمة واحدة، رحلة قرون، ونطق شبه متقارب في عشرات اللغات حول العالم." },
    { word: "الأميرال", root: "→ Admiral / Almirante", path: "العربية ← الأندلس", note: "لقب عسكري بحري عربي أصبح رتبة رسمية في معظم بحريات العالم اليوم." },
  ],
};
