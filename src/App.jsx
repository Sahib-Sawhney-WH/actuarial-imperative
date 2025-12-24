import React, { useState, useEffect } from 'react';
import { 
  Activity, 
  Brain, 
  TrendingUp, 
  ShieldAlert, 
  Users, 
  Database, 
  Clock, 
  ArrowRight, 
  CheckCircle, 
  XCircle,
  BarChart3,
  PieChart,
  Target,
  Zap,
  ChevronDown,
  ChevronUp,
  Layout,
  Menu,
  X
} from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { id: 'risk', label: 'The Risk' },
    { id: 'solution', label: 'The Solution' },
    { id: 'stakeholders', label: 'Stakeholder ROI' },
    { id: 'moat', label: 'The Moat' },
    { id: 'roadmap', label: 'Roadmap' },
    { id: 'impact', label: 'Financial Impact' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-200">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
              <Brain className="h-8 w-8 text-blue-600" />
              <span className="font-bold text-xl tracking-tight text-slate-900">Actuarial<span className="text-blue-600">Imperative</span></span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.id ? 'text-blue-600' : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-500 hover:text-slate-900">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-md"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        <HeroSection onStart={() => scrollToSection('risk')} />
        <RiskSection />
        <SolutionSection />
        <StakeholderSection onViewRoadmap={() => scrollToSection('roadmap')} />
        <MoatSection />
        <ImplementationSection />
        <FinancialImpactSection />
        <FooterSection />
      </main>
    </div>
  );
};

/* --- Section Components --- */

const HeroSection = ({ onStart }) => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 text-center z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-sm font-medium mb-6">
          <Activity size={16} />
          <span>Strategic Prospectus 2026</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
          Predictive Intelligence for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">Neurodegenerative Age</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
          Transforming Managed Medicare volatility into sustainable value. The diagnostic acceleration is coming. Are you prepared for the 2026 cliff?
        </p>
        <button 
          onClick={onStart}
          className="group bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 flex items-center gap-2 mx-auto"
        >
          Explore The Imperative
          <ArrowRight className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

const RiskSection = () => {
  const risks = [
    {
      title: "The Cost Reality",
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      stat: "$52,000",
      context: "Annual bundled cost per member",
      desc: "New therapies (Leqembi, Kisunla) create massive, unbudgeted risks. Unmanaged, this represents a $35.4M surge per 100k members in Year 1.",
      color: "border-yellow-500/50 bg-yellow-50"
    },
    {
      title: "Diagnostic Velocity",
      icon: <Activity className="w-6 h-6 text-red-500" />,
      stat: "Exponential",
      context: "Shift to Blood-Based Biomarkers",
      desc: "Testing is shifting from complex PET scans to simple blood tests (p-tau217). This will drive a 300%+ increase in diagnosed populations by Q4 2026.",
      color: "border-red-500/50 bg-red-50"
    },
    {
      title: "Regulatory Cliff",
      icon: <ShieldAlert className="w-6 h-6 text-orange-500" />,
      stat: "$2,000 Cap",
      context: "IRA Out-of-Pocket Impact",
      desc: "Members hit the $2,000 OOP cap by February, transferring 100% of liability to plans. Part D negotiation is locked out until 2028+.",
      color: "border-orange-500/50 bg-orange-50"
    }
  ];

  return (
    <section id="risk" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">The Systemic Risk</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            The convergence of high-cost therapies, diagnostic transformation, and regulatory constraints creates an unprecedented emergency.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {risks.map((risk, index) => (
            <div key={index} className={`p-8 rounded-2xl border-l-4 shadow-sm hover:shadow-md transition-shadow ${risk.color}`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-white rounded-lg shadow-sm">
                  {risk.icon}
                </div>
                <h3 className="font-bold text-xl text-slate-800">{risk.title}</h3>
              </div>
              <div className="mb-4">
                <span className="block text-4xl font-extrabold text-slate-900 mb-1">{risk.stat}</span>
                <span className="text-sm font-semibold uppercase tracking-wider text-slate-500">{risk.context}</span>
              </div>
              <p className="text-slate-700 leading-relaxed">
                {risk.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-slate-900 rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-bold mb-2 flex items-center gap-2">
              <TrendingUp className="text-red-400" />
              The "Laggard Penalty"
            </h4>
            <p className="text-slate-300">
              Plans delaying action face 2.8-3.5 point MLR deterioration and forced market exits within 22 months.
            </p>
          </div>
          <div className="shrink-0 text-right">
            <span className="block text-3xl font-bold text-red-400">$42.7M</span>
            <span className="text-sm text-slate-400">Unmanaged Risk (per 100k lives)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const SolutionSection = () => {
  const [activeLayer, setActiveLayer] = useState(0);

  const layers = [
    {
      title: "1. Deal Engineering",
      subtitle: "Structuring the Risk",
      icon: <Layout className="w-6 h-6" />,
      content: "We don't just manage care; we structure the financial risk. This involves engineering optimal spreads, risk corridors (±2-3% inner bands), and specific stop-loss mechanisms ($250k-$500k) tailored to VBC. It enables organizations to take downside risk with appropriate guardrails."
    },
    {
      title: "2. Data & AI Layer",
      subtitle: "High-Value Predictors",
      icon: <Database className="w-6 h-6" />,
      content: "Moving beyond lagged claims. Our 80/20 model combines 80% Retrospective Claims (CMS LDS) with 20% Prospective Signals (EMR/SDOH). We predict diagnostic velocity 12-24 months before a claim is filed, identifying 'Diagnostic Deserts' and hidden caregiver burnout costs."
    },
    {
      title: "3. The Moat",
      subtitle: "Pre-Pharmaceutical Intervention",
      icon: <ShieldAlert className="w-6 h-6" />,
      content: "The only defensible market position. We identify at-risk members 18-24 months pre-diagnosis through nutrition/dietary patterns. We deploy lifestyle interventions (Mediterranean diet, caregiver support) that delay therapy initiation, saving $52k per member-year."
    }
  ];

  return (
    <section id="solution" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">The Strategic Framework</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A three-layer approach to transforming volatility into value.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Graphic */}
          <div className="space-y-4">
            {layers.map((layer, index) => (
              <div 
                key={index}
                onClick={() => setActiveLayer(index)}
                className={`cursor-pointer p-6 rounded-xl border-2 transition-all duration-300 transform ${
                  activeLayer === index 
                    ? 'border-blue-600 bg-white shadow-lg scale-105' 
                    : 'border-slate-200 bg-white/50 hover:border-blue-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-full ${activeLayer === index ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-500'}`}>
                      {layer.icon}
                    </div>
                    <div>
                      <h3 className={`font-bold text-lg ${activeLayer === index ? 'text-blue-900' : 'text-slate-700'}`}>
                        {layer.title}
                      </h3>
                      <p className="text-sm text-slate-500">{layer.subtitle}</p>
                    </div>
                  </div>
                  {activeLayer === index && <ChevronDown className="text-blue-600" />}
                </div>
                
                <div className={`mt-4 text-slate-600 leading-relaxed overflow-hidden transition-all duration-500 ${activeLayer === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                  {layer.content}
                </div>
              </div>
            ))}
          </div>

          {/* Visual Side */}
          <div className="relative h-[500px] bg-slate-900 rounded-2xl p-8 flex flex-col justify-center items-center text-center shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-grid-slate-800/[0.2] bg-[size:20px_20px]" />
            
            {/* Dynamic Content Display */}
            <div className="z-10 transition-all duration-500 transform key={activeLayer}">
              <div className="bg-blue-600 w-20 h-20 mx-auto rounded-2xl flex items-center justify-center mb-6 shadow-blue-500/50 shadow-lg">
                {layers[activeLayer].icon}
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">{layers[activeLayer].subtitle}</h3>
              <p className="text-blue-100 max-w-md mx-auto mb-8">
                {activeLayer === 0 && "Targeting 85-88% MLR with 3-5% margin buffers via smart contracting."}
                {activeLayer === 1 && "Ingesting CMS LDS + EMR Feeds to predict utilization velocity."}
                {activeLayer === 2 && "Creating a proprietary dataset of pre-diagnostic nutrition & SDOH markers."}
              </p>
              
              <div className="flex gap-4 justify-center">
                <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
                  <span className="block text-2xl font-bold text-teal-400">
                    {activeLayer === 0 ? "3-8%" : activeLayer === 1 ? "12-24mo" : "16:1"}
                  </span>
                  <span className="text-xs text-slate-400 uppercase">
                    {activeLayer === 0 ? "Risk Corridor" : activeLayer === 1 ? "Lead Time" : "ROI"}
                  </span>
                </div>
                 <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
                  <span className="block text-2xl font-bold text-teal-400">
                    {activeLayer === 0 ? "110%" : activeLayer === 1 ? "80/20" : "43:1"}
                  </span>
                  <span className="text-xs text-slate-400 uppercase">
                    {activeLayer === 0 ? "Agg. Stop Loss" : activeLayer === 1 ? "Data Mix" : "Prevention ROI"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StakeholderSection = ({ onViewRoadmap }) => {
  const [activeTab, setActiveTab] = useState('ma');

  const data = {
    ma: {
      label: "Medicare Advantage",
      risk: "$42.7M Risk (per 100k)",
      riskDesc: "MLR deterioration of 2.8-3.5 points due to unmanaged diagnostic surge and Part D catastrophic cliff.",
      upside: "2.7:1 ROI",
      drivers: [
        { label: "MLR Stabilization", val: "$22M" },
        { label: "Cost Avoidance", val: "$8.5M" },
        { label: "Star Ratings", val: "$3M" }
      ]
    },
    aco: {
      label: "ACOs / Health Systems",
      risk: "TCOC Hemorrhage",
      riskDesc: "$4.19M overage per 15k lives wipes out Shared Savings. Global budget breaches trigger $13.5M in stop-loss.",
      upside: "11.6:1 ROI",
      drivers: [
        { label: "Shared Savings Protected", val: "$2.8M" },
        { label: "Hospitalization Reduction", val: "$1.1M" },
        { label: "GUIDE Revenue", val: "$450K" }
      ]
    },
    csnp: {
      label: "C-SNPs",
      risk: "Existential Threat",
      riskDesc: "42% cognitive comorbidity rate in Diabetes/CHF plans. 12 regional plans exited 2024-2025.",
      upside: "17.9:1 ROI",
      drivers: [
        { label: "Enrollment Growth", val: "12-15%" },
        { label: "Preventive Savings", val: "$131M" },
        { label: "Risk Adj. Lift", val: "8-12%" }
      ]
    },
    pharma: {
      label: "Pharma / PBM",
      risk: "Access Restrictions",
      riskDesc: "CMS/Payers implementing draconian prior auth. Diagnostic deserts limiting market penetration.",
      upside: "Market Expansion",
      drivers: [
        { label: "Faster Penetration", val: "15-20%" },
        { label: "Adherence Improvement", val: "22%" },
        { label: "Rebate Optimization", val: "8-12%" }
      ]
    }
  };

  const current = data[activeTab];

  return (
    <section id="stakeholders" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Stakeholder Impact Analysis</h2>
          <p className="text-lg text-slate-600">Select your organization type to calculate impact.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(data).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeTab === key 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {data[key].label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Risk Card */}
          <div className="bg-red-50 border border-red-100 rounded-2xl p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <ShieldAlert size={120} className="text-red-600" />
            </div>
            <div className="relative z-10">
              <h3 className="text-red-600 font-bold tracking-wider uppercase text-sm mb-2">The Exposure</h3>
              <div className="text-3xl font-extrabold text-slate-900 mb-4">{current.risk}</div>
              <p className="text-slate-700 mb-6 min-h-[80px]">{current.riskDesc}</p>
              <div className="h-2 w-full bg-red-200 rounded-full overflow-hidden">
                <div className="h-full bg-red-500 w-[85%]"></div>
              </div>
              <p className="text-xs text-red-500 mt-2 font-medium">Critical Vulnerability Level</p>
            </div>
          </div>

          {/* Upside Card */}
          <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <TrendingUp size={120} className="text-emerald-600" />
            </div>
            <div className="relative z-10">
              <h3 className="text-emerald-600 font-bold tracking-wider uppercase text-sm mb-2">Strategic Upside</h3>
              <div className="text-3xl font-extrabold text-slate-900 mb-4">{current.upside}</div>
              
              <div className="space-y-4">
                {current.drivers.map((driver, idx) => (
                  <div key={idx} className="flex justify-between items-center border-b border-emerald-100 pb-2 last:border-0">
                    <span className="text-slate-700 font-medium">{driver.label}</span>
                    <span className="text-emerald-700 font-bold">{driver.val}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                 <button 
                   onClick={onViewRoadmap}
                   className="w-full py-2 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-500 transition-colors"
                 >
                   View Implementation Roadmap
                 </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MoatSection = () => {
  return (
    <section id="moat" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The Proprietary Moat</h2>
          <p className="text-xl text-slate-400 max-w-3xl">
            Why 2026 is the window. Comparing the standard "Pharmacy-Centric" model vs. our "Pre-Pharmaceutical" Intelligence.
          </p>
        </div>

        <div className="space-y-8">
          {/* Timeline Comparison */}
          <div className="relative border-l-2 border-slate-700 ml-4 md:ml-0 space-y-12">
            {/* Phase 1 */}
            <div className="relative flex flex-col md:flex-row gap-8 md:items-start group">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-600 group-hover:bg-blue-500 transition-colors md:hidden"></div>
              
              <div className="md:w-1/3 md:text-right md:pr-8">
                <span className="inline-block px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-sm font-bold mb-2">T-Minus 18 Months</span>
                <h3 className="text-xl font-bold text-white">Intervention Window</h3>
              </div>
              
              <div className="hidden md:block absolute left-1/3 -ml-[9px] w-4 h-4 rounded-full bg-slate-600 group-hover:bg-blue-500 transition-colors"></div>

              <div className="md:w-2/3 bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-colors">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-red-400 font-bold mb-2">Competitors (Reactive)</h4>
                    <ul className="text-slate-400 text-sm space-y-2">
                      <li className="flex gap-2"><XCircle size={16} /> Blind to pre-clinical signals</li>
                      <li className="flex gap-2"><XCircle size={16} /> Waiting for claims data</li>
                      <li className="flex gap-2"><XCircle size={16} /> No relationship with member</li>
                    </ul>
                  </div>
                  <div className="border-l border-slate-700 pl-6">
                    <h4 className="text-teal-400 font-bold mb-2">Our Platform (Proactive)</h4>
                    <ul className="text-slate-300 text-sm space-y-2">
                      <li className="flex gap-2"><CheckCircle size={16} className="text-teal-400" /> Nutrition/Dietary assessment</li>
                      <li className="flex gap-2"><CheckCircle size={16} className="text-teal-400" /> Caregiver burden analysis</li>
                      <li className="flex gap-2"><CheckCircle size={16} className="text-teal-400" /> Start lifestyle intervention</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="relative flex flex-col md:flex-row gap-8 md:items-start group">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-600 group-hover:bg-blue-500 transition-colors md:hidden"></div>
              <div className="md:w-1/3 md:text-right md:pr-8">
                <span className="inline-block px-3 py-1 rounded-full bg-blue-900 text-blue-300 text-sm font-bold mb-2">Diagnosis Event</span>
                <h3 className="text-xl font-bold text-white">The "Trust" Advantage</h3>
              </div>
              <div className="hidden md:block absolute left-1/3 -ml-[9px] w-4 h-4 rounded-full bg-slate-600 group-hover:bg-blue-500 transition-colors"></div>
              <div className="md:w-2/3 bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-colors">
                 <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-red-400 font-bold mb-2">Traditional UM</h4>
                    <p className="text-sm text-slate-400">Adversarial "Prior Auth" battle. Member & Provider vs. Payer. High appeal rates and low Star Ratings.</p>
                  </div>
                  <div className="border-l border-slate-700 pl-6">
                    <h4 className="text-teal-400 font-bold mb-2">Our Platform</h4>
                    <p className="text-sm text-slate-300">Collaborative transition. "We've tried lifestyle optimization, now let's coordinate therapy." Faster access for appropriate patients.</p>
                  </div>
                </div>
              </div>
            </div>

             {/* Phase 3 */}
            <div className="relative flex flex-col md:flex-row gap-8 md:items-start group">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-600 group-hover:bg-blue-500 transition-colors md:hidden"></div>
              <div className="md:w-1/3 md:text-right md:pr-8">
                <span className="inline-block px-3 py-1 rounded-full bg-teal-900 text-teal-300 text-sm font-bold mb-2">Long Term Value</span>
                <h3 className="text-xl font-bold text-white">Economic Outcome</h3>
              </div>
              <div className="hidden md:block absolute left-1/3 -ml-[9px] w-4 h-4 rounded-full bg-slate-600 group-hover:bg-blue-500 transition-colors"></div>
              <div className="md:w-2/3 bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-extrabold text-teal-400">43:1</div>
                  <div>
                    <h4 className="font-bold text-white">Return on Intervention</h4>
                    <p className="text-sm text-slate-400">14-month delay in therapy = $60,666 avoided cost vs $1,400 intervention cost.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ImplementationSection = () => {
  const phases = [
    {
      phase: "Phase 1: Pilot Launch",
      time: "Q1 2026",
      desc: "Secure 3 Anchor Clients (Mid-sized MA plan, Regional ACO, Health system).",
      details: ["Data integration (CMS LDS, EMR)", "Baseline model calibration", "Identify 200-300 high-risk members"]
    },
    {
      phase: "Phase 2: Scale & Validate",
      time: "Q2-Q3 2026",
      desc: "Expansion to 8-12 plans. Launch PBM module. Validate with FDA approval of blood biomarkers.",
      details: ["Real-time neurologist alerting", "Publish white paper with pilot results", "GUIDE Model reporting automation"]
    },
    {
      phase: "Phase 3: Market Dominance",
      time: "Q4 2026 - 2027",
      desc: "Capture 25-35% of MA industry. 40-50% of GUIDE participants.",
      details: ["Expand to GLP-1 forecasting", "CMS IRA negotiation support", "Cell/gene therapy stop-loss predictor"]
    },
    {
      phase: "Phase 4: Ecosystem",
      time: "2028+",
      desc: "Multi-drug class volatility forecasting beyond AD/MCI.",
      details: ["International expansion", "Outcomes-based risk sharing", "Rare disease & gene therapy modules"]
    }
  ];

  return (
    <section id="roadmap" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Implementation Roadmap</h2>
          <p className="text-lg text-slate-600">Speed to Value: From Pilot to Market Dominance</p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-blue-100"></div>

          <div className="space-y-12">
            {phases.map((item, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 -ml-3 w-6 h-6 rounded-full bg-blue-600 border-4 border-white shadow-md z-10"></div>

                {/* Content */}
                <div className="ml-12 md:ml-0 md:w-1/2 p-6 bg-slate-50 rounded-xl border border-slate-200 hover:border-blue-400 transition-colors shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-slate-900">{item.phase}</h3>
                    <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold whitespace-nowrap">{item.time}</span>
                  </div>
                  <p className="text-slate-600 mb-4 text-sm">{item.desc}</p>
                  <ul className="space-y-2">
                    {item.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-500">
                        <CheckCircle size={14} className="text-blue-600 mt-0.5 shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Empty Space for alignment */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const FinancialImpactSection = () => {
  // Simple CSS based bar chart visualization
  return (
    <section id="impact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">5-Year Value Creation</h2>
          <p className="text-lg text-slate-600">The divergent paths of predictive intelligence vs. reactive scrambling.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 overflow-hidden border border-slate-200">
          <div className="flex flex-col md:flex-row gap-12">
            
            {/* Chart Area */}
            <div className="flex-1">
              <h3 className="text-xl font-bold text-slate-800 mb-8">Cumulative Industry Cost vs. Savings (2025-2030)</h3>
              
              <div className="space-y-8">
                {/* Bar 1 */}
                <div>
                  <div className="flex justify-between text-sm font-medium mb-2">
                    <span className="text-red-600">Unmanaged Scenario Cost</span>
                    <span className="text-slate-900 font-bold">$110 Billion</span>
                  </div>
                  <div className="h-10 bg-slate-100 rounded-full overflow-hidden relative">
                    <div className="absolute top-0 left-0 h-full bg-red-500 w-full animate-[width_1s_ease-out]"></div>
                  </div>
                  <p className="text-xs text-slate-500 mt-2">Driven by 3.2pt MLR deterioration and lost Star Ratings.</p>
                </div>

                {/* Bar 2 */}
                <div>
                  <div className="flex justify-between text-sm font-medium mb-2">
                    <span className="text-blue-600">Platform-Enabled Value Creation</span>
                    <span className="text-slate-900 font-bold">$78 Billion</span>
                  </div>
                  <div className="h-10 bg-slate-100 rounded-full overflow-hidden relative">
                    <div className="absolute top-0 left-0 h-full bg-blue-600 w-[70%] animate-[width_1.5s_ease-out]"></div>
                  </div>
                  <p className="text-xs text-slate-500 mt-2">Includes cost avoidance, retention, and ratings protection.</p>
                </div>
              </div>

              <div className="mt-12 grid grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-slate-900">25:1</div>
                  <div className="text-sm text-slate-600">MA Plan ROI</div>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-slate-900">16:1</div>
                  <div className="text-sm text-slate-600">C-SNP ROI</div>
                </div>
              </div>
            </div>

            {/* Context/Summary */}
            <div className="md:w-1/3 bg-slate-900 rounded-xl p-8 text-white flex flex-col justify-between">
              <div>
                <h4 className="text-2xl font-bold mb-4">The Conclusion</h4>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  The Alzheimer's/MCI bubble will reshape Medicare. The choice is binary: Absorb the cost shock in real-time and face market exit, or deploy predictive intelligence to turn volatility into an asset.
                </p>
                <div className="border-t border-slate-700 pt-6">
                  <h5 className="font-bold text-teal-400 mb-2">Immediate Action Required</h5>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex items-center gap-2"><ArrowRight size={14} /> Q1 2026 Pilot Launch</li>
                    <li className="flex items-center gap-2"><ArrowRight size={14} /> Data Assessment (LDS/EMR)</li>
                    <li className="flex items-center gap-2"><ArrowRight size={14} /> Diagnostic Benchmarking</li>
                  </ul>
                </div>
              </div>
              <a 
                href="./Actuarial_Imperative_Prospectus.pdf" 
                download="Actuarial_Imperative_Prospectus.pdf"
                className="block w-full mt-8 bg-white text-slate-900 font-bold py-3 rounded-lg hover:bg-blue-50 transition-colors text-center flex items-center justify-center"
              >
                Download Full Prospectus
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

const FooterSection = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <Brain className="h-6 w-6 text-blue-600" />
          <span className="font-bold text-lg text-white">Actuarial<span className="text-blue-600">Imperative</span></span>
        </div>
        <div className="text-sm text-center md:text-right">
          <p>© 2025 Strategic Prospectus. Developed by Preet Sawhney.</p>
          <p className="mt-1">Predictive Intelligence for the Neurodegenerative Age.</p>
        </div>
      </div>
    </footer>
  );
};

export default App;