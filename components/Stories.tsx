import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Plus } from 'lucide-react-native';
import Animated, { FadeInRight } from 'react-native-reanimated';

const STORIES = [
  {
    id: 'create',
    username: 'Your Story',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop',
  },
  {
    id: '1',
    username: 'john_doe',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
    hasStory: true,
  },
  {
    id: '2',
    username: 'jane_doe',
    avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&h=200&fit=crop',
    hasStory: true,
  },
  {
    id: '3',
    username: 'mike_smith',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
    hasStory: true,
  },
];

export function Stories() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      {STORIES.map((story, index) => (
        <Animated.View
          key={story.id}
          entering={FadeInRight.delay(index * 100)}
          style={styles.storyContainer}
        >
          <TouchableOpacity>
            <View style={[styles.storyRing, story.hasStory && styles.hasStory]}>
              <Image source={{ uri: story.avatar }} style={styles.avatar} />
              {story.id === 'create' && (
                <View style={styles.addButton}>
                  <Plus size={16} color="#fff" />
                </View>
              )}
            </View>
            <Text style={styles.username} numberOfLines={1}>
              {story.username}
            </Text>
          </TouchableOpacity>
        </Animated.View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  content: {
    paddingHorizontal: 10,
    gap: 15,
  },
  storyContainer: {
    alignItems: 'center',
    width: 70,
  },
  storyRing: {
    width: 68,
    height: 68,
    borderRadius: 34,
    padding: 2,
    marginBottom: 5,
    backgroundColor: '#fff',
  },
  hasStory: {
    padding: 3,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#FF3366',
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 32,
  },
  addButton: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    backgroundColor: '#007AFF',
    borderRadius: 10,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
  username: {
    fontSize: 12,
    textAlign: 'center',
    fontFamily: 'Inter-Regular',
  },
});