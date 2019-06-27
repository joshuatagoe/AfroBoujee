import Layout from '../components/Layout';
import Slider from '../components/Slider';
import List from '../components/List';

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
        return (
            <Layout>
            <Slider/>
            <List prods={true} items={items}/>
            <List prods={true} items={items}/>
            <h1>Welcome to this test App</h1>
            </Layout>
        )
    }

}

