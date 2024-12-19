import { Microscope, Binary, Database, Wrench } from 'lucide-react';

export const SKILL_CATEGORIES = {
  LAB_TECHNIQUES: 'Laboratory Techniques',
  INSTRUMENTS: 'Instruments',
  SOFTWARE: 'Software',
  STATISTICAL: 'Statistical Analysis'
} as const;

export const CATEGORY_ICONS = {
  [SKILL_CATEGORIES.LAB_TECHNIQUES]: Microscope,
  [SKILL_CATEGORIES.INSTRUMENTS]: Wrench,
  [SKILL_CATEGORIES.SOFTWARE]: Binary,
  [SKILL_CATEGORIES.STATISTICAL]: Database,
} as const;