export const categories = {
  everyday: 'The Everyday', heart: 'The Heart', funny: 'The Funny', soft: 'The Soft',
} as const;

export const feelingGroups: Record<string, { title: string; intro: string; includes: string[] }> = {
  comfort: { title: 'I need comfort', intro: 'Quiet company for the days that ask for gentleness.', includes: ['comfort', 'healing', 'companionship', 'memory'] },
  laugh: { title: 'I need a laugh', intro: 'Small disasters, big expressions, and the comedy of living together.', includes: ['laugh', 'chaos', 'joy'] },
  slow: { title: 'I need to slow down', intro: 'Soft light, long naps, and permission not to hurry.', includes: ['slow', 'cozy', 'home'] },
  home: { title: 'I need to feel at home', intro: 'Stories about belonging, memory, and the places we keep for one another.', includes: ['home', 'companionship', 'nostalgia', 'memory'] },
};
