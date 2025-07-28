import React, { useEffect, useState } from "react";

export default function SplashScreen({ onFinish }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onFinish) onFinish();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!visible) return null;

  return (
    <div
      className="
        fixed inset-0 flex items-center justify-center
        bg-black
        text-white select-none z-50
      "
    >
      <h1
        className="
          text-6xl font-extrabold tracking-wide
          md:text-8xl
          drop-shadow-lg
          animate-fade-in-scale
        "
      >
        Kavya Sharma
      </h1>
    </div>
  );
}
