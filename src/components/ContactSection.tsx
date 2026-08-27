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
  BookOpen,
  Loader2,
  AlertCircle
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactCategory, setContactCategory] = useState('High School Workshop / Presentation');
  const [contactMessage, setContactMessage] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [contactSent, setContactSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    const targetEmail = 'aldrichmagpali1276@gmail.com';

    try {
      // Send real email via FormSubmit AJAX service
      const response = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: contactName,
          email: contactEmail,
          category: contactCategory,
          message: contactMessage,
          _subject: `[Portfolio Inquiry] ${contactCategory} from ${contactName}`,
          _replyto: contactEmail,
          _template: 'table',
          _captcha: 'false'
        })
      });

      const data = await response.json();

      if (response.ok && (data.success === 'true' || data.success === true || response.status === 200)) {
        setContactSent(true);

        // Track with Google Analytics gtag if loaded
        if (typeof (window as any).gtag === 'function') {
          (window as any).gtag('event', 'generate_lead', {
            event_category: 'Contact Form',
            event_label: contactCategory,
            value: 1
          });
        }
      } else {
        throw new Error(data.message || 'Failed to deliver message via server');
      }
    } catch (err: any) {
      console.warn('FormSubmit request issue, providing direct fallback:', err);
      // Even if adblocker or network issue occurs, mark as sent after opening mailto or display direct option
      setErrorMessage(
        'There was a slight delay reaching the email server. You can also send directly via email:'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const directMailtoUrl = `mailto:aldrichmagpali1276@gmail.com?subject=${encodeURIComponent(
    `[Portfolio Inquiry] ${contactCategory} - ${contactName || 'Inquiry'}`
  )}&body=${encodeURIComponent(
    `Name: ${contactName}\nEmail: ${contactEmail}\nCategory: ${contactCategory}\n\nMessage:\n${contactMessage}`
  )}`;

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
      className="py-20 bg-[#FAF8F5] dark:bg-[#0D0814] border-t border-stone-200/80 dark:border-stone-800/80 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div variants={fadeInUp} className="text-center space-y-2 mb-10">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#3E2B4E] dark:bg-[#E2C799]"></span>
            <span className="text-xs font-semibold uppercase tracking-widest text-stone-500 dark:text-stone-400">
              Get in Touch
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 dark:text-white font-normal tracking-tight">
            Connect with Aldrich
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 max-w-md mx-auto leading-relaxed">
            Reach out for high school workshops, FGLI college advising, or general inquiries.
          </p>
        </motion.div>

        {/* Clean, Minimalist Contact Card */}
        <motion.div variants={fadeInScale} className="bg-white dark:bg-[#150E20] border border-stone-200/80 dark:border-stone-800 rounded-2xl p-6 sm:p-8 shadow-2xs transition-colors duration-300">
          {!contactSent ? (
            <form onSubmit={handleSendMessage} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-stone-700 dark:text-stone-200 block">
                    Your Name <span className="text-stone-400 dark:text-stone-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jordan Smith"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-stone-50/50 dark:bg-[#1E142B] hover:bg-white dark:hover:bg-[#251B33] focus:bg-white dark:focus:bg-[#251B33] text-sm text-stone-900 dark:text-white border border-stone-200 dark:border-stone-700 rounded-lg placeholder:text-stone-400 dark:placeholder:text-stone-500 focus:outline-none focus:ring-1 focus:ring-stone-400 dark:focus:ring-[#E2C799]/50 focus:border-stone-400 dark:focus:border-[#E2C799]/60 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-stone-700 dark:text-stone-200 block">
                    Email Address <span className="text-stone-400 dark:text-stone-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jordan@example.com"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-stone-50/50 dark:bg-[#1E142B] hover:bg-white dark:hover:bg-[#251B33] focus:bg-white dark:focus:bg-[#251B33] text-sm text-stone-900 dark:text-white border border-stone-200 dark:border-stone-700 rounded-lg placeholder:text-stone-400 dark:placeholder:text-stone-500 focus:outline-none focus:ring-1 focus:ring-stone-400 dark:focus:ring-[#E2C799]/50 focus:border-stone-400 dark:focus:border-[#E2C799]/60 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-stone-700 dark:text-stone-200 block">
                  Inquiry Purpose
                </label>
                <select
                  value={contactCategory}
                  onChange={(e) => setContactCategory(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-stone-50/50 dark:bg-[#1E142B] hover:bg-white dark:hover:bg-[#251B33] focus:bg-white dark:focus:bg-[#251B33] text-sm text-stone-900 dark:text-white border border-stone-200 dark:border-stone-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-400 dark:focus:ring-[#E2C799]/50 focus:border-stone-400 dark:focus:border-[#E2C799]/60 transition-all cursor-pointer"
                >
                  <option className="bg-white dark:bg-[#1E142B] text-stone-900 dark:text-stone-100" value="High School Workshop / Presentation">High School Workshop / Presentation</option>
                  <option className="bg-white dark:bg-[#1E142B] text-stone-900 dark:text-stone-100" value="1-on-1 Mentorship (FGLI Free)">1-on-1 Mentorship (FGLI Free)</option>
                  <option className="bg-white dark:bg-[#1E142B] text-stone-900 dark:text-stone-100" value="Williams College & QuestBridge Inquiries">Williams College & QuestBridge Inquiries</option>
                  <option className="bg-white dark:bg-[#1E142B] text-stone-900 dark:text-stone-100" value="General Collaboration">General Collaboration</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-stone-700 dark:text-stone-200 block">
                  Message <span className="text-stone-400 dark:text-stone-500">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell me a bit about your school context, timeline, or what you'd like to discuss..."
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-stone-50/50 dark:bg-[#1E142B] hover:bg-white dark:hover:bg-[#251B33] focus:bg-white dark:focus:bg-[#251B33] text-sm text-stone-900 dark:text-white border border-stone-200 dark:border-stone-700 rounded-lg placeholder:text-stone-400 dark:placeholder:text-stone-500 focus:outline-none focus:ring-1 focus:ring-stone-400 dark:focus:ring-[#E2C799]/50 focus:border-stone-400 dark:focus:border-[#E2C799]/60 transition-all resize-y"
                />
              </div>

              {/* Optional Error / Direct Send prompt */}
              {errorMessage && (
                <div className="p-3 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 rounded-lg flex items-start gap-2.5 text-xs text-amber-800 dark:text-amber-300">
                  <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p>{errorMessage}</p>
                    <a
                      href={directMailtoUrl}
                      className="inline-flex items-center gap-1 font-medium text-amber-900 dark:text-amber-200 underline hover:text-black dark:hover:text-white"
                    >
                      <span>Click here to open in your mail app to aldrichmagpali1276@gmail.com</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              )}

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-xs text-stone-500 dark:text-stone-400">
                  Direct responses sent to your email within 24-48 hours.
                </p>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-6 py-2.5 bg-[#241D2B] dark:bg-[#3E2B4E] hover:bg-[#382B42] dark:hover:bg-[#4E3862] disabled:bg-stone-400 dark:disabled:bg-stone-700 text-white text-xs font-medium rounded-lg shadow-2xs flex items-center justify-center gap-2 transition-all cursor-pointer hover:scale-101 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin text-stone-300" />
                      <span>Sending to Aldrich...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5 text-stone-300" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          ) : (
            <div className="py-10 text-center space-y-3">
              <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 rounded-full flex items-center justify-center mx-auto shadow-2xs">
                <Check className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-xl font-medium text-stone-900 dark:text-white">
                Message Delivered, {contactName}!
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 max-w-md mx-auto leading-relaxed">
                Your message has been emailed directly to <strong>aldrichmagpali1276@gmail.com</strong>. I'll get back to you at <strong>{contactEmail}</strong> shortly.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => {
                    setContactSent(false);
                    setContactName('');
                    setContactEmail('');
                    setContactMessage('');
                  }}
                  className="text-xs text-stone-700 dark:text-stone-300 font-medium underline hover:text-stone-900 dark:hover:text-white cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            </div>
          )}

          {/* Socials & Direct Contact Footer */}
          <div className="mt-8 pt-6 border-t border-stone-100 dark:border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            
            <div className="flex items-center gap-3">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-1.5 text-xs text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white font-medium transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-stone-500 dark:text-stone-400" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
              <span className="text-stone-300 dark:text-stone-600">•</span>
              <span className="flex items-center gap-1 text-xs text-stone-500 dark:text-stone-400">
                <MapPin className="w-3.5 h-3.5 text-stone-400 dark:text-stone-500" />
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
                  className="p-2 rounded-lg bg-stone-50 dark:bg-[#1E142B] hover:bg-stone-100 dark:hover:bg-[#2A1D3A] text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white border border-stone-200/80 dark:border-stone-700/80 transition-colors"
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
