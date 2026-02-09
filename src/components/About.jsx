import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 bg-[#0B1414] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white mb-2">
                        About <span className="text-primary">DSC</span>
                    </h2>
                    <h3 className="text-lg md:text-xl font-mono text-gray-400 mb-8 tracking-wider">
                        Developer Student Club SRM IST RMP
                    </h3>
                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light">
                        We are a vibrant student club bringing together passionate minds from diverse domains —
                        <span className="text-primary"> Operations</span>, <span className="text-cyan-400">Technical</span>, and <span className="text-pink-400">Creatives</span>.
                        United by curiosity and collaboration, we learn, build, and grow as a community,
                        turning ideas into impactful experiences both on campus and beyond.
                    </p>
                </motion.div>
            </div>

            {/* Subtle background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>
        </section>
    );
};

export default About;
