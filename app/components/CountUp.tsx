"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  target: number;
  suffix?: string;
  duration?: number;
  delay?: number;
  className?: string;
}

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export default function CountUp({ target, suffix = "", duration = 1500, delay = 0, className = "" }: CountUpProps) {
  const [value, setValue] = useState(0);
  const hasAnimatedRef = useRef(false);
  const ref = useRef<HTMLParagraphElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimatedRef.current) {
            hasAnimatedRef.current = true;
            const runAnimation = () => {
              const startTime = performance.now();

              const animate = (now: number) => {
                const elapsed = now - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const eased = easeOutCubic(progress);
                setValue(Math.floor(eased * target));

                if (progress < 1) {
                  requestAnimationFrame(animate);
                } else {
                  setValue(target);
                }
              };

              requestAnimationFrame(animate);
            };

            if (delay > 0) {
              timeoutRef.current = setTimeout(runAnimation, delay);
            } else {
              runAnimation();
            }
          }
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [target, duration, delay]);

  return (
    <p ref={ref} className={className}>
      {value}{suffix}
    </p>
  );
}
