import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'

export default function Index() {
    return (
        <View className='pt-8 px-5'>
            <Text className='text-yellow-500'>index</Text>
            <Link href="home">Home</Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        paddingLeft: 20,
        paddingRight: 20,
    }
})