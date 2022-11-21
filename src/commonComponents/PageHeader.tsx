import React from 'react';
import './../App.css';
import NavDrawer from './NavDrawer';
import logo from "./../content/investwho.png"
import { Center, Grid, GridItem } from '@chakra-ui/react';

interface PageHeaderProps {
  page: string;
  setPage: (page: string) => void;
}

export default function PageHeader(pageHeaderProps: PageHeaderProps) {

  const [dimensions, setDimensions] = React.useState({ 
    height: window.innerHeight,
    width: window.innerWidth
  })
  
  React.useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  })

  return (
    <Grid templateColumns='repeat(4, 1fr)' className='headerdrawer'>
        <GridItem colSpan={1} className='drawerbutton'>
            <NavDrawer page={pageHeaderProps.page} setPage={pageHeaderProps.setPage} />
        </GridItem>
        <GridItem colSpan={2}>
            <Center>
                <img src={logo} className='logo'/>
            </Center>
        </GridItem>
    </Grid>
  );
}
