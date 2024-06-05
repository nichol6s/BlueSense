import { View, Text } from 'react-native';

import { Link } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen() {
  return (
    <LinearGradient
      colors={['#d4e9ff', '#f3f7fc']}
      start={[0, 0]}
      end={[0, 0.7]}
      className='flex-1 py-8 px-6'
    >
      <View className=''>
        <Text>aoalsfla</Text>
        <Link href="/">Voltar pra index</Link>
      </View>

    </LinearGradient>
  );
}

