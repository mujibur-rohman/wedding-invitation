"use client";

import React from "react";
import { useThemeContext } from "./providers";
import Image from "next/image";

export default function Quote({ quote, quoteFrom }) {
  const { data } = useThemeContext();

  // Heart SVG component for reusability
  const HeartIcon = ({ className = "", size = 24 }) => (
    <svg
      className={className}
      width={size}
      height={size}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );

  // Decorative flower/leaf SVG
  const FloralDecor = ({ className = "", flip = false }) => (
    <svg
      className={`${className} ${flip ? "scale-x-[-1]" : ""}`}
      width="120"
      height="120"
      viewBox="0 0 100 100"
      fill="none"
    >
      <path
        d="M50 10C50 10 30 30 30 50C30 70 50 90 50 90C50 90 70 70 70 50C70 30 50 10 50 10Z"
        fill="currentColor"
        fillOpacity="0.1"
      />
      <path
        d="M10 50C10 50 30 30 50 30C70 30 90 50 90 50C90 50 70 70 50 70C30 70 10 50 10 50Z"
        fill="currentColor"
        fillOpacity="0.1"
      />
      <circle cx="50" cy="50" r="8" fill="currentColor" fillOpacity="0.2" />
    </svg>
  );

  return (
    <>
      {data.isOpenned ? (
        <section
          id="quote"
          className="relative overflow-hidden bg-gradient-to-b from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f]"
        >
          {/* Background decorative elements */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Gradient blobs */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-rose-900/30 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute top-1/4 right-0 w-64 h-64 bg-amber-900/30 rounded-full blur-3xl opacity-30 translate-x-1/2" />
            <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-pink-900/20 rounded-full blur-3xl opacity-20" />
            <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-rose-900/20 rounded-full blur-3xl opacity-40" />

            {/* Decorative florals */}
            <div className="absolute top-10 left-10 text-rose-800/50 opacity-50">
              <FloralDecor />
            </div>
            <div className="absolute top-10 right-10 text-amber-800/50 opacity-50">
              <FloralDecor flip />
            </div>
            <div className="absolute bottom-10 left-10 text-pink-800/50 opacity-50 rotate-45">
              <FloralDecor />
            </div>
            <div className="absolute bottom-10 right-10 text-rose-800/50 opacity-50 -rotate-45">
              <FloralDecor flip />
            </div>

            {/* Floating hearts */}
            <HeartIcon
              className="absolute top-[15%] left-[10%] text-rose-700/50 opacity-40 animate-pulse"
              size={20}
            />
            <HeartIcon
              className="absolute top-[25%] right-[15%] text-pink-700/50 opacity-30 animate-pulse"
              size={16}
            />
            <HeartIcon
              className="absolute top-[60%] left-[8%] text-rose-700/50 opacity-30 animate-pulse"
              size={14}
            />
            <HeartIcon
              className="absolute top-[70%] right-[10%] text-amber-700/50 opacity-40 animate-pulse"
              size={18}
            />
            <HeartIcon
              className="absolute bottom-[20%] left-[20%] text-pink-700/50 opacity-30 animate-pulse"
              size={12}
            />
          </div>

          <div className="relative z-10 py-16 px-4">
            {/* Bismillah Section */}
            <div
              className="text-center mb-12"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <div className="inline-flex items-center justify-center gap-3 mb-6">
                <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-stone-600 to-stone-500" />
                <HeartIcon className="text-rose-400" size={20} />
                <div className="w-16 h-[1px] bg-gradient-to-l from-transparent via-stone-600 to-stone-500" />
              </div>

              <h2 className="font-arabic text-2xl md:text-3xl text-stone-200 mb-4 leading-relaxed">
                بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
              </h2>

              <h3 className="font-esthetic text-2xl md:text-3xl text-stone-300 mb-6">
                Assalamualaikum Warahmatullahi Wabarakatuh
              </h3>

              <p className="text-stone-400 max-w-lg mx-auto leading-relaxed">
                Tanpa mengurangi rasa hormat, kami mengundang Anda untuk
                berkenan menghadiri acara pernikahan kami:
              </p>
            </div>

            {/* Couple Section */}
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                {/* Bride */}
                <div
                  className="flex-1 text-center"
                  data-aos="fade-right"
                  data-aos-duration="1500"
                >
                  <div className="relative inline-block mb-6">
                    {/* Decorative ring */}
                    <div
                      className="absolute inset-0 rounded-full border-2 border-dashed border-rose-700/50 animate-spin-slow"
                      style={{ animationDuration: "20s" }}
                    />
                    <div className="absolute -inset-3 rounded-full border border-rose-800/30" />
                    <div className="absolute -inset-6 rounded-full border border-rose-900/20" />

                    {/* Photo */}
                    <div className="relative w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-[#252525] shadow-xl shadow-rose-900/30">
                      <Image
                        src="/img/gallery-2.jpeg"
                        alt="Mempelai Wanita"
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Corner hearts */}
                    <div className="absolute -top-2 -right-2 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full p-2 shadow-lg">
                      <HeartIcon className="text-white" size={16} />
                    </div>
                  </div>

                  <h2 className="font-esthetic text-3xl md:text-4xl text-stone-100 mb-3">
                    Dwi Hasti Oktaviani, S.Pd
                  </h2>

                  <div className="inline-block bg-gradient-to-r from-rose-900/30 to-pink-900/30 rounded-2xl px-6 py-4 shadow-sm border border-rose-800/30">
                    <p className="text-rose-400 font-medium mb-2">Putri dari</p>
                    <p className="text-stone-300">
                      Bapak <span className="font-semibold">Nurhasan</span>
                    </p>
                    <p className="text-stone-500 text-sm my-1">&</p>
                    <p className="text-stone-300">
                      Ibu <span className="font-semibold">Sri Maryati</span>
                    </p>
                  </div>
                </div>

                {/* Ampersand */}
                <div
                  className="relative py-4 md:py-0"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-500 to-amber-500 rounded-full blur-2xl opacity-20" />
                    <div className="relative bg-gradient-to-br from-rose-900/50 to-amber-900/50 rounded-full p-6 md:p-8 shadow-lg border border-stone-700">
                      <span className="font-esthetic text-5xl md:text-6xl bg-gradient-to-br from-rose-400 to-amber-400 bg-clip-text text-transparent">
                        &
                      </span>
                    </div>
                  </div>

                  {/* Decorative dots */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                    <div className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  </div>
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    <div className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                    <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                  </div>
                </div>

                {/* Groom */}
                <div
                  className="flex-1 text-center"
                  data-aos="fade-left"
                  data-aos-duration="1500"
                >
                  <div className="relative inline-block mb-6">
                    {/* Decorative ring */}
                    <div
                      className="absolute inset-0 rounded-full border-2 border-dashed border-amber-700/50 animate-spin-slow"
                      style={{
                        animationDuration: "20s",
                        animationDirection: "reverse",
                      }}
                    />
                    <div className="absolute -inset-3 rounded-full border border-amber-800/30" />
                    <div className="absolute -inset-6 rounded-full border border-amber-900/20" />

                    {/* Photo */}
                    <div className="relative w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-[#252525] shadow-xl shadow-amber-900/30">
                      <Image
                        src="/img/gallery-3.jpeg"
                        alt="Mempelai Pria"
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Corner hearts */}
                    <div className="absolute -top-2 -left-2 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full p-2 shadow-lg">
                      <HeartIcon className="text-white" size={16} />
                    </div>
                  </div>

                  <h2 className="font-esthetic text-3xl md:text-4xl text-stone-100 mb-3">
                    Muhammad Said Agil
                  </h2>

                  <div className="inline-block bg-gradient-to-r from-amber-900/30 to-orange-900/30 rounded-2xl px-6 py-4 shadow-sm border border-amber-800/30">
                    <p className="text-amber-400 font-medium mb-2">
                      Putra dari
                    </p>
                    <p className="text-stone-300">
                      Bapak <span className="font-semibold">Asmat</span>
                    </p>
                    <p className="text-stone-500 text-sm my-1">&</p>
                    <p className="text-stone-300">
                      <span className="font-semibold">Almh. Ibu Muharoh</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom decorative */}
            <div className="flex justify-center mt-12">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-rose-600" />
                <div className="w-3 h-3 rounded-full bg-pink-500" />
                <HeartIcon className="text-rose-400 mx-2" size={24} />
                <div className="w-3 h-3 rounded-full bg-pink-500" />
                <div className="w-2 h-2 rounded-full bg-rose-600" />
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
