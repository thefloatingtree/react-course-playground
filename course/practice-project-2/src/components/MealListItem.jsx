import { Button, Heading, HStack, Input, InputGroup, InputLeftAddon, Text, VStack } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import { useState } from 'react';
import { cartAtom } from '../store/store';

export default function MealListItem({ meal }) {

    const setCart = useAtom(cartAtom)[1]
    const [amount, setAmount] = useState("1")

    const handleAddMeal = () => {
        setCart(cart => {
            return {
                ...cart,
                [meal.id]: {
                    meal,
                    amount: parseInt(amount) + (cart[meal.id] ? cart[meal.id].amount : 0)
                }
            }
        })
    }

    return (
        <HStack width={'100%'} justify={'space-between'}>
            <VStack align={'flex-start'}>
                <Heading fontSize={'3xl'}>{meal.title}</Heading>
                <Text fontSize={'lg'}>{meal.description}</Text>
                <Text color={'orange.500'} fontSize={'2xl'}>${meal.price}</Text>
            </VStack>
            <VStack align={'flex-end'}>
                <InputGroup>
                    <InputLeftAddon borderColor={'gray.400'} bgColor={'gray.200'} children='Amount' />
                    <Input borderColor={'gray.400'} type={'number'} value={amount} onChange={(e) => setAmount(e.target.value)} width={'5rem'} bgColor={'gray.100'} />
                </InputGroup>
                <Button onClick={handleAddMeal} colorScheme={'blue'}>+ Add</Button>
            </VStack>
        </HStack>
    )
}