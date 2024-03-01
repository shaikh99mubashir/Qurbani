import React from 'react';
import sheep from '../img/sheep.png';
import goat from '../img/goat.png';

const tab_1 = () => {
    return (
        <>
            <div className="tab-1 delivery_info">
                <form method="post">
                    <div className="container fields">
                        <div className="row">

                            <div className="col-4">
                                <label for="">Delivery Country</label>
                                <select name="" id="">
                                    <option value="India">India</option>
                                </select>
                            </div>
                            <div className="col-4">
                                <label for="">Delivery City</label>
                                <select name="" id="">
                                    <option value="India">Mumbai</option>
                                    <option value="India">Delhi</option>
                                </select>
                            </div>
                            <div className="col-4">
                                <label for="">Delivery City</label>
                                <input type="date" name="delivery_date" id="delivery_date" />
                            </div>
                        </div>
                    </div>
                    <div className="container options">
                        <div className="row">
                            <div className="col-7">
                                <div className="step-1">
                                    <p className="step"><span>Step 1</span> Animal Type</p>
                                    <ul>
                                        <li><input className="check-animal" type="radio" name="test" id="cb1" />
                                            <label className="check-label" for="cb1"><img src={goat} alt="Goat Icon" /></label>
                                            <p>Goat</p>
                                        </li>
                                        <li><input className="check-animal" type="radio" name="test" id="cb2" />
                                            <label className="check-label" for="cb2"><img src={sheep} alt="Sheep Icon" /></label>
                                            <p>Sheep</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="step-2">
                                    <p className="step"><span>Step 2</span> Animal Origin</p>

                                    <input type="radio" id="radio1" name="radioGroup" />
                                        <label className="radio-label" for="radio1">Rajasthan</label>
                                </div>
                                <div className="step-3">
                                    <p className="step"><span>Step 4</span> Quantity</p>
                                    <div className="quantity-container">
                                
                                        <div className="quantity-control decrement" onclick="decrementQuantity()">
                                            <i className="fas fa-minus"></i>
                                        </div>


                                        <input type="number" className="quantity-input" value="1" min="1" max="10" />

                                      
                                            <div className="quantity-control increment" onclick="incrementQuantity()">
                                                <i className="fas fa-plus"></i>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-5">
                                <div className="step-2">
                                    <p className="step"><span>Step 3</span> Available Options (Sheep)</p>
                                    <div className="row space-between">
                                        <div className="col-6">
                                            <input type="radio" id="radio2" name="Weight" />
                                                <label className="radio-label" for="radio2">100 KG </label>
                                        </div>
                                        <div className="col-6">
                                            <div className="cal-price">
                                                Rs 37,976.36
                                            </div>
                                        </div>
                                    </div>
                                    <div className="total-price text-center">
                                        Total : Rs 37,976.36
                                    </div>
                                    <div className="proceed">
                                        <button type="submit">Proceed</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default tab_1