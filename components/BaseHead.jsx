import Link from 'next/link';
import Logo from './Logo'


export default class BaseHead extends React.Component{

    render(){
        return (
            <div className="base">
                <div>PHONE</div>
                <div>HELP</div>
                <div>COUNTRY</div>
                <div>CURRENCY</div>
                <div>LANGUAGE</div>
                <style jsx>{`
                        .base{
                            display: flex;
                            justify-content: flex-end;
                            justify-content: flex-end;
	                        background-color: #f1f1f1;
                            height: 5vh;
                        }
                        .base > div{
                            padding: 2vh 4px;
                            text-align: center;
                            font-size: .8rem;
                        }
                    `}</style>
            </div>
        )
    }
}