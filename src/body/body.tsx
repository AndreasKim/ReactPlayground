import { useState } from 'react';
import './body.css';
import Carousel from './carousel/carousel';
import ProductCard from './products/productcard';
import Footer from './footer/footer';

export default function Body(){
  const [seller, setSeller] = useState("seller");
  const [buyer, setBuyer] = useState("buyer");
  const products = [
    { category: "Kunst", description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,", date: new Date(Date.UTC(2022, 6)), thumbnail: "/thumbnails/01.jpg" },
    { category: "Kunst", description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,", date: new Date(Date.UTC(2022, 5)), thumbnail: "/thumbnails/02.jpg" },
    { category: "Kunst", description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,", date: new Date(Date.UTC(2022, 1)), thumbnail: "/thumbnails/03.jpg" },
    { category: "Kunst", description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,", date: new Date(Date.UTC(2021, 2)), thumbnail: "/thumbnails/04.jpg" },
  ];
    return (
        <>
          <div className="container mt-4">
            <Carousel>
              <div className="carousel-item active">
                <img src="/tunnel.jpg" className="card-img-top" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="/lost-places.jpg" className="card-img-top" alt="..." />
              </div>
            </Carousel>
    
            <div className="container section w-100" style={{ background: "url('/bg.jpg') top center repeat" }}>
              <div className="row p-4">
                <div className="col-md-6 py-2">
                  <a href="seller"><img className={`seller ${seller}`} src="/seller2.jpg" alt="seller" asp-append-version="true"
                    onMouseOver={() => setSeller("animated pulse fast")}
                    onMouseOut={() => setSeller("seller")} /></a>
                </div>
                <div className="col-md-6 py-2">
                  <a href="buyer">
                    <img className={`buyer ${buyer}`} src="/buyer2.jpg" alt="buyer" asp-append-version="true"
                      onMouseOver={() => setBuyer("animated pulse fast")}
                      onMouseOut={() => setBuyer("buyer")} />
                  </a>
                </div>
              </div>
            </div>
    
            <div className="align-content-center text-center pt-4 pb-5">
              <h1 className="bigHeadingCursive">Unser Konzept</h1>
    
              <p style={{fontSize:'18px'}}>
                Wir vermitteln Euch an genau die richtigen Adressen! Von Kleinkünstler zum passenden Unternehmen und anders herum!<br />
                Die Reichweite ist hierbei der Schlüssel für jeden das individuelle Masterpiece zu bekommen.<br />
                Einzigartig macht uns dabei das Umdenken. Wir setzen auf Vielfalt statt Eintönigkeit! Abwechslung statt Alltag! <br />
                Verblüffung statt 08/15, denn mal so unter uns: Langweilig kann jeder.
              </p>
    
              <h1 className="bigHeadingCursive">Vorteile</h1>
              <p style={{fontSize:'18px'}}>
                Minimaler Aufwand- maximaler Erfolg! Beeindrucken Sie mit kreativen Unikaten.<br />
                Ob im Job, in der Familie oder bei Freunden! Begeistern Sie mit fabelhaften Dingen und sichern Sie sich eine schöne Zeit. <br />
                Wir übernehmen den Rest.<br />
              </p>
            </div>
          </div><div className="headingBarYellow mt-4">Trends, Neue Künstler</div>
    
          <div className="album py-5 bg-light">
            <div className="container">
              <div className="row">
                {
                  products.map((p, i) => <ProductCard key={i} description={p.description} category={p.category} creationdate={p.date} thumbnailPath={p.thumbnail} />)
                }
              </div>
            </div>
          </div>
          
          <Footer></Footer>
        </>
      );
}