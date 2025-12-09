import { LucideIcon, Coffee, Utensils, Zap, Users, BookOpen, Gamepad2, Moon, Sun, Music, Dumbbell, MapPin, Footprints } from 'lucide-react-native';

export type ActivityType = {
  id: string;
  title: string;
  iconName: string; // We'll map this in the component
  color: string;
  energy: 'low' | 'medium' | 'high';
};

export const ACTIVITIES: ActivityType[] = [
  { id: '1', title: 'Coffee', iconName: 'Coffee', color: '#fbbf24', energy: 'low' },
  { id: '2', title: 'Grab Food', iconName: 'Utensils', color: '#f87171', energy: 'medium' },
  { id: '3', title: 'Walk', iconName: 'Footprints', color: '#34d399', energy: 'low' },
  { id: '4', title: 'Study / Work', iconName: 'BookOpen', color: '#60a5fa', energy: 'low' },
  { id: '5', title: 'Basketball / Gym', iconName: 'Dumbbell', color: '#f472b6', energy: 'high' },
  { id: '6', title: 'Nightlife', iconName: 'Moon', color: '#818cf8', energy: 'high' },
  { id: '7', title: 'Chill / Vibe', iconName: 'Sun', color: '#fb923c', energy: 'low' },
  { id: '8', title: 'Gaming', iconName: 'Gamepad2', color: '#a78bfa', energy: 'medium' },
  { id: '9', title: 'Concert / Music', iconName: 'Music', color: '#e879f9', energy: 'high' },
  { id: '10', title: 'Meet People', iconName: 'Users', color: '#22d3ee', energy: 'medium' },
];
