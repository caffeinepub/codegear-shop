export interface Product {
  id: string;
  name: string;
  description: string;
  priceRange: string;
  emoji: string;
  amazonQuery: string;
}

export interface Category {
  id: string;
  label: string;
  emoji: string;
  products: Product[];
}

export const shopCategories: Category[] = [
  {
    id: "keyboards",
    label: "Keyboards",
    emoji: "⌨️",
    products: [
      {
        id: "kb-1",
        name: "Keychron K2 V2 Mechanical",
        description:
          "Compact 75% layout with hot-swappable switches, aluminum frame, and RGB backlight. A developer favorite.",
        priceRange: "$90 – $110",
        emoji: "⌨️",
        amazonQuery: "Keychron K2 V2 mechanical keyboard",
      },
      {
        id: "kb-2",
        name: "Logitech MX Keys Advanced",
        description:
          "Wireless multi-device keyboard with backlit keys, perfect scissor switches, and USB-C charging.",
        priceRange: "$100 – $120",
        emoji: "⌨️",
        amazonQuery: "Logitech MX Keys Advanced wireless keyboard",
      },
      {
        id: "kb-3",
        name: "Das Keyboard 4 Professional",
        description:
          "Full-size mechanical keyboard with Cherry MX switches, dedicated media controls, and aluminum top panel.",
        priceRange: "$150 – $175",
        emoji: "⌨️",
        amazonQuery: "Das Keyboard 4 Professional mechanical keyboard",
      },
      {
        id: "kb-4",
        name: "HHKB Professional Hybrid",
        description:
          "Iconic 60% layout with Topre capacitive switches — beloved by programmers worldwide for decades.",
        priceRange: "$220 – $250",
        emoji: "⌨️",
        amazonQuery: "HHKB Professional Hybrid Type-S keyboard",
      },
      {
        id: "kb-5",
        name: "Kinesis Advantage360 Pro",
        description:
          "Ergonomic split layout designed to reduce wrist strain during long coding sessions.",
        priceRange: "$350 – $400",
        emoji: "⌨️",
        amazonQuery: "Kinesis Advantage360 Pro ergonomic keyboard",
      },
      {
        id: "kb-6",
        name: "NuPhy Air75 V2",
        description:
          "Ultra-thin 75% wireless mechanical keyboard with low-profile switches and premium gasket mount.",
        priceRange: "$100 – $130",
        emoji: "⌨️",
        amazonQuery: "NuPhy Air75 V2 low profile mechanical keyboard",
      },
      {
        id: "kb-7",
        name: "Apple Magic Keyboard with Touch ID",
        description:
          "Whisper-quiet scissor switches, instant pairing, and Touch ID for Mac. Seamless and refined.",
        priceRange: "$100 – $130",
        emoji: "⌨️",
        amazonQuery: "Apple Magic Keyboard Touch ID",
      },
    ],
  },
  {
    id: "mice",
    label: "Mice",
    emoji: "🖱️",
    products: [
      {
        id: "mouse-1",
        name: "Logitech MX Master 3S",
        description:
          "8K DPI sensor, MagSpeed electromagnetic scroll wheel, and programmable thumb buttons. The gold standard for developers.",
        priceRange: "$90 – $100",
        emoji: "🖱️",
        amazonQuery: "Logitech MX Master 3S wireless mouse",
      },
      {
        id: "mouse-2",
        name: "Logitech MX Vertical",
        description:
          "Ergonomic vertical design reduces muscle strain by 10%. Perfect for all-day coding marathons.",
        priceRange: "$80 – $100",
        emoji: "🖱️",
        amazonQuery: "Logitech MX Vertical ergonomic mouse",
      },
      {
        id: "mouse-3",
        name: "Razer Pro Click Humanscale",
        description:
          "Productivity-focused wireless mouse with Humanscale ergonomics and whisper-quiet clicks.",
        priceRange: "$90 – $110",
        emoji: "🖱️",
        amazonQuery: "Razer Pro Click Humanscale mouse",
      },
      {
        id: "mouse-4",
        name: "Apple Magic Mouse",
        description:
          "Seamless Multi-Touch surface, wireless charging, and tight macOS integration. Iconic and precise.",
        priceRange: "$75 – $90",
        emoji: "🖱️",
        amazonQuery: "Apple Magic Mouse",
      },
      {
        id: "mouse-5",
        name: "Kensington Expert Trackball",
        description:
          "Large 55mm trackball for precise pointer control without wrist movement — ideal for repetitive tasks.",
        priceRange: "$60 – $80",
        emoji: "🖱️",
        amazonQuery: "Kensington Expert Wireless Trackball",
      },
      {
        id: "mouse-6",
        name: "Glorious Model O Wireless",
        description:
          "Ultra-lightweight honeycomb design at 69g, 26K DPI sensor, and 71-hour battery for wireless freedom.",
        priceRange: "$70 – $90",
        emoji: "🖱️",
        amazonQuery: "Glorious Model O Wireless mouse",
      },
    ],
  },
  {
    id: "monitors",
    label: "Monitors",
    emoji: "🖥️",
    products: [
      {
        id: "mon-1",
        name: 'LG 27" 4K UHD IPS Monitor',
        description:
          "3840×2160 at 60Hz, HDR400, and USB-C 96W charging. Crystal-clear text for code review sessions.",
        priceRange: "$350 – $450",
        emoji: "🖥️",
        amazonQuery: "LG 27UK850 4K UHD IPS monitor USB-C",
      },
      {
        id: "mon-2",
        name: 'Dell UltraSharp 34" Curved',
        description:
          "3440×1440 IPS panel with 99% sRGB, ultra-thin bezels, and USB-C hub. Ultrawide for maximum multitasking.",
        priceRange: "$700 – $900",
        emoji: "🖥️",
        amazonQuery: "Dell UltraSharp 34 curved ultrawide monitor",
      },
      {
        id: "mon-3",
        name: 'Samsung 32" 4K Smart Monitor M8',
        description:
          "Built-in Smart TV, webcam, AirPlay 2, and USB-C 65W. The complete work-from-home hub.",
        priceRange: "$550 – $700",
        emoji: "🖥️",
        amazonQuery: "Samsung 32 4K Smart Monitor M8",
      },
      {
        id: "mon-4",
        name: "BenQ PD2706UA 4K Designer",
        description:
          '27" 4K Thunderbolt 4 monitor with AQColor tech, KVM switch, and 98% DCI-P3 for design+code work.',
        priceRange: "$600 – $750",
        emoji: "🖥️",
        amazonQuery: "BenQ PD2706UA 4K Thunderbolt designer monitor",
      },
      {
        id: "mon-5",
        name: 'LG 49" Super Ultrawide Dual QHD',
        description:
          "5120×1440 mega-ultrawide that replaces a dual-monitor setup. Unparalleled screen real estate.",
        priceRange: "$800 – $1100",
        emoji: "🖥️",
        amazonQuery: "LG 49 inch super ultrawide dual QHD monitor",
      },
      {
        id: "mon-6",
        name: "ASUS ProArt PA279CRV 4K",
        description:
          '27" 4K OLED-like IPS, factory-calibrated color, USB-C 96W, and hardware calibration support.',
        priceRange: "$400 – $550",
        emoji: "🖥️",
        amazonQuery: "ASUS ProArt PA279 4K USB-C monitor",
      },
    ],
  },
  {
    id: "laptops",
    label: "Laptops",
    emoji: "💻",
    products: [
      {
        id: "lap-1",
        name: 'MacBook Pro 14" M4 Pro',
        description:
          "Apple M4 Pro chip, 12-core CPU, Liquid Retina XDR display, and 22-hour battery. The developer's dream machine.",
        priceRange: "$1,999 – $2,499",
        emoji: "💻",
        amazonQuery: "MacBook Pro 14 M4 Pro",
      },
      {
        id: "lap-2",
        name: "ThinkPad X1 Carbon Gen 12",
        description:
          'Under 1kg with Intel Core Ultra, 14" IPS, military-grade durability, and legendary ThinkPad keyboard.',
        priceRange: "$1,500 – $1,900",
        emoji: "💻",
        amazonQuery: "Lenovo ThinkPad X1 Carbon Gen 12",
      },
      {
        id: "lap-3",
        name: "Dell XPS 15 9530",
        description:
          '15.6" OLED touch display, Intel Core i9, RTX 4060, and 86Wh battery for power users.',
        priceRange: "$1,700 – $2,100",
        emoji: "💻",
        amazonQuery: "Dell XPS 15 9530 developer laptop",
      },
      {
        id: "lap-4",
        name: "Framework Laptop 16",
        description:
          "Fully modular and repairable laptop. Swap RAM, storage, ports, and even the GPU expansion bay.",
        priceRange: "$1,300 – $1,800",
        emoji: "💻",
        amazonQuery: "Framework Laptop 16 modular",
      },
      {
        id: "lap-5",
        name: 'MacBook Air 15" M3',
        description:
          'Fanless M3 chip, 15.3" Liquid Retina display, and 18-hour battery. Lightweight perfection for travel.',
        priceRange: "$1,299 – $1,499",
        emoji: "💻",
        amazonQuery: "MacBook Air 15 M3",
      },
      {
        id: "lap-6",
        name: "ASUS ProArt Studiobook 16",
        description:
          "AMD Ryzen AI 9, RTX 4060, OLED Pantone display, and ASUS Dial for creative pros who also ship code.",
        priceRange: "$1,600 – $2,000",
        emoji: "💻",
        amazonQuery: "ASUS ProArt Studiobook 16 OLED",
      },
    ],
  },
  {
    id: "headphones",
    label: "Headphones",
    emoji: "🎧",
    products: [
      {
        id: "hp-1",
        name: "Sony WH-1000XM5",
        description:
          "Industry-leading ANC, 30-hour battery, multipoint Bluetooth, and foldable design for focus coding.",
        priceRange: "$280 – $350",
        emoji: "🎧",
        amazonQuery: "Sony WH-1000XM5 noise cancelling headphones",
      },
      {
        id: "hp-2",
        name: "Bose QuietComfort 45",
        description:
          "Legendary Bose ANC with TriPort acoustic architecture, 24-hour battery, and premium comfort.",
        priceRange: "$279 – $329",
        emoji: "🎧",
        amazonQuery: "Bose QuietComfort 45 wireless headphones",
      },
      {
        id: "hp-3",
        name: "Apple AirPods Max",
        description:
          "Over-ear ANC with Apple silicon H2 chip, computational audio, and stunning mesh headband design.",
        priceRange: "$499 – $549",
        emoji: "🎧",
        amazonQuery: "Apple AirPods Max",
      },
      {
        id: "hp-4",
        name: "Beyerdynamic DT 770 Pro",
        description:
          "Closed-back studio monitors with 250Ω drivers. Crisp, accurate sound for long development sessions.",
        priceRange: "$149 – $180",
        emoji: "🎧",
        amazonQuery: "Beyerdynamic DT 770 Pro studio headphones",
      },
      {
        id: "hp-5",
        name: "Jabra Evolve2 75",
        description:
          "Professional UC headset with 8-mic ANC, conference call clarity, and USB dongle for instant pairing.",
        priceRange: "$300 – $380",
        emoji: "🎧",
        amazonQuery: "Jabra Evolve2 75 professional headset",
      },
      {
        id: "hp-6",
        name: "Logitech Zone Vibe 125",
        description:
          "Lightweight wireless headset tuned for voice calls with passive noise reduction and USB-C charging.",
        priceRange: "$100 – $130",
        emoji: "🎧",
        amazonQuery: "Logitech Zone Vibe 125 wireless headset",
      },
    ],
  },
  {
    id: "accessories",
    label: "Accessories",
    emoji: "🛠️",
    products: [
      {
        id: "acc-1",
        name: "Anker 13-in-1 USB-C Hub",
        description:
          "Dual 4K HDMI, 100W PD, SD/microSD, 3×USB-A, Gigabit Ethernet — one cable to rule your entire desk.",
        priceRange: "$70 – $90",
        emoji: "🔌",
        amazonQuery: "Anker 13 in 1 USB-C hub docking station",
      },
      {
        id: "acc-2",
        name: "Ergotron LX Monitor Arm",
        description:
          'Full-motion single monitor arm holds up to 34" displays. Frees desk space and perfects posture.',
        priceRange: "$140 – $170",
        emoji: "🦾",
        amazonQuery: "Ergotron LX monitor arm",
      },
      {
        id: "acc-3",
        name: "Logitech C920 HD Pro Webcam",
        description:
          "1080p 30fps autofocus webcam with stereo mics and light correction. Reliable standby for video calls.",
        priceRange: "$60 – $80",
        emoji: "📷",
        amazonQuery: "Logitech C920 HD Pro webcam",
      },
      {
        id: "acc-4",
        name: "Grovemade Leather Desk Mat",
        description:
          "Full-grain leather desk mat with felt base — adds warmth, protects surfaces, and unifies the setup.",
        priceRange: "$85 – $115",
        emoji: "🗒️",
        amazonQuery: "Grovemade leather desk mat",
      },
      {
        id: "acc-5",
        name: "Rain Design mStand Laptop Stand",
        description:
          "Aluminum laptop stand raises screen to eye level, improving posture and airflow simultaneously.",
        priceRange: "$40 – $55",
        emoji: "🏗️",
        amazonQuery: "Rain Design mStand laptop stand aluminum",
      },
      {
        id: "acc-6",
        name: "Cable Matters 6-Port USB-C PD Charger",
        description:
          "Charge laptop, monitor, phone, and more from a single GaN charger. Desk cable chaos — solved.",
        priceRange: "$55 – $75",
        emoji: "⚡",
        amazonQuery: "GaN USB-C PD multi-port charger laptop",
      },
      {
        id: "acc-7",
        name: "Elgato Prompter Pro Monitor",
        description:
          "Teleprompter/studio monitor that keeps notes visible during video calls without looking away.",
        priceRange: "$250 – $300",
        emoji: "🎙️",
        amazonQuery: "Elgato Prompter monitor teleprompter",
      },
    ],
  },
];
