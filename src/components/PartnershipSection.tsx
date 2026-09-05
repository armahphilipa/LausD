import React, { useState } from 'react';
import { motion } from 'motion/react';
import { partnershipPillars } from '../data/siteData';
import { InquiryFormData } from '../types';
import { Send, CheckCircle2, Building, Mail, Phone, MapPin, Handshake, ArrowRight, RefreshCw } from 'lucide-react';

export const PartnershipSection: React.FC = () => {
  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    organization: '',
    email: '',
    phone: '',
    interest: 'Investment or funding',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<InquiryFormData | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate seamless submission feedback
    setTimeout(() => {
      setSubmittedData({ ...formData });
      setIsSubmitting(false);
    }, 600);
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFormData({
      name: '',
      organization: '',
      email: '',
      phone: '',
      interest: 'Investment or funding',
      message: '',
    });
  };

  return (
    <section id="partner" className="py-24 sm:py-32 bg-[#202020] text-[#D6D6D6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end pb-12 sm:pb-16 border-b border-[#333533]"
        >
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#FFEE32] uppercase tracking-wider mb-3">
              <span className="w-5 h-[2px] bg-[#FFEE32]" />
              <span>Partnership & funding</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#FFFFFF] leading-[1.12]">
              Build this with us
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-base sm:text-lg text-[#D6D6D6]/80 leading-relaxed">
              We're seeking strategic partnerships, investment, and grant support to scale local manufacturing, expand training, and strengthen distribution across Ghana.
            </p>
          </div>
        </motion.div>

        {/* Main Grid: 4 Pillars + Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-12 items-start">
          {/* Left Column: The 4 Partnership Objectives */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="bg-[#333533] border border-[#333533] rounded-3xl p-6 sm:p-8 shadow-sm">
              <h3 className="font-display font-bold text-xl text-[#FFFFFF] mb-3 flex items-center gap-2">
                <Handshake className="w-5 h-5 text-[#FFEE32]" />
                <span>Our Strategic Partnership Focus</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#D6D6D6]/70 mb-6 leading-relaxed">
                LAUS DEO CONSULT is actively engaging institutional investors, development finance institutions, and marine industry stakeholders around four foundational goals:
              </p>

              <div className="space-y-4">
                {partnershipPillars.map((pillar) => (
                  <div
                    key={pillar.id}
                    id={pillar.id}
                    className="p-4 rounded-2xl bg-[#202020]/70 border border-[#333533] hover:border-[#FFEE32]/50 transition-colors"
                  >
                    <div className="flex items-start gap-3.5">
                      <span className="font-display font-bold text-sm text-[#202020] bg-[#FFEE32] w-7 h-7 rounded-lg flex items-center justify-center shrink-0">
                        {pillar.number}
                      </span>
                      <div>
                        <h4 className="font-display font-semibold text-sm sm:text-base text-[#FFFFFF]">
                          {pillar.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-[#D6D6D6]/70 mt-1 leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Contact Info Card */}
            <div className="bg-[#333533] text-[#D6D6D6] rounded-3xl p-6 sm:p-8 border border-[#333533] shadow-md">
              <h4 className="font-display font-bold text-lg mb-4 text-[#FFFFFF]">
                Direct Coordination Office
              </h4>
              <div className="space-y-3 text-xs sm:text-sm text-[#D6D6D6]/80">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-[#FFEE32] shrink-0" />
                  <span>Takoradi, Ghana (Nationwide & Sub-regional operations)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#FFEE32] shrink-0" />
                  <span>kendudxp@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#FFEE32] shrink-0" />
                  <span>+44 (0) 78 9801 0522 / UK Office Liaison Available</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6"
          >
            <div className="bg-[#333533] border border-[#333533] rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
              {submittedData ? (
                /* Success Confirmation State */
                <div id="inquiry-success-state" className="py-6 text-center space-y-5">
                  <div className="w-16 h-16 rounded-full bg-[#FFEE32]/20 text-[#FFEE32] mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>

                  <div>
                    <h3 className="font-display text-2xl font-bold text-[#FFFFFF]">
                      Inquiry Successfully Received
                    </h3>
                    <p className="text-sm text-[#D6D6D6]/80 mt-2 max-w-md mx-auto">
                      Thank you, <strong className="text-[#FFFFFF]">{submittedData.name}</strong>. Our partnership desk has recorded your inquiry regarding <span className="font-medium text-[#FFEE32]">{submittedData.interest}</span>.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#202020] border border-[#333533] text-left text-xs space-y-1.5 max-w-md mx-auto">
                    <p><strong className="text-[#FFEE32]">Organization:</strong> {submittedData.organization || 'Individual / Independent'}</p>
                    <p><strong className="text-[#FFEE32]">Email:</strong> {submittedData.email}</p>
                    {submittedData.phone && <p><strong className="text-[#FFEE32]">Phone:</strong> {submittedData.phone}</p>}
                    <p><strong className="text-[#FFEE32]">Message summary:</strong> {submittedData.message || 'Standard partnership exploration'}</p>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FFEE32] text-[#202020] text-xs font-bold hover:bg-white transition-colors"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Submit another request</span>
                    </button>
                    <a
                      href="https://wa.me/233000000000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#333533] text-[#D6D6D6] text-xs font-semibold hover:border-[#FFEE32] hover:text-[#FFEE32] transition-colors"
                    >
                      <span>Connect via WhatsApp</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ) : (
                /* Interactive Form */
                <form id="inquiryForm" onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-[#FFFFFF]">
                      Initiate a Partnership
                    </h3>
                    <p className="text-xs sm:text-sm text-[#D6D6D6]/70 mt-1">
                      Fill out this form to connect with our technical and investment leadership.
                    </p>
                  </div>

                  {/* Name & Organization */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-[#D6D6D6]/90 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Samuel Mensah"
                        className="w-full px-4 py-2.5 rounded-xl border border-[#202020] bg-[#202020] text-sm text-[#FFFFFF] placeholder-[#D6D6D6]/40 focus:outline-none focus:border-[#FFEE32] focus:ring-2 focus:ring-[#FFEE32]/20 transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="org" className="block text-xs font-semibold text-[#D6D6D6]/90 mb-1.5">
                        Organization / Agency
                      </label>
                      <input
                        id="org"
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="Company, Ministry, or Fund"
                        className="w-full px-4 py-2.5 rounded-xl border border-[#202020] bg-[#202020] text-sm text-[#FFFFFF] placeholder-[#D6D6D6]/40 focus:outline-none focus:border-[#FFEE32] focus:ring-2 focus:ring-[#FFEE32]/20 transition-all"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-[#D6D6D6]/90 mb-1.5">
                        Official Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@company.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-[#202020] bg-[#202020] text-sm text-[#FFFFFF] placeholder-[#D6D6D6]/40 focus:outline-none focus:border-[#FFEE32] focus:ring-2 focus:ring-[#FFEE32]/20 transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-[#D6D6D6]/90 mb-1.5">
                        Phone / WhatsApp
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+233 XX XXX XXXX"
                        className="w-full px-4 py-2.5 rounded-xl border border-[#202020] bg-[#202020] text-sm text-[#FFFFFF] placeholder-[#D6D6D6]/40 focus:outline-none focus:border-[#FFEE32] focus:ring-2 focus:ring-[#FFEE32]/20 transition-all"
                      />
                    </div>
                  </div>

                  {/* Area of Interest */}
                  <div>
                    <label htmlFor="interest" className="block text-xs font-semibold text-[#D6D6D6]/90 mb-1.5">
                      Partnership Category *
                    </label>
                    <select
                      id="interest"
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#202020] bg-[#202020] text-sm text-[#FFFFFF] focus:outline-none focus:border-[#FFEE32] focus:ring-2 focus:ring-[#FFEE32]/20 transition-all"
                    >
                      <option value="Investment or funding">Investment or funding (Manufacturing expansion)</option>
                      <option value="Grant or development partnership">Grant or development partnership (Boatbuilder training)</option>
                      <option value="Distribution partnership">Distribution partnership (Coastal & inland supply)</option>
                      <option value="Research, testing & certification">Research, testing & product certification</option>
                      <option value="Technical services (coatings, waterproofing, repair)">Technical services (Coatings, waterproofing, repair)</option>
                      <option value="Construction consultancy">Construction consultancy</option>
                      <option value="Other">Other Strategic Opportunity</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-[#D6D6D6]/90 mb-1.5">
                      Project Details or Objectives
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your objectives, target geography, or partnership timeline..."
                      className="w-full px-4 py-2.5 rounded-xl border border-[#202020] bg-[#202020] text-sm text-[#FFFFFF] placeholder-[#D6D6D6]/40 focus:outline-none focus:border-[#FFEE32] focus:ring-2 focus:ring-[#FFEE32]/20 transition-all resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    id="submit-inquiry-btn"
                    disabled={isSubmitting}
                    className="w-full mt-2 bg-[#FFEE32] hover:bg-[#ffe800] text-[#202020] py-3.5 px-6 rounded-full font-bold text-sm tracking-wide flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all cursor-pointer disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <span>Transmitting Inquiry...</span>
                    ) : (
                      <>
                        <span>Send Partnership Inquiry</span>
                        <Send className="w-4 h-4 text-[#202020]" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-[#D6D6D6]/50 mt-2">
                    Confidentiality assured. Responses dispatched within 24 business hours.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
