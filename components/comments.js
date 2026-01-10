"use client";

import React from "react";
import { PiSpinnerLight, PiPaperPlaneTiltFill, PiHeartFill } from "react-icons/pi";
import CommentsContainer from "./commentsContainer";
import useComments from "@/hooks/useComments";

export default function Comments() {
  const {
    handleInput,
    formHandle,
    updateDataHandle,
    handleCloseModal,
    handleOnPageChange,
    formData,
    defaultName,
    formLoading,
    comments,
    isLoading,
    pagination,
    showChangeModal,
  } = useComments();

  return (
    <>
      <section id="comment" className="relative z-10">
        {/* Main Section with gradient background */}
        <div className="relative overflow-hidden bg-gradient-to-b from-stone-50 via-stone-100 to-stone-200">
          {/* Decorative background elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-20 left-10 w-64 h-64 bg-rose-100 rounded-full blur-3xl opacity-30" />
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-amber-100 rounded-full blur-3xl opacity-30" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-50 rounded-full blur-3xl opacity-20" />
          </div>

          {/* Top wave decoration */}
          <div className="relative">
            <svg
              viewBox="0 0 1440 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full"
            >
              <path
                d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V120Z"
                fill="white"
              />
            </svg>
          </div>

          <div className="relative z-10 max-w-2xl mx-auto px-4 py-8">
            {/* Header */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center gap-2 mb-4">
                <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-stone-400" />
                <PiHeartFill className="text-rose-400 text-xl" />
                <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-stone-400" />
              </div>

              <h2 className="font-esthetic text-4xl md:text-5xl text-stone-800 mb-3">
                Konfirmasi Kehadiran
              </h2>

              <p className="text-stone-500 max-w-md mx-auto leading-relaxed text-sm">
                Mohon kesediaannya untuk melakukan konfirmasi kehadiran, supaya
                kami bisa mempersiapkan kehadiran Anda dengan baik.
              </p>
            </div>

            {/* Form Card */}
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-stone-100 p-6 md:p-8">
              {/* Decorative corners */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-rose-200 rounded-tl-3xl" />
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-amber-200 rounded-tr-3xl" />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-amber-200 rounded-bl-3xl" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-rose-200 rounded-br-3xl" />

              <form onSubmit={formHandle} className="relative space-y-4">
                {/* Name Input */}
                <div className="relative">
                  <label className="block text-sm font-medium text-stone-600 mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-rose-300 focus:ring-2 focus:ring-rose-100 transition-all duration-300 text-stone-700 placeholder:text-stone-400"
                    placeholder="Masukkan nama Anda"
                    onChange={handleInput}
                    value={formData.name}
                    required={defaultName ? false : true}
                    readOnly={defaultName ? true : false}
                  />
                </div>

                {/* Message Textarea */}
                <div className="relative">
                  <label className="block text-sm font-medium text-stone-600 mb-2">
                    Ucapan & Doa
                  </label>
                  <textarea
                    name="message"
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-rose-300 focus:ring-2 focus:ring-rose-100 transition-all duration-300 text-stone-700 placeholder:text-stone-400 resize-none"
                    placeholder="Tulis ucapan dan doa untuk kedua mempelai..."
                    rows={4}
                    onChange={handleInput}
                    value={formData.message}
                    required
                  />
                </div>

                {/* Attendance Select */}
                <div className="relative">
                  <label className="block text-sm font-medium text-stone-600 mb-2">
                    Konfirmasi Kehadiran
                  </label>
                  <select
                    name="hadir"
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-rose-300 focus:ring-2 focus:ring-rose-100 transition-all duration-300 text-stone-700 cursor-pointer appearance-none"
                    onChange={handleInput}
                    value={formData.hadir}
                    required
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                      backgroundPosition: "right 0.75rem center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "1.5em 1.5em",
                    }}
                  >
                    <option value="">Pilih konfirmasi kehadiran</option>
                    <option value={true}>Hadir</option>
                    <option value={false}>Tidak Hadir</option>
                  </select>
                </div>

                {/* Submit Button */}
                <button
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-rose-500/30 hover:shadow-rose-500/40 hover:scale-[1.02] active:scale-[0.98]"
                  type="submit"
                >
                  <PiPaperPlaneTiltFill className="text-xl" />
                  <span>Kirim Konfirmasi</span>
                </button>

                {/* Loading Overlay */}
                {formLoading && (
                  <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-3xl flex items-center justify-center">
                    <div className="flex flex-col items-center gap-3">
                      <PiSpinnerLight className="text-4xl text-rose-500 animate-spin" />
                      <p className="text-stone-600 text-sm">Mengirim...</p>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Guest Book Section */}
        <div className="relative py-12 bg-gradient-to-b from-stone-200 to-stone-300">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-10 right-20 w-48 h-48 bg-rose-100 rounded-full blur-3xl opacity-20" />
            <div className="absolute bottom-10 left-20 w-56 h-56 bg-amber-100 rounded-full blur-3xl opacity-20" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto px-4">
            {/* Section Header */}
            <div className="flex items-center gap-4 mb-8">
              <h3 className="font-esthetic text-3xl text-stone-700 whitespace-nowrap">
                Buku Tamu
              </h3>
              <div className="flex-1 h-[1px] bg-gradient-to-r from-stone-400 to-transparent" />
            </div>

            {/* Comments List */}
            <CommentsContainer
              commentList={comments}
              pagination={pagination}
              isLoading={isLoading}
              onChange={handleOnPageChange}
            />
          </div>
        </div>

        {/* Bottom wave to footer */}
        <div className="bg-stone-700">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
          >
            <path
              d="M0 0L60 10C120 20 240 40 360 50C480 60 600 60 720 55C840 50 960 40 1080 35C1200 30 1320 30 1380 30L1440 30V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
              fill="#d6d3d1"
            />
          </svg>
        </div>
      </section>

      {/* Update Confirmation Modal */}
      {showChangeModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999] flex items-center justify-center p-4">
          <div
            className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 relative overflow-hidden"
            data-aos="zoom-in"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-rose-100 to-transparent rounded-bl-full" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-amber-100 to-transparent rounded-tr-full" />

            <div className="relative z-10 text-center">
              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-amber-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                  />
                </svg>
              </div>

              <h3 className="text-2xl font-semibold text-stone-800 mb-2">
                Data Sudah Terekam
              </h3>
              <p className="text-stone-500 mb-6">
                Apakah Anda ingin mengubah data konfirmasi kehadiran Anda?
              </p>

              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={updateDataHandle}
                  className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-green-500/30"
                >
                  Ya, Ubah
                </button>
                <button
                  onClick={handleCloseModal}
                  className="flex-1 bg-gradient-to-r from-stone-200 to-stone-300 hover:from-stone-300 hover:to-stone-400 text-stone-700 font-semibold py-3 px-6 rounded-xl transition-all duration-300"
                >
                  Tidak
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
