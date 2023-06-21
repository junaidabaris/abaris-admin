import React, { useState } from 'react'
import { useGetPOSBrandByIdQuery, useGetPOSBrandsQuery } from '../all-products/allproductsApi/allProductsApi'

function POSBrands({ showBrandsBox, setShowBrandsBox }) {
    const [abc, setAbc] = useState(false);
    const [getPosBrandId, setGetPosBrandId] = useState();

    const { isLoading, data } = useGetPOSBrandsQuery();
    // console.log('PosBrandData-----', data);
    const { data: PosBrandData } = useGetPOSBrandByIdQuery(getPosBrandId);


    const showPosBrand = (id) => {
        setGetPosBrandId(id)
        setShowBrandsBox(false)
        setAbc(true)
    }

    return (
        <>
            <div className={showBrandsBox ? 'categories-box active' : 'categories-box'}>
                <div className='rel-box'>
                    <ul className='categ_prod_wrapper'>
                        {data && data.map((item, i) => {
                            return <li key={i} onClick={() => showPosBrand(item._id)}>
                                <figure>
                                    <img src={item.logo} alt='brand-image'></img>
                                </figure>
                                <figcaption>
                                    <p>{item.name}</p>
                                </figcaption>
                            </li>
                        })}
                    </ul>
                    <button type='button' onClick={() => setShowBrandsBox(false)} className='cross'>X</button>
                </div>
            </div>

            {abc && <div>
                <ul className='categ_prod_wrapper'>
                    {PosBrandData && PosBrandData.map((item, i) => {
                        return <li key={i} onClick={() => showPosBrand(item._id)}>
                            <figure>
                                <img src={item.mainimage_url?.url} alt='brand-image'></img>
                            </figure>
                            <figcaption>
                                <span>{item.name}</span>
                            </figcaption>
                        </li>
                    })}
                </ul>
            </div>}
        </>
    )
}

export default POSBrands