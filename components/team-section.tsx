"use client";

import { motion } from "framer-motion";
import { Users, Linkedin } from "lucide-react";

const members = [
    {
        name: 'Muhammad Amman Yaqoob',
        role: 'CEO',
        avatar: '/Ceo.jpeg',
        description: 'Visionary leader driving strategic growth and innovation at Blizon.',
        linkedin: 'https://www.linkedin.com/in/aman-yaqoob/'
    },
    {
        name: 'Muhammad Ahmed Bin Zahid',
        role: 'Founder',
        avatar: '/Founder.jpeg',
        description: 'Technical architect and founding force behind Blizon\'s success.',
        linkedin: 'https://www.linkedin.com/in/itsmemabz/'
    },
]

export default function TeamSection() {
    return (
        <section 
            className="py-24 px-4"
            style={{ background: `linear-gradient(135deg, #0F1419 0%, #16325B 50%, #1A2947 100%)` }}
        >
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <Users className="w-8 h-8 text-blue-400" />
                        <h2 className="text-4xl md:text-5xl font-bold text-white">Meet Our Team</h2>
                    </div>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        The visionaries and technical masters behind Blizon's innovative solutions.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {members.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-xl hover:shadow-[0_8px_32px_rgba(255,255,255,0.06)] hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="text-center">
                                <div className="mb-6 inline-block">
                                    <div className="w-24 h-24 rounded-full border-2 border-white/20 p-1 shadow-xl">
                                        <img 
                                            className="w-full h-full rounded-full object-cover" 
                                            src={member.avatar} 
                                            alt={member.name}
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                                
                                <h3 className="text-xl font-bold text-white mb-2">
                                    {member.name}
                                </h3>
                                
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white/10 backdrop-blur-sm mb-4">
                                    <span className="text-sm font-medium text-gray-300">
                                        {member.role}
                                    </span>
                                </div>
                                
                                <p className="text-gray-300 leading-relaxed mb-4">
                                    {member.description}
                                </p>
                                
                                <a 
                                    href={member.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 hover:scale-105"
                                >
                                    <Linkedin className="w-4 h-4" />
                                    <span className="text-sm font-medium">LinkedIn</span>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}