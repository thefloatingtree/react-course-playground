import { Button, Divider, Heading, HStack, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react"
import { useAtom } from "jotai"
import { useState } from "react"
import { cartTotalAtom, cartCountAtom } from "../store/store"
import CartMealList from "./CartMealList"
import Checkout from "./Checkout"


export default function Cart({ isOpen, onClose }) {

    const [cartTotal] = useAtom(cartTotalAtom)
    const [cartCount] = useAtom(cartCountAtom)

    const [showCheckout, setShowCheckout] = useState(false)

    let Body = (
        <>
            <CartMealList />
            <Divider borderColor={'gray.300'} opacity={1} py={'0.5rem'} />
            <HStack justify={'space-between'} pt={'2rem'}>
                <Heading fontSize={'3xl'}>Total Amount</Heading>
                <Heading color={'orange.500'} fontSize={'3xl'}>${cartTotal}</Heading>
            </HStack>
        </>
    )

    if (!cartCount) {
        Body = (
            <Text>Your cart is empty...</Text>
        )
    }

    return (
            <Modal isCentered isOpen={isOpen} onClose={onClose} scrollBehavior="inside" size={'6xl'}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Cart</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>

                        {Body}
                        {showCheckout && <Checkout />}

                    </ModalBody>
                    <ModalFooter>
                        <HStack spacing={3}>
                            {showCheckout && <Button onClick={() => setShowCheckout(false)}>Cancel</Button>}
                            {!showCheckout && <Button variant='ghost' onClick={onClose}>
                                Close
                            </Button>}
                            {!showCheckout && !!cartCount && <Button onClick={() => setShowCheckout(true)} colorScheme={'blue'}>Order</Button>}
                        </HStack>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        )
}
