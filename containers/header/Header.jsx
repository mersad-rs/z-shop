import NavButton from '../../components/navButton/NavButton.jsx'
import { RiShoppingCartFill } from "react-icons/ri";
import {css} from '@emotion/css'
import Image from 'next/image';
import logo from '../../public/zshoplogo.jpeg'
import Link from 'next/link'


const Header = () => {

    return(
        <div className={css`
        display:flex;
        align-items:center;
        justify-content:space-between;
        margin:3px;
        `}>
            <Image src={logo} width={60} height={60} alt='zshop' className={css`
                border-radius:10px;
                &:hover{
                    width:55px;
                    height:55px;
                    padding:2.5px;
                }
                `} />
            <div>
                <NavButton><Link href="/">Shop</Link></NavButton>
                <NavButton><Link href="/about/About">About Us</Link></NavButton>
                <NavButton><Link href="/contact/Contact">Contact Us</Link></NavButton>
            </div>
            <div  className={css`
                font-size:25px;
                display:flex;
                justify-content:center;
                align-items:center;
                width:100px;
                height:30px;
                color:black;
                background-color:white;
                padding:15px;
                border-radius:10px;
                &:hover{
                    background-color:lightgray;
                    color:red;
                }
                `}>
                <RiShoppingCartFill />
            </div>
        </div>
    )
}

export default Header
