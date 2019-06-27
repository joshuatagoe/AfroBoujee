import Layout from '../components/Layout';
import Slider from '../components/Slider';
import List from '../components/List';
import AboutMini from '../components/AboutMini';
import BenefitsMini from '../components/BenefitsMini';
import FooterInfo from '../components/FooterInfo';


export default class Index extends React.Component{
    render(){
        const items = [
            {
                "price": "10.00",
                "detailed": false,
                "src" : "https://www.w3schools.com/howto/img_avatar2.png"
            },
            {
                "price": "10.00",
                "detailed": false,
                "src" : "https://www.w3schools.com/howto/img_avatar2.png"
            },
            {
                "price": "10.00",
                "detailed": false,
                "src" : "https://www.w3schools.com/howto/img_avatar2.png"
            },
            {
                "price": "10.00",
                "detailed": false,
                "src" : "https://www.w3schools.com/howto/img_avatar2.png"
            },
            {
                "price": "10.00",
                "detailed": false,
                "src" : "https://www.w3schools.com/howto/img_avatar2.png"
            }
        ]

        const blogs = [
            {
                "title" : "Blog Title",
                "category" : "Blog Category",
                "description": "BLOG DESCRIPTION BLOG DESCRIPTION BLOG DECRIPTION BLOG DESCRIPTION BLOG DESCRIPTION BLOG DESCRIP......",
                "src" : "https://www.w3schools.com/howto/img_avatar2.png"
            },
            {
                "title" : "Blog Title",
                "category" : "Blog Category",
                "description": "BLOG DESCRIPTION BLOG DESCRIPTION BLOG DECRIPTION BLOG DESCRIPTION BLOG DESCRIPTION BLOG DESCRIP......",
                "src" : "https://www.w3schools.com/howto/img_avatar2.png"
            },
            {
                "title" : "Blog Title",
                "category" : "Blog Category",
                "description": "BLOG DESCRIPTION BLOG DESCRIPTION BLOG DECRIPTION BLOG DESCRIPTION BLOG DESCRIPTION BLOG DESCRIP......",
                "src" : "https://www.w3schools.com/howto/img_avatar2.png"
            }
            
        ]
        return (
            <Layout>
            <Slider/>
            <List prods={true} items={items}/>
            <List prods={true} items={items}/>
            <List blogs={true} items={blogs}/>
            <AboutMini/>
            <BenefitsMini/>
            <FooterInfo/>
            </Layout>
        )
    }

}

