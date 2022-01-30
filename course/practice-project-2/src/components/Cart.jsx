import { Button, Divider, Heading, HStack, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react"
import { useAtom } from "jotai"
import { cartTotalAtom, cartCountAtom } from "../store/store"
import CartMealList from "./CartMealList"


export default function Cart({ isOpen, onClose }) {

    const [cartTotal] = useAtom(cartTotalAtom)
    const [cartCount] = useAtom(cartCountAtom)

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

                    </ModalBody>
                    <ModalFooter>
                        <HStack spacing={3}>
                            <Button variant='ghost' onClick={onClose}>
                                Close
                            </Button>
                            {!!cartCount && <Button onClick={() => console.log("ORDER")} colorScheme={'blue'}>Order</Button>}
                        </HStack>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        )
}
