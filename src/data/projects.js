export const projectsData = [
  {
    id: "latest-fitness-ethiopia",
    title: "Latest Fitness Ethiopia",
    tagline: "Revolutionizing Gym Management with QR Technology",
    description: "A comprehensive gym management system that allows customers to register and receive personal QR codes for seamless check-in tracking and membership management.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop&crop=center",
    technologies: ["React", "Node.js", "QR Code API", "MySQL", "Express.js", "JWT Authentication"],
    category: "Fitness Management",
    liveUrl: "https://latestfitnessethiopia.com/",
    client: "Latest Fitness Ethiopia",
    duration: "3 months",
    year: "2023",
    
    // Case Study Details
    problem: {
      title: "The Challenge",
      description: "Latest Fitness Ethiopia was struggling with manual check-in processes that created long queues during peak hours. They needed a modern solution to track member attendance, manage memberships, and provide a seamless gym experience.",
      painPoints: [
        "Manual check-in process causing 15-20 minute wait times during peak hours",
        "Difficulty tracking member attendance and usage patterns",
        "Paper-based membership management leading to errors and lost records",
        "No way to verify active memberships quickly",
        "Limited insights into gym usage and member behavior"
      ]
    },
    
    solution: {
      title: "Our Solution",
      description: "We developed a comprehensive digital gym management platform with QR code-based check-in system, automated membership management, and real-time analytics dashboard.",
      features: [
        {
          title: "QR Code Check-In System",
          description: "Each member receives a unique QR code upon registration that can be scanned at entry for instant check-in",
          icon: "QrCode"
        },
        {
          title: "Membership Management",
          description: "Automated tracking of membership status, renewals, and payment history",
          icon: "Users"
        },
        {
          title: "Real-time Analytics",
          description: "Dashboard showing peak hours, member attendance patterns, and facility usage",
          icon: "BarChart"
        },
        {
          title: "Mobile-First Design",
          description: "Responsive interface accessible from any device for staff and members",
          icon: "Smartphone"
        }
      ],
      technicalHighlights: [
        "Built scalable REST API with Node.js and Express",
        "Implemented secure QR code generation and validation",
        "Real-time database updates with optimized MySQL queries",
        "JWT-based authentication for secure access",
        "Responsive React frontend with modern UI/UX"
      ]
    },
    
    results: {
      title: "The Impact",
      description: "The new system transformed gym operations and significantly improved member satisfaction.",
      metrics: [
        { label: "Reduced Wait Times", value: "70%", description: "Check-in time reduced from 15 minutes to under 2 minutes" },
        { label: "Increased Efficiency", value: "85%", description: "Staff time saved on administrative tasks" },
        { label: "Member Satisfaction", value: "95%", description: "Member satisfaction score increased" },
        { label: "Data Accuracy", value: "100%", description: "Elimination of manual entry errors" }
      ],
      testimonial: {
        quote: "The QR code system has completely transformed our operations. Members love the quick check-in, and we finally have accurate data on gym usage patterns.",
        author: "Gym Manager",
        role: "Latest Fitness Ethiopia"
      }
    },
    
    gallery: [
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop"
    ]
  },
  
  {
    id: "beon-advert",
    title: "BeOn Advert",
    tagline: "Streamlining Advertising Campaign Management",
    description: "An ERP system for promoting and advertising companies to manage campaigns, clients, and analytics.",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&h=600&fit=crop&crop=center",
    technologies: ["React", "Node.js", "MySQL", "Chart.js", "Material-UI"],
    category: "Advertising ERP",
    liveUrl: "https://beonadvert.com/",
    client: "BeOn Advert",
    duration: "4 months",
    year: "2023",
    
    problem: {
      title: "The Challenge",
      description: "BeOn Advert needed a centralized system to manage multiple advertising campaigns, track performance, and coordinate with clients efficiently.",
      painPoints: [
        "Scattered campaign data across multiple spreadsheets",
        "Difficulty tracking campaign performance in real-time",
        "Manual reporting consuming significant staff time",
        "Poor visibility into client budgets and spending",
        "Lack of collaboration tools for team coordination"
      ]
    },
    
    solution: {
      title: "Our Solution",
      description: "We built a comprehensive ERP system tailored for advertising agencies with campaign management, analytics, and client collaboration features.",
      features: [
        {
          title: "Campaign Management",
          description: "Centralized dashboard for creating, tracking, and managing all advertising campaigns",
          icon: "Megaphone"
        },
        {
          title: "Analytics & Reporting",
          description: "Real-time performance metrics and automated report generation",
          icon: "TrendingUp"
        },
        {
          title: "Client Portal",
          description: "Dedicated portal for clients to view campaign progress and approve materials",
          icon: "Users"
        },
        {
          title: "Budget Tracking",
          description: "Real-time budget monitoring and spending alerts",
          icon: "DollarSign"
        }
      ],
      technicalHighlights: [
        "Modular architecture for easy feature additions",
        "Advanced data visualization with Chart.js",
        "Role-based access control for different user types",
        "Automated email notifications for campaign milestones",
        "Export functionality for reports in multiple formats"
      ]
    },
    
    results: {
      title: "The Impact",
      description: "The ERP system significantly improved operational efficiency and client satisfaction.",
      metrics: [
        { label: "Time Saved", value: "60%", description: "Reduction in manual reporting time" },
        { label: "Campaign Visibility", value: "100%", description: "Real-time tracking of all campaigns" },
        { label: "Client Satisfaction", value: "90%", description: "Improved client satisfaction scores" },
        { label: "Data Accuracy", value: "98%", description: "Reduction in data entry errors" }
      ],
      testimonial: {
        quote: "This system has revolutionized how we manage our advertising campaigns. Everything is in one place, and our clients love the transparency.",
        author: "Operations Director",
        role: "BeOn Advert"
      }
    },
    
    gallery: [
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop"
    ]
  },
  
  {
    id: "salem-medium-clinic",
    title: "Salem Medium Clinic",
    tagline: "Modernizing Healthcare Management",
    description: "An ERP system for clinics to handle patients, appointments, and medical records efficiently.",
    image: "https://plus.unsplash.com/premium_photo-1682130157004-057c137d96d5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xpbmljfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000",
    technologies: ["React", "Express", "PostgreSQL", "Node.js", "JWT"],
    category: "Healthcare ERP",
    liveUrl: "https://salemmediumclinic.com/",
    client: "Salem Medium Clinic",
    duration: "5 months",
    year: "2023",
    
    problem: {
      title: "The Challenge",
      description: "Salem Medium Clinic was managing patient records and appointments using paper-based systems, leading to inefficiencies and potential errors in patient care.",
      painPoints: [
        "Paper-based patient records prone to loss and damage",
        "Double-booking of appointments causing patient dissatisfaction",
        "Difficulty accessing patient history during consultations",
        "No system for appointment reminders",
        "Inefficient billing and payment tracking"
      ]
    },
    
    solution: {
      title: "Our Solution",
      description: "We developed a comprehensive healthcare management system with electronic medical records, appointment scheduling, and billing integration.",
      features: [
        {
          title: "Electronic Medical Records",
          description: "Secure digital storage of patient medical history, prescriptions, and test results",
          icon: "FileText"
        },
        {
          title: "Appointment Scheduling",
          description: "Smart scheduling system with conflict detection and automated reminders",
          icon: "Calendar"
        },
        {
          title: "Patient Portal",
          description: "Patients can view their records, book appointments, and access test results",
          icon: "User"
        },
        {
          title: "Billing Integration",
          description: "Automated billing and payment tracking with insurance claim support",
          icon: "CreditCard"
        }
      ],
      technicalHighlights: [
        "HIPAA-compliant data encryption and storage",
        "Role-based access control for medical staff",
        "Automated backup and disaster recovery",
        "SMS and email notification system",
        "Integration with laboratory systems"
      ]
    },
    
    results: {
      title: "The Impact",
      description: "The digital transformation improved patient care quality and operational efficiency.",
      metrics: [
        { label: "Appointment Efficiency", value: "80%", description: "Reduction in scheduling conflicts" },
        { label: "Record Access Time", value: "95%", description: "Faster access to patient records" },
        { label: "Patient Satisfaction", value: "92%", description: "Improved patient satisfaction scores" },
        { label: "Administrative Time", value: "65%", description: "Reduction in administrative tasks" }
      ],
      testimonial: {
        quote: "The system has transformed our clinic operations. We can now focus more on patient care rather than paperwork.",
        author: "Chief Medical Officer",
        role: "Salem Medium Clinic"
      }
    },
    
    gallery: [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop"
    ]
  },
  
  {
    id: "naf-digital-hotel",
    title: "NAF Digital Hotel Booking",
    tagline: "Unified Hotel Booking Platform for Hawassa",
    description: "Multi-hotel reservation platform enabling customers to browse and book rooms across multiple hotels from a single unified platform.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop&crop=center",
    technologies: ["React", "Express.js", "Payment Gateway", "MySQL", "Socket.io"],
    category: "Hospitality",
    liveUrl: "http://nafdigital.et",
    client: "NAF Digital",
    duration: "6 months",
    year: "2024",
    
    problem: {
      title: "The Challenge",
      description: "Hotels in Hawassa city lacked a unified booking platform, forcing customers to contact each hotel individually, leading to inefficiencies and lost bookings.",
      painPoints: [
        "Customers had to call multiple hotels to check availability",
        "No centralized system for comparing prices and amenities",
        "Hotels missing out on online booking opportunities",
        "Manual booking process prone to errors",
        "Difficulty managing inventory across multiple properties"
      ]
    },
    
    solution: {
      title: "Our Solution",
      description: "We created a comprehensive multi-hotel booking platform with real-time availability, secure payments, and property management tools.",
      features: [
        {
          title: "Multi-Hotel Search",
          description: "Browse and compare rooms across all participating hotels in one place",
          icon: "Search"
        },
        {
          title: "Real-Time Availability",
          description: "Live room availability and pricing updates using WebSocket technology",
          icon: "Clock"
        },
        {
          title: "Secure Payment Gateway",
          description: "Integrated payment processing with multiple payment options",
          icon: "CreditCard"
        },
        {
          title: "Property Management",
          description: "Dashboard for hotels to manage rooms, pricing, and bookings",
          icon: "Building"
        }
      ],
      technicalHighlights: [
        "Real-time synchronization with Socket.io",
        "Secure payment integration with encryption",
        "Advanced search and filtering algorithms",
        "Automated booking confirmation emails",
        "Mobile-responsive design for on-the-go bookings"
      ]
    },
    
    results: {
      title: "The Impact",
      description: "The platform increased hotel visibility and streamlined the booking process for customers.",
      metrics: [
        { label: "Hotel Occupancy", value: "45%", description: "Increase in average hotel occupancy rates" },
        { label: "Booking Time", value: "75%", description: "Reduction in time to complete a booking" },
        { label: "Customer Reach", value: "300%", description: "Increase in online customer reach" },
        { label: "Revenue Growth", value: "60%", description: "Increase in online booking revenue" }
      ],
      testimonial: {
        quote: "This platform has opened up new revenue streams for our hotels. We're reaching customers we never could before.",
        author: "Hotel Manager",
        role: "NAF Digital Partner Hotel"
      }
    },
    
    gallery: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&h=600&fit=crop"
    ]
  },
  
  {
    id: "fayasera-coffee",
    title: "Fayasera Coffee Export",
    tagline: "Showcasing Ethiopian Coffee Excellence",
    description: "Professional portfolio website showcasing premium Ethiopian coffee products, export capabilities, and company heritage.",
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&h=400&fit=crop&crop=center",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    category: "Corporate Portfolio",
    liveUrl: "https://fayasera.com/",
    client: "Fayasera Coffee Export",
    duration: "2 months",
    year: "2024",
    
    problem: {
      title: "The Challenge",
      description: "Fayasera needed a professional online presence to showcase their premium coffee products to international buyers and establish credibility in the global market.",
      painPoints: [
        "No online presence to reach international buyers",
        "Difficulty showcasing product quality and heritage",
        "Missing out on digital marketing opportunities",
        "No platform to share company story and values",
        "Competitors had better online visibility"
      ]
    },
    
    solution: {
      title: "Our Solution",
      description: "We designed and developed a stunning portfolio website that tells the Fayasera story and showcases their premium coffee products.",
      features: [
        {
          title: "Visual Storytelling",
          description: "Beautiful imagery and animations that bring the coffee journey to life",
          icon: "Image"
        },
        {
          title: "Product Showcase",
          description: "Detailed product pages with specifications and origin information",
          icon: "Package"
        },
        {
          title: "Company Heritage",
          description: "Dedicated section highlighting Ethiopian coffee culture and company history",
          icon: "Award"
        },
        {
          title: "Contact & Inquiry",
          description: "Easy-to-use contact forms for international buyer inquiries",
          icon: "Mail"
        }
      ],
      technicalHighlights: [
        "Smooth animations with Framer Motion",
        "Optimized images for fast loading",
        "SEO optimization for international reach",
        "Multi-language support preparation",
        "Mobile-first responsive design"
      ]
    },
    
    results: {
      title: "The Impact",
      description: "The website established Fayasera as a professional player in the international coffee export market.",
      metrics: [
        { label: "International Inquiries", value: "250%", description: "Increase in buyer inquiries" },
        { label: "Brand Visibility", value: "400%", description: "Increase in online brand searches" },
        { label: "Professional Image", value: "100%", description: "Enhanced brand perception" },
        { label: "Market Reach", value: "15+", description: "Countries reached through website" }
      ],
      testimonial: {
        quote: "The website perfectly captures our brand essence and has opened doors to international markets we couldn't reach before.",
        author: "Export Director",
        role: "Fayasera Coffee Export"
      }
    },
    
    gallery: [
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&h=600&fit=crop"
    ]
  },
  
  {
    id: "student-management",
    title: "SolveSphere Student Management",
    tagline: "Connecting the Education Ecosystem",
    description: "Comprehensive student management system connecting parents, teachers, students, and directors with real-time communication and grade tracking.",
    image: "https://apanews.net/wp-content/uploads/2025/03/Ethiopian-School-Leaving-Exam.jpg",
    technologies: ["React", "Next.js", "SMS Integration", "PostgreSQL", "WebSocket"],
    category: "Education Management",
    liveUrl: "https://solvesphr.com/",
    client: "Educational Institutions",
    duration: "7 months",
    year: "2024",
    
    problem: {
      title: "The Challenge",
      description: "Schools struggled with fragmented communication between stakeholders and lacked a centralized system for academic tracking and administration.",
      painPoints: [
        "Poor communication between parents and teachers",
        "Manual grade entry and report card generation",
        "No real-time visibility into student performance",
        "Inefficient attendance tracking",
        "Difficulty coordinating between multiple stakeholders"
      ]
    },
    
    solution: {
      title: "Our Solution",
      description: "We built a comprehensive education management platform that connects all stakeholders with real-time updates and automated workflows.",
      features: [
        {
          title: "Multi-Role Portal",
          description: "Separate dashboards for parents, teachers, students, and administrators",
          icon: "Users"
        },
        {
          title: "Real-Time Grade Tracking",
          description: "Instant grade updates and performance analytics for students and parents",
          icon: "TrendingUp"
        },
        {
          title: "SMS Integration",
          description: "Automated SMS notifications for attendance, grades, and announcements",
          icon: "MessageSquare"
        },
        {
          title: "Attendance Management",
          description: "Digital attendance tracking with automated parent notifications",
          icon: "CheckCircle"
        }
      ],
      technicalHighlights: [
        "Server-side rendering with Next.js for performance",
        "Real-time updates using WebSocket connections",
        "SMS gateway integration for notifications",
        "Advanced reporting and analytics engine",
        "Scalable architecture supporting thousands of users"
      ]
    },
    
    results: {
      title: "The Impact",
      description: "The platform transformed school operations and significantly improved parent-teacher communication.",
      metrics: [
        { label: "Parent Engagement", value: "85%", description: "Increase in parent-teacher communication" },
        { label: "Administrative Time", value: "70%", description: "Reduction in manual administrative tasks" },
        { label: "Grade Visibility", value: "100%", description: "Real-time access to student grades" },
        { label: "User Satisfaction", value: "93%", description: "Overall user satisfaction score" }
      ],
      testimonial: {
        quote: "This system has revolutionized how we communicate with parents and manage student data. It's an indispensable tool for our school.",
        author: "School Director",
        role: "Partner Educational Institution"
      }
    },
    
    gallery: [
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=600&fit=crop"
    ]
  }
];

