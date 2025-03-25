"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { achievementsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiAward, FiExternalLink, FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function Achievements() {
    const { ref } = useSectionInView("Achievements");

    const [currentCertificates, setCurrentCertificates] = useState(
        achievementsData.map(() => 0)
    );

    const changeCertificate = (achievementIndex: number, direction: 'next' | 'prev') => {
        setCurrentCertificates(prev => {
            const newState = [...prev];
            const certificatesCount = achievementsData[achievementIndex].certificates.length;

            if (direction === 'next') {
                newState[achievementIndex] = (newState[achievementIndex] + 1) % certificatesCount;
            } else {
                newState[achievementIndex] = (newState[achievementIndex] - 1 + certificatesCount) % certificatesCount;
            }

            return newState;
        });
    };

    return (
        <section
            id="achievements"
            ref={ref}
            className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
        >
            <SectionHeading>My Achievements</SectionHeading>

            <div className="flex items-center justify-center mb-8">
                <FiAward className="text-5xl text-yellow-500 mr-4" />
                <p className="text-lg text-gray-700 dark:text-white/80 max-w-lg">
                    Professional certifications and recognitions that demonstrate my commitment to excellence
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                {achievementsData.map((achievement, achievementIndex) => {
                    const currentCertIndex = currentCertificates[achievementIndex];
                    const currentCertificate = achievement.certificates[currentCertIndex];
                    const hasMultipleCertificates = achievement.certificates.length > 1;

                    return (
                        <motion.div
                            key={achievementIndex}
                            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 dark:bg-white/10 border border-gray-200 dark:border-white/10"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: achievementIndex * 0.2,
                                ease: "easeOut"
                            }}
                            viewport={{ once: true }}
                        >
                            <div className="relative h-60 w-full bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/30 dark:to-gray-900/50">
                                {/* الصورة الحالية */}
                                <Image
                                    src={currentCertificate.imageUrl}
                                    alt={currentCertificate.name}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    style={{ objectFit: "contain" }}
                                    className="p-4 hover:scale-105 transition-transform duration-300"
                                />

                                {/* أزرار التنقل بين الشهادات */}
                                {hasMultipleCertificates && (
                                    <>
                                        <button
                                            onClick={() => changeCertificate(achievementIndex, 'prev')}
                                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-md hover:bg-white dark:hover:bg-gray-800 transition-colors z-10"
                                        >
                                            <FiChevronLeft className="text-gray-700 dark:text-white" />
                                        </button>
                                        <button
                                            onClick={() => changeCertificate(achievementIndex, 'next')}
                                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-md hover:bg-white dark:hover:bg-gray-800 transition-colors z-10"
                                        >
                                            <FiChevronRight className="text-gray-700 dark:text-white" />
                                        </button>
                                    </>
                                )}

                                {/* عدد الشهادات ورقم الشهادة الحالية */}
                                {hasMultipleCertificates && (
                                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                                        {currentCertIndex + 1} / {achievement.certificates.length}
                                    </div>
                                )}

                                {/* تاريخ الشهادة */}
                                <div className="absolute top-3 right-3 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                                    {currentCertificate.date}
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-xl font-bold text-gray-800 dark:text-white/90">
                                        {achievement.title}
                                    </h3>
                                    {hasMultipleCertificates && (
                                        <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded">
                                            {achievement.certificates.length} certificates
                                        </span>
                                    )}
                                </div>

                                <h4 className="text-lg font-semibold text-gray-700 dark:text-white/80 mb-2">
                                    {currentCertificate.name}
                                </h4>

                                <p className="text-gray-600 dark:text-white/70 mb-4 text-sm">
                                    {achievement.description}
                                </p>

                                <Link
                                    href={currentCertificate.link}
                                    target="_blank"
                                    className="inline-flex items-center justify-center w-full px-4 py-2 mt-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg hover:from-blue-600 hover:to-blue-800 transition-all duration-300 font-medium text-sm"
                                >
                                    View Certificate <FiExternalLink className="ml-2" />
                                </Link>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            <motion.div
                className="mt-16 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl shadow-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
            >
                <p className="text-gray-700 dark:text-white/80 italic">
                    &quot;Continuous learning and professional development are key parts of my journey as a developer.&quot;
                </p>
            </motion.div>
        </section>
    );
} 