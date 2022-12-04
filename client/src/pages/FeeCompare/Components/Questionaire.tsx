import React from 'react';
import './../../../App.css';
import { 
    Heading, 
    Card, 
    CardBody, 
    Stack,
    Box,
    Select,
    Input,
    Collapse,
    useDisclosure,
    Button,
    InputGroup,
    InputLeftElement,
    Alert,
    AlertIcon,
    AlertDescription
  } from '@chakra-ui/react';

  
interface QuestionaireProps {
    onResultOpen: () => void;
    setFrequency: (frequency: string) => void;
    setInvestmentAmount: (amount: number) => void;
}

export default function Questionaire(questionaireProps: QuestionaireProps) {

    const [investmentAmount, setInvestmentAmount] = React.useState(0)
    const [frequency, setFrequency] = React.useState("")

    const { isOpen: isInvestmentAmountAlertOpen, onOpen: onInvestmentAmountAlertOpen, onClose: onInvestmentAmountAlertClose } = useDisclosure()
    const { isOpen: isFrequencySelectedAlertOpen, onOpen: onFrequencySelectedAlertOpen, onClose: onFrequencySelectedAlertClose } = useDisclosure()

    const onInvestmentAmountChange = (value: any) => {
        if (Number(value))
        {
            setInvestmentAmount(Number(value));
            onInvestmentAmountAlertClose();
        }
        else
        {
            onInvestmentAmountAlertOpen();
        }
    }

    const onFrequencyChange = (value: any) => {
        setFrequency(value);
        onFrequencySelectedAlertClose();
    }

    const Calculate = () =>
    {
        if (frequency === "")
        {
            onFrequencySelectedAlertOpen();
        }
        else if (investmentAmount <= 0)
        {
            onInvestmentAmountAlertOpen();
        }
        else
        {
            questionaireProps.setFrequency(frequency);
            questionaireProps.setInvestmentAmount(investmentAmount);
            questionaireProps.onResultOpen();
        }
    }

    return (
        <div >
            <Card variant={'outline'} className='card'>
                <CardBody>
                <Stack spacing='8'>

                    <Collapse in={isInvestmentAmountAlertOpen} animateOpacity>
                        <Alert status='warning'>
                            <AlertIcon />
                            <AlertDescription>Investment amount must be a number.</AlertDescription>
                        </Alert>
                    </Collapse>
                    <Collapse in={isFrequencySelectedAlertOpen} animateOpacity>
                        <Alert status='warning'>
                            <AlertIcon />
                            <AlertDescription>Please select a frequency.</AlertDescription>
                        </Alert>
                    </Collapse>

                    <Box>
                        <Heading size='s'>
                        How frequently do you want to invest?
                        </Heading>
                        <Select 
                            placeholder='Select option'
                            onChange={(event) => onFrequencyChange(event.target.value)}
                        >
                            <option value='weekly'>Weekly</option>
                            <option value='fortnightly'>Fortnightly</option>
                            <option value='monthly'>Monthly</option>
                            <option value='yearly'>Yearly</option>
                        </Select>
                    </Box>

                    <Box>
                        <Heading size='s'>
                            How much do you plan to invest each period?
                        </Heading>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents='none'
                                color='gray.300'
                                fontSize='1.2em'
                                children='$'
                            />
                            <Input 
                                size='md'
                                onBlur={(value) => onInvestmentAmountChange(value.target.value)}
                            />
                        </InputGroup>
                    </Box>

                    <Button colorScheme='blue' onClick={() => Calculate()}>Calculate</Button>
                </Stack>
                </CardBody>
            </Card>


        </div>
    );
}

