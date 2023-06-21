import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './AddPosComp.css';
import { FaPencilAlt } from 'react-icons/fa'
import { RiDeleteBin6Line } from 'react-icons/ri'

// import { FiEdit } from 'react-icons/fi';
import RightSection from './RightSection';
import ColorFulTable from './ColorFulTable';
import TotalPayableComp from './TotalPayableComp';
import OrderTax from './OrderTax';
import Discount from './Discount';
import ThirdInput from './ThirdInput';
import ViewComp from './ViewComp';
import AddCustomer from './AddCustomer';
import { useAddPurchaseCartMutation } from '../../all-products/allproductsApi/allProductsApi';
import axios from 'axios';

function AddPosComp() {
  const [viewCustomerD, setViewCustomerD] = useState();


  const handDown = async (e) => {
    if (e.key === 'Enter') {
      const clone = e.target.value
      try {
        const res = await axios.get(`https://onlineparttimejobs.in/api/user/search/${clone}`)
        setViewCustomerD(res.data)
        console.log('POSUsersList---', res.data)
      } catch (error) {
        alert('Some went wrong')
      }
    }
  }

  const [setCart, { isLoading, data: cartData, isError: isCartsError }] = useAddPurchaseCartMutation()


  return (
    <>
      <div className='main_pos_wrapper'>
        <div className='leftside'>
          <form>
            <div className='topInp'>

              <input type='text' name='user' placeholder='type here' onKeyDown={handDown}></input>

              <span className='bg-gray'>
                <button type='button'>
                  <FaPencilAlt />
                </button>
              </span>

              <ViewComp viewCustomerD={viewCustomerD} />
              <AddCustomer />

            </div>
            {/* {viewCustomerD && viewCustomerD.map((item, i) => {
              return <span style={{ backgroundColor: 'gainsboro', padding: '2px', marginTop: '2px', marginBottom: '2px', border: '1px solid black', display: 'block', width: '90%', cursor: 'pointer' }}>{item.firstname + " " + item.lastname}</span>
            })} */}

            <div className='secInp'>
              <select class="form-select" aria-label="Default select example">
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>

            <ThirdInput setCart={setCart} />
          </form>

          <div className='table_wrapper'>
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Subtotal</th>
                  <th>
                    <RiDeleteBin6Line />
                    {/* <button className='del-btn'>
                     
                    </button> */}
                  </th>
                </tr>
              </thead>
              <tbody style={{ height: '310px' }}>
                {cartData && cartData.map((item, i) => {
                  console.log('prodItem---', item)
                  return <tr>
                    <td style={{ display: 'table-cell' }}>
                      <span className='txt-bold ps-1'>{item.product?.name}</span>
                    </td>
                    <td className='txt-bold ps-1' style={{ display: 'table-cell' }}>{item.variant?.sale_rate}</td>
                    <td className='txt-bold ps-1' style={{ display: 'table-cell' }}>{item.qty}</td>
                    <td className='txt-bold ps-1' style={{ display: 'table-cell' }}>--</td>
                    <td className='txt-bold ps-1' style={{ display: 'table-cell' }}></td>
                  </tr>
                })}

              </tbody>
            </table>
            <table className='font-bold'>
              <tr>
                <td>Items</td>
                <td>0</td>
                <td>Total</td>
                <td className='text-right'>0.00</td>
              </tr>

              <tr>
                <OrderTax />
                <td>0.00</td>
                <Discount />
                <td className='text-right'>0.00</td>
              </tr>
            </table>

            <TotalPayableComp />
          </div>

          <ColorFulTable />

        </div>

        <RightSection />

      </div>
    </>
  )
}

export default AddPosComp