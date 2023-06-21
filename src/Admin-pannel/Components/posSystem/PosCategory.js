import React, { useState } from 'react'
import { useGetPOSCategoryByIdQuery, useGetPOSCategoryQuery } from '../all-products/allproductsApi/allProductsApi'
import { Link } from 'react-bootstrap-icons';

function PosCategory({ bringPosCategoryId, showCategoryBox, setShowCategoryBox }) {
    const [abc, setAbc] = useState(false);
    const [getCategId, setGetCategId] = useState()

    const { isLoading, data } = useGetPOSCategoryQuery();
    const { data: categoryProducts } = useGetPOSCategoryByIdQuery(getCategId);
    // console.log('dataPosCateg-----------', data)

    const showProd = (id) => {
        bringPosCategoryId(id)
        setGetCategId(id)
        setShowCategoryBox(false)
        setAbc(true)
    }
    // console.log('categoryProducts-----===-----', categoryProducts)

    return (
        <>
            <div className={showCategoryBox ? 'categories-box active' : 'categories-box'}>
                <div className='rel-box'>
                    <ul className='categ_prod_wrapper'>
                        {data && data.map((item, i) => {
                            return <li key={i} onClick={() => showProd(item._id)}>
                                <figure>
                                    <img src={item.icon?.url}></img>
                                </figure>
                                <figcaption>
                                    <p>{item.name}</p>
                                </figcaption>
                            </li>
                        })}
                    </ul>
                    <button type='button' onClick={() => setShowCategoryBox(false)} className='cross'>X</button>
                </div>
            </div>

            {abc && <div>
                <ul className='categ_prod_wrapper'>
                    {categoryProducts && categoryProducts.map((item, i) => {
                        // console.log('item---', item)
                        return <li key={i} onClick={() => showProd(item._id)}>
                            <figure>
                                <img src={item.icon?.url}></img>
                            </figure>
                            <figcaption>
                                <p>{item.name}</p>
                            </figcaption>
                        </li>
                    })}
                </ul>
            </div>}
        </>
    )
}

export default PosCategory