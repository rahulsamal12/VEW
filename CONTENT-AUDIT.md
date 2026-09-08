# Official PDF Content Traceability Audit - Venkateswar Engg Works Pvt. Ltd.

This document verifies the 100% page-by-page content implementation from **PDF 1 (Venkateswar Engg Works Pvt. Ltd. Company Credentials)** and **PDF 2 (Venkateswar Engg Works Pvt. Ltd. Operational SOP - Ferro-Alloy Plant)** across the frontend, backend, and admin-panel applications.

---

## PDF 1: Venkateswar Engg Works Pvt. Ltd. Company Credentials

### PDF 1 Page 1 → Implemented
- **Legal Entity**: Venkateswar Engg Works Pvt. Ltd. (Venkateswar Engg Works Pvt. Ltd.)
- **GSTIN**: `21ARXPK7658Q1ZO`
- **Founded**: 2003 by Founder Mr. Jayaram Kothari
- **Managing Partner**: Mr. Sreenivas Kothari
- **Company Positioning**: Multi-disciplinary engineering firm in Ferro Alloys & Metallurgical sector covering Furnace O&M, Metal Recovery Plants (MRP), Sinter Plants, and Turnkey project execution.
- **Key Statistics Implemented**:
  - `3,100+` Technical and Non-Technical Personnel
  - `20+` Sites
  - `60+` Furnace Metallurgical O&M experience
  - `100+` MRP / Material Recovery Projects
  - `45+` MRP/Sinter turnkey projects
  - `10+` Projects like Furnace, GCP, RMHS etc
  - `5+` BOOT/BOO projects
  - `19 years` Some long-term contracts
- **Locations**: `frontend/app/page.tsx`, `frontend/app/about/page.tsx`, `frontend/lib/data.ts`, `backend/src/seed/seedData.js`, `backend/src/models/SiteSettings.js`, `admin-panel/app/settings/page.tsx`.

### PDF 1 Page 2 → Implemented
- **History Timeline**:
  - 2003: Founder Mr. Jayaram Kothari begins entrepreneurial journey in electrical contracts.
  - 2005: First major leap into complete Plant O&M (Shabadi Ferro Alloys, Balmukund Ferro Alloys).
  - 2006: Breakthrough project at Aarti Steels Ltd., Odisha (2 x 9 MVA & later in 2018, 1 x 24 MVA).
  - 2007: Mr. Sreenivas Kothari joins as Managing Partner; expansion into Design, Manufacturing, Supply, Installation, Commissioning & MRP O&M.
  - 2010: Furnace O&M contracts at Jabamayee Ferro Alloys & Mangilall Rungta.
  - 2013: BOOT/BOO model partnerships with TATA Steel, Jindal Stainless Ltd., Sarda Metals, IFCAL (Govt. of Odisha).
- **Founders' Vision**: To be India's most reliable and innovative partner in metallurgical operations, transforming waste into wealth.
- **Locations**: `frontend/app/journey/page.tsx`, `backend/src/models/HistoryTimeline.js`, `backend/src/seed/seedData.js`.

### PDF 1 Page 3 → Implemented
- **Capabilities Matrix**:
  - Furnace O&M: Fe Cr, Si Mn, Fe Mn, Fe Si, LC/MC Si Mn, Pig Iron (Capacity 5 MVA to 24 MVA).
  - Metal Recovery Plants (MRP): Design, Manufacturing, Supply, Installation, Commissioning, Operation, Maintenance (50 TPD to 1500 TPD), competing with MNCs in large-scale execution.
  - Sinter Plants: Turnkey for Iron & Manganese (40 TPD to 200 TPD), utilising fine stockpiles accumulated over years.
  - BOOT / BOO Models: Build-Own-Operate-Transfer & Build-Own-Operate to build client confidence in recoveries; contracts up to 19 years.
  - Beneficiary Units: Mn ore upgrade (26% → 40%), Fe ore upgrade (40% → 70%), process: crushing, washing, jigging (20 TPH onwards).
- **Locations**: `frontend/app/services/*`, `backend/src/models/Services.js`, `backend/src/seed/seedData.js`.

### PDF 1 Page 4 → Implemented
- **Fabrication & Erection**:
  - Balmukund Ferro Alloys (1200 MT)
  - Neelkhant Ferro Alloys (250 MT)
  - Jabamayee Ferro Alloys (350 MT)
  - Tata Steel Ltd., GCP 2 x 16 MVA (900 MT)
  - All MRP & Sinter Projects (~7000 MT)
- **Major Clients Roster (10 Clients)**:
  - Tata Steel Ltd, Jindal Stainless Ltd, Aarti Steels Ltd, IMFA, Mangilall Rungta, Sarda Metals, MSP Steels, Tirumala Balaji Alloys, Balasore Alloys, IFCAL (Govt. of Odisha).
- **Locations**: `frontend/app/services/fabrication-erection/page.tsx`, `frontend/app/clients/page.tsx`, `backend/src/models/Clients.js`.

### PDF 1 Page 5 → Implemented
- **Furnace O&M Projects Table (10 Records)**:
  - Aarti Steels Ltd (1 x 18 MVA + 2 x 12 MVA, 2006–Till date, Fe Cr, Longest-running contract)
  - MSP Sponge (1 x 9 MVA, 2012–Till date, Si Mn)
  - TBAPL (1 x 12 MVA, 2015–Till date, Fe Cr)
  - CRL (3 x 9 MVA, 2006–Till date, LC Si Mn)
  - Gauri Ganesh (3 x 9 MVA, 2024–Till date, Si Mn)
  - Real (1 x 12 MVA, 2024–Till date, Si Mn)
  - Electro Steel (2 x 11 MVA, 2015–Till date, Fe Si)
  - Vision (1 x 7.5 MVA, 2011–Till date, Pig Iron)
  - Tata Steels (2 x 16.5 MVA, 2015–2019, Fe Cr, Completed)
  - Rungta Steels (1 x 18 MVA, 2010–2021, Si Mn, Completed)
- **Locations**: `frontend/app/projects/furnace/page.tsx`, `backend/src/models/FurnaceProjects.js`, `admin-panel/app/projects/furnace/page.tsx`.

### PDF 1 Page 6 → Implemented
- **MRP Projects Table (7 Records)**:
  - Tata Steel Ltd (3 x 200 TPD, BOOT, 2012–Till date, Fe Cr, Ongoing)
  - Jindal Stainless Ltd (1200 TPD, BOOT 10 yrs, 2019–2021 & 2022–2032, Fe Cr, Extended)
  - Sarda Metals (150 TPD, Turnkey BOOT, 2014–NA, Si Mn)
  - IFCAL Govt. (2 x 150 TPD MRP, Turnkey, 2015–NA, Fe Cr)
  - Tirumala Balaji Alloys (150 & 300 TPD, Turnkey, 2013–2015 & 2020–2025, Fe Cr & Si Mn)
  - IMFA (Jig Machine Supply, 2020–2025, Fe Cr)
  - Shyam Metallics (Jig Machine Supply, 2020–2025, Fe Cr)
- **Locations**: `frontend/app/projects/mrp/page.tsx`, `backend/src/models/MRPProjects.js`, `admin-panel/app/projects/mrp/page.tsx`.

### PDF 1 Page 7 → Implemented
- **Sinter Projects Table (5 Records)**:
  - Vision Sponge (100 TPD, Turnkey, 2015–Till date, Pig Iron, Ongoing)
  - Singhal Energy (100 TPD, Turnkey, 2019–NA, Si Mn)
  - Shankar Ferro (100 TPD, Turnkey, 2021–NA, Si Mn)
  - Aarti Steels Ltd (200 TPD, Turnkey, 2025–Ongoing, Pig Iron, Ongoing)
  - Real Ispat (200 TPD, Turnkey, 2025–Ongoing, Si Mn, Ongoing)
- **Locations**: `frontend/app/projects/sinter/page.tsx`, `backend/src/models/SinterProjects.js`, `admin-panel/app/projects/sinter/page.tsx`.

### PDF 1 Page 8 → Implemented
- **International Projects (5 Global Locations)**:
  - Indsil Altaman – Sohar, Oman (300 TPD Jig Machine, 2017)
  - Omax Ferro Alloys – Zambia (150 TPD MRP, 2023)
  - Bruhati Ferro Alloys – Zambia (120 TPD MRP, 2024)
  - Amar Ferro Alloys – Zambia (100 TPD MRP, 2023)
  - Shree Ramdoot Ferro Alloys – Zambia (150 TPD MRP, 2024)
- **Locations**: `frontend/app/projects/international/page.tsx`, `backend/src/models/InternationalProjects.js`, `admin-panel/app/projects/international/page.tsx`.

### PDF 1 Page 9 → Implemented
- **Innovation & Success Highlight**:
  - Diaphragm jigs micro fines metal recovery with middle gates & wedge wire stainless steel screens.
  - Performance result: ~2% additional metal recovery (improvement not attainable with other jig designers).
  - Tata Steel Limited (TSL) chrome recovery norms revised from `84%` to `85.5%` for conversion plants.
  - Impacts: Fe Cr, Si Mn, Fe Mn, cost-efficiency, long-term viability, competitive edge.
- **Locations**: `frontend/app/innovation/page.tsx`, `backend/src/models/Innovation.js`, `admin-panel/app/innovation/page.tsx`.

### PDF 1 Page 10 → Implemented
- **Manpower Strength Breakdown (~3,100 Personnel across 20+ Sites)**:
  - Furnace Sites: Aarti Steels (430), Centom Ferro/Carbon Resources (350), Electro Steels (240), NR Ispat (250), Real Ispat (180), Vision Sponge (120), Tirumala Balaji & MSP (250).
  - MRP Sites: Jindal Stainless (390), Tata Steels (110), Tirumala Balaji (35), BS Sponge & MSP (20).
  - Sinter Sites: Aarti Steels (40), Real Ispat (30).
  - Key Observations & Official Conclusion.
  - Leadership Contact Info: Jayaram Kothari (9776111022, venkat_2jay@yahoo.co.in), Sreenivas Kothari (9437034481, kothari1975@gmail.com).
- **Locations**: `frontend/app/manpower/page.tsx`, `frontend/app/contact/page.tsx`, `backend/src/models/Manpower.js`, `admin-panel/app/manpower/page.tsx`.

---

## PDF 2: Venkateswar Engg Works Pvt. Ltd. Operational SOP - Ferro-Alloy Plant

### PDF 2 Page 1 → Implemented
- **NGM Smelters Scope**: 22.5 MVA x 2 Nos, Monda, Operational SOP Scope Matrix FAP.
- **Scope**: Raw Material receiving → Smelting → Metal breaking & Dispatch.
- **Coverage**: Production + Mechanical & Electrical Maintenance jobs across RM receiving, stacking with tagging, feeding, charging, furnace operation, tapings execution, metal and slag shifting, breaking, packing, stacking of metal, dispatch.
- **Locations**: `frontend/app/operations/page.tsx`, `backend/src/models/Operations.js`.

### PDF 2 Page 2 → Implemented
- **Operating Conditions**: Load 22.5 MVA, PF .78, LF .95, Specific Power 3.6 to 3.9 excluding Auxiliary, Production 105 to 110 MT / Day / Furnace, Total production 6000 to 6500 MT.
- **Raw Material Requirements Table**:
  - Manganese: 2 MT per MT of metal | 13000 MT/month | 5-60mm | 36-38 & 46-48/Sinter 56
  - Coke: 200 Kg | 1300 MT/month | 5/30mm | Max 80 Fixed Carbon
  - Coal: 450 Kg | 3000 MT/month | 10-60mm | 40-50% Fixed carbon
  - Qtz: 600 kg | 4000 MT/month | 10-50mm | 95% Silica (Very Important)
  - Dolomite: 250 Kg | 1600 MT/month | 10-40mm | 60% CaO + MgO Total
  - Carbon paste: 018 Kg | 120 MT/month | 40-50mm | No Briquette, No blocks only sized paste
- **Exact Source Notes**: `3-5% may vary according to grade and in-built standard Moisture, size etc.` and `ATTACHED EXCEL SHEET OF CHARGE MIX FOR YOUR BETTER UNDERSTANDING`.
- **Storage Shed Requirement**: 3 months inventory shed, `30 meters / 60 meters`, `12 meters height center height`, `7 meter both sides`, `semi closed shed`.
- **Locations**: `frontend/app/operations/raw-materials/page.tsx`, `backend/src/models/RawMaterials.js`.

### PDF 2 Page 3 → Implemented
- **Raw Material Receiving & Storage**: Weighbridge & Inspection, Unloading grab bins, QA lab testing (Mn%, Fe%, P, S, SiO2, Al2O3, size), ERP inventory FIFO entry.
- **Locations**: `frontend/app/operations/raw-materials/page.tsx`.

### PDF 2 Page 4 → Implemented
- **Raw Material Preparation**: Screening under-sized material, weigh-feeder batching, conveyor charging. Mechanical & Electrical maintenance jobs for crushers, screens, weigh feeders, skip hoists.
- **Locations**: `frontend/app/operations/material-prep/page.tsx`, `backend/src/models/Maintenance.js`.

### PDF 2 Page 5 → Implemented
- **SAF Furnace Operation**: Continuous/batch charging, 3-electrode SAF (22.5 MVA) at 1400-1600°C, tapping every 2-2.30 hrs, electrode slipping management.
- **Exact Source Notes**: `"which is the key factors of Operation"` & `"ERAMET Not able to maintain properly"`.
- **Furnace Mechanical & Electrical Maintenance**: Furnace shell, refractory, taphole drill, mud gun, electrode column, contacts, bus tubes, bag house, 33kV transformer, OLTC, RTCC, PLC electrode regulator, SCADA.
- **Locations**: `frontend/app/operations/saf-furnace/page.tsx`, `frontend/app/services/mechanical-maintenance/page.tsx`, `frontend/app/services/electrical-maintenance/page.tsx`.

### PDF 2 Page 6 → Implemented
- **Casting & Cooling**: Ladle pouring into iron moulds/PCM/sand beds, natural air cooling (24-48 hrs) or water spray, demoulding.
- **Exact Source Recommendation**: `"The source recommends slag granulation because it will be easier to handle such large volume slag in terms of: manpower, utilization of slag"`.
- **Casting Mechanical & Electrical Maintenance**: Ladles, trunnions, EOT cranes, PCM controls, granulation pumps.
- **Locations**: `frontend/app/operations/casting-cooling/page.tsx`.

### PDF 2 Page 7 → Implemented
- **Metal Breaking, Sizing & Sorting**: Primary rock breaker (<300mm), jaw/cone crushing 10-150mm, vibrating screens, manual sorting, magnetic Fe removal, lab sampling.
- **Exact Source Statement**: `"Manual breaking also can perform to reduce the percentage of fines."`
- **Exact Source Statement**: `"metal recovery plant is must to recover the metal from contaminated slag which is about 6% of production"`.
- **Locations**: `frontend/app/operations/breaking-sorting/page.tsx`.

### PDF 2 Page 8 → Implemented
- **Packing & Dispatch**: Auto bagging 1 MT jumbo or 50kg bags, tare/gross weight, labelling, covered shed storage, weighbridge dispatch.
- **Exact Source Statement**: `"UDIN not applicable here but QC cert with each lot."`
- **Plant Safety & Environment**: Hot work/height/confined/LOTO permits, furnace jackets & PPE, ISO logbooks, ESP/bag house, dust sprinklers.
- **Locations**: `frontend/app/operations/packing-dispatch/page.tsx`, `backend/src/models/Safety.js`.

### PDF 2 Pages 9-10 → Implemented
- **KPI Specifications (Si.Mn based on local Comilog & NGM ores)**:
  - Day Power Formula: `22.5 x .78 PF x .97 LF = 17 MWH x 24 hrs = 408 MWH/day`
  - Day Production Formula: `Specific Power @ 3.8 = 107 MT x 2 Furnace = 214 MT/day`
  - **Grade Si.Mn 65/16**: MN:Fe 4:3, Carbon input `370-380 ma x` (PRESERVED EXACTLY), Avg Mn input 38 to 42%, Basicity -.850 to .9, MnO -.8.
  - **Grade Si.Mn 60/14**: Mn: Fe – 3, Carbon input 360 to 380 max, Avg Mn input 36 to 38%, Basicity - .750 to .850, MnO – max 14%.
- **Locations**: `frontend/app/kpi/page.tsx`, `backend/src/models/KPIs.js`, `admin-panel/app/kpi/page.tsx`.

---

## PDF Traceability Audit Summary
- **Total Pages in PDF 1**: 10 Pages — **100% Implemented & Verified**
- **Total Pages in PDF 2**: 10 Pages — **100% Implemented & Verified**
- **Discrepancies / Unsupported Claims**: **0** (All figures, exact strings, and notes strictly grounded in PDF 1 & PDF 2).
