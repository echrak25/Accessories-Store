import {
  Box,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  ButtonGroup,
  Button,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

import { currencyFormatter } from '../currencyFormatter';

interface CardProps {
  Id:string;
  image: string;
  New_price: string;
  previous_price:string;
  name: string;
  brand:string;
}
function Card(props:CardProps) {
  const newPrice = Number(props.New_price); // convert the string to a number
  const prevPrice = Number(props.previous_price);
return (
  <Stack py={12} key={props.Id}>
    <Box
      role={'group'}
      p={6}
      maxW={'500px'}
      w={'full'}
      bg={useColorModeValue('pink.100', 'gray.800')}
      boxShadow={'2xl'}
      rounded={'lg'}
      pos={'relative'}
      zIndex={1}>
      <Box
        rounded={'lg'}
        pos={'relative'}
        height={'230px'}
        _after={{
          transition: 'all .3s ease',
          content: '""',
          w: 'full',
          h: 'full',
          pos: 'absolute',
          top: 5,
          left: 0,
          backgroundImage: `url(${props.image})`,
          filter: 'blur(15px)',
          zIndex: -1,
        }}
        _groupHover={{
          _after: {
            filter: 'blur(10px)',
          },
        }}>
      <NavLink to={`/products/${props.Id}`}><Image
          rounded={'lg'}
          height={230}
          width={282}
          objectFit={'cover'}
          src={props.image}
        /></NavLink> 
        
      </Box>
      <Stack pt={10} align={'center'}>
        <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
          {props.brand}
        </Text>
        <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
          {props.name}
        </Heading>
        <Stack direction={'row'} align={'center'}>
          <Text fontWeight={800} fontSize={'xl'}>
            {currencyFormatter.format(newPrice)}
          </Text>
          <Text textDecoration={'line-through'} color={'gray.600'}>
            {currencyFormatter.format(prevPrice)}
            
          </Text>
        </Stack>
        <ButtonGroup spacing='2'>
    <Button variant='solid' colorScheme='pink'>
      Buy now
    </Button>
    <Button variant='ghost' colorScheme='pink'>
      Add to cart
    </Button>
  </ButtonGroup>
      </Stack>
    </Box>
  </Stack>
)
}

export default Card