"use client";

import useMenu from "@/hooks/useMenu";
import React from "react";
import {
  PiHouseSimple,
  PiHouseSimpleFill,
  PiHeart,
  PiHeartFill,
  PiCalendarCheck,
  PiCalendarCheckFill,
  PiImage,
  PiImageFill,
  PiChat,
  PiChatFill,
} from "react-icons/pi";

export default function Menu() {
  const { scrolltoHash } = useMenu();

  const menuItems = [
    {
      id: "hero",
      label: "Home",
      icon: PiHouseSimple,
      iconActive: PiHouseSimpleFill,
    },
    {
      id: "quote",
      label: "Couple",
      icon: PiHeart,
      iconActive: PiHeartFill,
    },
    {
      id: "event",
      label: "Event",
      icon: PiCalendarCheck,
      iconActive: PiCalendarCheckFill,
    },
    {
      id: "gallery",
      label: "Gallery",
      icon: PiImage,
      iconActive: PiImageFill,
    },
    {
      id: "comment",
      label: "RSVP",
      icon: PiChat,
      iconActive: PiChatFill,
    },
  ];

  return (
    <section
      id="menu"
      className="fixed inset-x-0 bottom-0 z-[100] block sm:hidden"
    >
      {/* Glassmorphism background */}
      <div className="relative mx-3 mb-3">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-rose-500/20 via-pink-500/20 to-amber-500/20 rounded-2xl blur-xl" />

        {/* Main menu container */}
        <div className="relative bg-white/90 backdrop-blur-xl border border-white/50 shadow-lg shadow-stone-900/10 rounded-2xl px-2 py-2">
          <ul className="flex items-center justify-between">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const IconActive = item.iconActive;

              return (
                <li key={item.id} className="group flex-1">
                  <button
                    onClick={() => scrolltoHash(item.id)}
                    className="relative w-full flex flex-col items-center gap-1 py-2 px-1 rounded-xl transition-all duration-300 hover:bg-rose-50 active:scale-95"
                  >
                    {/* Icon container */}
                    <div className="relative">
                      {/* Active indicator dot */}
                      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-rose-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Icons */}
                      <Icon className="text-2xl text-stone-500 group-hover:hidden transition-all duration-300" />
                      <IconActive className="text-2xl text-rose-500 hidden group-hover:block transition-all duration-300" />
                    </div>

                    {/* Label */}
                    <span className="text-[10px] font-medium text-stone-500 group-hover:text-rose-500 transition-colors duration-300">
                      {item.label}
                    </span>

                    {/* Hover background glow */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-rose-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
