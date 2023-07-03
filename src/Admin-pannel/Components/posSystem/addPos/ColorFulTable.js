import React from 'react'
import Suspend from './Suspend'
import Order from './Order'
import Payment from './Payment'
import Cancel from './Cancel'
import Bill from './Bill'

function ColorFulTable({ showCombo, totalPosProductsPrice, bringedDiscountVal, bringedOrderTaxVal, totalPosProductsItem }) {
    return (
        <>
            <table className='colorfulTable'>
                <tr>
                    <Suspend />
                    <Order />
                    <Payment showCombo={showCombo} totalPosProductsPrice={totalPosProductsPrice} bringedDiscountVal={bringedDiscountVal} bringedOrderTaxVal={bringedOrderTaxVal} totalPosProductsItem={totalPosProductsItem} />
                </tr>
                <tr>
                    <Cancel />
                    <Bill showCombo={showCombo} totalPosProductsPrice={totalPosProductsPrice} />
                </tr>
            </table>
        </>
    )
}

export default ColorFulTable 