import Image from "next/image"
import {css} from '@emotion/css'
import logo from '../../public/zshoplogo.jpeg'
import NavButton from "@/components/navButton/NavButton.jsx"
import Link from "next/link"

const Footer = () => {
    return(
        <div className={css`
            display:flex;
            align-items:center;
            justify-content:space-between;
            margin:10px;
            @media(max-width:500px){
                flex-direction:column;
            }
        `}>
            <div className={css`
                display:flex;
                align-items:center
                `}>
                <Image src={logo} width={200} height={200} alt='zshop' className={css`
                    border-radius:10px;
                `} />

                <ul className={css`list-style:none;`}>
                    <li><NavButton><Link href="/">Shop</Link></NavButton></li>
                    <li><NavButton><Link href="/about/About">About Us</Link></NavButton></li>
                    <li><NavButton><Link href="/contact/Contact">Contact Us</Link></NavButton></li>
                </ul>
            </div>
            <p className={css`
                width:40%;
                text-align:center;
                margin-right:10px;
                background-color:lightgray;
                padding:15px;
                border-radius:10px;
                &:hover{
                    background-color:silver;
                }
                @media(max-width:500px){
                    width:90%
                }
                `}>At Z-shop, we believe that fashion is a way to express yourself. Our curated collection features the latest trends and timeless classics, ensuring you find the perfect outfit for any occasion. With a commitment to quality and style, we aim to make every shopping experience enjoyable and memorable.</p>
        </div>
    )
}

export default Footer
