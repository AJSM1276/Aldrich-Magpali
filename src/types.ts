export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  category: 'edtech' | 'web' | 'research' | 'mentorship' | 'writing';
  tags: string[];
  featured: boolean;
  metrics?: { label: string; value: string }[];
  impactSummary: string;
  highlights: string[];
  challenges: string[];
  solutions: string[];
  techStack: string[];
  links?: {
    demo?: string;
    github?: string;
    guide?: string;
    actionLabel?: string;
    interactiveType?: 'tutorly' | 'research' | 'guide' | 'advising';
  };
  iconName: string;
}

export interface CollegeAccessResource {
  id: string;
  title: string;
  type: 'guide' | 'database' | 'checklist' | 'curriculum' | 'mentorship';
  badge: string;
  description: string;
  keyTopics: string[];
  actionLabel: string;
  actionType: 'open-guide' | 'open-tutorly' | 'open-contact' | 'download-view';
  link?: string;
  stats?: string;
}

export interface JourneyMilestone {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  narrative: string;
  impactNote: string;
  badge: string;
}

export interface OpportunityResource {
  id: string;
  title: string;
  organization: string;
  category: 'Fly-in Program' | 'Scholarship' | 'Summer Research' | 'College Prep' | 'Mentorship';
  deadline: string;
  award: string;
  targetAudience: string;
  description: string;
  eligibility: string[];
  link: string;
  featured?: boolean;
}

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  category: 'College Access' | 'Psychology & Learning' | 'Technology & Building' | 'Personal Narrative';
  readTime: string;
  date: string;
  excerpt: string;
  content: string[];
  keyTakeaways: string[];
  tags: string[];
}

export interface ResearchTopic {
  id: string;
  title: string;
  focusArea: string;
  type: 'Research Practicum Thesis' | 'Cognitive Psychology' | 'Williams Future Directions';
  summary: string;
  methodology: string;
  sampleSize?: string;
  statisticalMethods?: string[];
  keyInsights: string[];
  status: string;
  badge: string;
  findings?: {
    preTestControlMean?: string;
    preTestExpMean?: string;
    postTestControlMean?: string;
    postTestExpMean?: string;
    pValue?: string;
    tScore?: string;
    rSquared?: string;
  };
}

export interface PlaybookChapter {
  id: string;
  title: string;
  subtitle: string;
  keyTips: string[];
  content: string[];
}

export interface ShopService {
  id: string;
  title: string;
  category: string;
  price: string;
  turnaroundTime: string;
  popular?: boolean;
  description: string;
  includes: string[];
  deliverables: string[];
  idealFor: string;
  fgliWaiverAvailable: boolean;
}

export interface BlogCallout {
  type: 'tip' | 'quote' | 'warning' | 'stat' | 'framework';
  title?: string;
  text: string;
  authorOrSource?: string;
}

export interface BlogSectionData {
  heading?: string;
  paragraphs: string[];
  callout?: BlogCallout;
  image?: {
    url: string;
    caption: string;
    alt: string;
  };
  keyBulletPoints?: string[];
}

export interface BlogInteractiveWidget {
  type: 'checklist' | 'ranking-calculator' | 'agency-analyzer' | 'spaced-repetition' | 'email-templates';
  title: string;
  description: string;
  data: any;
}

export interface BlogPost {
  id: string;
  title: string;
  subtitle: string;
  category: 'Announcement' | 'College Access Advice' | 'Personal Reflections' | 'Research & Cognition';
  date: string;
  readTime: string;
  summary: string;
  coverImage: string;
  author: string;
  authorRole: string;
  tags: string[];
  pinned?: boolean;
  content: string[]; // For backwards compatibility & quick summary
  sections: BlogSectionData[];
  keyTakeaways: string[];
  interactiveWidget?: BlogInteractiveWidget;
  relatedPostIds?: string[];
}

export interface MenteeStory {
  id: string;
  studentName: string;
  schoolContext: string;
  startingChallenge: string;
  keyStrategy: string;
  outcomes: string[];
  quote: string;
  cohortYear: string;
}

export interface CollegePrepModule {
  id: string;
  title: string;
  timeline: string;
  description: string;
  deliverables: string[];
  targetAudience: string;
  iconName: string;
}

export interface EducationMilestone {
  institution: string;
  period: string;
  degreeOrRole: string;
  location: string;
  status: string;
  honors: string[];
  courseworkHighlights: string[];
  description: string;
}

