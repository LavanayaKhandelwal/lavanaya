export interface StudentBio {
  name: string;
  degree: string;
  institution: string;
  year: string;
  location: string;
  tagline: string;
  statement: string;
  secondaryStatement: string;
  currentFocus: string;
  specializations?: string[];
  interests: { heading: string; blurb: string; chips: string[] };
  exploring: { heading: string; blurb: string; chips: string[] };
  approach: { heading: string; text: string };
  handwritten: string;
}

export interface ProjectSummary {
  id: string;
  slug: string;
  number: string;
  title: string;
  category: string;
  discipline: string;
  year: string;
  tagline: string;
  accentColor: string;
  rotation: string;
  tags: string[];
  summary: string;
  image?: string;
  brief?: string;
  research?: string;
  contribution?: string;
  keyLearnings?: string;
}

export const portfolioData = {
  student: {
    name: "Lavanaya Khandelwal",
    degree: "Master's in Fashion & Lifestyle Business Management",
    institution: "Pearl Academy",
    year: "2025–2027",
    location: "India",
    tagline: "From business thinking to fashion, creativity and visual storytelling.",
    statement: "From business thinking to fashion, creativity and visual storytelling.",
    secondaryStatement:
      "My journey began with a background in Business Administration, where I developed an understanding of businesses and consumers. I then explored Digital Marketing, which introduced me to the creative side of business. My growing interest in fashion eventually led me to pursue a Master’s in Fashion & Lifestyle Business Management at Pearl Academy.",
    currentFocus:
      "Today, I’m drawn to the creative, visual and marketing side of fashion.",
    specializations: [
      "Fashion Marketing",
      "Visual Merchandising",
      "Content Creation",
      "Photography",
      "Brand Identity & Brand History",
      "Trend Forecasting & Trend Analysis",
      "Merchandising"
    ],
    interests: {
      heading: "WHAT I’M INTERESTED IN",
      blurb: "I enjoy exploring how creativity, visuals and consumer understanding come together to shape a brand.",
      chips: ["Fashion Marketing", "Visual Merchandising", "Content Creation", "Photography"]
    },
    exploring: {
      heading: "WHAT I LOVE EXPLORING",
      blurb: "I enjoy researching how brands evolve, build their identity and create distinctive visual worlds.",
      chips: ["Brand Identity", "Brand History", "Trend Forecasting", "Trend Analysis", "Merchandising"]
    },
    approach: {
      heading: "MY APPROACH",
      text: "I’m curious, observant and always eager to learn. I enjoy exploring different sides of the industry and turning what I learn into creative ideas."
    },
    handwritten: "Curious by nature,\ncreative by instinct."
  },

  // 1. INTERNSHIP: AADIYA JEWELS (Page 1 Social Media, Page 2 E-Commerce & Learnings)
  internship: {
    company: "Aadiya Jewels",
    role: "Digital Content & E-Commerce Intern",
    period: "Internship Term",
    location: "Studio & Digital Operations",
    overview:
      "During my internship at Aadiya Jewels, I worked across social media and e-commerce, gaining hands-on experience in how a jewellery brand builds and manages its digital presence.",

    contentTypes: [
      "MAIN FEED CONTENT CALENDER",
      "STORY CALENDER",
      "DATA MANAGEMENT",
      "AI CONTENT GENERATION",
      "ECOMMERCE & WEBSITE MANAGEMENT",
      "WEBSITE INTERFACE",
      "SOCIAL MEDIA GRID"
    ],

    /* Home-page only: the internship band summarises the role in four areas.
       Kept separate from page1SocialMedia.skillsApplied so the internship
       detail page keeps its full "Skills Applied" list. */
    homepageHighlights: [
      "Content Creation",
      "Data Management",
      "AI Content Generation",
      "Ecommerce & Website Management"
    ],

    page1SocialMedia: {
      title: "01 — SOCIAL MEDIA",
      intro:
        "From concept to content. I worked on content from planning and shooting to editing, publishing and scheduling. This included creating reels, posts and stories focused on the brand and its products.",
      whatIWorkedOn: [
        { id: "01", title: "Planning", desc: "Working on content from planning to schedule — reels, posts and stories for the brand." },
        { id: "02", title: "Shooting", desc: "Handling content production from planning and shooting." },
        { id: "03", title: "Editing & Publishing", desc: "Editing, publishing and scheduling content across the brand's platforms." },
        { id: "04", title: "Content Creation", desc: "Creating reels, posts and stories focused on the brand and its products." }
      ],
      skillsApplied: [
        "Content Creation",
        "Reels, Posts & Stories",
        "Planning",
        "Shooting",
        "Editing",
        "Publishing",
        "Scheduling",
        "Social Media Management"
      ]
    },

    page2Ecommerce: {
      title: "PAGE 2 — E-COMMERCE",
      intro:
        "I supported the brand’s Shopify website and product catalogue, managing product uploads, website updates , bannners and product organisation. I also worked on Google Sheets for product and content data management, helping keep information organised and up to date.",
      whatIWorkedOn: [
        { id: "01", title: "Product Uploads", desc: "Managing product uploads on the brand's Shopify website." },
        { id: "02", title: "Website Updates", desc: "Handling website updates and banners for the online store." },
        { id: "03", title: "Product Organisation", desc: "Organising the product catalogue and keeping products organised." },
        { id: "04", title: "Data Management", desc: "Working on Google Sheets for product and content data management." }
      ],
      skillsApplied: [
        "Shopify",
        "E-Commerce Management",
        "Product Uploads",
        "Website Updates",
        "Banners",
        "Product Organisation",
        "Google Sheets",
        "Data Management"
      ]
    },

    learningOutcomes: [
      {
        number: "01",
        title: "Create",
        desc: "Turn ideas into engaging content."
      },
      {
        number: "02",
        title: "Plan",
        desc: "Manage content with consistency and structure."
      },
      {
        number: "03",
        title: "Present",
        desc: "Understand how visuals and information shape the online shopping experience."
      },
      {
        number: "04",
        title: "Execute",
        desc: "Work with real brand requirements, feedback and deadlines."
      }
    ]
  },

  // 2. SELECTED PROJECTS SUMMARY LIST
  selectedProjects: [
    {
      id: "proj-1",
      slug: "marketing",
      number: "01",
      title: "Uniqlo X Fragnances",
      category: "New Category Introduction",
      discipline: "Market Mapping · SWOT, 5 Forces, STP, 7Ps, Ansoff & BCG · Product & Packaging",
      year: "2025",
      tagline: "A new dimension of life wear — UNIQLO × fragrances.",
      accentColor: "#FADBD9",
      rotation: "rotate-1",
      tags: ["UNIQLO", "Fragrance Category Extension", "Market Mapping", "STP · 7Ps · BCG", "Product & Packaging"],
      summary: "The project focused on taking an established fashion brand into a new product category. We chose Uniqlo and explored how its LifeWear philosophy could be extended beyond apparel.",
      image: "/portfolio-assets/project-uniqlo-lifewear.png",
      brief: "Taking an established fashion brand into a new product category — extending LifeWear beyond apparel.",
      research: "Mapped the market, consumer and competitive landscape to identify where Uniqlo could grow.",
      contribution: "Developed the fragrance concept, product design and packaging — HANA · KAZE · MIZU · SORA (Flower · Wind · Water · Sky).",
      keyLearnings: "Learned market research, strategic brand extension, consumer analysis and product launch planning."
    },
    {
      id: "proj-2",
      slug: "visual-merchandising",
      number: "02",
      title: "A Future in Bloom",
      category: "Window Display & In-Store Experience",
      discipline: "Concept Development · Material Exploration · Spatial Styling · VM Principles",
      year: "2025",
      tagline: "Cover Story × Future Florals — where nature meets technology in a soft, contemporary bloom.",
      accentColor: "#FADBD9",
      rotation: "-rotate-1",
      tags: ["Cover Story", "Spring/Summer", "Future Florals", "Material Exploration", "VM Principles"],
      summary: "Where nature meets technology in a soft, contemporary bloom. Contemporary, feminine, trend-led — a brand built around modern, versatile fashion became the canvas for our visual merchandising story.",
      image: "/portfolio-assets/project-coverstory-bloom.png",
      brief: "From Cover Story's identity to a new expression of florals.",
      research: "Started with the brand, brought in Spring/Summer, and let florals become the link.",
      contribution: "Reimagined florals with holographic surfaces, pastel tones and reflective light.",
      keyLearnings: "Learned to translate a concept into a physical display through styling, construction and installation."
    },
    {
      id: "proj-3",
      slug: "project-3",
      number: "03",
      title: "Athera – Athleisure Wear Brand",
      category: "Brand Concept & Development",
      discipline: "Consumer Research · Market Gap Analysis · MVP Prototyping",
      year: "2025–2026",
      tagline: "A startup concept built around one simple idea — what if activewear could move with your entire day?",
      accentColor: "#A38D89",
      rotation: "rotate-1",
      tags: ["Fashion Start-Up", "Consumer Pain Points", "MVP", "User Testing", "Iteration"],
      summary: "Activewear that moves with your entire day — a co-ord designed to transition across gym, café, travel and everyday.",
      image: "/portfolio-assets/project-athleisure-1.png",
      brief: "Bridge the gap — performance, everyday athleisure, casual. Comfort + style + function + versatility.",
      research: "Consumer research, trend research and market gap analysis to pinpoint the opportunity.",
      contribution: "Developed a physical MVP co-ord and refined it around user feedback.",
      keyLearnings: "Don't just build what sounds good. Build → test → listen → improve."
    },
    {
      id: "proj-4",
      slug: "project-4",
      number: "04",
      title: "Customer Experience Activation",
      category: "An Experience by Hunkemöller",
      discipline: "Brand Research · Experience Concept Development · Activation Planning · On-Ground Execution",
      year: "2025–2026",
      tagline: "Interactive and personalised brand experiences — moving a customer from seeing the brand to taking part in it.",
      accentColor: "#A38D89",
      rotation: "-rotate-1",
      tags: ["Hunkemöller", "Customer Experience Activation", "Personalisation", "Interactive Touchpoints", "Event Execution"],
      summary:
        "The project focused on creating a customer experience activation for Hunkemöller built around interactive and personalised brand experiences — touchpoints that let customers engage with the brand directly, rather than only see it.",
      // Cover plate for this project is still to come. Drop a 16:10 image at
      // /portfolio-assets/project-hunkemoller.png and re-add the `image` field.
      brief:
        "Developed a customer experience activation for Hunkemöller focused on interactive and personalised brand experiences.",
      research:
        "Researched Hunkemöller’s brand identity and customer engagement to identify opportunities for interactive activations.",
      contribution:
        "Contributed to concept development, planning and execution of the event activations.",
      keyLearnings:
        "Gained experience in customer interaction and event execution, and understood how interactive touchpoints strengthen brand connection."
    }
  ] as ProjectSummary[],

  // 3. PROJECT 1: MARKETING MANAGEMENT (UNIQLO X FRAGRANCE)
  projectMarketing: {
    cover: {
      title: "A New Dimension of LifeWear",
      subtitle: "UNIQLO X FRAGNANCES",
      brand: "UNIQLO",
      discipline: "Marketing Strategy & Brand Extension",
      timeline: "Strategic Research & Capstone",
      accentColor: "#FADBD9"
    },
    page1And2: {
      context:
        "The project focused on taking an established fashion\nbrand into a new product category. We chose Uniqlo\nand explored how its LifeWear philosophy could be\nextended beyond apparel.\n\nMAPPING THE OPPORTUNITY\nExploring the market, consumer and competitive landscape to identify where Uniqlo could grow.\n\nMARKET POTENTIAL\nFragrance industry growing in India\n+5.6% annual growth\n₹16,000 Cr projected market by 2033\n\nCONSUMER\nMillennials & Gen Z\nValue simplicity & subtle elegance\nFresh, minimal, everyday scents\nProfessionals seeking office-friendly fragrances\n\nCOMPETITIVE SPACE\nZara & H&M already offer fragrances\nUniqlo had no similar sensory category\nOpportunity for a distinctly Japanese, minimal scent\n\nBRAND FIT\nLifeWear → FeelWear\nComfort + simplicity + minimalism\nFragrance as an extension of the Uniqlo lifestyle",
      brief: "We used SWOT, Porter’s Five Forces, STP, 7Ps, Ansoff and BCG to structure the analysis."
    },
    page3DesignDecisions: [
      {
        number: "1",
        title: "HANA",
        desc: "Flower"
      },
      {
        number: "2",
        title: "KAZE",
        desc: "Wind"
      },
      {
        number: "3",
        title: "MIZU",
        desc: "Water"
      },
      {
        number: "4",
        title: "SORA",
        desc: "Sky"
      },
      {
        number: "5",
        title: "CONCEPT → PRODUCT → PACKAGING",
        desc: "Together, we developed the fragrances, product design and packaging to translate the concept into a tangible product."
      }
    ],
    page4Strategy: {
      stp:
        "Once the product was developed, we took it into a college product-pitch activity. We presented the fragrance concept, explained the product and invited students to experience the fragrances themselves.",
      sevenPs:
        "The feedback helped us identify what could be improved and refine the product and packaging accordingly.\n\nI led the product presentation and audience interaction, explaining the concept and engaging with students throughout the activity.",
      bcg: "25–30+ REVIEWS COLLECTED"
    },
    page5IdeaToImpact: {
      headline: "UNIQLO FRAGRANCE: FROM CONCEPT TO CONSUMER",
      subheadline: "What the project taught me",
      learnings: [
        {
          num: "01",
          name: "MARKET RESEARCH",
          detail: "Learned how to research market trends, industry growth and competitors to understand the opportunity for a new product."
        },
        {
          num: "02",
          name: "STRATEGIC BRAND EXTENSION",
          detail: "Learned how to evaluate whether a new product category fits an existing brand identity and positioning."
        },
        {
          num: "03",
          name: "CONSUMER ANALYSIS",
          detail: "Learned how to understand target consumers, their preferences and usage needs while developing a product concept."
        },
        {
          num: "04",
          name: "PRODUCT LAUNCH PLANNING",
          detail: "Learned how different elements like pricing, distribution, promotion and rollout come together to plan a product launch."
        }
      ],
      skillsDeveloped: [
        "Market Research",
        "Strategic Brand Extension",
        "Consumer Analysis",
        "Product Launch Planning",
        "Strategic Thinking"
      ]
    }
  },

  // 4. PROJECT 2: VISUAL MERCHANDISING (COVER STORY X FUTURE FLORALS)
  projectVM: {
    cover: {
      title: "A Future in Bloom",
      brand: "Cover Story",
      season: "Spring / Summer",
      conceptName: "Future Florals",
      accentColor: "#FADBD9",
      credits: ["COVER STORY X FUTURE FLORALS"],
      intro: ["COVER STORY : Contemporary. Feminine. Trend-led.", "The project focused on taking an established fashion brand into a new product category. We chose Uniqlo and explored how its LifeWear philosophy could be extended beyond apparel."]
    },
    page2Brief: {
      briefTitle: "Where the Concept Took Shape",
      briefText: "From Cover Story’s identity to a new expression of florals.",
      whatIInvestigated: [
        {
          pillar: "WE STARTED WITH THE BRAND",
          points: ["Cover Story’s feminine and contemporary identity set the direction for something soft, fresh and modern."]
        },
        {
          pillar: "THEN CAME SPRING / SUMMER",
          points: ["The season brought in a sense of lightness, freshness and effortless femininity."]
        },
        {
          pillar: "FLORALS BECAME THE LINK",
          points: ["A natural expression of femininity, growth and renewal — but we wanted to move beyond the traditional."]
        }
      ],
      howIReachedTheConcept: [
        "WE STARTED WITH THE BRAND",
        "THEN CAME SPRING / SUMMER",
        "FLORALS BECAME THE LINK",
        "SO WE REIMAGINED THEM",
        "FUTURE FLORALS"
      ],
      conceptSummary: "Where nature meets technology in a soft, contemporary bloom.",
      designInsight: "Holographic surfaces, pastel tones and reflective light gave the familiar floral form a futuristic edge."
    },
    page3Boards: {
      moodBoard: {
        title: "Mood Board",
        content: "Holographic surfaces, pastel tones and reflective light gave the familiar floral form a futuristic edge.",
        keywords: ["FEMININE", "CONTEMPORARY", "FRESH", "FUTURISTIC"]
      },
      colourBoard: {
        title: "Colour Board",
        content: "A soft, fresh and light palette that lets the Future Florals concept bloom — pastel tones with a reflective, futuristic edge.",
        palette: [
          { name: "Soft Blush", hex: "#FADBD9" },
          { name: "Espresso", hex: "#3E2723" },
          { name: "Peach", hex: "#F8E5D7" },
          { name: "Taupe", hex: "#A38D89" },
          { name: "Terracotta", hex: "#D69589" }
        ]
      }
    },
    /**
     * PAGE 03 ("Making the Unexpected") and PAGE 04 ("Learning Through the
     * Process") now carry their copy inline — it is the single source of truth
     * for those pages. The two records below are the earlier drafts those
     * pages replaced and nothing renders them; kept for reference only.
     */
    page4BehindTheDisplay: {
      narration: [],
      steps: [
        {
          imageIndex: "Image 1",
          title: "Holographic Sheets",
          desc: "Transformed into layered petals."
        },
        {
          imageIndex: "Image 2",
          title: "Wire & Foam",
          desc: "Provided structure and dimension."
        },
        {
          imageIndex: "Image 3",
          title: "Organza",
          desc: "Added softness."
        },
        {
          imageIndex: "Image 4",
          title: "Lighting",
          desc: "Enhanced the reflective surfaces."
        },
        {
          imageIndex: "Image 5",
          title: "Final Display",
          desc: "Each floral element was constructed, assembled and positioned. The mannequin remained the focal point, framed by florals, texture and light."
        }
      ]
    },
    page5SkillsAndPrinciples: {
      skillsApplied: [
        {
          title: "UNDERSTANDING THE BRAND",
          desc: "Translating brand identity into a clear visual direction."
        },
        {
          title: "DEVELOPING THE CONCEPT",
          desc: "Connecting seasonal direction, colour, materials and visual storytelling."
        },
        {
          title: "SHAPING THE SPACE",
          desc: "Applying balance, proportion, scale, rhythm and focal point to create visual harmony."
        },
        {
          title: "BRINGING IDEAS TO LIFE",
          desc: "Turning the concept into a physical display through styling, construction and installation."
        }
      ],
      vmPrinciplesApplied: [
        { number: "1", name: "Concept Development", desc: "·" },
        { number: "2", name: "Trend Research", desc: "·" },
        { number: "3", name: "Colour Theory", desc: "·" },
        { number: "4", name: "Spatial Styling", desc: "·" },
        { number: "5", name: "Material Exploration", desc: "·" },
        { number: "6", name: "Creative Execution", desc: "·" },
        { number: "7", name: "Team Collaboration", desc: "·" }
      ],
      whatILearned: "Future Florals translated nature into a contemporary, futuristic retail environment."
    }
  },
  // 5. PROJECT 3: START UP (EVERYDAY ATHLEISURE)
  projectThree: {
    // `cover` and `page01` are reference-only. PAGE 01 is now the landscape
    // specification board built in
    // components/marketing/EverydayAthleisurePageOne, which inlined this copy
    // and replaced the full-bleed cover and the credits strip. Kept for wording
    // reference; nothing reads it.
    cover: {
      title: "Everyday Athleisure",
      conceptSubtitle: "A startup concept built around one simple idea: What if activewear could move with your entire day?",
      timeline: "Concept to Physical MVP",
      accentColor: "#A38D89"
    },
    page01: {
      noticing: {
        intro: "Activewear was everywhere.\nBut it wasn't always made for everyday life.",
        painPoints: ["Too tight", "Too gym-specific", "Too revealing", "Limited versatility"],
        details: {
          "Too tight": "Activewear that restricts movement and comfort.",
          "Too gym-specific": "Not always made for everyday life.",
          "Too revealing": "Hard to wear beyond the gym.",
          "Limited versatility": "Not enough variety for everyday life."
        }
      },
      opportunity: {
        label: "BRIDGE THE GAP",
        spectrum: "Performance ← EVERYDAY ATHLEISURE → Casual",
        pillars: "Comfort + Style + Function + Versatility"
      },
      concept: {
        headline: "ONE OUTFIT. MULTIPLE MOMENTS.",
        intro: "A co-ord designed to transition across:",
        flow: "GYM → CAFÉ → TRAVEL → EVERYDAY",
        notes: ["Structured top for shape + style", "Relaxed bottoms for movement + comfort"]
      },
      firstProduct: {
        name: "Structured full-sleeve crop top + relaxed jogger",
        line: "My first physical MVP."
      },
      whatIWorkedWith: "Consumer Research · Trend Research · Market Gap Analysis\nConcept Development · Product Thinking"
    },
    page2SurveyInsights: {
      brief:
        "Build it. Test it. Let users shape it. I developed a physical co-ord to test whether the concept could work beyond the idea stage.",
      journey: "IDEA → EVIDENCE → ITERATION",
      theObservation: [
        { num: "1", title: "Too tight", detail: "Activewear that restricts movement and comfort." },
        { num: "2", title: "Too gym-specific", detail: "Not always made for everyday life." },
        { num: "3", title: "Too revealing", detail: "Hard to wear beyond the gym." },
        { num: "4", title: "Limited versatility", detail: "Not enough variety for everyday life." }
      ],
      whatIInvestigated: [
        "1. Consumer Research",
        "2. Trend Research",
        "3. Market Gap Analysis",
        "4. Concept Development",
        "5. Product Thinking"
      ],
      myApproach: [
        { step: "1", name: "Sketch" },
        { step: "2", name: "Fabric" },
        { step: "3", name: "Sourcing" },
        { step: "4", name: "Tailoring" },
        { step: "5", name: "Fitting" },
        { step: "6", name: "Prototype" }
      ],
      myApproachSummary: "I developed a physical co-ord to test whether the concept could work beyond the idea stage.",
      surveyTitle: "Then I Tested One Thing — Would People Actually Wear It?",
      surveyAudience: "Women 18–30",
      surveyMethods: "Online Survey + Interview + Focus Group",
      surveyLookedAt: "I looked at:",
      surveyFactors: "Comfort · Fit · Style · Versatility · Purchase Intent"
    },
    page3DesignAndMaterial: {
      design: {
        title: "01 Design",
        points: ["Structured full-sleeve crop top", "Relaxed jogger", "One outfit. Multiple moments."]
      },
      material: {
        title: "02 Material",
        lycra: {
          name: "LYCRA — TOP",
          attributes: "Stretch • Fit • Flexibility"
        },
        terryCotton: {
          name: "TERRY COTTON — TROUSERS",
          attributes: "Softness • Comfort • Breathability"
        },
        colorNote: "Structured top for shape + style. Relaxed bottoms for movement + comfort."
      },
      prototype: {
        title: "03 Final Prototype",
        badge: "PHYSICAL MVP",
        tagline: "ONE OUTFIT. MULTIPLE MOMENTS.",
        coreProposition: "GYM → CAFÉ → TRAVEL → EVERYDAY",
        paragraph: "Structured full-sleeve crop top + relaxed jogger\nMy first physical MVP."
      }
    },
    page4FeedbackAndIteration: {
      whatIHeard: [
        "THE CONCEPT WORKED\n✓ Multi-use appeal\n✓ Comfort mattered\n✓ Minimal + modest styling resonated\n✓ Strong purchase interest",
        "BUT THE PRODUCT NEEDED WORK\nFabric → Too thick for summer\nStyles → More variety wanted",
        "SO I ITERATED\nUSER FEEDBACK → PRODUCT DECISION\nThick fabric → Lighter + breathable\nLimited styles → More silhouettes + sleeve options\nPrice sensitivity → Stronger value proposition\n\nI chose to persevere with the core idea and refine the product around user feedback."
      ],
      whatThisTaughtMe: [
        {
          headline: "IDEA → EVIDENCE → ITERATION",
          detail: "Don't just build what sounds good.\nBuild → test → listen → improve."
        },
        {
          headline: "WHAT I LEARNED",
          detail: "I learned how to take a business idea from an assumption to a tangible product, then refine it through real user feedback."
        }
      ],
      feedbackLoop: {
        feedback: "Fabric → Too thick for summer",
        iteration: "Lighter + breathable",
        impact: "Comfortable for everyday & summer wear"
      }
    }
  },

  // 6. SKILLS MATRIX (Consolidated from All Projects)
  skills: {
    categories: [
      {
        name: "Business Skills",
        tag: "BUSINESS",
        color: "#D69589",
        note: "Combining creative thinking with a strong understanding of business and commercial perspectives.",
        skills: ["Market Research", "Marketing Strategy", "Trend Analysis", "Consumer Behaviour", "Fashion Marketing", "Visual Merchandising", "Product Development", "Content Strategy"]
      },
      {
        name: "Digital Skills",
        tag: "DIGITAL",
        color: "#A38D89",
        note: "Digital tools and platforms used for creative development, content creation, data analysis, AI-powered ideation, and e-commerce.",
        skills: ["Canva", "MS Office — Advanced Excel, Word, PowerPoint", "AI Tools — ChatGPT, Claude, Gemini, Pixverse, NotebookLM", "Website Development — Shopify & WordPress", "ERP"]
      },
      {
        name: "Certifications",
        tag: "CERTIFICATION",
        color: "#D69589",
        note: "Additional learning that has strengthened my professional and technical foundation.",
        skills: ["Masters in Digital Marketing — DigiPerform", "Advanced MS Excel — FISD"]
      }
    ]
  },

  // 7. CONTACT & INQUIRIES
  contact: {
    email: "lavanaya1811@gmail.com",
    phone: "9311023608",
    location: "New Delhi, India",
    availability: "Open to opportunities across fashion marketing, visual merchandising, content creation and photography",
    socials: [
      { name: "LinkedIn", handle: "Lavanaya Khandelwal", url: "https://www.linkedin.com/in/lavanaya-khandelwal?utm_source=share_via&utm_content=profile&utm_medium=member_ios" }
    ]
  }
};