import { Button, Heading, HStack, Tag, useDisclosure } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { HiShoppingCart } from 'react-icons/hi'
import { cartCountAtom } from "../store/store";
import Cart from "./Cart";

export default function Nav() {

    const [cartCount] = useAtom(cartCountAtom)
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Cart isOpen={isOpen} onClose={onClose} />
            <HStack zIndex={1000} padding={'2rem'} bgColor={'red.500'} justify={'space-between'} position={'sticky'} top={0} width={'100%'}>
                <Heading color={'white'}>ReactMeals</Heading>
                <Button onClick={onOpen} leftIcon={<HiShoppingCart />} colorScheme={'blackAlpha'} size={'lg'}>
                    Your Cart
                    <Tag ml={'1rem'}>{cartCount}</Tag>
                </Button>
            </HStack>
        </>
    );
}
