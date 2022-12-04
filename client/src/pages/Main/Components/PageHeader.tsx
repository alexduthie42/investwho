import React from 'react';
import './../../../styles/App.scss';
import NavDrawer from './NavDrawer';
import logo from "./../../../content/investwho.png"
import { Center, Grid, GridItem } from '@chakra-ui/react';

interface PageHeaderProps {
  page: string;
  setPage: (page: string) => void;
}

export default function PageHeader(pageHeaderProps: PageHeaderProps) {
  return (
    <Grid templateColumns='repeat(4, 1fr)' className='pageheader'>
        <GridItem colSpan={1} className='drawerbutton'>
            <NavDrawer page={pageHeaderProps.page} setPage={pageHeaderProps.setPage} />
        </GridItem>
        <GridItem colSpan={2}>
            <Center>
                <img src={logo} className='logo' alt=''/>
            </Center>
        </GridItem>
    </Grid>
  );
}
