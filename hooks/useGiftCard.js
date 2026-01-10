"use client";

import { useState } from "react";

function useGiftCard(rek) {
  const [onCopy, setOnCopy] = useState(false);

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(rek);
      setOnCopy(true);
      setTimeout(() => {
        setOnCopy(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return { handleClick, onCopy };
}

export default useGiftCard;
