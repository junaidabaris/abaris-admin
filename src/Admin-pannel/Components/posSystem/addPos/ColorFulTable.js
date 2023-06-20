import React from 'react'
import Suspend from './Suspend'
import Order from './Order'
import Payment from './Payment'
import Cancel from './Cancel'
import Bill from './Bill'

function ColorFulTable() {
    return (
        <>
            <table className='colorfulTable'>
                <tr>
                    <Suspend />
                    <Order />
                    <Payment />
                </tr>
                <tr>
                    <Cancel />
                    <Bill />
                </tr>
            </table>
        </>
    )
}

export default ColorFulTable 