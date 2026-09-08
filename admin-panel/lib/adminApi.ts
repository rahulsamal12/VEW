const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export function getToken(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('vew_admin_token');
}

export function setToken(token: string) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('vew_admin_token', token);
  }
}

export function removeToken() {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('vew_admin_token');
  }
}

export async function loginAdmin(credentials: { username: string; password: string }) {
  try {
    const res = await fetch(`${API_BASE}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials)
    });
    const json = await res.json();
    if (json.success && json.token) {
      setToken(json.token);
    }
    return json;
  } catch (error: any) {
    return { success: false, message: error?.message || 'Login failed' };
  }
}

export async function fetchAdminData(endpoint: string) {
  const token = getToken();
  try {
    const res = await fetch(`${API_BASE}${endpoint}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return await res.json();
  } catch (error: any) {
    return { success: false, message: error?.message };
  }
}

export async function updateAdminData(endpoint: string, data: any, method: 'POST' | 'PUT' | 'DELETE' = 'PUT') {
  const token = getToken();
  try {
    const res = await fetch(`${API_BASE}${endpoint}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(data)
    });
    return await res.json();
  } catch (error: any) {
    return { success: false, message: error?.message };
  }
}
