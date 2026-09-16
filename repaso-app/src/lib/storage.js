const KEY = 'repaso_profile_v1';

export const defaultProfile = {
  nickname: 'Explorador',
  avatar: '🦊',
  points: 0,
  games: 0,
  bestStreak: 0,
  medals: [],
  wrongConcepts: []
};

export function loadProfile() {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? { ...defaultProfile, ...JSON.parse(raw) } : defaultProfile;
  } catch {
    return defaultProfile;
  }
}

export function saveProfile(profile) {
  localStorage.setItem(KEY, JSON.stringify(profile));
}
