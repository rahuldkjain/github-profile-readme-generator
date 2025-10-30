import type { GifItem, GifData, GifCategory, GifSize } from '@/types/gifs';

/**
 * ================================================================================
 * GIF LICENSING & ATTRIBUTION
 * ================================================================================
 * 
 * Default GIFs are sourced from:
 * Repository: https://github.com/Anmol-Baranwal/Cool-GIFs-For-GitHub
 * License: MIT License
 * Author: Anmol Baranwal (@Anmol_Codes)
 * 
 * These GIFs are specifically designed for GitHub profile READMEs and are
 * free to use under the MIT License. No attribution required but appreciated!
 * 
 * MIT License allows:
 * ✅ Commercial use
 * ✅ Modification
 * ✅ Distribution
 * ✅ Private use
 * 
 * Users can also:
 * ✅ Add custom GIF URLs from any licensed source
 * ✅ Upload their own GIF files
 * ✅ Use any public GIF URL they have rights to
 * 
 * ================================================================================
 */

// Default GIFs Gallery - MIT Licensed from Cool-GIFs-For-GitHub
export const DEFAULT_GIFS: GifItem[] = [
  // Greeting GIFs
  {
    id: 'wave-hand',
    url: 'https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif',
    name: 'Waving Hand',
    category: 'greeting',
    isCustom: false,
  },
  {
    id: 'hello-wave',
    url: 'https://user-images.githubusercontent.com/74038190/214644145-264f4759-7633-441e-9d67-d8dda9d50d26.gif',
    name: 'Hello Wave',
    category: 'greeting',
    isCustom: false,
  },
  {
    id: 'handshake',
    url: 'https://user-images.githubusercontent.com/74038190/216120981-b9507c36-0e04-4469-8e27-c99271b45ba5.png',
    name: 'Handshake Emoji',
    category: 'greeting',
    isCustom: false,
  },
  {
    id: 'hi-there',
    url: 'https://user-images.githubusercontent.com/74038190/213760705-0d5bf320-4f43-4352-b74b-0889ae726bf7.gif',
    name: 'Hi There',
    category: 'greeting',
    isCustom: false,
  },
  {
    id: 'animated-hello',
    url: 'https://github.com/Anmol-Baranwal/Cool-GIFs-For-GitHub/assets/74038190/9be4d344-6782-461a-b5a6-32a07bf7b34e',
    name: 'Animated Hello',
    category: 'greeting',
    isCustom: false,
  },

  // Coding/Working GIFs
  {
    id: 'coding-laptop',
    url: 'https://user-images.githubusercontent.com/74038190/212750996-938b257b-266c-45a7-9af7-655341c0f58b.gif',
    name: 'Busy Work',
    category: 'coding',
    isCustom: false,
  },
  {
    id: 'developer-coding',
    url: 'https://user-images.githubusercontent.com/74038190/212749447-bfb7e725-6987-49d9-ae85-2015e3e7cc41.gif',
    name: 'Coding Vibe',
    category: 'coding',
    isCustom: false,
  },
  {
    id: 'typing-code',
    url: 'https://user-images.githubusercontent.com/74038190/212284158-e840e285-664b-44d7-b79b-e264b5e54825.gif',
    name: 'Pacman Typing',
    category: 'coding',
    isCustom: false,
  },
  {
    id: 'girl-coding',
    url: 'https://user-images.githubusercontent.com/74038190/212748830-4c709398-a386-4761-84d7-9e10b98fbe6e.gif',
    name: 'Night Coding',
    category: 'coding',
    isCustom: false,
  },
  {
    id: 'programming',
    url: 'https://user-images.githubusercontent.com/74038190/218265814-3084a4ba-809c-4135-afc0-8685d0f634b3.gif',
    name: 'Programming',
    category: 'coding',
    isCustom: false,
  },
  {
    id: 'cat-typing',
    url: 'https://user-images.githubusercontent.com/74038190/212284145-bf2c01a8-c448-4f1a-b911-996024c84606.gif',
    name: 'Cat Typing',
    category: 'coding',
    isCustom: false,
  },

  // Celebration GIFs
  {
    id: 'party-celebration',
    url: 'https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif',
    name: 'Fading Line',
    category: 'celebration',
    isCustom: false,
  },
  {
    id: 'success-fire',
    url: 'https://user-images.githubusercontent.com/74038190/216122041-518ac897-8d92-4c6b-9b3f-ca01dcaf38ee.png',
    name: 'Fire Success',
    category: 'celebration',
    isCustom: false,
  },
  {
    id: 'happy-dance',
    url: 'https://user-images.githubusercontent.com/74038190/212746035-d5c61762-973c-44c0-aec7-887f3b7690e3.gif',
    name: 'Happy Working',
    category: 'celebration',
    isCustom: false,
  },

  // Thinking/Working GIFs
  {
    id: 'thinking-deep',
    url: 'https://user-images.githubusercontent.com/74038190/212749443-0810e511-4f46-4492-96aa-3c110d7bc41a.gif',
    name: 'Designer vs Developer',
    category: 'thinking',
    isCustom: false,
  },
  {
    id: 'analyzing',
    url: 'https://user-images.githubusercontent.com/74038190/212750147-854a394f-fee9-4080-9770-78a4b7ece53f.gif',
    name: 'Multi Screen Analysis',
    category: 'thinking',
    isCustom: false,
  },
  {
    id: 'working-hard',
    url: 'https://user-images.githubusercontent.com/74038190/229223156-0cbdaba9-3128-4d8e-8719-b6b4cf741b67.gif',
    name: 'Robot Working',
    category: 'thinking',
    isCustom: false,
  },

  // Animated Tech Logos
  {
    id: 'github-logo',
    url: 'https://user-images.githubusercontent.com/74038190/212257454-16e3712e-945a-4ca2-b238-408ad0bf87e6.gif',
    name: 'GitHub Logo',
    category: 'tech-logos',
    isCustom: false,
  },
  {
    id: 'vscode-logo',
    url: 'https://user-images.githubusercontent.com/74038190/212257472-08e52665-c503-4bd9-aa20-f5a4dae769b5.gif',
    name: 'VS Code Logo',
    category: 'tech-logos',
    isCustom: false,
  },
  {
    id: 'react-logo',
    url: 'https://user-images.githubusercontent.com/74038190/212257468-1e9a91f1-b626-4baa-b15d-5c385dfa7ed2.gif',
    name: 'React Logo',
    category: 'tech-logos',
    isCustom: false,
  },
  {
    id: 'nodejs-logo',
    url: 'https://user-images.githubusercontent.com/74038190/212257465-7ce8d493-cac5-494e-982a-5a9deb852c4b.gif',
    name: 'Node.js Logo',
    category: 'tech-logos',
    isCustom: false,
  },
  {
    id: 'python-logo',
    url: 'https://user-images.githubusercontent.com/74038190/212257463-4d082cb4-7483-4eaf-bc25-6dde2628aabd.gif',
    name: 'Python Logo',
    category: 'tech-logos',
    isCustom: false,
  },
  {
    id: 'javascript-logo',
    url: 'https://user-images.githubusercontent.com/74038190/212257460-738ff738-247f-4445-a718-cdd0ca76e2db.gif',
    name: 'JavaScript Logo',
    category: 'tech-logos',
    isCustom: false,
  },
  {
    id: 'typescript-logo',
    url: 'https://user-images.githubusercontent.com/74038190/212257467-871d32b7-e401-42e8-a166-fcfd7baa4c6b.gif',
    name: 'TypeScript Logo',
    category: 'tech-logos',
    isCustom: false,
  },
  {
    id: 'docker-logo',
    url: 'https://user-images.githubusercontent.com/74038190/212281756-450d3ffa-9335-4b98-a965-db8a18fee927.gif',
    name: 'Docker Logo',
    category: 'tech-logos',
    isCustom: false,
  },
  {
    id: 'aws-logo',
    url: 'https://user-images.githubusercontent.com/74038190/212280805-9bcb336b-8c55-46a8-abf8-ff286ab55472.gif',
    name: 'AWS Logo',
    category: 'tech-logos',
    isCustom: false,
  },
  {
    id: 'mongodb-logo',
    url: 'https://user-images.githubusercontent.com/74038190/212280823-79088828-a258-4a4d-8d6c-96315d5a07af.gif',
    name: 'MongoDB Logo',
    category: 'tech-logos',
    isCustom: false,
  },
  {
    id: 'firebase-logo',
    url: 'https://user-images.githubusercontent.com/74038190/212281763-e6ecd7ef-c4aa-45b6-a97c-f33f6bb592bd.gif',
    name: 'Firebase Logo',
    category: 'tech-logos',
    isCustom: false,
  },
  {
    id: 'git-logo',
    url: 'https://user-images.githubusercontent.com/74038190/212281775-b468df30-4edc-4bf8-a4ee-f52e1aaddc86.gif',
    name: 'Git Logo',
    category: 'tech-logos',
    isCustom: false,
  },
  {
    id: 'html-logo',
    url: 'https://user-images.githubusercontent.com/74038190/212281780-0afd9616-8310-46e9-a898-c4f5269f1387.gif',
    name: 'HTML Logo',
    category: 'tech-logos',
    isCustom: false,
  },
  {
    id: 'css-logo',
    url: 'https://github.com/Anmol-Baranwal/Cool-GIFs-For-GitHub/assets/74038190/1a797f46-efe4-41e6-9e75-5303e1bbcbfa',
    name: 'CSS Logo',
    category: 'tech-logos',
    isCustom: false,
  },
  {
    id: 'nextjs-logo',
    url: 'https://github.com/Anmol-Baranwal/Cool-GIFs-For-GitHub/assets/74038190/29fd6286-4e7b-4d6c-818f-c4765d5e39a9',
    name: 'Next.js Logo',
    category: 'tech-logos',
    isCustom: false,
  },
  {
    id: 'tailwind-logo',
    url: 'https://github.com/Anmol-Baranwal/Cool-GIFs-For-GitHub/assets/74038190/67f477ed-6624-42da-99f0-1a7b1a16eecb',
    name: 'Tailwind CSS Logo',
    category: 'tech-logos',
    isCustom: false,
  },

  // Animated Social Icons
  {
    id: 'discord-icon',
    url: 'https://user-images.githubusercontent.com/74038190/235294002-8aafea24-3179-45af-91d9-412ad7ff5359.gif',
    name: 'Discord',
    category: 'social',
    isCustom: false,
  },
  {
    id: 'linkedin-icon',
    url: 'https://user-images.githubusercontent.com/74038190/235294012-0a55e343-37ad-4b0f-924f-c8431d9d2483.gif',
    name: 'LinkedIn',
    category: 'social',
    isCustom: false,
  },
  {
    id: 'twitter-icon',
    url: 'https://user-images.githubusercontent.com/74038190/235294011-b8074c31-9097-4a65-a594-4151b58743a8.gif',
    name: 'Twitter',
    category: 'social',
    isCustom: false,
  },
  {
    id: 'instagram-icon',
    url: 'https://user-images.githubusercontent.com/74038190/235294013-a33e5c43-a01c-43f6-b44d-a406d8b4ab75.gif',
    name: 'Instagram',
    category: 'social',
    isCustom: false,
  },
  {
    id: 'youtube-icon',
    url: 'https://user-images.githubusercontent.com/74038190/235294010-ec412ef5-e3da-4efa-b1d4-0ab4d4638755.gif',
    name: 'YouTube',
    category: 'social',
    isCustom: false,
  },

  // Cute Characters & Stickers
  {
    id: 'penguin-work',
    url: 'https://user-images.githubusercontent.com/74038190/213911167-6bc9ef46-2950-481c-a03c-189f9506083b.gif',
    name: 'Penguin Working',
    category: 'characters',
    isCustom: false,
  },
  {
    id: 'octocat-work',
    url: 'https://user-images.githubusercontent.com/74038190/212741999-016fddbd-617a-4448-8042-0ecf907aea25.gif',
    name: 'Octocat NUX',
    category: 'characters',
    isCustom: false,
  },
  {
    id: 'mario-run',
    url: 'https://user-images.githubusercontent.com/74038190/225813708-98b745f2-7d22-48cf-9150-083f1b00d6c9.gif',
    name: 'Mario Running',
    category: 'characters',
    isCustom: false,
  },
];

// GIF Categories for filtering
export const GIF_CATEGORIES: GifCategory[] = [
  { id: 'all', label: 'All GIFs', icon: '🎬' },
  { id: 'greeting', label: 'Greeting', icon: '👋' },
  { id: 'coding', label: 'Coding', icon: '💻' },
  { id: 'celebration', label: 'Celebration', icon: '🎉' },
  { id: 'thinking', label: 'Thinking', icon: '🤔' },
  { id: 'tech-logos', label: 'Tech Logos', icon: '⚡' },
  { id: 'social', label: 'Social', icon: '🌐' },
  { id: 'characters', label: 'Characters', icon: '🎮' },
];

// GIF Size Mappings
export const GIF_SIZES: Record<string, GifSize> = {
  small: { width: 200, height: 150 },
  medium: { width: 300, height: 225 },
  large: { width: 400, height: 300 },
  custom: { width: 300, height: 225 }, // Default for custom, will be overridden
};

// Default GIF data
export const DEFAULT_GIF_DATA: GifData = {
  enabled: false,
  selectedGifs: [],
  alignment: 'center',
  size: 'medium',
  position: 'top',
};

// Maximum number of GIFs allowed
export const MAX_GIFS = 5;

// Maximum file size for uploads (5MB)
export const MAX_GIF_SIZE = 5 * 1024 * 1024;
