import React from 'react';
import './../App.css';
import { 
  Drawer,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
} from '@chakra-ui/react'
import { 
  HamburgerIcon 
} from '@chakra-ui/icons'
import MenuButton from './MenuButton';

interface NavDrawerProps {
    page: string;
    setPage: (page: string) => void;
}
  
export default function NavDrawer(navDrawerProps: NavDrawerProps) {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef<HTMLButtonElement>(null);

    return (
        <div>
            <Button ref={btnRef} variant="ghost" onClick={onOpen}>
                <HamburgerIcon w={6} h={6} color="white" />
            </Button>
            <Drawer
                isOpen={isOpen}
                onClose={onClose}
                finalFocusRef={btnRef}
                placement='left'
                size='md'
            >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Menu</DrawerHeader>

                <MenuButton pageId='home' pageName='Home' currentPage={navDrawerProps.page} setPage={navDrawerProps.setPage} onClose={onClose}/>
                <MenuButton pageId='feecompare' pageName='Fee Comparison Tool' currentPage={navDrawerProps.page} setPage={navDrawerProps.setPage} onClose={onClose}/>
                <MenuButton pageId='portfoliocompare' pageName='Portfolio Comparison Tool' currentPage={navDrawerProps.page} setPage={navDrawerProps.setPage} onClose={onClose}/>
                <MenuButton pageId='about' pageName='About' currentPage={navDrawerProps.page} setPage={navDrawerProps.setPage} onClose={onClose}/>
                <MenuButton pageId='contact' pageName='Contact' currentPage={navDrawerProps.page} setPage={navDrawerProps.setPage} onClose={onClose}/>
            </DrawerContent>
            </Drawer>
        </div>
    );
}