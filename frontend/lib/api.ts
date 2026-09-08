import * as staticData from './data';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

async function fetchFromApi<T>(endpoint: string, fallback: T): Promise<T> {
  try {
    const res = await fetch(`${API_BASE}${endpoint}`, { cache: 'no-store' });
    if (!res.ok) return fallback;
    const json = await res.json();
    return json.data || fallback;
  } catch (error) {
    return fallback;
  }
}

export async function getCompanyInfo() {
  return fetchFromApi('/settings', staticData.COMPANY_INFO);
}

export async function getHomepageData() {
  return fetchFromApi('/homepage', {
    heroHeading: staticData.COMPANY_INFO.tagline,
    heroSubheading: "Furnace O&M, Metal Recovery Plants, Sinter Plants & Turnkey Projects",
    companyIntro: staticData.COMPANY_INFO.description,
    keyStatistics: staticData.KEY_STATISTICS
  });
}

export async function getServicesData() {
  return fetchFromApi('/services', staticData.SERVICES_LIST);
}

export async function getServiceBySlug(slug: string) {
  return fetchFromApi(`/services/${slug}`, staticData.SERVICES_LIST.find(s => s.slug === slug) || staticData.SERVICES_LIST[0]);
}

export async function getClientsData() {
  return fetchFromApi('/clients', staticData.MAJOR_CLIENTS);
}

export async function getFurnaceProjectsData() {
  return fetchFromApi('/projects/furnace', staticData.FURNACE_PROJECTS);
}

export async function getMRPProjectsData() {
  return fetchFromApi('/projects/mrp', staticData.MRP_PROJECTS);
}

export async function getSinterProjectsData() {
  return fetchFromApi('/projects/sinter', staticData.SINTER_PROJECTS);
}

export async function getInternationalProjectsData() {
  return fetchFromApi('/projects/international', staticData.INTERNATIONAL_PROJECTS);
}

export async function getInnovationData() {
  return fetchFromApi('/innovation', staticData.INNOVATION_DATA);
}

export async function getRawMaterialsData() {
  return fetchFromApi('/raw-materials', staticData.RAW_MATERIAL_DATA);
}

export async function getOperationalSopData() {
  return fetchFromApi('/operations', staticData.OPERATIONAL_SOP_DATA);
}

export async function getKpiData() {
  return fetchFromApi('/kpis', staticData.KPI_DATA);
}

export async function getManpowerData() {
  return fetchFromApi('/manpower', staticData.MANPOWER_DATA);
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
