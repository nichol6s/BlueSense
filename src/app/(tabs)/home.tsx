import { View, Text, ScrollView } from 'react-native';
import { useState } from 'react';

import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome5, FontAwesome6, MaterialIcons } from '@expo/vector-icons';

import Button from '@/components/Button';
import { Input } from '@/components/Input';
import IncidentReport from '@/components/IncidentReport';


export default function HomeScreen() {
  const [description, setDescription] = useState("")

  return (
    <LinearGradient
      colors={['#d4e9ff', '#f3f7fc']}
      start={[0, 0]}
      end={[0, 0.7]}
      className='flex-1 py-8 px-6'
    >
      <View className='gap-4'>
        <Text className='text-black font-semibold text-[28px] mt-6'>Cadastre um chamado</Text>

        <Input>
          <FontAwesome6 name="location-dot" color="gray" size={12} />
          <Input.Field placeholder="Rota náutica" />
        </Input>

        <Input>
          <MaterialIcons name="description" color="gray" size={12} />
          <Input.Field
            placeholder="Pequena descrição"
            maxLength={40}
            value={description}
            onChangeText={setDescription}
            showCharacterCount={true}
          />
        </Input>

        <Input>
          <FontAwesome5 name="ship" color="gray" size={12} />
          <Input.Field placeholder="IMO do Navio" keyboardType='numeric'/>
        </Input>

        <Button title="Adicionar" />
      </View>

      <View className='items-left border-b border-b-black py-4 mt-6'>
        <Text className='text-[16px] font-semibold'>Chamados</Text>
      </View>

      <ScrollView>
        <IncidentReport 
          description="Navio encalhado"
          routeName="Rota do Pacífico"
          shipIMO={1234567}
          status="Em andamento"
        />
      </ScrollView>

    </LinearGradient>
  );
}

