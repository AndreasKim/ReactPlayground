import { useState } from 'react';
import './usernavigation.css';

export default function UserNavigation() {
    const [message, setMessage] = useState("d-none");

    return (
        <div className="row">
            <div className="notification px-2">
                <a href="/cart">
                    <i className="fas fa-shopping-cart iconSize"></i>
                </a>
                <span className="fa-stack badge">
                    <i className="fa fa-circle badgeCircle pt-1"></i>
                    <strong className="fa-stack-1x text-primary">3</strong>
                </span>
            </div>
            <a className="px-2 h-100" href="messages/" 
                onMouseOver={() => setMessage("animated fadeIn pl-3 d-inline align-top")}
                onMouseOut={() => setMessage("pl-3 d-none")}
            ><i className="fas fa-envelope iconBigSize"></i><div className={message}>Nachrichten</div></a>
            <a href="Identity/Account/Manage" className="px-3 link"><i className="fas fa-user-circle iconBigSize"></i></a>
        </ div>
    )
}
