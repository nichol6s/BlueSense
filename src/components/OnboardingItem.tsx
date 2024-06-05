import { View, Text, Image, useWindowDimensions } from 'react-native'
import React from 'react'

interface OnboardingItemProps {
    item: {
        id: string
        title: string
        description: string
        image: any
    }
}

export default function OnboardingItem({ item }: OnboardingItemProps) {
    const { width } = useWindowDimensions()

    return (
        <View className='justify-center align-center' style={{ width }}>

            <View className='items-center ' >
                <Image className='justify-center h-[353] w-[333] mb-4' source={item.image} style={{ width, resizeMode: "contain" }} />
                <Text className='text-2xl font-bold'>{item.title}</Text>
                <Text className='text-base text-center px-16'>{item.description}</Text>
            </View>

        </View>
    )
}