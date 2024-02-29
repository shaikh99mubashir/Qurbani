import React from 'react'
import '../App.css';
import Header from '../components/header';
import Footer from '../components/footer';
import Tabs from '../components/tabs';
import Tab_1 from '../components/tab_1';

const Book = () => {
  return (
    <>
    <Header />
    <main className="book">
    <div className="container breadcrumb">
                <div className="container">
                    <p><a href="">Home</a> / Create Order</p>
                </div>
            </div>
            <div className="create_order">
                <h3 style={{textAlign: "center"}}>Book your Qurbani using <span>simple steps.</span></h3>
             </div>   
             <Tabs />     
             <Tab_1 />     
    </main>
    <Footer />
   </>
  )
}

export default Book