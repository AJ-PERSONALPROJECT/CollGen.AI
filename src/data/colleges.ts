export interface CourseDetails {
  name: string;
  type: string;
  level: 'UG' | 'PG' | 'Diploma' | 'Ph.D';
  durationYears: number;
}

export interface EligibilityFactors {
  minAge?: number;
  requiredEducation: string;
  acceptedExams: string[];
  stateDomicile?: string;
}

export interface College {
  id: string;
  name: string;
  location: string;
  state: string;
  tier: string;
  fees: string;
  feesNum: number;
  academics: string[];
  coursesInfo: CourseDetails[];
  placements: string;
  link: string;
  laboratories: string[];
  facultyDetails: string;
  curriculumInfo: string;
  brochureLink: string;
  exams: string[];
  eligibility: string;
  eligibilityFactors: EligibilityFactors;
}

export const collegesDatabase: College[] = [
  {
    "id": "1",
    "name": "Indian Institute of Technology (IIT) Bombay",
    "location": "Mumbai",
    "state": "Maharashtra",
    "tier": "Tier 1",
    "fees": "₹2,20,000 / year",
    "academics": [
      "B.Tech CSE",
      "B.Tech Electrical",
      "B.Tech Mechanical",
      "Aerospace"
    ],
    "placements": "Average 20 LPA, Max 1.5 CPA+. Top recruiters: Google, Microsoft, Optiver.",
    "link": "https://www.iitb.ac.in/",
    "laboratories": [
      "Advanced Computing Lab",
      "Robotics & Automation",
      "Material Sciences"
    ],
    "facultyDetails": "600+ highly qualified faculty, mostly PhDs from top global universities.",
    "curriculumInfo": "Rigorous research-driven curriculum with flexible minors and electives.",
    "brochureLink": "https://www.iitb.ac.in/brochure",
    "exams": [
      "JEE Advanced"
    ],
    "eligibility": "75% in 12th Board Exams (PCM) + JEE Advanced Rank",
    "feesNum": 220000,
    "coursesInfo": [
      {
        "name": "B.Tech CSE",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      },
      {
        "name": "B.Tech Electrical",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      },
      {
        "name": "B.Tech Mechanical",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      },
      {
        "name": "Aerospace",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      }
    ],
    "eligibilityFactors": {
      "minAge": 17,
      "requiredEducation": "75% in 12th Board Exams (PCM)",
      "acceptedExams": [
        "JEE Advanced"
      ],
      "stateDomicile": "All India / General"
    }
  },
  {
    "id": "2",
    "name": "Indian Institute of Technology (IIT) Delhi",
    "location": "New Delhi",
    "state": "Delhi",
    "tier": "Tier 1",
    "fees": "₹2,25,000 / year",
    "academics": [
      "B.Tech CSE",
      "B.Tech Mathematics & Computing",
      "Engineering Physics"
    ],
    "placements": "Average 18 LPA, International offers > 1 CPA. Top: HFTs, Meta.",
    "link": "https://home.iitd.ac.in/",
    "laboratories": [
      "Nanoscale Research",
      "AI & ML Center",
      "Biochemical Lab"
    ],
    "facultyDetails": "500+ faculty members with extensive industry and research grants.",
    "curriculumInfo": "Focus on innovation, entrepreneurship and interdisciplinary studies.",
    "brochureLink": "https://home.iitd.ac.in/brochure",
    "exams": [
      "JEE Advanced"
    ],
    "eligibility": "75% in 12th Board Exams (PCM) + JEE Advanced Rank",
    "feesNum": 225000,
    "coursesInfo": [
      {
        "name": "B.Tech CSE",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      },
      {
        "name": "B.Tech Mathematics & Computing",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      },
      {
        "name": "Engineering Physics",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      }
    ],
    "eligibilityFactors": {
      "minAge": 17,
      "requiredEducation": "75% in 12th Board Exams (PCM)",
      "acceptedExams": [
        "JEE Advanced"
      ],
      "stateDomicile": "All India / General"
    }
  },
  {
    "id": "3",
    "name": "Indian Institute of Technology (IIT) Madras",
    "location": "Chennai",
    "state": "Tamil Nadu",
    "tier": "Tier 1",
    "fees": "₹2,10,000 / year",
    "academics": [
      "B.Tech CSE",
      "B.Tech Aerospace",
      "B.Tech Naval Architecture"
    ],
    "placements": "Average 19 LPA. Ranked #1 in NIRF. Core and IT sectors dominant.",
    "link": "https://www.iitm.ac.in/",
    "laboratories": [
      "5G Testbed",
      "Data Science CoE",
      "Combustion R&D"
    ],
    "facultyDetails": "Over 600 faculty. Highly active in national research projects.",
    "curriculumInfo": "Semester-wise credit system with options for B.S. in Data Science.",
    "brochureLink": "https://www.iitm.ac.in/brochure",
    "exams": [
      "JEE Advanced"
    ],
    "eligibility": "75% in 12th Board Exams (PCM) + JEE Advanced Rank",
    "feesNum": 210000,
    "coursesInfo": [
      {
        "name": "B.Tech CSE",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      },
      {
        "name": "B.Tech Aerospace",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      },
      {
        "name": "B.Tech Naval Architecture",
        "type": "Architecture",
        "level": "UG",
        "durationYears": 5
      }
    ],
    "eligibilityFactors": {
      "minAge": 17,
      "requiredEducation": "75% in 12th Board Exams (PCM)",
      "acceptedExams": [
        "JEE Advanced"
      ],
      "stateDomicile": "All India / General"
    }
  },
  {
    "id": "4",
    "name": "National Institute of Technology (NIT) Trichy",
    "location": "Tiruchirappalli",
    "state": "Tamil Nadu",
    "tier": "Tier 1",
    "fees": "₹1,50,000 / year",
    "academics": [
      "B.Tech CSE",
      "B.Tech ECE",
      "B.Tech Mechanical",
      "Architecture"
    ],
    "placements": "Average 10 LPA, Max 40 LPA. Top recruiters: Amazon, Oracle, DE Shaw.",
    "link": "https://www.nitt.edu/",
    "laboratories": [
      "Siemens Center of Excellence",
      "VLSI Design Lab",
      "HPC Data Center"
    ],
    "facultyDetails": "300+ regular faculty, excellent student-teacher ratio.",
    "curriculumInfo": "Industry-aligned syllabus updated every 4 years with CBCS.",
    "brochureLink": "https://www.nitt.edu/brochure",
    "exams": [
      "JEE Main"
    ],
    "eligibility": "75% in 12th Board Exams (PCM) + JEE Main Rank",
    "feesNum": 150000,
    "coursesInfo": [
      {
        "name": "B.Tech CSE",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      },
      {
        "name": "B.Tech ECE",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      },
      {
        "name": "B.Tech Mechanical",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      },
      {
        "name": "Architecture",
        "type": "Architecture",
        "level": "UG",
        "durationYears": 5
      }
    ],
    "eligibilityFactors": {
      "minAge": 17,
      "requiredEducation": "75% in 12th Board Exams (PCM)",
      "acceptedExams": [
        "JEE Main"
      ],
      "stateDomicile": "Home State Quota Eligible"
    }
  },
  {
    "id": "5",
    "name": "Vellore Institute of Technology (VIT)",
    "location": "Vellore",
    "state": "Tamil Nadu",
    "tier": "Tier 2",
    "fees": "₹1,98,000 / year",
    "academics": [
      "B.Tech CSE",
      "B.Tech IT",
      "B.Tech ECE",
      "B.Tech Biotech"
    ],
    "placements": "Average 6 LPA, Max 75 LPA. Top recruiters: Microsoft, TCS, Cognizant.",
    "link": "https://vit.ac.in/",
    "laboratories": [
      "IoT Lab",
      "Automotive Research",
      "TBI Incubator Labs"
    ],
    "facultyDetails": "Large faculty base of 1500+, focus on teaching and basic research.",
    "curriculumInfo": "Fully Flexible Credit System (FFCS) allowing custom pacing.",
    "brochureLink": "https://vit.ac.in/brochure",
    "exams": [
      "VITEEE"
    ],
    "eligibility": "60% in 12th Board Exams (PCM/PCB)",
    "feesNum": 198000,
    "coursesInfo": [
      {
        "name": "B.Tech CSE",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      },
      {
        "name": "B.Tech IT",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      },
      {
        "name": "B.Tech ECE",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      },
      {
        "name": "B.Tech Biotech",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      }
    ],
    "eligibilityFactors": {
      "minAge": 17,
      "requiredEducation": "60% in 12th Board Exams (PCM/PCB)",
      "acceptedExams": [
        "VITEEE"
      ],
      "stateDomicile": "All India / General"
    }
  },
  {
    "id": "6",
    "name": "Delhi Technological University (DTU)",
    "location": "New Delhi",
    "state": "Delhi",
    "tier": "Tier 1",
    "fees": "₹1,90,000 / year",
    "academics": [
      "B.Tech CSE",
      "B.Tech IT",
      "B.Tech Software",
      "B.Tech Mechanical"
    ],
    "placements": "Average 15 LPA, Max 1.2 CPA. Top recruiters: Google, Microsoft, Adobe.",
    "link": "http://dtu.ac.in/",
    "laboratories": [
      "UAS/Drone Lab",
      "Software Engineering Lab",
      "Green Energy Center"
    ],
    "facultyDetails": "Eminent professors with strong D.U. legacy background.",
    "curriculumInfo": "Strong emphasis on software engineering and practical assignments.",
    "brochureLink": "http://dtu.ac.in/brochure",
    "exams": [
      "JEE Main",
      "JAC Delhi"
    ],
    "eligibility": "60% in 12th Board Exams (PCM) + JEE Main Rank",
    "feesNum": 190000,
    "coursesInfo": [
      {
        "name": "B.Tech CSE",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      },
      {
        "name": "B.Tech IT",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      },
      {
        "name": "B.Tech Software",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      },
      {
        "name": "B.Tech Mechanical",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      }
    ],
    "eligibilityFactors": {
      "minAge": 17,
      "requiredEducation": "60% in 12th Board Exams (PCM)",
      "acceptedExams": [
        "JEE Main",
        "JAC Delhi"
      ],
      "stateDomicile": "All India / General"
    }
  },
  {
    "id": "7",
    "name": "Birla Institute of Technology and Science (BITS)",
    "location": "Pilani",
    "state": "Rajasthan",
    "tier": "Tier 1",
    "fees": "₹5,00,000 / year",
    "academics": [
      "B.E. Computer Science",
      "B.E. Electrical",
      "B.E. Mechanical",
      "B.E. Chemical"
    ],
    "placements": "Average 21 LPA, Max 60 LPA+. Top recruiters: Amazon, Microsoft, DE Shaw, Uber.",
    "link": "https://www.bits-pilani.ac.in/",
    "laboratories": [
      "Cyber-Physical Systems Lab",
      "Micro-Machining Center",
      "Pharmacy Labs"
    ],
    "facultyDetails": "Zero-attendance policy driven by highly engaging PhD professors.",
    "curriculumInfo": "Practice School (PS) programs for extensive industry exposure.",
    "brochureLink": "https://www.bits-pilani.ac.in/brochure",
    "exams": [
      "BITSAT"
    ],
    "eligibility": "75% overall in 12th Board Exams, 60% in each PCM subject",
    "feesNum": 500000,
    "coursesInfo": [
      {
        "name": "B.E. Computer Science",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      },
      {
        "name": "B.E. Electrical",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      },
      {
        "name": "B.E. Mechanical",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      },
      {
        "name": "B.E. Chemical",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      }
    ],
    "eligibilityFactors": {
      "minAge": 17,
      "requiredEducation": "75% overall in 12th Board Exams, 60% in each PCM subject",
      "acceptedExams": [
        "BITSAT"
      ],
      "stateDomicile": "All India / General"
    }
  },
  {
    "id": "8",
    "name": "Jadavpur University",
    "location": "Kolkata",
    "state": "West Bengal",
    "tier": "Tier 1",
    "fees": "₹10,000 / year",
    "academics": [
      "B.Tech CSE",
      "B.Tech Electronics",
      "Production Engg"
    ],
    "placements": "Average 12 LPA, high ROI. Top recruiters: TI, Amazon, Samsung.",
    "link": "http://www.jaduniv.edu.in/",
    "laboratories": [
      "High Voltage Lab",
      "Artificial Intelligence Center",
      "Signal Processing"
    ],
    "facultyDetails": "Renowned globally for research output in science and engineering.",
    "curriculumInfo": "Traditional rigour combined with heavy research focus.",
    "brochureLink": "http://www.jaduniv.edu.in/brochure",
    "exams": [
      "WBJEE"
    ],
    "eligibility": "60% in 12th Board Exams (PCM) + WBJEE Rank",
    "feesNum": 10000,
    "coursesInfo": [
      {
        "name": "B.Tech CSE",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      },
      {
        "name": "B.Tech Electronics",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      },
      {
        "name": "Production Engg",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      }
    ],
    "eligibilityFactors": {
      "minAge": 17,
      "requiredEducation": "60% in 12th Board Exams (PCM)",
      "acceptedExams": [
        "WBJEE"
      ],
      "stateDomicile": "All India / General"
    }
  },
  {
    "id": "9",
    "name": "Indian Institute of Technology (IIT) Kanpur",
    "location": "Kanpur",
    "state": "Uttar Pradesh",
    "tier": "Tier 1",
    "fees": "₹2,15,000 / year",
    "academics": [
      "B.Tech CSE",
      "B.Tech Aerospace",
      "B.Tech Materials Science"
    ],
    "placements": "Average 19 LPA, famous for core and finance placements.",
    "link": "https://www.iitk.ac.in/",
    "laboratories": [
      "Flight Lab (Airstrip)",
      "National Wind Tunnel Facility",
      "SAML"
    ],
    "facultyDetails": "Pioneers of computer science education in India. 400+ PhD faculty.",
    "curriculumInfo": "Extremely rigorous. Core courses emphasize foundational science.",
    "brochureLink": "https://www.iitk.ac.in/brochure",
    "exams": [
      "JEE Advanced"
    ],
    "eligibility": "75% in 12th Board Exams (PCM) + JEE Advanced Rank",
    "feesNum": 215000,
    "coursesInfo": [
      {
        "name": "B.Tech CSE",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      },
      {
        "name": "B.Tech Aerospace",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      },
      {
        "name": "B.Tech Materials Science",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      }
    ],
    "eligibilityFactors": {
      "minAge": 17,
      "requiredEducation": "75% in 12th Board Exams (PCM)",
      "acceptedExams": [
        "JEE Advanced"
      ],
      "stateDomicile": "All India / General"
    }
  },
  {
    "id": "10",
    "name": "Indian Institute of Technology (IIT) Kharagpur",
    "location": "Kharagpur",
    "state": "West Bengal",
    "tier": "Tier 1",
    "fees": "₹2,18,000 / year",
    "academics": [
      "B.Tech CSE",
      "B.Tech Architecture",
      "B.Tech Ocean Engg"
    ],
    "placements": "Average 18 LPA, extensive alumni network in MNCs.",
    "link": "http://www.iitkgp.ac.in/",
    "laboratories": [
      "G.S. Sanyal School of Telecom",
      "Cryogenic Engg Centre",
      "R.G.S.O.I.P"
    ],
    "facultyDetails": "Oldest IIT with 700+ diverse faculty members.",
    "curriculumInfo": "Vast array of electives, dual degree, and micro-specializations.",
    "brochureLink": "http://www.iitkgp.ac.in/brochure",
    "exams": [
      "JEE Advanced"
    ],
    "eligibility": "75% in 12th Board Exams (PCM) + JEE Advanced Rank",
    "feesNum": 218000,
    "coursesInfo": [
      {
        "name": "B.Tech CSE",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      },
      {
        "name": "B.Tech Architecture",
        "type": "Architecture",
        "level": "UG",
        "durationYears": 5
      },
      {
        "name": "B.Tech Ocean Engg",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      }
    ],
    "eligibilityFactors": {
      "minAge": 17,
      "requiredEducation": "75% in 12th Board Exams (PCM)",
      "acceptedExams": [
        "JEE Advanced"
      ],
      "stateDomicile": "All India / General"
    }
  },
  {
    "id": "11",
    "name": "International Institute of Information Technology (IIIT) Hyderabad",
    "location": "Hyderabad",
    "state": "Telangana",
    "tier": "Tier 1",
    "fees": "₹3,00,000 / year",
    "academics": [
      "B.Tech CSE",
      "B.Tech ECE",
      "Dual Degree Research"
    ],
    "placements": "Average 30 LPA in CSE. Top recruiters: Apple, Google, Rubrik.",
    "link": "https://www.iiit.ac.in/",
    "laboratories": [
      "Kohli Center for Intelligent Systems",
      "CVIT",
      "Language Technologies"
    ],
    "facultyDetails": "Industry-leading researchers in AI, NLP, and Computer Vision.",
    "curriculumInfo": "CS-heavy curriculum from semester 1. Intensive research focus.",
    "brochureLink": "https://www.iiit.ac.in/brochure",
    "exams": [
      "JEE Main",
      "UGEE",
      "Direct Admissions for Students Abroad (DASA)"
    ],
    "eligibility": "60% in 12th Board Exams + Relevant Entrance Exam Score",
    "feesNum": 300000,
    "coursesInfo": [
      {
        "name": "B.Tech CSE",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      },
      {
        "name": "B.Tech ECE",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      },
      {
        "name": "Dual Degree Research",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      }
    ],
    "eligibilityFactors": {
      "minAge": 17,
      "requiredEducation": "60% in 12th Board Exams",
      "acceptedExams": [
        "JEE Main",
        "UGEE",
        "Direct Admissions for Students Abroad (DASA)"
      ],
      "stateDomicile": "All India / General"
    }
  },
  {
    "id": "12",
    "name": "National Institute of Technology (NIT) Surathkal",
    "location": "Mangaluru",
    "state": "Karnataka",
    "tier": "Tier 1",
    "fees": "₹1,40,000 / year",
    "academics": [
      "B.Tech CSE",
      "B.Tech IT",
      "B.Tech Chemical"
    ],
    "placements": "Average 11 LPA. Great IT and core placements.",
    "link": "https://www.nitk.ac.in/",
    "laboratories": [
      "Virtual Reality Lab",
      "Marine Structures Center",
      "Smart Grid Lab"
    ],
    "facultyDetails": "Experienced faculty with deep industry collaborations in Bangalore tech ecosystem.",
    "curriculumInfo": "Balanced academics with coastal environment project works.",
    "brochureLink": "https://www.nitk.ac.in/brochure",
    "exams": [
      "JEE Main"
    ],
    "eligibility": "75% in 12th Board Exams (PCM) + JEE Main Rank",
    "feesNum": 140000,
    "coursesInfo": [
      {
        "name": "B.Tech CSE",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      },
      {
        "name": "B.Tech IT",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      },
      {
        "name": "B.Tech Chemical",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      }
    ],
    "eligibilityFactors": {
      "minAge": 17,
      "requiredEducation": "75% in 12th Board Exams (PCM)",
      "acceptedExams": [
        "JEE Main"
      ],
      "stateDomicile": "Home State Quota Eligible"
    }
  },
  {
    "id": "13",
    "name": "RV College of Engineering (RVCE)",
    "location": "Bengaluru",
    "state": "Karnataka",
    "tier": "Tier 2",
    "fees": "₹2,50,000 / year (varies by quota)",
    "academics": [
      "B.Tech CSE",
      "B.Tech ISE",
      "B.Tech Aerospace"
    ],
    "placements": "Average 9 LPA, Max 50+ LPA. Top recruiters: Cisco, Amazon, Atlassian.",
    "link": "https://www.rvce.edu.in/",
    "laboratories": [
      "CISCO Center of Excellence",
      "Nvidia AI Lab",
      "Bosch Rexroth Center"
    ],
    "facultyDetails": "Strong ties with Bengaluru IT and automotive industries.",
    "curriculumInfo": "Autonomous VTU curriculum, updated rapidly for tech trends.",
    "brochureLink": "https://www.rvce.edu.in/brochure",
    "exams": [
      "KCET",
      "COMEDK"
    ],
    "eligibility": "45% in 12th Board Exams (PCM) + Entrance Exam Rank",
    "feesNum": 250000,
    "coursesInfo": [
      {
        "name": "B.Tech CSE",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      },
      {
        "name": "B.Tech ISE",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      },
      {
        "name": "B.Tech Aerospace",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      }
    ],
    "eligibilityFactors": {
      "minAge": 17,
      "requiredEducation": "45% in 12th Board Exams (PCM)",
      "acceptedExams": [
        "KCET",
        "COMEDK"
      ],
      "stateDomicile": "All India / General"
    }
  },
  {
    "id": "14",
    "name": "College of Engineering Pune (COEP)",
    "location": "Pune",
    "state": "Maharashtra",
    "tier": "Tier 1",
    "fees": "₹90,000 / year",
    "academics": [
      "B.Tech CSE",
      "B.Tech Production",
      "B.Tech Instrumentation"
    ],
    "placements": "Average 8 LPA, Max 40 LPA. Top recruiters: Tata Motors, Bajaj, DE Shaw.",
    "link": "https://www.coep.org.in/",
    "laboratories": [
      "FabLab",
      "BHAU Institute (Incubator)",
      "Mechatronics R&D"
    ],
    "facultyDetails": "Legacy faculty blending classic engineering with modern tech.",
    "curriculumInfo": "Autonomous institute. Strong practical and club-based learning.",
    "brochureLink": "https://www.coep.org.in/brochure",
    "exams": [
      "MHT CET",
      "JEE Main"
    ],
    "eligibility": "50% in 12th Board Exams (PCM) + Entrance Exam Rank",
    "feesNum": 90000,
    "coursesInfo": [
      {
        "name": "B.Tech CSE",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      },
      {
        "name": "B.Tech Production",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      },
      {
        "name": "B.Tech Instrumentation",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      }
    ],
    "eligibilityFactors": {
      "minAge": 17,
      "requiredEducation": "50% in 12th Board Exams (PCM)",
      "acceptedExams": [
        "MHT CET",
        "JEE Main"
      ],
      "stateDomicile": "All India / General"
    }
  },
  {
    "id": "15",
    "name": "KV SubbaReddy Engineering College",
    "location": "Kurnool",
    "state": "Andhra Pradesh",
    "tier": "Tier 3",
    "fees": "₹50,000 / year",
    "academics": [
      "B.Tech CSE",
      "B.Tech ECE",
      "B.Tech EEE",
      "B.Tech Civil",
      "B.Tech Mech"
    ],
    "placements": "Average 4 LPA, Max 12 LPA. Top recruiters: TCS, Infosys, Wipro.",
    "link": "https://www.kvsrec.edu.in/",
    "laboratories": [
      "Computer Center",
      "VLSI System Design Lab",
      "Fluid Mechanics Lab",
      "IoT Workshop"
    ],
    "facultyDetails": "150+ dedicated faculty members with 20+ PhDs leading research departments.",
    "curriculumInfo": "JNTU affiliated curriculum focusing on holistic engineering development.",
    "brochureLink": "https://www.kvsrec.edu.in/brochure",
    "exams": [
      "AP EAMCET"
    ],
    "eligibility": "45% in 12th Board Exams (PCM) + AP EAMCET Rank",
    "feesNum": 50000,
    "coursesInfo": [
      {
        "name": "B.Tech CSE",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      },
      {
        "name": "B.Tech ECE",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      },
      {
        "name": "B.Tech EEE",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      },
      {
        "name": "B.Tech Civil",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      },
      {
        "name": "B.Tech Mech",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      }
    ],
    "eligibilityFactors": {
      "minAge": 17,
      "requiredEducation": "45% in 12th Board Exams (PCM)",
      "acceptedExams": [
        "AP EAMCET"
      ],
      "stateDomicile": "Andhra Pradesh Domicile Preferred"
    }
  },
  {
    "name": "Indian Institute of Technology (IIT) Roorkee",
    "location": "Roorkee",
    "state": "Uttarakhand",
    "tier": "Tier 1",
    "fees": "₹2,20,000 / year",
    "feesNum": 220000,
    "academics": [
      "B.Tech CSE",
      "B.Tech Civil",
      "B.Tech Electrical"
    ],
    "placements": "Average 18 LPA, Highest 1.3 CPA. Top recruiters: Microsoft, Google, Goldman Sachs.",
    "link": "https://www.iitr.ac.in/",
    "laboratories": [
      "Earthquake Engineering Lab",
      "Hydrology Center",
      "Tinkering Lab"
    ],
    "facultyDetails": "500+ faculty, renowned for civil and electrical research.",
    "curriculumInfo": "Interdisciplinary programs, strong focus on infrastructure and technology.",
    "brochureLink": "https://www.iitr.ac.in/brochure",
    "exams": [
      "JEE Advanced"
    ],
    "eligibility": "75% in 12th Board Exams (PCM) + JEE Advanced Rank",
    "eligibilityFactors": {
      "minAge": 17,
      "requiredEducation": "12th Pass",
      "acceptedExams": [
        "JEE Advanced"
      ],
      "stateDomicile": "All India / General"
    },
    "id": "115",
    "coursesInfo": [
      {
        "name": "B.Tech CSE",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      },
      {
        "name": "B.Tech Civil",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      },
      {
        "name": "B.Tech Electrical",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      }
    ]
  },
  {
    "name": "Indian Institute of Technology (IIT) Guwahati",
    "location": "Guwahati",
    "state": "Assam",
    "tier": "Tier 1",
    "fees": "₹2,15,000 / year",
    "feesNum": 215000,
    "academics": [
      "B.Tech CSE",
      "B.Tech Design",
      "B.Tech Mathematics & Computing"
    ],
    "placements": "Average 20 LPA, Max 1.2 CPA. Top recruiters: Amazon, Meta, Oracle.",
    "link": "https://www.iitg.ac.in/",
    "laboratories": [
      "Center for Nanotechnology",
      "AI Lab",
      "Design Studio"
    ],
    "facultyDetails": "400+ highly qualified faculty, beautiful campus with focus on design and tech.",
    "curriculumInfo": "Pioneers in B.Des program alongside core B.Tech.",
    "brochureLink": "https://www.iitg.ac.in/brochure",
    "exams": [
      "JEE Advanced",
      "UCEED"
    ],
    "eligibility": "75% in 12th Board Exams (PCM) + JEE Advanced/UCEED Rank",
    "eligibilityFactors": {
      "minAge": 17,
      "requiredEducation": "12th Pass",
      "acceptedExams": [
        "JEE Advanced",
        "UCEED"
      ],
      "stateDomicile": "All India / General"
    },
    "id": "116",
    "coursesInfo": [
      {
        "name": "B.Tech CSE",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      },
      {
        "name": "B.Tech Design",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      },
      {
        "name": "B.Tech Mathematics & Computing",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      }
    ]
  },
  {
    "name": "National Institute of Technology (NIT) Warangal",
    "location": "Warangal",
    "state": "Telangana",
    "tier": "Tier 1",
    "fees": "₹1,45,000 / year",
    "feesNum": 145000,
    "academics": [
      "B.Tech CSE",
      "B.Tech ECE",
      "B.Tech Civil"
    ],
    "placements": "Average 16 LPA, Highest 88 LPA. Top recruiters: Adobe, Amazon, Qualcomm.",
    "link": "https://www.nitw.ac.in/",
    "laboratories": [
      "Center of Excellence in AI",
      "Heavy Structures Lab"
    ],
    "facultyDetails": "250+ permanent faculty, highly experienced in core domains.",
    "curriculumInfo": "Offers minor programs in upcoming tech fields.",
    "brochureLink": "https://www.nitw.ac.in/brochure",
    "exams": [
      "JEE Main"
    ],
    "eligibility": "75% in 12th Board Exams (PCM) + JEE Main Rank",
    "eligibilityFactors": {
      "minAge": 17,
      "requiredEducation": "12th Pass",
      "acceptedExams": [
        "JEE Main"
      ],
      "stateDomicile": "Home State Quota Eligible"
    },
    "id": "117",
    "coursesInfo": [
      {
        "name": "B.Tech CSE",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      },
      {
        "name": "B.Tech ECE",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      },
      {
        "name": "B.Tech Civil",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      }
    ]
  },
  {
    "name": "National Institute of Technology (NIT) Rourkela",
    "location": "Rourkela",
    "state": "Odisha",
    "tier": "Tier 1",
    "fees": "₹1,50,000 / year",
    "feesNum": 150000,
    "academics": [
      "B.Tech CSE",
      "B.Tech Biomedical",
      "B.Tech Ceramic Engineering"
    ],
    "placements": "Average 13 LPA, Max 50 LPA. Core and IT both dominant.",
    "link": "https://www.nitrkl.ac.in/",
    "laboratories": [
      "Bio-Medical Engg Lab",
      "Ceramic Research Center",
      "Cryogenics"
    ],
    "facultyDetails": "350+ faculty members with diverse research areas.",
    "curriculumInfo": "Very diverse engineering branches available including Ceramic, Food Process.",
    "brochureLink": "https://www.nitrkl.ac.in/brochure",
    "exams": [
      "JEE Main"
    ],
    "eligibility": "75% in 12th Board Exams (PCM) + JEE Main Rank",
    "eligibilityFactors": {
      "minAge": 17,
      "requiredEducation": "12th Pass",
      "acceptedExams": [
        "JEE Main"
      ],
      "stateDomicile": "Home State Quota Eligible"
    },
    "id": "118",
    "coursesInfo": [
      {
        "name": "B.Tech CSE",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      },
      {
        "name": "B.Tech Biomedical",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      },
      {
        "name": "B.Tech Ceramic Engineering",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      }
    ]
  },
  {
    "name": "Birla Institute of Technology (BIT) Mesra",
    "location": "Ranchi",
    "state": "Jharkhand",
    "tier": "Tier 2",
    "fees": "₹3,50,000 / year",
    "feesNum": 350000,
    "academics": [
      "B.Tech CSE",
      "B.Tech IT",
      "B.Tech ECE",
      "B.Arch"
    ],
    "placements": "Average 11 LPA, Max 50 LPA. Top recruiters: Microsoft, Amazon, Jio.",
    "link": "https://www.bitmesra.ac.in/",
    "laboratories": [
      "Space Engg Lab",
      "High Performance Computing",
      "Robotics"
    ],
    "facultyDetails": "Experienced faculty with strong industrial connections.",
    "curriculumInfo": "Choice Based Credit System (CBCS) implemented.",
    "brochureLink": "https://www.bitmesra.ac.in/brochure",
    "exams": [
      "JEE Main"
    ],
    "eligibility": "60% in 12th Board Exams (PCM) + JEE Main Rank",
    "eligibilityFactors": {
      "minAge": 17,
      "requiredEducation": "12th Pass",
      "acceptedExams": [
        "JEE Main"
      ],
      "stateDomicile": "All India / General"
    },
    "id": "119",
    "coursesInfo": [
      {
        "name": "B.Tech CSE",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      },
      {
        "name": "B.Tech IT",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      },
      {
        "name": "B.Tech ECE",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      },
      {
        "name": "B.Arch",
        "type": "Architecture",
        "level": "UG",
        "durationYears": 5
      }
    ]
  },
  {
    "name": "Indian Institute of Space Science and Technology (IIST)",
    "location": "Thiruvananthapuram",
    "state": "Kerala",
    "tier": "Tier 1",
    "fees": "₹1,20,000 / year",
    "feesNum": 120000,
    "academics": [
      "B.Tech Aerospace",
      "B.Tech Avionics",
      "Dual Degree (Astronomy/Earth System)"
    ],
    "placements": "Direct absorption into ISRO for eligible students. Average 10 LPA for others.",
    "link": "https://www.iist.ac.in/",
    "laboratories": [
      "Virtual Reality Lab",
      "Aerodynamics Lab",
      "Propulsion Center"
    ],
    "facultyDetails": "Scientists from ISRO often take guest lectures, top-notch core faculty.",
    "curriculumInfo": "Specialized aerospace and space science curriculum.",
    "brochureLink": "https://www.iist.ac.in/brochure",
    "exams": [
      "JEE Advanced"
    ],
    "eligibility": "75% in 12th Board Exams (PCM) + JEE Advanced Rank",
    "eligibilityFactors": {
      "minAge": 17,
      "requiredEducation": "12th Pass",
      "acceptedExams": [
        "JEE Advanced"
      ],
      "stateDomicile": "All India / General"
    },
    "id": "120",
    "coursesInfo": [
      {
        "name": "B.Tech Aerospace",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      },
      {
        "name": "B.Tech Avionics",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      },
      {
        "name": "Dual Degree (Astronomy/Earth System)",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      }
    ]
  },
  {
    "name": "National Institute of Technology (NIT) Calicut",
    "location": "Kozhikode",
    "state": "Kerala",
    "tier": "Tier 1",
    "fees": "₹1,40,000 / year",
    "feesNum": 140000,
    "academics": [
      "B.Tech CSE",
      "B.Tech ECE",
      "B.Arch",
      "B.Tech Chemical"
    ],
    "placements": "Average 11 LPA, Max 43 LPA. Top recruiters: Cisco, Oracle, Qualcomm.",
    "link": "https://www.nitc.ac.in/",
    "laboratories": [
      "Super Computer facility",
      "IoT Center",
      "VLSI Research"
    ],
    "facultyDetails": "250+ faculty with strong Kerala state tech ecosystem ties.",
    "curriculumInfo": "Robust computer science and architecture programs.",
    "brochureLink": "https://www.nitc.ac.in/brochure",
    "exams": [
      "JEE Main",
      "NATA"
    ],
    "eligibility": "75% in 12th Board Exams (PCM) + JEE Main Rank",
    "eligibilityFactors": {
      "minAge": 17,
      "requiredEducation": "12th Pass",
      "acceptedExams": [
        "JEE Main",
        "NATA"
      ],
      "stateDomicile": "Home State Quota Eligible"
    },
    "id": "121",
    "coursesInfo": [
      {
        "name": "B.Tech CSE",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      },
      {
        "name": "B.Tech ECE",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      },
      {
        "name": "B.Arch",
        "type": "Architecture",
        "level": "UG",
        "durationYears": 5
      },
      {
        "name": "B.Tech Chemical",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      }
    ]
  },
  {
    "name": "Malaviya National Institute of Technology (MNIT)",
    "location": "Jaipur",
    "state": "Rajasthan",
    "tier": "Tier 1",
    "fees": "₹1,35,000 / year",
    "feesNum": 135000,
    "academics": [
      "B.Tech CSE",
      "B.Tech Architecture",
      "B.Tech Metallurgical"
    ],
    "placements": "Average 12 LPA, Max 64 LPA. Top recruiters: Apple, DE Shaw, Amazon.",
    "link": "https://www.mnit.ac.in/",
    "laboratories": [
      "Materials Research Center",
      "Energy Center",
      "Computer Center"
    ],
    "facultyDetails": "Highly reputed faculty, large 300+ faculty base.",
    "curriculumInfo": "Wide range of technical clubs and innovation-driven syllabus.",
    "brochureLink": "https://www.mnit.ac.in/brochure",
    "exams": [
      "JEE Main"
    ],
    "eligibility": "75% in 12th Board Exams (PCM) + JEE Main Rank",
    "eligibilityFactors": {
      "minAge": 17,
      "requiredEducation": "12th Pass",
      "acceptedExams": [
        "JEE Main"
      ],
      "stateDomicile": "Home State Quota Eligible"
    },
    "id": "122",
    "coursesInfo": [
      {
        "name": "B.Tech CSE",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      },
      {
        "name": "B.Tech Architecture",
        "type": "Architecture",
        "level": "UG",
        "durationYears": 5
      },
      {
        "name": "B.Tech Metallurgical",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      }
    ]
  },
  {
    "name": "Netaji Subhas University of Technology (NSUT)",
    "location": "New Delhi",
    "state": "Delhi",
    "tier": "Tier 1",
    "fees": "₹2,10,000 / year",
    "feesNum": 210000,
    "academics": [
      "B.Tech CSE",
      "B.Tech IT(NS)",
      "B.Tech ICE"
    ],
    "placements": "Average 16 LPA, Max 1 CPA+. Top recruiters: Google, Microsoft, Sprinklr.",
    "link": "http://www.nsit.ac.in/",
    "laboratories": [
      "Texas Instruments Lab",
      "Intel AI Lab",
      "CISCO Network Lab"
    ],
    "facultyDetails": "Experienced DU heritage faculty, strong focus on CS and core tech.",
    "curriculumInfo": "Highly updated IT and CS syllabus, AI specific specializations.",
    "brochureLink": "http://www.nsit.ac.in/brochure",
    "exams": [
      "JEE Main"
    ],
    "eligibility": "60% in 12th Board Exams (PCM)",
    "eligibilityFactors": {
      "minAge": 17,
      "requiredEducation": "12th Pass",
      "acceptedExams": [
        "JEE Main",
        "JAC Delhi"
      ],
      "stateDomicile": "Delhi Domicile Preferred"
    },
    "id": "123",
    "coursesInfo": [
      {
        "name": "B.Tech CSE",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      },
      {
        "name": "B.Tech IT(NS)",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      },
      {
        "name": "B.Tech ICE",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      }
    ]
  },
  {
    "name": "Punjab Engineering College (PEC)",
    "location": "Chandigarh",
    "state": "Chandigarh",
    "tier": "Tier 2",
    "fees": "₹1,75,000 / year",
    "feesNum": 175000,
    "academics": [
      "B.Tech CSE",
      "B.Tech Aerospace",
      "B.Tech Data Science"
    ],
    "placements": "Average 13.5 LPA, Max 83 LPA. Top recruiters: Microsoft, Arcesium, AWS.",
    "link": "https://pec.ac.in/",
    "laboratories": [
      "Kalpana Chawla Aerospace Center",
      "Cyber Security Center"
    ],
    "facultyDetails": "Well established, old alumni network, solid faculty in core engineering.",
    "curriculumInfo": "Deemed University status, updated interdisciplinary courses.",
    "brochureLink": "https://pec.ac.in/brochure",
    "exams": [
      "JEE Main"
    ],
    "eligibility": "75% in 12th Board Exams (PCM) + JEE Main Rank",
    "eligibilityFactors": {
      "minAge": 17,
      "requiredEducation": "12th Pass",
      "acceptedExams": [
        "JEE Main",
        "JAC Chandigarh"
      ],
      "stateDomicile": "Chandigarh Quota Eligible"
    },
    "id": "124",
    "coursesInfo": [
      {
        "name": "B.Tech CSE",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      },
      {
        "name": "B.Tech Aerospace",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      },
      {
        "name": "B.Tech Data Science",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      }
    ]
  },
  {
    "name": "Thapar Institute of Engineering and Technology (TIET)",
    "location": "Patiala",
    "state": "Punjab",
    "tier": "Tier 2",
    "fees": "₹4,00,000 / year",
    "feesNum": 400000,
    "academics": [
      "B.Tech CSE",
      "B.Tech Electronics",
      "B.Tech Mechatronics"
    ],
    "placements": "Average 10 LPA, Max 50 LPA. Top recruiters: JP Morgan, Amazon, TCS.",
    "link": "https://www.thapar.edu/",
    "laboratories": [
      "Crompton Greaves Lab",
      "Experiential Learning Center"
    ],
    "facultyDetails": "Strong emphasis on teaching with active project-based learning.",
    "curriculumInfo": "Tie-ups with Trinity College Dublin for curriculum mapping.",
    "brochureLink": "https://www.thapar.edu/brochure",
    "exams": [
      "JEE Main",
      "TIET Test"
    ],
    "eligibility": "60% in 12th Board Exams (PCM) + JEE Main Rank",
    "eligibilityFactors": {
      "minAge": 17,
      "requiredEducation": "12th Pass",
      "acceptedExams": [
        "JEE Main"
      ],
      "stateDomicile": "Punjab Quota Available"
    },
    "id": "125",
    "coursesInfo": [
      {
        "name": "B.Tech CSE",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      },
      {
        "name": "B.Tech Electronics",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      },
      {
        "name": "B.Tech Mechatronics",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      }
    ]
  },
  {
    "name": "Manipal Institute of Technology (MIT)",
    "location": "Manipal",
    "state": "Karnataka",
    "tier": "Tier 2",
    "fees": "₹4,50,000 / year",
    "feesNum": 450000,
    "academics": [
      "B.Tech CSE",
      "B.Tech CCE",
      "B.Tech Fintech",
      "B.Tech Automobile"
    ],
    "placements": "Average 10.5 LPA, Max 54 LPA. Top recruiters: Microsoft, Goldman Sachs.",
    "link": "https://manipal.edu/mit.html",
    "laboratories": [
      "Innovation Center",
      "Automobile Research Hub",
      "Fintech Lab"
    ],
    "facultyDetails": "Huge faculty strength catering to wide array of specialized streams.",
    "curriculumInfo": "Extremely flexible, numerous clubs.",
    "brochureLink": "https://manipal.edu/mit/brochure",
    "exams": [
      "MET"
    ],
    "eligibility": "50% in 12th Board Exams (PCM) + MET Rank",
    "eligibilityFactors": {
      "minAge": 17,
      "requiredEducation": "12th Pass",
      "acceptedExams": [
        "MET"
      ],
      "stateDomicile": "All India / General"
    },
    "id": "126",
    "coursesInfo": [
      {
        "name": "B.Tech CSE",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      },
      {
        "name": "B.Tech CCE",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      },
      {
        "name": "B.Tech Fintech",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      },
      {
        "name": "B.Tech Automobile",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      }
    ]
  },
  {
    "name": "SRM Institute of Science and Technology",
    "location": "Chennai",
    "state": "Tamil Nadu",
    "tier": "Tier 2",
    "fees": "₹3,50,000 / year",
    "feesNum": 350000,
    "academics": [
      "B.Tech CSE",
      "B.Tech AI",
      "B.Tech Aerospace"
    ],
    "placements": "Average 6 LPA, High volume recruitment by TCS, Wipro, Infosys. Max +40 LPA.",
    "link": "https://www.srmist.edu.in/",
    "laboratories": [
      "SRM Innovation Incubation Center",
      "Next Tech Lab"
    ],
    "facultyDetails": "Large scale university with a diverse set of faculty from industry and academia.",
    "curriculumInfo": "Semester abroad programs, wide choices for electives.",
    "brochureLink": "https://www.srmist.edu.in/brochure",
    "exams": [
      "SRMJEEE"
    ],
    "eligibility": "60% in 12th Board Exams (PCM) + SRMJEEE Rank",
    "eligibilityFactors": {
      "minAge": 17,
      "requiredEducation": "12th Pass",
      "acceptedExams": [
        "SRMJEEE"
      ],
      "stateDomicile": "All India / General"
    },
    "id": "127",
    "coursesInfo": [
      {
        "name": "B.Tech CSE",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      },
      {
        "name": "B.Tech AI",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      },
      {
        "name": "B.Tech Aerospace",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      }
    ]
  },
  {
    "name": "Visvesvaraya National Institute of Technology (VNIT)",
    "location": "Nagpur",
    "state": "Maharashtra",
    "tier": "Tier 1",
    "fees": "₹1,40,000 / year",
    "feesNum": 140000,
    "academics": [
      "B.Tech CSE",
      "B.Tech Metallurgy",
      "B.Architecture"
    ],
    "placements": "Average 11 LPA, Max 34 LPA. Top recruiters: JPMC, Morgan Stanley, L&T.",
    "link": "https://vnit.ac.in/",
    "laboratories": [
      "VLSI Design Center",
      "Advanced Materials Lab",
      "CAD/CAM Center"
    ],
    "facultyDetails": "Renowned globally, highly experienced core sector professors.",
    "curriculumInfo": "Robust focus on core engineering alongside IT.",
    "brochureLink": "https://vnit.ac.in/brochure",
    "exams": [
      "JEE Main",
      "NATA"
    ],
    "eligibility": "75% in 12th Board Exams (PCM) + JEE Main Rank",
    "eligibilityFactors": {
      "minAge": 17,
      "requiredEducation": "12th Pass",
      "acceptedExams": [
        "JEE Main",
        "NATA"
      ],
      "stateDomicile": "Home State Quota Eligible"
    },
    "id": "128",
    "coursesInfo": [
      {
        "name": "B.Tech CSE",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      },
      {
        "name": "B.Tech Metallurgy",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      },
      {
        "name": "B.Architecture",
        "type": "Architecture",
        "level": "UG",
        "durationYears": 5
      }
    ]
  },
  {
    "name": "Indian Institute of Science (IISc)",
    "location": "Bengaluru",
    "state": "Karnataka",
    "tier": "Tier 1",
    "fees": "₹50,000 / year",
    "feesNum": 50000,
    "academics": [
      "B.Tech Mathematics & Computing",
      "B.Sc (Research)"
    ],
    "placements": "Average 28 LPA, Max 85 LPA. Top recruiters: Google, HFTs, startups.",
    "link": "https://iisc.ac.in/",
    "laboratories": [
      "Supercomputer Education & Research",
      "Centre for Nano Science",
      "CSA"
    ],
    "facultyDetails": "Best research faculty in India, mostly post-docs from top global univs.",
    "curriculumInfo": "Research-led pedagogy, best for academia and deep tech.",
    "brochureLink": "https://iisc.ac.in/brochure",
    "exams": [
      "JEE Advanced",
      "IISC Test"
    ],
    "eligibility": "Top ranks in JEE Advanced",
    "eligibilityFactors": {
      "minAge": 17,
      "requiredEducation": "12th Pass",
      "acceptedExams": [
        "JEE Advanced"
      ],
      "stateDomicile": "All India / General"
    },
    "id": "129",
    "coursesInfo": [
      {
        "name": "B.Tech Mathematics & Computing",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      },
      {
        "name": "B.Sc (Research)",
        "type": "Science/IT/Design",
        "level": "UG",
        "durationYears": 3
      }
    ]
  },
  {
    "name": "Heritage Institute of Technology",
    "location": "Kolkata",
    "state": "West Bengal",
    "tier": "Tier 3",
    "fees": "₹1,15,000 / year",
    "feesNum": 115000,
    "academics": [
      "B.Tech CSE",
      "B.Tech ECE",
      "B.Tech Biotech"
    ],
    "placements": "Average 5 LPA, Max 45 LPA. Top recruiters: TCS, Infosys, Cognizant.",
    "link": "https://www.heritageit.edu/",
    "laboratories": [
      "Central Computing Lab",
      "Biotech R&D Hub"
    ],
    "facultyDetails": "Blend of academic focus and industry experience from local tech hubs.",
    "curriculumInfo": "Autonomous institute affiliated to MAKAUT, updated CS syllabus.",
    "brochureLink": "https://www.heritageit.edu/brochure",
    "exams": [
      "WBJEE",
      "JEE Main"
    ],
    "eligibility": "45% in 12th Board Exams (PCM) + WBJEE Rank",
    "eligibilityFactors": {
      "minAge": 17,
      "requiredEducation": "12th Pass",
      "acceptedExams": [
        "WBJEE",
        "JEE Main"
      ],
      "stateDomicile": "West Bengal Domicile Preferred"
    },
    "id": "130",
    "coursesInfo": [
      {
        "name": "B.Tech CSE",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      },
      {
        "name": "B.Tech ECE",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      },
      {
        "name": "B.Tech Biotech",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      }
    ]
  },
  {
    "name": "Nirma University",
    "location": "Ahmedabad",
    "state": "Gujarat",
    "tier": "Tier 2",
    "fees": "₹2,20,000 / year",
    "feesNum": 220000,
    "academics": [
      "B.Tech CSE",
      "B.Tech Instrumentation",
      "B.Tech Civil"
    ],
    "placements": "Average 8 LPA, Max 40 LPA. Top recruiters: Reliance, TCS, HDFC tech.",
    "link": "https://nirmauni.ac.in/",
    "laboratories": [
      "AI & Data Science CoE",
      "Robotics Interface Lab"
    ],
    "facultyDetails": "Strong faculty with active grants and industry consultancy.",
    "curriculumInfo": "Comprehensive, multi-disciplinary electives available.",
    "brochureLink": "https://nirmauni.ac.in/brochure",
    "exams": [
      "GUJCET",
      "JEE Main"
    ],
    "eligibility": "50% in 12th Board Exams (PCM)",
    "eligibilityFactors": {
      "minAge": 17,
      "requiredEducation": "12th Pass",
      "acceptedExams": [
        "GUJCET",
        "JEE Main"
      ],
      "stateDomicile": "Gujarat Quota Eligible"
    },
    "id": "131",
    "coursesInfo": [
      {
        "name": "B.Tech CSE",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      },
      {
        "name": "B.Tech Instrumentation",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      },
      {
        "name": "B.Tech Civil",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      }
    ]
  },
  {
    "name": "Dhirubhai Ambani Institute of Information and Communication Technology (DA-IICT)",
    "location": "Gandhinagar",
    "state": "Gujarat",
    "tier": "Tier 1",
    "fees": "₹2,50,000 / year",
    "feesNum": 250000,
    "academics": [
      "B.Tech ICT",
      "B.Tech Honours in ICT with CS"
    ],
    "placements": "Average 16 LPA, Max 50+ LPA. Top recruiters: Google, DE Shaw, Amazon.",
    "link": "https://www.daiict.ac.in/",
    "laboratories": [
      "VLSI Lab",
      "Software Engineering Lab",
      "Sensors Lab"
    ],
    "facultyDetails": "Focused specifically on ICT, top tier faculty.",
    "curriculumInfo": "Unique blend of IT and Communication streams.",
    "brochureLink": "https://www.daiict.ac.in/brochure",
    "exams": [
      "JEE Main",
      "GUJCET"
    ],
    "eligibility": "Mathematics and Physics compulsory in 12th.",
    "eligibilityFactors": {
      "minAge": 17,
      "requiredEducation": "12th Pass",
      "acceptedExams": [
        "JEE Main",
        "GUJCET"
      ],
      "stateDomicile": "Gujarat Quota Eligible"
    },
    "id": "132",
    "coursesInfo": [
      {
        "name": "B.Tech ICT",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      },
      {
        "name": "B.Tech Honours in ICT with CS",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      }
    ]
  },
  {
    "name": "Sardar Vallabhbhai National Institute of Technology (SVNIT)",
    "location": "Surat",
    "state": "Gujarat",
    "tier": "Tier 1",
    "fees": "₹1,45,000 / year",
    "feesNum": 145000,
    "academics": [
      "B.Tech CSE",
      "B.Tech Chemical",
      "B.Tech Mechanical"
    ],
    "placements": "Average 11 LPA, Max 44 LPA. Top recruiters: Reliance, L&T, Microsoft.",
    "link": "https://www.svnit.ac.in/",
    "laboratories": [
      "Thermal Engg Lab",
      "Advanced Computing Facility"
    ],
    "facultyDetails": "Veteran faculty with deep engagement in consultancy.",
    "curriculumInfo": "Flexibility with Honors and Minors tracking.",
    "brochureLink": "https://www.svnit.ac.in/brochure",
    "exams": [
      "JEE Main"
    ],
    "eligibility": "75% in 12th Board Exams (PCM)",
    "eligibilityFactors": {
      "minAge": 17,
      "requiredEducation": "12th Pass",
      "acceptedExams": [
        "JEE Main"
      ],
      "stateDomicile": "Home State Quota Eligible"
    },
    "id": "133",
    "coursesInfo": [
      {
        "name": "B.Tech CSE",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      },
      {
        "name": "B.Tech Chemical",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      },
      {
        "name": "B.Tech Mechanical",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      }
    ]
  },
  {
    "name": "PSG College of Technology",
    "location": "Coimbatore",
    "state": "Tamil Nadu",
    "tier": "Tier 2",
    "fees": "₹1,00,000 / year",
    "feesNum": 100000,
    "academics": [
      "B.Tech CSE",
      "B.Tech Robotics",
      "B.Tech Production"
    ],
    "placements": "Average 8 LPA, Max 38 LPA. Top recruiters: Ford, Caterpillar, TCS, Zoho.",
    "link": "https://www.psgtech.edu/",
    "laboratories": [
      "Festo Cyber Physical Lab",
      "Virtual Reality Centre"
    ],
    "facultyDetails": "Highly reputed in Tamil Nadu, strong connection with heavy industries.",
    "curriculumInfo": "Very strong industry linkage, sandwich courses available offering high practical learning.",
    "brochureLink": "https://www.psgtech.edu/brochure",
    "exams": [
      "TNEA"
    ],
    "eligibility": "50% in 12th Board Exams (PCM)",
    "eligibilityFactors": {
      "minAge": 17,
      "requiredEducation": "12th Pass",
      "acceptedExams": [
        "TNEA"
      ],
      "stateDomicile": "Tamil Nadu Quota Available"
    },
    "id": "134",
    "coursesInfo": [
      {
        "name": "B.Tech CSE",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      },
      {
        "name": "B.Tech Robotics",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      },
      {
        "name": "B.Tech Production",
        "type": "Engineering",
        "level": "UG",
        "durationYears": 4
      }
    ]
  }
];
