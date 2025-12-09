import React from 'react';
import { StyleSheet, View, Text, FlatList, SafeAreaView, Platform, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
import { ACTIVITIES } from '@/mocks/activities';
import { ActivityCard } from '@/components/ActivityCard';
import { Palette } from '@/constants/colors';
import { useActivity } from '@/store/ActivityContext';

export default function HomeScreen() {
  const router = useRouter();
  const { startMatching } = useActivity();

  const handleActivityPress = (activity: typeof ACTIVITIES[0]) => {
    startMatching(activity);
    router.push(`/match/${activity.id}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.greeting}>Ready to Rally?</Text>
        <Text style={styles.subtitle}>What are you down for right now?</Text>
      </View>

      <FlatList
        data={ACTIVITIES}
        renderItem={({ item }) => (
          <ActivityCard activity={item} onPress={() => handleActivityPress(item)} />
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.grid}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Palette.background,
    paddingTop: Platform.OS === 'android' ? 30 : 0,
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  greeting: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Palette.text,
  },
  subtitle: {
    fontSize: 16,
    color: Palette.textDim,
    marginTop: 4,
  },
  grid: {
    padding: 12,
    paddingBottom: 100, // Space for potential bottom elements
  },
});
