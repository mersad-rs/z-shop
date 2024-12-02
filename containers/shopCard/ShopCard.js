import {css} from '@emotion/css'
import { FaArrowRight } from "react-icons/fa";
import Addbutton from '@/components/Addbutton/Addbutton';
import Link from 'next/link';


const ShopCard = ({children,src,href}) => {
    return(
        <div className={css`width:40%;
            text-align:center;
            padding:20px;
            background-color:lightgray;
            margin:40px;
            border-radius:10px;
            border:solid 2px black;
            box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
        `}>
            <img src={src} alt='not loaded' className={css`border-radius:10px;width:100%`} />
            {children}
            <div className={css`display:flex;align-items:center;justify-content:end;`}>
                <Link href={href} className={css`
                    color:blue;
                    text-decoration:none;
                    margin-right:2px;
                    &:hover{
                        margin-right:5px;
                        transition-duration:300ms;
                    }
                    `}>Read More </Link><FaArrowRight />
            </div>
                <Addbutton></Addbutton>
        </div>
    )
}

export default ShopCard
