import React from 'react';
import './../../styles/App.scss';
import PageHeader from './Components/PageHeader';
import PageFooter from './Components/PageFooter';
import Home from '../Home/Home';
// import Contact from '../pages/Contact';
// import About from '../pages/About';
import FeeCompare from '../FeeCompare/FeeCompare';
import PortfolioCompare from '../PortfolioCompare/PortfolioCompare';


export default function Main() {

    const [page, setPage] = React.useState('home')
    const pages: { [id: string] : JSX.Element } = {
        "home": <Home page={page} setPage={setPage}/>,
        // "about": <About/>,
        "feecompare": <FeeCompare/>,
        "portfoliocompare": <PortfolioCompare/>
    }

    return (
        <div>
            <PageHeader page={page} setPage={setPage} />
            <div className='content'>
                {pages[page]}
            </div>
            <PageFooter />
        </div>
    );
}
