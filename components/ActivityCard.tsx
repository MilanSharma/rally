import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { LucideIcon, Coffee, Utensils, Zap, Users, BookOpen, Gamepad2, Moon, Sun, Music, Dumbbell, MapPin, Footprints } from 'lucide-react-native';
import { ActivityType } from '@/mocks/activities';
import { Palette } from '@/constants/colors';

const IconMap: Record<string, LucideIcon> = {
  Coffee, Utensils, Zap, Users, BookOpen, Gamepad2, Moon, Sun, Music, Dumbbell, MapPin, Footprints
};

interface ActivityCardProps {
  activity: ActivityType;
  onPress: () => void;
}

export function ActivityCard({ activity, onPress }: ActivityCardProps) {
  const Icon = IconMap[activity.iconName] || Zap;

  return (
    <TouchableOpacity 
      style={[styles.card, { borderColor: activity.color }]} 
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={[styles.iconContainer, { backgroundColor: activity.color + '20' }]}>
        <Icon size={32} color={activity.color} />
      </View>
      <Text style={styles.title}>{activity.title}</Text>
      <View style={styles.energyTag}>
         <Zap size={12} color={Palette.textDim} />
         <Text style={styles.energyText}>{activity.energy}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: Palette.card,
    borderRadius: 16,
    padding: 16,
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Palette.card, // Default border
    minHeight: 140,
  },
  iconContainer: {
    padding: 12,
    borderRadius: 50,
    marginBottom: 12,
  },
  title: {
    color: Palette.text,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 8,
  },
  energyTag: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  energyText: {
    color: Palette.textDim,
    fontSize: 12,
    textTransform: 'capitalize',
  },
});
