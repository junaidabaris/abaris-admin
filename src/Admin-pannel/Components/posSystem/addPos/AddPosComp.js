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

function AddPosComp() {



  return (
    <>
      <div className='main_pos_wrapper'>
        <div className='leftside'>
          <form>
            <div className='topInp'>
              <input type='text' placeholder='type here'></input>

              <span className='bg-gray'>
                <button type='button'>
                  <FaPencilAlt />
                </button>
              </span>

              <ViewComp />
              <AddCustomer />
            </div>

            <div className='secInp'>
              <select class="form-select" aria-label="Default select example">
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>

            <ThirdInput />
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
              <tbody className='fixedheight'>
                <div className='fixedheight'>
                  jjj
                </div>
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