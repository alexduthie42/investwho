import React from 'react';
import './../../App.css';
import Questionaire from './Components/Questionaire';
import Chart from './Components/Chart'
import { 
  Card, 
  CardBody, 
  Collapse,
  useDisclosure,
} from '@chakra-ui/react';

export default function FeeCompare() {

  const [investmentAmount, setInvestmentAmount] = React.useState(0)
  const [frequency, setFrequency] = React.useState("")
  const { isOpen: isResultOpen, onOpen: onResultOpen, onClose: onResultClose } = useDisclosure()

  return (
    <div>
      <Questionaire 
        onResultOpen={onResultOpen} 
        setFrequency={setFrequency} 
        setInvestmentAmount={setInvestmentAmount} 
        frequency={frequency}
        investmentAmount={investmentAmount}
      />

      <Collapse in={isResultOpen} animateOpacity>
          <Card variant={'outline'} className='card'>
              <CardBody>
                  <Chart investmentAmount={investmentAmount} frequency={frequency} />
              </CardBody>
          </Card>
      </Collapse>
    </div>
  );
}


