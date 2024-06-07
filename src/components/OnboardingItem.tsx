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
        <View className='justify-center align-center w-full' style={{ width }}>

            <View className='items-center gap-4' >
                <Image className='justify-center h-[353] w-[330] mb-4 px-8 rounded-b-full' source={item.image} />
                <Text className='text-3xl font-semibold text-blue-150'>{item.title}</Text>
                <Text className='text-base text-center font-regular px-16'>{item.description}</Text>
            </View>

        </View>
    )
}