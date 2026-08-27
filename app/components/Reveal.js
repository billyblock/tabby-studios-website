"use client";

import { useEffect, useRef, useState } from "react";

export default function Reveal({ as: Tag = "div", className = "", children, ...props }) {
  const ref = useRef(null);
  const [state, setState] = useState("idle");

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    setState("primed");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("revealed");
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -60px 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const stateClass = state === "primed" ? "revealPrimed" : state === "revealed" ? "revealVisible" : "";

  return (
    <Tag ref={ref} className={`${className} ${stateClass}`.trim()} {...props}>
      {children}
    </Tag>
  );
}
