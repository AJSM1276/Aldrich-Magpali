import React, { useState } from 'react';
import { SHOP_SERVICES_DATA } from '../data/portfolioData';
import { ShopService } from '../types';
import { TiltCard } from './TiltCard';
import { motion } from 'motion/react';
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
      return <FileText className="w-4 h-4 text-[#3C225D]" />;
    }
    return <Sparkles className="w-4 h-4 text-[#3C225D]" />;
  };

  return (
    <motion.section 
      id="services" 
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="py-20 bg-[#FAF9F6] relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#3C225D]"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#3C225D]">
                Advising & Essay Resources
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1A1A] font-normal tracking-tight">
              Personal Statement <span className="italic text-[#3C225D] font-normal">Review & Resources</span>
            </h2>
          </div>

          {/* Need-Based Financial Aid Callout */}
          <div className="flex items-center gap-3 p-3.5 bg-white border border-gray-200/90 rounded-xl shadow-2xs max-w-md">
            <HeartHandshake className="w-5 h-5 text-[#3C225D] shrink-0" />
            <div className="text-xs space-y-0.5">
              <span className="font-bold text-gray-900 block">Need-Based Financial Assistance</span>
              <p className="text-gray-600 leading-snug">
                If you are facing financial hardship or cannot afford these services, you can{' '}
                <a href="#contact" className="text-[#3C225D] font-semibold underline hover:text-[#2F1A4A]">
                  contact me directly
                </a>{' '}
                to apply for free pro bono assistance.
              </p>
            </div>
          </div>
        </div>

        {/* Services Grid (2 Products) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {SHOP_SERVICES_DATA.map((service) => (
            <TiltCard
              key={service.id}
              maxTilt={3}
              scale={1.01}
              glareOpacity={0.12}
              className={`p-6 sm:p-7 rounded-2xl border flex flex-col justify-between space-y-6 transition-all relative ${
                service.popular
                  ? 'bg-white border-[#3C225D] shadow-md ring-2 ring-[#3C225D]/10'
                  : 'bg-white border-gray-200/90 shadow-2xs hover:border-purple-200'
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#3C225D] text-white text-[10px] uppercase font-bold tracking-widest px-3 py-0.5 rounded-full shadow-xs flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-300" />
                  <span>Featured Service</span>
                </div>
              )}

              <div className="space-y-4">
                
                {/* Header: Title & Rate */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#3C225D] flex items-center gap-1.5">
                      {getServiceIcon(service.category)}
                      <span>{service.category}</span>
                    </span>
                    <div className="text-[11px] text-gray-500 font-medium flex items-center gap-1">
                      <Clock className="w-3 h-3 text-gray-400" />
                      <span>{service.turnaroundTime}</span>
                    </div>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-semibold text-gray-900 leading-snug">
                    {service.title}
                  </h3>

                  <div className="text-3xl font-serif font-bold text-[#3C225D] pt-1">
                    {service.price}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed min-h-[44px]">
                  {service.description}
                </p>

                {/* Deliverables checklist */}
                <div className="space-y-2 pt-3 border-t border-gray-100">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">
                    What's Included
                  </span>
                  <div className="space-y-2">
                    {service.includes.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                        <Check className="w-3.5 h-3.5 text-[#3C225D] shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-gray-100 flex flex-col space-y-3">
                <span className="text-[11px] text-gray-500 font-medium">
                  <strong>Ideal for:</strong> {service.idealFor}
                </span>

                <button
                  onClick={() => handleOpenBooking(service)}
                  className={`w-full py-2.5 sm:py-3 text-xs font-semibold rounded-lg shadow-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer hover:scale-101 ${
                    service.popular
                      ? 'bg-[#3C225D] hover:bg-[#2F1A4A] text-white'
                      : 'bg-[#1A1A1A] hover:bg-[#3C225D] text-white'
                  }`}
                >
                  <span>Get Started ({service.price})</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </TiltCard>
          ))}
        </div>

      </div>

      {/* Booking / Request Modal with Clean, Minimalist Inputs */}
      {bookingModalOpen && selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 shadow-xl border border-gray-200 space-y-5">
            
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#3C225D] block">
                  Service Request
                </span>
                <h3 className="text-base font-semibold text-gray-900">
                  {selectedService.title}
                </h3>
              </div>
              <button
                onClick={() => setBookingModalOpen(false)}
                className="p-1 rounded-full text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {!formSubmitted ? (
              <form onSubmit={handleSubmitBooking} className="space-y-4 text-xs">
                
                <div className="p-3 bg-purple-50/70 rounded-xl flex items-center justify-between">
                  <div>
                    <span className="text-gray-500 block">Rate:</span>
                    <span className="text-sm font-bold text-[#3C225D]">
                      {isFgliWaiverRequested ? 'Free Aid Application (Pending Review)' : selectedService.price}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-gray-500 block">Turnaround:</span>
                    <span className="text-xs font-semibold text-gray-800">{selectedService.turnaroundTime}</span>
                  </div>
                </div>

                {/* Need-based Financial Aid Application Toggle */}
                {selectedService.fgliWaiverAvailable && (
                  <label className="flex items-start gap-2.5 p-3 bg-purple-50/60 border border-purple-200 rounded-xl cursor-pointer hover:bg-purple-100/70 transition-colors">
                    <input
                      type="checkbox"
                      checked={isFgliWaiverRequested}
                      onChange={(e) => setIsFgliWaiverRequested(e.target.checked)}
                      className="mt-0.5 rounded text-[#3C225D] focus:ring-[#3C225D]"
                    />
                    <div className="space-y-0.5">
                      <span className="font-bold text-[#3C225D] block">
                        I would like to apply for Need-Based Financial Assistance (Pro Bono)
                      </span>
                      <span className="text-gray-600 text-[11px] block">
                        If you cannot afford this service, check this box and briefly mention your background or financial circumstances in the notes below. Applications are reviewed individually.
                      </span>
                    </div>
                  </label>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="font-semibold text-gray-700 block">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Maya Chen"
                      value={applicantName}
                      onChange={(e) => setApplicantName(e.target.value)}
                      className="w-full px-3 py-2 bg-gray-50/50 hover:bg-white focus:bg-white text-sm text-gray-900 border border-gray-200 rounded-lg placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#3C225D] focus:border-[#3C225D] transition-all"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-semibold text-gray-700 block">Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="student@example.com"
                      value={applicantEmail}
                      onChange={(e) => setApplicantEmail(e.target.value)}
                      className="w-full px-3 py-2 bg-gray-50/50 hover:bg-white focus:bg-white text-sm text-gray-900 border border-gray-200 rounded-lg placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#3C225D] focus:border-[#3C225D] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="font-semibold text-gray-700 block">Target Colleges</label>
                    <input
                      type="text"
                      placeholder="Williams, Amherst, Yale"
                      value={targetSchools}
                      onChange={(e) => setTargetSchools(e.target.value)}
                      className="w-full px-3 py-2 bg-gray-50/50 hover:bg-white focus:bg-white text-sm text-gray-900 border border-gray-200 rounded-lg placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#3C225D] focus:border-[#3C225D] transition-all"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-semibold text-gray-700 block">Upcoming Deadline</label>
                    <input
                      type="text"
                      placeholder="e.g. Oct 15 or Nov 1"
                      value={upcomingDeadline}
                      onChange={(e) => setUpcomingDeadline(e.target.value)}
                      className="w-full px-3 py-2 bg-gray-50/50 hover:bg-white focus:bg-white text-sm text-gray-900 border border-gray-200 rounded-lg placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#3C225D] focus:border-[#3C225D] transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-gray-700 block">
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
                    className="w-full px-3 py-2 bg-gray-50/50 hover:bg-white focus:bg-white text-sm text-gray-900 border border-gray-200 rounded-lg placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#3C225D] focus:border-[#3C225D] transition-all resize-y"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-gray-100">
                  <button
                    type="button"
                    onClick={() => setBookingModalOpen(false)}
                    className="px-4 py-2 text-xs text-gray-500 hover:text-gray-700 cursor-pointer"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-[#1A1A1A] hover:bg-[#3C225D] text-white text-xs font-semibold rounded-lg shadow-xs flex items-center gap-1.5 transition-colors cursor-pointer"
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
                <div className="w-12 h-12 bg-purple-100 text-[#3C225D] rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>

                <div className="space-y-1">
                  <h4 className="text-base font-semibold text-gray-900">
                    {isFgliWaiverRequested ? 'Application Received' : 'Booking Received'}, {applicantName}!
                  </h4>
                  <p className="text-xs text-gray-600 max-w-sm mx-auto leading-relaxed">
                    {isFgliWaiverRequested
                      ? `Thank you for applying for financial assistance. I will review your notes and get in touch directly at ${applicantEmail} regarding pro bono availability.`
                      : `I will review your submission and reply directly to ${applicantEmail} within ${selectedService.turnaroundTime}.`}
                  </p>
                </div>

                {isFgliWaiverRequested && (
                  <div className="p-2.5 bg-purple-50 text-[#3C225D] text-xs font-semibold rounded-lg max-w-xs mx-auto">
                    ✓ Financial Assistance Application Logged
                  </div>
                )}

                <button
                  onClick={() => setBookingModalOpen(false)}
                  className="px-5 py-2 bg-[#1A1A1A] text-white text-xs font-medium rounded-lg hover:bg-[#3C225D] transition-colors cursor-pointer"
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
