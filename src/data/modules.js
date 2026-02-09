import { 
    UserGroupIcon, 
    AcademicCapIcon, 
    ClipboardDocumentCheckIcon, 
    CurrencyRupeeIcon, 
    TruckIcon, 
    UsersIcon, 
    ChatBubbleLeftRightIcon, 
    ChartBarIcon, 
    ShieldCheckIcon,
    ClockIcon,
    DocumentDuplicateIcon,
    BuildingLibraryIcon,
    IdentificationIcon,
    ComputerDesktopIcon,
    DevicePhoneMobileIcon,
    CreditCardIcon,
    PresentationChartLineIcon,
    Square3Stack3DIcon,
    RocketLaunchIcon,
    ShoppingBagIcon,
    HomeIcon,
    BookOpenIcon,
    PhoneIcon,
    PencilSquareIcon,
    ListBulletIcon,
    BanknotesIcon,
    CheckBadgeIcon,
    ArrowsRightLeftIcon,
    GlobeAltIcon,
    LifebuoyIcon,
    TrophyIcon,
    DocumentTextIcon,
    WalletIcon
  } from '@heroicons/react/24/outline';
  
  export const categories = [
    { id: "all", label: "All Modules" },
    { id: "student", label: "Student Modules" },
    { id: "parent", label: "Parent Modules" },
    { id: "management", label: "School Management" },
  ];
  
  export const kpis = {
    hero: [
        { label: "Administrative Work", value: "Reduced", color: "text-emerald-600" }, // Obscured number
        { label: "Fee Collection", value: "Optimized", color: "text-blue-600" }, // Obscured number
        { label: "Digital Records", value: "Secure", color: "text-indigo-600" }, // Obscured number
    ],
    management: [
        { label: "Operational Efficiency", value: "40%", color: "text-rose-600" },
        { label: "Financial Transparency", value: "100%", color: "text-blue-600" },
        { label: "Admin Workload", value: "60%", color: "text-indigo-600" },
    ],
    academic: [
        { label: "Teacher Productivity", value: "35%", color: "text-emerald-600" },
        { label: "Exam Processing", value: "Digital", color: "text-amber-600" },
        { label: "Student Engagement", value: "High", color: "text-violet-600" },
    ],
    parent: [
        { label: "Fee Payments", value: "Mobile", color: "text-sky-600" },
        { label: "Safety Alerts", value: "Live", color: "text-rose-500" },
        { label: "Student Progress", value: "Tracked", color: "text-indigo-500" },
    ],
  };
  
  export const modules = [
    {
      id: "student-lifecycle",
      title: "Student Lifecycle",
      description: "Manage the complete journey from admission to alumni.",
      benefits: ["Streamlined Admissions", "Digital Student Records", "Alumni Networking"],
      kpi: "Digital Profiles",
      icon: UserGroupIcon,
      image: "/Images/MySchool/MySchoolBells/StudentLifecycleMgmt.webp",
      path: "/modules/student-lifecycle",
      category: "management"
    },
    {
      id: "academic-management",
      title: "Academic Management",
      description: "Comprehensive tools for lesson planning, exams, and grading.",
      benefits: ["Lesson Planning", "Exam Scheduling", "Automated Grading"],
      kpi: "Conflict-Free",
      icon: AcademicCapIcon,
      image: "/Images/MySchool/MySchoolBells/AcademicManagement.webp",
      path: "/modules/academic-management",
      category: "student"
    },
    {
      id: "attendance-management",
      title: "Attendance Management",
      description: "Real-time attendance tracking for students and staff.",
      benefits: ["Biometric Integration", "Mobile Attendance", "Instant Alerts"],
      kpi: "Accurate Tracking",
      icon: ClipboardDocumentCheckIcon,
      image: "/Images/MySchool/MySchoolBells/smart.webp",
      path: "/modules/attendance-management",
      category: "management"
    },
    {
      id: "fee-finance",
      title: "Fee & Finance",
      description: "End-to-end fee collection and financial reporting.",
      benefits: ["Online Payments", "Automated Receipts", "Defaulter Tracking"],
      kpi: "Faster Cycles",
      icon: CurrencyRupeeIcon,
      image: "/Images/MySchool/MySchoolBells/financialmanagement.webp",
      path: "/modules/fee-finance",
      category: "management"
    },
    {
      id: "transport-management",
      title: "Transport Management",
      description: "Optimize routes and ensure student safety during transit.",
      benefits: ["Live Tracking", "Route Optimization", "Safety Alerts"],
      kpi: "Safe Transit",
      icon: TruckIcon,
      image: "/Images/MySchool/MySchoolBells/transportation.webp",
      path: "/modules/transport-management",
      category: "parent"
    },
    {
      id: "staff-hr",
      title: "Staff & HR",
      description: "Manage staff payroll, leave, and performance efficiently.",
      benefits: ["Payroll Automation", "Leave Management", "Performance Reviews"],
      kpi: "Efficient Admin",
      icon: UsersIcon,
      image: "/Images/MySchool/MySchoolBells/hr.webp",
      path: "/modules/staff-hr",
      category: "management"
    },
    {
      id: "communication",
      title: "Communication",
      description: "Bridge the gap between parents, teachers, and school.",
      benefits: ["SMS/App Alerts", "Circulars", "Event Updates"],
      kpi: "Instant Reach",
      icon: ChatBubbleLeftRightIcon,
      image: "/Images/MySchool/MySchoolBells/Communication.webp",
      path: "/modules/communication",
      category: "parent"
    },
    {
      id: "reports-analytics",
      title: "Reports & Analytics",
      description: "Data-driven insights for better decision making.",
      benefits: ["Custom Reports", "Visual Analytics", "Exportable Data"],
      kpi: "Real-Time Insights",
      icon: ChartBarIcon,
      image: "/Images/MySchool/MySchoolBells/Personaldashboard.webp",
      path: "/modules/reports-analytics",
      category: "management"
    },
    {
      id: "security-access",
      title: "Security & Access",
      description: "Ensure data privacy and physical security of the campus.",
      benefits: ["Role-Based Access", "Visitor Management", "Data Encryption"],
      kpi: "Total Security",
      icon: ShieldCheckIcon,
      image: "/Images/MySchool/MySchoolBells/Security&AccessControl.webp",
      path: "/modules/security-access",
      category: "management"
    },
    {
        id: "timetable",
        title: "Timetable & Scheduling",
        description: "Organizes daily academic flow efficiently.",
        benefits: ["Class Timetables", "Teacher Workload", "Substitution"],
        kpi: "Optimized Time",
        icon: ClockIcon,
        image: "/Images/MySchool/MySchoolBells/Timetable.webp",
        path: "/modules/timetable",
        category: "student"
    },
    {
        id: "document-management",
        title: "Document Management",
        description: "Digitizes all school records secure.",
        benefits: ["Student Docs", "Digital Archive", "Certificates"],
        kpi: "Paperless",
        icon: DocumentDuplicateIcon,
        image: "/Images/MySchool/MySchoolBells/RecordManagement.webp",
        path: "/modules/document-management",
        category: "management"
    },
    {
        id: "administration",
        title: "Administration",
        description: "Supports broad school management functions.",
        benefits: ["Inventory", "Library", "Events"],
        kpi: "Smooth Ops",
        icon: BuildingLibraryIcon,
        image: "/Images/MySchool/MySchoolBells/Admin.webp",
        path: "/modules/administration",
        category: "management"
    },
    {
        id: "id-cards",
        title: "Smart ID Cards",
        description: "Custom design and automated printing of school ID cards.",
        benefits: ["QR Code Integration", "Bulk Printing", "Design Templates"],
        kpi: "Instant ID",
        icon: IdentificationIcon,
        image: "/Images/MySchool/MySchoolBells/Id Cards.webp",
        path: "/modules/id-cards",
        category: "services"
    },
    {
        id: "uniforms-stationery",
        title: "Uniforms & Stationery",
        description: "Organized inventory and pre-ordering for school essentials.",
        benefits: ["Size Profiling", "Stock Tracking", "Parent Pre-orders"],
        kpi: "Ready for Term",
        icon: ShoppingBagIcon,
        image: "https://akm-img-a-in.tosshub.com/indiatoday/styles/medium_crop_simple/public/2025-08/chatgpt_image_aug_8_2025_12_52_06_pm.png?VersionId=5vZHC8RY1QIYJhntp2tuH7G_eDu6QSWA&size=750:*",
        path: "/modules/uniforms-stationery",
        category: "services"
    },
    {
        id: "online-exam",
        title: "Online Exam Platform",
        description: "Secure and automated examination system for all grades.",
        benefits: ["Auto-Grading", "Anti-Cheat System", "Question Banks"],
        kpi: "Paperless Tests",
        icon: ComputerDesktopIcon,
        image: "/Images/MySchool/MySchoolBells/OnlineExam.webp",
        path: "/modules/online-exam",
        category: "student"
    },
    {
        id: "mobile-app",
        title: "School Mobile App",
        description: "Stay connected with parents and students on the go.",
        benefits: ["Push Notifications", "Real-time Updates", "App Branding"],
        kpi: "Higher Engagement",
        icon: DevicePhoneMobileIcon,
        image: "/Images/MySchool/MySchoolBells/Mobile App.webp",
        path: "/modules/mobile-app",
        category: "services"
    },
    {
        id: "payment-gateway",
        title: "Payment Gateway",
        description: "Secure and frictionless online fee collection system.",
        benefits: ["Multi-Gateway Support", "Instant Settlement", "Low Processing Fee"],
        kpi: "Faster Collection",
        icon: CreditCardIcon,
        image: "/Images/MySchool/MySchoolBells/PaymentGateway.webp",
        path: "/modules/payment-gateway",
        category: "parent"
    },
    {
        id: "inventory-assets",
        title: "Inventory & Assets",
        description: "Complete tracking of school property and stock items.",
        benefits: ["Stock Alerts", "Asset Tracking", "Supplier Management"],
        kpi: "Zero Loss",
        icon: Square3Stack3DIcon,
        image: "/Images/MySchool/MySchoolBells/Inventory&Asset.webp",
        path: "/modules/inventory-assets",
        category: "management"
    },
    {
        id: "digital-marketing",
        title: "Digital Marketing",
        description: "Grow your school's brand and increase admissions.",
        benefits: ["Social Media Plan", "SEO Optimization", "Lead Generation"],
        kpi: "Admission Growth",
        icon: RocketLaunchIcon,
        image: "/Images/MySchool/MySchoolBells/DigitalMaketing.webp",
        path: "/modules/digital-marketing",
        category: "services"
    },
    {
        id: "hostel-management",
        title: "Hostel Management",
        description: "Efficiently manage student accommodation and facilities.",
        benefits: ["Room Allocation", "Attendance Tracking", "Mess Management"],
        kpi: "Organized Living",
        icon: HomeIcon,
        image: "/Images/MySchool/MySchoolBells/Hostel.webp",
        path: "/modules/hostel-management",
        category: "management"
    },
    {
        id: "library-management",
        title: "Library Management",
        description: "Automate library operations and track books seamlessly.",
        benefits: ["Barcoding Support", "Issue & Return", "OPAC Search"],
        kpi: "Smart Catalog",
        icon: BookOpenIcon,
        image: "/Images/MySchool/MySchoolBells/SmartLibary.webp",
        path: "/modules/library-management",
        category: "management"
    },
    {
        id: "whatsapp-communication",
        title: "WhatsApp Communication",
        description: "Direct outreach to parents via WhatsApp for instant updates.",
        benefits: ["Automated Alerts", "Broadcast Messages", "Two-way Chat"],
        kpi: "Direct Reach",
        icon: PhoneIcon,
        image: "/Images/MySchool/MySchoolBells/whatsappcommunication.jpg",
        path: "/modules/whatsapp-communication",
        category: "services"
    },
    {
        id: "homework-diary",
        title: "Homework & Diary",
        description: "Digital homework updates and student diary management.",
        benefits: ["Daily Tasks", "Teacher Comments", "Parent Verification"],
        kpi: "Study Track",
        icon: PencilSquareIcon,
        image: "/Images/MySchool/MySchoolBells/Homework.webp",
        path: "/modules/homework-diary",
        category: "student"
    },
    {
        id: "lesson-planning",
        title: "Lesson Planning",
        description: "Structured academic planning for teachers and admins.",
        benefits: ["Syllabus Mapping", "Progress Tracking", "Resource Sharing"],
        kpi: "Plan Ahead",
        icon: ListBulletIcon,
        image: "/Images/MySchool/MySchoolBells/lessonplanning.webp",
        path: "/modules/lesson-planning",
        category: "student"
    },
    {
        id: "payroll-management",
        title: "Payroll Management",
        description: "Automated salary calculation and disbursement system.",
        benefits: ["Salary Slips", "Statutory Compliance", "Leave Deduction"],
        kpi: "Accurate Payroll",
        icon: BanknotesIcon,
        image: "/Images/MySchool/MySchoolBells/payroll.webp",
        path: "/modules/payroll-management",
        category: "management"
    },
    {
        id: "approval-system",
        title: "Approval System",
        description: "Streamlined workflow for documents and requests.",
        benefits: ["Digital Signature", "Multi-level Approval", "Audit Trails"],
        kpi: "Faster Workflow",
        icon: CheckBadgeIcon,
        image: "/Images/MySchool/MySchoolBells/documentapprovalsystem.webp",
        path: "/modules/approval-system",
        category: "management"
    },
    {
        id: "data-migration",
        title: "Data Migration",
        description: "Seamlessly move your legacy school data to our platform.",
        benefits: ["Data Mapping", "Secure Transfer", "Verification"],
        kpi: "Zero Data Loss",
        icon: ArrowsRightLeftIcon,
        image: "/Images/MySchool/MySchoolBells/data-migration.webp",
        path: "/modules/data-migration",
        category: "management"
    },
    {
        id: "website-integration",
        title: "Website Integration",
        description: "Connect your school website with the ERP platform.",
        benefits: ["Online Enquiries", "Results Publication", "Notice Board"],
        kpi: "Connected Web",
        icon: GlobeAltIcon,
        image: "/Images/MySchool/MySchoolBells/Website Integration.webp",
        path: "/modules/website-integration",
        category: "services"
    },
    {
        id: "help-desk",
        title: "Help Desk",
        description: "Centralized support for students, parents, and staff.",
        benefits: ["Ticket Tracking", "FAQ Repository", "Feedback Loop"],
        kpi: "Instant Support",
        icon: LifebuoyIcon,
        image: "/Images/MySchool/MySchoolBells/HelpDesk.webp",
        path: "/modules/help-desk",
        category: "management"
    },
    {
        id: "sports-games",
        title: "Sports & Games",
        description: "Manage school sports activities and tournament records.",
        benefits: ["Team Allocation", "Event Schedules", "Achievement Logs"],
        kpi: "Active Campus",
        icon: TrophyIcon,
        image: "/Images/MySchool/MySchoolBells/Games.webp",
        path: "/modules/sports-games",
        category: "student"
    },
    {
        id: "certificates",
        title: "Certificates & Records",
        description: "Automated generation of TC, Bonafide, and other certificates.",
        benefits: ["Bulk Generation", "Custom Templates", "Digital Signatures"],
        kpi: "Instant Paperwork",
        icon: DocumentTextIcon,
        image: "/Images/MySchool/MySchoolBells/Certificates.webp",
        path: "/modules/certificates",
        category: "management"
    },
    {
        id: "accounts",
        title: "Accounts & Ledger",
        description: "Complete institutional accounting and ledger management.",
        benefits: ["Balance Sheet", "Voucher Entry", "Account Audits"],
        kpi: "Transparent Finance",
        icon: WalletIcon,
        image: "/Images/MySchool/MySchoolBells/Accounts.webp",
        path: "/modules/accounts",
        category: "management"
    },
    {
        id: "parent-portal",
        title: "Parent & Student Portal",
        description: "Unified web portal for parents and students to access all school data.",
        benefits: ["Single Sign-on", "Progress Tracking", "Fee Payments"],
        kpi: "24/7 Access",
        icon: UserGroupIcon,
        image: "/Images/MySchool/MySchoolBells/Parent&StudentPortal.webp",
        path: "/modules/parent-portal",
        category: "parent"
    }
  ];
  
  export const challenges = [
    {
      title: "Manual Paperwork",
      description: "Endless piles of paper leading to lost data and inefficiency.",
      solution: "Digital Records"
    },
    {
      title: "Communication Gaps",
      description: "Parents unaware of student progress or school events.",
      solution: "Instant Alerts"
    },
    {
      title: "Scattered Data",
      description: "Information silos across different departments.",
      solution: "Unified Platform"
    },
    {
      title: "Fee Complexity",
      description: "Tracking pending fees and managing receipts manually.",
      solution: "Automated Finance"
    },
    {
      title: "Admin Overload",
      description: "Staff spending hours on repetitive administrative tasks.",
      solution: "Process Automation"
    },
    {
        title: "Student Performance Tracking",
        description: "Identify struggling students early and monitor improvement trends with data-driven",
        solution: "Data-Driven Insights"
    }
  ];

  export const moduleDetails = {
    "student-lifecycle": {
        title: "Student Lifecycle Management",
        subtitle: "From Admission to Alumni – The Complete Journey.",
        description: "MySchoolBells manages the entire student journey from admission inquiry to graduation. Every record, interaction, and academic milestone is stored securely in a digital profile.",
        features: [
            "Online Admission & Enquiry Management",
            "Digital Student Profiles & Registration",
            "Class & Section Allocation",
            "Student Transfer & TC Generation",
            "Alumni Network & Records"
        ],
        benefits: [
            "Eliminate manual admission forms",
            "Centralized data accessible instantly",
            "Seamless year-to-year promotion",
            "Maintain long-term academic history"
        ]
    },
    "academic-management": {
        title: "Academic Management",
        subtitle: "Empower Teachers, Inspire Students.",
        description: "Streamline the core business of your school: education. From lesson planning to complex exam scheduling and report generation, we handle the logistics so teachers can focus on teaching.",
        features: [
            "Class & Subject Configuration",
            "Interactive Timetable Scheduling",
            "Digital Lesson Planning",
            "Homework & Assignment Tracking",
            "Exam Management & Grading",
            "Automated Report Cards"
        ],
        benefits: [
            "Standardized academic delivery",
            "Reduced teacher workload",
            "Error-free report card generation",
            "Transparent academic progress"
        ]
    },
    "attendance-management": {
        title: "Attendance Management",
        subtitle: "Every Minute Counts.",
        description: "Move beyond paper registers. Our smart attendance system tracks students and staff in real-time, integrating with biometric devices and sending instant alerts to parents.",
        features: [
            "Daily Student & Staff Attendance",
            "Biometric / RFID Integration",
            "Leave Application & Approval Workflow",
            "Absentee Reports & Analytics",
            "Auto-SMS to Parents for Absentees"
        ],
        benefits: [
            "Improved student safety",
            "Real-time visibility for management",
            "Reduced truancy",
            "Paperless record keeping"
        ]
    },
    "fee-finance": {
        title: "Fee & Finance Management",
        subtitle: "Financial Clarity & Efficiency.",
        description: "Simplify complex fee structures, automate collection cycles, and gain total control over your school's finances. Offer parents the convenience of online payments.",
        features: [
            "Flexible Fee Structure Configuration",
             "Online Payment Gateway Integration",
            "Installment & Concession Management",
            "Automated Invoice & Receipt Generation",
            "Outstanding Dues Tracking & Reminders",
            "Daily Collection Reports"
        ],
        benefits: [
            "Improve cash flow with timely payments",
            "Eliminate cash handling risks",
            "Transparent financial reporting",
            "Convenience for parents"
        ]
    },
    "transport-management": {
        title: "Transport Management",
        subtitle: "Safe Journeys, Peace of Mind.",
        description: "Ensure the safety of every student during their commute. Optimize routes, manage your fleet, and provide parents with live tracking capabilities.",
        features: [
            "Route Planning & Optimization",
            "Vehicle & Driver Management",
            "Student-Route Mapping",
            "Live Bus Tracking (GPS)",
            "Pickup & Drop Notifications",
            "Transport Fee Calculation"
        ],
        benefits: [
            "Enhanced student safety",
            "Cost-effective route planning",
            "Reduced parent anxiety",
            "Efficient fleet maintenance"
        ]
    },
    "staff-hr": {
        title: "Staff & HR Management",
        subtitle: "Supporting Those Who Teach.",
        description: "Manage your most valuable asset—your staff. From recruitment to retirement, handle profiling, attendance, leave, and payroll in one system.",
        features: [
            "Comprehensive Staff Profiles",
            "Biometric Attendance Linking",
            "Leave Management System",
            "Payroll Processing & Salary Slips",
            "Performance Reviews",
            "Role-Based Access Control"
        ],
        benefits: [
            "Streamlined HR processes",
            "Accurate payroll calculation",
            "Better resource planning",
            "Professional staff management"
        ]
    },
    "communication": {
        title: "Communication & Notifications",
        subtitle: "Bridging the Gap.",
        description: "Foster a strong school community with seamless communication. Ensure important updates, circulars, and emergency alerts reach parents instantly.",
        features: [
            "SMS & App Notifications",
            "Email Broadcasts",
            "Digital Circulars & Newsletters",
            "Event Reminders",
            "Two-way Parent-Teacher Messaging",
            "Emergency Alerts"
        ],
        benefits: [
            "Stronger parent engagement",
            "Instant information dissemination",
            "Eco-friendly (paperless circulars)",
            "Improved transparency"
        ]
    },
    "reports-analytics": {
        title: "Reports & Analytics",
        subtitle: "Data-Driven Decisions.",
        description: "Transform raw data into actionable insights. Our comprehensive reporting engine helps management track performance, finances, and operations at a glance.",
        features: [
            "Customizable MIS Reports",
            "Academic Performance Analytics",
            "Fee Collection Trends",
            "Attendance Heatmaps",
            "Staff Workload Analysis",
            "Export to Excel/PDF"
        ],
        benefits: [
            "Informed decision making",
            "Identify trends early",
            "Strategic planning support",
            "Full operational visibility"
        ]
    },
    "security-access": {
        title: "Security & Access Control",
        subtitle: "Uncompromised Safety.",
        description: "Protect your sensitive data with enterprise-grade security. Control who sees what with granular permission settings and audit logs.",
        features: [
            "Role-Based Access Control (RBAC)",
            "Secure Login with 2FA",
            "Data Encryption (SSL)",
            "Automated Backups",
            "Activity Audit Logs",
            "Visitor Management System"
        ],
        benefits: [
            "Data privacy compliance",
            "Secure student records",
            "Prevention of unauthorized access",
            "Peace of mind for management"
        ]
    },
    "timetable": {
        title: "Timetable & Scheduling",
        subtitle: "Organized Academic Flow.",
        description: "Create conflict-free schedules for classes and teachers effortlessly. Manage substitutions and ensure optimal resource utilization.",
        features: [
            "Automated Timetable Generation",
            "Class & Teacher Schedules",
            "Substitution Management",
            "Room Allocation",
            "Teacher Workload Balancing"
        ],
        benefits: [
            "Zero scheduling conflicts",
            "Optimal teacher utilization",
            "Smooth daily operations",
            "Easy schedule updates"
        ]
    },
    "document-management": {
        title: "Document Management",
        subtitle: "Your Digital Archive.",
        description: "Go completely paperless. Store, organize, and retrieve important student and school documents securely in the cloud.",
        features: [
            "Student Document Repository",
            "Staff Certificates & Records",
            "Digital Leaving Certificates",
            "School Policies & Forms",
            "Secure Cloud Storage"
        ],
        benefits: [
            "No more lost files",
            "Instant document retrieval",
            "Space saving",
            "Secure & backed up"
        ]
    },
    "administration": {
        title: "Administration & Operations",
        subtitle: "Smooth School Operations.",
        description: "Handle the diverse operational needs of a modern institution, from library books to hostel rooms and inventory.",
        features: [
            "Library Management System",
            "Inventory & Asset Tracking",
            "Hostel & Dormitory Management",
            "Event Management",
            "Compliance & Audit Records"
        ],
        benefits: [
            "Holistic campus management",
            "Asset accountability",
            "Efficient resource tracking",
            "Organized events"
        ]
    },
    "id-cards": {
        title: "Smart ID Cards Management",
        subtitle: "Professional. Automated. Secure.",
        description: "Eliminate the hassle of ID card creation. Our module allows for bulk generation, QR code integration for attendance, and professional design templates tailored for your school.",
        features: [
            "Automated Student Data Import",
            "Custom Design Templates",
            "Bulk QR Code Generation",
            "In-house Printing Support",
            "Digital ID Card Distribution"
        ],
        benefits: [
            "Instant ID card generation",
            "Integrated with attendance system",
            "Cost-effective in-house solution",
            "Durable and professional designs"
        ]
    },
    "online-exam": {
        title: "Online Examination Platform",
        subtitle: "Assessment Reimagined for the Digital Age.",
        description: "Conduct secure, scalable, and automated exams for every subject. From objective tests to complex descriptive assessments, manage everything in one secure environment.",
        features: [
            "Secure Browser Technology",
            "Automated MCQ Grading",
            "Descriptive Answer Evaluation",
            "Dynamic Question Banks",
            "Detailed Result Analytics"
        ],
        benefits: [
            "Prevents academic dishonesty",
            "Instant result publication",
            "Huge reduction in paper costs",
            "Stress-free exam management"
        ]
    },
    "mobile-app": {
        title: "School Branded Mobile App",
        subtitle: "Your School in Every Parent's Pocket.",
        description: "Enhance your school's brand and improve communication with a dedicated mobile app for iOS and Android. Keep parents engaged and informed in real-time.",
        features: [
            "Custom Branded App",
            "Real-time Push Notifications",
            "Mobile Fee Payments",
            "Homework & Diary Access",
            "Live Bus Tracking"
        ],
        benefits: [
            "Direct channel to parents",
            "Improved institutional brand",
            "Higher fee collection on mobile",
            "Anytime, anywhere data access"
        ]
    },
    "payment-gateway": {
        title: "Payment Gateway Integration",
        subtitle: "Frictionless Finance for Modern Schools.",
        description: "Offer parents multiple ways to pay fees online securely. Integrate with leading payment gateways for instant settlement and automated receipt generation.",
        features: [
            "UPI, Credit/Debit Card Support",
            "Net Banking & Wallet Integration",
            "Automatic Settlement to Bank",
            "Instant Digital Receipts",
            "Recurring Payment Alerts"
        ],
        benefits: [
            "Zero manual reconciliation",
            "Improved cash flow",
            "Parent convenience",
            "Highly secure transactions"
        ]
    },
    "inventory-assets": {
        title: "Inventory & Asset Tracking",
        subtitle: "Total Control Over School Property.",
        description: "Manage everything from library books to lab equipment and stationery. Track stock levels, manage vendors, and ensure audit compliance easily.",
        features: [
            "Fixed Asset Register",
            "Consumable Stock Management",
            "Vendor & Purchase Order Workflow",
            "Barcode/QR Tracking",
            "Automated Depreciation Reports"
        ],
        benefits: [
            "Eliminate stock wastage",
            "Complete asset accountability",
            "Streamlined procurement",
            "Audit-ready records"
        ]
    },
    "digital-marketing": {
        title: "School Digital Marketing",
        subtitle: "Boost Your Admissions & Brand Authority.",
        description: "In the digital-first world, your school needs to stand out. We provide the tools and strategies to grow your digital presence and attract the right students.",
        features: [
            "Managed Social Media Presence",
            "SEO for Local Admissions",
            "Lead Capture & CRM",
            "Professional Video Tours",
            "Email Marketing Campaigns"
        ],
        benefits: [
            "Increased admission enquiries",
            "Better brand awareness",
            "Targeted marketing ROI",
            "Competitive edge in the region"
        ]
    },
    "uniforms-stationery": {
        title: "Uniforms & Stationery Management",
        subtitle: "The Complete School Store Solution.",
        description: "Simplify the management of school essentials. From tracking uniform sizes to managing stationery stock and handling parent pre-orders, our system ensures your school store is always organized.",
        features: [
            "Store Inventory Management",
            "Student-wise Size Profiling",
            "Online Pre-ordering for Parents",
            "Billing & Receipt Generation",
            "Stock Reorder Notifications"
        ],
        benefits: [
            "No more long queues at the store",
            "Accurate stock forecasting",
            "Transparent financial records",
            "Convenience for parents"
        ]
    },
    "hostel-management": {
        title: "Hostel Management",
        subtitle: "A Home Away From Home.",
        description: "Efficiently manage student accommodation, room allocations, mess tracking, and facility maintenance in one integrated system.",
        features: [
            "Room & Bed Allocation",
            "Warden & Staff Management",
            "Mess & Meal Tracking",
            "Visitor Logs & Security",
            "Hostel Fee Integration"
        ],
        benefits: [
            "Organized student housing",
            "Real-time occupancy tracking",
            "Enhanced student safety",
            "Automated billing"
        ]
    },
    "library-management": {
        title: "Smart Library Management",
        subtitle: "Digital Cataloging for Modern Learning.",
        description: "Transform your library into a digital hub. Track every book, manage issue/return cycles, and provide students with a searchable online catalog.",
        features: [
            "Barcoding & QR Integration",
            "Issue & Return Tracking",
            "Online Public Access Catalog (OPAC)",
            "Fine Calculation & Receipts",
            "Vendor & Procurement Management"
        ],
        benefits: [
            "Accurate inventory tracking",
            "Reduced manual paperwork",
            "Easy book discovery",
            "Digital record of reading habits"
        ]
    },
    "whatsapp-communication": {
        title: "WhatsApp Communication",
        subtitle: "Connect Where It Matters Most.",
        description: "Bridge the communication gap with the tool parents use every day. Send automated alerts, reports, and attendance updates directly to WhatsApp.",
        features: [
            "Automated Result Sharing",
            "Attendance Alerts",
            "Fee Reminders",
            "School Circular Broadcasts",
            "Interactive Chat Support"
        ],
        benefits: [
            "99% open rate for messages",
            "Instant parent engagement",
            "Cost-effective outreach",
            "Improved institutional brand"
        ]
    },
    "homework-diary": {
        title: "Digital Homework & Diary",
        subtitle: "Closing the Loop on Daily Studies.",
        description: "Move beyond the physical diary. Share daily homework, teacher notes, and feedback with parents instantly through the mobile app and portal.",
        features: [
            "Daily Classwork & Homework",
            "Digital Parent Sign-off",
            "Attachment Support (PDF/Images)",
            "Personalized Teacher Remarks",
            "Subject-wise Task Tracking"
        ],
        benefits: [
            "No more missed assignments",
            "Transparent student progress",
            "Better home-school collaboration",
            "Real-time study tracking"
        ]
    },
    "lesson-planning": {
        title: "Advanced Lesson Planning",
        subtitle: "Academic Excellence, Planned.",
        description: "Empower teachers with tools to plan their curriculum, map it to standards, and track completion progress across the academic year.",
        features: [
            "Syllabus Breakdowns",
            "Multimedia Resource Mapping",
            "Teacher Performance Tracking",
            "Curriculum Archive",
            "Collaborative Planning Tools"
        ],
        benefits: [
            "Standardized teaching quality",
            "Better syllabus coverage",
            "Resource accessibility",
            "Reduced prep time for teachers"
        ]
    },
    "payroll-management": {
        title: "Payroll & Staff Compliance",
        subtitle: "Accurate Payroll, Every Time.",
        description: "Automate the complexities of staff salaries, leaves, and compliance. Ensure timely disbursements and maintain detailed financial records for auditing.",
        features: [
            "Automated Salary Calculations",
            "EPF/ESI & Tax Compliance",
            "Leave-Linked Pay Deduction",
            "Digital Salary Slips",
            "Arrears & Bonus Management"
        ],
        benefits: [
            "Zero calculation errors",
            "Timely compliance filing",
            "Professional staff experience",
            "Transparent financial records"
        ]
    },
    "approval-system": {
        title: "Workflow & Approval System",
        subtitle: "Digital Governance for Schools.",
        description: "Streamline the decision-making process. From leave requests to purchase orders, manage every approval through a structured digital workflow.",
        features: [
            "Multi-level Hierarchical Approvals",
            "Digital Signature Support",
            "Real-time Status Tracking",
            "Automated Notifications",
            "Audit Logs for Compliance"
        ],
        benefits: [
            "Faster turnaround times",
            "Eliminate physical file movement",
            "Enhanced accountability",
            "Paperless administration"
        ]
    },
    "data-migration": {
        title: "Seamless Data Migration",
        subtitle: "Transferring Your Legacy Securely.",
        description: "Transitioning to a new system is easy with our expert data migration services. We move your historical records safely and accurately.",
        features: [
            "Legacy System Data Extraction",
            "Data Cleansing & Validation",
            "Bulk Import Utilities",
            "Integrity Consistency Checks",
            "Historical Records Archive"
        ],
        benefits: [
            "Zero operational downtime",
            "Preservation of academic history",
            "Secure data handling",
            "Stress-free transition"
        ]
    },
    "website-integration": {
        title: "School Website Integration",
        subtitle: "A Connected Digital Front Door.",
        description: "Powerful integration that connects your front-end school website with the back-end ERP data for seamless interactivity.",
        features: [
            "Online Admission Enquiries",
            "Public Result Portal",
            "Live News & Event Sync",
            "Alumni Registration Portal",
            "Dynamic Notice Boards"
        ],
        benefits: [
            "Automated lead generation",
            "Reduced redundant data entry",
            "Unified digital identity",
            "Real-time public updates"
        ]
    },
    "help-desk": {
        title: "Institutional Help Desk",
        subtitle: "Support That Scales.",
        description: "Provide professional support to parents, students, and staff. Track issues through tickets and maintain a knowledge base for common queries.",
        features: [
            "Ticket Management System",
            "SLA Tracking",
            "Feedback & Rating System",
            "Automated FAQ Portal",
            "Multi-channel Support Integration"
        ],
        benefits: [
            "Enhanced stakeholder satisfaction",
            "Quick problem resolution",
            "Insight into recurring issues",
            "Professional support image"
        ]
    },
    "sports-games": {
        title: "Sports & Games Management",
        subtitle: "Nurturing Future Champions.",
        description: "Manage school sports activities, track student achievements, and organize local/state tournaments with ease.",
        features: [
            "Team Allocation & Rosters",
            "Tournament Bracketing",
            "Achievement & Medal Tracking",
            "Physical Fitness Records",
            "Equipment Tracking"
        ],
        benefits: [
            "Encourage student participation",
            "Archive sports history",
            "Organized events",
            "Identify athletic talent early"
        ]
    },
    "certificates": {
        title: "Certificates & Digital Records",
        subtitle: "Paperwork Made Instant.",
        description: "Automate the generation of Transfer Certificates, Bonafide Certificates, and other official documents with custom templates.",
        features: [
            "Bulk Certificate Generation",
            "Custom Design Templates",
            "Digital Signatures",
            "QR Code Verification",
            "ID Card Data Sync"
        ],
        benefits: [
            "Zero waiting time at office",
            "Professional document quality",
            "Tamper-proof verification",
            "Paperless archival"
        ]
    },
    "accounts": {
        title: "Institutional Accounts & Ledgers",
        subtitle: "Total Financial Visibility.",
        description: "Complete accounting software built for educational institutions. Manage balance sheets, vouchers, and audits in one secure location.",
        features: [
            "Daybook & General Ledger",
            "Trial Balance & Balance Sheets",
            "Voucher Management",
            "Bank Reconciliation",
            "Audit Trail Compliance"
        ],
        benefits: [
            "Real-time financial status",
            "Audit-ready accounting",
            "Tighter fiscal control",
            "Detailed expense tracking"
        ]
    },
    "parent-portal": {
        title: "Parent & Student Portal",
        subtitle: "The Hub of School-Home Communication.",
        description: "A centralized, secure web-based portal where parents can track their child's academic progress, attendance, and pay fees instantly.",
        features: [
            "Real-time Academic Dashboard",
            "Attendance & Leave Status",
            "Online Fee Payment History",
            "Digital Report Card Access",
            "Circulars & Event Calendar"
        ],
        benefits: [
            "Enhanced transparency",
            "Convenient fee management",
            "Better understanding of progress",
            "Direct channel for school updates"
        ]
    },
    "uniforms-stationery": {
        title: "Uniforms & Stationery Management",
        subtitle: "The Complete School Store Solution.",
        description: "Simplify the management of school essentials. From tracking uniform sizes to managing stationery stock and handling parent pre-orders, our system ensures your school store is always organized.",
        features: [
            "Store Inventory Management",
            "Student-wise Size Profiling",
            "Online Pre-ordering for Parents",
            "Billing & Receipt Generation",
            "Stock Reorder Notifications"
        ],
        benefits: [
            "No more long queues at the store",
            "Accurate stock forecasting",
            "Transparent financial records",
            "Convenience for parents"
        ]
    }
  };
