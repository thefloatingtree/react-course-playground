import { Box, Heading, HStack, VStack, Image, Text } from "@chakra-ui/react";
import { Suspense } from "react";
import MealList from "./components/MealList";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Nav />
      <Image mt={'-50rem'} src='https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg' alt='Food Header Image' />
      <HStack justify={'center'} mt={'-15rem'}>
        <Box bgColor={'gray.600'} rounded={'md'} width={'30rem'} padding={'2rem'}>
          <VStack spacing={'3'}>
            <Heading color={'white'}>Delicious Food, Delivered To You</Heading>
            <Text color={'gray.200'} fontSize={'lg'}>Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.</Text>
            <Text color={'gray.200'} fontSize={'lg'}>All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!</Text>
          </VStack>
        </Box>
      </HStack>
      <HStack justify={'center'} my={'5rem'}>
        <Suspense fallback="Loading...">
          <MealList />
        </Suspense>
      </HStack>
    </>
  );
}

export default App;
