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
                        nav{
                        width: 100%;
                        border-bottom: 1px solid grey; /* This creates the border. Replace black with whatever color you want. */
                        margin-bottom: 2vh;
                        }
                `}</style> 
                </nav>
            
        )
    }
}