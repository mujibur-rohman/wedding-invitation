"use client";

import GiftCard from "@/components/giftCard";
import React from "react";
import { PiGiftLight, PiHeartFill, PiMapPinFill, PiCopySimpleLight, PiCheckCircleFill } from "react-icons/pi";
import { motion, AnimatePresence } from "framer-motion";
import useGift from "@/hooks/useGift";

export default function Gift() {
  const { buttonClickedHandler, isButtonClicked } = useGift();
  const [addressCopied, setAddressCopied] = React.useState(false);

  const addressData = {
    name: "Dwi Hasti Oktaviani / Muhammad Said Agil",
    address: "Kp. Karang Tengah RT 03 RW 010, Desa Pusaka Rakyat, Kec. Tarumajaya, Kab. Bekasi, Jawa Barat 17214",
    phone: "089530200294",
  };

  const handleCopyAddress = () => {
    const fullAddress = `${addressData.name}\n${addressData.address}\nNo. HP: ${addressData.phone}`;
    navigator.clipboard.writeText(fullAddress);
    setAddressCopied(true);
    setTimeout(() => setAddressCopied(false), 2000);
  };

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
      bank: "Bank Cimb Niaga",
      src: "/img/cimb.png",
    },
    {
      name: "Dwi Hasti Oktaviani",
      rek: "0895372483231",
      bank: "GOPAY",
      src: "/img/gopay.png",
    },
  ];

  return (
    <section
      id="gift"
      className="relative py-16 overflow-hidden bg-gradient-to-b from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f]"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-rose-900/30 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-amber-900/30 rounded-full blur-3xl opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-900/20 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-stone-500" />
            <PiHeartFill className="text-rose-400 text-xl" />
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-stone-500" />
          </div>

          <h2 className="font-esthetic text-4xl md:text-5xl text-stone-100 mb-4">
            Love Gift
          </h2>

          <p className="text-stone-400 max-w-md mx-auto leading-relaxed">
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
                ? "bg-stone-700 text-stone-200 shadow-stone-900/30 border border-stone-600"
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

              {/* Address Card for Physical Gift */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="mt-4"
              >
                <div className="relative overflow-hidden bg-[#1a1a1a]/95 backdrop-blur-sm rounded-2xl shadow-lg border border-stone-700/50 max-w-lg mx-auto">
                  {/* Decorative elements */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-emerald-900/30 to-teal-900/20 rounded-full opacity-60" />
                  <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-tr from-green-900/30 to-emerald-900/20 rounded-full opacity-60" />

                  {/* Header */}
                  <div className="relative z-10 pt-6 pb-4 px-6 text-center border-b border-stone-700/50">
                    <div className="inline-flex items-center justify-center bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full p-3 mb-3 shadow-lg shadow-emerald-500/30">
                      <PiMapPinFill className="text-2xl text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-stone-100">Kirim Kado</h3>
                    <p className="text-xs text-stone-400 mt-1">Alamat pengiriman hadiah fisik</p>
                  </div>

                  {/* Address details */}
                  <div className="relative z-10 px-6 py-5">
                    <div className="bg-gradient-to-r from-[#252525] to-[#2a2a2a] rounded-xl p-4 mb-4 border border-stone-700/30">
                      <div className="space-y-3">
                        <div>
                          <p className="text-xs text-stone-500 mb-1">Penerima</p>
                          <p className="text-stone-200 font-medium">{addressData.name}</p>
                        </div>
                        <div>
                          <p className="text-xs text-stone-500 mb-1">Alamat</p>
                          <p className="text-stone-300 text-sm leading-relaxed">{addressData.address}</p>
                        </div>
                        <div>
                          <p className="text-xs text-stone-500 mb-1">No. HP</p>
                          <p className="text-stone-200 font-medium">{addressData.phone}</p>
                        </div>
                      </div>
                    </div>

                    {/* Copy button */}
                    <button
                      onClick={handleCopyAddress}
                      className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium transition-all duration-300 ${
                        addressCopied
                          ? "bg-green-600 text-white shadow-lg shadow-green-600/30"
                          : "bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:from-emerald-500 hover:to-teal-500 shadow-lg shadow-emerald-900/30 hover:shadow-emerald-800/40"
                      }`}
                    >
                      {addressCopied ? (
                        <>
                          <PiCheckCircleFill className="text-xl" />
                          <span>Alamat Tersalin!</span>
                        </>
                      ) : (
                        <>
                          <PiCopySimpleLight className="text-xl" />
                          <span>Salin Alamat</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Bottom decorative line */}
                  <div className="h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500" />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer message */}
        <div className="text-center mt-8 pt-8 border-t border-stone-700">
          <p className="text-stone-500 text-sm leading-relaxed max-w-md mx-auto">
            Kehadiran dan doa restu Anda sudah menjadi hadiah terindah bagi
            kami. Terima kasih atas perhatian dan kasih sayang Anda.
          </p>

          <div className="mt-8">
            <p className="text-stone-500 text-sm uppercase tracking-widest mb-2">
              The Wedding Of
            </p>
            <h3 className="font-esthetic text-3xl md:text-4xl text-stone-200">
              Dwi & Said Agil
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
