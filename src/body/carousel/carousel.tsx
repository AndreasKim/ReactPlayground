import { Carousel } from 'bootstrap';
import { useEffect, useState } from 'react';


export default function CarouselElement(props: any){
    const [carousel, setCarousel] = useState<Carousel>();

    useEffect(() => {
        const myCarouselElement = document.querySelector('#carouselExampleIndicators') ?? "";
        setCarousel(new Carousel(myCarouselElement, {
            interval: 10000,
        }));
    }, [setCarousel]);

    return (
        <div className="justify-content-center mb-4">
            <div id="carouselExampleIndicators"
                className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                </ol>
                <div className="carousel-inner">
                    {props.children}
                </div>
                <a id="carouselExampleIndicators-prev"
                    
                    className="carousel-control-prev" role="button" data-slide="prev" onClick={e => { e.preventDefault(); carousel?.prev(); }}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a id="carouselExampleIndicators-next"
                    
                    className="carousel-control-next" role="button" data-slide="next" onClick={e => { e.preventDefault(); carousel?.next(); }}>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
}
