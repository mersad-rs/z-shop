import Layout from "../containers/layout/Layout";
import {css} from '@emotion/css'
import ShopCard from "@/containers/shopCard/ShopCard";
import Carousel from "@/components/carousel/Carousel";
import products from '../containers/products/products.json'

const Shop = () => {
    return(
        <Layout>
            <div className={css`
                margin:10px;
                `}>
                <Carousel></Carousel>
            </div>
            <div className={css`
                    display:flex;
                    flex-wrap:wrap;
                    justify-content:center;
                `}>

                {products.map((item) => (
                    <ShopCard src={item.Image} href={{
                        pathname : '/prodes/Prodes',
                        query:item
                    }}>
                    <h2>{item.Title}</h2>
                    <p>{item.Description}</p>
                    </ShopCard>
                ))}
            </div>
            <hr />
        </Layout>
    )
}

export default Shop
