import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Bell, Camera } from 'lucide-react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

export function Header() {
  return (
    <Animated.View 
      entering={FadeIn}
      style={styles.container}
    >
      <Text style={styles.logo}>Socialite</Text>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.iconButton}>
          <Camera size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Bell size={24} color="#000" />
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
    backgroundColor: '#fff',
  },
  logo: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
  },
  actions: {
    flexDirection: 'row',
    gap: 15,
  },
  iconButton: {
    padding: 5,
  },
});