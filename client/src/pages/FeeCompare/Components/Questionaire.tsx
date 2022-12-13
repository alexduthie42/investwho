import React from 'react';
import './../../../styles/FeeCompare.scss';
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
    setSubmitted: (submitted: boolean) => void;
    setFrequency: (frequency: string) => void;
    setInvestmentAmount: (amount: number) => void;
    setInitialInvestmentAmount: (amount: number) => void;
}

export default function Questionaire(questionaireProps: QuestionaireProps) {

    const [initialInvestmentAmount, setInitialInvestmentAmount] = React.useState(0)
    const [investmentAmount, setInvestmentAmount] = React.useState(0)
    const [frequency, setFrequency] = React.useState("")

    const { isOpen: isInitialInvestmentAmountAlertOpen, onOpen: onInitialInvestmentAmountAlertOpen, onClose: onInitialInvestmentAmountAlertClose } = useDisclosure()
    const { isOpen: isInvestmentAmountAlertOpen, onOpen: onInvestmentAmountAlertOpen, onClose: onInvestmentAmountAlertClose } = useDisclosure()
    const { isOpen: isFrequencySelectedAlertOpen, onOpen: onFrequencySelectedAlertOpen, onClose: onFrequencySelectedAlertClose } = useDisclosure()

    const onInitialInvestmentAmountChange = (value: any) => {
        if (Number(value))
        {
            setInitialInvestmentAmount(Number(value));
            onInitialInvestmentAmountAlertClose();
        }
        else
        {
            onInitialInvestmentAmountAlertOpen();
        }
    }

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
        else if (initialInvestmentAmount <= 0)
        {
            onInitialInvestmentAmountAlertOpen();
        }
        
        else
        {
            questionaireProps.setFrequency(frequency);
            questionaireProps.setInvestmentAmount(investmentAmount);
            questionaireProps.setInitialInvestmentAmount(initialInvestmentAmount);
            questionaireProps.setSubmitted(true);
        }
    }

    return (
        <div >
            <Card variant={'outline'} className='questionaireCard'>
                <CardBody>
                <Stack spacing='6'>

                    <Collapse in={isInitialInvestmentAmountAlertOpen} animateOpacity>
                        <Alert status='warning'>
                            <AlertIcon />
                            <AlertDescription>Initial investment amount must be a number.</AlertDescription>
                        </Alert>
                    </Collapse>
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
                            What is your initial investment?
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
                                onBlur={(value) => onInitialInvestmentAmountChange(value.target.value)}
                            />
                        </InputGroup>
                    </Box>

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

                    <Button colorScheme='brandBlue' onClick={() => Calculate()}>Calculate</Button>
                </Stack>
                </CardBody>
            </Card>


        </div>
    );
}


