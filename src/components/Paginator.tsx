import { View, Animated, useWindowDimensions } from 'react-native'
import React from 'react'

interface PaginatorProps {
    data: any[]
    scrollX: Animated.Value
}

export default function Paginator({ data, scrollX }: PaginatorProps) {
    const { width } = useWindowDimensions()

    return (
        <View className='mt-10 justify-center flex-row h-16'>
            {data.map((_, index) => {
                const inputRange = [(index - 1) * width, index * width, (index + 1) * width]

                const dotWidth = scrollX.interpolate({
                    inputRange,
                    outputRange: [10, 15, 10],
                    extrapolate: 'clamp'
                })

                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.3, 1, 0.3],
                    extrapolate: 'clamp'
                })

                return <Animated.View className='h-2 rounded-md bg-[#0050dc] mx-2' key={index.toString()} style={{ width: dotWidth, opacity }} />
            })}
        </View>
    )
}