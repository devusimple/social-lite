import { View, Text, Image, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { Heart, MessageCircle, Share2, Bookmark } from 'lucide-react-native';
import Animated, { useAnimatedStyle, withSpring, useSharedValue } from 'react-native-reanimated';

interface PostProps {
  post: {
    id: string;
    user: {
      id: string;
      username: string;
      avatar: string;
    };
    image: string;
    caption: string;
    likes: number;
    comments: number;
    timestamp: string;
  };
}

export function Post({ post }: PostProps) {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handleLike = () => {
    scale.value = withSpring(1.2, {}, () => {
      scale.value = withSpring(1);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Image source={{ uri: post.user.avatar }} style={styles.avatar} />
          <Text style={styles.username}>{post.user.username}</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.moreButton}>•••</Text>
        </TouchableOpacity>
      </View>

      <Image source={{ uri: post.image }} style={styles.image} />

      <View style={styles.actions}>
        <View style={styles.leftActions}>
          <Animated.View style={animatedStyle}>
            <TouchableOpacity onPress={handleLike}>
              <Heart size={24} color="#000" />
            </TouchableOpacity>
          </Animated.View>
          <TouchableOpacity>
            <MessageCircle size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Share2 size={24} color="#000" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Bookmark size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.likes}>
        <Text style={styles.likesText}>{post.likes.toLocaleString()} likes</Text>
      </View>

      <View style={styles.caption}>
        <Text style={styles.username}>{post.user.username}</Text>
        <Text style={styles.captionText}>{post.caption}</Text>
      </View>

      <TouchableOpacity>
        <Text style={styles.comments}>
          View all {post.comments} comments
        </Text>
      </TouchableOpacity>

      <Text style={styles.timestamp}>
        {new Date(post.timestamp).toLocaleDateString()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 10,
  },
  username: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
  },
  moreButton: {
    fontSize: 16,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    backgroundColor: '#f5f5f5',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  leftActions: {
    flexDirection: 'row',
    gap: 16,
  },
  likes: {
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  likesText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
  },
  caption: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginBottom: 5,
    gap: 5,
  },
  captionText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
  },
  comments: {
    paddingHorizontal: 10,
    marginBottom: 5,
    color: '#666',
    fontSize: 14,
    fontFamily: 'Inter-Regular',
  },
  timestamp: {
    paddingHorizontal: 10,
    marginBottom: 10,
    color: '#666',
    fontSize: 12,
    fontFamily: 'Inter-Regular',
  },
});