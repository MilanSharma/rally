import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ActivityContext } from '@/store/ActivityContext';
import { Palette } from '@/constants/colors';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return (
    <ActivityContext>
      <StatusBar style="light" backgroundColor={Palette.background} />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: Palette.background },
          headerStyle: { backgroundColor: Palette.background },
          headerTintColor: Palette.text,
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="match/[activityId]" options={{ presentation: 'modal', gestureEnabled: false }} />
        <Stack.Screen name="group/[groupId]" options={{ gestureEnabled: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ActivityContext>
  );
}
