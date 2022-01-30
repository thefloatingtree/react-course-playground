import { Box, StackDivider, VStack } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import { mealsAtom } from '../store/store';
import MealListItem from './MealListItem';

export default function MealList() {
    const [meals] = useAtom(mealsAtom)

    return (
        <Box bgColor={'gray.100'} rounded={'md'} width={'75rem'} padding={'2rem'}>
            <VStack spacing={5} divider={<StackDivider borderColor='gray.300' />}>
                {meals.map(meal => <MealListItem key={meal.id} meal={meal} />)}
            </VStack>
        </Box>
    )
}
