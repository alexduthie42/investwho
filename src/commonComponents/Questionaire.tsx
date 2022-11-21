import React from 'react';
import './../App.css';
import Chart from './../commonComponents/Chart'
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
    Button
  } from '@chakra-ui/react';

  
export default function Questionaire() {

    const [knowInvestmentTypeValue, setKnowInvestmentTypeValue] = React.useState('0')
    const [internationalInvestmentsValue, setInternationalInvestmentsValue] = React.useState('0')
    const { isOpen: isInvestmentTypesOpen, onOpen: onInvestmentTypesOpen, onClose: onInvestmentTypesClose } = useDisclosure()
    const { isOpen: isInternaionalAllocationsOpen, onOpen: onInternaionalAllocationOpen, onClose: onInternaionalAllocationClose } = useDisclosure()
    const { isOpen: isResultOpen, onOpen: onResultOpen, onClose: onResultClose } = useDisclosure()


    return (
        <div >
            <Card variant={'outline'} className='card'>
                <CardBody>
                <Stack spacing='8'>
                    <Box>
                    <Heading size='s'>
                        Do you know what types of investments you want to invest in?
                    </Heading>
                    <RadioGroup 
                    onChange={(value) => 
                        knowInvestmentTypeChange(
                        value, 
                        setKnowInvestmentTypeValue, 
                        onInvestmentTypesOpen, 
                        onInvestmentTypesClose)} 
                    value={knowInvestmentTypeValue}>
                        <Stack direction='row'>
                            <Radio value='1'>Yes</Radio>
                            <Radio value='2'>No</Radio>
                        </Stack>
                    </RadioGroup>
                    </Box>

                    <Collapse in={isInvestmentTypesOpen} animateOpacity>
                        <Box>
                            <Heading size='s'>
                            What types of investments do you want to invest in?
                            </Heading>
                            <Stack spacing={5} direction='column'>
                            <Checkbox>
                                Individual Stocks
                            </Checkbox>
                            <Checkbox>
                                Funds
                            </Checkbox>
                            </Stack>
                        </Box>
                    </Collapse>

                    <Box>
                        <Heading size='s'>
                        How frequently do you want to invest?
                        </Heading>
                        <Select placeholder='Select option'>
                        <option value='option1'>Weekly</option>
                        <option value='option2'>Fortnightly</option>
                        <option value='option3'>Monthly</option>
                        <option value='option3'>Yearly</option>
                        </Select>
                    </Box>

                    <Collapse in={isInvestmentTypesOpen} animateOpacity>
                        <Box>
                            <Heading size='s'>
                            Do you want to invest in international investments? (Funds or stocks listed outside New Zealand)
                            </Heading>
                            <RadioGroup 
                            onChange={(value) => 
                                internaionalInvestmentsChange(
                                value, 
                                setInternationalInvestmentsValue, 
                                onInternaionalAllocationOpen, 
                                onInternaionalAllocationClose)} 
                            value={internationalInvestmentsValue}>
                                <Stack direction='row'>
                                    <Radio value='1'>Yes</Radio>
                                    <Radio value='2'>No</Radio>
                                </Stack>
                            </RadioGroup>
                        </Box>
                    </Collapse>

                    <Collapse in={!isInternaionalAllocationsOpen} animateOpacity>
                        <Box>
                            <Heading size='s'>
                                How much do you plan to invest each period?
                            </Heading>
                            <Input placeholder='' size='md' />
                        </Box>
                    </Collapse>

                    <Collapse in={isInternaionalAllocationsOpen} animateOpacity>
                        <Box>
                            <Heading size='s'>
                                How much do you plan to invest in local investments each period?
                            </Heading>
                            <Input placeholder='' size='md' />
                        </Box>

                        <Box>
                            <Heading size='s'>
                                How much do you plan to invest in international investments each period?
                            </Heading>
                            <Input placeholder='' size='md' />
                        </Box>
                    </Collapse>

                    <Button colorScheme='blue' onClick={() => Calculate(onResultOpen)}>Calculate</Button>

                    
                </Stack>
                </CardBody>
            </Card>

            <Collapse in={isResultOpen} animateOpacity>
                <Card variant={'outline'} className='card'>
                    <CardBody>
                        <Chart/>
                    </CardBody>
                </Card>
            </Collapse>
        </div>
    );
}



function knowInvestmentTypeChange(
    value: string, 
    setKnowInvestmentTypeValue: (value: string) => void, 
    onInvestmentTypesOpen: () => void, 
    onInvestmentTypesClose: () => void) 
{
    setKnowInvestmentTypeValue(value);
    if (value === "1")
    {
        onInvestmentTypesOpen();
    }
    else 
    {
        onInvestmentTypesClose();
    }
}

function internaionalInvestmentsChange(
    value: string, 
    setInternationalInvestmentsValue: (value: string) => void, 
    onInternaionalAllocationOpen: () => void, 
    onInternaionalAllocationClose: () => void) 
{
    setInternationalInvestmentsValue(value);
    if (value === "1")
    {
        onInternaionalAllocationOpen();
    }
    else 
    {
        onInternaionalAllocationClose();
}
}

function Calculate(
    onResultOpen: () => void)
{
    onResultOpen();
}

