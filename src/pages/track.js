import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

const track = () => {
    return (
        <>
            <Header />
            <main class="book">
                <div class="container breadcrumb">
                    <div class="container">
                        <p><a href="">Home</a> / Track Order</p>
                    </div>
                </div>
                <div class="create_order">
                    <h3 style={{textAlign: "center"}}>Track your <span>order</span></h3>
                    <div class=" container">
                        <div class="track">
                            <form action="">
                                <div class="row">
                                    <div class="col-8">
                                        <input type="text" name="track" id="track" />
                                    </div>
                                    <div class="col-4">
                                        <input type="submit" value="Track Order" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
        </main>
            <Footer />
        </>
       );
}

export default track