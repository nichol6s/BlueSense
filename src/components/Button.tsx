import { Text, Pressable, PressableProps } from 'react-native'

type ButtonProps = PressableProps & {
    title: string
}

export default function Button({ title, ...props }: ButtonProps) {
    return (
        <Pressable
            className='w-[344] h-[50] bg-[#0050dc] items-center justify-center rounded-full active:opacity-70 '
            {...props}
        >
            <Text className='text-white text-base font-medium'>{title}</Text>
        </Pressable>
    )
}