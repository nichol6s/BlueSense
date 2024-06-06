import { View, Text, TextInput, TextInputProps } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'

interface FieldProps extends TextInputProps {
    showCharacterCount?: boolean
    maxLength?: number
}

function Input({ children }: { children: React.ReactNode }) {
    return (
        <View className='w-full h-[50] flex-row items-center gap-3 px-6 border border-[#0050dc] rounded-[16]'>
            {children}
        </View>
    )
}

function Field({ showCharacterCount, maxLength, value, onChangeText, ...rest }: FieldProps) {
    const [focused, setFocused] = useState(false)
    const [text, setText] = useState(value || "")

    useEffect(() => {
        setText(value || "");
    }, [value])

    function handleChangeText(input: string) {
        setText(input)
        if (onChangeText) {
            onChangeText(input);
        }
    }

    return (
        <View className='flex-row'>
            <TextInput
                className='flex-1 text-black-100 text-sm font-light w-[50%]'
                placeholderTextColor="black"
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                value={text}
                onChangeText={handleChangeText}
                maxLength={maxLength}
                {...rest}
            />
            {showCharacterCount && focused && (
                <Text className='text-black-100 font-light text-sm mr-4 mt-1'>
                    {text.length}/{maxLength}
                </Text>
            )}
        </View>


    )
}

Input.Field = Field
export { Input }