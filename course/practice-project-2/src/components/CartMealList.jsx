import { StackDivider, VStack } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import { cartListAtom } from '../store/store';
import CartMealListItem from './CartMealListItem';

export default function CartMealList() {
    const [cartItems] = useAtom(cartListAtom)

    return (
        <VStack spacing={5} divider={<StackDivider borderColor='gray.300' />}>
            {cartItems.map(cartItem => <CartMealListItem key={cartItem.meal.id} item={cartItem} />)}
        </VStack>
    )
}
