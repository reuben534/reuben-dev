import React, { useState, useEffect } from 'react';
import {
  Mail,
  Copy,
  Check,
  Send,
  Sparkles,
  MapPin,
  ShieldCheck,
} from 'lucide-react';
import { PERSONAL_INFO, SERVICES } from '../data/portfolioData.ts';

interface MissionAndContactProps {
  initialService?: string;
  initialMessage?: string;
}

export const MissionAndContact: React.FC<MissionAndContactProps> = ({
  initialService,
  initialMessage,
}) => {
  const [selectedService, setSelectedService] = useState<string>(
    initialService || 'Custom Web Applications'
  );
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientCompany, setClientCompany] = useState('');
  const [timeline, setTimeline] = useState('1-2 months');
  const [projectDetails, setProjectDetails] = useState(initialMessage || '');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedBrief, setCopiedBrief] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setSelectedService(initialService);
    }
    if (initialMessage) {
      setProjectDetails(initialMessage);
    }
  }, [initialService, initialMessage]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyBrief = () => {
    const briefText = `PROJECT INQUIRY BRIEF FOR RMK SOLUTIONS
---------------------------------------
Lead Architect: Reuben
Service: ${selectedService}
Client Name: ${clientName || 'Not specified'}
Client Email: ${clientEmail || 'Not specified'}
Company: ${clientCompany || 'Not specified'}
Target Timeline: ${timeline}
Details:
${projectDetails || 'No details provided yet'}`;

    navigator.clipboard.writeText(briefText);
    setCopiedBrief(true);
    setTimeout(() => setCopiedBrief(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project Inquiry: ${selectedService} - ${clientName || 'Client'}`);
    const body = encodeURIComponent(
      `Hi Reuben (RMK Solutions),\n\nI would like to discuss building a project with you.\n\n` +
      `Service: ${selectedService}\n` +
      `Name: ${clientName}\n` +
      `Email: ${clientEmail}\n` +
      `Company/Org: ${clientCompany || 'N/A'}\n` +
      `Target Timeline: ${timeline}\n\n` +
      `Project Scope & Requirements:\n${projectDetails}\n\n` +
      `Looking forward to hearing from you!`
    );

    // Open mail client
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
  };

  const timelineOptions = [
    '2 - 4 Weeks (Sprint)',
    '1 - 2 Months (Standard)',
    '3+ Months (Enterprise)',
    'Flexible / Ongoing',
  ];

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-stone-100/50 dark:bg-[#0e0c0a]/70 border-t border-stone-200/80 dark:border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Section Banner */}
        <div className="mb-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-amber-50/90 via-white to-amber-100/40 dark:from-stone-900/95 dark:via-[#181512] dark:to-stone-900/95 border border-amber-200/90 dark:border-amber-900/40 relative overflow-hidden shadow-md dark:shadow-2xl">
          <div
            className="pointer-events-none absolute -right-20 -bottom-20 w-96 h-96 bg-amber-500/10 dark:bg-amber-600/12 rounded-full blur-3xl -z-0"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-4xl">
            <div className="text-xs font-mono uppercase tracking-wider text-amber-700 dark:text-amber-400 font-semibold mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span>Founder’s Commitment</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight">
              My Mission
            </h2>
            <p className="mt-4 text-base sm:text-lg text-stone-700 dark:text-stone-200 leading-relaxed [text-wrap:balance]">
              {PERSONAL_INFO.mission}
            </p>

            <div className="mt-6 pt-6 border-t border-amber-200/70 dark:border-stone-800/80 flex flex-wrap items-center gap-6 text-xs text-stone-600 dark:text-stone-400">
              <span className="font-semibold text-amber-800 dark:text-amber-300">Reuben</span>
              <span aria-hidden="true" className="text-stone-300 dark:text-stone-700">·</span>
              <span>Founder & Full Stack Developer</span>
              <span aria-hidden="true" className="text-stone-300 dark:text-stone-700">·</span>
              <span>South Africa</span>
            </div>
          </div>
        </div>

        {/* Let's Build Together / Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Quick Actions */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-amber-700 dark:text-amber-400 font-semibold mb-2">
                Initiate Collaboration
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight">
                Let’s Build Together
              </h2>
              <p className="mt-3 text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                Have a new project, business web app, enterprise portal, or want to take an idea to cloud deployment? Share your requirements and let's craft a solution that drives measurable results.
              </p>
            </div>

            {/* Direct Email Card */}
            <div className="p-5 rounded-xl bg-white/90 dark:bg-stone-900/80 border border-stone-200/90 dark:border-stone-800 space-y-3 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                  Direct Inquiries
                </span>
                <span className="text-[11px] font-mono text-emerald-700 dark:text-amber-400 font-semibold">
                  Average Response: &lt; 24h
                </span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-stone-50 dark:bg-stone-950/70 border border-stone-200 dark:border-stone-800/80">
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <span className="text-xs sm:text-sm font-mono text-stone-900 dark:text-stone-100 select-all font-medium">
                    {PERSONAL_INFO.email}
                  </span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 text-xs font-medium text-stone-700 hover:text-stone-950 bg-stone-200/70 hover:bg-stone-200 dark:text-stone-300 dark:hover:text-white dark:bg-stone-800 dark:hover:bg-stone-700 rounded transition-colors flex items-center gap-1.5 shadow-sm"
                  title="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-amber-400" />
                      <span className="text-emerald-700 dark:text-amber-400 font-semibold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Location & Timezone Details */}
            <div className="p-5 rounded-xl bg-white/70 dark:bg-stone-900/50 border border-stone-200/80 dark:border-stone-800 space-y-3 text-xs text-stone-600 dark:text-stone-300 shadow-sm">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                <span>Based in South Africa (GMT+2 / SAST) — Working with global clients.</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                <span>NDA & Confidentiality Agreements available before scope sharing.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Project Scope Planner Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white/95 dark:bg-stone-900/80 border border-stone-200/90 dark:border-stone-800 shadow-lg">
              <div className="flex items-center justify-between pb-4 border-b border-stone-100 dark:border-stone-800 mb-6">
                <div>
                  <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100">Project Scope & Inquiry Planner</h3>
                  <p className="text-xs text-stone-500 dark:text-stone-400">
                    Specify your project parameters for an accurate estimate and architectural plan.
                  </p>
                </div>
              </div>

              {isSubmitted && (
                <div className="mb-6 p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800/80 text-xs text-amber-800 dark:text-amber-200 flex items-center justify-between">
                  <span>
                    Inquiry generated! Your email client has been launched with the pre-filled brief.
                  </span>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="underline text-amber-900 dark:text-amber-300 font-semibold ml-2"
                  >
                    Edit Form
                  </button>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Service Selection */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-2">
                    Service Required
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs text-stone-900 dark:text-white bg-stone-50 dark:bg-stone-950 border border-stone-300/80 dark:border-stone-800 rounded-lg focus:outline-none focus:border-amber-500 transition-colors"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.number}. {s.title}
                      </option>
                    ))}
                    <option value="Full-Stack MERN Application">
                      09. Full-Stack MERN Application (MongoDB, Express, React, Node.js)
                    </option>
                    <option value="Enterprise Architecture Consulting">
                      10. Enterprise Architecture Consulting (.NET & MERN)
                    </option>
                  </select>
                </div>

                {/* Name & Email inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs text-stone-900 dark:text-white bg-stone-50 dark:bg-stone-950 border border-stone-300/80 dark:border-stone-800 rounded-lg focus:outline-none focus:border-amber-500 transition-colors placeholder:text-stone-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs text-stone-900 dark:text-white bg-stone-50 dark:bg-stone-950 border border-stone-300/80 dark:border-stone-800 rounded-lg focus:outline-none focus:border-amber-500 transition-colors placeholder:text-stone-400"
                    />
                  </div>
                </div>

                {/* Company & Timeline */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-2">
                      Company / Organization (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="Acme Enterprises"
                      value={clientCompany}
                      onChange={(e) => setClientCompany(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs text-stone-900 dark:text-white bg-stone-50 dark:bg-stone-950 border border-stone-300/80 dark:border-stone-800 rounded-lg focus:outline-none focus:border-amber-500 transition-colors placeholder:text-stone-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-2">
                      Target Timeline
                    </label>
                    <select
                      value={timeline}
                      onChange={(e) => setTimeline(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs text-stone-900 dark:text-white bg-stone-50 dark:bg-stone-950 border border-stone-300/80 dark:border-stone-800 rounded-lg focus:outline-none focus:border-amber-500 transition-colors"
                    >
                      {timelineOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-2">
                    Project Goals, Features, or Specifications *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Briefly describe what you would like to build, any preferred tech stack (e.g. ASP.NET Core, MERN Stack, React, SQL Server/MongoDB), and target outcomes..."
                    value={projectDetails}
                    onChange={(e) => setProjectDetails(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs text-stone-900 dark:text-white bg-stone-50 dark:bg-stone-950 border border-stone-300/80 dark:border-stone-800 rounded-lg focus:outline-none focus:border-amber-500 transition-colors placeholder:text-stone-400 resize-none"
                  />
                </div>

                {/* Form Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 text-xs font-bold text-white bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 rounded-lg transition-colors shadow-md shadow-amber-900/20 active:translate-y-0.5"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Project Inquiry</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopyBrief}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white bg-stone-100 hover:bg-stone-200/80 dark:bg-stone-800 dark:hover:bg-stone-700 border border-stone-300/80 dark:border-stone-700 rounded-lg transition-colors shadow-sm"
                  >
                    {copiedBrief ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-amber-400" />
                        <span className="text-emerald-700 dark:text-amber-400 font-semibold">Brief Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Brief</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
