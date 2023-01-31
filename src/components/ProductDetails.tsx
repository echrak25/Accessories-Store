import { AiOutlineClose } from 'react-icons/ai'
import Data2 from '../Data/DataHairAcc'
import Data1 from '../Data/DataClothing'
import Data3 from '../Data/DataJewlary'
import Data4 from '../Data/DataScarves'
import {
    Box,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    List,
    ListItem,
  } from '@chakra-ui/react';
  import { MdLocalShipping } from 'react-icons/md';
import { Link, useParams } from 'react-router-dom'


function ProductDetails() {
  const handleCloseClick = () => {
    window.history.back();
  };
  const { Id } = useParams();
  const thisProduct  = (
    Data1.find(prod => prod.Id ===Id) ||
    Data2.find(prod => prod.Id === Id) ||
    Data3.find(prod => prod.Id === Id) ||
    Data4.find(prod => prod.Id === Id)
  );
  console.log(Id);
    if (!thisProduct) return <p>Product not found</p>
    return (
        <Container maxW={'7xl'}>
          <Link to="#" onClick={handleCloseClick}>
          <AiOutlineClose color='#ee0077' fontSize={40}/>

      </Link>
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 18, md: 24 }}>
            <Flex>
              <Image
                rounded={'md'}
                alt={'product image'}
                src={thisProduct.image}
                fit={'cover'}
                align={'center'}
                w={'100%'}
                h={{ base: '100%', sm: '400px', lg: '500px' }}
              />
            </Flex>
            <Stack spacing={{ base: 6, md: 10 }}>
              <Box  as={'header'}>
                <Heading
                  color='#ff1493'
                  fontWeight={600}
                  fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                  {thisProduct.name}
                </Heading>
                <Text
                  fontWeight={300}
                  fontSize={'2xl'}>
                  {thisProduct.New_price} DT
                </Text>
              </Box>
    
              <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={'column'}

                >
                <VStack spacing={{ base: 4, sm: 6 }}>
                  <Text
                  
                    fontSize={'2xl'}
                    fontWeight={'300'}>
                    {thisProduct.description}
                  </Text>
                </VStack>
                
                
              </Stack>
    
              <Button
                rounded={'none'}
                w={'full'}
                mt={8}
                size={'lg'}
                py={'7'}
              
                textTransform={'uppercase'}
                _hover={{
                  transform: 'translateY(2px)',
                  boxShadow: 'lg',
                }}>
                Add to cart
              </Button>
    
              <Stack direction="row" alignItems="center" justifyContent={'center'}>
                <MdLocalShipping />
                <Text>2-3 business days delivery</Text>
              </Stack>
            </Stack>
          </SimpleGrid>
        </Container>
      );
}

export default ProductDetails 