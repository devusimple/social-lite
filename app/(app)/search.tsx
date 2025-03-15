import { useState } from 'react';
import { View, TextInput, FlatList, Image, StyleSheet, Dimensions } from 'react-native';
import { Search as SearchIcon } from 'lucide-react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

const POSTS = [
  { id: '1', image: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=600&h=600&fit=crop' },
  { id: '2', image: 'https://images.unsplash.com/photo-1682687221038-404670bd3796?w=600&h=600&fit=crop' },
  { id: '3', image: 'https://images.unsplash.com/photo-1682687982183-c2937a74df55?w=600&h=600&fit=crop' },
  { id: '4', image: 'https://images.unsplash.com/photo-1682687982501-1e58ab814714?w=600&h=600&fit=crop' },
  { id: '5', image: 'https://images.unsplash.com/photo-1682687982502-b05f0565753a?w=600&h=600&fit=crop' },
  { id: '6', image: 'https://images.unsplash.com/photo-1682687982468-f0b9ed5eaa6c?w=600&h=600&fit=crop' },
];

const numColumns = 3;
const screenWidth = Dimensions.get('window').width;
const tileSize = screenWidth / numColumns;

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <SearchIcon size={20} color="#666" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <FlatList
        data={POSTS}
        numColumns={numColumns}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <Animated.View entering={FadeIn.delay(index * 100)}>
            <Image source={{ uri: item.image }} style={styles.tile} />
          </Animated.View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Inter-Regular',
  },
  tile: {
    width: tileSize,
    height: tileSize,
    backgroundColor: '#f5f5f5',
  },
});