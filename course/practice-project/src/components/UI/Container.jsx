import { Box, Center } from "@chakra-ui/react";

export default function Container({ children }) {
    return (
        <Center mt='5rem'>
            <Box width='lg' borderWidth='1px' borderRadius='lg' padding='1rem'>
                {children}
            </Box>
        </Center>
    )
}