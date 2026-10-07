"use client";
import React, { useState, useEffect } from 'react';
import { fetchAdminData, uploadAdminImage } from '@/lib/adminApi';
import { Upload, Image as ImageIcon, CheckCircle2, AlertTriangle, RefreshCw } from 'lucide-react';

const SECTIONS = [
  { id: 'hero', label: 'Homepage Hero' },
  { id: 'about', label: 'About Page' },
  { id: 'furnaceOperations', label: 'Furnace Operations' },
  { id: 'mrp', label: 'Metal Recovery Plant' },
  { id: 'sinter', label: 'Sinter Plant' },
  { id: 'rawMaterials', label: 'Raw Materials' },
  { id: 'metalBreaking', label: 'Metal Breaking' },
  { id: 'packingDispatch', label: 'Packing & Dispatch' },
  { id: 'innovation', label: 'Innovation Page' },
  { id: 'projects', label: 'Projects / General' }
];

export default function ImageManagementPage() {
  const [images, setImages] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [uploadingSection, setUploadingSection] = useState<string | null>(null);
  const [uploadStatus, setUploadStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  const fetchImages = async () => {
    setLoading(true);
    const res = await fetchAdminData('/images');
    if (res && res.success) {
      setImages(res.data || {});
    } else {
      setError(res?.message || 'Failed to load images');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, sectionId: string) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      
      // Validation
      const validTypes = ['image/jpeg', 'image/png', 'image/webp'];
      if (!validTypes.includes(file.type)) {
        setUploadStatus({ type: 'error', message: 'Invalid file type. Only JPG, PNG, WEBP allowed.' });
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        setUploadStatus({ type: 'error', message: 'File too large. Maximum 5MB.' });
        return;
      }

      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setUploadingSection(sectionId);
      setUploadStatus(null);
    }
  };

  const cancelUpload = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    setUploadingSection(null);
    setUploadStatus(null);
  };

  const handleUpload = async () => {
    if (!selectedFile || !uploadingSection) return;

    setLoading(true);
    setUploadStatus(null);
    const res = await uploadAdminImage(uploadingSection, selectedFile);
    
    if (res && res.success) {
      setUploadStatus({ type: 'success', message: 'Image updated successfully!' });
      setImages(prev => ({ ...prev, [uploadingSection]: res.data.url }));
      setTimeout(() => {
        cancelUpload();
      }, 2000);
    } else {
      setUploadStatus({ type: 'error', message: res?.message || 'Failed to upload image' });
    }
    setLoading(false);
  };

  if (loading && Object.keys(images).length === 0) {
    return <div className="p-8 text-admin-text-secondary">Loading image configuration...</div>;
  }

  const backendBase = process.env.NEXT_PUBLIC_API_URL?.replace('/api', '') || 'http://localhost:5000';

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-admin-text-primary">Site Images</h1>
        <p className="text-admin-text-secondary text-sm">Manage dynamic images across the website. These replace the default static images.</p>
      </div>

      {error && (
        <div className="p-4 bg-rose-500/10 border border-rose-500/50 text-rose-500 rounded-md">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {SECTIONS.map((section) => {
          const currentUrl = images[section.id];
          const isCurrentlyUploading = uploadingSection === section.id;
          const displayUrl = currentUrl ? (currentUrl.startsWith('http') ? currentUrl : `${backendBase}${currentUrl}`) : null;

          return (
            <div key={section.id} className="bg-admin-surface border border-admin-border p-5 rounded-md space-y-4">
              <div className="flex justify-between items-center border-b border-admin-border pb-3">
                <h3 className="font-semibold text-admin-text-primary flex items-center gap-2">
                  <ImageIcon className="w-4 h-4 text-admin-brass" />
                  {section.label}
                </h3>
                <span className="text-[10px] text-admin-text-muted font-mono uppercase bg-admin-bg px-2 py-1 rounded">
                  ID: {section.id}
                </span>
              </div>

              <div className="flex gap-4">
                {/* Current Image Preview */}
                <div className="w-1/2 space-y-2">
                  <p className="text-xs font-semibold text-admin-text-secondary uppercase">Current Image</p>
                  <div className="w-full h-32 bg-admin-bg border border-admin-border rounded flex items-center justify-center overflow-hidden relative">
                    {displayUrl ? (
                      <img src={displayUrl} alt={section.label} className="object-cover w-full h-full" />
                    ) : (
                      <span className="text-xs text-admin-text-muted">No custom image (using static default)</span>
                    )}
                  </div>
                </div>

                {/* Upload Area / New Preview */}
                <div className="w-1/2 space-y-2">
                  <p className="text-xs font-semibold text-admin-text-secondary uppercase">
                    {isCurrentlyUploading ? 'New Image Preview' : 'Upload Replacement'}
                  </p>
                  
                  {isCurrentlyUploading && previewUrl ? (
                    <div className="space-y-2">
                      <div className="w-full h-32 bg-admin-bg border-2 border-admin-brass rounded flex items-center justify-center overflow-hidden relative">
                        <img src={previewUrl} alt="Preview" className="object-cover w-full h-full" />
                      </div>
                      <div className="flex gap-2">
                        <button 
                          onClick={handleUpload}
                          disabled={loading}
                          className="flex-1 bg-admin-brass hover:bg-yellow-600 text-black text-xs font-bold py-1.5 rounded disabled:opacity-50 flex justify-center items-center gap-1"
                        >
                          {loading ? <RefreshCw className="w-3 h-3 animate-spin" /> : <Upload className="w-3 h-3" />}
                          Save
                        </button>
                        <button 
                          onClick={cancelUpload}
                          disabled={loading}
                          className="flex-1 bg-admin-bg hover:bg-admin-border text-admin-text-primary text-xs font-bold py-1.5 rounded border border-admin-border disabled:opacity-50"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full h-32 border-2 border-dashed border-admin-border rounded flex flex-col items-center justify-center relative hover:border-admin-brass transition-colors bg-admin-bg">
                      <input 
                        type="file" 
                        accept="image/jpeg, image/png, image/webp" 
                        onChange={(e) => handleFileChange(e, section.id)}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        title="Click to upload a new image"
                      />
                      <Upload className="w-6 h-6 text-admin-text-muted mb-2" />
                      <span className="text-[11px] text-admin-text-secondary">Click to browse</span>
                      <span className="text-[9px] text-admin-text-muted mt-1">JPG, PNG, WEBP (Max 5MB)</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Status Message */}
              {isCurrentlyUploading && uploadStatus && (
                <div className={`p-2 text-xs flex items-center gap-2 rounded ${
                  uploadStatus.type === 'success' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-rose-500/10 text-rose-500'
                }`}>
                  {uploadStatus.type === 'success' ? <CheckCircle2 className="w-3.5 h-3.5" /> : <AlertTriangle className="w-3.5 h-3.5" />}
                  {uploadStatus.message}
                </div>
              )}

            </div>
          );
        })}
      </div>
    </div>
  );
}
