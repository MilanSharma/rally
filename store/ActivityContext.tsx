import createContextHook from '@nkzw/create-context-hook';
import { useState, useCallback } from 'react';
import { ActivityType } from '@/mocks/activities';
import { MOCK_USERS, User } from '@/mocks/users';

export type MatchStatus = 'idle' | 'scanning' | 'matched';

export type Group = {
  id: string;
  activity: ActivityType;
  members: User[];
  location: {
    latitude: number;
    longitude: number;
    name: string;
  };
  meetingTime: Date;
};

export const [ActivityContext, useActivity] = createContextHook(() => {
  const [currentActivity, setCurrentActivity] = useState<ActivityType | null>(null);
  const [matchStatus, setMatchStatus] = useState<MatchStatus>('idle');
  const [activeGroup, setActiveGroup] = useState<Group | null>(null);

  // Simulation function to start matchmaking
  const startMatching = useCallback((activity: ActivityType) => {
    setCurrentActivity(activity);
    setMatchStatus('scanning');
    
    // Simulate finding a match after 3 seconds
    setTimeout(() => {
      const randomUsers = MOCK_USERS.sort(() => 0.5 - Math.random()).slice(0, 3);
      
      const newGroup: Group = {
        id: Math.random().toString(36).substring(7),
        activity,
        members: randomUsers,
        location: {
          latitude: 37.78825,
          longitude: -122.4324,
          name: 'Union Square Coffee',
        },
        meetingTime: new Date(Date.now() + 10 * 60000), // 10 mins from now
      };
      
      setActiveGroup(newGroup);
      setMatchStatus('matched');
    }, 4000);
  }, []);

  const resetMatch = useCallback(() => {
    setMatchStatus('idle');
    setCurrentActivity(null);
    setActiveGroup(null);
  }, []);

  return {
    currentActivity,
    matchStatus,
    activeGroup,
    startMatching,
    resetMatch,
  };
});
