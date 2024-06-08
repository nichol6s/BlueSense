import React from 'react'
import { Text, View, Image, ScrollView } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'

import Button from '@/components/Button'

export default function Ocean() {
    return (
        <LinearGradient
            colors={['#d4e9ff', '#f3f7fc']}
            start={[0, 0]}
            end={[0, 0.7]}
            className='flex-1 px-6'
        >
            <ScrollView contentContainerStyle={{ alignItems: "center", gap: 20, marginTop: 25 }} showsVerticalScrollIndicator={false}>

                <View className='items-center'>
                    <Text className='text-2xl font-semibold text-blue-150'>Ajude a preservar os oceanos</Text>
                    <Image source={require("@/assets/jellyfish.png")} className='w-[333] h-[340]' />
                    <Text className='text-base font-regular text-center'>Os oceanos são vitais para a vida na Terra. Eles regulam o clima, produzem oxigênio e são lar de uma incrível diversidade de vida. Sua preservação é essencial para o futuro do planeta.</Text>
                </View>

                <View className='items-center'>
                    <Text className='text-2xl font-semibold text-blue-150'>Seja a diferença</Text>
                    <Image source={require("@/assets/sand-castle.png")} className='w-[333] h-[340] ' />
                    <Text className='text-base font-regular text-center'>Cada um de nós pode fazer a diferença. Reduzir o uso de plásticos, apoiar iniciativas de limpeza de praias e conscientizar os outros são passos importantes para proteger nossos oceanos.</Text>
                </View>

                <View className='items-center mb-14'>
                    <Text className='text-2xl font-semibold text-blue-150'>Filosofia BlueHeart 💙</Text>
                    <Image source={require("@/assets/logo1.png")} className='w-[333] h-[100]' style={{ resizeMode: "contain" }} />
                    <Text className='text-base font-regular text-center'>
                        Nós seguimos, a filosofia “BlueHeart” que reflete a nossa empatia e compromisso com os oceanos e seus habitantes. Junte-se a nós na proteção dos oceanos, venha ser BlueSense!
                    </Text>
                </View>

            </ScrollView>
        </LinearGradient>

    )
}
