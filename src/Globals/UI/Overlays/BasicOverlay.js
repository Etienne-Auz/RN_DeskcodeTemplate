import React, {useContext} from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';


const BasicOverlay = ({children}) => {

    return (
        <>
        <Header/>
        {children}
        <Footer />
        </>
    )
}

export default BasicOverlay;