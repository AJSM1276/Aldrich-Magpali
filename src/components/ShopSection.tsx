import React, { useState } from 'react';
import { SHOP_SERVICES_DATA } from '../data/portfolioData';
import { ShopService } from '../types';
import { TiltCard } from './TiltCard';
import { motion } from 'motion/react';
import { 
  staggerContainer, 
  fadeInUp, 
  fadeInScale 
} from '../utils/motionVariants';
import { 
  ShoppingBag, 
  Check, 
  Clock, 
  FileText, 
  ShieldCheck, 
  Video, 
  Users, 
  ArrowRight,
  HeartHandshake,
  X,
  Send,
  Sparkles
} from 'lucide-react';

export const ShopSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ShopService | null>(null);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [isFgliWaiverRequested, setIsFgliWaiverRequested] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Form fields
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [targetSchools, setTargetSchools] = useState('');
  const [upcomingDeadline, setUpcomingDeadline] = useState('');
  const [notesOrEssayLink, setNotesOrEssayLink] = useState('');

  const handleOpenBooking = (service: ShopService) => {
    setSelectedService(service);
    setIsFgliWaiverRequested(false);
    setFormSubmitted(false);
    setBookingModalOpen(true);
  };

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const getServiceIcon = (category: string) => {
    if (category.toLowerCase().includes('review') || category.toLowerCase().includes('line')) {
      return <FileText className="w-4 h-4 text-stone-700" />;
    }
    return <Sparkles className="w-4 h-4 text-[#876834]" />;
  };

  return (
    <motion.section 
      id="services" 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={staggerContainer(0.12, 0.05)}
      className="py-20 bg-[#FAF8F5] dark:bg-[#0E0817] relative transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div variants={fadeInUp} className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#3E2B4E] dark:bg-[#E2C799]"></span>
              <span className="text-xs font-semibold uppercase tracking-widest text-stone-500 dark:text-stone-400">
                Advising & Essay Resources
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 dark:text-white font-normal tracking-tight">
              Personal Statement <span className="italic text-[#3E2B4E] dark:text-[#E2C799] font-normal">Review & Resources</span>
            </h2>
          </div>

          {/* Need-Based Financial Aid Callout */}
          <div className="flex items-center gap-3 p-3.5 bg-white dark:bg-[#1A1224] border border-stone-200/90 dark:border-stone-800 rounded-xl shadow-2xs max-w-md transition-colors">
            <HeartHandshake className="w-5 h-5 text-[#876834] dark:text-[#E2C799] shrink-0" />
            <div className="text-xs space-y-0.5">
              <span className="font-medium text-stone-900 dark:text-white block">Need-Based Financial Assistance</span>
              <p className="text-stone-600 dark:text-stone-300 leading-snug">
                If you are facing financial hardship or cannot afford these services, you can{' '}
                <a href="#contact" className="text-[#3E2B4E] dark:text-[#E2C799] font-medium underline hover:text-[#251A30] dark:hover:text-[#F3ECE0]">
                  contact me directly
                </a>{' '}
                to apply for free pro bono assistance.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Services Grid (2 Products) with Staggered Entrance */}
        <motion.div variants={staggerContainer(0.12, 0.1)} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto pt-6 overflow-visible">
          {SHOP_SERVICES_DATA.map((service) => (
            <motion.div key={service.id} variants={fadeInUp} className="h-full">
              <TiltCard
                maxTilt={3}
                scale={1.01}
                glareOpacity={0.06}
                className={`p-6 sm:p-7 rounded-2xl border flex flex-col justify-between space-y-6 transition-all relative overflow-visible h-full ${
                  service.popular
                    ? 'bg-white dark:bg-[#1A1224] border-stone-300 dark:border-stone-700 shadow-sm'
                    : 'bg-white dark:bg-[#1A1224] border-stone-200/80 dark:border-stone-800 shadow-2xs hover:border-stone-300 dark:hover:border-stone-700'
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FAF5ED] dark:bg-[#251B2E] text-[#4A3B22] dark:text-[#E2C799] text-[11px] font-medium tracking-wide px-3.5 py-0.5 rounded-full shadow-2xs border border-[#E5DAC6] dark:border-[#4E3862] flex items-center gap-1.5 z-20 whitespace-nowrap">
                    <Sparkles className="w-3 h-3 text-[#876834] dark:text-[#E2C799]" />
                    <span>Featured Service</span>
                  </div>
                )}

                {/* Product Image Preview */}
                {service.imageUrl && (
                  <div className="relative aspect-16/9 w-full rounded-xl overflow-hidden bg-stone-100 dark:bg-stone-900 border border-stone-200/60 dark:border-stone-800 shadow-2xs group">
                    <img
                      src={service.imageUrl}
                      alt={service.imageAlt || service.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-103"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-2 left-3 right-3 text-white pointer-events-none flex items-center justify-between">
                      <span className="text-[11px] font-medium tracking-wide text-white/95 drop-shadow-xs">
                        {service.turnaroundTime}
                      </span>
                      <span className="text-xs font-serif font-semibold text-[#DCC9A8] drop-shadow-xs">
                        {service.price}
                      </span>
                    </div>
                  </div>
                )}

                <div className="space-y-4">
                  
                  {/* Header: Title & Rate */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-600 dark:text-stone-300 flex items-center gap-1.5">
                        {getServiceIcon(service.category)}
                        <span>{service.category}</span>
                      </span>
                      <div className="text-[11px] text-stone-500 dark:text-stone-400 font-medium flex items-center gap-1">
                        <Clock className="w-3 h-3 text-stone-400" />
                        <span>{service.turnaroundTime}</span>
                      </div>
                    </div>

                    <h3 className="font-serif text-lg sm:text-xl font-medium text-stone-900 dark:text-white leading-snug">
                      {service.title}
                    </h3>

                    <div className="text-2xl sm:text-3xl font-serif font-medium text-stone-900 dark:text-white pt-1">
                      {service.price}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed min-h-[44px]">
                    {service.description}
                  </p>

                  {/* Deliverables checklist */}
                  <div className="space-y-2 pt-3 border-t border-stone-100 dark:border-stone-800">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-stone-400 dark:text-stone-500 block">
                      What's Included
                    </span>
                    <div className="space-y-2">
                      {service.includes.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-stone-700 dark:text-stone-300">
                          <Check className="w-3.5 h-3.5 text-[#3E2B4E] dark:text-[#E2C799] shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Action Button */}
                <div className="pt-4 border-t border-stone-100 dark:border-stone-800 flex flex-col space-y-3">
                  <span className="text-[11px] text-stone-500 dark:text-stone-400 font-medium">
                    <strong className="text-stone-700 dark:text-stone-300">Ideal for:</strong> {service.idealFor}
                  </span>

                  <button
                    onClick={() => handleOpenBooking(service)}
                    className="w-full py-2.5 sm:py-3 text-xs font-medium rounded-lg shadow-2xs flex items-center justify-center gap-1.5 transition-all cursor-pointer bg-[#241D2B] dark:bg-[#3E2B4E] hover:bg-[#382B42] dark:hover:bg-[#4E3862] text-white hover:scale-101"
                  >
                    <span>Get Started ({service.price})</span>
                    <ArrowRight className="w-3.5 h-3.5 text-stone-300 dark:text-[#FAF5ED]" />
                  </button>
                </div>

              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Booking / Request Modal with Clean, Minimalist Inputs */}
      {bookingModalOpen && selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-2xs animate-in fade-in duration-150">
          <div className="bg-white dark:bg-[#1A1224] rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 shadow-lg border border-stone-200 dark:border-stone-800 space-y-5 transition-colors">
            
            <div className="flex items-start justify-between border-b border-stone-100 dark:border-stone-800 pb-3 gap-3">
              <div className="flex items-center gap-3 min-w-0">
                {selectedService.imageUrl && (
                  <img
                    src={selectedService.imageUrl}
                    alt={selectedService.title}
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 rounded-lg object-cover border border-stone-200 dark:border-stone-700 shrink-0"
                  />
                )}
                <div className="min-w-0">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 block">
                    Service Request
                  </span>
                  <h3 className="text-sm sm:text-base font-medium text-stone-900 dark:text-white truncate">
                    {selectedService.title}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setBookingModalOpen(false)}
                className="p-1 rounded-full text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 transition-colors shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {!formSubmitted ? (
              <form onSubmit={handleSubmitBooking} className="space-y-4 text-xs">
                
                <div className="p-3 bg-[#FAF7F2] dark:bg-[#251B30] rounded-xl flex items-center justify-between border border-[#E7DFD3] dark:border-stone-700">
                  <div>
                    <span className="text-stone-500 dark:text-stone-400 block">Rate:</span>
                    <span className="text-sm font-medium text-stone-900 dark:text-white">
                      {isFgliWaiverRequested ? 'Free Aid Application (Pending Review)' : selectedService.price}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-stone-500 dark:text-stone-400 block">Turnaround:</span>
                    <span className="text-xs font-medium text-stone-800 dark:text-stone-200">{selectedService.turnaroundTime}</span>
                  </div>
                </div>

                {/* Need-based Financial Aid Application Toggle */}
                {selectedService.fgliWaiverAvailable && (
                  <label className="flex items-start gap-2.5 p-3 bg-[#FAF5ED] dark:bg-[#281D1E] border border-[#E5DAC6] dark:border-stone-700 rounded-xl cursor-pointer hover:bg-[#F5EDDE] dark:hover:bg-[#342426] transition-colors">
                    <input
                      type="checkbox"
                      checked={isFgliWaiverRequested}
                      onChange={(e) => setIsFgliWaiverRequested(e.target.checked)}
                      className="mt-0.5 rounded text-[#3E2B4E] focus:ring-[#3E2B4E]"
                    />
                    <div className="space-y-0.5">
                      <span className="font-medium text-stone-900 dark:text-white block">
                        I would like to apply for Need-Based Financial Assistance (Pro Bono)
                      </span>
                      <span className="text-stone-600 dark:text-stone-300 text-[11px] block leading-relaxed">
                        If you cannot afford this service, check this box and briefly mention your background or financial circumstances in the notes below. Applications are reviewed individually.
                      </span>
                    </div>
                  </label>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="font-medium text-stone-700 dark:text-stone-300 block">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Maya Chen"
                      value={applicantName}
                      onChange={(e) => setApplicantName(e.target.value)}
                      className="w-full px-3 py-2 bg-stone-50/50 dark:bg-stone-900/60 hover:bg-white dark:hover:bg-stone-900 focus:bg-white dark:focus:bg-stone-900 text-sm text-stone-900 dark:text-white border border-stone-200 dark:border-stone-700 rounded-lg placeholder:text-stone-400 dark:placeholder:text-stone-500 focus:outline-none focus:ring-1 focus:ring-stone-400 focus:border-stone-400 transition-all"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-medium text-stone-700 dark:text-stone-300 block">Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="student@example.com"
                      value={applicantEmail}
                      onChange={(e) => setApplicantEmail(e.target.value)}
                      className="w-full px-3 py-2 bg-stone-50/50 dark:bg-stone-900/60 hover:bg-white dark:hover:bg-stone-900 focus:bg-white dark:focus:bg-stone-900 text-sm text-stone-900 dark:text-white border border-stone-200 dark:border-stone-700 rounded-lg placeholder:text-stone-400 dark:placeholder:text-stone-500 focus:outline-none focus:ring-1 focus:ring-stone-400 focus:border-stone-400 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="font-medium text-stone-700 dark:text-stone-300 block">Target Colleges</label>
                    <input
                      type="text"
                      placeholder="Williams, Amherst, Yale"
                      value={targetSchools}
                      onChange={(e) => setTargetSchools(e.target.value)}
                      className="w-full px-3 py-2 bg-stone-50/50 dark:bg-stone-900/60 hover:bg-white dark:hover:bg-stone-900 focus:bg-white dark:focus:bg-stone-900 text-sm text-stone-900 dark:text-white border border-stone-200 dark:border-stone-700 rounded-lg placeholder:text-stone-400 dark:placeholder:text-stone-500 focus:outline-none focus:ring-1 focus:ring-stone-400 focus:border-stone-400 transition-all"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-medium text-stone-700 dark:text-stone-300 block">Upcoming Deadline</label>
                    <input
                      type="text"
                      placeholder="e.g. Oct 15 or Nov 1"
                      value={upcomingDeadline}
                      onChange={(e) => setUpcomingDeadline(e.target.value)}
                      className="w-full px-3 py-2 bg-stone-50/50 dark:bg-stone-900/60 hover:bg-white dark:hover:bg-stone-900 focus:bg-white dark:focus:bg-stone-900 text-sm text-stone-900 dark:text-white border border-stone-200 dark:border-stone-700 rounded-lg placeholder:text-stone-400 dark:placeholder:text-stone-500 focus:outline-none focus:ring-1 focus:ring-stone-400 focus:border-stone-400 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-medium text-stone-700 dark:text-stone-300 block">
                    Google Docs Essay Link / Notes {isFgliWaiverRequested ? '& Financial Aid Note' : ''} *
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder={
                      isFgliWaiverRequested
                        ? "Paste your Google Doc essay link and briefly note your school, background, or financial aid context for pro bono consideration..."
                        : "Paste your Google Doc essay link (with comment access) or brainstorm notes..."
                    }
                    value={notesOrEssayLink}
                    onChange={(e) => setNotesOrEssayLink(e.target.value)}
                    className="w-full px-3 py-2 bg-stone-50/50 dark:bg-stone-900/60 hover:bg-white dark:hover:bg-stone-900 focus:bg-white dark:focus:bg-stone-900 text-sm text-stone-900 dark:text-white border border-stone-200 dark:border-stone-700 rounded-lg placeholder:text-stone-400 dark:placeholder:text-stone-500 focus:outline-none focus:ring-1 focus:ring-stone-400 focus:border-stone-400 transition-all resize-y"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-stone-100 dark:border-stone-800">
                  <button
                    type="button"
                    onClick={() => setBookingModalOpen(false)}
                    className="px-4 py-2 text-xs text-stone-500 dark:text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 cursor-pointer"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-[#241D2B] dark:bg-[#3E2B4E] hover:bg-[#382B42] dark:hover:bg-[#4E3862] text-white text-xs font-medium rounded-lg shadow-2xs flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>
                      {isFgliWaiverRequested ? 'Submit Aid Application' : `Submit Booking (${selectedService.price})`}
                    </span>
                  </button>
                </div>

              </form>
            ) : (
              <div className="py-6 text-center space-y-4">
                <div className="w-12 h-12 bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>

                <div className="space-y-1">
                  <h4 className="text-base font-medium text-stone-900 dark:text-white">
                    {isFgliWaiverRequested ? 'Application Received' : 'Booking Received'}, {applicantName}!
                  </h4>
                  <p className="text-xs text-stone-600 dark:text-stone-300 max-w-sm mx-auto leading-relaxed">
                    {isFgliWaiverRequested
                      ? `Thank you for applying for financial assistance. I will review your notes and get in touch directly at ${applicantEmail} regarding pro bono availability.`
                      : `I will review your submission and reply directly to ${applicantEmail} within ${selectedService.turnaroundTime}.`}
                  </p>
                </div>

                {isFgliWaiverRequested && (
                  <div className="p-2.5 bg-[#FAF5ED] dark:bg-[#251B2E] text-[#4A3B22] dark:text-[#E2C799] border border-[#E5DAC6] dark:border-[#4E3862] text-xs font-medium rounded-lg max-w-xs mx-auto">
                    ✓ Financial Assistance Application Logged
                  </div>
                )}

                <button
                  onClick={() => setBookingModalOpen(false)}
                  className="px-5 py-2 bg-[#241D2B] dark:bg-[#3E2B4E] text-white text-xs font-medium rounded-lg hover:bg-[#382B42] dark:hover:bg-[#4E3862] transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            )}

          </div>
        </div>
      )}

    </motion.section>
  );
};
