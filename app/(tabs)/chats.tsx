import React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import { Palette } from '@/constants/colors';
import { MessageCircle } from 'lucide-react-native';

export default function ChatsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.emptyState}>
        <MessageCircle size={64} color={Palette.card} />
        <Text style={styles.title}>No active chats</Text>
        <Text style={styles.subtitle}>Join a Rally to start chatting!</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Palette.background,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Palette.text,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    color: Palette.textDim,
    marginTop: 8,
  },
});
