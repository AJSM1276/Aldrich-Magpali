import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { motion } from 'motion/react';
import { 
  Mail, 
  Send, 
  Check, 
  MapPin, 
  Sparkles,
  Linkedin, 
  Instagram, 
  ExternalLink 
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
    switch (name.toLowerCase()) {
      case 'linkedin':
        return <Linkedin className="w-4 h-4" />;
      case 'tiktok':
        return (
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.85.12V9.33a6.33 6.33 0 0 0-.85-.06A6.34 6.34 0 0 0 3.14 15.6a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V9.05a8.28 8.28 0 0 0 4.77 1.49V7.1a4.83 4.83 0 0 1-1-.41z" />
          </svg>
        );
      case 'instagram':
        return <Instagram className="w-4 h-4" />;
      case 'email':
      case 'mail':
        return <Mail className="w-4 h-4" />;
      default:
        return <ExternalLink className="w-4 h-4" />;
    }
  };

  return (
    <motion.section 
      id="contact" 
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="py-20 bg-[#FAF9F6] border-t border-gray-200/80"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-2 mb-10">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#3C225D]"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#3C225D]">
              Get in Touch
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-gray-900 font-normal tracking-tight">
            Connect with Aldrich
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
            Reach out for high school workshops, FGLI college advising, or general inquiries.
          </p>
        </div>

        {/* Clean, Minimalist Contact Card */}
        <div className="bg-white border border-gray-200/90 rounded-2xl p-6 sm:p-8 shadow-xs">
          {!contactSent ? (
            <form onSubmit={handleSendMessage} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-700 block">
                    Your Name <span className="text-[#3C225D]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jordan Smith"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-gray-50/50 hover:bg-white focus:bg-white text-sm text-gray-900 border border-gray-200 rounded-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3C225D]/15 focus:border-[#3C225D] transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-700 block">
                    Email Address <span className="text-[#3C225D]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jordan@example.com"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-gray-50/50 hover:bg-white focus:bg-white text-sm text-gray-900 border border-gray-200 rounded-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3C225D]/15 focus:border-[#3C225D] transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-700 block">
                  Inquiry Purpose
                </label>
                <select
                  value={contactCategory}
                  onChange={(e) => setContactCategory(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-gray-50/50 hover:bg-white focus:bg-white text-sm text-gray-900 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3C225D]/15 focus:border-[#3C225D] transition-all cursor-pointer"
                >
                  <option value="High School Workshop / Presentation">High School Workshop / Presentation</option>
                  <option value="1-on-1 Mentorship (FGLI Free)">1-on-1 Mentorship (FGLI Free)</option>
                  <option value="Williams College & QuestBridge Inquiries">Williams College & QuestBridge Inquiries</option>
                  <option value="General Collaboration">General Collaboration</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-700 block">
                  Message <span className="text-[#3C225D]">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell me a bit about your school context, timeline, or what you'd like to discuss..."
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-gray-50/50 hover:bg-white focus:bg-white text-sm text-gray-900 border border-gray-200 rounded-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3C225D]/15 focus:border-[#3C225D] transition-all resize-y"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-xs text-gray-500">
                  Direct responses typically sent within 24-48 hours.
                </p>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-2.5 bg-[#1A1A1A] hover:bg-[#3C225D] text-white text-xs font-semibold rounded-lg shadow-xs flex items-center justify-center gap-2 transition-all cursor-pointer hover:scale-101"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          ) : (
            <div className="py-10 text-center space-y-3">
              <div className="w-12 h-12 bg-purple-100 text-[#3C225D] rounded-full flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-xl font-semibold text-gray-900">
                Message Sent, {contactName}!
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 max-w-sm mx-auto leading-relaxed">
                Thank you for reaching out. I'll reply to <strong>{contactEmail}</strong> promptly.
              </p>
              <button
                onClick={() => setContactSent(false)}
                className="mt-2 text-xs text-[#3C225D] font-semibold underline hover:text-[#2F1A4A] cursor-pointer"
              >
                Send another message
              </button>
            </div>
          )}

          {/* Socials & Direct Contact Footer */}
          <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            
            <div className="flex items-center gap-3">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-1.5 text-xs text-gray-600 hover:text-[#3C225D] font-medium transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#3C225D]" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
              <span className="text-gray-300">•</span>
              <span className="flex items-center gap-1 text-xs text-gray-500">
                <MapPin className="w-3.5 h-3.5 text-gray-400" />
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
                  className="p-2 rounded-lg bg-gray-50 hover:bg-purple-50 text-gray-600 hover:text-[#3C225D] border border-gray-200/70 hover:border-purple-200 transition-colors"
                  title={social.name}
                >
                  {getSocialIcon(social.name)}
                </a>
              ))}
            </div>

          </div>
        </div>

      </div>
    </motion.section>
  );
};
