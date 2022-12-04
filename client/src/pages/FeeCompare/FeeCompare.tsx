import React, { 
  useEffect, 
  useState 
} from 'react';
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

  const [feeData, setFeeData] = useState([{}]);
  const [investmentAmount, setInvestmentAmount] = React.useState(0)
  const [frequency, setFrequency] = React.useState("")
  const { isOpen: isResultOpen, onOpen: onResultOpen } = useDisclosure()

  useEffect(() => {
    fetch(`/api/feecalculations?frequency=${frequency}&amount=${investmentAmount}`).then(
      response => response.json()
    ).then(
      data => {
        setFeeData(data)
      }
    )
  }, [investmentAmount, frequency])

  return (
    <div>
      <Questionaire 
        onResultOpen={onResultOpen} 
        setFrequency={setFrequency} 
        setInvestmentAmount={setInvestmentAmount} 
      />

      <Collapse in={isResultOpen} animateOpacity>
          <Card variant={'outline'} className='card'>
              <CardBody>
                  <Chart feeData={feeData} />
              </CardBody>
          </Card>
      </Collapse>
    </div>
  );
}


