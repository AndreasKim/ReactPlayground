import Navigation from './navigation/navigation';
import './header.css';

export default function Header() {
    return (
        <header>
            <div className="navigationBanner" style={{height:'230px', background: "url('/bg.jpg') top center repeat", backgroundSize:'cover' }}>
                <div className="container">
                   
                        <div className="float-md-left mt-4 pt-3 ml-3">
                            <div className="d-flex flex-column">
                                <div> <a href="~/"><img src="/logo2.png" asp-append-version="true" alt="Bebaki"/></a></div>
                                <div className="ml-1 pt-2 bigHeadingCursive text-light rotate"><h4>Scrap the usual, be baki!</h4></div>
                            </div>
                        </div>
                    
                    <div className="rhinoAnimation d-flex justify-content-end">
                        <img src="/rhino.png" asp-append-version="true" alt='Rhino'/>
                    </div>
                </div>
            </div>
            <Navigation />
        </header>
    );
}
