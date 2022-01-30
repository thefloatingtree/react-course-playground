import { Heading, HStack, IconButton, Tag, Text, VStack } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import { HiMinus, HiPlus } from 'react-icons/hi';
import { cartAtom } from '../store/store';


export default function CartMealListItem({ item }) {

    const [cart, setCart] = useAtom(cartAtom)

    const onAmountAdjust = (amount) => {
        const newAmount = cart[item.meal.id].amount + amount

        if (newAmount === 0) {
            setCart(c => {
                const { [item.meal.id]: _, ...rest } = c
                return rest
            })
        } else {
            setCart(c => {
                return {
                    ...c,
                    [item.meal.id]: {
                        ...c[item.meal.id],
                        amount: newAmount
                    }
                }
            })
        }
    }

    return (
        <HStack width={'100%'} justify={'space-between'}>
            <VStack align={'flex-start'}>
                <Heading fontSize={'3xl'}>{item.meal.title}</Heading>
                <HStack spacing={3}>
                    <Text color={'orange.500'} fontSize={'2xl'}>${item.meal.price}</Text>
                    <Tag size={'lg'}>x {cart[item.meal.id].amount}</Tag>
                </HStack>
            </VStack>
            <VStack align={'flex-end'}>
                <IconButton onClick={() => onAmountAdjust(1)} icon={<HiPlus />} />
                <IconButton onClick={() => onAmountAdjust(-1)} icon={<HiMinus />} />
            </VStack>
        </HStack>
    )
}