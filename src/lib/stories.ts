import { getCollection, type CollectionEntry } from 'astro:content';

export type Story = CollectionEntry<'stories'>;

export async function publishedStories() {
  return (await getCollection('stories', ({ data }) => !data.draft))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function homepageStory(stories: Story[]) {
  return stories.filter((story) => story.data.featured)[0] ?? stories[0];
}

export function relatedStories(current: Story, stories: Story[]) {
  return stories.filter((story) => story.id !== current.id).map((story) => {
    const sameDogs = story.data.dogs.filter((dog) => current.data.dogs.includes(dog)).length;
    const sharedFeelings = story.data.feelings.filter((feeling) => current.data.feelings.includes(feeling)).length;
    const sameCategory = story.data.category === current.data.category ? 1 : 0;
    return { story, score: sameDogs * 100 + sharedFeelings * 10 + sameCategory };
  }).sort((a, b) => b.score - a.score || b.story.data.date.valueOf() - a.story.data.date.valueOf()).slice(0, 3).map(({ story }) => story);
}
