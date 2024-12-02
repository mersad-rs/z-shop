import products from "../../containers/products/products.json"
import { css } from "@emotion/css"
import Layout from '../../containers/layout/Layout'
import Addbutton from '../../components/Addbutton/Addbutton'
import { useRouter } from "next/router"

const Prodes = () => {
    const router = useRouter();
    const {Image,Title,Description} = router.query

    return(
        <Layout>
        <div className={css`
            margin:50px;
            display:flex;
        `}>
            <img src={Image} alt="" width={500} className={css`border-radius:30px`} />
            <div className={css`
                text-align:center;
                padding:45px;    
            `}>
                <h1>{Title}</h1>
                <p>{Description}</p>
                <br /><br /><br />
                <Addbutton />
            </div>
        </div>
        </Layout>
    )
}

export default Prodes
