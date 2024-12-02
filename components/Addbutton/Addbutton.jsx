import {useState , useContext} from 'react'
import {css} from '@emotion/css'

const Addbutton = () => {
    
    const addCartBtn = (event) => {
        event.target.innerText = "Added To Cart"
    }

    return(
        <button className={css`
                width:100%;
                padding:10px;
                border-radius:10px;
                border:none;
                background-color:silver;
                margin-top:4px;
                &:hover{
                    background-color:gray;
                    color:white;
                }
            `} onClick={addCartBtn}>Add To Cart</button>
    )
}

export default Addbutton
