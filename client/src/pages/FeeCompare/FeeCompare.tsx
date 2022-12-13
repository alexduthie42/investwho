import React, { 
  useEffect, 
  useState,
  useContext 
} from 'react';
import './../../styles/FeeCompare.scss';
import { WindowContext } from './../../helpers/WindowContext';
import Questionaire from './Components/Questionaire';
import Chart from './Components/Chart'
import { 
  Card, 
  CardBody, 
  Collapse,
  Text,
  Heading,
  SimpleGrid,
  CardHeader,
  UnorderedList,
  ListItem
} from '@chakra-ui/react';

export default function FeeCompare() {

  const [feeData, setFeeData] = useState([{}]);
  const [investmentAmount, setInvestmentAmount] = React.useState(0)
  const [initialInvestmentAmount, setInitialInvestmentAmount] = React.useState(0)
  const [frequency, setFrequency] = React.useState("")
  const [isSubmitted, setSubmitted] = React.useState(false)

  const { clientWidth } = useContext(WindowContext);

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
        setSubmitted={setSubmitted} 
        setFrequency={setFrequency} 
        setInvestmentAmount={setInvestmentAmount} 
        setInitialInvestmentAmount={setInitialInvestmentAmount} 
      />

      <Collapse in={isSubmitted === true && feeData.length !== 0} animateOpacity>
          <Card variant={'outline'} className='feeComparisonResultsCard'>
              <CardBody>
                  <div>
                    <Heading size='md' className='chartTitle'>Annual Investment Platform Fees</Heading>
                    <Chart feeData={feeData} />
                  </div>
                  <div className='cardContainer'>
                    <SimpleGrid spacing={4} columns={clientWidth > 1000 ? 2 : 1}  className='cardGroup'>
                      <Card className='card'>
                        <CardHeader>
                          <Heading size='md'>What do these numbers mean?</Heading>
                        </CardHeader>
                        <CardBody>
                        <div className='paragraph'>
                          <UnorderedList>
                            <ListItem className='listItem'>Currency exchange fees are fees that investment platforms charge to convert money from one currency to another.</ListItem>
                            <ListItem className='listItem'>Transaction fees are fees that investment platforms charge when you buy an investment. In this case transaction fees only include the fees included in buying an investment, there may also be transaction fees associated with selling an investment.</ListItem>
                            <ListItem className='listItem'>Management fees are annual fees charged by fund managers to invest in their funds. Investing in the same fund on different investment platforms will result in paying the same management fees.</ListItem>
                          </UnorderedList>
                        </div>
                        </CardBody>
                      </Card>
                      <Card className='card'>
                        <CardHeader>
                          <Heading size='md'>How were these numbers calculated?</Heading>
                        </CardHeader>
                        <CardBody>
                          <Text className='paragraph'>We have selected a single fund from each of the investment platforms that invest in the S&P500 and calculated what the fees would be based on your investment frequency and amount.</Text>
                          <div className='paragraph'>
                            <Text>The funds we have chosen are:</Text>
                            <UnorderedList>
                              <ListItem>Sharesies: S&P 500 Value Vanguard</ListItem>
                              <ListItem>Hatch: S&P 500 Value Vanguard</ListItem>
                              <ListItem>InvestNow: Foundation Series US 500 Fund</ListItem>
                            </UnorderedList>  
                          </div>
                          <Text className='paragraph'>The funds available between platforms varies and different funds will incur different fee percentages.</Text>
                        </CardBody>
                      </Card>
                    </SimpleGrid>
                </div>
              </CardBody>
          </Card>
      </Collapse>
    </div>
  );
}


