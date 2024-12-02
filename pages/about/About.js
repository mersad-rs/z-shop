import Layout from '../../containers/layout/Layout'
import { css } from '@emotion/css'

const About = () => {
    return (
        <Layout>
            <div className={css`
                display:flex;
                justify-content:center
                `}>
                <img src='/aboutbanner.jpg' alt='About Us Photo' className={css`
                    width:90%;
                    border-radius:30px;`} />
            </div>
            <div className={css`padding:70px;`}>
                <p>Welcome to Z-shop, where creativity meets comfort! We are passionate about bringing you unique, high-quality t-shirts that express your individuality and style. Our mission is to provide a platform for self-expression through art and design, one shirt at a time.</p>
                <p>At Z-shop, we believe that a t-shirt is more than just a piece of clothing; it’s a canvas for your personality. Our diverse collection features designs that cater to all tastes, from bold graphics and witty slogans to minimalist art and custom creations. Whether you’re looking for something casual for everyday wear or a standout piece for a special occasion, we’ve got you covered.</p>
                <p>We take pride in our commitment to quality. Each t-shirt is made from soft, durable materials that ensure comfort and longevity. Our printing techniques are eco-friendly, so you can feel good about your purchase while making a statement.</p>
                <p>But we’re not just about t-shirts; we’re about community. We love collaborating with local artists and designers to showcase their talent and bring fresh ideas to our shop. We also value your feedback and encourage you to share your thoughts and suggestions with us.</p>
                <p>Thank you for choosing Z-shop. Join us on this journey of creativity and self-expression, and wear your story with pride!</p>
            </div>
        </Layout>
    )
}

export default About
