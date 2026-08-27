import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { motion } from 'motion/react';
import { 
  staggerContainer, 
  fadeInUp, 
  fadeInScale 
} from '../utils/motionVariants';
import { 
  Mail, 
  Send, 
  Check, 
  MapPin, 
  Sparkles, 
  Linkedin, 
  Instagram, 
  ExternalLink,
  BookOpen
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactCategory, setContactCategory] = useState('High School Workshop / Presentation');
  const [contactMessage, setContactMessage] = useState('');
  const [contactSent, setContactSent] = useState(false);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSent(true);
  };

  const getSocialIcon = (name: string) => {
    const lower = name.toLowerCase();
    if (lower.includes('linkedin')) return <Linkedin className="w-4 h-4" />;
    if (lower.includes('blog') || lower.includes('newsletter')) return <BookOpen className="w-4 h-4" />;
    if (lower.includes('tiktok')) {
      return (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.85.12V9.33a6.33 6.33 0 0 0-.85-.06A6.34 6.34 0 0 0 3.14 15.6a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V9.05a8.28 8.28 0 0 0 4.77 1.49V7.1a4.83 4.83 0 0 1-1-.41z" />
        </svg>
      );
    }
    if (lower.includes('instagram')) return <Instagram className="w-4 h-4" />;
    if (lower.includes('email') || lower.includes('mail')) return <Mail className="w-4 h-4" />;
    return <ExternalLink className="w-4 h-4" />;
  };

  return (
    <motion.section 
      id="contact" 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={staggerContainer(0.12, 0.05)}
      className="py-20 bg-[#FAF8F5] border-t border-stone-200/80"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div variants={fadeInUp} className="text-center space-y-2 mb-10">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#3E2B4E]"></span>
            <span className="text-xs font-semibold uppercase tracking-widest text-stone-500">
              Get in Touch
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal tracking-tight">
            Connect with Aldrich
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
            Reach out for high school workshops, FGLI college advising, or general inquiries.
          </p>
        </motion.div>

        {/* Clean, Minimalist Contact Card */}
        <motion.div variants={fadeInScale} className="bg-white border border-stone-200/80 rounded-2xl p-6 sm:p-8 shadow-2xs">
          {!contactSent ? (
            <form onSubmit={handleSendMessage} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-stone-700 block">
                    Your Name <span className="text-stone-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jordan Smith"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-stone-50/50 hover:bg-white focus:bg-white text-sm text-stone-900 border border-stone-200 rounded-lg placeholder:text-stone-400 focus:outline-none focus:ring-1 focus:ring-stone-400 focus:border-stone-400 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-stone-700 block">
                    Email Address <span className="text-stone-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jordan@example.com"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-stone-50/50 hover:bg-white focus:bg-white text-sm text-stone-900 border border-stone-200 rounded-lg placeholder:text-stone-400 focus:outline-none focus:ring-1 focus:ring-stone-400 focus:border-stone-400 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-stone-700 block">
                  Inquiry Purpose
                </label>
                <select
                  value={contactCategory}
                  onChange={(e) => setContactCategory(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-stone-50/50 hover:bg-white focus:bg-white text-sm text-stone-900 border border-stone-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-400 focus:border-stone-400 transition-all cursor-pointer"
                >
                  <option value="High School Workshop / Presentation">High School Workshop / Presentation</option>
                  <option value="1-on-1 Mentorship (FGLI Free)">1-on-1 Mentorship (FGLI Free)</option>
                  <option value="Williams College & QuestBridge Inquiries">Williams College & QuestBridge Inquiries</option>
                  <option value="General Collaboration">General Collaboration</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-stone-700 block">
                  Message <span className="text-stone-400">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell me a bit about your school context, timeline, or what you'd like to discuss..."
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-stone-50/50 hover:bg-white focus:bg-white text-sm text-stone-900 border border-stone-200 rounded-lg placeholder:text-stone-400 focus:outline-none focus:ring-1 focus:ring-stone-400 focus:border-stone-400 transition-all resize-y"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-xs text-stone-500">
                  Direct responses typically sent within 24-48 hours.
                </p>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-2.5 bg-[#241D2B] hover:bg-[#382B42] text-white text-xs font-medium rounded-lg shadow-2xs flex items-center justify-center gap-2 transition-all cursor-pointer hover:scale-101"
                >
                  <Send className="w-3.5 h-3.5 text-stone-300" />
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          ) : (
            <div className="py-10 text-center space-y-3">
              <div className="w-12 h-12 bg-stone-100 text-stone-800 rounded-full flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-xl font-medium text-stone-900">
                Message Sent, {contactName}!
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 max-w-sm mx-auto leading-relaxed">
                Thank you for reaching out. I'll reply to <strong>{contactEmail}</strong> promptly.
              </p>
              <button
                onClick={() => setContactSent(false)}
                className="mt-2 text-xs text-stone-800 font-medium underline hover:text-stone-900 cursor-pointer"
              >
                Send another message
              </button>
            </div>
          )}

          {/* Socials & Direct Contact Footer */}
          <div className="mt-8 pt-6 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            
            <div className="flex items-center gap-3">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-1.5 text-xs text-stone-700 hover:text-stone-900 font-medium transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-stone-500" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
              <span className="text-stone-300">•</span>
              <span className="flex items-center gap-1 text-xs text-stone-500">
                <MapPin className="w-3.5 h-3.5 text-stone-400" />
                <span>{PERSONAL_INFO.location}</span>
              </span>
            </div>

            {/* Social Icons row */}
            <div className="flex items-center gap-2">
              {PERSONAL_INFO.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="p-2 rounded-lg bg-stone-50 hover:bg-stone-100 text-stone-600 hover:text-stone-900 border border-stone-200/80 transition-colors"
                  title={social.name}
                >
                  {getSocialIcon(social.name)}
                </a>
              ))}
            </div>

          </div>
        </motion.div>

      </div>
    </motion.section>
  );
};
