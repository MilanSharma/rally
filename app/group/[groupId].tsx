import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, ScrollView, Platform, Dimensions, Image } from 'react-native';
import { useLocalSearchParams, useRouter, Stack } from 'expo-router';
import { Palette } from '@/constants/colors';
import { useActivity } from '@/store/ActivityContext';
import { ArrowLeft, MessageCircle, MapPin, Navigation, Info } from 'lucide-react-native';
import MapView, { Marker, PROVIDER_DEFAULT } from 'react-native-maps';

const { width } = Dimensions.get('window');

export default function GroupScreen() {
  const { groupId } = useLocalSearchParams();
  const router = useRouter();
  const { activeGroup } = useActivity();
  const [activeTab, setActiveTab] = useState<'map' | 'chat'>('map');

  if (!activeGroup) {
     // Fallback if state is lost (e.g. refresh), normally fetch from API
    return (
      <SafeAreaView style={styles.container}>
        <Stack.Screen options={{ headerShown: false }} />
        <View style={styles.centered}>
          <Text style={styles.text}>Group not found</Text>
          <TouchableOpacity onPress={() => router.replace('/')}>
            <Text style={styles.link}>Go Home</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.replace('/(tabs)')} style={styles.backButton}>
          <ArrowLeft color={Palette.text} size={24} />
        </TouchableOpacity>
        <View>
          <Text style={styles.headerTitle}>{activeGroup.activity.title}</Text>
          <Text style={styles.headerSubtitle}>3 Members • {activeGroup.location.name}</Text>
        </View>
        <TouchableOpacity style={styles.chatButton}>
          <MessageCircle color={Palette.primary} size={24} />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Map Section */}
        <View style={styles.mapContainer}>
          {Platform.OS === 'web' ? (
             <View style={styles.webMapPlaceholder}>
                <Text style={styles.textDim}>Map View (Web Placeholder)</Text>
             </View>
          ) : (
            <MapView
              style={styles.map}
              provider={PROVIDER_DEFAULT}
              initialRegion={{
                latitude: activeGroup.location.latitude,
                longitude: activeGroup.location.longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
              }}
            >
              <Marker
                coordinate={activeGroup.location}
                title={activeGroup.location.name}
                pinColor={Palette.primary}
              />
            </MapView>
          )}
          <View style={styles.locationCard}>
             <View style={styles.locationInfo}>
               <Text style={styles.locationName}>{activeGroup.location.name}</Text>
               <Text style={styles.locationDistance}>0.4 miles away</Text>
             </View>
             <TouchableOpacity style={styles.directionsButton}>
               <Navigation color="#000" size={20} />
               <Text style={styles.directionsText}>Go</Text>
             </TouchableOpacity>
          </View>
        </View>

        {/* Members Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>The Crew</Text>
          <View style={styles.membersGrid}>
            {activeGroup.members.map((member) => (
              <View key={member.id} style={styles.memberCard}>
                <Image source={{ uri: member.avatar }} style={styles.avatar} />
                <Text style={styles.memberName}>{member.name}</Text>
                <View style={styles.vibeTag}>
                   <Text style={styles.vibeText}>{member.vibeScore}% Vibe</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Safety / Info */}
        <View style={styles.infoBox}>
          <Info color={Palette.textDim} size={20} />
          <Text style={styles.infoText}>
            Meet in a public place. If something feels off, use the safety shield icon.
          </Text>
        </View>

        <TouchableOpacity style={styles.leaveButton} onPress={() => router.replace('/(tabs)')}>
          <Text style={styles.leaveText}>Leave Group</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Palette.background,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: Palette.text,
  },
  textDim: {
    color: Palette.textDim,
  },
  link: {
    color: Palette.primary,
    marginTop: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: Palette.card,
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    color: Palette.text,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  headerSubtitle: {
    color: Palette.textDim,
    fontSize: 12,
    textAlign: 'center',
  },
  chatButton: {
    padding: 8,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  mapContainer: {
    height: 300,
    width: '100%',
    position: 'relative',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  webMapPlaceholder: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Palette.card,
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationCard: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: Palette.card,
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  locationInfo: {
    flex: 1,
  },
  locationName: {
    color: Palette.text,
    fontSize: 16,
    fontWeight: 'bold',
  },
  locationDistance: {
    color: Palette.textDim,
    fontSize: 14,
  },
  directionsButton: {
    backgroundColor: Palette.primary,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 24,
    gap: 6,
  },
  directionsText: {
    color: '#000',
    fontWeight: 'bold',
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    color: Palette.text,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  membersGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  memberCard: {
    alignItems: 'center',
    width: (width - 72) / 3, // 3 columns roughly
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginBottom: 8,
    backgroundColor: Palette.card,
  },
  memberName: {
    color: Palette.text,
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 4,
  },
  vibeTag: {
    backgroundColor: Palette.card,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  vibeText: {
    color: Palette.secondary,
    fontSize: 10,
    fontWeight: 'bold',
  },
  infoBox: {
    margin: 20,
    padding: 16,
    backgroundColor: 'rgba(239, 68, 68, 0.1)', // Red tint
    borderRadius: 12,
    flexDirection: 'row',
    gap: 12,
    alignItems: 'flex-start',
  },
  infoText: {
    color: Palette.textDim,
    fontSize: 14,
    flex: 1,
  },
  leaveButton: {
    marginHorizontal: 20,
    marginTop: 10,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Palette.danger,
    alignItems: 'center',
  },
  leaveText: {
    color: Palette.danger,
    fontWeight: 'bold',
  },
});
