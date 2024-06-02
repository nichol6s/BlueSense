import React from 'react'
import { Text, View, Image } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'
import { router } from "expo-router"

import Button from '@/components/Button'


export default function Index() {
    return (
        <LinearGradient
            colors={['#d4e9ff', '#f3f7fc']}
            start={[0, 0]}
            end={[0, 0.7]}
            className='flex-1 py-6 px-6'
        >
            <Image
                source={require("../assets/Ocean.png")}
                className='w-[344] h-[346] mt-14'
            />

            <View className='mt-8 gap-10 items-left'>
                <Text className='text-4xl w-[70%] font-medium'>Seja bem-vindo ao BlueSense</Text>

                <Text className='text-base font-regular'>
                    Um app focado na ajuda oceânica. Venha fazer parte da família BlueSense e ajude milhares de vidas marinhas.
                </Text>
            </View>

            <View className='items-center mt-14'>
                <Button title="Começar agora" onPress={() => router.push("/home")} />
            </View>

        </LinearGradient>

    )
}

