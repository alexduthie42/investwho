import React from 'react';
import './../App.css';
import Questionaire from '../commonComponents/Questionaire';
import { 
  Heading, 
  Card, 
  CardBody, 
  Stack,
  StackDivider,
  Box,
  RadioGroup,
  Radio,
  Checkbox,
  Select,
  Input,
  Collapse,
  useDisclosure,
} from '@chakra-ui/react';

export default function FeeCompare() {


  return (
    <div>
      {/* <Card variant={'outline'} className='homeHeadingCard'>
        <CardBody>
          <Heading size='s'>
            To compare fees across NZ investment platforms for your personal investing plan fill in the following form
          </Heading>
        </CardBody>
      </Card> */}
      <Questionaire/>
    </div>
  );
}


