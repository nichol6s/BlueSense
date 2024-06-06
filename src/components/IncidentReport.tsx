import { View, Text, Pressable } from 'react-native'
import React from 'react'

import { FontAwesome, FontAwesome5, FontAwesome6, Feather, MaterialIcons } from '@expo/vector-icons'


export default function IncidentReport() {
    return (
        <View className='flex-1 w-full h-[120] bg-[#d4e9ff] rounded-lg mt-6 p-4 gap-1'>
            <Text className='text-lg'>Sujeira forte e poluente dentro da rota</Text>

            <View className='flex-row items-center gap-1 mt-2'>
                <FontAwesome6 name="location-dot" color="gray" size={8} />
                <Text className='text-xs'>Rota do Pacífico</Text>

                <FontAwesome5 name="ship" color="gray" size={8} />
                <Text className='text-xs'>UU316KL</Text>

                <View className='flex-row ml-16 gap-8'>
                    <Pressable className='active:opacity-70'>
                        <MaterialIcons name="edit" color="green" size={30} />
                    </Pressable>

                    <Pressable className='active:opacity-50'>
                        <Feather name="trash" color="red" size={30} />
                    </Pressable>
                </View>
            </View>

            <View className='flex-row items-center gap-1'>
                <FontAwesome name="circle" color="blue" size={8} />
                <Text className='text-xs'>Em andamento</Text>
            </View>



        </View>
    )
}