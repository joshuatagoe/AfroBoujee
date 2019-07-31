import React from 'react'
import Link from 'next/link'

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
                        <Link href="/dashboard">
                            <li>
                                Overview
                            </li>
                        </Link>
                        <Link href="/stores">
                            <li>
                                Stores
                            </li>
                        </Link>
                        <Link href="/orders">
                            <li>  
                                Orders
                            </li>
                        </Link>

                    </ul>  
                    <style jsx>{`
                        nav{
                        position:relative;
                        width: 100%;
                        border-bottom: 1px solid grey; /* This creates the border. Replace black with whatever color you want. */
                        margin-bottom: 2vh;
                        animation: enter 1s ease-in-out;
                        }

                        @keyframes enter{
                           0%{
                               transform: translateX(500px);
                           }
                           100%{
                               transform: translateX(0px);
                           }
                        }

                `}</style> 
                </nav>
            
        )
    }
}