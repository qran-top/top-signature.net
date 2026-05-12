/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Phone, MessageCircle, Building2, Mail, MapPin } from 'lucide-react';

export default function App() {
  const contactPhone = "+96599017757";
  const whatsappLink = `https://wa.me/96599017757`;

  return (
    <div className="min-h-screen bg-brand-bg text-white flex flex-col items-center justify-center p-6 selection:bg-brand-gold/30 overflow-x-hidden relative" dir="rtl">
      
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-gold/5 blur-[120px] rounded-full"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 blur-[100px] rounded-full -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold/5 blur-[100px] rounded-full -ml-48 -mb-48"></div>
      </div>

      <main className="relative z-10 w-full max-w-4xl flex flex-col items-center text-center">
        
        {/* Logo Section */}
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="mb-12"
        >
          <div className="relative group">
            {/* 
                INSTRUCTION: Upload your logo to the public folder as 'logo.png'
                This image tag will try to load it, with a fallback icon if not found.
            */}
            <img 
              src="/logo.png" 
              alt="Top Signature Logo" 
              className="max-w-[280px] md:max-w-[420px] h-auto rounded-2xl shadow-2xl shadow-black/50 transition-all duration-700 mix-blend-lighten"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const fallback = e.currentTarget.parentElement?.querySelector('.fallback-icon');
                if (fallback) (fallback as HTMLElement).style.display = 'flex';
              }}
            />
            <div className="fallback-icon hidden w-32 h-32 md:w-48 md:h-48 bg-gradient-to-br from-brand-gold to-yellow-600 rounded-3xl shadow-2xl shadow-brand-gold/20 items-center justify-center mx-auto">
               <Building2 size={80} className="text-white" strokeWidth={1.5} />
            </div>
          </div>
        </motion.div>

        {/* Text Content */}
        <div className="space-y-6 max-w-2xl px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-3 mb-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold/40 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold"></span>
            </span>
            <span className="text-brand-gold text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase font-sans">تحت التطوير | UNDER CONSTRUCTION</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight"
          >
            شركة توب سيجنتشر للـتـطـويـر العقاري
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-base md:text-xl text-neutral-500 font-medium tracking-[0.2em] font-sans"
            dir="ltr"
          >
            TOP SIGNATURE R.E. DEVELOPMENT CO.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-neutral-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed border-t border-white/5 pt-6 mt-6"
          >
            نعمل على تطوير موقعنا الالكتروني الرسمي لنقدم لكم تجربة عقارية فريدة تليق بعملائنا المميزين
          </motion.p>
        </div>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 flex flex-col md:flex-row gap-4 w-full max-w-sm px-6"
        >
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-3 bg-brand-gold text-neutral-900 h-14 rounded-2xl font-bold shadow-xl shadow-brand-gold/10 transition-all hover:bg-yellow-400 active:scale-95 text-lg"
          >
            <MessageCircle size={20} />
            <span>واتساب</span>
          </a>
          <a
            href={`tel:${contactPhone}`}
            className="flex-1 flex items-center justify-center gap-3 bg-white text-neutral-950 h-14 rounded-2xl font-bold shadow-xl transition-all hover:bg-neutral-100 active:scale-95"
          >
            <Phone size={20} />
            <span>اتصل بنا</span>
          </a>
        </motion.div>

        {/* Contact Info (Emails) */}
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.9 }}
           className="mt-12 w-full max-w-sm grid grid-cols-1 gap-3 px-6"
        >
          <div className="flex flex-col gap-2">
            <a 
              href="mailto:Ahmad@top-signature.net" 
              className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl hover:border-brand-gold/50 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-brand-gold/10 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-neutral-900 transition-colors">
                  <Mail size={16} />
                </div>
                <span className="text-sm font-medium text-neutral-300 group-hover:text-white transition-colors font-sans">Ahmad@top-signature.net</span>
              </div>
            </a>
            <a 
              href="mailto:Ohoud@top-signature.net" 
              className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl hover:border-brand-gold/50 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-brand-gold/10 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-neutral-900 transition-colors">
                  <Mail size={16} />
                </div>
                <span className="text-sm font-medium text-neutral-300 group-hover:text-white transition-colors font-sans">Ohoud@top-signature.net</span>
              </div>
            </a>
          </div>
        </motion.div>

        {/* Simplified Footer */}
        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="mt-16 flex flex-col items-center gap-6 text-neutral-600 pb-12"
        >
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest">
            <MapPin size={18} className="text-brand-gold" />
            <span>الكويت - KUWAIT</span>
          </div>
          <div className="py-2 px-6 bg-white/5 rounded-full border border-white/5">
            <p className="text-[9px] md:text-[10px] tracking-[0.2em] font-bold uppercase text-neutral-500">
              © {new Date().getFullYear()} TOP SIGNATURE R.E. DEVELOPMENT - ALL RIGHTS RESERVED
            </p>
          </div>
        </motion.footer>
      </main>
    </div>
  );
}

