import { 
  Project, 
  OpportunityResource, 
  Article, 
  ResearchTopic, 
  EducationMilestone, 
  CollegeAccessResource, 
  JourneyMilestone, 
  PlaybookChapter,
  ShopService,
  BlogPost,
  MenteeStory,
  CollegePrepModule
} from '../types';

export const PERSONAL_INFO = {
  name: "Aldrich Jad S. Magpali",
  shortName: "Aldrich Magpali",
  monogram: "AM",
  classYear: "Williams College '30",
  incomingInstitution: "Williams College",
  majorIntent: "Biology & Psychology (Intended)",
  secondaryInterests: ["Cognitive Science", "Educational Equity", "Front-End Web Development", "Behavioral Research"],
  hometown: "Greenbelt, Maryland (Prince George's County)",
  highSchool: "Eleanor Roosevelt High School (Science & Technology Program)",
  recognition: "QuestBridge National College Match Scholar (Williams College)",
  email: "aldrichmagpali1276@gmail.com",
  phone: "(650) 720-6881",
  location: "Williamstown, MA",
  socials: [
    { name: "LinkedIn", url: "https://linkedin.com/in/aldrich-magpali", username: "aldrich-magpali", icon: "Linkedin" },
    { name: "TikTok", url: "https://tiktok.com/@aldrichmagpali", username: "@aldrichmagpali", icon: "TikTok" },
    { name: "Instagram", url: "https://instagram.com/aldrichmagpali", username: "@aldrichmagpali", icon: "Instagram" },
    { name: "Email", url: "mailto:aldrichmagpali1276@gmail.com", username: "aldrichmagpali1276@gmail.com", icon: "Mail" }
  ],
  tagline: "Opening selective college doors and bridging the divide between ambition and opportunity.",
  bio: "Incoming first-year at Williams College ('30) and QuestBridge Match Scholar from Maryland. After navigating the high-stakes college admissions maze as a low-income first-generation student, I have dedicated my time to mentoring 20+ FGLI applicants, creating Tutorly, and researching cognitive learning tools.",
  missionStatement: "Talent is evenly distributed across every neighborhood, but opportunity and information are not. My mission is to provide 1-on-1 mentorship, admissions playbooks, and cognitive tools that ensure ambitious students can realize their full potential.",
  defaultAvatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
  stats: [
    { label: "College Match", value: "Williams '30", detail: "Full 4-Year Match Scholar" },
    { label: "Mentees Guided", value: "20+ Students", detail: "QuestBridge, Fly-Ins & Aid" },
    { label: "Admissions Focus", value: "Essay Mentorship", detail: "Line-by-Line & Voice Coaching" },
    { label: "Tutorly Reach", value: "2.6K+ Users", detail: "100+ Free Peer Lessons" }
  ]
};

export const CORE_VALUES = [
  {
    id: "equity",
    title: "Radical Educational Access",
    description: "Selective college admissions, financial aid, and high-impact research shouldn't be gated by generational wealth or zip code.",
    icon: "Unlock"
  },
  {
    id: "cognition",
    title: "Empirical Learning Science",
    description: "Applying cognitive psychology, spaced repetition, and active retrieval to improve study habits and academic performance for all students.",
    icon: "Brain"
  },
  {
    id: "building",
    title: "Self-Directed Software Craft",
    description: "Building responsive, accessible digital hubs (like Tutorly) that eliminate information barriers and directly solve student pain points.",
    icon: "Code"
  },
  {
    id: "mentorship",
    title: "Lifting as We Climb",
    description: "Turning personal hurdles into community roadmaps — mentoring rising seniors, demystifying fly-ins, and expanding FGLI applicant cohorts.",
    icon: "Users"
  }
];

export const COLLEGE_ACCESS_MILESTONES: JourneyMilestone[] = [
  {
    id: "origins",
    year: "August 2022 — 2024",
    title: "Growing Up in Greenbelt & The Information Void",
    subtitle: "Navigating High School in Prince George's County, MD",
    narrative: "Growing up in a severely underfunded, majority-minority county in Maryland, selective college admissions felt entirely opaque. Elite private institutions with $85k+ price tags seemed like another universe for working-class families. Without private college counselors or generational knowledge, life-changing opportunities like all-expenses-paid college fly-ins and full-ride QuestBridge scholarships were rarely talked about.",
    impactNote: "Realized early on that talent is everywhere, but institutional guidance is deeply unequal.",
    badge: "The Starting Point"
  },
  {
    id: "hurdles",
    year: "Spring — Fall 2025",
    title: "Navigating the High-Stakes Process in Isolation",
    subtitle: "Overcoming Disconnected Advising & Last-Minute Rewrites",
    narrative: "During the QuestBridge application cycle, my assigned advisor stopped communicating after the summer, leaving me to navigate the complex National College Match completely on my own. I had to decipher CSS Profiles, non-custodial parent waivers, and institution ranking strategies in isolation, famously rewriting my entire personal statement just one day before the national deadline.",
    impactNote: "Experienced firsthand the acute anxiety and confusion first-generation students endure.",
    badge: "Application Trials"
  },
  {
    id: "match",
    year: "December 1, 2025",
    title: "The Moment I Became a QuestBridge Scholar",
    subtitle: "Match Day to Williams College Class of 2030 (Full 4-Year Match)",
    narrative: "On December 1, 2025 at 4:00 PM, with hands shaking, I logged into the QuestBridge portal. When the congratulatory banner appeared confirming my match to Williams College with a full 4-year comprehensive scholarship ($0 loans, covering tuition, room, board, and travel), my parents and I screamed in celebration. It was a transformative milestone that proved what is possible when doors are opened.",
    impactNote: "Secured full four-year financial freedom and committed to opening those same doors for others.",
    badge: "Match Triumph"
  },
  {
    id: "multiplier",
    year: "2025 — Present",
    title: "Paying It Forward & 1-on-1 Mentorship",
    subtitle: "Mentoring 20+ Students, Doubling Applicants & Demystifying Admissions",
    narrative: "As one of only two QuestBridge Scholars from my high school, I realized that talent is everywhere, but institutional guidance is not. When invited by my teacher to speak to science classes about QuestBridge, the number of student applicants nearly doubled that year. Since then, I have mentored 20+ low-income and first-gen students 1-on-1 through essay editing, fly-in applications, and financial aid navigation.",
    impactNote: "Directly guided 20+ students to top fly-ins, national scholarships, and selective college acceptances.",
    badge: "Mentorship Impact"
  }
];

export const COLLEGE_PREP_PROGRAM = {
  title: "The PG County College Access Blueprint (Proposed Plan)",
  tagline: "A strategic proposal to bring structured fly-in pipelines, essay incubators, and financial aid defense to Maryland high schools.",
  mission: "A comprehensive initiative blueprint designed to bridge the college information divide in Prince George's County and underfunded Maryland high schools. Designed as an actionable 4-phase roadmap covering early summer fly-ins, QuestBridge application sprints, CSS Profile defense, and transition support.",
  targetRegion: "Prince George's County, MD & Regional Public High Schools",
  status: "Strategic Proposal & Pilot Roadmap (Planned for 2026–2027)",
  isPlan: true,
  pillars: [
    {
      title: "Planned All-Expenses-Paid Fly-In Pipeline",
      description: "A proposed framework demystifying 50+ senior diversity fly-in programs (Williams WOW, Amherst DIVOH, Bowdoin Explore) during summer windows so students visit top colleges for free before senior year.",
      icon: "Plane"
    },
    {
      title: "Proposed QuestBridge & Common App Sprints",
      description: "Structured weekend workshop outlines designed to teach students how to convey intellectual agency in their personal statements without falling into passive hardship tropes.",
      icon: "FileText"
    },
    {
      title: "CSS Profile & Financial Aid Defense Clinics",
      description: "Step-by-step guidance models for families navigating zero-EFC documentation, non-custodial parent waiver petitions, and evaluating 100% need-met financial aid packages.",
      icon: "DollarSign"
    },
    {
      title: "Peer Mentorship & Undergraduate Matching Network",
      description: "A planned network pairing rising high school seniors with current QuestBridge scholars and undergraduates at top liberal arts colleges for accountability.",
      icon: "Users"
    }
  ],
  modules: [
    {
      id: "mod-1",
      title: "Module 1 (Proposed): Summer Fly-In & Opportunity Sprint",
      timeline: "Target: June — August (Pre-Senior Year)",
      description: "Proposed targeted curriculum for rising seniors to identify, draft, and submit applications for 5+ selective fly-in programs with full travel grants.",
      deliverables: ["Fly-in short-answer drafts", "Counselor transcript request checklists", "Standardized resume templates"],
      targetAudience: "Rising 12th Graders with strong academic curiosity",
      iconName: "Compass"
    },
    {
      id: "mod-2",
      title: "Module 2 (Proposed): QuestBridge Match Accelerator",
      timeline: "Target: August — September",
      description: "Proposed intensive 6-week cohort guiding students through the 800-word biographical essay, topical short answers, teacher recommendations, and strategic 15-school ranking.",
      deliverables: ["3 rounds of line-by-line essay feedback", "Strategic partner college ranking matrix", "Early financial aid submission"],
      targetAudience: "FGLI High School Seniors (< $65k household income)",
      iconName: "Award"
    },
    {
      id: "mod-3",
      title: "Module 3 (Proposed): CSS Profile & Financial Aid Defense",
      timeline: "Target: October — November",
      description: "Proposed hands-on clinics helping parents and students complete FAFSA, CSS Profile, and non-custodial parent waiver petitions without stress.",
      deliverables: ["Completed CSS Profiles", "Third-party waiver verification letters", "Financial aid appeal templates"],
      targetAudience: "Students & Parents navigating institutional aid",
      iconName: "ShieldCheck"
    },
    {
      id: "mod-4",
      title: "Module 4 (Proposed): Decision Day & Transition Roadmap",
      timeline: "Target: December — May",
      description: "Proposed post-match and regular decision strategy guiding students through scholarship interviews and first-year academic readiness.",
      deliverables: ["Regular Decision submission strategy", "Honors & mid-year update templates", "First-year college prep guide"],
      targetAudience: "Admitted & RD Rolling Seniors",
      iconName: "GraduationCap"
    }
  ]
};

export const MENTEE_STORIES: MenteeStory[] = [
  {
    id: "maya-c",
    studentName: "Maya C.",
    schoolContext: "Prince George's County Public Schools",
    startingChallenge: "Unsure how to present her passion for environmental neuroscience without relying on generic extracurricular lists.",
    keyStrategy: "Helped her restructure her biographical narrative around independent field observations and secured full fee waivers for fly-ins.",
    outcomes: ["Accepted to Amherst DIVOH Fly-In (Full Travel Grant)", "QuestBridge National College Match Finalist", "100% Financial Aid Match Recipient"],
    quote: "Aldrich was the only person who took the time to read every single draft of my essays. He showed me that my lived experience was my biggest strength.",
    cohortYear: "Class of 2025"
  },
  {
    id: "jordan-t",
    studentName: "Jordan T.",
    schoolContext: "Eleanor Roosevelt High School",
    startingChallenge: "Struggling with a complicated non-custodial parent financial aid form that threatened his ability to apply early.",
    keyStrategy: "Coached through drafting a third-party non-custodial waiver petition with corroborating statements from school counselors.",
    outcomes: ["CSS Profile Waiver Approved across 8 partner colleges", "Admitted with full need-based grant coverage ($0 loans)"],
    quote: "I almost gave up on QuestBridge because the paperwork seemed impossible. Aldrich walked my family through the exact waiver letters we needed.",
    cohortYear: "Class of 2025"
  },
  {
    id: "kevin-r",
    studentName: "Kevin R.",
    schoolContext: "Maryland Title I High School",
    startingChallenge: "Had a 3.9 GPA in STEM but zero exposure to top liberal arts colleges or fly-in programs.",
    keyStrategy: "Introduced him to the Tutorly directory, curated a balanced 10-school ranking list, and coached his Why-School supplements.",
    outcomes: ["Accepted to Williams Windows on Williams (WOW)", "The Gates Scholarship Semifinalist"],
    quote: "Before talking to Aldrich, I thought state colleges with commuter fees were my only option. He opened my eyes to schools like Williams.",
    cohortYear: "Class of 2026"
  }
];

export const HIGH_SCHOOL_THESIS = {
  title: "The Quantitative Efficacy of Algorithmically Spaced Retrieval Practice in Secondary Biology Education",
  subtitle: "A 5-Chapter Empirical Practicum Thesis at Eleanor Roosevelt High School (Science & Technology Program)",
  author: "Aldrich Jad S. Magpali",
  advisor: "ERHS Science & Technology Research Committee",
  context: "Completed as the culmination of the 4-year Science & Technology specialized magnet curriculum in Greenbelt, MD.",
  abstract: "While spaced repetition algorithms (specifically Anki) are ubiquitous in medical and graduate education, virtually zero empirical literature had evaluated their efficacy among secondary high school freshmen transitioning to rigorous science coursework. This quasi-experimental study evaluated 32 high school biology freshmen across a 6-week curriculum unit, comparing an experimental cohort trained on an Anki Payhip course with a control cohort utilizing traditional classroom study strategies.",
  sampleSize: "32 High School Freshmen (21 Control, 11 Experimental Cohort)",
  timeline: "6-Week Controlled Intervention & Testing Schedule",
  chapters: [
    {
      num: "Chapter I",
      title: "Introduction & Theoretical Framework",
      summary: "Framed the cognitive foundation of Ebbinghaus's Forgetting Curve and Bjork's 'Desirable Difficulties'. Established the critical literature gap in secondary education."
    },
    {
      num: "Chapter II",
      title: "Review of Literature & Spaced Retrieval",
      summary: "Synthesized 25+ peer-reviewed studies on active recall, flashcard spacing algorithms (SM-2), and study habit formation in adolescent learners."
    },
    {
      num: "Chapter III",
      title: "Methodology & Experimental Design",
      summary: "Designed a multi-phase testing protocol: Pre-Test (matter & energy baseline), Quiz 1 (biomolecules), and Cumulative Post-Test (cellular respiration & matter). Engineered an asynchronous Payhip video training course."
    },
    {
      num: "Chapter IV",
      title: "Statistical Findings & Quantitative Analysis",
      summary: "Conducted independent two-sample t-tests, linear regression models of cards reviewed vs. exam performance (r² = 0.618), and ANOVA variance assessments."
    },
    {
      num: "Chapter V",
      title: "Discussion, UX Barriers & Educational Implications",
      summary: "Discussed how software onboarding friction and habit compliance impact edtech efficacy, concluding with actionable recommendations for secondary STEM curriculum design."
    }
  ],
  keyFindings: [
    "Baseline Equivalence: Pre-test scores showed no initial statistical difference between cohorts (Control: 58.90 ± 17.27, Experimental: 63.16 ± 18.38; t(30) = 0.64, p = 0.53).",
    "Correlation with Active Review: Linear regression of total cards reviewed against Quiz 1 scores demonstrated a strong positive coefficient (r² = 0.618, t = 2.2, p = 0.11), and time spent showed r² = 0.732.",
    "The UX & Behavioral Bottleneck: While motivated students scored significantly higher, overall post-test variance underscored that software access without daily teacher scaffolding creates compliance drop-offs in high schoolers.",
    "Defense Outcome: The 45-page thesis was formally approved and commended by the Science & Technology Review Committee."
  ]
};

export const BLOG_POSTS_DATA: BlogPost[] = [
  {
    id: "the-december-1st-moment",
    title: "The December 1st Moment: What Matching to Williams Taught Me",
    subtitle: "A personal reflection on the raw emotion of match day, imposter syndrome, and gratitude.",
    category: "Personal Reflections",
    date: "July 28, 2026",
    readTime: "7 min read",
    author: "Aldrich Jad S. Magpali",
    authorRole: "Williams College '30 • QuestBridge Scholar",
    pinned: true,
    coverImage: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1200",
    summary: "A behind-the-scenes look at the evening of December 1, 2025: the shaking hands, the screen updating, and why matching with a full scholarship is only the beginning of the mission.",
    tags: ["QuestBridge", "Williams College", "Match Day", "Reflections", "First-Gen"],
    content: [
      "At exactly 3:59 PM on December 1st, my laptop screen was frozen on the QuestBridge portal.",
      "When the status updated to 'Congratulations! You have been matched to Williams College,' my entire family burst into tears in our living room.",
      "Here is what that journey felt like, how the 15-school ranking strategy worked, and what I learned about institutional equity."
    ],
    sections: [
      {
        heading: "1. The Agony of the 4:00 PM Refresh",
        paragraphs: [
          "On December 1st, tens of thousands of high-achieving, low-income students across the United States sit by their computers with trembling fingers. For many FGLI families, QuestBridge is not merely an admissions badge—it is the difference between attending a top-tier institution debt-free or foregoing higher education due to family economic realities.",
          "I had spent the preceding two weeks re-reading my essays, obsessing over minor typos, and second-guessing whether an immigrant kid from Prince George's County could truly compete against the nation's best."
        ],
        callout: {
          type: "quote",
          title: "The Match Day Realization",
          text: "When you match, you are not just getting an acceptance letter. You are receiving a binding, 100% comprehensive full four-year financial scholarship with zero student loans.",
          authorOrSource: "Aldrich Magpali, Williams '30"
        },
        image: {
          url: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000",
          caption: "Historic campus quad and library setting at Williams College in Williamstown, Massachusetts.",
          alt: "Williams College historic campus view"
        }
      },
      {
        heading: "2. Demystifying the 15-School Ranking Strategy",
        paragraphs: [
          "One of the biggest strategic decisions in the QuestBridge National College Match is the ranking list. You can rank up to 15 partner schools in order of strict preference. If multiple colleges select you, you match with the highest school on your list.",
          "Many applicants make the mistake of ranking schools based solely on US News rankings rather than analyzing institutional culture, class size, undergraduate focus, and medical school placement rates.",
          "Williams was at the top of my list because of its renowned Oxford-style tutorial system (2 students, 1 professor), undergraduate-only research access, and extraordinary $4B endowment dedicated exclusively to undergrads."
        ],
        keyBulletPoints: [
          "Williams Tutorial System: Intimate weekly debates with leading faculty scholars",
          "All-Grant Financial Aid: Book grants, health insurance, and personal stipends included",
          "The Berkshire Setting: A close-knit, collaborative community without hyper-competitive toxicity",
          "Match Binding Rule: Understanding which partner colleges are binding vs. non-binding"
        ]
      },
      {
        heading: "3. Confronting Imposter Syndrome",
        paragraphs: [
          "In the days following Match Day, a subtle voice whispers: 'Did they make a mistake? Do I truly belong here?'",
          "Navigating that feeling requires recognizing that your lived experiences, your community resilience, and your intellectual grit are precisely what make elite academic institutions richer places to learn."
        ]
      }
    ],
    keyTakeaways: [
      "The QuestBridge Match provides a transformative $350,000+ four-year full-ride scholarship for low-income scholars.",
      "Ranking strategy should prioritize academic fit and undergraduate focus over generic prestige.",
      "Imposter syndrome is common among FGLI students, but lived adversity is an intellectual superpower."
    ],
    interactiveWidget: {
      type: "ranking-calculator",
      title: "QuestBridge Partner College Ranking Simulator",
      description: "Explore the differences between Liberal Arts Colleges (LACs) and Major Research Universities to build an optimized 15-school ranking list.",
      data: {
        categories: [
          { name: "Undergraduate Teaching & Tutorials", lacScore: 98, uniScore: 78, note: "LACs like Williams pair 2 students directly with professors." },
          { name: "Direct Lab Research Access", lacScore: 95, uniScore: 82, note: "No graduate students or postdocs competing for faculty lab positions." },
          { name: "Large Alumni Network Breadth", lacScore: 85, uniScore: 96, note: "Large universities offer broader global brand recognition." },
          { name: "Comprehensive $0 Loan Aid", lacScore: 99, uniScore: 92, note: "Top LAC endowments provide comprehensive grant-only packages." }
        ]
      }
    },
    relatedPostIds: ["avoiding-trauma-dump-essays", "cognitive-science-high-school-thesis"]
  },
  {
    id: "avoiding-trauma-dump-essays",
    title: "Why I Coach Students to Move Beyond 'Trauma Dump' Personal Statements",
    subtitle: "How to balance genuine lived vulnerability with intellectual agency, curiosity, and future vision.",
    category: "College Access Advice",
    date: "June 10, 2026",
    readTime: "6 min read",
    author: "Aldrich Jad S. Magpali",
    authorRole: "Williams College '30 • QuestBridge Scholar",
    pinned: false,
    coverImage: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=1200",
    summary: "Too many first-generation and low-income students are taught that elite admissions requires commodifying their pain. Here is how to craft an authentic story centered on your intellect and agency.",
    tags: ["Essay Craft", "Admissions Advice", "Authenticity", "FGLI", "Common App"],
    content: [
      "One of the most damaging misconceptions in college admissions is that low-income applicants must write a 'sob story' to gain admission.",
      "Admissions officers are looking for dynamic thinkers and community builders, not tragic narratives.",
      "Here is the 3-act agency framework I use with all my mentees to transform trauma narratives into powerful stories of intellectual curiosity."
    ],
    sections: [
      {
        heading: "1. The Trap of Commodifying Pain",
        paragraphs: [
          "Every summer, hundreds of talented high school seniors ask me: 'Aldrich, is my story sad enough to get into an Ivy or top liberal arts college?'",
          "This question breaks my heart. High schoolers have been subtly conditioned to believe that their value to an institution is proportional to how much suffering they can unpack in 650 words.",
          "When an essay spends 500 words dwelling on family financial catastrophe and only 150 words on who the student actually is today, the reader learns everything about their environment and almost nothing about their brain."
        ],
        callout: {
          type: "warning",
          title: "The 70/30 Rule",
          text: "Never spend more than 25-30% of your essay describing the hardship itself. The remaining 70-75% must be dedicated to your response, your intellectual growth, and your agency."
        },
        image: {
          url: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80&w=1000",
          caption: "Deep analytical revision focusing on tone, pacing, and active voice.",
          alt: "Notebook and books for essay writing"
        }
      },
      {
        heading: "2. The 3-Act Agency Framework",
        paragraphs: [
          "To avoid passive suffering, we structure personal statements around three clear phases:",
          "Act I: The Spark / Context (100–150 words) — Establish the friction or challenge with dignity and conciseness, avoiding sensationalism.",
          "Act II: The Intellectual Pivot (300 words) — What curiosity was ignited? What did you build, read, code, organize, or question as a result?",
          "Act III: The Forward Trajectory (200 words) — How does this mindset shape the way you engage with peers in seminars and what questions will you explore in college?"
        ],
        keyBulletPoints: [
          "Replace passive verbs ('I was forced to...') with active initiatives ('I organized...', 'I hypothesized...')",
          "Highlight specific books, experiments, community tools, or creative projects",
          "Ensure your authentic 17-year-old voice shines through without artificial thesaurus stuffing"
        ]
      },
      {
        heading: "3. Real Before-and-After Transformations",
        paragraphs: [
          "Consider a student who worked 20 hours a week at a family grocery store. A passive draft focused on tired feet and missed social events.",
          "After revision, the essay became a fascinating exploration of behavioral microeconomics and food desert supply chains, illustrating how the student noticed customer buying patterns during inflation and initiated a local produce restocking board."
        ]
      }
    ],
    keyTakeaways: [
      "Admissions officers admit scholars, not hardship resumes.",
      "The 70/30 rule guarantees that the spotlight remains on your intellectual agency.",
      "Your lived context provides the backdrop; your curiosity and action are the protagonist."
    ],
    interactiveWidget: {
      type: "agency-analyzer",
      title: "Interactive Essay Angle Diagnostic Tool",
      description: "Paste a draft excerpt or sentence idea to evaluate its balance of context vs. intellectual agency with instant feedback.",
      data: {
        examples: [
          {
            sampleText: "My family lived in a tiny basement and had no money, so every day was an unbearable struggle to survive.",
            feedback: "Heavy passive context (90% hardship). Reframe: What specific problem-solving skill or curiosity did you cultivate in that environment?",
            agencyScore: 25
          },
          {
            sampleText: "When our home Wi-Fi was cut off, I spent afternoons at the public library dissecting open-source biology curricula, eventually founding Tutorly to share flashcards with classmates.",
            feedback: "Exceptional balance! Context is clear in 1 clause, while the rest highlights self-directed intellectual agency.",
            agencyScore: 95
          }
        ]
      }
    },
    relatedPostIds: ["the-december-1st-moment", "cognitive-science-high-school-thesis"]
  },
  {
    id: "cognitive-science-high-school-thesis",
    title: "Cognitive Science in the Classroom: Empirical Findings from My Biology Practicum Thesis",
    subtitle: "What testing spaced retrieval algorithms on 32 high school freshmen taught me about educational technology UX.",
    category: "Research & Cognition",
    date: "May 20, 2026",
    readTime: "8 min read",
    author: "Aldrich Jad S. Magpali",
    authorRole: "Williams College '30 • Science & Technology Researcher",
    pinned: false,
    coverImage: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1200",
    summary: "An overview of my 45-page empirical research thesis at Eleanor Roosevelt High School evaluating Anki spaced retrieval algorithms in secondary STEM education.",
    tags: ["Research", "Cognitive Science", "Thesis", "Spaced Repetition", "Anki"],
    content: [
      "For four years in the Science & Technology magnet program, I investigated how cognitive learning science translates to secondary classrooms.",
      "While spaced repetition software (Anki) is common in medical school, high school students face unique behavioral bottlenecks.",
      "Here are the quantitative findings, linear regressions (r² = 0.618), and UX insights from our 6-week controlled study."
    ],
    sections: [
      {
        heading: "1. The Theoretical Literature Gap",
        paragraphs: [
          "Since Hermann Ebbinghaus formulated the Forgetting Curve in 1885, cognitive psychologists have proven that spaced retrieval practice dramatically outperforms passive re-reading or massed cramming.",
          "However, virtually all existing literature focused on post-graduate medical students or self-selected adult learners. High school freshmen transitioning to rigorous AP/IB biology curricula had never been evaluated under a quasi-experimental protocol."
        ],
        callout: {
          type: "framework",
          title: "The SuperMemo-2 Spaced Algorithm",
          text: "Interval = I(n-1) * EF, where Easiness Factor (EF) adapts based on user recall grade (0–5). As cards are retrieved successfully, review intervals double from 1 day to 3, 7, and 16 days."
        },
        image: {
          url: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&q=80&w=1000",
          caption: "Data visualization of recall intervals and retention decay curves across test cohorts.",
          alt: "Brain and learning research graph"
        }
      },
      {
        heading: "2. Experimental Methodology & Quantitative Findings",
        paragraphs: [
          "We evaluated 32 high school biology freshmen across a 6-week biomolecules and cellular energetics unit. The experimental cohort (n=11) was trained on a custom video course and assigned algorithmic decks, while the control cohort (n=21) utilized traditional study guides.",
          "Pre-test scores confirmed baseline equivalence (t(30) = 0.64, p = 0.53). On Quiz 1, linear regression between total cards reviewed and exam score yielded r² = 0.618 (t = 2.2, p = 0.11), and total active time spent showed r² = 0.732."
        ],
        keyBulletPoints: [
          "Strong positive correlation between daily review compliance and mastery of complex metabolic pathways",
          "Experimental learners demonstrated superior retention on multi-concept synthesis questions",
          "Statistically significant reduction in pre-exam test anxiety reported in post-study surveys"
        ]
      },
      {
        heading: "3. The UX Barrier: Why Software Alone Fails",
        paragraphs: [
          "The most surprising finding was not algorithmic—it was behavioral. Without daily classroom teacher integration, adolescent software compliance dropped by 45% by week 4.",
          "This critical insight inspired the design of Tutorly: educational tools must eliminate onboarding friction and embed social accountability to succeed in public secondary schools."
        ]
      }
    ],
    keyTakeaways: [
      "Spaced retrieval yields massive cognitive gains for secondary biology students when used consistently.",
      "Card review count and time spent strongly correlate with exam performance (r² = 0.618).",
      "Educational software must minimize UX friction and integrate peer loops to prevent compliance drop-off."
    ],
    interactiveWidget: {
      type: "spaced-repetition",
      title: "Interactive Ebbinghaus Forgetting Curve & Interval Simulator",
      description: "Adjust review intervals to observe simulated memory retention decay vs. algorithmically scheduled retrieval sessions.",
      data: {
        intervals: [
          { day: 1, passiveRetention: 50, spacedRetention: 95, label: "Initial Lecture" },
          { day: 3, passiveRetention: 30, spacedRetention: 90, label: "1st Review" },
          { day: 7, passiveRetention: 18, spacedRetention: 88, label: "2nd Review" },
          { day: 21, passiveRetention: 10, spacedRetention: 85, label: "3rd Review" }
        ]
      }
    },
    relatedPostIds: ["avoiding-trauma-dump-essays", "the-december-1st-moment"]
  }
];

export const SHOP_SERVICES_DATA: ShopService[] = [
  {
    id: "personal-statement-review",
    title: "Personal Statement Review & Line Audit",
    category: "Essay Review Service",
    price: "$35",
    turnaroundTime: "48–72 Hours",
    popular: true,
    description: "A comprehensive, line-by-line editorial and macro structural review of your 650-word Common App essay or 800-word QuestBridge biographical statement, including 1 free follow-up review.",
    includes: [
      "Extensive Google Docs margin comments with line-by-line syntax & word choice optimization",
      "Macro narrative evaluation: theme, story arc, pacing, and emotional resonance",
      "Voice coaching to showcase intellectual spark and lived agency without trauma tropes",
      "1 FREE follow-up review on your revised 2nd draft (within 7 days)"
    ],
    deliverables: [
      "Annotated Google Doc with 25+ precise line-level & strategic notes",
      "1-page Narrative Strategy Action Blueprint & Next Steps Checklist",
      "Second-round draft review included"
    ],
    idealFor: "High school seniors finalizing their personal statement for QuestBridge, Common App, or Early Action/Decision.",
    fgliWaiverAvailable: true
  },
  {
    id: "questbridge-essay-exemplar",
    title: "Aldrich's QuestBridge Match Personal Statement & Strategy Breakdown",
    category: "Digital Resource & Exemplar",
    price: "$10",
    turnaroundTime: "Instant Digital Access",
    popular: false,
    description: "The authentic, unedited 800-word QuestBridge biographical essay that matched to Williams College Class of 2030 (full 4-year $350K+ match scholarship), with line-by-line commentary and prompt strategy.",
    includes: [
      "Full, unedited text of Aldrich's winning 800-word QuestBridge biographical statement",
      "Line-by-line self-commentary explaining narrative choices, transitions, and tone",
      "Deconstruction of how lived hardship was balanced with intellectual agency and curiosity",
      "Breakdown of draft iterations: from initial brainstorm to final submission version"
    ],
    deliverables: [
      "Annotated PDF with line-by-line commentary & strategy guide",
      "Personal Statement Ideation & Brainstorming Action Blueprint"
    ],
    idealFor: "QuestBridge and Common App applicants seeking an authentic, successful full-match essay model and strategy breakdown.",
    fgliWaiverAvailable: true
  }
];

export const EDUCATION_DATA: EducationMilestone[] = [
  {
    institution: "Williams College",
    period: "Expected Graduation: June 2030",
    degreeOrRole: "Bachelor of Arts, Intended Biology & Psychology Major",
    location: "Williamstown, Massachusetts",
    status: "Incoming First-Year (Class of 2030)",
    honors: [
      "QuestBridge National College Match Scholar (1 of 14 Matched to Williams)",
      "Full Four-Year Comprehensive Scholarship ($0 Loans)",
      "Summer Science Program Student",
      "The Gates Scholarship Semifinalist"
    ],
    courseworkHighlights: [
      "Psychology & Cognitive Neuroscience",
      "Quantitative Research Methodologies",
      "Cellular & Molecular Biology Foundations",
      "Educational Equity & Behavioral Decision-Making"
    ],
    description: "Entering Williams College to pursue rigorous interdisciplinary research in psychology and biology, focusing on cognitive mechanisms of learning and memory while expanding student access initiatives."
  },
  {
    institution: "Eleanor Roosevelt High School",
    period: "August 2022 — June 2026",
    degreeOrRole: "High School Diploma, Science & Technology Magnet Program",
    location: "Greenbelt, Maryland",
    status: "Top 5% Class Rank • Cumulative 4.0 Unweighted GPA",
    honors: [
      "Science & Technology Program Magnet Distinction",
      "The Gates Scholarship Semifinalist",
      "QuestBridge National College Match Scholar",
      "Research Practicum 5-Chapter Thesis Author",
      "Summer Bridge Program Student Mentor (120+ Freshmen)"
    ],
    courseworkHighlights: [
      "Research Practicum (Independent Experimental Study)",
      "AP Seminar & AP Research (Investigative Methodology)",
      "AP Psychology (Cognitive & Behavioral Frameworks)",
      "AP Biology & Chemistry S/T"
    ],
    description: "Completed the rigorous four-year Science & Technology specialized program, conducting an empirical research practicum thesis on spaced repetition in high school biology and mentoring incoming freshmen."
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "pg-college-prep",
    title: "PG County College Prep & Access Collective",
    subtitle: "Grassroots college admissions pipelines and fly-in accelerators for students in Prince George's County",
    description: "A community-centered educational initiative offering free summer bootcamps, essay incubators, and 1-on-1 QuestBridge mentorship for high schoolers back home in Maryland.",
    longDescription: "After experiencing how isolated first-generation students feel navigating selective admissions in Prince George's County, Aldrich launched this collective to provide structured mentorship, all-expenses-paid fly-in coaching, and financial aid defense. The program has already helped multiple students secure full travel grants to top institutions.",
    category: "mentorship",
    tags: ["College Access", "Maryland", "QuestBridge", "Mentorship", "FGLI Equity"],
    featured: true,
    metrics: [
      { label: "Students Guided", value: "20+ Mentees" },
      { label: "Fly-In Grant Wins", value: "100% Funded" },
      { label: "Cost to Students", value: "100% Free / Waivers" },
      { label: "High School Growth", value: "Doubled QB Applicants" }
    ],
    impactSummary: "Builds a sustainable, generational college pipeline in underfunded Maryland communities.",
    highlights: [
      "Created structured fly-in application schedules ensuring students apply before July deadlines.",
      "Delivered live presentations to high school science classes, doubling QuestBridge applicants.",
      "Provided line-by-line essay feedback emphasizing personal voice and intellectual agency."
    ],
    challenges: [
      "Overcoming deep-seated imposter syndrome among low-income students who feel top colleges are out of reach.",
      "Navigating complex, opaque financial aid documentation like CSS non-custodial waivers."
    ],
    solutions: [
      "Introduced candid, peer-led workshops demonstrating real sample essays and transparent financial aid breakdowns.",
      "Created step-by-step non-custodial waiver petition templates with counselor coordination."
    ],
    techStack: ["Mentorship Frameworks", "Google Workspace", "Admissions Rubrics", "Financial Aid Planning"],
    links: {
      actionLabel: "Explore Program Details",
      interactiveType: "guide"
    },
    iconName: "GraduationCap"
  },
  {
    id: "tutorly",
    title: "Tutorly — Peer-Tutoring Platform & Resource Directory",
    subtitle: "Empowering low-income & FGLI students through free peer instruction and curated opportunities",
    description: "A centralized educational platform founded to support underserved students with 100+ tutor-training lessons, interactive study materials, and a vetted opportunity directory reaching 2,600+ active users.",
    longDescription: "Aldrich founded Tutorly after noticing classmates in underfunded schools lacked accessible academic support outside classroom hours. What began as an online peer-tutoring system for AP Biology quickly expanded into a global resource hub featuring interactive slideshows, practice problem sets, Q&A sessions, and a comprehensive database of fly-in programs and scholarships. Under his leadership, Tutorly personally tutored 35+ students nationwide, with 100% of AP Biology students passing their exams.",
    category: "edtech",
    tags: ["EdTech", "College Access", "Front-End Web", "Peer Tutoring", "FGLI Equity"],
    featured: true,
    metrics: [
      { label: "Active Users", value: "2.6K+ Students" },
      { label: "Lessons Created", value: "100+ Modules" },
      { label: "Tutored Students", value: "35+ Nationwide" },
      { label: "AP Bio Pass Rate", value: "100% Pass" }
    ],
    impactSummary: "Eliminates the educational information gap by providing free, structured academic tutoring and direct access to fully funded college fly-in and scholarship pipelines.",
    highlights: [
      "Engineered a responsive web portal reaching 2.6K+ active users with interactive practice tools and study guides.",
      "Developed 100+ tutor-training curriculum modules to standardize peer-learning quality.",
      "Personally mentored 35+ high school students in biology, fostering confidence in hesitant learners.",
      "Integrated a curated live directory of 50+ all-expenses-paid fly-in programs and merit scholarships."
    ],
    challenges: [
      "Initial engagement barrier: Many low-income students were hesitant to ask questions in large groups.",
      "Resource fragmentation: Vital fly-in and scholarship deadlines were scattered across obscure websites."
    ],
    solutions: [
      "Built anonymous Q&A submission tools and asynchronous micro-lessons to create a zero-pressure learning environment.",
      "Created a centralized, search-indexed opportunity directory with clear eligibility criteria and deadline filters."
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Cloudflare Pages", "Google Analytics"],
    links: {
      actionLabel: "Explore Tutorly Directory",
      interactiveType: "tutorly"
    },
    iconName: "Users"
  },
  {
    id: "anki-research-practicum",
    title: "High School Biology Spaced Repetition Practicum Thesis",
    subtitle: "A 5-chapter empirical study investigating Anki flashcards on 32 high school freshmen in Greenbelt, MD",
    description: "An independent experimental study examining the academic performance impact of Anki flashcard software on 32 high school freshmen in Eleanor Roosevelt High School's Science & Technology program.",
    longDescription: "While previous literature on Anki focused almost exclusively on medical and graduate students, Aldrich identified a critical research gap: no published study had evaluated its effectiveness on high school freshmen transitioning to rigorous science coursework. He designed a quasi-experimental study utilizing a custom Payhip course dashboard, instructional video modules, weekly statistics exports, and statistical analysis (independent t-tests, linear regression, and ANOVA). His 45-page thesis evaluated pre-tests, quizzes, and post-tests, yielding valuable insights into study habit formation in secondary STEM education.",
    category: "research",
    tags: ["Cognitive Science", "Empirical Research", "Anki", "Statistics", "Payhip", "Biology S/T"],
    featured: true,
    metrics: [
      { label: "Participants", value: "32 Freshmen" },
      { label: "Study Duration", value: "6 Weeks" },
      { label: "Statistical Tools", value: "t-tests, Regression, ANOVA" },
      { label: "Thesis Length", value: "45-Page Paper" }
    ],
    impactSummary: "Pioneered empirical investigation into spaced-repetition adoption among secondary school students, uncovering key cognitive and technological factors influencing habit compliance.",
    highlights: [
      "Authored a comprehensive 5-chapter research paper and presented findings at the ERHS Research Practicum Symposium.",
      "Designed a complete Payhip onboarding course with step-by-step video tutorials on Anki deck creation and review heatmaps.",
      "Gathered and analyzed quantitative usage logs (cards reviewed, minutes spent) alongside exam score metrics.",
      "Identified practical challenges in secondary school software adoption that inform future educational technology implementations."
    ],
    challenges: [
      "Technical onboarding friction: Initial cross-platform installation issues and device constraints among freshman participants.",
      "Addon metric resets: The Anki time-statistics plugin reset weekly, requiring careful normalization of cumulative study hours."
    ],
    solutions: [
      "Produced dedicated video tutorials guiding students through installation, deck importing, and card rating workflows.",
      "Developed a robust Google Sheets data collection model using randomized IDs to preserve student confidentiality."
    ],
    techStack: ["Anki Software", "Payhip LMS", "Google Sheets Statistical Modeling", "Python / R Logic", "Quantitative Data Analysis"],
    links: {
      actionLabel: "Read Thesis Excerpt",
      interactiveType: "guide"
    },
    iconName: "Brain"
  }
];

export const TUTORLY_OPPORTUNITIES: OpportunityResource[] = [
  {
    id: "williams-wow",
    title: "Windows on Williams (WOW) Fly-In",
    organization: "Williams College",
    category: "Fly-in Program",
    deadline: "Early July / August",
    award: "100% Fully Funded (Flight, Lodging, Meals)",
    targetAudience: "Rising High School Seniors (FGLI & Diverse Backgrounds)",
    description: "An all-expenses-paid fall fly-in program giving prospective students an immersive taste of academic and residential life at Williams College in the Berkshires.",
    eligibility: ["Rising High School Senior", "Strong Academic Record", "Demonstrated Financial Need / FGLI"],
    link: "https://www.williams.edu/admission-aid/wow/",
    featured: true
  },
  {
    id: "questbridge-ncm",
    title: "QuestBridge National College Match",
    organization: "QuestBridge",
    category: "Scholarship",
    deadline: "Late September",
    award: "Full 4-Year Match Scholarship (Tuition, Room & Board, $0 Loans)",
    targetAudience: "High-achieving low-income high school seniors",
    description: "Connects high-achieving high school seniors with full four-year scholarships to 50+ of the nation's top colleges, including Williams, Amherst, Yale, Stanford, and MIT.",
    eligibility: ["Senior Year", "Typically < $65k annual household income for family of 4", "Top 5-10% of class"],
    link: "https://www.questbridge.org/",
    featured: true
  },
  {
    id: "amherst-divoh",
    title: "Diversity Open House (DIVOH)",
    organization: "Amherst College",
    category: "Fly-in Program",
    deadline: "Mid August",
    award: "100% Fully Funded Travel & Accommodations",
    targetAudience: "High school seniors with focus on educational equity",
    description: "Introduces prospective applicants to Amherst's open curriculum, tight-knit faculty mentorship, and generous no-loan financial aid policies.",
    eligibility: ["High School Senior", "Demonstrated commitment to diverse communities"],
    link: "https://www.amherst.edu/admission/diversity/divoh",
    featured: true
  },
  {
    id: "bowdoin-explore",
    title: "Explore Bowdoin Fly-In Program",
    organization: "Bowdoin College",
    category: "Fly-in Program",
    deadline: "August / September Rounds",
    award: "Fully Funded Roundtrip Flight to Brunswick, Maine",
    targetAudience: "Rising seniors from underrepresented backgrounds",
    description: "Experience Bowdoin's coastal campus, interact with professors, and learn how Bowdoin meets 100% of demonstrated financial need with no loans.",
    eligibility: ["High School Senior", "FGLI / Rural / Underrepresented Students"],
    link: "https://www.bowdoin.edu/admissions/explore-bowdoin/",
    featured: false
  },
  {
    id: "coca-cola-scholars",
    title: "Coca-Cola Scholars Program",
    organization: "Coca-Cola Scholars Foundation",
    category: "Scholarship",
    deadline: "Early October",
    award: "$20,000 Achievement-Based Scholarship",
    targetAudience: "High school seniors with exceptional leadership and service",
    description: "One of the most prestigious merit-based scholarships in the United States, recognizing graduating seniors who lead and serve in their schools and communities.",
    eligibility: ["High School Senior", "US Citizen or Permanent Resident", "Minimum 3.0 GPA"],
    link: "https://www.coca-colascholarsfoundation.org/",
    featured: true
  },
  {
    id: "gates-scholarship",
    title: "The Gates Scholarship",
    organization: "The Bill & Melinda Gates Foundation",
    category: "Scholarship",
    deadline: "Mid September",
    award: "Full Cost of Attendance (Remaining Need Funded)",
    targetAudience: "Pell-eligible minority high school seniors",
    description: "A highly selective scholarship program for outstanding minority high school seniors from low-income households.",
    eligibility: ["Pell-eligible", "Minority heritage", "Minimum 3.3 GPA", "Top 20% of class"],
    link: "https://www.thegatesscholarship.org/",
    featured: false
  }
];

export const ARTICLES_DATA: Article[] = [
  {
    id: "questbridge-playbook",
    title: "Demystifying QuestBridge: How FGLI Students Can Match with Top Colleges",
    subtitle: "A step-by-step breakdown of ranking strategies, financial aid truth, and crafting authentic essays",
    category: "College Access",
    readTime: "8 min read",
    date: "August 2026",
    excerpt: "The QuestBridge National College Match is one of the most transformative programs for high-achieving low-income students, but its mechanics are often misunderstood. Here is everything I learned matching to Williams College.",
    content: [
      "When I first started looking at highly selective colleges like Williams, Amherst, and Swarthmore, the sticker price—over $85,000 per year—felt impossible. Like many first-generation or low-income students from underfunded public high schools, I initially assumed elite private institutions were reserved for families with deep generational wealth. QuestBridge completely turned that perception upside down.",
      "The National College Match offers a binding pathway where finalists can rank up to 15 top colleges. If a college ranks you and accepts your match application, you receive a full four-year Match Scholarship covering tuition, room, board, and fees with $0 in student loans.",
      "The key to a successful QuestBridge application lies in three pillars: 1) Radical Authenticity in your essays—highlighting context, intellectual curiosity, and lived resilience rather than an artificial sob story; 2) Thoughtful Ranking Strategy—ranking schools you would genuinely celebrate attending rather than chasing pure prestige; and 3) Proactive Financial Aid paperwork—completing FAFSA and CSS Profile documents well ahead of deadlines.",
      "If you are a student wondering whether your voice matters in these spaces: it does. Take the time to understand the system, leverage free resources like Tutorly, and remember that your perspective is deeply needed in higher education."
    ],
    keyTakeaways: [
      "Top liberal arts colleges often have the most generous need-based financial aid in the nation.",
      "Match scholarships cover 100% of demonstrated need with zero loans.",
      "Essay strength comes from authentic self-reflection and intellectual agency.",
      "Always verify CSS profile fee waivers and non-custodial parent paperwork early."
    ],
    tags: ["QuestBridge", "Williams College", "Financial Aid", "FGLI Advice"]
  },
  {
    id: "anki-practicum-insights",
    title: "Spaced Repetition in Secondary STEM: Lessons from a 6-Week High School Trial",
    subtitle: "Evaluating Anki flashcards, study habit adherence, and active recall among high school freshmen",
    category: "Psychology & Learning",
    readTime: "7 min read",
    date: "May 2026",
    excerpt: "What happens when you introduce medical school-level flashcard software to 32 high school freshmen? Key findings from a 45-page empirical research practicum.",
    content: [
      "In medical school, Anki and spaced-repetition algorithms are ubiquitous. However, existing cognitive psychology literature had overlooked whether secondary school students—who frequently struggle with the transition from middle school study habits—can benefit similarly from automated spacing.",
      "In my research practicum at Eleanor Roosevelt High School, I tracked 32 Biology S/T freshmen over a 6-week quasi-experimental study. We evaluated pre-test baselines, intermediate quizzes, and cumulative post-tests alongside exported usage metrics (cards reviewed and study minutes).",
      "While initial linear regressions showed strong positive correlations during early units, overall statistical significance was tempered by software onboarding friction and varying student compliance. The investigation revealed that technological tools require structured behavioral scaffolding and intuitive UX to achieve consistent adoption among younger learners.",
      "This study reinforces why educational equity is as much about habit coaching and user-centered design as it is about access to software."
    ],
    keyTakeaways: [
      "Spaced repetition software requires active onboarding scaffolding for secondary students.",
      "Premade decks save preparation time but must align closely with classroom curriculum.",
      "Usage compliance is heavily influenced by software usability and time tracking clarity.",
      "Empirical research provides the necessary foundation for designing better educational tools."
    ],
    tags: ["Anki", "Cognitive Science", "Biology S/T", "Research Practicum"]
  }
];

export const TECHNICAL_SKILLS = [
  {
    category: "College Access & Educational Mentorship",
    icon: "Users",
    skills: ["QuestBridge Match Strategy", "FGLI Admissions Navigation", "Financial Aid & CSS Profile Guidance", "Essay Coaching & Narrative Craft", "Fly-In Program Advisory", "Curriculum Development", "Peer Tutoring & Leadership"]
  },
  {
    category: "Web & Front-End Development",
    icon: "Layout",
    skills: ["HTML5", "CSS3 & Modern Layouts", "JavaScript (ES6+)", "TypeScript", "Tailwind CSS", "React", "Cloudflare Pages", "Responsive UI/UX", "Clean Editorial Design"]
  },
  {
    category: "Research & Academic Inquiry",
    icon: "GraduationCap",
    skills: ["Literature Review Synthesis", "Quasi-Experimental Design", "Methodology & Protocol Design", "Human Subject Data Collection", "Anki Algorithm & Spaced Repetition", "Academic Thesis Defense"]
  },
  {
    category: "Programming & Data Analysis",
    icon: "Terminal",
    skills: ["Python (Logic, Functions, Loops)", "R Language (Foundations)", "Statistical Reasoning", "Quantitative Data Modeling", "Google Sheets Modeling", "Linear Regression & t-tests"]
  }
];

export const QUESTBRIDGE_PLAYBOOK: PlaybookChapter[] = [
  {
    id: "chapter-1-fundamentals",
    title: "The National College Match Architecture",
    subtitle: "Understanding binding agreements, the 15-school ranking matrix, and $0 expected family contribution",
    keyTips: [
      "The Match is binding for nearly all partner colleges (except MIT and a few specific exemptions). Only rank schools you would happily attend.",
      "You can rank up to 15 partner schools with zero application fees or fee waiver hassles.",
      "If matched, you receive a full 4-year Match Scholarship: tuition, room, board, travel, and books with zero loans."
    ],
    content: [
      "The QuestBridge National College Match is one of the single most transformative higher-education pathways in the United States. Designed specifically for high-achieving high school seniors facing socioeconomic hurdles (typically household incomes under $65,000 for a family of four), it partners with 50+ of the nation's premier institutions.",
      "Unlike standard early decision where you can only apply to one institution, QuestBridge allows you to rank up to 15 partner colleges in order of preference. The algorithm evaluates your list in sequence: if multiple schools accept you, you are matched to the highest school on your list that admitted you.",
      "Understanding this matching algorithm is paramount: you should never rank a school solely because of its brand name or prestige if you would not genuinely thrive in its campus culture, geographic setting, or curriculum structure."
    ]
  },
  {
    id: "chapter-2-ranking-strategy",
    title: "Strategic School Ranking & Fit Optimization",
    subtitle: "Curating a balanced list between selective liberal arts colleges, research universities, and urban campuses",
    keyTips: [
      "Balance top liberal arts colleges (Williams, Amherst, Swarthmore, Bowdoin) with mid-size and large universities.",
      "Consider curriculum philosophy (Williams tutorial system vs. open curriculums vs. core distributions).",
      "Do not rank all 15 schools if you only truly love 6 to 8. Quality of supplement essays beats quantity."
    ],
    content: [
      "A common trap for QuestBridge finalists is rushing to rank the maximum 15 schools without reading about their academic structures. Every school on your list requires distinct supplemental essays and financial aid submissions within a strict two-week window after Finalist notification.",
      "Selective liberal arts colleges (LACs) like Williams College frequently offer some of the most generous financial aid packages and unparalleled undergraduate research access. Because LACs have no graduate students, professors teach 100% of courses and direct lab resources entirely to undergraduates.",
      "When constructing your ranking list, evaluate: 1) Class size and faculty accessibility (e.g., Williams Oxford-style 2-person tutorial system); 2) Campus geography and weather; 3) Summer internship and research funding guarantees for low-income students."
    ]
  },
  {
    id: "chapter-3-essay-mastery",
    title: "Crafting the Biographical Essay & Supplements",
    subtitle: "Moving beyond cliché trauma narratives to spotlight intellectual vitality, humor, and lived agency",
    keyTips: [
      "Avoid 'trauma dumping' without growth. Admissions officers want to know how you think, adapt, and solve problems.",
      "Highlight interdisciplinary intersections (e.g., psychology + programming, science + community leadership).",
      "Every supplemental short answer should reveal a new facet of your curiosity rather than repeating your resume."
    ],
    content: [
      "The QuestBridge biographical essay gives you 800 words to tell your story. Many first-generation, low-income applicants feel pressured to focus exclusively on hardship, poverty, or family distress.",
      "While context is crucial, the most memorable essays are grounded in personal agency: what did you build, investigate, create, or question despite limited resources? Did you teach yourself to code online? Did you run an informal peer-tutoring network? Did you conduct independent research?",
      "Admissions committees at elite colleges are building an intellectual community. Show them how you participate in a classroom discussion, how you respond to intellectual roadblocks, and what perspectives you bring to dorm conversations at midnight."
    ]
  },
  {
    id: "chapter-4-financial-aid-css",
    title: "Demystifying the CSS Profile, FAFSA & Waivers",
    subtitle: "Conquering non-custodial parent paperwork, business tax returns, and zero-EFC documentation",
    keyTips: [
      "Submit the CSS Profile and FAFSA in early October to avoid missing partner college match deadlines.",
      "Non-custodial parent waivers require third-party verification letters (counselors, teachers, social workers). Start early!",
      "Most QuestBridge partners waive all CSS Profile submission fees automatically for Finalists via QuestBridge fee codes."
    ],
    content: [
      "Financial aid paperwork is often the single most stressful bottleneck for FGLI applicants. The CSS Profile requests in-depth financial data, including W-2s, 1040 federal tax returns, and untaxed income.",
      "For students with separated or divorced parents, many colleges require the Non-Custodial Profile. If you have no contact or financial support from that parent, you must submit a Non-Custodial Parent Waiver petition accompanied by corroborating statements from school counselors or community leaders.",
      "Do not let paperwork deter you from applying. Admissions and financial aid offices at partner colleges are approachable—send polite, concise emails to your regional financial aid officer if you encounter document hurdles."
    ]
  },
  {
    id: "chapter-5-match-day-and-beyond",
    title: "Match Day & The Regular Decision Rollover",
    subtitle: "What happens on December 1st, celebrate wins, and capitalizing on the QuestBridge Regular Decision pathway",
    keyTips: [
      "If matched: You are officially committed! Celebrate with family, notify your counselor, and decline other early apps.",
      "If unmatched: You are automatically rolled over to QuestBridge Regular Decision (RD) for up to 50+ schools for FREE.",
      "Over 60% of total QuestBridge Finalists who attend partner colleges are admitted during Regular Decision with generous need-based aid."
    ],
    content: [
      "On December 1st, decisions are released simultaneously. If your screen updates with congratulations to your top-ranked school, your college search is triumphantly complete with full four-year financial backing.",
      "However, if you are not matched on December 1st, remember: the Match is only the first inning. Partner colleges have tiny match quotas (often only 10 to 30 students per institution out of thousands of applicants).",
      "During QuestBridge Regular Decision (RD), you can forward your application to all 50+ partner colleges completely for free, update your midterm grades and new honors, and receive full need-based financial aid packages. The vast majority of QuestBridge students in partner college freshman classes were admitted through RD."
    ]
  }
];
