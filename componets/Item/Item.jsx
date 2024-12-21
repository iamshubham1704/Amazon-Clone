import React from 'react'
import "./item.css"
import Prize from '../Prize/Prize'


const Item = () => {

        const [showPrize, setShowPrize] = React.useState(false);
    
        const handlePrizeClick = () => {
            setShowPrize(Prize); // Set state to show the Prize section
        };

    return (
        <div>
            <div className="banner">
                <img src="/assets/item.jpg" alt="" />
            </div>

            <div className="items">
                <div className="box">
                    <p id="heading">Revamp your home in style</p>
                    <div className="grid">
                        <div className="item">
                            <img src="/assets/item(1).jpg" alt="Item 1" />
                            <p className="description">Cushion Cover Bedsheet and more</p>
                        </div>
                        <div className="item">
                            <img src="/assets/item(2).jpg" alt="Item 2" />
                            <p className="description">Vases</p>
                        </div>
                        <div className="item">
                            <img src="/assets/item(3).jpg" alt="Item 3" />
                            <p className="description">Home Storage</p>
                        </div>
                        <div className="item">
                            <img src="/assets/item(4).jpg" alt="Item 4" />
                            <p className="description">Lighting Solution</p>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <p id="heading">Explore more from Small Businesses</p>
                    <div className="grid">
                        <div className="item">
                            <img src="/assets/item(13).jpg" alt="Item 1" />
                            <p className="description">Ethnic Dresses</p>
                        </div>
                        <div className="item">
                            <img src="/assets/item(14).jpg" alt="Item 2" />
                            <p className="description">Decor</p>
                        </div>
                        <div className="item">
                            <img src="/assets/item(15).jpg" alt="Item 3" />
                            <p className="description">Fashion Accessorary</p>
                        </div>
                        <div className="item">
                            <img src="/assets/item(16).jpg" alt="Item 4" />
                            <p className="description">Glassware</p>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <p id="heading">Appliances for your home | Up to 55% off</p>
                    <div className="grid">
                        <div className="item">
                            <img src="/assets/item(5).jpg" alt="Item 1" />
                            <p className="description">AC</p>
                        </div>
                        <div className="item">
                            <img src="/assets/item(6).jpg" alt="Item 2" />
                            <p className="description">Fridge</p>
                        </div>
                        <div className="item">
                            <img src="/assets/item(7).jpg" alt="Item 3" />
                            <p className="description">Microwave</p>
                        </div>
                        <div className="item">
                            <img src="/assets/item(8).jpg" alt="Item 4" />
                            <p className="description">Washing Machine</p>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <p id="heading">Starting ₹149 | Headphones</p>
                    <div className="grid">
                        <div className="item">
                            <img src="/assets/item(9).jpg" alt="Item 1" />
                            <p className="description">Boat</p>
                        </div>
                        <div className="item">
                            <img src="/assets/item(10).jpg" alt="Item 2" />
                            <p className="description">Boult</p>
                        </div>
                        <div className="item">
                            <img src="/assets/item(11).jpg" alt="Item 3" />
                            <p className="description">Noise</p>
                        </div>
                        <div className="item">
                            <img src="/assets/item(12).jpg" alt="Item 4" />
                            <p className="description">Zerobics</p>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="items">
                <div className="box">
                    <p id="heading">Revamp your home in style</p>
                    <div className="grid">
                        <div className="item">
                            <img src="/assets/item(1).jpg" alt="Item 1" />
                            <p className="description">Cushion Cover Bedsheet and more</p>
                        </div>
                        <div className="item">
                            <img src="/assets/item(2).jpg" alt="Item 2" />
                            <p className="description">Vases</p>
                        </div>
                        <div className="item">
                            <img src="/assets/item(3).jpg" alt="Item 3" />
                            <p className="description">Home Storage</p>
                        </div>
                        <div className="item">
                            <img src="/assets/item(4).jpg" alt="Item 4" />
                            <p className="description">Lighting Solution</p>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <p id="heading">Explore more from Small Businesses</p>
                    <div className="grid">
                        <div className="item">
                            <img src="/assets/item(13).jpg" alt="Item 1" />
                            <p className="description">Ethnic Dresses</p>
                        </div>
                        <div className="item">
                            <img src="/assets/item(14).jpg" alt="Item 2" />
                            <p className="description">Decor</p>
                        </div>
                        <div className="item">
                            <img src="/assets/item(15).jpg" alt="Item 3" />
                            <p className="description">Fashion Accessorary</p>
                        </div>
                        <div className="item">
                            <img src="/assets/item(16).jpg" alt="Item 4" />
                            <p className="description">Glassware</p>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <p id="heading">Appliances for your home | Up to 55% off</p>
                    <div className="grid">
                        <div className="item">
                            <img src="/assets/item(5).jpg" alt="Item 1" />
                            <p className="description">AC</p>
                        </div>
                        <div className="item">
                            <img src="/assets/item(6).jpg" alt="Item 2" />
                            <p className="description">Fridge</p>
                        </div>
                        <div className="item">
                            <img src="/assets/item(7).jpg" alt="Item 3" />
                            <p className="description">Microwave</p>
                        </div>
                        <div className="item">
                            <img src="/assets/item(8).jpg" alt="Item 4" />
                            <p className="description">Washing Machine</p>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <p id="heading">Starting ₹149 | Headphones</p>
                    <div className="grid">
                        <div className="item">
                            <img src="/assets/item(9).jpg" alt="Item 1" />
                            <p className="description">Boat</p>
                        </div>
                        <div className="item">
                            <img src="/assets/item(10).jpg" alt="Item 2" />
                            <p className="description">Boult</p>
                        </div>
                        <div className="item">
                            <img src="/assets/item(11).jpg" alt="Item 3" />
                            <p className="description">Noise</p>
                        </div>
                        <div className="item">
                            <img src="/assets/item(12).jpg" alt="Item 4" />
                            <p className="description">Zerobics</p>
                        </div>
                    </div>
                </div>
                
            </div>

            <div className="photos">
                <p>Up to 60% off | Never before offers on kitchen products from emerging brands</p>
                <img onClick={handlePrizeClick} src="/assets/item(17).jpg" alt="" />
                <img src="/assets/item(18).jpg" alt="" />
                <img src="/assets/item(19).jpg" alt="" />
                <img src="/assets/item(20).jpg" alt="" />
                <img src="/assets/item(21).jpg" alt="" />
                <img src="/assets/item(22).jpg" alt="" />
                <img src="/assets/item(7).jpg" alt="" />
                <img src="/assets/item(6).jpg" alt="" />
                
            </div>
                       

            <div className="add">
                <img src="/assets/aaddd.jpg" alt="" />
            </div>

            <div className="photos">
                <p>Up to 60% off | Never before offers on kitchen products from emerging brands</p>
                <img id='longp' src="/assets/item(23).jpg" alt="" />
                <img src="/assets/item(24).jpg" alt="" />
                <img src="/assets/item(25).jpg" alt="" />
                <img src="/assets/item(26).jpg" alt="" />
                <img src="/assets/item(27).jpg" alt="" />
                <img id='longp' src="/assets/item(28).jpg" alt="" />
                
            </div>
        </div>

        
    )
}

export default Item