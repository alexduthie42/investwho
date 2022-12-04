import React from 'react';
import './../../../styles/App.scss';
import logo from "./../../../content/investwho.png"
import { Center, Grid, GridItem } from '@chakra-ui/react';

export default function PageFooter() {
  return (
    <div className='pageFooter'>
        <img src={logo} className='logoFooter' alt=''/>
    </div>
  );
}
