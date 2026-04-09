export default function HeroScanBg() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none"
    >
      {/* Document text lines */}
      <div className="hero-doc-lines">
        <svg
          className="absolute inset-0 h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/*
              Pattern width ≈ container content width (max-w-6xl minus px-6 padding ≈ 1104px).
              Using 1200px so no visible horizontal repeat.
              patternUnits="userSpaceOnUse" keeps coordinates in px.
            */}
            <pattern
              id="doclines"
              x="0"
              y="48"
              width="1200"
              height="240"
              patternUnits="userSpaceOnUse"
            >
              {/* ── Contract title ── */}
              <rect x="0" y="0"   width="440" height="4"   rx="2" fill="rgb(28 25 23 / 0.12)" />

              {/* ── Clause 1 ── */}
              <rect x="0" y="26"  width="1060" height="3"   rx="1.5" fill="rgb(28 25 23 / 0.08)" />
              <rect x="0" y="40"  width="1010" height="3"   rx="1.5" fill="rgb(28 25 23 / 0.08)" />
              <rect x="0" y="54"  width="1080" height="3"   rx="1.5" fill="rgb(28 25 23 / 0.08)" />
              <rect x="0" y="68"  width="680"  height="3"   rx="1.5" fill="rgb(28 25 23 / 0.08)" />

              {/* ── Clause 2 ── */}
              <rect x="0" y="98"  width="1040" height="3"   rx="1.5" fill="rgb(28 25 23 / 0.065)" />
              <rect x="0" y="112" width="1100" height="3"   rx="1.5" fill="rgb(28 25 23 / 0.065)" />
              <rect x="0" y="126" width="860"  height="3"   rx="1.5" fill="rgb(28 25 23 / 0.065)" />
              <rect x="0" y="140" width="1070" height="3"   rx="1.5" fill="rgb(28 25 23 / 0.065)" />
              <rect x="0" y="154" width="560"  height="3"   rx="1.5" fill="rgb(28 25 23 / 0.065)" />

              {/* ── Signature area ── */}
              <rect x="0" y="188" width="420" height="2.5" rx="1.5" fill="rgb(28 25 23 / 0.05)" />
              <rect x="0" y="204" width="280" height="2.5" rx="1.5" fill="rgb(28 25 23 / 0.05)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#doclines)" />
        </svg>
      </div>

      {/* Scanning line */}
      <div className="hero-scan-line" />
    </div>
  )
}
