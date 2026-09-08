/**
 * Official Seed Data for Venkateswar Engg Works Pvt. Ltd. (Venkateswar Engg Works Pvt. Ltd.)
 * Source of Truth: PDF 1 (Venkateswar Engg Works Pvt. Ltd. Company Credentials) & PDF 2 (Venkateswar Engg Works Pvt. Ltd. Operational SOP - Ferro-Alloy Plant)
 */

module.exports = {
  adminUser: {
    username: 'admin',
    email: 'admin@venkateswarengg.com',
    password: 'AdminPassword123!', // Hash in seed.js
    role: 'admin'
  },

  siteSettings: {
    companyName: 'Venkateswar Engg Works Pvt. Ltd.',
    shortName: 'Venkateswar Engg Works Pvt. Ltd.',
    gstin: '21ARXPK7658Q1ZO',
    founded: 2003,
    founder: 'Mr. Jayaram Kothari',
    managingPartner: 'Mr. Sreenivas Kothari',
    contacts: [
      {
        name: 'Jayaram Kothari',
        title: 'Founder',
        phone: '9776111022',
        email: 'venkat_2jay@yahoo.co.in'
      },
      {
        name: 'Sreenivas Kothari',
        title: 'Managing Partner',
        phone: '9437034481',
        email: 'kothari1975@gmail.com'
      }
    ],
    sourceRef: 'Source: Company Credentials — Page 1 & 10'
  },

  homepage: {
    heroHeading: 'Engineering Excellence in Ferro Alloys & Metallurgical Engineering',
    heroSubheading: 'Furnace Operation & Maintenance, Metal Recovery Plants, Sinter Plants & Turnkey Projects Across India and Globally',
    companyIntro: 'Venkateswar Engg Works Pvt. Ltd. is a multi-disciplinary engineering firm with deep expertise in the Ferro Alloys and Metallurgical Engineering sector. Founded in 2003 by Mr. Jayaram Kothari, the company has grown from electrical contracts into a comprehensive solution provider covering Furnace Operation & Maintenance, Metal Recovery Plants, Sinter Plants, and Turnkey project execution across India and Globally.',
    keyStatistics: [
      { stat: '3,100+', label: 'Technical and Non-Technical Personnel', sourceRef: 'Source: Company Credentials — Page 1' },
      { stat: '20+', label: 'Sites', sourceRef: 'Source: Company Credentials — Page 1' },
      { stat: '60+', label: 'Furnace Metallurgical O&M experience', sourceRef: 'Source: Company Credentials — Page 1' },
      { stat: '100+', label: 'MRP / Material Recovery Projects', sourceRef: 'Source: Company Credentials — Page 1' },
      { stat: '45+', label: 'MRP/Sinter turnkey projects', sourceRef: 'Source: Company Credentials — Page 1' },
      { stat: '10+', label: 'Projects like Furnace, GCP, RMHS etc', sourceRef: 'Source: Company Credentials — Page 1' },
      { stat: '5+', label: 'BOOT/BOO projects', sourceRef: 'Source: Company Credentials — Page 1' },
      { stat: '19 years', label: 'Some long-term contracts', sourceRef: 'Source: Company Credentials — Page 1' }
    ],
    whyVew: [
      { title: 'Deep Industry Integration', description: 'Extensive footprint across Odisha, Chhattisgarh, Andhra Pradesh, and West Bengal.' },
      { title: 'Proven Long-Term Partnerships', description: 'Trusted by leaders like Tata Steel, Jindal Stainless, IMFA, Aarti Steels, and IFCAL with contracts up to 19 years.' },
      { title: 'Waste to Wealth Engineering', description: 'Specialized in micro-fines metal recovery and sinter manufacturing to drive industrial sustainability.' },
      { title: 'Unmatched Workforce Strength', description: 'Over 3,100 skilled engineers, technicians, and operational staff deployed across 20+ active sites.' }
    ],
    sourceRef: 'Source: Company Credentials — Page 1'
  },

  about: {
    title: 'About Venkateswar Engg Works Pvt. Ltd.',
    overview: 'Venkateswar Engg Works Pvt. Ltd. is a multi-disciplinary engineering firm with deep expertise in the Ferro Alloys and Metallurgical Engineering sector. Founded in 2003 by Mr. Jayaram Kothari, the company has grown from electrical contracts into a comprehensive solution provider covering Furnace Operation & Maintenance, Metal Recovery Plants, Sinter Plants, and Turnkey project execution across India and Globally.',
    foundersVision: 'To be India\'s most reliable and innovative partner in metallurgical operations. The vision includes contributing to industrial sustainability by transforming waste into wealth through metal recovery and sinter manufacturing.',
    corePillars: [
      'Furnace Operation & Maintenance (5 MVA to 24 MVA)',
      'Metal Recovery Plants (50 TPD to 1500 TPD)',
      'Sinter Plants (40 TPD to 200 TPD)',
      'BOOT / BOO Partnerships (Up to 19 Year Contracts)',
      'Turnkey Project Execution & Fabrication Erection'
    ],
    sourceRef: 'Source: Company Credentials — Page 1 & 2'
  },

  historyTimeline: [
    {
      year: '2003',
      title: 'Entrepreneurial Beginning',
      description: 'Founder Mr. Jayaram Kothari begins entrepreneurial journey, initially focusing on electrical contracts.',
      contracts: ['Electrical Contracting Services'],
      sourceRef: 'Source: Company Credentials — Page 2',
      order: 1
    },
    {
      year: '2005',
      title: 'First Major Leap into Plant O&M',
      description: 'Expanded scope from electrical contracts to complete Plant Operation & Maintenance.',
      contracts: ['Shabadi Ferro Alloys', 'Balmukund Ferro Alloys'],
      sourceRef: 'Source: Company Credentials — Page 2',
      order: 2
    },
    {
      year: '2006',
      title: 'Breakthrough Project at Aarti Steels',
      description: 'Breakthrough project at Aarti Steels Ltd., Odisha. Managed 2 x 9 MVA. In 2018, expanded to 1 x 24 MVA Furnace.',
      contracts: ['Aarti Steels Ltd., Odisha (2 x 9 MVA & later 1 x 24 MVA)'],
      sourceRef: 'Source: Company Credentials — Page 2',
      order: 3
    },
    {
      year: '2007',
      title: 'Leadership & Capability Expansion',
      description: 'Mr. Sreenivas Kothari joins as Managing Partner. Expansion into Design, Manufacturing, Supply, Installation, Commissioning, and MRP O&M.',
      contracts: ['Design & Supply Expansion', 'MRP O&M Launch'],
      sourceRef: 'Source: Company Credentials — Page 2',
      order: 4
    },
    {
      year: '2010',
      title: 'Furnace O&M Milestones',
      description: 'Major Furnace O&M contracts established at leading metallurgical plants.',
      contracts: ['Jabamayee Ferro Alloys', 'Mangilall Rungta'],
      sourceRef: 'Source: Company Credentials — Page 2',
      order: 5
    },
    {
      year: '2013',
      title: 'BOOT / BOO Strategic Model Partnerships',
      description: 'Initiated BOOT/BOO model partnerships with industry giants to build client confidence in recoveries and project viability.',
      contracts: ['TATA Steel', 'Jindal Stainless Ltd.', 'Sarda Metals', 'IFCAL (Govt. of Odisha)'],
      sourceRef: 'Source: Company Credentials — Page 2',
      order: 6
    }
  ],

  services: [
    {
      slug: 'furnace-om',
      title: 'Furnace Operation & Maintenance (O&M)',
      category: 'Core Operations',
      capacity: '5 MVA to 24 MVA',
      overview: 'Complete operation & maintenance services for ferro alloy furnaces across various product types including Fe Cr, Si Mn, Fe Mn, Fe Si, LC/MC Si Mn, and Pig Iron.',
      highlights: [
        'Furnace capacity ranging from 5 MVA to 24 MVA',
        'Over 60+ furnace metallurgical O&M experience',
        'Longest-running contract continuous since 2006 (Aarti Steels Ltd)',
        'Complete metallurgical, mechanical, and electrical control'
      ],
      productsOrScope: ['Fe Cr', 'Si Mn', 'Fe Mn', 'Fe Si', 'LC/MC Si Mn', 'Pig Iron'],
      sourceRef: 'Source: Company Credentials — Page 3',
      order: 1
    },
    {
      slug: 'mrp',
      title: 'Metal Recovery Plants (MRP)',
      category: 'Resource Recovery',
      capacity: '50 TPD to 1500 TPD',
      overview: 'Metal Recovery Plant capabilities spanning Design, Manufacturing, Supply, Installation, Commissioning, Operation, and Maintenance. Competing with MNCs in MRP large-scale project execution.',
      highlights: [
        'Project capacity from 50 TPD to 1500 TPD',
        '100+ MRP / Material Recovery Projects executed',
        'Proven capability competing with MNCs in large-scale projects',
        'Recovering metal from contaminated slag (~6% of production)'
      ],
      productsOrScope: ['Design', 'Manufacturing', 'Supply', 'Installation', 'Commissioning', 'Operation', 'Maintenance'],
      sourceRef: 'Source: Company Credentials — Page 3',
      order: 2
    },
    {
      slug: 'sinter-plants',
      title: 'Sinter Plants',
      category: 'Beneficiation & Utilization',
      capacity: '40 TPD to 200 TPD',
      overview: 'Full turnkey execution of Sinter Plants for Iron and Manganese. Designed for utilizing fine stockpiles accumulated over years.',
      highlights: [
        'Capacity range from 40 TPD to 200 TPD',
        'Turnkey execution for Iron and Manganese sinter',
        'Unlocks economic value from fine stockpiles accumulated over years'
      ],
      productsOrScope: ['Iron Sinter', 'Manganese Sinter'],
      sourceRef: 'Source: Company Credentials — Page 3',
      order: 3
    },
    {
      slug: 'boot-boo',
      title: 'BOOT / BOO Models',
      category: 'Partnership Models',
      capacity: 'Up to 19 Years Contracts',
      overview: 'Build-Own-Operate-Transfer (BOOT) and Build-Own-Operate (BOO) models to build client confidence in recoveries and viability of projects. Some contracts have lasted up to 19 years.',
      highlights: [
        'BOOT: Build-Own-Operate-Transfer',
        'BOO: Build-Own-Operate',
        'Builds client confidence in metallurgical recoveries',
        'Long-term partnerships extending up to 19 years'
      ],
      productsOrScope: ['Tata Steel Ltd (3x200 TPD)', 'Jindal Stainless Ltd (1200 TPD)', 'Sarda Metals (150 TPD)'],
      sourceRef: 'Source: Company Credentials — Page 3',
      order: 4
    },
    {
      slug: 'turnkey-projects',
      title: 'Turnkey Project Execution',
      category: 'Project Execution',
      capacity: 'Complete EPC Delivery',
      overview: '45+ MRP/Sinter turnkey projects executed with full engineering design, manufacturing, erection, and operational commissioning.',
      highlights: [
        'Over 45+ MRP/Sinter turnkey projects delivered',
        'Integrated engineering, fabrication, and commissioning',
        'Government sector expertise (IFCAL Govt. of Odisha)'
      ],
      productsOrScope: ['MRP Turnkey', 'Sinter Turnkey', 'Furnace & GCP Turnkey'],
      sourceRef: 'Source: Company Credentials — Page 3',
      order: 5
    },
    {
      slug: 'beneficiary-units',
      title: 'Beneficiary Units',
      category: 'Beneficiation',
      capacity: '20 TPH onwards',
      overview: 'Beneficiation operations upgrading ore grades. Manganese upgraded from 26% to 40%. Iron upgraded from 40% to 70%. Process includes crushing, multiple stage washing, and jigging.',
      highlights: [
        'Manganese ore grade upgrade: 26% → 40%',
        'Iron ore grade upgrade: 40% → 70%',
        'Process: Crushing, Multiple stage washing, Jigging',
        'Capacity: 20 TPH onwards'
      ],
      productsOrScope: ['Manganese Beneficiation', 'Iron Beneficiation'],
      sourceRef: 'Source: Company Credentials — Page 3',
      order: 6
    },
    {
      slug: 'fabrication-erection',
      title: 'Fabrication & Erection',
      category: 'Heavy Engineering',
      capacity: 'Over 8,500+ MT Executed',
      overview: 'Extensive heavy structural fabrication and erection capabilities across major metallurgical plants.',
      highlights: [
        'Balmukund Ferro Alloys: 1200 MT Fabrication & Erection',
        'Neelkhant Ferro Alloys: 250 MT Fabrication & Erection',
        'Jabamayee Ferro Alloys: 350 MT Fabrication & Erection',
        'Tata Steel Ltd., GCP (2 x 16 MVA): 900 MT Fabrication & Erection',
        'All MRP & Sinter Projects: Approximately 7000 MT Fabrication & Erection'
      ],
      productsOrScope: ['Structural Fabrication', 'Plant Erection', 'Ducting & Hoppers', 'Ladle Repairs'],
      fabricationInfo: 'Total fabrication & erection across projects exceeds 8,500 MT',
      sourceRef: 'Source: Company Credentials — Page 4',
      order: 7
    },
    {
      slug: 'mechanical-maintenance',
      title: 'Mechanical Maintenance',
      category: 'Plant Maintenance',
      capacity: 'Plant-Wide Scope',
      overview: 'Comprehensive mechanical maintenance covering weighbridges, conveyors, crushers, furnace shells, taphole drills, mud guns, electrode regulation hydraulics, bag houses, and EOT cranes.',
      highlights: [
        'Preventive daily lubrication, weekly belt checks, monthly gearbox oil audits',
        'Shutdown management: Annual furnace relining (15-30 days)',
        'Central workshop fabrication for chutes, hoppers, ducting, and ladles'
      ],
      productsOrScope: ['Preventive Maintenance', 'Breakdown Repairs', 'Furnace Relining', 'Workshop Fabrication'],
      sourceRef: 'Source: Operational SOP — Pages 4-6',
      order: 8
    },
    {
      slug: 'electrical-maintenance',
      title: 'Electrical Maintenance',
      category: 'Plant Maintenance',
      capacity: 'HT/LT Automation Scope',
      overview: 'Specialized electrical maintenance covering 33kV furnace transformers, OLTC, RTCC, PLC/thyristor electrode regulators, capacitor banks, VFDs, and SCADA automation.',
      highlights: [
        'Monthly IR thermography of HT panels',
        'Quarterly transformer oil BDV & condition testing',
        'Condition monitoring: Vibration analysis of ID fans & MCSA for HT motors'
      ],
      productsOrScope: ['Transformer Maintenance', 'Switchgear & VFDs', 'PLC/SCADA Automation', 'Condition Monitoring'],
      sourceRef: 'Source: Operational SOP — Pages 4-7',
      order: 9
    }
  ],

  clients: [
    { name: 'Tata Steel Ltd', fullName: 'Tata Steel Limited', category: 'Major Client', order: 1 },
    { name: 'Jindal Stainless Ltd', fullName: 'Jindal Stainless Limited', category: 'Major Client', order: 2 },
    { name: 'Aarti Steels Ltd', fullName: 'Aarti Steels Limited', category: 'Major Client', order: 3 },
    { name: 'IMFA', fullName: 'Indian Metals & Ferro Alloys Ltd', category: 'Major Client', order: 4 },
    { name: 'Mangilall Rungta', fullName: 'Mangilall Rungta', category: 'Major Client', order: 5 },
    { name: 'Sarda Metals', fullName: 'Sarda Metals & Alloys Ltd', category: 'Major Client', order: 6 },
    { name: 'MSP Steels', fullName: 'MSP Steel & Power Ltd', category: 'Major Client', order: 7 },
    { name: 'Tirumala Balaji Alloys', fullName: 'Tirumala Balaji Alloys Pvt. Ltd.', category: 'Major Client', order: 8 },
    { name: 'Balasore Alloys', fullName: 'Balasore Alloys Ltd', category: 'Major Client', order: 9 },
    { name: 'IFCAL', fullName: 'Idcol Ferro Chrome & Alloys Ltd (Govt. of Odisha)', category: 'Government Sector', order: 10 }
  ],

  internationalProjects: [
    { client: 'Indsil Altaman', location: 'Sohar, Oman', scope: '300 TPD Jig Machine', year: '2017', sourceRef: 'Source: Company Credentials — Page 8', order: 1 },
    { client: 'Omax Ferro Alloys', location: 'Zambia', scope: '150 TPD MRP', year: '2023', sourceRef: 'Source: Company Credentials — Page 8', order: 2 },
    { client: 'Bruhati Ferro Alloys', location: 'Zambia', scope: '120 TPD MRP', year: '2024', sourceRef: 'Source: Company Credentials — Page 8', order: 3 },
    { client: 'Amar Ferro Alloys', location: 'Zambia', scope: '100 TPD MRP', year: '2023', sourceRef: 'Source: Company Credentials — Page 8', order: 4 },
    { client: 'Shree Ramdoot Ferro Alloys', location: 'Zambia', scope: '150 TPD MRP', year: '2024', sourceRef: 'Source: Company Credentials — Page 8', order: 5 }
  ],

  furnaceProjects: [
    { client: 'Aarti Steels Ltd', furCapacity: '1 x 18 MVA + 2 x 12 MVA', type: 'O&M', period: '2006 – Till date', process: 'Fe Cr', remarks: 'Longest-running contract', order: 1 },
    { client: 'MSP Sponge', furCapacity: '1 x 9 MVA', type: 'O&M', period: '2012 – Till date', process: 'Si Mn', remarks: '—', order: 2 },
    { client: 'TBAPL', furCapacity: '1 x 12 MVA', type: 'O&M', period: '2015 – Till date', process: 'Fe Cr', remarks: '—', order: 3 },
    { client: 'CRL', furCapacity: '3 x 9 MVA', type: 'O&M', period: '2006 – Till date', process: 'LC Si Mn', remarks: '—', order: 4 },
    { client: 'Gauri Ganesh', furCapacity: '3 x 9 MVA', type: 'O&M', period: '2024 – Till date', process: 'Si Mn', remarks: '—', order: 5 },
    { client: 'Real', furCapacity: '1 x 12 MVA', type: 'O&M', period: '2024 – Till date', process: 'Si Mn', remarks: '—', order: 6 },
    { client: 'Electro Steel', furCapacity: '2 x 11 MVA', type: 'O&M', period: '2015 – Till date', process: 'Fe Si', remarks: '—', order: 7 },
    { client: 'Vision', furCapacity: '1 x 7.5 MVA', type: 'O&M', period: '2011 – Till date', process: 'Pig Iron', remarks: '—', order: 8 },
    { client: 'Tata Steels', furCapacity: '2 x 16.5 MVA', type: 'O&M', period: '2015 – 2019', process: 'Fe Cr', remarks: 'Completed', order: 9 },
    { client: 'Rungta Steels', furCapacity: '1 x 18 MVA', type: 'O&M', period: '2010 – 2021', process: 'Si Mn', remarks: 'Completed', order: 10 }
  ],

  mrpProjects: [
    { client: 'Tata Steel Ltd', scope: '3 x 200 TPD', type: 'BOOT', period: '2012 – Till date', process: 'Fe Cr', remarks: 'Ongoing', order: 1 },
    { client: 'Jindal Stainless Ltd', scope: '1200 TPD', type: 'BOOT (10 yrs)', period: '2019–2021, 2022–2032', process: 'Fe Cr', remarks: 'Extended', order: 2 },
    { client: 'Sarda Metals', scope: '150 TPD', type: 'Turnkey BOOT', period: '2014 – NA', process: 'Si Mn', remarks: '—', order: 3 },
    { client: 'IFCAL (Govt.)', scope: '2 x 150 TPD MRP', type: 'Turnkey', period: '2015 – NA', process: 'Fe Cr', remarks: '—', order: 4 },
    { client: 'Tirumala Balaji Alloys', scope: '150 & 300 TPD', type: 'Turnkey', period: '2013–2015 & 2020–2025', process: 'Fe Cr & Si Mn', remarks: '—', order: 5 },
    { client: 'IMFA', scope: 'Jig Machine Supply', type: 'Supply', period: '2020 – 2025', process: 'Fe Cr', remarks: '—', order: 6 },
    { client: 'Shyam Metallics', scope: 'Jig Machine Supply', type: 'Supply', period: '2020 – 2025', process: 'Fe Cr', remarks: '—', order: 7 }
  ],

  sinterProjects: [
    { client: 'Vision Sponge', capacity: '100 TPD', type: 'Turnkey', period: '2015 – Till date', process: 'Pig Iron', remarks: 'Ongoing', order: 1 },
    { client: 'Singhal Energy', capacity: '100 TPD', type: 'Turnkey', period: '2019 – NA', process: 'Si Mn', remarks: '—', order: 2 },
    { client: 'Shankar Ferro', capacity: '100 TPD', type: 'Turnkey', period: '2021 – NA', process: 'Si Mn', remarks: '—', order: 3 },
    { client: 'Aarti Steels Ltd', capacity: '200 TPD', type: 'Turnkey', period: '2025 – Ongoing', process: 'Pig Iron', remarks: 'Ongoing', order: 4 },
    { client: 'Real Ispat', capacity: '200 TPD', type: 'Turnkey', period: '2025 – Ongoing', process: 'Si Mn', remarks: 'Ongoing', order: 5 }
  ],

  innovation: {
    title: 'Innovation & Success Highlight',
    subject: 'Micro fines metal recovery using diaphragm jigs',
    innovationElements: [
      'Middle gates design enhancement',
      'Wedge wire stainless steel screens'
    ],
    result: 'Additional metal recovery of approximately 2%. This performance improvement was not attainable with other jig designers.',
    tslNormsRevision: {
      client: 'Tata Steel Limited (TSL)',
      previousNorm: '84%',
      revisedNorm: '85.5%',
      context: 'Conversion plants'
    },
    impacts: [
      'Applicable to Fe Cr, Si Mn, and Fe Mn',
      'Enhanced cost-efficiency across recovery circuits',
      'Ensures long-term economic viability',
      'Delivers distinct competitive edge in slag metal extraction'
    ],
    sourceRef: 'Source: Company Credentials — Page 9'
  },

  operations: {
    heading: 'NGM Smelters',
    furnaceSpec: '22.5 MVA x 2 Nos',
    location: 'Monda',
    title: 'Operational SOP',
    scopeMatrix: 'Scope matrix FAP',
    scopeOverview: 'Raw Material receiving → Smelting → Metal breaking & Dispatch',
    scopeDetails: [
      'Production operations',
      'Mechanical maintenance jobs',
      'Electrical maintenance jobs',
      'RM receiving and stacking with tagging',
      'Feeding and charging',
      'Furnace Operation and Tapings execution',
      'Metal and slag shifting',
      'Breaking, packing, stacking of metal, and dispatch'
    ],
    steps: [
      {
        stepNumber: 1,
        name: 'Raw Material Receiving & Storage',
        overview: 'Weighbridge inspection, unloading, QA sampling, and inventory entry.',
        details: [
          'Weighbridge & Inspection: All trucks weighed for Manganese ore, Coke, Coal, Quartz, Dolomite, Electrode paste.',
          'Unloading: Mechanical grab/loader to designated yard bins with separate stacking for different grades.',
          'Quality Check: Lab tests for Mn%, Fe%, P, S, SiO2, Al2O3, and size analysis. Rejection if outside spec.',
          'Inventory: ERP entry, bin-wise stock management following FIFO.'
        ]
      },
      {
        stepNumber: 2,
        name: 'Raw Material Preparation',
        overview: 'Screening under-sized material, batching weigh-feeders, and conveyor charging.',
        details: [
          'Screening: Screening to avoid under sized material.',
          'Batching: Weigh feeders batch ore + coke + flux as per mix Grade & design for furnace charge.',
          'Charging: Belt conveyor charges mix to furnace bins/hoppers.'
        ]
      },
      {
        stepNumber: 3,
        name: 'Smelting — Submerged Arc Furnace (SAF) Operation',
        overview: '3-electrode SAF smelting at 1400-1600°C, tapping every 2-2.30 hrs, electrode management.',
        details: [
          'Charging: Continuous/batch charging of mix into furnace through charging chutes.',
          'Smelting: 3-electrode SAF (22.5 MVA) operating at 1400-1600°C with baked/self-baking electrodes forming slag & metal.',
          'Tapping: Tapping executed every 2–2.30 hrs by burning taphole, flowing metal & slag to ladles/granulation, sampling for grade check.',
          'Electrode Management: Slipping, casing welding, paste charging, maintaining electrode length & current, which is the key factors of Operation.'
        ],
        sourceNote: 'ERAMET Not able to maintain properly'
      },
      {
        stepNumber: 4,
        name: 'Casting & Cooling',
        overview: 'Ladle pouring into iron moulds, pig casting machine, or sand beds.',
        details: [
          'Casting: Metal ladle poured into cast iron moulds, pig casting machine, or sand beds.',
          'Cooling: Natural air cooling (24-48 hrs) or water spray; slag separated & granulated.',
          'Knocking: Moulds demoulded after solidification.'
        ]
      },
      {
        stepNumber: 5,
        name: 'Metal Breaking, Sizing & Sorting',
        overview: 'Primary rock breaker (<300mm), manual breaking, jaw/cone crushing (10-150mm), manual sorting, lab sampling.',
        details: [
          'Primary Breaking: Excavator with rock breaker / drop ball to break large slabs <300mm. Manual breaking also can perform to reduce the percentage of fines.',
          'Crushing & Screening: Jaw crusher, cone crusher, vibrating screens sizing 10-150mm according to customer specification.',
          'Manual Sorting & Sampling: Remove slag/foreign material, magnetic Fe removal, lot-wise sampling for lab grading (HC FeMn, SiMn, FeSi, FeCr).'
        ]
      },
      {
        stepNumber: 6,
        name: 'Packing & Dispatch',
        overview: 'Auto bagging into 1 MT jumbo or 50kg bags, labeling, covered storage, weighbridge dispatch.',
        details: [
          'Weighing & Packing: 1 MT jumbo bags, 50kg bags, or loose via auto bagging machine recording tare/gross weight.',
          'Labelling: Grade, Lot no, Weight, Date, Customer.',
          'Storage & Dispatch: Covered shed grade-wise stacking, truck weighing, invoice, E-way bill, loading by forklift/crane.'
        ],
        sourceNote: 'UDIN not applicable here but QC cert with each lot.'
      }
    ],
    slagGranulationNote: 'The source recommends slag granulation because it will be easier to handle such large volume slag in terms of: manpower, utilization of slag',
    metalRecoveryNote: 'metal recovery plant is must to recover the metal from contaminated slag which is about 6% of production',
    sourceRef: 'Source: Operational SOP — Pages 1-8'
  },

  rawMaterials: {
    operatingConditions: {
      load: '22.5 MVA',
      pf: '.78',
      lf: '.95',
      specificPower: '3.6 to 3.9 excluding Auxiliary',
      productionPerDayPerFurnace: '105 to 110 MT / Day / Furnace',
      totalProduction: '6000 to 6500 MT'
    },
    materials: [
      {
        material: 'Manganese',
        consumptionPerMT: '2 MT per MT of metal',
        monthlyRequirement: '13000 MT/month',
        size: '5-60mm',
        specifications: '36-38 & 46-48/Sinter 56'
      },
      {
        material: 'Coke',
        consumptionPerMT: '200 Kg',
        monthlyRequirement: '1300 MT/month',
        size: '5/30mm',
        specifications: 'Max 80 Fixed Carbon'
      },
      {
        material: 'Coal',
        consumptionPerMT: '450 Kg',
        monthlyRequirement: '3000 MT/month',
        size: '10-60mm',
        specifications: '40-50% Fixed carbon'
      },
      {
        material: 'Qtz',
        consumptionPerMT: '600 kg',
        monthlyRequirement: '4000 MT/month',
        size: '10-50mm',
        specifications: '95% Silica (Very Important)'
      },
      {
        material: 'Dolomite',
        consumptionPerMT: '250 Kg',
        monthlyRequirement: '1600 MT/month',
        size: '10-40mm',
        specifications: '60% CaO + MgO Total'
      },
      {
        material: 'Carbon paste',
        consumptionPerMT: '018 Kg',
        monthlyRequirement: '120 MT/month',
        size: '40-50mm',
        specifications: 'No Briquette, No blocks only sized paste'
      }
    ],
    note: '3-5% may vary according to grade and in-built standard Moisture, size etc.',
    sourceExcelNote: 'ATTACHED EXCEL SHEET OF CHARGE MIX FOR YOUR BETTER UNDERSTANDING',
    storageShedRequirement: {
      description: 'To maintain 3 months inventory there should be a provision of Coke and coal shed.',
      dimensions: '30 meters / 60 meters',
      centerHeight: '12 meters height center height',
      bothSidesHeight: '7 meter both sides',
      type: 'semi closed shed'
    },
    sourceRef: 'Source: Operational SOP — Page 2'
  },

  maintenance: {
    mechanical: {
      rawMaterial: [
        'Weighbridge calibration',
        'Conveyor belt alignment/tensioning',
        'Crusher/screen maintenance',
        'Grab bucket repairs',
        'Bin gate valves',
        'Dust extraction system'
      ],
      furnace: [
        'Furnace shell inspection',
        'Refractory lining health audit',
        'Taphole drilling machine maintenance',
        'Mud gun hydraulic overhaul',
        'Electrode column & slipping clamps inspection',
        'Pressure rings & contact shoes maintenance',
        'Hydraulic systems for electrode regulation',
        'Bus tube cooling circuit',
        'Fume extraction ducts',
        'Bag house & ID fans'
      ],
      casting: [
        'Ladle refractory lining',
        'Trunnions inspection',
        'EOT crane for ladle',
        'Casting machine chains/moulds',
        'Slag granulation pumps',
        'Water spray nozzles'
      ],
      metalBreaking: [
        'Rock breaker chisel replacement',
        'Crusher liners/jaws overhaul',
        'Screen decks maintenance',
        'Conveyor belts/idlers replacement',
        'Magnetic separator drums maintenance',
        'Dust collectors maintenance'
      ],
      packing: [
        'Bagging machine calibration',
        'Stitching machine maintenance',
        'Weighing scales verification',
        'Forklifts servicing',
        'Pneumatic conveying systems',
        'Loading chutes maintenance'
      ],
      plantWidePreventive: [
        'Daily: Lubrication routines',
        'Weekly: Belt inspection',
        'Monthly: Gearbox oil check',
        'Quarterly: Major alignment audits'
      ],
      plantWideBreakdown: [
        'Crusher jam clearance',
        'Furnace leak repairs',
        'Electrode break restoration',
        'Conveyor belt snap vulcanization',
        'Hydraulic failure troubleshooting'
      ],
      shutdown: [
        'Annual furnace relining (15-30 days)',
        'Bag house bag change',
        'EOT crane overhauling'
      ],
      fabricationWorkshop: [
        'Central workshop fabrication of chutes, hoppers, ducting',
        'Ladle structural repairs'
      ]
    },
    electrical: {
      rawMaterial: [
        'Weighbridge load cells testing',
        'Conveyor motor starters/VFDs',
        'Limit switches verification',
        'Yard lighting maintenance',
        'CCTV systems audit',
        'PLC for stockpile management'
      ],
      furnace: [
        'Furnace transformer (33kV to 80-200V) maintenance',
        'OLTC & RTCC panels testing',
        'Thyristor/PLC based electrode regulation system',
        'CT/PT testing',
        'HT/LT switchgear overhauling',
        'Capacitor banks for PF correction',
        'Electrode hoist motors maintenance',
        'Hydraulic power pack controls',
        'Temperature/level sensors calibration',
        'Furnace SCADA management'
      ],
      casting: [
        'EOT crane motors/VFDs maintenance',
        'Limit switches audit',
        'Ladle car motors maintenance',
        'PCM controls check',
        'Cooling tower fans/pumps controls'
      ],
      metalBreaking: [
        'Crusher motors servicing',
        'VFDs & starters maintenance',
        'Metal detector controls verification',
        'Bag filter pulse valves testing',
        'MCC for crushing plant'
      ],
      packing: [
        'Load cell calibration',
        'Bagging PLC maintenance',
        'Printer/scanner maintenance',
        'Weighbridge electricals',
        'Lighting & Fire alarm systems'
      ],
      plantWidePreventive: [
        'Monthly: IR thermography of HT panels',
        'Quarterly: Transformer oil BDV test',
        'Half-yearly: Earth pit testing',
        'Annually: Relay testing & protection audit'
      ],
      plantWideBreakdown: [
        'Motor burnout rewinding',
        'VFD trip diagnostics',
        'Cable fault location & splicing',
        'PLC card failure replacement',
        'Electrode regulator tuning'
      ],
      conditionMonitoring: [
        'Vibration analysis of ID fans',
        'MCSA for HT motors',
        'Tan-delta testing of cables'
      ],
      automation: [
        'SCADA/DCS backup procedures',
        'PLC logic enhancements',
        'Instrumentation calibration'
      ]
    },
    sourceRef: 'Source: Operational SOP — Pages 4-7'
  },

  safety: {
    title: 'Safety & Environmental Standards',
    permits: [
      'Hot work permit',
      'Height work permit',
      'Confined space entry permit',
      'Electrical LOTO (Lockout/Tagout) before any maintenance job'
    ],
    ppeRequirements: [
      'Furnace jacket for tapping team',
      'Heat-resistant gloves',
      'Safety goggles',
      'Dust mask for RM handling area'
    ],
    recordsAndLogbooks: [
      'Shift logbook',
      'Tap log',
      'Electrode consumption records',
      'Breakdown log',
      'PM checklists',
      'ISO documentation'
    ],
    environmentalControls: [
      'ESP / Bag house for furnace fume extraction',
      'Water sprinklers for RM yard dust suppression',
      'Slag disposal to slag crusher & granulation'
    ],
    sourceRef: 'Source: Operational SOP — Page 8'
  },

  kpis: {
    title: 'KPI Si.Mn based on local ores of both Comilog & NGM',
    dayPowerProductionCalculation: {
      formulaPower: '22.5 x .78 PF x .97 LF = 17 MWH x 24 hrs = 408 MWH/day',
      formulaProduction: 'Specific Power @ 3.8 = 107 MT x 2 Furnace = 214 MT/day'
    },
    grades: [
      {
        gradeName: 'Si.Mn 65/16 GRADE',
        mnFeRatio: 'MN:Fe 4:3',
        carbonInput: '370-380 ma x', // EXPLICIT PRESERVATION OF PDF WORDING
        avgMnInput: '38 to 42%',
        basicity: '-.850 to .9',
        mnO: '-.8'
      },
      {
        gradeName: 'Si.Mn 60/14 GRADE',
        mnFeRatio: 'Mn: Fe – 3',
        carbonInput: '360 to 380 max',
        avgMnInput: '36 to 38%',
        basicity: '- .750 to .850',
        mnO: 'max 14%'
      }
    ],
    sourceRef: 'Source: Operational SOP — Pages 9-10'
  },

  manpower: {
    title: 'Manpower Strength — As on Date',
    totalStrength: '~3,100 personnel',
    sitesCount: '20+ sites',
    scope: [
      'Furnace O&M',
      'MRP (Metal Recovery Plants)',
      'Sinter Projects',
      'O&M operations'
    ],
    furnaceSites: [
      { clientSite: 'Aarti Steels Ltd', strength: 430 },
      { clientSite: 'Centom Ferro/Carbon Resources', strength: 350 },
      { clientSite: 'Electro Steels Ltd', strength: 240 },
      { clientSite: 'NR Ispat', strength: 250 },
      { clientSite: 'Real Ispat', strength: 180 },
      { clientSite: 'Vision Sponge', strength: 120 },
      { clientSite: 'Tirumala Balaji & MSP', strength: 250 }
    ],
    mrpSites: [
      { clientSite: 'Jindal Stainless Ltd', strength: 390 },
      { clientSite: 'Tata Steels Ltd', strength: 110 },
      { clientSite: 'Tirumala Balaji', strength: 35 },
      { clientSite: 'BS Sponge & MSP', strength: 20 }
    ],
    sinterSites: [
      { clientSite: 'Aarti Steels Ltd', strength: 40 },
      { clientSite: 'Real Ispat', strength: 30 }
    ],
    keyObservations: [
      'Venkateswar Engg Works Pvt. Ltd. has deep integration with the Ferro Alloy industry, especially in Odisha, Chhattisgarh, Andhra Pradesh, and West Bengal.',
      'Strong long-term client relationships — especially with Aarti, Tata, Jindal, and IMFA.',
      'High manpower commitment indicates strong operational capacity across multiple simultaneous projects.',
      'Wide-ranging project portfolio — from small Jig Machine supplies to full-scale BOOT-based MRP plants.'
    ],
    conclusion: 'Venkateswar Engg Works has established itself as a technically competent and reliable partner for Furnace O&M, MRP, and Sinter projects in the Ferro Alloys sector. Their breadth of experience across geographies, clients, and project models (Furnace O&M, MRP & Sinter, BOOT/BOO/Turnkey) positions them as a strong candidate for any future metallurgical plant development or O&M engagement. We look forward to the opportunity to collaborate and contribute to your metallurgical plant projects.',
    sourceRef: 'Source: Company Credentials — Page 10'
  }
};
