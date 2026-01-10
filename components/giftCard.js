"use client";

import useGiftCard from "@/hooks/useGiftCard";
import Image from "next/image";
import { PiCopySimpleLight, PiCheckCircleFill } from "react-icons/pi";

export default function GiftCard({ name, rek, bank, src }) {
  const { handleClick, onCopy } = useGiftCard(rek);

  return (
    <div className="relative overflow-hidden bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-stone-200/50 max-w-sm mx-auto">
      {/* Decorative elements */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-rose-100 to-pink-50 rounded-full opacity-60" />
      <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-tr from-amber-100 to-yellow-50 rounded-full opacity-60" />

      {/* Header with bank logo */}
      <div className="relative z-10 pt-6 pb-4 px-6 text-center border-b border-stone-100">
        <div className="inline-flex items-center justify-center bg-white rounded-xl shadow-sm p-3 mb-3">
          <Image
            src={src}
            alt={bank}
            width={120}
            height={40}
            className="h-8 w-auto object-contain"
          />
        </div>
        <p className="text-xs text-stone-500 font-medium tracking-wide uppercase">
          {bank}
        </p>
      </div>

      {/* Account details */}
      <div className="relative z-10 px-6 py-5">
        <div className="text-center mb-4">
          <p className="text-sm text-stone-500 mb-1">Atas Nama</p>
          <h3 className="text-lg font-semibold text-stone-800">{name}</h3>
        </div>

        <div className="bg-gradient-to-r from-stone-50 to-stone-100 rounded-xl p-4 mb-4">
          <p className="text-xs text-stone-500 mb-1 text-center">Nomor Rekening</p>
          <p className="text-xl font-bold text-stone-800 tracking-wider text-center font-mono">
            {rek}
          </p>
        </div>

        {/* Copy button */}
        <button
          onClick={handleClick}
          className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium transition-all duration-300 ${
            onCopy
              ? "bg-green-500 text-white shadow-lg shadow-green-500/30"
              : "bg-gradient-to-r from-stone-700 to-stone-800 text-white hover:from-stone-800 hover:to-stone-900 shadow-lg shadow-stone-500/20 hover:shadow-stone-500/30"
          }`}
        >
          {onCopy ? (
            <>
              <PiCheckCircleFill className="text-xl" />
              <span>Tersalin!</span>
            </>
          ) : (
            <>
              <PiCopySimpleLight className="text-xl" />
              <span>Salin Nomor Rekening</span>
            </>
          )}
        </button>
      </div>

      {/* Bottom decorative line */}
      <div className="h-1 bg-gradient-to-r from-rose-300 via-pink-300 to-amber-300" />
    </div>
  );
}
