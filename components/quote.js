"use client";

import React from "react";
import { useThemeContext } from "./providers";

export default function Quote({
  shortNameFemale,
  shortNameMale,
  quote,
  quoteFrom,
}) {
  const { data } = useThemeContext();
  return (
    <>
      {data.isOpenned ? (
        <section id="quote" className="relative text-center">
          <img
            className="absolute inset-0 z-0 w-full"
            src="/img/img-tree-shadow.png"
            alt=""
          />
          <section className="bg-white-black text-center relative bg-cover bg-center">
            <h2 className="font-arabic py-4 m-0 text-[2rem]">
              بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
            </h2>
            <h2 className="font-esthetic py-4 m-0 text-[2rem]">
              Assalamualaikum Warahmatullahi Wabarakatuh
            </h2>
            <p className="pb-4 px-2 m-0 text-[0.95rem]">
              Tanpa mengurangi rasa hormat, kami mengundang Anda untuk berkenan
              menghadiri acara pernikahan kami:
            </p>

            <div className="overflow-x-hidden pb-4">
              <div className="relative">
                <div className="absolute top-0 right-[5%]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="currentColor"
                    className="opacity-50"
                    data-time="500"
                    data-class="animate-love"
                    viewBox="0 0 16 16"
                  >
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                  </svg>
                </div>

                <div
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  className="pb-1"
                >
                  <img
                    src="/img/gallery-2.jpeg"
                    alt="mempelai wanita"
                    className="w-40 h-40 object-cover rounded-full border-[3px] border-white shadow my-4 mx-auto cursor-pointer"
                  />
                  <h2 className="font-esthetic m-0 text-[2.125rem]">
                    Dwi Hasti Oktaviani, S.Pd
                  </h2>
                  <p className="mt-3 mb-1 text-[1.25rem]">Binti</p>
                  <p className="mb-0 text-[0.95rem]">Bapak Nurhasan</p>
                  <p className="mb-0 text-[0.95rem]">dan</p>
                  <p className="mb-0 text-[0.95rem]">Sri Maryati</p>
                </div>

                <div className="absolute top-[90%] left-[5%]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="currentColor"
                    className="opacity-50"
                    data-time="2000"
                    data-class="animate-love"
                    viewBox="0 0 16 16"
                  >
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                  </svg>
                </div>
              </div>

              <h2 className="font-esthetic mt-4 text-[4.5rem]">&amp;</h2>

              <div className="relative">
                <div className="absolute top-0 right-[5%]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="currentColor"
                    className="opacity-50"
                    data-time="3000"
                    data-class="animate-love"
                    viewBox="0 0 16 16"
                  >
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                  </svg>
                </div>

                <div
                  data-aos="fade-left"
                  data-aos-duration="2000"
                  className="pb-1"
                >
                  <img
                    src="/img/gallery-3.jpeg"
                    alt="mempelai pria"
                    className="w-40 h-40 object-cover rounded-full border-[3px] border-white shadow my-4 mx-auto cursor-pointer"
                  />
                  <h2 className="font-esthetic m-0 text-[2.125rem]">
                    Muhammad Said Agil
                  </h2>
                  <p className="mt-3 mb-1 text-[1.25rem]">Bin</p>
                  <p className="mb-0 text-[0.95rem]">Bapak Asmat</p>
                  <p className="mb-0 text-[0.95rem]">dan</p>
                  <p className="mb-0 text-[0.95rem]">Almh. Ibu Muharoh</p>
                </div>

                <div className="absolute top-[90%] left-[5%]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="currentColor"
                    className="opacity-50"
                    data-time="2500"
                    data-class="animate-love"
                    viewBox="0 0 16 16"
                  >
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                  </svg>
                </div>
              </div>
            </div>
          </section>
        </section>
      ) : (
        ""
      )}
    </>
  );
}
