import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, Text, Animated, Easing, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter, Stack } from 'expo-router';
import { Palette } from '@/constants/colors';
import { useActivity } from '@/store/ActivityContext';
import { ACTIVITIES } from '@/mocks/activities';
import { X, Radar } from 'lucide-react-native';

const { width } = Dimensions.get('window');

export default function MatchScreen() {
  const { activityId } = useLocalSearchParams();
  const router = useRouter();
  const { matchStatus, activeGroup, resetMatch } = useActivity();
  
  const activity = ACTIVITIES.find(a => a.id === activityId);
  const pulseAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 2000,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 0,
          duration: 0,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  useEffect(() => {
    if (matchStatus === 'matched' && activeGroup) {
      // Small delay for effect
      setTimeout(() => {
        router.replace(`/group/${activeGroup.id}`);
      }, 1000);
    }
  }, [matchStatus, activeGroup, router]);

  const handleCancel = () => {
    resetMatch();
    router.back();
  };

  if (!activity) return null;

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      
      <TouchableOpacity style={styles.closeButton} onPress={handleCancel}>
        <X color={Palette.text} size={28} />
      </TouchableOpacity>

      <View style={styles.content}>
        <View style={styles.radarContainer}>
          <Animated.View
            style={[
              styles.pulseCircle,
              {
                borderColor: activity.color,
                transform: [
                  {
                    scale: pulseAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0.5, 2.5],
                    }),
                  },
                ],
                opacity: pulseAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.8, 0],
                }),
              },
            ]}
          />
          <View style={[styles.centerIcon, { backgroundColor: activity.color }]}>
            <Radar color="#fff" size={40} />
          </View>
        </View>

        <Text style={styles.statusText}>Scanning for people near you...</Text>
        <Text style={styles.activityText}>Down for {activity.title}</Text>
        
        <View style={styles.timerContainer}>
           <Text style={styles.timerText}>9:45 remaining</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Palette.background,
  },
  closeButton: {
    position: 'absolute',
    top: 60,
    right: 20,
    zIndex: 10,
    padding: 10,
    backgroundColor: Palette.card,
    borderRadius: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  radarContainer: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  centerIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  pulseCircle: {
    position: 'absolute',
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
  },
  statusText: {
    color: Palette.textDim,
    fontSize: 16,
    marginBottom: 8,
  },
  activityText: {
    color: Palette.text,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  timerContainer: {
    backgroundColor: Palette.card,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  timerText: {
    color: Palette.primary,
    fontWeight: 'bold',
    fontVariant: ['tabular-nums'],
  },
});
