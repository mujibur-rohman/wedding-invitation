"use client";

import GiftCard from "@/components/giftCard";
import React from "react";
import { PiGiftLight, PiHeartFill } from "react-icons/pi";
import { motion, AnimatePresence } from "framer-motion";
import useGift from "@/hooks/useGift";

export default function Gift() {
  const { buttonClickedHandler, isButtonClicked } = useGift();

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const giftData = [
    {
      name: "Muhammad Said Agil",
      rek: "5211462001",
      bank: "Bank Central Asia",
      src: "/img/bca.png",
    },
    {
      name: "Muhammad Said Agil",
      rek: "089530200294",
      bank: "GOPAY",
      src: "/img/gopay.png",
    },
    {
      name: "Dwi Hasti Oktaviani",
      rek: "706551214400",
      bank: "Bank Central Asia",
      src: "/img/cimb.png",
    },
  ];

  return (
    <section
      id="gift"
      className="relative py-16 overflow-hidden bg-gradient-to-b from-stone-100 via-white to-stone-100"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-rose-100 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-amber-100 rounded-full blur-3xl opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-50 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-stone-400" />
            <PiHeartFill className="text-rose-400 text-xl" />
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-stone-400" />
          </div>

          <h2 className="font-esthetic text-4xl md:text-5xl text-stone-800 mb-4">
            Love Gift
          </h2>

          <p className="text-stone-600 max-w-md mx-auto leading-relaxed">
            Doa restu Anda merupakan karunia yang sangat berarti bagi kami.
            Namun jika memberi adalah ungkapan tanda kasih Anda, Anda dapat
            memberi kado melalui:
          </p>
        </div>

        {/* Toggle Button */}
        <div className="text-center mb-10">
          <button
            onClick={buttonClickedHandler}
            className={`inline-flex items-center gap-3 px-8 py-4 rounded-full font-medium text-lg transition-all duration-500 shadow-lg ${
              isButtonClicked
                ? "bg-stone-800 text-white shadow-stone-500/30"
                : "bg-gradient-to-r from-rose-500 to-pink-500 text-white hover:from-rose-600 hover:to-pink-600 shadow-rose-500/30 hover:shadow-rose-500/40 hover:scale-105"
            }`}
          >
            <PiGiftLight className="text-2xl" />
            {isButtonClicked ? "Sembunyikan" : "Kirim Hadiah"}
          </button>
        </div>

        {/* Gift Cards Grid */}
        <AnimatePresence>
          {isButtonClicked && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-8">
                {giftData.map((gift, index) => (
                  <motion.div
                    key={`${gift.name}-${gift.bank}`}
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    variants={cardVariants}
                  >
                    <GiftCard
                      name={gift.name}
                      rek={gift.rek}
                      bank={gift.bank}
                      src={gift.src}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer message */}
        <div className="text-center mt-8 pt-8 border-t border-stone-200">
          <p className="text-stone-500 text-sm leading-relaxed max-w-md mx-auto">
            Kehadiran dan doa restu Anda sudah menjadi hadiah terindah bagi
            kami. Terima kasih atas perhatian dan kasih sayang Anda.
          </p>

          <div className="mt-8">
            <p className="text-stone-400 text-sm uppercase tracking-widest mb-2">
              The Wedding Of
            </p>
            <h3 className="font-esthetic text-3xl md:text-4xl text-stone-700">
              Dwi & Said Agil
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
