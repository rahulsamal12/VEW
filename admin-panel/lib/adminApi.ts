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
    const text = await res.text();
    let json;
    try {
      json = JSON.parse(text);
    } catch(e) {
      return { success: false, message: `Server error: ${res.status} ${res.statusText}` };
    }
    if (json.success && json.token) {
      console.log('Login success, saving token:', json.token.substring(0, 15) + '...');
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
    const separator = endpoint.includes('?') ? '&' : '?';
    const timestampedEndpoint = `${endpoint}${separator}_t=${Date.now()}`;
    const res = await fetch(`${API_BASE}${timestampedEndpoint}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      },
      cache: 'no-store'
    });
    const text = await res.text();
    if (res.status === 401) {
      removeToken();
      if (typeof window !== 'undefined') window.location.href = '/login';
      return { success: false, message: 'Session expired. Please log in again.' };
    }
    try {
      return JSON.parse(text);
    } catch(e) {
      return { success: false, message: `Server error: ${res.status} ${res.statusText}` };
    }
  } catch (error: any) {
    return { success: false, message: error?.message };
  }
}

export async function updateAdminData(endpoint: string, data: any, method: 'POST' | 'PUT' | 'DELETE' = 'PUT') {
  const token = getToken();
  try {
    const options: RequestInit = {
      method,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    };
    console.log('Sending token in updateAdminData:', token ? token.substring(0, 15) + '...' : null);
    
    if (method !== 'DELETE') {
      options.headers = {
        ...options.headers,
        'Content-Type': 'application/json'
      };
      options.body = JSON.stringify(data);
    }

    const res = await fetch(`${API_BASE}${endpoint}`, options);
    const text = await res.text();
    if (res.status === 401) {
      removeToken();
      if (typeof window !== 'undefined') window.location.href = '/login';
      return { success: false, message: 'Session expired. Please log in again.' };
    }
    try {
      return JSON.parse(text);
    } catch(e) {
      return { success: false, message: `Server error: ${res.status} ${res.statusText}` };
    }
  } catch (error: any) {
    return { success: false, message: error?.message };
  }
}

export async function uploadAdminImage(section: string, file: File) {
  const token = getToken();
  try {
    const formData = new FormData();
    formData.append('image', file);
    
    const res = await fetch(`${API_BASE}/admin/images/${section}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`
        // Do NOT set Content-Type; browser will set it with the boundary for FormData
      },
      body: formData
    });
    
    const text = await res.text();
    if (res.status === 401) {
      removeToken();
      if (typeof window !== 'undefined') window.location.href = '/login';
      return { success: false, message: 'Session expired. Please log in again.' };
    }
    try {
      return JSON.parse(text);
    } catch(e) {
      return { success: false, message: `Server error: ${res.status} ${res.statusText}` };
    }
  } catch (error: any) {
    return { success: false, message: error?.message };
  }
}
