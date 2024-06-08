import React from 'react'

import { LinearGradient } from 'expo-linear-gradient'

import Onboarding from '@/components/Onboarding'
import { StatusBar } from 'expo-status-bar'

export default function Index() {
    return (
        <LinearGradient
            colors={['#d4e9ff', '#f3f7fc']}
            start={[0, 0]}
            end={[0, 0.7]}
            className='flex-1 w-full h-full'
        >
            <StatusBar style='dark' />
            <Onboarding />
        </LinearGradient>

    )
}