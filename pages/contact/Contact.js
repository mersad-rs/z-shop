import Layout from "@/containers/layout/Layout";
import { css } from "@emotion/css";
import { MdEmail } from "react-icons/md";
import { FaPhoneSquare } from "react-icons/fa";

const Contact = () => {
    return(
        <Layout>
            <div className={css`
                display:flex;
                justify-content:center
                `}>
                <img src="/contactbanner.jpg" className={css`
                    width:90%;
                    border-radius:30px;
                    `} alt="Contact Us Photo" />
            </div>
            <div className={css`padding:70px`}>
                <p>We’d love to hear from you! At Z-shop, your questions, comments, and feedback are important to us. Whether you have inquiries about our products, need assistance with an order, or just want to share your thoughts, we’re here to help.</p>
                <h2>Get in Touch</h2>
                <MdEmail /> <span className={css`font-size:20px;font-weight:bold`}>Email: </span><p> Reach out to us at z-shop@gmail.com . We aim to respond to all inquiries within 24 hours.</p>
                <FaPhoneSquare /> <span className={css`font-size:20px;font-weight:bold`}>Social Media: </span><p>Connect with us on Instagram and Facebook. Follow us for the latest updates, promotions, and behind-the-scenes looks at our designs!</p>
            
            </div>
        </Layout>
    )
}

export default Contact
