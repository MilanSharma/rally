export type User = {
  id: string;
  name: string;
  avatar: string; // URL
  bio: string;
  vibeScore: number;
};

export const MOCK_USERS: User[] = [
  {
    id: 'u1',
    name: 'Sarah',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
    bio: 'Down for coffee and deep talks.',
    vibeScore: 98,
  },
  {
    id: 'u2',
    name: 'Mike',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
    bio: 'Always hype for basketball.',
    vibeScore: 95,
  },
  {
    id: 'u3',
    name: 'Jessica',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
    bio: 'Art student. Love museums.',
    vibeScore: 92,
  },
  {
    id: 'u4',
    name: 'David',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
    bio: 'Tech founder. Need coffee break.',
    vibeScore: 99,
  },
];
