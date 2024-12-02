import {css} from '@emotion/css'

const NavButton = ({children}) => {
    return(
        <button className={css`
            padding:15px;
            background-color:white;
            border:none;
            border-radius:10px;
            margin:5px;
            & a{
                color:black;
                text-decoration:none;
            }
            &:hover{
                background-color:lightgray;
                & a{
                    color:red;
                }
            }
            `}>{children}</button>
        )
}

export default NavButton
