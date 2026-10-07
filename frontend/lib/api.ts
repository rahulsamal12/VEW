import * as staticData from './data';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:5000/api';

async function fetchFromApi<T>(endpoint: string, fallback: T): Promise<T> {
  try {
    const res = await fetch(`${API_BASE}${endpoint}`, { cache: 'no-store' });
    if (!res.ok) { console.error(`[API Fetch Error] Endpoint ${endpoint} returned status ${res.status}`); return fallback; }
    const json = await res.json();
    return json.data || fallback;
  } catch (error) { console.error(`[API Fetch Error] Endpoint ${endpoint} failed:`, error.message);
    return fallback;
  }
}

export async function getCompanyInfo() {
  return fetchFromApi('/settings', {
    name: "Venkateswar Engg Works Pvt. Ltd.",
    companyName: "Venkateswar Engg Works Pvt. Ltd.",
    shortName: "Venkateswar Engg Works Pvt. Ltd.",
    gstin: "21ARXPK7658Q1ZO",
    founded: 2003,
    description: "Leading metallurgical operations.",
    vision: "To lead the metallurgical engineering sector with unmatched operational excellence and technical capability.",
    founder: "Mr. Jayaram Kothari",
    managingPartner: "Mr. Sreenivas Kothari",
    contacts: [
      { name: "Support", title: "General", phone: "+91 9999999999", email: "info@vew.com" }
    ]
  });
}

export async function getAboutData() {
  return fetchFromApi('/about', {
    overview: "",
    foundersVision: "",
    corePillars: []
  });
}

export async function getHomepageData() {
  return fetchFromApi('/homepage', {
    heroHeading: "",
    heroSubheading: "Furnace O&M, Metal Recovery Plants, Sinter Plants & Turnkey Projects",
    companyIntro: "",
    keyStatistics: []
  });
}

export async function getServicesData() {
  return fetchFromApi('/services', []);
}

export async function getServiceBySlug(slug: string) {
  return fetchFromApi(`/services/${slug}`, [].find(s => s.slug === slug) || [][0]);
}

export async function getClientsData() {
  return fetchFromApi('/clients', []);
}

export async function getFurnaceProjectsData() {
  return fetchFromApi('/projects/furnace', []);
}

export async function getMRPProjectsData() {
  return fetchFromApi('/projects/mrp', []);
}

export async function getSinterProjectsData() {
  return fetchFromApi('/projects/sinter', []);
}

export async function getInternationalProjectsData() {
  return fetchFromApi('/projects/international', []);
}

export async function getInnovationData() {
  const data: any = await fetchFromApi('/innovation', null);
  if (data && data.innovationElements) {
    return {
      title: data.title,
      subject: data.subject,
      elements: data.innovationElements,
      result: data.result,
      tslNorms: {
        client: data.tslNormsRevision?.client || '',
        previous: data.tslNormsRevision?.previousNorm || '',
        revised: data.tslNormsRevision?.revisedNorm || '',
        context: data.tslNormsRevision?.context || ''
      },
      impacts: data.impacts
    };
  }
  return data;
}

export async function getRawMaterialsData() {
  const data: any = await fetchFromApi('/raw-materials', null);
  if (data && data.storageShedRequirement) {
    return {
      operatingConditions: {
        load: data.operatingConditions?.load,
        pf: data.operatingConditions?.pf,
        lf: data.operatingConditions?.lf,
        specificPower: data.operatingConditions?.specificPower,
        productionPerDay: data.operatingConditions?.productionPerDayPerFurnace,
        totalProduction: data.operatingConditions?.totalProduction
      },
      materials: data.materials?.map((m: any) => ({
        material: m.material,
        consumption: m.consumptionPerMT,
        monthly: m.monthlyRequirement,
        size: m.size,
        specs: m.specifications
      })) || [],
      note: data.note,
      excelNote: data.sourceExcelNote,
      storageShed: {
        description: data.storageShedRequirement?.description,
        dimensions: data.storageShedRequirement?.dimensions,
        height: data.storageShedRequirement?.centerHeight,
        bothSides: data.storageShedRequirement?.bothSidesHeight,
        type: data.storageShedRequirement?.type
      }
    };
  }
  return data;
}

export async function getOperationalSopData() {
  const data: any = await fetchFromApi('/operations', null);
  if (data && data.scopeDetails) {
    return {
      ...data,
      activities: data.scopeDetails
    };
  }
  return data;
}

export async function getKpiData() {
  const data: any = await fetchFromApi('/kpis', null);
  if (data && data.dayPowerProductionCalculation) {
    return {
      title: data.title,
      powerCalculation: data.dayPowerProductionCalculation?.formulaPower,
      productionCalculation: data.dayPowerProductionCalculation?.formulaProduction,
      grade65: {
        name: data.grades?.[0]?.gradeName,
        ratio: data.grades?.[0]?.mnFeRatio,
        carbonInput: data.grades?.[0]?.carbonInput,
        mnInput: data.grades?.[0]?.avgMnInput,
        basicity: data.grades?.[0]?.basicity,
        mno: data.grades?.[0]?.mnO
      },
      grade60: {
        name: data.grades?.[1]?.gradeName,
        ratio: data.grades?.[1]?.mnFeRatio,
        carbonInput: data.grades?.[1]?.carbonInput,
        mnInput: data.grades?.[1]?.avgMnInput,
        basicity: data.grades?.[1]?.basicity,
        mno: data.grades?.[1]?.mnO
      }
    };
  }
  return data;
}

export async function getManpowerData() {
  return fetchFromApi('/manpower', null);
}

export async function getJourneyData() {
  return fetchFromApi('/journey', []);
}

export async function sendEnquiry(data: { name: string; company: string; email: string; phone: string; subject: string; message: string }) {
  try {
    const res = await fetch(`${API_BASE}/enquiry`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return await res.json();
  } catch (error: any) {
    return { success: false, message: error?.message || 'Failed to connect to backend server' };
  }
}

import { SITE_IMAGES as fallbackImages } from './images';

export async function getSiteImages() {
  const dynamicImages: Record<string, string> = await fetchFromApi('/images', {});
  
  const mergedImages = { ...fallbackImages };
  // If we have dynamic URLs, prepend the backend API base (if they are relative like /uploads/...)
  const backendBase = process.env.NEXT_PUBLIC_API_URL?.replace('/api', '') || 'http://localhost:5000';
  
  for (const [key, val] of Object.entries(dynamicImages)) {
    if (val) {
      mergedImages[key as keyof typeof fallbackImages] = val.startsWith('http') ? val : `${backendBase}${val}`;
    }
  }
  
  return mergedImages;
}

