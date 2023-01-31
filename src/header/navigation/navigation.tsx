import { useEffect, useState } from 'react';
import './navigation.css';
import UserNavigation from './usernavigation';

export default function Navigation() {
    const [navClass, setNavClass] = useState("d-none");
    const [logoAnim, setLogoAnim] = useState("d-none");

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 230)
            {
                setNavClass("fixed-top block");
                setLogoAnim("animated jackInTheBox");
            }
            if (window.scrollY < 230)
            {
                setNavClass("d-none");
                setLogoAnim("d-none");
            }
        }

        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    
    return (
        <nav className={`site-header float-top ${navClass} d-lg-block`}>
            <div className="container">
                <div className="row clearfix">
                    <div className="col-md container d-flex flex-md-row justify-content-between">

                        <img className={`py-2 ${logoAnim} d-md-inline-block`} src="/logo-small.png" alt="Bebaki" height="35x"/>

                        <a className="py-2 d-none d-md-inline-block" href="#">Products</a>
                        <a className="py-2 d-none d-md-inline-block" href="#">About</a>
                        <a className="py-2 d-none d-md-inline-block" href="#">Cart</a>

                    </div>
                    <div className=" col-md container d-flex flex-md-row-reverse justify-content-between" >
                        <div className="py-2 d-none d-md-inline-block">
                            <UserNavigation></UserNavigation>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

