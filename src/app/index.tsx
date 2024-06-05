import React from 'react'
import { Text, View, Image } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'

import Onboarding from '@/components/Onboarding'

export default function Index() {
    return (
        <LinearGradient
            colors={['#d4e9ff', '#f3f7fc']}
            start={[0, 0]}
            end={[0, 0.7]}
            className='flex-1 w-full h-full'
        >
            <Onboarding />

        </LinearGradient>

    )
}

