import React from 'react';
import './../../../App.css';
import { 
  Button,
} from '@chakra-ui/react'

interface MenuButtonProps {
    pageName: string;
    pageId: string;
    currentPage: string;
    setPage: (page: string) => void;
    onClose: () => void;
}
  
export default function MenuButton(menuButtonProps: MenuButtonProps) {

    const buttonVariant = 'outline';
    const selectedButtonVariant = 'solid';
    const colourScheme = 'brandBlue';

    return (
        <Button 
        variant={menuButtonProps.currentPage === menuButtonProps.pageId ? selectedButtonVariant : buttonVariant} 
        colorScheme={colourScheme}
        mr={3} 
        className='menubutton' 
        onClick={() => OnMenuButtonClick(menuButtonProps.pageId , menuButtonProps.setPage, menuButtonProps.onClose)}>
            {menuButtonProps.pageName}
        </Button>
    );
}

function OnMenuButtonClick(page: string, setPage: (page: string) => void, onClose: () => void) {
    setPage(page);
    onClose();
}
