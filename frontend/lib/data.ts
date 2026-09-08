/**
 * Official Data Store for Frontend
 * Contains Company Credentials & Operational SOP Data
 */

export const COMPANY_INFO = {
  name: "Venkateswar Engg Works Pvt. Ltd.",
  shortName: "Venkateswar Engg Works Pvt. Ltd.",
  gstin: "21ARXPK7658Q1ZO",
  founded: 2003,
  founder: "Mr. Jayaram Kothari",
  managingPartner: "Mr. Sreenivas Kothari",
  tagline: "Engineering Excellence in Ferro Alloys & Metallurgical Engineering",
  description: "Venkateswar Engg Works Pvt. Ltd. is a multi-disciplinary engineering firm with deep expertise in the Ferro Alloys and Metallurgical Engineering sector. Founded in 2003 by Mr. Jayaram Kothari, the company has grown from electrical contracts into a comprehensive solution provider covering Furnace Operation & Maintenance, Metal Recovery Plants, Sinter Plants, and Turnkey project execution across India and Globally.",
  vision: "To be India's most reliable and innovative partner in metallurgical operations. The vision includes contributing to industrial sustainability by transforming waste into wealth through metal recovery and sinter manufacturing.",
  contacts: [
    {
      name: "Jayaram Kothari",
      title: "Founder",
      phone: "9776111022",
      email: "venkat_2jay@yahoo.co.in"
    },
    {
      name: "Sreenivas Kothari",
      title: "Managing Partner",
      phone: "9437034481",
      email: "kothari1975@gmail.com"
    }
  ]
};

export const KEY_STATISTICS = [
  { stat: "3,100+", label: "Technical and Non-Technical Personnel" },
  { stat: "20+", label: "Sites" },
  { stat: "60+", label: "Furnace Metallurgical O&M experience" },
  { stat: "100+", label: "MRP / Material Recovery Projects" },
  { stat: "45+", label: "MRP/Sinter turnkey projects" },
  { stat: "10+", label: "Projects like Furnace, GCP, RMHS etc" },
  { stat: "5+", label: "BOOT/BOO projects" },
  { stat: "19 years", label: "Some long-term contracts" }
];

export const HISTORY_TIMELINE = [
  {
    year: "2003",
    title: "Entrepreneurial Journey Begins",
    description: "Founder Mr. Jayaram Kothari begins entrepreneurial journey, initially focusing on electrical contracts.",
    contracts: ["Electrical Contracting Services"]
  },
  {
    year: "2005",
    title: "First Major Leap into Complete Plant O&M",
    description: "Major expansion into complete Plant Operation & Maintenance.",
    contracts: ["Shabadi Ferro Alloys", "Balmukund Ferro Alloys"]
  },
  {
    year: "2006",
    title: "Breakthrough Project at Aarti Steels Ltd., Odisha",
    description: "Breakthrough contract managing 2 x 9 MVA. In 2018, expanded to 1 x 24 MVA Furnace.",
    contracts: ["Aarti Steels Ltd., Odisha (2 x 9 MVA & 1 x 24 MVA)"]
  },
  {
    year: "2007",
    title: "Leadership & Capabilities Expansion",
    description: "Mr. Sreenivas Kothari joins as Managing Partner. Expansion into Design, Manufacturing, Supply, Installation, Commissioning, and MRP O&M.",
    contracts: ["Design, Supply & MRP O&M"]
  },
  {
    year: "2010",
    title: "Furnace O&M Contracts Expansion",
    description: "Furnace O&M contracts secured across leading industrial facilities.",
    contracts: ["Jabamayee Ferro Alloys", "Mangilall Rungta"]
  },
  {
    year: "2013",
    title: "BOOT / BOO Partnership Models",
    description: "BOOT/BOO model partnerships established to build client confidence in recoveries and project viability.",
    contracts: ["TATA Steel", "Jindal Stainless Ltd.", "Sarda Metals", "IFCAL (Govt. of Odisha)"]
  }
];

export const SERVICES_LIST = [
  {
    slug: "furnace-om",
    title: "Furnace Operation & Maintenance (O&M)",
    capacity: "5 MVA to 24 MVA",
    overview: "Complete operation & maintenance services for ferro alloy furnaces across various product types including Fe Cr, Si Mn, Fe Mn, Fe Si, LC/MC Si Mn, and Pig Iron.",
    products: ["Fe Cr", "Si Mn", "Fe Mn", "Fe Si", "LC/MC Si Mn", "Pig Iron"]
  },
  {
    slug: "mrp",
    title: "Metal Recovery Plants (MRP)",
    capacity: "50 TPD to 1500 TPD",
    overview: "Metal Recovery Plant capabilities spanning Design, Manufacturing, Supply, Installation, Commissioning, Operation, and Maintenance. Competing with MNCs in MRP large-scale project execution.",
    products: ["Design", "Manufacturing", "Supply", "Installation", "Commissioning", "Operation", "Maintenance"]
  },
  {
    slug: "sinter-plants",
    title: "Sinter Plants",
    capacity: "40 TPD to 200 TPD",
    overview: "Full turnkey execution of Sinter Plants for Iron and Manganese designed for utilizing fine stockpiles accumulated over years.",
    products: ["Iron Sinter", "Manganese Sinter"]
  },
  {
    slug: "boot-boo",
    title: "BOOT / BOO Models",
    capacity: "Up to 19 Years Contracts",
    overview: "Build-Own-Operate-Transfer (BOOT) and Build-Own-Operate (BOO) models to build client confidence in recoveries and project viability.",
    products: ["BOOT (Build-Own-Operate-Transfer)", "BOO (Build-Own-Operate)"]
  },
  {
    slug: "turnkey-projects",
    title: "Turnkey Project Execution",
    capacity: "45+ Turnkey Projects",
    overview: "Full turnkey execution across MRP, Sinter, Furnace, GCP, and RMHS projects including design, supply, fabrication, and erection.",
    products: ["MRP Turnkey", "Sinter Turnkey", "Furnace & GCP EPC"]
  },
  {
    slug: "beneficiary-units",
    title: "Beneficiary Units",
    capacity: "20 TPH onwards",
    overview: "Beneficiation operations upgrading ore grades. Manganese upgraded from 26% to 40%. Iron upgraded from 40% to 70%. Process includes crushing, multiple stage washing, and jigging.",
    products: ["Manganese (26% → 40%)", "Iron (40% → 70%)"]
  },
  {
    slug: "fabrication-erection",
    title: "Fabrication & Erection",
    capacity: "8,500+ MT Heavy Erection",
    overview: "Balmukund (1200 MT), Neelkhant (250 MT), Jabamayee (350 MT), Tata Steel GCP (900 MT), and all MRP/Sinter projects (~7000 MT).",
    products: ["Structural Erection", "Ducting & Hoppers", "Ladle Overhaul"]
  },
  {
    slug: "mechanical-maintenance",
    title: "Mechanical Maintenance",
    capacity: "Plant-Wide",
    overview: "Preventive, breakdown, and shutdown mechanical maintenance across crushers, screens, furnace shells, taphole drills, mud guns, ID fans, and cranes.",
    products: ["Preventive Maintenance", "Breakdown Repairs", "Annual Relining"]
  },
  {
    slug: "electrical-maintenance",
    title: "Electrical Maintenance",
    capacity: "HT/LT Automation",
    overview: "Electrical maintenance covering 33kV furnace transformers, OLTC, RTCC, PLC/thyristor electrode regulators, HT switchgear, VFDs, and SCADA automation.",
    products: ["Transformers & OLTC", "Electrode Regulation", "SCADA Automation"]
  }
];

export const MAJOR_CLIENTS = [
  { name: "Tata Steel Ltd", fullName: "Tata Steel Limited" },
  { name: "Jindal Stainless Ltd", fullName: "Jindal Stainless Limited" },
  { name: "Aarti Steels Ltd", fullName: "Aarti Steels Limited" },
  { name: "IMFA", fullName: "Indian Metals & Ferro Alloys Ltd" },
  { name: "Mangilall Rungta", fullName: "Mangilall Rungta" },
  { name: "Sarda Metals", fullName: "Sarda Metals & Alloys Ltd" },
  { name: "MSP Steels", fullName: "MSP Steel & Power Ltd" },
  { name: "Tirumala Balaji Alloys", fullName: "Tirumala Balaji Alloys Pvt. Ltd." },
  { name: "Balasore Alloys", fullName: "Balasore Alloys Ltd" },
  { name: "IFCAL", fullName: "Idcol Ferro Chrome & Alloys Ltd (Govt. of Odisha)" }
];

export const INTERNATIONAL_PROJECTS = [
  { client: "Indsil Altaman", location: "Sohar, Oman", scope: "300 TPD Jig Machine", year: "2017" },
  { client: "Omax Ferro Alloys", location: "Zambia", scope: "150 TPD MRP", year: "2023" },
  { client: "Bruhati Ferro Alloys", location: "Zambia", scope: "120 TPD MRP", year: "2024" },
  { client: "Amar Ferro Alloys", location: "Zambia", scope: "100 TPD MRP", year: "2023" },
  { client: "Shree Ramdoot Ferro Alloys", location: "Zambia", scope: "150 TPD MRP", year: "2024" }
];

export const FURNACE_PROJECTS = [
  { client: "Aarti Steels Ltd", furCapacity: "1 x 18 MVA + 2 x 12 MVA", type: "O&M", period: "2006 – Till date", process: "Fe Cr", remarks: "Longest-running contract" },
  { client: "MSP Sponge", furCapacity: "1 x 9 MVA", type: "O&M", period: "2012 – Till date", process: "Si Mn", remarks: "—" },
  { client: "TBAPL", furCapacity: "1 x 12 MVA", type: "O&M", period: "2015 – Till date", process: "Fe Cr", remarks: "—" },
  { client: "CRL", furCapacity: "3 x 9 MVA", type: "O&M", period: "2006 – Till date", process: "LC Si Mn", remarks: "—" },
  { client: "Gauri Ganesh", furCapacity: "3 x 9 MVA", type: "O&M", period: "2024 – Till date", process: "Si Mn", remarks: "—" },
  { client: "Real", furCapacity: "1 x 12 MVA", type: "O&M", period: "2024 – Till date", process: "Si Mn", remarks: "—" },
  { client: "Electro Steel", furCapacity: "2 x 11 MVA", type: "O&M", period: "2015 – Till date", process: "Fe Si", remarks: "—" },
  { client: "Vision", furCapacity: "1 x 7.5 MVA", type: "O&M", period: "2011 – Till date", process: "Pig Iron", remarks: "—" },
  { client: "Tata Steels", furCapacity: "2 x 16.5 MVA", type: "O&M", period: "2015 – 2019", process: "Fe Cr", remarks: "Completed" },
  { client: "Rungta Steels", furCapacity: "1 x 18 MVA", type: "O&M", period: "2010 – 2021", process: "Si Mn", remarks: "Completed" }
];

export const MRP_PROJECTS = [
  { client: "Tata Steel Ltd", scope: "3 x 200 TPD", type: "BOOT", period: "2012 – Till date", process: "Fe Cr", remarks: "Ongoing" },
  { client: "Jindal Stainless Ltd", scope: "1200 TPD", type: "BOOT (10 yrs)", period: "2019–2021, 2022–2032", process: "Fe Cr", remarks: "Extended" },
  { client: "Sarda Metals", scope: "150 TPD", type: "Turnkey BOOT", period: "2014 – NA", process: "Si Mn", remarks: "—" },
  { client: "IFCAL (Govt.)", scope: "2 x 150 TPD MRP", type: "Turnkey", period: "2015 – NA", process: "Fe Cr", remarks: "—" },
  { client: "Tirumala Balaji Alloys", scope: "150 & 300 TPD", type: "Turnkey", period: "2013–2015 & 2020–2025", process: "Fe Cr & Si Mn", remarks: "—" },
  { client: "IMFA", scope: "Jig Machine Supply", type: "Supply", period: "2020 – 2025", process: "Fe Cr", remarks: "—" },
  { client: "Shyam Metallics", scope: "Jig Machine Supply", type: "Supply", period: "2020 – 2025", process: "Fe Cr", remarks: "—" }
];

export const SINTER_PROJECTS = [
  { client: "Vision Sponge", capacity: "100 TPD", type: "Turnkey", period: "2015 – Till date", process: "Pig Iron", remarks: "Ongoing" },
  { client: "Singhal Energy", capacity: "100 TPD", type: "Turnkey", period: "2019 – NA", process: "Si Mn", remarks: "—" },
  { client: "Shankar Ferro", capacity: "100 TPD", type: "Turnkey", period: "2021 – NA", process: "Si Mn", remarks: "—" },
  { client: "Aarti Steels Ltd", capacity: "200 TPD", type: "Turnkey", period: "2025 – Ongoing", process: "Pig Iron", remarks: "Ongoing" },
  { client: "Real Ispat", capacity: "200 TPD", type: "Turnkey", period: "2025 – Ongoing", process: "Si Mn", remarks: "Ongoing" }
];

export const INNOVATION_DATA = {
  title: "Innovation & Success Highlight",
  subject: "Micro fines metal recovery using diaphragm jigs",
  elements: ["Middle gates", "Wedge wire stainless steel screens"],
  result: "Additional metal recovery of approximately 2%. This performance improvement was not attainable with other jig designers.",
  tslNorms: {
    client: "Tata Steel Limited (TSL)",
    previous: "84%",
    revised: "85.5%",
    context: "Conversion plants"
  },
  impacts: ["Fe Cr", "Si Mn", "Fe Mn", "Cost-efficiency", "Long-term viability", "Competitive edge"]
};

export const RAW_MATERIAL_DATA = {
  operatingConditions: {
    load: "22.5 MVA",
    pf: ".78",
    lf: ".95",
    specificPower: "3.6 to 3.9 excluding Auxiliary",
    productionPerDay: "105 to 110 MT / Day / Furnace",
    totalProduction: "6000 to 6500 MT"
  },
  materials: [
    { material: "Manganese", consumption: "2 MT per MT of metal", monthly: "13000 MT/month", size: "5-60mm", specs: "36-38 & 46-48/Sinter 56" },
    { material: "Coke", consumption: "200 Kg", monthly: "1300 MT/month", size: "5/30mm", specs: "Max 80 Fixed Carbon" },
    { material: "Coal", consumption: "450 Kg", monthly: "3000 MT/month", size: "10-60mm", specs: "40-50% Fixed carbon" },
    { material: "Qtz", consumption: "600 kg", monthly: "4000 MT/month", size: "10-50mm", specs: "95% Silica (Very Important)" },
    { material: "Dolomite", consumption: "250 Kg", monthly: "1600 MT/month", size: "10-40mm", specs: "60% CaO + MgO Total" },
    { material: "Carbon paste", consumption: "018 Kg", monthly: "120 MT/month", size: "40-50mm", specs: "No Briquette, No blocks only sized paste" }
  ],
  note: "3-5% may vary according to grade and in-built standard Moisture, size etc.",
  excelNote: "ATTACHED EXCEL SHEET OF CHARGE MIX FOR YOUR BETTER UNDERSTANDING",
  storageShed: {
    description: "To maintain 3 months inventory there should be a provision of Coke and coal shed.",
    dimensions: "30 meters / 60 meters",
    height: "12 meters height center height",
    bothSides: "7 meter both sides",
    type: "semi closed shed"
  }
};

export const OPERATIONAL_SOP_DATA = {
  heading: "NGM Smelters",
  furnaceSpec: "22.5 MVA x 2 Nos",
  location: "Monda",
  title: "Operational SOP",
  scopeMatrix: "Scope matrix FAP",
  scopeOverview: "Raw Material receiving → Smelting → Metal breaking & Dispatch",
  coverage: "Production + Mechanical & Electrical Maintenance jobs",
  activities: [
    "RM receiving", "Stacking with tagging", "Feeding", "Charging",
    "Furnace Operation", "Tapings execution", "Metal and slag shifting",
    "Breaking", "Packing", "Stacking of metal", "Dispatch"
  ],
  safNotes: {
    keyFactor: "which is the key factors of Operation",
    erametNote: "ERAMET Not able to maintain properly"
  },
  metalRecoveryNote: "metal recovery plant is must to recover the metal from contaminated slag which is about 6% of production",
  slagGranulationNote: "Slag granulation is recommended because it will be easier to handle such large volume slag in terms of: manpower, utilization of slag",
  udinNote: "UDIN not applicable here but QC cert with each lot."
};

export const KPI_DATA = {
  title: "KPI Si.Mn based on local ores of both Comilog & NGM",
  powerCalculation: "22.5 x .78 PF x .97 LF = 17 MWH x 24 hrs = 408 MWH/day",
  productionCalculation: "Specific Power @ 3.8 = 107 MT x 2 Furnace = 214 MT/day",
  grade65: {
    name: "Si.Mn 65/16 GRADE",
    ratio: "MN:Fe 4:3",
    carbonInput: "370-380 ma x",
    mnInput: "38 to 42%",
    basicity: "-.850 to .9",
    mno: "-.8"
  },
  grade60: {
    name: "Si.Mn 60/14 GRADE",
    ratio: "Mn: Fe – 3",
    carbonInput: "360 to 380 max",
    mnInput: "36 to 38%",
    basicity: "- .750 to .850",
    mno: "max 14%"
  }
};

export const MANPOWER_DATA = {
  title: "Manpower Strength — As on Date",
  totalStrength: "~3,100 personnel",
  sitesCount: "20+ sites",
  furnaceSites: [
    { clientSite: "Aarti Steels Ltd", strength: 430 },
    { clientSite: "Centom Ferro/Carbon Resources", strength: 350 },
    { clientSite: "Electro Steels Ltd", strength: 240 },
    { clientSite: "NR Ispat", strength: 250 },
    { clientSite: "Real Ispat", strength: 180 },
    { clientSite: "Vision Sponge", strength: 120 },
    { clientSite: "Tirumala Balaji & MSP", strength: 250 }
  ],
  mrpSites: [
    { clientSite: "Jindal Stainless Ltd", strength: 390 },
    { clientSite: "Tata Steels Ltd", strength: 110 },
    { clientSite: "Tirumala Balaji", strength: 35 },
    { clientSite: "BS Sponge & MSP", strength: 20 }
  ],
  sinterSites: [
    { clientSite: "Aarti Steels Ltd", strength: 40 },
    { clientSite: "Real Ispat", strength: 30 }
  ],
  keyObservations: [
    "Venkateswar Engg Works Pvt. Ltd. has deep integration with the Ferro Alloy industry, especially in Odisha, Chhattisgarh, Andhra Pradesh, and West Bengal.",
    "Strong long-term client relationships — especially with Aarti, Tata, Jindal, and IMFA.",
    "High manpower commitment indicates strong operational capacity across multiple simultaneous projects.",
    "Wide-ranging project portfolio — from small Jig Machine supplies to full-scale BOOT-based MRP plants."
  ],
  conclusion: "Venkateswar Engg Works has established itself as a technically competent and reliable partner for Furnace O&M, MRP, and Sinter projects in the Ferro Alloys sector. Their breadth of experience across geographies, clients, and project models (Furnace O&M, MRP & Sinter, BOOT/BOO/Turnkey) positions them as a strong candidate for any future metallurgical plant development or O&M engagement. We look forward to the opportunity to collaborate and contribute to your metallurgical plant projects."
};
