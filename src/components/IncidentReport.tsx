import { View, Text, Pressable } from 'react-native'
import React from 'react'

import { FontAwesome, FontAwesome5, FontAwesome6, Feather, MaterialIcons } from '@expo/vector-icons'

type IncidentReportProps = {
    description: string
    routeName: string
    shipIMO: Number
    status?: string
}

export default function IncidentReport({ description, routeName, shipIMO, status }: IncidentReportProps ) {
    return (
        <View className='flex-1 w-full h-[120] bg-blue-100 rounded-lg mt-6 p-4 gap-1'>
            <Text className='text-lg'>{description}</Text>

            <View className='flex-row items-center gap-1 mt-2'>
                <FontAwesome6 name="location-dot" color="gray" size={10} />
                <Text className='text-sm'>{routeName}</Text>

                <FontAwesome5 name="ship" color="gray" size={10} />
                <Text className='text-sm'>{shipIMO.toString()}</Text>

                <View className='flex-row ml-16 gap-8'>
                    <Pressable className='active:opacity-70'>
                        <MaterialIcons name="edit" color="green" size={28} />
                    </Pressable>

                    <Pressable className='active:opacity-50'>
                        <Feather name="trash" color="red" size={28} />
                    </Pressable>
                </View>
            </View>

            <View className='flex-row items-center gap-1'>
                <FontAwesome name="circle" color="blue" size={10} />
                <Text className='text-sm'>{status}</Text>
            </View>
        </View>
    )
}