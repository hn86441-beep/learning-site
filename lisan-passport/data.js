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
