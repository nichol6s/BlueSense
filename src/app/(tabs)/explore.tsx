import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'

export default function Explore() {
    return (
        <LinearGradient
            colors={['#d4e9ff', '#f3f7fc']}
            start={[0, 0]}
            end={[0, 0.7]}
            className='flex-1 py-6 px-6'
        >
            <View>
                <Text>explore</Text>
            </View>
        </LinearGradient>

    )
}

const styles = StyleSheet.create({})