import Link from 'next/link'
import Logo from './Logo'

export default class Navbar extends React.Component{

    render(){
        return (
                <nav>
                    <ul>
                        <Link href="/">
                            <li>
                                Home
                            </li>
                        </Link>
                        <Link href="/marketplace">
                            <li>
                                Marketplace
                            </li>
                        </Link>
                        <Link href="/login">
                            <li>
                                Login
                            </li>
                        </Link>
                        <Link href="/register">
                            <li>  
                                Register
                            </li>
                        </Link>

                    </ul>  
                    <style jsx>{`
                        nav:after {
                        position: absolute;
                        content: ""; /* This is necessary for the pseudo element to work. */ 
                        display: block; /* This will put the pseudo element on its own line. */
                        margin: 0 auto; /* This will center the border. */
                        width: 100%; /* Change this to whatever width you want. */
                        left: 0;
                        top:55px; /* This creates some space between the element and the border. */
                        border-bottom: 1px solid grey; /* This creates the border. Replace black with whatever color you want. */
                        }
                `}</style> 
                </nav>
            
        )
    }
}