import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Palette } from '@/constants/colors';
import { Settings, Shield, Star, Zap } from 'lucide-react-native';

const MOCK_PROFILE = {
  name: 'Alex',
  avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
  joined: 'Dec 2025',
  trustScore: 98,
  matches: 42,
  vibe: 'Chill Explorer',
};

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity>
          <Settings color={Palette.text} size={24} />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.profileHeader}>
          <Image source={{ uri: MOCK_PROFILE.avatar }} style={styles.avatar} />
          <Text style={styles.name}>{MOCK_PROFILE.name}</Text>
          <Text style={styles.joinDate}>Member since {MOCK_PROFILE.joined}</Text>
          
          <View style={styles.tags}>
            <View style={styles.tag}>
               <Text style={styles.tagText}>{MOCK_PROFILE.vibe}</Text>
            </View>
          </View>
        </View>

        <View style={styles.statsRow}>
           <View style={styles.statItem}>
              <Shield color={Palette.primary} size={24} />
              <Text style={styles.statValue}>{MOCK_PROFILE.trustScore}</Text>
              <Text style={styles.statLabel}>Trust Score</Text>
           </View>
           <View style={styles.statItem}>
              <Zap color={Palette.secondary} size={24} />
              <Text style={styles.statValue}>{MOCK_PROFILE.matches}</Text>
              <Text style={styles.statLabel}>Rallies</Text>
           </View>
           <View style={styles.statItem}>
              <Star color={Palette.warning} size={24} />
              <Text style={styles.statValue}>4.9</Text>
              <Text style={styles.statLabel}>Rating</Text>
           </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Verification</Text>
          <View style={styles.row}>
            <Text style={styles.rowText}>Phone Number</Text>
            <Text style={styles.verifiedText}>Verified</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}>Photo ID</Text>
            <Text style={styles.verifiedText}>Verified</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preferences</Text>
          <View style={styles.row}>
             <Text style={styles.rowText}>Energy Level</Text>
             <Text style={styles.valueText}>High</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Palette.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  headerTitle: {
    color: Palette.text,
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    paddingBottom: 40,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 30,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: Palette.primary,
  },
  name: {
    color: Palette.text,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  joinDate: {
    color: Palette.textDim,
    fontSize: 14,
    marginBottom: 12,
  },
  tags: {
    flexDirection: 'row',
    gap: 8,
  },
  tag: {
    backgroundColor: Palette.card,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  tagText: {
    color: Palette.text,
    fontSize: 12,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  statItem: {
    alignItems: 'center',
    backgroundColor: Palette.card,
    padding: 16,
    borderRadius: 16,
    width: '30%',
  },
  statValue: {
    color: Palette.text,
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 4,
  },
  statLabel: {
    color: Palette.textDim,
    fontSize: 12,
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  sectionTitle: {
    color: Palette.textDim,
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: 12,
    letterSpacing: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Palette.card,
    padding: 16,
    marginBottom: 1,
  },
  rowText: {
    color: Palette.text,
    fontSize: 16,
  },
  verifiedText: {
    color: Palette.success,
    fontWeight: '500',
  },
  valueText: {
    color: Palette.textDim,
  },
});
