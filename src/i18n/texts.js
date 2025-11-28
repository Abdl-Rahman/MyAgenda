// قاموس النصوص (عربي / إنجليزي)
const texts = {
  ar: {
    // Navbar
    navTitle: "مهماتي اليومية",
    logout: "تسجيل خروج",

    // Sidebar
    navHome: "الرئيسية",
    navTodo: "المهام",
    navCalendar: "التقويم",
    navNotes: "ملاحظات",
    navAbout: "حول التطبيق",

    // To-Do main
    title: "To-Do Work",
    subtitle: "تطبيق بسيط لإدارة المهام باستخدام React",
    placeholder: "اكتب المهمة...",
    add: "إضافة",
    total: "كل المهام:",
    active: "غير مكتملة:",
    completed: "مكتملة:",
    empty: "ما في مهام حالياً. أضف مهمة 👇",
    delete: "حذف",

    // وقت المهمة (To-Do)
    timeLabel: "وقت إنجاز المهمة",
    timeHelp: "يمكنك تركه فارغاً",
    timeLeftPrefix: "متبقي:",
    timeExpired: "انتهى الوقت",
    noDeadline: "بدون وقت محدد",

    // Priority + Search
    priorityLabel: "الأولوية",
    priorityHigh: "عالية",
    priorityMedium: "متوسطة",
    priorityLow: "منخفضة",
    filterPriorityLabel: "تصفية حسب الأولوية:",
    filterAll: "الكل",
    todoSearchPlaceholder: "ابحث داخل المهام...",
    noMatchTodos: "لا توجد مهام مطابقة للبحث أو التصفية.",

    // Sign In
    loginTitle: "تسجيل الدخول",
    emailLabel: "البريد الإلكتروني",
    passwordLabel: "كلمة المرور",
    emailPlaceholder: "أدخل بريدك الإلكتروني",
    passwordPlaceholder: "أدخل كلمة المرور",
    loginButton: "تسجيل الدخول",
    loginError: "الرجاء إدخال البريد وكلمة المرور",

    // Calendar
    calendarTitle: "التقويم",
    calendarAddTitle: "إضافة حدث لهذا اليوم",
    calendarEventPlaceholder: "مثال: مقابلة، نشاط، مهمة...",
    calendarTimeLabel: "الوقت",
    calendarAddButton: "إضافة الحدث",
    calendarNoEvents: "لا توجد أحداث في هذا اليوم.",
    calendarEventsTitle: "أحداث هذا اليوم",
    calendarDelete: "حذف",
    calendarMonthPrev: "الشهر السابق",
    calendarMonthNext: "الشهر التالي",

    // Notes
    notesTitle: "الملاحظات",
    notesPlaceholder: "اكتب ملاحظة أو فكرة تود حفظها...",
    notesAddButton: "إضافة ملاحظة",
    notesEmpty: "لا توجد ملاحظات حتى الآن.",
    notesDelete: "حذف",

    // Home / Welcome
    welcomeTitle: "أتمنى لك يوماً سعيداً 👋",
    welcomeSubtitle: "هل أنت جاهز اليوم لمهامك وملاحظاتك؟",
    welcomeTodo: "إدارة مهامك اليومية من خلال قسم المهام (To-Do).",
    welcomeNotes: "تدوين أفكارك وملاحظاتك المهمة في قسم الملاحظات (Notes).",
    welcomeCalendar: "متابعة مواعيدك وأنشطتك القادمة في التقويم (Calendar).",

    // About page
    aboutTitle: "حول هذا المشروع",
    aboutIntro:
      "هذا المشروع هو تطبيق ويب بسيط لإدارة المهام والملاحظات والمواعيد، تم تطويره باستخدام مكتبة React ليكون مثالاً لمشروع جامعي منظم.",
    aboutFeaturesTitle: "ما الذي يقدّمه التطبيق؟",
    aboutFeatureTodo: "إدارة المهام اليومية مع إمكانية تحديد الوقت والأولوية والبحث.",
    aboutFeatureNotes: "تدوين الملاحظات والأفكار والرجوع إليها بسهولة.",
    aboutFeatureCalendar: "تقويم بسيط لإضافة الأحداث وتحديد اليوم والوقت.",
    aboutFeatureLangTheme:
      "دعم تعدد اللغات (العربية / الإنجليزية) مع وضع الليل والنهار (Dark / Light Mode).",
    aboutTechTitle: "التقنيات المستخدمة",
    aboutTechReact: "مكتبة React مع Create React App.",
    aboutTechState:
      "استخدام حالة المكوّنات (useState, useEffect) لإدارة البيانات.",
    aboutTechStorage: "تخزين البيانات محليًا في المتصفح باستخدام LocalStorage.",
    aboutLastNote:
      "يمكن تطوير هذا المشروع مستقبلاً لإضافة مزيد من المزايا مثل ربطه بقاعدة بيانات حقيقية أو نظام تسجيل مستخدمين.",

    // Footer
    footerTextPrefix: "تم تطوير هذا المشروع بواسطة",
    footerTextSuffix: "— مشروع جامعي لتطبيق React.",
  },
  en: {
    // Navbar
    navTitle: " My Agenda",
    logout: "Logout",

    // Sidebar
    navHome: "Home",
    navTodo: "To-Do",
    navCalendar: "Calendar",
    navNotes: "Notes",
    navAbout: "About",

    // To-Do main
    title: "To-Do Work",
    subtitle: "Simple React app to manage your tasks",
    placeholder: "Write your task...",
    add: "Add",
    total: "Total tasks:",
    active: "Active:",
    completed: "Completed:",
    empty: "No tasks yet. Add one 👇",
    delete: "Delete",

    // Task time (To-Do)
    timeLabel: "Task time",
    timeHelp: "You can leave it empty",
    timeLeftPrefix: "Left:",
    timeExpired: "Time is up",
    noDeadline: "No time set",

    // Priority + Search
    priorityLabel: "Priority",
    priorityHigh: "High",
    priorityMedium: "Medium",
    priorityLow: "Low",
    filterPriorityLabel: "Filter by priority:",
    filterAll: "All",
    todoSearchPlaceholder: "Search in tasks...",
    noMatchTodos: "No tasks match your search or filters.",

    // Sign In
    loginTitle: "Sign in",
    emailLabel: "Email",
    passwordLabel: "Password",
    emailPlaceholder: "Enter your email",
    passwordPlaceholder: "Enter your password",
    loginButton: "Sign in",
    loginError: "Please enter email and password",

    // Calendar
    calendarTitle: "Calendar",
    calendarAddTitle: "Add event to this day",
    calendarEventPlaceholder: "Example: interview, activity, task...",
    calendarTimeLabel: "Time",
    calendarAddButton: "Add event",
    calendarNoEvents: "No events for this day.",
    calendarEventsTitle: "Events",
    calendarDelete: "Delete",
    calendarMonthPrev: "Previous month",
    calendarMonthNext: "Next month",

    // Notes
    notesTitle: "Notes",
    notesPlaceholder: "Write a note you want to remember...",
    notesAddButton: "Add note",
    notesEmpty: "No notes yet.",
    notesDelete: "Delete",

    // Home / Welcome
    welcomeTitle: "Wish you a great day 👋",
    welcomeSubtitle: "Are you ready for your tasks and notes today?",
    welcomeTodo: "Manage your daily tasks using the To-Do section.",
    welcomeNotes: "Write down your thoughts and ideas in the Notes section.",
    welcomeCalendar: "Track your upcoming events using the Calendar.",

    // About page
    aboutTitle: "About this project",
    aboutIntro:
      "This project is a simple web application for managing tasks, notes, and events, built with React as a clean example of a university-level project.",
    aboutFeaturesTitle: "What does this app provide?",
    aboutFeatureTodo:
      "Daily task management with time, priority, and search features.",
    aboutFeatureNotes:
      "A notes section to keep your ideas and important thoughts.",
    aboutFeatureCalendar:
      "A basic calendar to add events and select day and time.",
    aboutFeatureLangTheme:
      "Supports multiple languages (Arabic / English) and light/dark themes.",
    aboutTechTitle: "Technologies used",
    aboutTechReact: "React library with Create React App.",
    aboutTechState:
      "Component state management using hooks (useState, useEffect).",
    aboutTechStorage:
      "Local data persistence using the browser LocalStorage.",
    aboutLastNote:
      "This project can be extended in the future by adding real authentication or connecting to a database.",

    // Footer
    footerTextPrefix: "Project developed by",
    footerTextSuffix: "— React university project.",
  },
};

export default texts;
