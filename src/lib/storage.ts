import type {
  ProfileFormData,
  LinksFormData,
  SocialFormData,
  SupportFormData,
} from './validations';

export interface SavedFormData {
  profile: Partial<ProfileFormData>;
  links: Partial<LinksFormData>;
  social: Partial<SocialFormData>;
  support: Partial<SupportFormData>;
  skills: Record<string, boolean>;
  lastSaved: string;
}

const STORAGE_KEY = 'github-profile-generator';

export function saveFormData(data: SavedFormData): void {
  try {
    const dataToSave = {
      ...data,
      lastSaved: new Date().toISOString(),
    };
    console.log('💾 storage.ts - saveFormData called with:', dataToSave);
    const jsonString = JSON.stringify(dataToSave);
    console.log('💾 storage.ts - JSON string length:', jsonString.length);
    localStorage.setItem(STORAGE_KEY, jsonString);
    console.log('✅ storage.ts - Successfully saved to localStorage');
  } catch (error) {
    console.error('❌ storage.ts - Error saving form data:', error);
  }
}

export function loadFormData(): SavedFormData | null {
  try {
    console.log('📂 storage.ts - loadFormData called');
    const saved = localStorage.getItem(STORAGE_KEY);
    console.log(
      '📂 storage.ts - Raw data from localStorage:',
      saved ? `${saved.length} bytes` : 'null'
    );
    if (saved) {
      const parsed = JSON.parse(saved);
      console.log('✅ storage.ts - Successfully parsed data:', parsed);
      return parsed;
    }
    console.log('⚠️ storage.ts - No data found in localStorage');
  } catch (error) {
    console.error('❌ storage.ts - Error loading form data:', error);
  }
  return null;
}

export function clearFormData(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Error clearing form data:', error);
  }
}

export function hasFormData(): boolean {
  try {
    const hasData = localStorage.getItem(STORAGE_KEY) !== null;
    console.log('🔍 storage.ts - hasFormData:', hasData);
    return hasData;
  } catch (error) {
    console.error('❌ storage.ts - Error checking form data:', error);
    return false;
  }
}
