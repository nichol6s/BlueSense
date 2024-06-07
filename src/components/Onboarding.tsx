import React from 'react'
import { Text, View, FlatList, Pressable, Animated } from 'react-native'
import { useRef, useState } from 'react'
import { router } from "expo-router"

import OnboardingItem from '@/components/OnboardingItem'
import Paginator from '@/components/Paginator'
import Button from '@/components/Button'

import slides from '@/utils/data/slides'

export default function Onboarding() {
    const slidesRef = useRef<FlatList>(null)
    const scrollX = useRef(new Animated.Value(0)).current
    const [currentIndex, setCurrentIndex] = useState(0)

    function viewableItemsChanged({ viewableItems }: any) {
        setCurrentIndex(viewableItems[0].index)
    }

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current

    function scrollTo() {
        if (currentIndex < slides.length - 1) {
            slidesRef.current?.scrollToIndex({ index: currentIndex + 1, animated: true, viewPosition: 0.5 });
        } else {
            router.push("/home");
            console.log('Last slide');
        }
    };

    return (
        <View className='mt-16 items-center'>
            <FlatList
                data={slides}
                renderItem={({ item }) => <OnboardingItem item={item} />}
                keyExtractor={item => item.id}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                bounces={false}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false })}
                onViewableItemsChanged={viewableItemsChanged}
                scrollEventThrottle={32}
                viewabilityConfig={viewConfig}
                ref={slidesRef}
            />

            <View className='mt-12'>
                <Paginator data={slides} scrollX={scrollX} />
            </View>

            <View className='mt-12 items-center gap-4'>
                <Button
                    title={currentIndex === slides.length - 1 ? 'Começar agora' : 'Próximo'}
                    onPress={scrollTo}
                />

                <Pressable className='active:opacity-70' onPress={() => router.push("/home")}>
                    <Text className='text-gray-400 text-base font-medium'>Pular</Text>
                </Pressable>
            </View>


        </View>
    )
}

