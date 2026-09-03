export const dogs = {
  bacon: {
    slug: 'bacon', name: 'Bacon', role: 'The legacy guardian', status: 'legacy',
    personality: 'Calm, grounded, quietly watching over the family.',
    biography: 'Bacon is part of the family’s foundation—the steady presence whose place at home is held in stories, habits, and memory.',
    arc: 'Legacy, memory, grief, family history, continuing presence.',
    portrait: '/images/stories/bacon-places.jpg',
  },
  beer: {
    slug: 'beer', name: 'Beer', role: 'The emotional kuya', status: 'active',
    personality: 'Dramatic, food-motivated, expressive, sweet.',
    biography: 'Beer has perfected the art of making ordinary routines feel like family events—especially when snacks are involved.',
    arc: 'Senior life, aging, comfort, routines, humor, companionship.',
    portrait: '/images/stories/beer-couch.jpg',
  },
  baobao: {
    slug: 'baobao', name: 'Bao Bao', role: 'The tiny princess', status: 'active',
    personality: 'Sweet, delicate, bossy, emotional, impeccable standards.',
    biography: 'Bao Bao is small enough to carry and certain enough to run the room. She notices every cushion, pause, and change of plan.',
    arc: 'Growing up, everyday life, personality, tenderness, tiny-dog drama.',
    portrait: '/images/stories/baobao-standards.jpg',
  },
  bowser: {
    slug: 'bowser', name: 'Bowser', role: 'The chaos goblin baby', status: 'active',
    personality: 'Curious, fast, fluffy, playful, innocent chaos.',
    biography: 'Bowser meets the world at full speed. Every corner is a discovery and every quiet room is a possibility.',
    arc: 'Growing up, discovery, play, condo chaos, sibling dynamics.',
    portrait: '/images/stories/bowser-zoom.jpg',
  },
} as const;

export type DogSlug = keyof typeof dogs;
export const dogList = Object.values(dogs);
