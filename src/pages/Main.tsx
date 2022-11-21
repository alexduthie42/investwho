import React from 'react';
import './../App.css';
import PageHeader from '../commonComponents/PageHeader';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import About from '../pages/About';
import FeeCompare from './FeeCompare';
import PortfolioCompare from '../pages/PortfolioCompare';


export default function Main() {

    const [page, setPage] = React.useState('home')
    const pages: { [id: string] : JSX.Element } = {
        "home": <Home page={page} setPage={setPage}/>,
        "contact": <Contact/>,
        "about": <About/>,
        "feecompare": <FeeCompare/>,
        "portfoliocompare": <PortfolioCompare/>
    }

    return (
        <div>
            <div>
                <PageHeader page={page} setPage={setPage} />
            </div>
            <div className='page'>
                {pages[page]}
            </div>
        </div>
    );
}
