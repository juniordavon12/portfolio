export interface Skill {
  id: number;
  backgroundColor: string;
  title: string;
  items: { name: string; level: number }[];
}
