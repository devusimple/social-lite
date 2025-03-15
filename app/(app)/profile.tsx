import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Settings, Grid2x2 as Grid, Bookmark, Users } from 'lucide-react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

const PROFILE = {
  avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop',
  username: 'johndoe',
  name: 'John Doe',
  bio: 'Digital creator | Photography enthusiast 📸\nExploring the world one photo at a time ✈️',
  posts: 128,
  followers: 1234,
  following: 567,
};

const POSTS = [
  { id: '1', image: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=600&h=600&fit=crop' },
  { id: '2', image: 'https://images.unsplash.com/photo-1682687221038-404670bd3796?w=600&h=600&fit=crop' },
  { id: '3', image: 'https://images.unsplash.com/photo-1682687982183-c2937a74df55?w=600&h=600&fit=crop' },
  { id: '4', image: 'https://images.unsplash.com/photo-1682687982501-1e58ab814714?w=600&h=600&fit=crop' },
  { id: '5', image: 'https://images.unsplash.com/photo-1682687982502-b05f0565753a?w=600&h=600&fit=crop' },
  { id: '6', image: 'https://images.unsplash.com/photo-1682687982468-f0b9ed5eaa6c?w=600&h=600&fit=crop' },
];

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <Text style={styles.username}>{PROFILE.username}</Text>
          <TouchableOpacity>
            <Settings size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      <Animated.View entering={FadeIn} style={styles.profile}>
        <Image source={{ uri: PROFILE.avatar }} style={styles.avatar} />
        
        <View style={styles.stats}>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>{PROFILE.posts}</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>{PROFILE.followers}</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>{PROFILE.following}</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
        </View>
      </Animated.View>

      <View style={styles.bio}>
        <Text style={styles.name}>{PROFILE.name}</Text>
        <Text style={styles.bioText}>{PROFILE.bio}</Text>
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.shareButton}>
          <Text style={styles.shareButtonText}>Share Profile</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tabs}>
        <TouchableOpacity style={[styles.tab, styles.activeTab]}>
          <Grid size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Bookmark size={24} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Users size={24} color="#666" />
        </TouchableOpacity>
      </View>

      <View style={styles.posts}>
        {POSTS.map((post, index) => (
          <Animated.View 
            key={post.id}
            entering={FadeIn.delay(index * 100)}
            style={styles.post}
          >
            <Image source={{ uri: post.image }} style={styles.postImage} />
          </Animated.View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  username: {
    fontSize: 20,
    fontFamily: 'Inter-Bold',
  },
  profile: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  stats: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontFamily: 'Inter-Bold',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
    fontFamily: 'Inter-Regular',
  },
  bio: {
    padding: 15,
  },
  name: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    marginBottom: 5,
  },
  bioText: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: 'Inter-Regular',
  },
  buttons: {
    flexDirection: 'row',
    padding: 15,
    gap: 10,
  },
  editButton: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 8,
    borderRadius: 6,
    alignItems: 'center',
  },
  editButtonText: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
  },
  shareButton: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 8,
    borderRadius: 6,
    alignItems: 'center',
  },
  shareButtonText: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
  },
  tabs: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#f5f5f5',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#000',
  },
  posts: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  post: {
    width: '33.33%',
    aspectRatio: 1,
  },
  postImage: {
    width: '100%',
    height: '100%',
  },
});