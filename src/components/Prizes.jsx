import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Award } from 'lucide-react';

const Prizes = () => {
    const cards = [
        {
            type: 'PRIZE',
            title: '₹2000',
            subtitle: '1st Place',
            desc: 'Cash Prize + Certificate',
            accent: 'border-yellow-400',
            text: 'text-yellow-400',
            bg: 'bg-yellow-400/5',
            icon: <Crown className="text-yellow-400" size={32} />
        },
        {
            type: 'PRIZE',
            title: '₹1000',
            subtitle: '2nd Place',
            desc: 'Cash Prize + Certificate',
            accent: 'border-gray-300',
            text: 'text-gray-300',
            bg: 'bg-gray-300/5',
            icon: <Award className="text-gray-300" size={32} />
        },
        {
            type: 'PRIZE',
            title: '₹500',
            subtitle: '3rd Place',
            desc: 'Cash Prize + Certificate',
            accent: 'border-orange-400',
            text: 'text-orange-400',
            bg: 'bg-orange-400/5',
            icon: <Award className="text-orange-400" size={32} />
        }
    ];

    return (
        <section id="prizes" className="py-20 bg-[#0B1414] relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-10"
                >
                    <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-2">
                        Top <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">Prizes</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {cards.map((card, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="bg-[#111] border border-white/5 p-1 rounded-xl relative group hover:border-white/20 transition-all duration-300"
                        >
                            <div className="bg-[#0B1414]/90 p-6 rounded-lg h-full flex flex-col justify-between min-h-[220px] relative overflow-hidden">
                                {/* Top Decoration */}
                                <div className={`absolute top-0 left-0 w-2 h-full ${card.accent} border-l-2 opacity-50`}></div>
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white/10 to-transparent"></div>

                                <div>
                                    <div className={`inline-block px-2 py-1 mb-4 border ${card.accent} border-opacity-30 rounded text-[10px] font-mono tracking-widest uppercase ${card.text} ${card.bg}`}>
                                        {card.type}
                                    </div>
                                    <h3 className="text-4xl font-orbitron font-bold text-white mb-1 uppercase leading-tight">{card.title}</h3>
                                </div>

                                <div className="mt-8 border-t border-white/10 pt-4 flex items-end justify-between">
                                    <div>
                                        <h4 className={`text-lg font-bold ${card.text}`}>{card.subtitle}</h4>
                                        <p className="text-gray-400 text-xs mt-1 uppercase tracking-wider">{card.desc}</p>
                                    </div>
                                    <div className="opacity-50 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-110 transform">
                                        {card.icon}
                                    </div>
                                </div>

                                {/* Corner Hover Accent */}
                                <div className={`absolute bottom-0 right-0 w-8 h-8 ${card.accent} border-b-2 border-r-2 rounded-br-lg opacity-0 hover:opacity-100 transition-opacity duration-300`}></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Prizes;
