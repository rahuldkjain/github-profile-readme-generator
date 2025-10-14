export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface CategorizedSkills {
  [key: string]: SkillCategory;
}

export interface SkillIcons {
  [key: string]: string;
}

export interface SkillWebsites {
  [key: string]: string;
}

export type SkillState = Record<string, boolean>;
