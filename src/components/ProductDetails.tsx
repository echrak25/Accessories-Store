import React from 'react'
import Card from './Card'
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
import { useParams } from 'react-router-dom'


function ProductDetails() {
  const {productId} = useParams()
    const thisProduct = (Data1.find(prod => prod.Id === productId) ||Data2.find(prod => prod.Id === productId)||Data3.find(prod => prod.Id === productId)||Data4.find(prod => prod.Id === productId))
    if (!thisProduct) return <p>Product not found</p>
    return (
      
        <Container maxW={'7xl'}>
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
              <Box as={'header'}>
                <Heading
                  lineHeight={1.1}
                  fontWeight={600}
                  fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                  {thisProduct.name}
                </Heading>
                <Text
                
                  fontWeight={300}
                  fontSize={'2xl'}>
                  {thisProduct.New_price}
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
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore
                  </Text>
                  <Text fontSize={'lg'}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                    aliquid amet at delectus doloribus dolorum expedita hic, ipsum
                    maxime modi nam officiis porro, quae, quisquam quos
                    reprehenderit velit? Natus, totam.
                  </Text>
                </VStack>
                <Box>
                  <Text
                    fontSize={{ base: '16px', lg: '18px' }}
                    
                    fontWeight={'500'}
                    textTransform={'uppercase'}
                    mb={'4'}>
                    Features
                  </Text>
    
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                    <List spacing={2}>
                      <ListItem>........</ListItem>
                      <ListItem>........</ListItem>{' '}
                      <ListItem>.......</ListItem>
                    </List>
                    <List spacing={2}>
                      <ListItem>....</ListItem>
                      <ListItem>........</ListItem>
                      <ListItem>......</ListItem>
                    </List>
                  </SimpleGrid>
                </Box>
                <Box>
                  <Text
                    fontSize={{ base: '16px', lg: '18px' }}
                    
                    fontWeight={'500'}
                    textTransform={'uppercase'}
                    mb={'4'}>
                    Product Details
                  </Text>
    
                  <List spacing={2}>
                    <ListItem>
                      <Text as={'span'} fontWeight={'bold'}>
                        Between lugs:
                      </Text>{' '}
                      20 mm
                    </ListItem>
                    <ListItem>
                      <Text as={'span'} fontWeight={'bold'}>
                        Bracelet:
                      </Text>{' '}
                      leather strap
                    </ListItem>
                    <ListItem>
                      <Text as={'span'} fontWeight={'bold'}>
                        Case:
                      </Text>{' '}
                      Steel
                    </ListItem>
                    <ListItem>
                      <Text as={'span'} fontWeight={'bold'}>
                        Case diameter:
                      </Text>{' '}
                      ....
                    </ListItem>
                    <ListItem>
                      <Text as={'span'} fontWeight={'bold'}>
                        Dial color:
                      </Text>{' '}
                     ...
                    </ListItem>
                    <ListItem>
                      <Text as={'span'} fontWeight={'bold'}>
                        ....
                      </Text>{' '}
                      ....
                    </ListItem>
                    <ListItem>
                      <Text as={'span'} fontWeight={'bold'}>
                        Water resistance:
                      </Text>{' '}
                     ....
                    </ListItem>
                  </List>
                </Box>
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