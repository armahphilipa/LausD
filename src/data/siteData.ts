import { StatItem, ServiceItem, FlowStep, ImpactItem, MarketPoint, FAQItem, TeamMember } from '../types';

export const statsData: StatItem[] = [
  { id: 'stat-1', value: 2017, label: 'Founded in Ghana', format: 'year' },
  { id: 'stat-2', value: 5, suffix: '+', label: 'Years of UK industry experience', format: 'number' },
  { id: 'stat-3', value: 4, label: 'Strategic focus areas', format: 'number' },
];

export const timelineData = [
  {
    year: '2017',
    title: 'Laus Deo Consult Established',
    description: 'Founded in Ghana, delivering high-performance coatings, waterproofing, and marine repair.',
  },
  {
    year: 'London, UK',
    title: 'International Technical Experience',
    description: 'Over five years of professional industry experience acquired, shaping rigorous technical standards.',
  },
  {
    year: 'Today',
    title: 'Local Manufacturing Expansion',
    description: 'Trusted nationwide across construction and marine sectors, scaling local marine fairing compound production.',
  },
];

export const servicesData: ServiceItem[] = [
  {
    id: 'industrial-coatings',
    title: 'Industrial & protective coatings',
    description: 'High-performance protective coatings engineered for infrastructure and industrial facilities against Ghana’s tropical climate and heavy industrial wear — from surface preparation and technical specification to professional application.',
    isCore: true,
    tag: 'Core service',
    iconName: 'Shield',
    image: '/images/industrial_coatings_1788505745276.jpg',
    images: [
      {
        url: '/images/industrial_coatings_1788505745276.jpg',
        caption: 'Tank & Steel Structure Protection',
      },
      {
        url: '/images/coating_pipeline_1788506241219.jpg',
        caption: 'Pipeline & Valve Anti-Corrosion',
      },
      {
        url: '/images/coating_surface_prep_1788506256704.jpg',
        caption: 'Abrasive Blast Surface Preparation',
      },
    ],
  },
  {
    id: 'waterproofing',
    title: 'Waterproofing solutions',
    description: 'Engineered barrier systems for residential, commercial, and heavy civil structures, protecting foundations and envelopes through Ghana’s intense rainy seasons and high coastal humidity.',
    iconName: 'Droplets',
    image: '/images/waterproofing_solutions_1788505767287.jpg',
    images: [
      {
        url: '/images/waterproofing_solutions_1788505767287.jpg',
        caption: 'Structural Concrete Foundation Seal',
      },
      {
        url: '/images/waterproof_foundation_1788506272633.jpg',
        caption: 'Subterranean Retaining Wall Membrane',
      },
      {
        url: '/images/waterproof_roof_1788506288729.jpg',
        caption: 'Elastomeric Liquid Roof Barrier',
      },
    ],
  },
  {
    id: 'marine-repair',
    title: 'Boat & canoe repair',
    description: 'Technical repair, structural refurbishment, composite reinforcement, and marine protection systems for coastal fishing fleets and inland water transport vessels.',
    iconName: 'Anchor',
    image: '/images/marine_boat_repair_1788505786695.jpg',
    images: [
      {
        url: '/images/marine_boat_repair_1788505786695.jpg',
        caption: 'Coastal Fleet Hull Refurbishment',
      },
      {
        url: '/images/canoe_fairing_repair_1788506304262.jpg',
        caption: 'Fairing Compound & Hull Composite',
      },
      {
        url: '/images/marine_drydock_repair_1788506322783.jpg',
        caption: 'Drydock Gauge Inspection & Survey',
      },
    ],
  },
  {
    id: 'construction-consultancy',
    title: 'Construction consultancy',
    description: 'Advisory, structural diagnostic testing, coating inspection, and on-site technical supervision for construction projects from preliminary planning through handover.',
    iconName: 'Building2',
    image: '/images/construction_consulting_1788505806213.jpg',
    images: [
      {
        url: '/images/construction_consulting_1788505806213.jpg',
        caption: 'On-Site Technical Supervision',
      },
      {
        url: '/images/consulting_site_survey_1788506339795.jpg',
        caption: 'Structural QA & Blueprint Auditing',
      },
      {
        url: '/images/consulting_quality_lab_1788506357687.jpg',
        caption: 'Materials Testing & Adhesion Lab',
      },
    ],
  },
];

export const manufacturingSteps: FlowStep[] = [
  {
    id: 1,
    title: 'Limited technical support',
    description: 'Boat and canoe operators currently have minimal access to specialized repair guidance and certified standards.',
  },
  {
    id: 2,
    title: 'Materials gap',
    description: 'Marine-grade fairing compounds and epoxy systems are largely imported, costly, or unavailable locally.',
  },
  {
    id: 3,
    title: 'Shortened vessel life',
    description: 'Improvised, poor-quality repairs drastically reduce vessel durability and compromise maritime safety on waterways.',
  },
  {
    id: 4,
    title: 'Timber pressure',
    description: 'Frequent vessel replacement drives indiscriminate harvesting of valuable hardwood timber, stressing local forest resources.',
  },
];

export const impactData: ImpactItem[] = [
  {
    id: 'safety',
    title: 'Safety & durability',
    description: 'Significantly improves the structural integrity, water tightness, and service life of boats and artisanal canoes in daily commercial use.',
  },
  {
    id: 'transport',
    title: 'Transport systems',
    description: 'Strengthens inland and coastal water transportation networks, providing dependable connectivity for goods and passengers.',
  },
  {
    id: 'manufacturers',
    title: 'Local manufacturers',
    description: 'Directly equips boat builders and artisans with appropriate industrial-grade materials, precision application tools, and hands-on training.',
  },
  {
    id: 'sustainability',
    title: 'Environmental sustainability',
    description: 'Eases heavy pressure on endangered timber resources by extending vessel lifespan through durable composite fairing and protective barriers.',
  },
  {
    id: 'capacity',
    title: 'Industrial capacity',
    description: 'Builds indigenous manufacturing capabilities in Ghana, advancing import substitution and retaining economic value locally.',
  },
  {
    id: 'skills',
    title: 'Skills & SME support',
    description: 'Creates sustainable vocational training pathways, technical certification, and steady enterprise growth for coastal and riparian SMEs.',
  },
];

export const priorityPills = [
  'Industrialization & local manufacturing',
  'Transport & logistics efficiency',
  'Environmental conservation & timber protection',
  'Skills development & SME support',
  'Quality certification & standardisation',
];

export const marketCards: MarketPoint[] = [
  {
    id: 'm-1',
    number: '01',
    title: 'Market leadership',
    description: 'First-mover position as the pioneer local manufacturer of industrial-strength marine fairing compounds in Ghana and West Africa.',
  },
  {
    id: 'm-2',
    number: '02',
    title: 'Cost reduction & availability',
    description: 'Reliable, local formulation drastically reduces reliance on high-cost imported materials, currency exposure, and shipping delays.',
  },
  {
    id: 'm-3',
    number: '03',
    title: 'Strong partnerships',
    description: 'Exceptional alignment to collaborate with government ministries, fishing cooperatives, marine authorities, and international development organizations.',
  },
];

export const faqData: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What areas does Laus Deo Consult currently serve?',
    answer: 'We operate nationwide across Ghana and take on international consulting projects. Our technical execution standards are shaped by over five years of professional industry experience in London, UK, tailored specifically to Ghana’s climate and operational realities.',
  },
  {
    id: 'faq-2',
    question: 'What is the marine fairing compound initiative?',
    answer: 'It is our strategic expansion into local manufacturing of industrial-strength marine fairing compounds and repair formulations for boat and canoe builders. This initiative directly addresses the chronic gap in marine-grade materials and technical expertise across Ghana and the wider West African sub-region.',
  },
  {
    id: 'faq-3',
    question: 'What kind of partnerships and funding are you seeking?',
    answer: 'Laus Deo Consult seeks strategic partnerships, investment capital, and grant support to: (1) Establish and scale local manufacturing capacity, (2) Expand technical training programs for boat and canoe manufacturers, (3) Support research, testing, and certification of marine-grade products, and (4) Strengthen distribution networks across coastal and inland regions.',
  },
  {
    id: 'faq-4',
    question: 'Do you work with government agencies, cooperatives, and NGOs?',
    answer: 'Yes. We actively collaborate with fisheries commissions, transport authorities, maritime safety bodies, artisanal boatbuilders’ cooperatives, and international development organizations to implement sustainable maritime safety and industrialization programs.',
  },
  {
    id: 'faq-5',
    question: 'How do your solutions reduce environmental timber depletion?',
    answer: 'Traditional canoes and wooden boats deteriorate rapidly due to inadequate waterproofing and inferior repair compounds, forcing frequent total vessel replacements using scarce local timber. Our marine fairing compounds and protective coatings extend vessel operating lifespans significantly, mitigating the pressure to harvest old-growth timber.',
  },
];

export const partnershipPillars = [
  {
    id: 'pillar-1',
    number: '01',
    title: 'Establish & scale local manufacturing capacity',
    description: 'Deploy state-of-the-art compounding equipment, quality-control testing rigs, and automated packaging lines for industrial-scale production.',
  },
  {
    id: 'pillar-2',
    number: '02',
    title: 'Expand technical support & training programs',
    description: 'Train local boatbuilders, artisans, and canoe manufacturers in advanced surface preparation, application techniques, and safety protocols.',
  },
  {
    id: 'pillar-3',
    number: '03',
    title: 'Support research, testing & product certification',
    description: 'Collaborate with maritime certification bodies and material testing laboratories to ensure international marine-grade compliance.',
  },
  {
    id: 'pillar-4',
    number: '04',
    title: 'Strengthen coastal & inland distribution networks',
    description: 'Build reliable supply hubs and direct distribution channels reaching fishing harbours, lake ports, and inland river transport hubs.',
  },
];

export const teamData: TeamMember[] = [
  {
    id: 'kennedy-boakye',
    name: 'Kenneth Boakye Duodo',
    role: 'Founder & Technical Director',
    image: '/images/kennedy-boakye.jpg',
    isFounder: true,
    bio: 'Founder of Laus Deo Consult, leading the strategic mission to bridge international industrial coating discipline with indigenous marine manufacturing across West Africa.',
    ukExperience: [
      '5+ years of specialized professional experience across London and UK industrial coating & commercial refurbishment projects.',
      'Trained in rigorous British Standards (BS EN ISO 12944) for atmospheric, immersion, and high-salinity corrosion protection.',
      'Extensive background in polymer-based structural waterproofing, substrate preparation, and quality assurance auditing.',
    ],
    ghanaExpertise: [
      'Founded Laus Deo Consult in Ghana in 2017, pioneering custom protective systems tailored to tropical heat and rainfall.',
      'Conceived and spearheaded the local formulation of industrial-grade marine fairing compounds for Ghanaian boatbuilders.',
      'Field consultant to maritime operators across Tema, Takoradi, and artisanal canoe fleets throughout the Volta Lake basin.',
    ],
    specialties: [
      'Composite Marine Compounding',
      'BS EN ISO 12944 Specification',
      'Structural Waterproofing Systems',
      'Artisanal SME Technical Training',
    ],
    quote: 'Our objective is straightforward: take the world-class technical precision and durability standards of the UK industry, and formulate them right here in Ghana to solve the acute challenges of our waterways and construction sector.',
  },
  {
    id: 'kwame-asante',
    name: 'Kwame Asante-Appiah',
    role: 'Head of Marine Operations & Field Engineering',
    image: '/images/kwame_asante_1788503360824.jpg',
    bio: 'Oversees on-site marine survey, vessel rehabilitation, and the deployment of fairing compounds across coastal boatyards and riverine communities.',
    ukExperience: [
      '6 years in UK commercial maritime yards (Southampton and Thames Estuary), managing composite hull refurbishment and timber vessel restoration.',
      'Specialized in non-destructive hull testing, ultrasonic thickness gauging, and marine survey protocols for small commercial craft.',
    ],
    ghanaExpertise: [
      'Over a decade of direct operational work with Volta Lake transport operators and coastal artisanal canoe guilds in Ada Foah, Elmina, and Sekondi.',
      'Led field training clinics for 120+ local shipwrights on compound fairing, fiberglass bonding, and marine timber preservation.',
    ],
    specialties: [
      'Vessel Structural Surveys',
      'Timber Rot Mitigation',
      'Composite Lamination',
      'Field Artisan Upskilling',
    ],
    quote: 'When an artisanal canoe lasts three times longer without rotting or taking on water, we protect livelihoods, save fishermen money, and spare old-growth trees from being felled.',
  },
  {
    id: 'dr-efua-mensah',
    name: 'Dr. Efua Darko Mensah',
    role: 'Lead Materials Chemist & Formulations Director',
    image: '/images/efua_mensah_1788503374797.jpg',
    bio: 'Spearheads polymer formulation, adhesive bonding testing, and quality control for Laus Deo Consult’s locally compounded marine fairings.',
    ukExperience: [
      'Senior polymer research associate in Manchester, UK, researching thermoset epoxy curing dynamics in high-stress aquatic environments.',
      'Professional Member of the Oil & Colour Chemists’ Association (OCCA) and active contributor to surface coating standards.',
    ],
    ghanaExpertise: [
      'Engineered localized compound additives that maintain structural adhesion under 90%+ relative humidity and coastal UV radiation in Ghana.',
      'Advancing sustainable raw material integration by qualifying local mineral fillers to replace expensive imported components.',
    ],
    specialties: [
      'Resin & Hardener Chemistry',
      'Accelerated Weathering QA/QC',
      'Tropical Curing Kinetics',
      'Import Substitution R&D',
    ],
    quote: 'Imported products aren’t designed for Ghana’s intense humidity and thermal cycling. We engineer our formulations specifically for this climate.',
  },
  {
    id: 'nii-armah-tagoe',
    name: 'Nii Armah Tagoe',
    role: 'Senior Civil & Waterproofing Consultant',
    image: '/images/nii_tagoe_1788503393810.jpg',
    bio: 'Leads structural waterproofing diagnostics, concrete protection advisory, and commercial infrastructure coating projects.',
    ukExperience: [
      'Structural waterproofing inspector on major commercial and transit developments across Greater London, complying with BS 8102 standards.',
      'Certified by the Institute of Concrete Technology (ICT) in concrete durability and chemical intrusion prevention.',
    ],
    ghanaExpertise: [
      'Directed waterproofing systems for high-profile multi-story developments, industrial tank farms, and substations in Accra, Kumasi, and Takoradi.',
      'Specialist in groundwater containment, damp-proofing historical structures, and protecting coastal concrete assets from chloride attack.',
    ],
    specialties: [
      'BS 8102 Structural Tanking',
      'Concrete Chloride Diagnostics',
      'Polyurethane Injections',
      'Heavy Industrial Flooring',
    ],
    quote: 'Water ingress is the silent destroyer of Ghanaian infrastructure. Proper UK-standard engineering prevents catastrophic repairs down the road.',
  },
];
