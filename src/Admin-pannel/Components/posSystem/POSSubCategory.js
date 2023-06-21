import React from 'react'
import { useGetPOSSubCategoryIdQuery } from '../all-products/allproductsApi/allProductsApi'

function POSSubCategory({ sendPoscategoryId, showSubCategoryBox, setShowSubCategoryBox }) {

    const { data } = useGetPOSSubCategoryIdQuery(sendPoscategoryId);
    console.log('subCatttttD-----', data)

    return (
        <>
            <div className={showSubCategoryBox ? 'categories-box active' : 'categories-box'}>
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
                    </ul>
                    <button type='button' onClick={() => setShowSubCategoryBox(false)} className='cross'>X</button>
                </div>
            </div>
        </>
    )
}

export default POSSubCategory