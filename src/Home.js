import React from 'react';
import "./Home.css";
import Product from "./Product"

function Home() {
  return (
    <div className='home'>
        
        <div className='home__container'>
          <img className='home__image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"></img>
          
          
          <div className='home__row'>
              <Product title="The lean startup" 
              id="432709481"
              price={29.99} 
              image={"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"} 
              rating={5} />
              <Product 
                id="4538094"
                title={"Kenwook kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"}
                price={239.0}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
              />
          </div>

          <div className='home__row'>
            <Product 
              id="49042343"
              title={"Smart Watch Fitness Tracker com Monitor de Frequência  (Preto)"}
              rating={3}
              price={99.99}
              image="https://m.media-amazon.com/images/I/61Q8Bv4z7cS._AC_SL1500_.jpg"
            />
            <Product 
              id={"23445930"}
              title={"Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"}
              rating={5}
              price={98.99}
              image={"https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"}
            />
            
            <Product 
              id={"3254354345"}
              title={"New Apple iPad Pro (12.9-inch, Wi-fi, 128GB) - Silver (4th Generation)"}
              rating={4}
              price={589.99}
              image={"https://m.media-amazon.com/images/I/61sEJ2+OAbL._AC_SL1000_.jpg"}
            />
          </div>

          <div className='home__row'>
          <Product 
              id={"4903850"}
              title={"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"}
              price={199.99}
              rating={3}
              image="https://images.kabum.com.br/produtos/fotos/94935/monitor-gamer-samsung-qled-49-super-ultra-ampla-curvo-full-hd-hdmi-display-port-freesync-144hz-1ms-altura-ajustavel-lc49hg90dmlxzd_1628016050_gg.jpg"
            />
          </div>
        </div>
    </div>
  )
}

export default Home