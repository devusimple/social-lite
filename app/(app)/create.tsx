import { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native';
import { Camera, Image as ImageIcon, MapPin, Tag, X } from 'lucide-react-native';
import * as ImagePicker from 'expo-image-picker';
import Animated, { FadeIn, SlideInRight } from 'react-native-reanimated';

export default function CreateScreen() {
  const [image, setImage] = useState<string | null>(null);
  const [caption, setCaption] = useState('');

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <X size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>New Post</Text>
        <TouchableOpacity style={styles.shareButton}>
          <Text style={styles.shareText}>Share</Text>
        </TouchableOpacity>
      </View>

      <Animated.View entering={FadeIn} style={styles.imageContainer}>
        {image ? (
          <Image source={{ uri: image }} style={styles.selectedImage} />
        ) : (
          <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
            <ImageIcon size={48} color="#666" />
            <Text style={styles.uploadText}>Upload a photo</Text>
          </TouchableOpacity>
        )}
      </Animated.View>

      {image && (
        <Animated.View entering={SlideInRight} style={styles.form}>
          <TextInput
            style={styles.caption}
            placeholder="Write a caption..."
            value={caption}
            onChangeText={setCaption}
            multiline
          />

          <View style={styles.actions}>
            <TouchableOpacity style={styles.action}>
              <Camera size={24} color="#666" />
              <Text style={styles.actionText}>Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.action}>
              <MapPin size={24} color="#666" />
              <Text style={styles.actionText}>Location</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.action}>
              <Tag size={24} color="#666" />
              <Text style={styles.actionText}>Tag People</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
  },
  shareButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  shareText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
  },
  imageContainer: {
    aspectRatio: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedImage: {
    width: '100%',
    height: '100%',
  },
  uploadButton: {
    alignItems: 'center',
  },
  uploadText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
    fontFamily: 'Inter-Medium',
  },
  form: {
    padding: 15,
  },
  caption: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    minHeight: 100,
    textAlignVertical: 'top',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#f5f5f5',
    paddingTop: 15,
  },
  action: {
    alignItems: 'center',
  },
  actionText: {
    marginTop: 5,
    fontSize: 12,
    color: '#666',
    fontFamily: 'Inter-Regular',
  },
});