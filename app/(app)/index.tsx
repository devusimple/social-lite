import { useState, useCallback } from 'react';
import { View, StyleSheet, FlatList, RefreshControl } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { Post } from '@/components/Post';
import { Stories } from '@/components/Stories';
import { Header } from '@/components/Header';
import Animated, { FadeInDown } from 'react-native-reanimated';

const POSTS = [
  {
    id: '1',
    user: {
      id: '1',
      username: 'johndoe',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop',
    },
    image: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=1200&h=800&fit=crop',
    caption: 'Beautiful sunset at the beach 🌅',
    likes: 1234,
    comments: 56,
    timestamp: new Date().toISOString(),
  },
  {
    id: '2',
    user: {
      id: '2',
      username: 'janedoe',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
    },
    image: 'https://images.unsplash.com/photo-1682687221038-404670bd3796?w=1200&h=800&fit=crop',
    caption: 'Adventure awaits! 🏔️',
    likes: 2345,
    comments: 78,
    timestamp: new Date().toISOString(),
  },
];

export default function HomeScreen() {
  const [refreshing, setRefreshing] = useState(false);
  const user = useSelector((state: RootState) => state.auth.user);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    // Simulate refresh
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={POSTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <Animated.View entering={FadeInDown.delay(index * 200)}>
            <Post post={item} />
          </Animated.View>
        )}
        ListHeaderComponent={<Stories />}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});