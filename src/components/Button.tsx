import { Text, Pressable, PressableProps } from 'react-native'

type ButtonProps = PressableProps & {
    title: string
}

export default function Button({ title, ...props }: ButtonProps) {
    return (
        <Pressable
            className='w-[344] h-[50] bg-blue-200 items-center justify-center rounded-full active:opacity-70 '
            {...props}
        >
            <Text className='text-white text-base font-medium'>{title}</Text>
        </Pressable>
    )
}