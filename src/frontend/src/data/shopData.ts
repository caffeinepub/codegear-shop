// ── Types ─────────────────────────────────────────────────────────────────────

export interface Product {
  id: string;
  name: string;
  emoji: string;
  description: string;
  priceRange: string;
  amazonQuery: string;
  siteUrl?: string; // when set, button links here instead of Amazon
}

export interface TrendingHobby {
  id: string;
  name: string;
  emoji: string;
  products: Product[];
}

// ── Hobby → Products map ──────────────────────────────────────────────────────

const HOBBY_PRODUCTS: Record<string, Product[]> = {
  music: [
    {
      id: "music-1",
      name: "Focusrite Scarlett Solo Audio Interface",
      emoji: "🎙️",
      description:
        "Record your guitar or mic directly into your DAW with studio-quality preamps and ultra-low latency.",
      priceRange: "$120 – $150",
      amazonQuery: "Focusrite Scarlett Solo audio interface",
    },
    {
      id: "music-2",
      name: "Ableton Live 11 Suite DAW",
      emoji: "🎚️",
      description:
        "Industry-leading digital audio workstation used by producers worldwide for recording, mixing, and live performance.",
      priceRange: "$599 – $749",
      amazonQuery: "Ableton Live 11 Suite DAW software",
    },
    {
      id: "music-3",
      name: "Boss TU-3 Chromatic Tuner Pedal",
      emoji: "🎸",
      description:
        "Legendary tuner pedal with bright LED display and true bypass. A must-have on every pedalboard.",
      priceRange: "$50 – $70",
      amazonQuery: "Boss TU-3 chromatic tuner pedal",
    },
    {
      id: "music-4",
      name: "Audio-Technica ATH-M50x Studio Headphones",
      emoji: "🎧",
      description:
        "Critically acclaimed studio monitor headphones with exceptional clarity for mixing and tracking.",
      priceRange: "$149 – $180",
      amazonQuery: "Audio-Technica ATH-M50x studio headphones",
    },
    {
      id: "music-5",
      name: "Arturia KeyLab Essential 49 MIDI Keyboard",
      emoji: "🎹",
      description:
        "49-key velocity-sensitive MIDI controller with aftertouch, encoders, and Analog Lab software included.",
      priceRange: "$130 – $160",
      amazonQuery: "Arturia KeyLab Essential 49 MIDI keyboard",
    },
    {
      id: "music-6",
      name: "Kyser Quick-Change Guitar Capo",
      emoji: "🎵",
      description:
        "Spring-loaded capo that changes keys in seconds without detuning. Trusted by touring musicians worldwide.",
      priceRange: "$15 – $25",
      amazonQuery: "Kyser Quick-Change guitar capo",
    },
  ],
  photo: [
    {
      id: "photo-1",
      name: "Sony A6700 Mirrorless Camera",
      emoji: "📷",
      description:
        "26MP APS-C sensor with AI-powered autofocus, 4K 120fps video, and compact body — the ultimate travel camera.",
      priceRange: "$1,200 – $1,400",
      amazonQuery: "Sony A6700 mirrorless camera",
    },
    {
      id: "photo-2",
      name: "SanDisk Extreme Pro 256GB V30 SD Card",
      emoji: "💾",
      description:
        "200MB/s read, 90MB/s write — fast enough for burst RAW shooting and 4K video without dropped frames.",
      priceRange: "$30 – $50",
      amazonQuery: "SanDisk Extreme Pro 256GB V30 SD card",
    },
    {
      id: "photo-3",
      name: "Lowepro ProTactic 450 AW II Camera Bag",
      emoji: "🎒",
      description:
        "Modular camera backpack with side-access hatch, tripod straps, and weatherproof shell.",
      priceRange: "$200 – $250",
      amazonQuery: "Lowepro ProTactic 450 AW II camera bag",
    },
    {
      id: "photo-4",
      name: "Joby GorillaPod 3K Flexible Tripod",
      emoji: "📸",
      description:
        "Bendable legs wrap around any surface. Holds cameras up to 3kg and packs into your bag effortlessly.",
      priceRange: "$60 – $80",
      amazonQuery: "Joby GorillaPod 3K flexible tripod",
    },
    {
      id: "photo-5",
      name: "Giottos Rocket Air Blaster Lens Cleaner",
      emoji: "🫧",
      description:
        "Powerful air puff removes dust from sensors and lenses safely without scratching coatings.",
      priceRange: "$10 – $18",
      amazonQuery: "Giottos Rocket Air Blaster lens cleaning kit",
    },
    {
      id: "photo-6",
      name: "Wacom Intuos Pro Medium Tablet",
      emoji: "🖊️",
      description:
        "Professional pen tablet with 8192 pressure levels — the gold standard for photo retouching in Lightroom and Photoshop.",
      priceRange: "$260 – $310",
      amazonQuery: "Wacom Intuos Pro Medium photo editing tablet",
    },
  ],
  art: [
    {
      id: "art-1",
      name: "Wacom One 13 Drawing Tablet",
      emoji: "✏️",
      description:
        "13-inch pen display with 4096 pressure levels and tiltable stand. Draw directly on screen in Procreate-style.",
      priceRange: "$400 – $500",
      amazonQuery: "Wacom One 13 drawing tablet display",
    },
    {
      id: "art-2",
      name: "Copic Sketch Marker Set 72A",
      emoji: "🖊️",
      description:
        "Refillable alcohol-based markers with replaceable nibs. The industry standard for illustration and concept art.",
      priceRange: "$200 – $280",
      amazonQuery: "Copic Sketch marker set 72 art markers",
    },
    {
      id: "art-3",
      name: "Strathmore 400 Series Sketchbook",
      emoji: "📓",
      description:
        "100 sheets of 60lb acid-free drawing paper — beloved by professionals for ink, pencil, and light wash.",
      priceRange: "$15 – $25",
      amazonQuery: "Strathmore 400 Series sketchbook drawing",
    },
    {
      id: "art-4",
      name: "Huion A3 LED Light Pad Lightbox",
      emoji: "💡",
      description:
        "Ultra-thin 5mm LED light pad for tracing, animation, and stencil work with adjustable brightness.",
      priceRange: "$40 – $60",
      amazonQuery: "Huion A3 LED light pad lightbox tracing",
    },
    {
      id: "art-5",
      name: "Winsor & Newton Cotman Watercolor Set",
      emoji: "🎨",
      description:
        "45-half-pan watercolor set with student-grade pigments. Perfect starter kit for transparent washes and plein air.",
      priceRange: "$55 – $80",
      amazonQuery: "Winsor Newton Cotman watercolor set palette",
    },
    {
      id: "art-6",
      name: "Mont Marte Tabletop Easel H-Frame",
      emoji: "🖼️",
      description:
        "Sturdy adjustable tabletop easel holds canvases up to 60cm — great for studio and plein-air sketching.",
      priceRange: "$35 – $55",
      amazonQuery: "Mont Marte tabletop H-frame art easel",
    },
  ],
  cook: [
    {
      id: "cook-1",
      name: "ThermoWorks Thermapen ONE Instant-Read",
      emoji: "🌡️",
      description:
        "1-second read thermometer accurate to ±0.5°F. The professional chef's temperature tool of choice.",
      priceRange: "$100 – $115",
      amazonQuery: "ThermoWorks Thermapen ONE instant read thermometer",
    },
    {
      id: "cook-2",
      name: "Wüsthof Classic 8-Piece Knife Set",
      emoji: "🔪",
      description:
        "Full-tang German forged steel knives with triple-riveted handles. A lifetime investment for any serious cook.",
      priceRange: "$350 – $450",
      amazonQuery: "Wusthof Classic 8 piece knife block set",
    },
    {
      id: "cook-3",
      name: "OXO Good Grips Digital Kitchen Scale",
      emoji: "⚖️",
      description:
        "11lb capacity with pull-out display so the bowl doesn't block the reading. Baker's and barista's best friend.",
      priceRange: "$50 – $70",
      amazonQuery: "OXO Good Grips digital kitchen scale",
    },
    {
      id: "cook-4",
      name: "KitchenAid Artisan Series 5-Quart Stand Mixer",
      emoji: "🫙",
      description:
        "Iconic tilt-head mixer with 10 speeds and 59 compatible attachments — from pasta to ice cream.",
      priceRange: "$380 – $450",
      amazonQuery: "KitchenAid Artisan 5 quart stand mixer",
    },
    {
      id: "cook-5",
      name: "John Boos Maple Edge-Grain Cutting Board",
      emoji: "🪵",
      description:
        "18x12 inch solid maple cutting board with juice groove — durable, knife-friendly, and beautiful.",
      priceRange: "$80 – $110",
      amazonQuery: "John Boos maple cutting board edge grain",
    },
    {
      id: "cook-6",
      name: "OXO Stainless Steel Mandoline Slicer",
      emoji: "🥕",
      description:
        "Adjustable blade slices from paper-thin to 5mm with built-in food holder and safety grip.",
      priceRange: "$40 – $60",
      amazonQuery: "OXO stainless mandoline slicer adjustable",
    },
  ],
  code: [
    {
      id: "code-1",
      name: "Keychron Q1 Pro Mechanical Keyboard",
      emoji: "⌨️",
      description:
        "75% gasket-mount mechanical keyboard with hot-swappable switches, aluminum build, and wireless support.",
      priceRange: "$200 – $230",
      amazonQuery: "Keychron Q1 Pro mechanical keyboard wireless",
    },
    {
      id: "code-2",
      name: 'LG 27" 4K UHD IPS Monitor USB-C',
      emoji: "🖥️",
      description:
        "3840×2160 at 60Hz with 96W USB-C charging and HDR400. Crystal-clear text for long code review sessions.",
      priceRange: "$350 – $450",
      amazonQuery: "LG 27UK850 4K UHD IPS monitor USB-C 96W",
    },
    {
      id: "code-3",
      name: "Anker 13-in-1 USB-C Hub Docking Station",
      emoji: "🔌",
      description:
        "Dual 4K HDMI, 100W PD, SD/microSD, 3×USB-A, Gigabit Ethernet — one cable for your entire desk.",
      priceRange: "$70 – $90",
      amazonQuery: "Anker 13 in 1 USB-C hub docking station",
    },
    {
      id: "code-4",
      name: "Logitech MX Master 3S Wireless Mouse",
      emoji: "🖱️",
      description:
        "8K DPI sensor, MagSpeed scroll wheel, and side-thumb buttons. The gold standard for developer productivity.",
      priceRange: "$90 – $100",
      amazonQuery: "Logitech MX Master 3S wireless mouse developer",
    },
    {
      id: "code-5",
      name: "Rain Design mStand Laptop Stand",
      emoji: "🏗️",
      description:
        "Machined aluminum stand raises your display to eye level, improving posture and reducing neck strain.",
      priceRange: "$40 – $55",
      amazonQuery: "Rain Design mStand aluminum laptop stand",
    },
    {
      id: "code-6",
      name: "Ergotron LX Dual Monitor Arm",
      emoji: "🦾",
      description:
        "Full-motion dual monitor arm frees 10+ lbs of desk space and brings screens to perfect viewing angles.",
      priceRange: "$180 – $220",
      amazonQuery: "Ergotron LX dual monitor arm",
    },
  ],
  gaming: [
    {
      id: "gaming-1",
      name: "SteelSeries Arctis Nova Pro Wireless Headset",
      emoji: "🎧",
      description:
        "Active noise cancellation, ClearCast AI mic, 22-hour battery, and hot-swap battery system for zero downtime.",
      priceRange: "$330 – $380",
      amazonQuery: "SteelSeries Arctis Nova Pro Wireless gaming headset",
    },
    {
      id: "gaming-2",
      name: "Wooting 60HE+ Analog Gaming Keyboard",
      emoji: "⌨️",
      description:
        "Hall effect switches with adjustable actuation from 0.1 to 4mm — the ultimate competitive keyboard.",
      priceRange: "$175 – $200",
      amazonQuery: "Wooting 60HE+ analog mechanical gaming keyboard",
    },
    {
      id: "gaming-3",
      name: "Logitech G Pro X Superlight 2 Mouse",
      emoji: "🖱️",
      description:
        "Ultra-lightweight 60g mouse with HERO 32K sensor and LIGHTSPEED 1ms wireless for tournament play.",
      priceRange: "$150 – $170",
      amazonQuery: "Logitech G Pro X Superlight 2 gaming mouse",
    },
    {
      id: "gaming-4",
      name: 'Alienware AW2725DF 27" QD-OLED 360Hz',
      emoji: "🖥️",
      description:
        "Quantum Dot OLED with 0.03ms response, 360Hz refresh, and near-infinite contrast for immersive gaming.",
      priceRange: "$700 – $900",
      amazonQuery: "Alienware AW2725DF QD-OLED 360Hz gaming monitor",
    },
    {
      id: "gaming-5",
      name: "Xbox Elite Wireless Controller Series 2",
      emoji: "🎮",
      description:
        "Adjustable-tension thumbsticks, hair-trigger locks, back paddles, and 40-hour rechargeable battery.",
      priceRange: "$150 – $180",
      amazonQuery: "Xbox Elite Wireless Controller Series 2",
    },
    {
      id: "gaming-6",
      name: "Secretlab TITAN Evo Gaming Chair",
      emoji: "💺",
      description:
        "Lumbar support system, cold-cure foam, and 4-way L-FROG armrests — built to last a decade of gaming.",
      priceRange: "$429 – $549",
      amazonQuery: "Secretlab TITAN Evo gaming chair",
    },
  ],
  garden: [
    {
      id: "garden-1",
      name: "Burpee Seed Starting Kit 72-Cell",
      emoji: "🌱",
      description:
        "Self-watering seed tray with humidity dome and biodegradable peat pellets — get 72 seedlings started at once.",
      priceRange: "$20 – $35",
      amazonQuery: "Burpee seed starting kit 72 cell tray",
    },
    {
      id: "garden-2",
      name: "Felco F-2 Classic Manual Pruner",
      emoji: "✂️",
      description:
        "Swiss-made bypass pruner with hardened steel blade, ergonomic grip, and replaceable parts. Lasts a lifetime.",
      priceRange: "$55 – $70",
      amazonQuery: "Felco F-2 classic manual pruner bypass",
    },
    {
      id: "garden-3",
      name: "Vego 9-in-1 Modular Metal Raised Garden Bed",
      emoji: "🌻",
      description:
        "Galvanized steel beds with 17-inch depth — perfect for vegetables, herbs, and flowers with no timber rot.",
      priceRange: "$100 – $150",
      amazonQuery: "Vego modular metal raised garden bed 9 in 1",
    },
    {
      id: "garden-4",
      name: "Luster Leaf Rapitest Soil Test Kit",
      emoji: "🧪",
      description:
        "Tests soil pH, nitrogen, phosphorus, and potassium with quick-result color capsules. 40 tests included.",
      priceRange: "$15 – $25",
      amazonQuery: "Luster Leaf Rapitest soil test kit pH nutrients",
    },
    {
      id: "garden-5",
      name: "Haws Slimcan Watering Can 1.7L",
      emoji: "🚿",
      description:
        "Elegant copper-colored indoor watering can with detachable long-reach lance for precision watering.",
      priceRange: "$30 – $45",
      amazonQuery: "Haws Slimcan indoor watering can copper",
    },
    {
      id: "garden-6",
      name: "Spider Farmer SE3000 LED Grow Light",
      emoji: "💡",
      description:
        "300W full-spectrum LED with Samsung LM301H evo diodes. Grows vegetables, herbs, and flowers indoors year-round.",
      priceRange: "$180 – $220",
      amazonQuery: "Spider Farmer SE3000 LED grow lights indoor plants",
    },
  ],
  yoga: [
    {
      id: "yoga-1",
      name: "Manduka PRO Yoga Mat 6mm",
      emoji: "🧘",
      description:
        "High-density 6mm mat with superior joint cushioning, non-slip surface, and guaranteed for life.",
      priceRange: "$120 – $140",
      amazonQuery: "Manduka PRO yoga mat 6mm non-slip",
    },
    {
      id: "yoga-2",
      name: "TriggerPoint GRID Foam Roller",
      emoji: "🛞",
      description:
        "Multi-density foam surface releases muscle tightness, improves circulation, and accelerates recovery.",
      priceRange: "$35 – $50",
      amazonQuery: "TriggerPoint GRID foam roller muscle recovery",
    },
    {
      id: "yoga-3",
      name: "Fit Simplify Resistance Loop Bands Set",
      emoji: "💪",
      description:
        "Set of 5 latex bands with resistance levels from X-Light to X-Heavy. Stretches, activations, and rehab.",
      priceRange: "$12 – $20",
      amazonQuery: "Fit Simplify resistance loop bands set 5",
    },
    {
      id: "yoga-4",
      name: "Zafu Buckwheat Meditation Cushion",
      emoji: "🪷",
      description:
        "Traditional round zafu filled with organic buckwheat hull for stable, comfortable seated meditation.",
      priceRange: "$35 – $60",
      amazonQuery: "Zafu buckwheat meditation cushion zazen",
    },
    {
      id: "yoga-5",
      name: "Gaiam Essentials Cork Yoga Block Set",
      emoji: "🧱",
      description:
        "Natural cork yoga blocks provide stable support for poses, balance, and flexibility training.",
      priceRange: "$25 – $40",
      amazonQuery: "Gaiam cork yoga block set pair",
    },
    {
      id: "yoga-6",
      name: "Tumaz Yoga Strap 10ft D-Ring Buckle",
      emoji: "🪢",
      description:
        "Heavy-duty cotton strap with D-ring metal buckle for deep stretching, flexibility, and alignment work.",
      priceRange: "$10 – $18",
      amazonQuery: "Tumaz yoga strap D-ring buckle stretching",
    },
  ],
  run: [
    {
      id: "run-1",
      name: "Brooks Ghost 16 Running Shoes",
      emoji: "👟",
      description:
        "DNA LOFT v3 cushioning, smooth heel-to-toe transition, and wide toe box for long-distance comfort.",
      priceRange: "$130 – $160",
      amazonQuery: "Brooks Ghost 16 running shoes cushioned",
    },
    {
      id: "run-2",
      name: "Garmin Forerunner 265 GPS Watch",
      emoji: "⌚",
      description:
        "AMOLED display, GNSS multi-band GPS, HRV status, training readiness, and 13-day battery life.",
      priceRange: "$380 – $450",
      amazonQuery: "Garmin Forerunner 265 GPS running watch",
    },
    {
      id: "run-3",
      name: "TriggerPoint GRID Foam Roller",
      emoji: "🛞",
      description:
        "Multi-density surface breaks up fascia and speeds muscle recovery after hard training runs.",
      priceRange: "$35 – $50",
      amazonQuery: "TriggerPoint GRID foam roller",
    },
    {
      id: "run-4",
      name: "CamelBak Ultralight Running Vest 6L",
      emoji: "🎽",
      description:
        "6L hydration vest with two 500ml soft flasks, bounce-free fit, and front pocket for gels and phone.",
      priceRange: "$100 – $130",
      amazonQuery: "CamelBak Ultralight 6L running hydration vest",
    },
    {
      id: "run-5",
      name: "Shokz OpenRun Pro Bone Conduction Earbuds",
      emoji: "🎵",
      description:
        "Open-ear design keeps you aware of traffic while streaming music — IP55 waterproof for any weather.",
      priceRange: "$100 – $130",
      amazonQuery: "Shokz OpenRun Pro bone conduction running earbuds",
    },
    {
      id: "run-6",
      name: "CEP Ultralight Short Compression Socks",
      emoji: "🧦",
      description:
        "Medical-grade graduated compression reduces muscle vibration and fatigue during long-distance running.",
      priceRange: "$45 – $60",
      amazonQuery: "CEP ultralight compression socks running",
    },
  ],
  swim: [
    {
      id: "swim-1",
      name: "Speedo Vanquisher 2.0 Swim Goggles",
      emoji: "🥽",
      description:
        "Anti-fog UV protection lenses with ultra-seal gasket and adjustable split yoke strap system.",
      priceRange: "$20 – $35",
      amazonQuery: "Speedo Vanquisher 2.0 swim goggles anti-fog",
    },
    {
      id: "swim-2",
      name: "Arena Silicone Swim Cap",
      emoji: "🏊",
      description:
        "100% silicone cap reduces drag, protects hair from chlorine, and fits all head sizes comfortably.",
      priceRange: "$8 – $15",
      amazonQuery: "Arena silicone swim cap",
    },
    {
      id: "swim-3",
      name: "Speedo Team Pull Buoy",
      emoji: "🪀",
      description:
        "EVA foam pull buoy isolates arm stroke by elevating hips — essential for improving upper-body technique.",
      priceRange: "$15 – $25",
      amazonQuery: "Speedo team pull buoy swimming",
    },
    {
      id: "swim-4",
      name: "TYR Sport Classic Kickboard",
      emoji: "🏄",
      description:
        "Lightweight EVA foam kickboard with ergonomic grips for leg isolation drills and balance training.",
      priceRange: "$15 – $25",
      amazonQuery: "TYR Sport Classic kickboard swimming",
    },
    {
      id: "swim-5",
      name: "Finis Z2 Gold Zoomers Swim Fins",
      emoji: "🐬",
      description:
        "Short-blade fins increase ankle flexibility, kick speed, and cardiovascular conditioning.",
      priceRange: "$30 – $45",
      amazonQuery: "Finis Z2 Gold Zoomers swim fins",
    },
    {
      id: "swim-6",
      name: "H2O Audio Interval+ Waterproof Earbuds",
      emoji: "🎧",
      description:
        "IPX8 rated earbuds with bone conduction alternative for lap swimming — 8GB onboard storage.",
      priceRange: "$60 – $80",
      amazonQuery: "H2O Audio waterproof swimming earbuds MP3",
    },
  ],
  read: [
    {
      id: "read-1",
      name: "Kindle Paperwhite Signature Edition",
      emoji: "📖",
      description:
        "6.8-inch glare-free display, auto-adjusting warm light, 32GB storage, and 12-week battery life.",
      priceRange: "$140 – $175",
      amazonQuery: "Kindle Paperwhite Signature Edition e-reader",
    },
    {
      id: "read-2",
      name: "LuminoLite Rechargeable Book Light",
      emoji: "💡",
      description:
        "3 brightness levels, clip-on design, and 70-hour battery. Read in any light without disturbing others.",
      priceRange: "$15 – $25",
      amazonQuery: "LuminoLite rechargeable LED book light reading",
    },
    {
      id: "read-3",
      name: "Pipsticks Bookstand Reading Stand",
      emoji: "📚",
      description:
        "Adjustable book stand holds heavy tomes open hands-free at any angle — ideal for students and hobbyists.",
      priceRange: "$20 – $35",
      amazonQuery: "adjustable book stand reading hands free",
    },
    {
      id: "read-4",
      name: "Peepers Reading Glasses Blue Light",
      emoji: "👓",
      description:
        "Stylish blue-light filtering reading glasses with spring hinges and scratch-resistant lenses.",
      priceRange: "$30 – $50",
      amazonQuery: "Peepers reading glasses blue light filter",
    },
    {
      id: "read-5",
      name: "Brass Owl Page Marker Bookmarks Set",
      emoji: "🔖",
      description:
        "Elegant brass bookmark clips with artistic owl design — won't fall out and won't damage pages.",
      priceRange: "$10 – $18",
      amazonQuery: "brass bookmark clips reading marker set",
    },
    {
      id: "read-6",
      name: "Sony WH-1000XM5 Noise-Cancelling Headphones",
      emoji: "🎧",
      description:
        "Industry-leading ANC lets you escape into any book while blocking out the world completely.",
      priceRange: "$280 – $350",
      amazonQuery: "Sony WH-1000XM5 noise cancelling headphones reading",
    },
  ],
  travel: [
    {
      id: "travel-1",
      name: "Osprey Farpoint 40 Travel Backpack",
      emoji: "🎒",
      description:
        "Airline carry-on compliant 40L pack with panel-loading access, padded laptop sleeve, and hip belt.",
      priceRange: "$160 – $200",
      amazonQuery: "Osprey Farpoint 40 travel backpack carry-on",
    },
    {
      id: "travel-2",
      name: "Black Diamond Trail Ergo Cork Trekking Poles",
      emoji: "🏔️",
      description:
        "Ergonomic cork grip wicks moisture, FlickLock Pro adjust in 3 seconds, and SpeedCone tips grip any terrain.",
      priceRange: "$120 – $150",
      amazonQuery: "Black Diamond Trail Ergo cork trekking poles",
    },
    {
      id: "travel-3",
      name: "Petzl Actik Core Rechargeable Headlamp",
      emoji: "🔦",
      description:
        "450 lumens, red lighting for night vision, and a hybrid power concept that accepts both USB and batteries.",
      priceRange: "$40 – $60",
      amazonQuery: "Petzl Actik Core rechargeable headlamp 450 lumen",
    },
    {
      id: "travel-4",
      name: "Nemo Forte 20° Sleeping Bag",
      emoji: "🛌",
      description:
        "Spoon-shaped bag with integrated blanket fold, blanket-grip zipper, and 550-fill down insulation.",
      priceRange: "$200 – $260",
      amazonQuery: "Nemo Forte 20 degree sleeping bag camping",
    },
    {
      id: "travel-5",
      name: "Sawyer Squeeze Water Filter",
      emoji: "💧",
      description:
        "Filters to 0.1 micron, removes bacteria and protozoa, and weighs only 3 ounces. No chemicals needed.",
      priceRange: "$30 – $45",
      amazonQuery: "Sawyer Squeeze portable water filter backpacking",
    },
    {
      id: "travel-6",
      name: "BigBlue 28W USB Solar Charger",
      emoji: "☀️",
      description:
        "Foldable solar panel with dual USB ports charges phones and devices during day hikes or camp.",
      priceRange: "$45 – $65",
      amazonQuery: "BigBlue 28W foldable USB solar charger hiking",
    },
  ],
  dance: [
    {
      id: "dance-1",
      name: "Capezio Hanami Ballet Slipper",
      emoji: "🩰",
      description:
        "Split-sole canvas ballet flat with elastic drawstring, suede patch, and reinforced toe for class and rehearsal.",
      priceRange: "$25 – $40",
      amazonQuery: "Capezio Hanami ballet slipper canvas split sole",
    },
    {
      id: "dance-2",
      name: "Fit Simplify Resistance Bands Set of 5",
      emoji: "💪",
      description:
        "Progressive resistance for barre stretches, leg extensions, and turnout strengthening exercises.",
      priceRange: "$12 – $20",
      amazonQuery: "resistance bands set dance barre stretching",
    },
    {
      id: "dance-3",
      name: "JBL Flip 6 Portable Bluetooth Speaker",
      emoji: "🔊",
      description:
        "IP67 waterproof, 12-hour battery, and powerful sound — perfect for rehearsal spaces and outdoor practice.",
      priceRange: "$100 – $130",
      amazonQuery: "JBL Flip 6 portable bluetooth speaker",
    },
    {
      id: "dance-4",
      name: "Mirrors.com 65-Inch Full-Length Mirror",
      emoji: "🪞",
      description:
        "Full-length wall mirror with beveled edge for checking form, alignment, and choreography at home.",
      priceRange: "$150 – $250",
      amazonQuery: "full length wall dance mirror studio home",
    },
    {
      id: "dance-5",
      name: "Capezio Stirrup Leg Warmers",
      emoji: "🧦",
      description:
        "Acrylic knit stirrup warmers that keep muscles and joints warm during warm-up and cool-down.",
      priceRange: "$15 – $25",
      amazonQuery: "Capezio stirrup leg warmers dance",
    },
    {
      id: "dance-6",
      name: "Mato & Hash Canvas Dance Duffel Bag",
      emoji: "👜",
      description:
        "Spacious canvas dance bag with side shoe pocket, mirror pouch, and customizable embroidery option.",
      priceRange: "$30 – $50",
      amazonQuery: "canvas dance duffel bag studio bag",
    },
  ],
  film: [
    {
      id: "film-1",
      name: "GoPro HERO12 Black Action Camera",
      emoji: "🎬",
      description:
        "5.3K60 video, HyperSmooth 6.0 stabilization, HDR video, and Max Lens Mod 2.0 for ultra-wide shots.",
      priceRange: "$350 – $400",
      amazonQuery: "GoPro HERO12 Black action camera 5K",
    },
    {
      id: "film-2",
      name: "Joby GorillaPod 3K Flexible Tripod",
      emoji: "📸",
      description:
        "Bendable, grippable legs go anywhere — wrap around poles, hang from trees, or stand on uneven terrain.",
      priceRange: "$60 – $80",
      amazonQuery: "Joby GorillaPod 3K flexible video tripod",
    },
    {
      id: "film-3",
      name: "Rode VideoMicro II On-Camera Microphone",
      emoji: "🎙️",
      description:
        "Supercardioid condenser mic with Rycote Lyre suspension mount — dramatically improves video audio quality.",
      priceRange: "$80 – $100",
      amazonQuery: "Rode VideoMicro II on-camera microphone",
    },
    {
      id: "film-4",
      name: "Lume Cube Edge LED Video Light",
      emoji: "💡",
      description:
        "Compact bi-color LED panel with magnetic mount, CRI 95+, and app control for dynamic video lighting.",
      priceRange: "$70 – $100",
      amazonQuery: "Lume Cube Edge LED video light panel",
    },
    {
      id: "film-5",
      name: "DaVinci Resolve 18 Studio License",
      emoji: "🎞️",
      description:
        "Professional video editing, color grading, and audio mixing in one app — free version available, too.",
      priceRange: "$295 (one-time)",
      amazonQuery: "DaVinci Resolve 18 Studio license video editing",
    },
    {
      id: "film-6",
      name: "DJI OM 6 Smartphone Gimbal",
      emoji: "🎥",
      description:
        "3-axis stabilizer with magnetic phone mount, 3-hour battery, and ActiveTrack 6.0 subject tracking.",
      priceRange: "$150 – $180",
      amazonQuery: "DJI OM 6 smartphone gimbal stabilizer",
    },
  ],
  "3d": [
    {
      id: "3d-1",
      name: "Bambu Lab A1 Mini 3D Printer",
      emoji: "🖨️",
      description:
        "Multi-material AMS Lite support, 360mm/s print speed, and auto-calibration — the best beginner 3D printer of 2024.",
      priceRange: "$300 – $400",
      amazonQuery: "Bambu Lab A1 Mini 3D printer",
    },
    {
      id: "3d-2",
      name: "Hatchbox PLA Filament 1.75mm 1kg",
      emoji: "🧵",
      description:
        "Consistent diameter, low warp, and vibrant colors — the go-to PLA brand for reliable results.",
      priceRange: "$20 – $28",
      amazonQuery: "Hatchbox PLA filament 1.75mm 1kg",
    },
    {
      id: "3d-3",
      name: "Elegoo Saturn 4 Ultra MSLA Resin Printer",
      emoji: "🔬",
      description:
        "12K mono LCD resin printer with 218×123mm build plate for ultra-detailed miniatures and jewelry.",
      priceRange: "$350 – $450",
      amazonQuery: "Elegoo Saturn 4 Ultra resin 3D printer",
    },
    {
      id: "3d-4",
      name: "DOITOOL Stainless Spatula Tool Set",
      emoji: "🛠️",
      description:
        "6-piece stainless spatula set for removing prints from bed without scratching the surface.",
      priceRange: "$12 – $20",
      amazonQuery: "stainless steel spatula tool set 3D print removal",
    },
    {
      id: "3d-5",
      name: "Autodesk Fusion 360 Subscription",
      emoji: "💻",
      description:
        "Professional CAD/CAM/CAE software for designing mechanical parts and organic shapes for 3D printing.",
      priceRange: "$70/mo or $545/yr",
      amazonQuery: "Autodesk Fusion 360 3D design software subscription",
    },
    {
      id: "3d-6",
      name: "Creality Tempered Glass Printer Bed",
      emoji: "📐",
      description:
        "Borosilicate glass bed with micro-texture coating for perfect first-layer adhesion and easy part release.",
      priceRange: "$15 – $30",
      amazonQuery: "Creality tempered glass printer bed borosilicate",
    },
  ],
  drone: [
    {
      id: "drone-1",
      name: "DJI Mini 4 Pro Drone",
      emoji: "🚁",
      description:
        "249g under FAA registration threshold, 4K/60fps video, obstacle avoidance, and 34-min flight time.",
      priceRange: "$760 – $960",
      amazonQuery: "DJI Mini 4 Pro drone 4K",
    },
    {
      id: "drone-2",
      name: "Ruko Intelligent Flight Battery Pack",
      emoji: "🔋",
      description:
        "Two extra batteries give you 3× the flight time — never cut a session short because of power.",
      priceRange: "$30 – $50",
      amazonQuery: "DJI Mini drone extra batteries",
    },
    {
      id: "drone-3",
      name: "Smatree Hard Shell Drone Carrying Case",
      emoji: "🧳",
      description:
        "Waterproof EVA shell with custom foam inserts for drone, controller, batteries, and filters.",
      priceRange: "$40 – $60",
      amazonQuery: "DJI Mini drone hard carrying case",
    },
    {
      id: "drone-4",
      name: "PolarPro 3-Pack ND Filter Set DJI Mini 4 Pro",
      emoji: "🔭",
      description:
        "ND8/16/64 filters for cinematic motion blur in bright conditions — essential for video quality.",
      priceRange: "$60 – $90",
      amazonQuery: "PolarPro ND filter set DJI Mini 4 Pro",
    },
    {
      id: "drone-5",
      name: "DJI RC 2 Smart Controller",
      emoji: "🕹️",
      description:
        'Built-in 5.5" 1000-nit screen eliminates phone need, with OcuSync 4 transmission at 20km range.',
      priceRange: "$380 – $430",
      amazonQuery: "DJI RC 2 smart controller built-in screen",
    },
    {
      id: "drone-6",
      name: "SanDisk Extreme 128GB MicroSD A2",
      emoji: "💾",
      description:
        "A2 performance for 4K RAW video capture — the fastest MicroSD for DJI drones.",
      priceRange: "$18 – $30",
      amazonQuery: "SanDisk Extreme 128GB microSD A2 drone",
    },
  ],
  stream: [
    {
      id: "stream-1",
      name: "Elgato 4K60 Pro MK.2 Capture Card",
      emoji: "📹",
      description:
        "PCIe capture card records console gameplay at 4K60 with zero-lag passthrough and VRR support.",
      priceRange: "$200 – $250",
      amazonQuery: "Elgato 4K60 Pro MK.2 capture card PCIe",
    },
    {
      id: "stream-2",
      name: "Elgato Ring Light 18-inch",
      emoji: "💡",
      description:
        "Desk-mounted 18-inch ring light with 2800K–6500K range and smartphone app control for perfect lighting.",
      priceRange: "$180 – $220",
      amazonQuery: "Elgato Ring Light 18 inch streaming",
    },
    {
      id: "stream-3",
      name: "Logitech C920X HD Pro Webcam",
      emoji: "📷",
      description:
        "1080p/30fps with dual stereo mics, background replacement, and light correction for stream-quality video.",
      priceRange: "$70 – $90",
      amazonQuery: "Logitech C920x HD Pro webcam streaming",
    },
    {
      id: "stream-4",
      name: "Elgato Wave 3 USB Condenser Microphone",
      emoji: "🎙️",
      description:
        "Cardioid condenser with Clipguard anti-clip technology and Wave Link mixing software for streamers.",
      priceRange: "$140 – $170",
      amazonQuery: "Elgato Wave 3 USB condenser microphone",
    },
    {
      id: "stream-5",
      name: "OBS Studio + Streamlabs (Free Software)",
      emoji: "💻",
      description:
        "Industry-standard free streaming software — scene management, transitions, and multi-platform RTMP streaming.",
      priceRange: "Free",
      amazonQuery: "streaming software OBS Streamlabs setup guide",
    },
    {
      id: "stream-6",
      name: "Elgato Green Screen XL Pop-Up",
      emoji: "🎭",
      description:
        "Wrinkle-resistant 1.8×2.1m green screen that pops up in seconds and folds flat for storage.",
      priceRange: "$150 – $190",
      amazonQuery: "Elgato green screen XL pop-up streaming",
    },
  ],
  default: [
    {
      id: "def-1",
      name: "Sony WH-1000XM5 Noise-Cancelling Headphones",
      emoji: "🎧",
      description:
        "Industry-leading ANC, 30-hour battery, and multipoint Bluetooth for distraction-free focus.",
      priceRange: "$280 – $350",
      amazonQuery: "Sony WH-1000XM5 noise cancelling headphones",
    },
    {
      id: "def-2",
      name: "Humanscale Freedom Ergonomic Chair",
      emoji: "💺",
      description:
        "Self-adjusting recline mechanism, form-sensing mesh back, and pivoting armrests for long sessions.",
      priceRange: "$1,100 – $1,500",
      amazonQuery: "ergonomic chair office productivity",
    },
    {
      id: "def-3",
      name: "BenQ ScreenBar Halo Smart Desk Lamp",
      emoji: "💡",
      description:
        "Auto-dimming ambient backlight eliminates screen glare, reduces eye strain, and enhances desk atmosphere.",
      priceRange: "$130 – $160",
      amazonQuery: "BenQ ScreenBar Halo smart desk lamp",
    },
    {
      id: "def-4",
      name: "Leuchtturm1917 Dotted Notebook A5",
      emoji: "📓",
      description:
        "211-page dot-grid notebook with numbered pages, table of contents, and acid-free paper for planning.",
      priceRange: "$20 – $30",
      amazonQuery: "Leuchtturm1917 dotted notebook A5 planner",
    },
    {
      id: "def-5",
      name: "Anker 633 Magnetic Wireless Charger",
      emoji: "⚡",
      description:
        "15W MagSafe-compatible wireless charger with fold-out phone stand and USB-C travel adapter.",
      priceRange: "$35 – $50",
      amazonQuery: "Anker 633 magnetic wireless charger MagSafe",
    },
    {
      id: "def-6",
      name: "Time Timer MOD 60-Minute Visual Timer",
      emoji: "⏱️",
      description:
        "Visual countdown disk shrinks to show time remaining — the Pomodoro timer that actually works.",
      priceRange: "$35 – $50",
      amazonQuery: "Time Timer MOD visual focus timer Pomodoro",
    },
  ],
};

// ── Matching function ─────────────────────────────────────────────────────────

export function getProductsForHobby(hobbyName: string): Product[] {
  const n = hobbyName.toLowerCase();

  let key: keyof typeof HOBBY_PRODUCTS = "default";

  if (
    n.includes("guitar") ||
    n.includes("music") ||
    n.includes("piano") ||
    n.includes("drum") ||
    n.includes("violin") ||
    n.includes("bass")
  ) {
    key = "music";
  } else if (n.includes("photo") || n.includes("camera")) {
    key = "photo";
  } else if (
    n.includes("paint") ||
    n.includes("art") ||
    n.includes("draw") ||
    n.includes("sketch") ||
    n.includes("illustrat")
  ) {
    key = "art";
  } else if (
    n.includes("cook") ||
    n.includes("bake") ||
    n.includes("chef") ||
    n.includes("baking")
  ) {
    key = "cook";
  } else if (
    n.includes("code") ||
    n.includes("program") ||
    n.includes("dev") ||
    n.includes("coding") ||
    n.includes("software")
  ) {
    key = "code";
  } else if (n.includes("gaming") || n.includes("game")) {
    key = "gaming";
  } else if (
    n.includes("garden") ||
    n.includes("plant") ||
    n.includes("flower")
  ) {
    key = "garden";
  } else if (n.includes("yoga") || n.includes("meditat")) {
    key = "yoga";
  } else if (n.includes("run") || n.includes("jog") || n.includes("marathon")) {
    key = "run";
  } else if (n.includes("swim") || n.includes("pool")) {
    key = "swim";
  } else if (n.includes("read") || n.includes("book")) {
    key = "read";
  } else if (n.includes("travel") || n.includes("hike") || n.includes("camp")) {
    key = "travel";
  } else if (n.includes("dance") || n.includes("ballet")) {
    key = "dance";
  } else if (n.includes("film") || n.includes("movie") || n.includes("video")) {
    key = "film";
  } else if (n.includes("3d") || n.includes("print")) {
    key = "3d";
  } else if (n.includes("drone") || n.includes("fly")) {
    key = "drone";
  } else if (n.includes("stream") || n.includes("streaming")) {
    key = "stream";
  }

  return HOBBY_PRODUCTS[key].slice(0, 4);
}

// ── Trending hobbies (always shown) ──────────────────────────────────────────

export const TRENDING_HOBBIES: TrendingHobby[] = [
  {
    id: "3d-printing",
    name: "3D Printing",
    emoji: "🖨️",
    products: getProductsForHobby("3d printing"),
  },
  {
    id: "streaming",
    name: "Streaming",
    emoji: "🎥",
    products: getProductsForHobby("streaming"),
  },
  {
    id: "drone-flying",
    name: "Drone Flying",
    emoji: "🚁",
    products: getProductsForHobby("drone flying"),
  },
  {
    id: "gaming",
    name: "Gaming",
    emoji: "🎮",
    products: getProductsForHobby("gaming"),
  },
  {
    id: "coding",
    name: "Coding",
    emoji: "💻",
    products: getProductsForHobby("coding"),
  },
  {
    id: "photography",
    name: "Photography",
    emoji: "📷",
    products: getProductsForHobby("photography"),
  },
];

// ── General Books ─────────────────────────────────────────────────────────────

export const GENERAL_BOOKS: Product[] = [
  {
    id: "book-gen-1",
    name: "Atomic Habits by James Clear",
    emoji: "⚛️",
    description:
      "The definitive guide to building good habits and breaking bad ones — tiny changes that yield remarkable results.",
    priceRange: "$12 – $18",
    amazonQuery: "Atomic Habits James Clear book",
  },
  {
    id: "book-gen-2",
    name: "The Pragmatic Programmer by David Thomas",
    emoji: "🧑‍💻",
    description:
      "20th anniversary edition of the classic software craftsmanship guide. Essential reading for every developer.",
    priceRange: "$35 – $50",
    amazonQuery: "The Pragmatic Programmer 20th Anniversary Edition book",
  },
  {
    id: "book-gen-3",
    name: "Sapiens by Yuval Noah Harari",
    emoji: "🦴",
    description:
      "A sweeping history of humankind from the Stone Age to the present — one of the most important books of the decade.",
    priceRange: "$12 – $20",
    amazonQuery: "Sapiens Yuval Noah Harari book",
  },
  {
    id: "book-gen-4",
    name: "Dune by Frank Herbert",
    emoji: "🏜️",
    description:
      "The greatest science fiction novel ever written. A desert planet, a prophecy, and the birth of a legend.",
    priceRange: "$10 – $18",
    amazonQuery: "Dune Frank Herbert novel book",
  },
  {
    id: "book-gen-5",
    name: "Thinking, Fast and Slow by Daniel Kahneman",
    emoji: "🧠",
    description:
      "Nobel laureate Kahneman reveals the two systems that drive the way we think — a landmark in psychology.",
    priceRange: "$12 – $18",
    amazonQuery: "Thinking Fast and Slow Daniel Kahneman book",
  },
  {
    id: "book-gen-6",
    name: "The Hitchhiker's Guide to the Galaxy by Douglas Adams",
    emoji: "🌌",
    description:
      "42. The answer to the Ultimate Question of Life. A comedic sci-fi masterpiece for every bookshelf.",
    priceRange: "$10 – $16",
    amazonQuery: "Hitchhiker's Guide to the Galaxy Douglas Adams book",
  },
];

// ── Hobby-Specific Books ──────────────────────────────────────────────────────

const HOBBY_BOOKS: Record<string, Product[]> = {
  code: [
    {
      id: "book-code-1",
      name: "Clean Code by Robert C. Martin",
      emoji: "🧹",
      description:
        "A handbook of agile software craftsmanship. Learn to write code that is readable, maintainable, and elegant.",
      priceRange: "$35 – $50",
      amazonQuery: "Clean Code Robert Martin programming book",
    },
    {
      id: "book-code-2",
      name: "The Algorithm Design Manual by Steven Skiena",
      emoji: "📐",
      description:
        "The go-to reference for algorithm design and analysis — covers data structures, graph algorithms, and real-world applications.",
      priceRange: "$40 – $65",
      amazonQuery: "Algorithm Design Manual Steven Skiena book",
    },
    {
      id: "book-code-3",
      name: "You Don't Know JS by Kyle Simpson",
      emoji: "🟨",
      description:
        "A deep dive into the core mechanisms of JavaScript. Six volumes that turn JS beginners into JS masters.",
      priceRange: "$20 – $35",
      amazonQuery: "You Don't Know JS Kyle Simpson book series",
    },
  ],
  gaming: [
    {
      id: "book-gaming-1",
      name: "The Art of Game Design by Jesse Schell",
      emoji: "🎲",
      description:
        "Over 100 lenses for viewing your game design from unexpected perspectives — a must-read for game creators.",
      priceRange: "$45 – $65",
      amazonQuery: "The Art of Game Design Jesse Schell book",
    },
    {
      id: "book-gaming-2",
      name: "Blood, Sweat, and Pixels by Jason Schreier",
      emoji: "🩸",
      description:
        "Behind-the-scenes stories of game development — the chaos, passion, and near-disasters behind your favorite titles.",
      priceRange: "$12 – $18",
      amazonQuery: "Blood Sweat and Pixels Jason Schreier book",
    },
    {
      id: "book-gaming-3",
      name: "Console Wars by Blake J. Harris",
      emoji: "🕹️",
      description:
        "The true story of the 1990s battle between Sega and Nintendo that changed pop culture forever.",
      priceRange: "$12 – $18",
      amazonQuery: "Console Wars Blake Harris Sega Nintendo book",
    },
  ],
  music: [
    {
      id: "book-music-1",
      name: "This Is Your Brain on Music by Daniel Levitin",
      emoji: "🧠",
      description:
        "A neuroscientist and record producer explores the science behind our emotional responses to music.",
      priceRange: "$12 – $18",
      amazonQuery: "This Is Your Brain on Music Daniel Levitin book",
    },
    {
      id: "book-music-2",
      name: "How Music Works by David Byrne",
      emoji: "🎵",
      description:
        "The Talking Heads frontman reflects on how context shapes music creation — insightful, funny, and revelatory.",
      priceRange: "$15 – $22",
      amazonQuery: "How Music Works David Byrne book",
    },
    {
      id: "book-music-3",
      name: "The Rest Is Noise by Alex Ross",
      emoji: "🎼",
      description:
        "A sweeping history of 20th-century classical music — from Strauss and Mahler to John Cage and beyond.",
      priceRange: "$15 – $20",
      amazonQuery: "The Rest Is Noise Alex Ross music history book",
    },
  ],
  photo: [
    {
      id: "book-photo-1",
      name: "Understanding Exposure by Bryan Peterson",
      emoji: "📷",
      description:
        "The essential guide to mastering aperture, shutter speed, and ISO for stunning photographs in any light.",
      priceRange: "$18 – $28",
      amazonQuery: "Understanding Exposure Bryan Peterson photography book",
    },
    {
      id: "book-photo-2",
      name: "The Photographer's Eye by Michael Freeman",
      emoji: "👁️",
      description:
        "Teaches the visual skills needed to compose powerful photographs — how to see, not just how to shoot.",
      priceRange: "$20 – $30",
      amazonQuery: "The Photographer's Eye Michael Freeman book",
    },
    {
      id: "book-photo-3",
      name: "On Photography by Susan Sontag",
      emoji: "🖼️",
      description:
        "The landmark philosophical essay on photography and its relationship to reality, memory, and culture.",
      priceRange: "$10 – $16",
      amazonQuery: "On Photography Susan Sontag book",
    },
  ],
  art: [
    {
      id: "book-art-1",
      name: "Drawing on the Right Side of the Brain by Betty Edwards",
      emoji: "✏️",
      description:
        "The perennial classic that teaches anyone to draw by shifting perception — millions of copies sold worldwide.",
      priceRange: "$18 – $28",
      amazonQuery: "Drawing on the Right Side of the Brain Betty Edwards book",
    },
    {
      id: "book-art-2",
      name: "The Artist's Way by Julia Cameron",
      emoji: "🎨",
      description:
        "A 12-week course in recovering and discovering your creative self — the bible of creative unblocking.",
      priceRange: "$15 – $22",
      amazonQuery: "The Artist's Way Julia Cameron book",
    },
    {
      id: "book-art-3",
      name: "Art & Fear by David Bayles",
      emoji: "😰",
      description:
        "An honest exploration of the difficulties of making art and the rewards of persevering through them.",
      priceRange: "$12 – $16",
      amazonQuery: "Art and Fear David Bayles Ted Orland book",
    },
  ],
  cook: [
    {
      id: "book-cook-1",
      name: "Salt Fat Acid Heat by Samin Nosrat",
      emoji: "🧂",
      description:
        "Master the four elements of good cooking and improvise delicious meals for the rest of your life.",
      priceRange: "$25 – $38",
      amazonQuery: "Salt Fat Acid Heat Samin Nosrat cookbook",
    },
    {
      id: "book-cook-2",
      name: "The Food Lab by J. Kenji López-Alt",
      emoji: "🧪",
      description:
        "A scientific approach to cooking — why things work the way they do, and how to cook them better.",
      priceRange: "$35 – $50",
      amazonQuery: "The Food Lab J Kenji Lopez-Alt cookbook",
    },
    {
      id: "book-cook-3",
      name: "Jacques Pépin New Complete Techniques",
      emoji: "👨‍🍳",
      description:
        "The definitive guide to French cooking technique from a culinary legend — over 1,000 step-by-step photos.",
      priceRange: "$40 – $60",
      amazonQuery: "Jacques Pepin New Complete Techniques cookbook",
    },
  ],
  garden: [
    {
      id: "book-garden-1",
      name: "The Well-Tempered Garden by Christopher Lloyd",
      emoji: "🌼",
      description:
        "A passionate and opinionated guide to gardening from one of Britain's greatest horticulturalists.",
      priceRange: "$18 – $28",
      amazonQuery: "The Well-Tempered Garden Christopher Lloyd book",
    },
    {
      id: "book-garden-2",
      name: "Planting by Piet Oudolf",
      emoji: "🌿",
      description:
        "The world's most influential garden designer reveals his philosophy of naturalistic planting with stunning photos.",
      priceRange: "$40 – $60",
      amazonQuery: "Planting Piet Oudolf garden design book",
    },
    {
      id: "book-garden-3",
      name: "Rodale's Basic Organic Gardening",
      emoji: "🌱",
      description:
        "A beginner's guide to starting and tending an organic garden — soil, seeds, pests, and harvests covered.",
      priceRange: "$15 – $22",
      amazonQuery: "Rodale's Basic Organic Gardening book",
    },
  ],
  yoga: [
    {
      id: "book-yoga-1",
      name: "Light on Yoga by B.K.S. Iyengar",
      emoji: "🧘",
      description:
        "The bible of modern yoga — 600 poses with detailed instructions and philosophy from a living legend.",
      priceRange: "$18 – $28",
      amazonQuery: "Light on Yoga BKS Iyengar book",
    },
    {
      id: "book-yoga-2",
      name: "The Heart of Yoga by T.K.V. Desikachar",
      emoji: "💚",
      description:
        "A personal and practical guide to developing a yoga practice grounded in the original teachings of Krishnamacharya.",
      priceRange: "$15 – $22",
      amazonQuery: "The Heart of Yoga Desikachar book",
    },
    {
      id: "book-yoga-3",
      name: "Yoga Anatomy by Leslie Kaminoff",
      emoji: "🦴",
      description:
        "A visual guide to the musculature and movement of yoga — essential for teachers and serious practitioners.",
      priceRange: "$22 – $32",
      amazonQuery: "Yoga Anatomy Leslie Kaminoff book",
    },
  ],
  run: [
    {
      id: "book-run-1",
      name: "Born to Run by Christopher McDougall",
      emoji: "👟",
      description:
        "A hidden tribe, a superathlete, and the greatest race the world has never seen — the book that started a movement.",
      priceRange: "$12 – $18",
      amazonQuery: "Born to Run Christopher McDougall book",
    },
    {
      id: "book-run-2",
      name: "80/20 Running by Matt Fitzgerald",
      emoji: "📊",
      description:
        "Train smarter by running most of your miles at low intensity — the science-backed method used by elite runners.",
      priceRange: "$15 – $22",
      amazonQuery: "80/20 Running Matt Fitzgerald book",
    },
    {
      id: "book-run-3",
      name: "Run Fast, Eat Slow by Shalane Flanagan",
      emoji: "🥗",
      description:
        "Nourishing recipes from an Olympic marathoner and a James Beard Award–winning chef for runners of all levels.",
      priceRange: "$25 – $35",
      amazonQuery: "Run Fast Eat Slow Shalane Flanagan cookbook book",
    },
  ],
  travel: [
    {
      id: "book-travel-1",
      name: "In Patagonia by Bruce Chatwin",
      emoji: "🏔️",
      description:
        "The book that defined travel writing — a surreal journey through one of Earth's most remote regions.",
      priceRange: "$12 – $18",
      amazonQuery: "In Patagonia Bruce Chatwin travel book",
    },
    {
      id: "book-travel-2",
      name: "The Alchemist by Paulo Coelho",
      emoji: "✨",
      description:
        "A shepherd's quest for treasure becomes a meditation on personal legend and the soul of the world.",
      priceRange: "$10 – $16",
      amazonQuery: "The Alchemist Paulo Coelho book",
    },
    {
      id: "book-travel-3",
      name: "Lonely Planet's Ultimate Travelist",
      emoji: "🌍",
      description:
        "500 of the world's greatest travel experiences ranked and explained — your life's bucket list, curated.",
      priceRange: "$28 – $40",
      amazonQuery: "Lonely Planet Ultimate Travelist travel book",
    },
  ],
  dance: [
    {
      id: "book-dance-1",
      name: "Apollo's Angels by Jennifer Homans",
      emoji: "🩰",
      description:
        "A breathtaking history of ballet from its origins in Renaissance Italy to the great companies of today.",
      priceRange: "$18 – $28",
      amazonQuery: "Apollo's Angels Jennifer Homans ballet history book",
    },
    {
      id: "book-dance-2",
      name: "Dancing in the Dark by Morris",
      emoji: "💃",
      description:
        "A cultural history of the American popular dance tradition from ragtime to hip-hop and beyond.",
      priceRange: "$15 – $22",
      amazonQuery: "Dancing in the Dark Morris dance history book",
    },
    {
      id: "book-dance-3",
      name: "The Everyday Dancer by Darcey Bussell",
      emoji: "🎭",
      description:
        "Former Royal Ballet principal Darcey Bussell offers a joyful guide to bringing dance into everyday life.",
      priceRange: "$18 – $28",
      amazonQuery: "The Everyday Dancer Darcey Bussell book",
    },
  ],
  film: [
    {
      id: "book-film-1",
      name: "Story by Robert McKee",
      emoji: "📜",
      description:
        "Substance, structure, style, and the principles of screenwriting from the world's most famous writing instructor.",
      priceRange: "$18 – $28",
      amazonQuery: "Story Robert McKee screenwriting book",
    },
    {
      id: "book-film-2",
      name: "In the Blink of an Eye by Walter Murch",
      emoji: "✂️",
      description:
        "The Godfather editor's meditative treatise on the art and craft of film editing — a classic of cinema literature.",
      priceRange: "$12 – $18",
      amazonQuery: "In the Blink of an Eye Walter Murch film editing book",
    },
    {
      id: "book-film-3",
      name: "Adventures in the Screen Trade by William Goldman",
      emoji: "🎬",
      description:
        "The legendary screenwriter's candid, funny, and essential memoir about Hollywood and the craft of writing for film.",
      priceRange: "$15 – $22",
      amazonQuery: "Adventures in the Screen Trade William Goldman book",
    },
  ],
  default: [
    {
      id: "book-def-1",
      name: "Atomic Habits by James Clear",
      emoji: "⚛️",
      description:
        "The definitive guide to building good habits and breaking bad ones — tiny changes that yield remarkable results.",
      priceRange: "$12 – $18",
      amazonQuery: "Atomic Habits James Clear book",
    },
    {
      id: "book-def-2",
      name: "The Pragmatic Programmer by David Thomas",
      emoji: "🧑‍💻",
      description:
        "20th anniversary edition of the classic software craftsmanship guide. Essential reading for every developer.",
      priceRange: "$35 – $50",
      amazonQuery: "The Pragmatic Programmer 20th Anniversary Edition book",
    },
    {
      id: "book-def-3",
      name: "Sapiens by Yuval Noah Harari",
      emoji: "🦴",
      description:
        "A sweeping history of humankind from the Stone Age to the present — one of the most important books of the decade.",
      priceRange: "$12 – $20",
      amazonQuery: "Sapiens Yuval Noah Harari book",
    },
  ],
};

export function getBooksForHobby(hobbyName: string): Product[] {
  const n = hobbyName.toLowerCase();

  let key: keyof typeof HOBBY_BOOKS = "default";

  if (
    n.includes("guitar") ||
    n.includes("music") ||
    n.includes("piano") ||
    n.includes("drum") ||
    n.includes("violin") ||
    n.includes("bass")
  ) {
    key = "music";
  } else if (n.includes("photo") || n.includes("camera")) {
    key = "photo";
  } else if (
    n.includes("paint") ||
    n.includes("art") ||
    n.includes("draw") ||
    n.includes("sketch") ||
    n.includes("illustrat")
  ) {
    key = "art";
  } else if (
    n.includes("cook") ||
    n.includes("bake") ||
    n.includes("chef") ||
    n.includes("baking")
  ) {
    key = "cook";
  } else if (
    n.includes("code") ||
    n.includes("program") ||
    n.includes("dev") ||
    n.includes("coding") ||
    n.includes("software")
  ) {
    key = "code";
  } else if (n.includes("gaming") || n.includes("game")) {
    key = "gaming";
  } else if (
    n.includes("garden") ||
    n.includes("plant") ||
    n.includes("flower")
  ) {
    key = "garden";
  } else if (n.includes("yoga") || n.includes("meditat")) {
    key = "yoga";
  } else if (n.includes("run") || n.includes("jog") || n.includes("marathon")) {
    key = "run";
  } else if (n.includes("travel") || n.includes("hike") || n.includes("camp")) {
    key = "travel";
  } else if (n.includes("dance") || n.includes("ballet")) {
    key = "dance";
  } else if (n.includes("film") || n.includes("movie") || n.includes("video")) {
    key = "film";
  }

  return HOBBY_BOOKS[key] ?? HOBBY_BOOKS.default;
}

// ── Game Cartridges ───────────────────────────────────────────────────────────

export const GAME_CARTRIDGES: Product[] = [
  {
    id: "game-1",
    name: "The Legend of Zelda: Tears of the Kingdom",
    emoji: "🗡️",
    description:
      "Nintendo's breathtaking open-world adventure — explore the skies and depths of Hyrule with limitless creativity.",
    priceRange: "$50 – $60",
    amazonQuery: "Zelda Tears of the Kingdom Nintendo Switch game",
  },
  {
    id: "game-2",
    name: "Elden Ring",
    emoji: "💀",
    description:
      "FromSoftware's masterpiece open-world RPG — brutal, beautiful, and utterly unforgettable. GOTY 2022.",
    priceRange: "$30 – $60",
    amazonQuery: "Elden Ring PS5 Xbox game",
  },
  {
    id: "game-3",
    name: "Marvel's Spider-Man 2",
    emoji: "🕷️",
    description:
      "Swing through New York as both Peter and Miles in Insomniac's stunning PS5 exclusive action adventure.",
    priceRange: "$50 – $70",
    amazonQuery: "Spider-Man 2 PS5 game",
  },
  {
    id: "game-4",
    name: "Hogwarts Legacy",
    emoji: "🧙",
    description:
      "Live your Hogwarts story in the 1800s — explore the wizarding world, cast spells, and uncover ancient secrets.",
    priceRange: "$30 – $60",
    amazonQuery: "Hogwarts Legacy all platforms game",
  },
  {
    id: "game-5",
    name: "Mario Kart 8 Deluxe",
    emoji: "🏎️",
    description:
      "The best-selling Nintendo Switch game — 96 tracks across four cups of pure racing joy for all ages.",
    priceRange: "$40 – $60",
    amazonQuery: "Mario Kart 8 Deluxe Nintendo Switch game",
  },
  {
    id: "game-6",
    name: "Call of Duty: Modern Warfare III",
    emoji: "🔫",
    description:
      "The fan-favorite franchise returns with remastered MW2 maps, open-combat missions, and Warzone integration.",
    priceRange: "$30 – $70",
    amazonQuery: "Call of Duty Modern Warfare III all platforms game",
  },
];

// ── Gaming Subscription Plans ─────────────────────────────────────────────────

export const GAMING_PLANS: Product[] = [
  {
    id: "gplan-1",
    name: "Xbox Game Pass Ultimate",
    emoji: "🎮",
    description:
      "Hundreds of games, day-one releases, EA Play, cloud gaming, and Xbox Live Gold — all in one subscription.",
    priceRange: "$14.99/mo",
    amazonQuery: "",
    siteUrl: "https://www.xbox.com/en-US/xbox-game-pass",
  },
  {
    id: "gplan-2",
    name: "PlayStation Plus Extra",
    emoji: "🕹️",
    description:
      "400+ PS4 and PS5 games including major titles, monthly free games, and exclusive member discounts.",
    priceRange: "$14.99/mo",
    amazonQuery: "",
    siteUrl: "https://www.playstation.com/en-us/ps-plus/",
  },
  {
    id: "gplan-3",
    name: "Nintendo Switch Online",
    emoji: "🎯",
    description:
      "Online play, classic NES/SNES/N64 games, exclusive member deals, and Animal Crossing island backups.",
    priceRange: "$3.99/mo",
    amazonQuery: "",
    siteUrl: "https://www.nintendo.com/switch/online/",
  },
  {
    id: "gplan-4",
    name: "EA Play",
    emoji: "🎲",
    description:
      "Access to EA's vault of games including FIFA, Battlefield, and The Sims — plus 10-hour trials of new releases.",
    priceRange: "$4.99/mo",
    amazonQuery: "",
    siteUrl: "https://www.ea.com/ea-play",
  },
];

// ── Coding Platform Plans ─────────────────────────────────────────────────────

export const CODING_PLANS: Product[] = [
  {
    id: "cplan-1",
    name: "GitHub Copilot Individual",
    emoji: "💻",
    description:
      "AI pair programmer that suggests whole lines and functions in your editor — the ultimate coding accelerator.",
    priceRange: "$10/mo",
    amazonQuery: "",
    siteUrl: "https://github.com/features/copilot",
  },
  {
    id: "cplan-2",
    name: "LeetCode Premium",
    emoji: "🧑‍💻",
    description:
      "Access all problems, company-tagged questions, and detailed solutions — the go-to for technical interview prep.",
    priceRange: "$35/mo",
    amazonQuery: "",
    siteUrl: "https://leetcode.com/subscribe/",
  },
  {
    id: "cplan-3",
    name: "Codecademy Pro",
    emoji: "🖥️",
    description:
      "Structured learning paths for Python, JavaScript, SQL, data science, and more — with real projects to build.",
    priceRange: "$17.49/mo",
    amazonQuery: "",
    siteUrl: "https://www.codecademy.com/pro",
  },
  {
    id: "cplan-4",
    name: "Frontend Masters",
    emoji: "⌨️",
    description:
      "Deep-dive courses from industry experts on React, TypeScript, Node.js, CSS, and advanced computer science.",
    priceRange: "$39/mo",
    amazonQuery: "",
    siteUrl: "https://frontendmasters.com/",
  },
  {
    id: "cplan-5",
    name: "freeCodeCamp",
    emoji: "🆓",
    description:
      "Completely free, self-paced curriculum covering web development, data science, and machine learning. No cost ever.",
    priceRange: "Free",
    amazonQuery: "",
    siteUrl: "https://www.freecodecamp.org/",
  },
];
