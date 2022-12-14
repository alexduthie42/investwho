import React, { 
  useContext 
} from 'react';
import './../../styles/Home.scss';
import { WindowContext } from './../../helpers/WindowContext';
import { 
  Heading, 
  Card, 
  CardBody, 
  Stack,
  SimpleGrid,
  CardHeader,
  CardFooter,
  Button,
  Text
} from '@chakra-ui/react';

interface HomeProps {
  page: string;
  setPage: (page: string) => void;
}


export default function Home(homeProps: HomeProps) {

  const { clientWidth } = useContext(WindowContext);

  return (
    <div>
      <div className='heading'>
        <Stack spacing={6}>
          <Heading size='lg'> 
            We know it's hard to choose an investment platform in NZ with so many options
          </Heading>
          <Heading size='lg'> 
            That's why we have created these easy to use tools to help you compare fees across platforms
          </Heading>
        </Stack>
      </div>
      <div className='cardContainer'>
        <SimpleGrid spacing={4} columns={clientWidth > 1000 ? 2 : 1}  className='cardGroup'>
          <Card className='card'>
            <CardHeader>
              <Heading size='md'>Fee Comparison Tool</Heading>
            </CardHeader>
            <CardBody>
              <Text>If you don't know what you want to invest in but want to see how fees compare across platforms for your investing goals.</Text>
              <br/>
              <Text>Select how frequently and how much you want to invest and we will compare fees between platforms.</Text>
            </CardBody>
            <CardFooter>
              <Button onClick={() => homeProps.setPage('feecompare')} colorScheme='blue'>View here</Button>
            </CardFooter>
          </Card>
          <Card className='card'>
            <CardHeader>
              <Heading size='md'>Portfolio Comparison Tool</Heading>
            </CardHeader>
            <CardBody>
              <Text>Perfect for investors who know exactly what they want to invest in.</Text>
              <br/>
              <Text>You can select what investments you want to invest in, how frequently, and how much and we will compare your portfolios between platforms.</Text>
            </CardBody>
            <CardFooter>
              <Button onClick={() => homeProps.setPage('portfoliocompare')} colorScheme='blue'>View here</Button>
            </CardFooter>
          </Card>
        </SimpleGrid>
      </div>
    </div>
  );
}


