import React from "react";
import h from './Header.module.css';

const Header = () => {
    return (<header className={h.header}>
        < img
            src={'https://www.adobe.com/express/create/media_127a4cd0c28c2753638768caf8967503d38d01e4c.jpeg?width=400&format=jpeg&optimize=medium'} alt={'картинка'}
        /></header>)

}
export default Header;