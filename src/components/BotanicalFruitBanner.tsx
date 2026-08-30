import React from 'react'

export function BotanicalFruitBanner() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 pt-4 pb-2 relative flex items-center justify-center select-none">
      <svg
        viewBox="0 0 900 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-h-56 drop-shadow-md"
      >
        {/* Soft Background Warm Glow */}
        <ellipse cx="450" cy="130" rx="360" ry="80" fill="#F4E6CE" fillOpacity="0.45" />

        {/* Stem and Leaves (Left Branch) */}
        <path
          d="M 220 120 Q 280 60 360 90 Q 300 130 220 120 Z"
          fill="#4A6B53"
          fillOpacity="0.85"
        />
        <path
          d="M 230 115 Q 290 80 350 92"
          stroke="#2E4735"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Leaves (Center Back) */}
        <path
          d="M 420 80 Q 450 20 480 70 Q 450 90 420 80 Z"
          fill="#5B7E63"
          fillOpacity="0.9"
        />
        <path
          d="M 450 75 Q 490 35 530 65 Q 480 85 450 75 Z"
          fill="#43624B"
          fillOpacity="0.85"
        />

        {/* Leaves (Right Branch) */}
        <path
          d="M 580 90 Q 640 50 700 85 Q 640 120 580 90 Z"
          fill="#4A6B53"
          fillOpacity="0.85"
        />
        <path
          d="M 590 90 Q 640 70 690 85"
          stroke="#2E4735"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Fruit 1: Left Mandarin / Orange */}
        <g transform="translate(180, 75)">
          <circle cx="50" cy="50" r="45" fill="url(#orangeGrad1)" />
          {/* Subtle Orange Texture */}
          <circle cx="50" cy="50" r="45" fill="#E76F51" fillOpacity="0.15" />
          <ellipse cx="40" cy="35" rx="20" ry="12" fill="#FFF3E0" fillOpacity="0.25" />
          {/* Leaf on top */}
          <path d="M 50 8 Q 65 -15 85 -5 Q 65 15 50 8 Z" fill="#4A6B53" />
        </g>

        {/* Fruit 2: Pink Grapefruit Half (Left-Center) */}
        <g transform="translate(280, 50)">
          {/* Outer Rind */}
          <circle cx="70" cy="70" r="62" fill="#F4A261" />
          {/* White Pith */}
          <circle cx="70" cy="70" r="54" fill="#FFF8E7" />
          {/* Ruby Pulp */}
          <circle cx="70" cy="70" r="48" fill="url(#grapefruitPulp)" />
          {/* Segment Lines */}
          <path d="M 70 24 L 70 116 M 24 70 L 116 70 M 38 38 L 102 102 M 38 102 L 102 38" stroke="#FFF8E7" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="70" cy="70" r="8" fill="#FFF8E7" />
        </g>

        {/* Fruit 3: Large Center Juicy Orange */}
        <g transform="translate(375, 20)">
          <circle cx="90" cy="90" r="82" fill="url(#mainOrangeGrad)" />
          <ellipse cx="65" cy="55" rx="40" ry="24" fill="#FFE8D6" fillOpacity="0.3" />
          {/* Natural Botanical Flower / Blossom */}
          <g transform="translate(15, 30) scale(0.7)">
            <ellipse cx="20" cy="10" rx="10" ry="5" fill="#FFFFFF" fillOpacity="0.9" />
            <ellipse cx="10" cy="20" rx="5" ry="10" fill="#FFFFFF" fillOpacity="0.9" />
            <ellipse cx="25" cy="25" rx="8" ry="6" fill="#FFFFFF" fillOpacity="0.9" />
            <circle cx="18" cy="18" r="4" fill="#F4A261" />
          </g>
        </g>

        {/* Fruit 4: Papaya Half with Seeds (Right-Center) */}
        <g transform="translate(530, 45)">
          {/* Papaya Outer Shape */}
          <path
            d="M 50 15 Q 105 10 100 85 Q 95 140 50 145 Q 10 140 10 85 Q 5 15 50 15 Z"
            fill="url(#papayaGrad)"
          />
          {/* Papaya Inner Flesh */}
          <path
            d="M 50 35 Q 85 30 80 85 Q 75 125 50 128 Q 25 125 25 85 Q 20 35 50 35 Z"
            fill="#E76F51"
          />
          {/* Papaya Seed cavity */}
          <ellipse cx="51" cy="85" rx="14" ry="32" fill="#3D2619" />
          {/* Shiny Seeds */}
          <circle cx="48" cy="68" r="2.5" fill="#1C130D" />
          <circle cx="54" cy="72" r="3" fill="#2E1C13" />
          <circle cx="49" cy="80" r="2.8" fill="#1C130D" />
          <circle cx="53" cy="88" r="3" fill="#2E1C13" />
          <circle cx="48" cy="96" r="2.6" fill="#1C130D" />
          <circle cx="53" cy="102" r="2.8" fill="#2E1C13" />
        </g>

        {/* Fruit 5: Lemon / Citrus Slice (Right) */}
        <g transform="translate(635, 60)">
          <ellipse cx="50" cy="55" rx="42" ry="46" fill="url(#lemonGrad)" />
          <ellipse cx="40" cy="40" rx="18" ry="12" fill="#FFFDE7" fillOpacity="0.4" />
          {/* Small Lemon Leaf */}
          <path d="M 75 25 Q 95 10 105 25 Q 90 40 75 25 Z" fill="#5B7E63" />
        </g>

        {/* Fruit 6: Red Berries / Lingonberries Cluster */}
        <g transform="translate(690, 80)">
          <circle cx="20" cy="30" r="10" fill="#D62246" />
          <circle cx="32" cy="22" r="11" fill="#E63946" />
          <circle cx="38" cy="36" r="9" fill="#C1121F" />
          <circle cx="26" cy="42" r="10" fill="#E63946" />
          <circle cx="48" cy="30" r="10" fill="#D62246" />
          <circle cx="44" cy="46" r="9" fill="#9B111E" />
          <circle cx="58" cy="40" r="8" fill="#E63946" />
          {/* Stem */}
          <path d="M 28 15 Q 40 5 55 12" stroke="#4A6B53" strokeWidth="2" fill="none" />
        </g>

        {/* Gradients */}
        <defs>
          <linearGradient id="orangeGrad1" x1="10" y1="10" x2="90" y2="90" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FDBA74" />
            <stop offset="0.6" stopColor="#FB923C" />
            <stop offset="1" stopColor="#EA580C" />
          </linearGradient>
          <linearGradient id="mainOrangeGrad" x1="20" y1="20" x2="160" y2="160" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FDBA74" />
            <stop offset="0.4" stopColor="#F97316" />
            <stop offset="1" stopColor="#C2410C" />
          </linearGradient>
          <linearGradient id="grapefruitPulp" x1="30" y1="30" x2="110" y2="110" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FB7185" />
            <stop offset="0.7" stopColor="#E11D48" />
            <stop offset="1" stopColor="#BE123C" />
          </linearGradient>
          <linearGradient id="papayaGrad" x1="10" y1="15" x2="100" y2="145" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FBBF24" />
            <stop offset="0.5" stopColor="#F97316" />
            <stop offset="1" stopColor="#B45309" />
          </linearGradient>
          <linearGradient id="lemonGrad" x1="15" y1="15" x2="85" y2="95" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FEF08A" />
            <stop offset="0.6" stopColor="#FACC15" />
            <stop offset="1" stopColor="#CA8A04" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
