// GIF-related types
export interface GifItem {
  id: string;
  url: string;
  name: string;
  category?: 'greeting' | 'coding' | 'celebration' | 'thinking' | 'tech-logos' | 'social' | 'characters' | 'custom';
  isCustom: boolean;
  position?: 'top' | 'middle' | 'bottom'; // Individual position for this GIF
  alignment?: 'left' | 'center' | 'right'; // Individual alignment for this GIF
  size?: 'small' | 'medium' | 'large' | 'custom'; // Individual size for this GIF
  customWidth?: number | null; // Custom width when size is 'custom' (null when being edited)
  customHeight?: number | null; // Custom height when size is 'custom' (null when being edited)
}

export interface GifData {
  enabled: boolean;
  selectedGifs: GifItem[];
  alignment: 'left' | 'center' | 'right';
  size: 'small' | 'medium' | 'large' | 'custom';
  position: 'top' | 'middle' | 'bottom'; // Where in README to place GIFs
}

export interface GifCategory {
  id: string;
  label: string;
  icon?: string;
}

export interface GifSize {
  width: number;
  height: number;
}
