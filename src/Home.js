import React from 'react'
import './Home.css'
import Product from "./Product";

function Home() {
    return (
        <div className="home">
          <img  className ="home__image"
          src= "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Watches/GW/unrec/Nov/GW_PC_BUNK_watches1500x600_1._CB415712862_.jpg"
           alt="" />
 <div className="home__row"> 
           <Product
           id="12321"
           title="pTron Bassbuds True Wireless Bluetooth 5.0 Headphones"
           price={999.00}
           rating={5}
           image = "https://images-na.ssl-images-amazon.com/images/I/61HSxuSHiKL._SL1100_.jpg"
           
           />
           <Product
           id="12323"
           title=" Solimo Floral Foliage 144 TC 100% Cotton Double Bedsheet"
           price={599.00}
           rating={4}
           image = "https://m.media-amazon.com/images/I/A10JxZghPJL._AC_UL320_.jpg"
           
           />
         
           </div>
           <div className="home__row"> 
           <Product
           id="12325"
           title="Samsung 6.5 kg Fully-Automatic Top Loading Washing Machine"
           price={17999.00}
           rating={5}
           image = "https://images-eu.ssl-images-amazon.com/images/I/31UBEGn-OuL._AC_SX184_.jpg"
           
           />
           <Product
           id="12327"
           title="Echo Dot (4th Gen) | Next generation smart speaker with Alexa "
           price={5499.00}
           rating={5}
           image = "https://m.media-amazon.com/images/I/61KIy6gX-CL._AC_UY218_.jpg"
           
           />
         
         <Product
           id="12333"
           title="OnePlus 8T 5G (Aquamarine Green, 12GB RAM, 256GB Storage)"
           price={47999.00}
           rating={5}
           image = "https://m.media-amazon.com/images/I/71m05O2uNdL._AC_UY218_.jpg"
           
           />
           </div>
           <div className="home__row"> 
           <Product
           id="12331"
           title="Sony Bravia 164 cm (65 inches) 4K Ultra HD Smart Certified Android LED TV 65X9000H "
           price={162999.00}
           rating={5}
           image = "https://m.media-amazon.com/images/I/81rG-jy2suL._AC_UY218_.jpg"
           
           />
           </div>
           
           
           

        </div>
    )
}

export default Home
