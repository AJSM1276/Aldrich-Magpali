import { Variants } from 'motion/react';

// Container with staggered child triggers
export const staggerContainer = (staggerTime = 0.1, delayChildren = 0.05): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerTime,
      delayChildren: delayChildren,
    },
  },
});

// Subtle, elegant upward rise with fade
export const fadeInUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.55, 
      ease: [0.22, 1, 0.36, 1] 
    }
  },
};

// Gentle scale-in with upward rise
export const fadeInScale: Variants = {
  hidden: { 
    opacity: 0, 
    y: 16,
    scale: 0.97
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.5, 
      ease: [0.22, 1, 0.36, 1] 
    }
  },
};

// Slide in from left
export const fadeInLeft: Variants = {
  hidden: { 
    opacity: 0, 
    x: -24 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1] 
    }
  },
};

// Slide in from right
export const fadeInRight: Variants = {
  hidden: { 
    opacity: 0, 
    x: 24 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1] 
    }
  },
};
