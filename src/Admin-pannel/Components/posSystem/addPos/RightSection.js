import React, { useState } from 'react';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import SellGiftCard from '../SellGiftCard';


function RightSection() {

    const [showBox, setShowBox] = useState(false);

   

    return (
        <>
            <div className='rightside'>

                <div className='list_wrapper'>
                    <ul>
                        <li onClick={() => setShowBox(true)}>Category</li>
                        <li onClick={() => setShowBox(true)}>Sub Category</li>
                        <li onClick={() => setShowBox(true)}>Brands</li>
                    </ul>
                </div>

                <div className={showBox ? 'categories-box active' : 'categories-box'}>
                    <div className='rel-box'>
                        <ul className='categ_prod_wrapper'>
                            <li>
                                <figure>
                                    <img src='https://grocer24.in/assets/uploads/thumbs/b263ca743860d688a77d0be30878ea5e.jpg'></img>
                                </figure>
                                <figcaption>
                                    <p>HYGINE</p>
                                </figcaption>
                            </li>
                            <li>
                                <figure>
                                    <img src='https://grocer24.in/assets/uploads/thumbs/b263ca743860d688a77d0be30878ea5e.jpg'></img>
                                </figure>
                                <figcaption>
                                    <p>HYGINE</p>
                                </figcaption>
                            </li>
                            <li>
                                <figure>
                                    <img src='https://grocer24.in/assets/uploads/thumbs/b263ca743860d688a77d0be30878ea5e.jpg'></img>
                                </figure>
                                <figcaption>
                                    <p>HYGINE</p>
                                </figcaption>
                            </li>
                            <li>
                                <figure>
                                    <img src='https://grocer24.in/assets/uploads/thumbs/b263ca743860d688a77d0be30878ea5e.jpg'></img>
                                </figure>
                                <figcaption>
                                    <p>HYGINE</p>
                                </figcaption>
                            </li>
                            <li>
                                <figure>
                                    <img src='https://grocer24.in/assets/uploads/thumbs/b263ca743860d688a77d0be30878ea5e.jpg'></img>
                                </figure>
                                <figcaption>
                                    <p>HYGINE</p>
                                </figcaption>
                            </li>
                            <li>
                                <figure>
                                    <img src='https://grocer24.in/assets/uploads/thumbs/b263ca743860d688a77d0be30878ea5e.jpg'></img>
                                </figure>
                                <figcaption>
                                    <p>HYGINE</p>
                                </figcaption>
                            </li>
                            <li>
                                <figure>
                                    <img src='https://grocer24.in/assets/uploads/thumbs/b263ca743860d688a77d0be30878ea5e.jpg'></img>
                                </figure>
                                <figcaption>
                                    <p>HYGINE</p>
                                </figcaption>
                            </li>
                            <li>
                                <figure>
                                    <img src='https://grocer24.in/assets/uploads/thumbs/b263ca743860d688a77d0be30878ea5e.jpg'></img>
                                </figure>
                                <figcaption>
                                    <p>HYGINE</p>
                                </figcaption>
                            </li>
                            <li>
                                <figure>
                                    <img src='https://grocer24.in/assets/uploads/thumbs/b263ca743860d688a77d0be30878ea5e.jpg'></img>
                                </figure>
                                <figcaption>
                                    <p>HYGINE</p>
                                </figcaption>
                            </li>
                            <li>
                                <figure>
                                    <img src='https://grocer24.in/assets/uploads/thumbs/b263ca743860d688a77d0be30878ea5e.jpg'></img>
                                </figure>
                                <figcaption>
                                    <p>HYGINE</p>
                                </figcaption>
                            </li>
                            <li>
                                <figure>
                                    <img src='https://grocer24.in/assets/uploads/thumbs/b263ca743860d688a77d0be30878ea5e.jpg'></img>
                                </figure>
                                <figcaption>
                                    <p>HYGINE</p>
                                </figcaption>
                            </li>
                        </ul>
                        <button type='button' onClick={() => setShowBox(false)} className='cross'>X</button>
                    </div>
                </div>

                <div className='self-card-scroll'>
                    {/* hello */}
                </div>

                <div className='sell-gift-card'>
                    <ul>
                        <li>
                            <button><AiFillCaretLeft /></button>
                        </li>

                        <SellGiftCard />

                        <li>
                            <button> <AiFillCaretRight /></button>
                        </li>

                    </ul>
                </div>

            </div>
        </>
    )
}

export default RightSection