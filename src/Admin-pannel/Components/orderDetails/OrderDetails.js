import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import {
  useAddOrderStatusMutation,
  useGetOrderDetailQuery,
  useGetOrderStartByIdQuery,
} from "../all-products/allproductsApi/allProductsApi";
import Spinner from "react-bootstrap/Spinner";
import ToggleStatus from "../toggleStatus/ToggleStatus";
import PodEnteris from "./podEnteris/PodEnteris";
import axios from "axios";
function OrderDetails() {
  const [modalShow, setModalShow] = useState(false);
  const invoice = window.localStorage.getItem("invoice");
  const isPickupManagerId = window.localStorage.getItem("isPickupManagerId");
  const adminId = window.localStorage.getItem("adminId");

  const param = useParams();
  const [inputVal, setInputVal] = useState({
    orderId: param.id,
    orderStatusId: "6423edb20944088884f88cca",
    Note: "",
    userid: "641eabc2be788d5482d2f9cc",
  });

  const onChangehandler = (e) => {
    const inVal = e.target.value;
    const inpName = e.target.name;
    const clone = { ...inputVal };
    clone[inpName] = inVal;
    setInputVal(clone);
  };
  const [addorderStD, resp] = useAddOrderStatusMutation();

  const submitOrderStd = () => {
    addorderStD(inputVal);
    setInputVal({
      orderId: param.id,
      orderStatusId: "",
      Note: "",
      userid: "641eabc2be788d5482d2f9cc",
    })
  };

  const { data, isSuccess, isLoading, error } = useGetOrderDetailQuery(param.id);
  const { data: orderStatusD } = useGetOrderStartByIdQuery();

  const toastSuccessMessage = () => {
    toast.success("Order Status Updated Successfully", {
      position: "top-center",
    });
  };

  useEffect(() => {
    if (resp.isSuccess === true) {
      toastSuccessMessage();
    }
    if (resp.isError === true) {
      alert("!Order Status not Updated");
    }

  }, [resp.isSuccess, resp.isError])


  const [pickups, setPickups] = useState(null)

  const getPickupPoint = async () => {
    try {
      const res = await axios.get(`https://onlineparttimejobs.in/api/pickupPoints`)
      setPickups(res.data)
    } catch (error) {
      alert('Server Error Fail to load pickup Points')
    }
  }
  useEffect(() => {
    getPickupPoint()
  }, [])

  const isSuperAdminLogin = window.localStorage.getItem('adminId')
  const isLogin = window.localStorage.getItem('showMainadmin')

  const [pickupData, setpickupData] = useState({
    pickupPoints: '6412fbd218fa66a37ed430d1',
    pickupPointManager: "6421e82ad69379b8d16c3608",
    staffid: isSuperAdminLogin,
    orderId: param.id,
    note: ""
  })

  const handelChange = (e) => {
    const clone = { ...pickupData }
    const val = e.target.value

    if (e.target.name === 'managerId') {
      const obj = pickups.find((item) => {
        if (item.pickupPoint_name === val) {
          return item
        }

      })

      if (obj?.pickUpManagerSchema === null) {
        const obj3 = { ...pickupData, pickupPointManager: undefined, pickupPoints: obj._id }
        setpickupData(obj3)
      } else {
        const obj2 = { ...pickupData, pickupPointManager: obj?.pickUpManagerSchema._id, pickupPoints: obj._id }
        setpickupData(obj2)
      }


    } else {
      clone[e.target.name] = e.target.value
      setpickupData(clone)
    }

  }



  const sendAssign = async () => {
    try {
      const res = await axios.post(`https://onlineparttimejobs.in/api/orderStatusTransaction/add_OrderStatusTrans`, pickupData)
      alert('Assign To PickUp Point Manager Successfully')
    } catch (error) {
      alert('Faild To Assign PickUp Point Manager !!')
    }
  }





  // DELEVERY BOY

  const [dataBoy, setdataBoy] = useState(null)

  const [boyBody, setBoyBody] = useState({
    orderId: param.id,
    deliveryBoy: '',
    staff_id: adminId ? adminId : isPickupManagerId,
    note: ""
  })

  const getData = async () => {
    const res = await axios.get(`https://onlineparttimejobs.in/api/deliveryBoy`)
    setdataBoy(res.data)
  }

  useEffect(() => {
    getData()
  }, [])


  const changeHandleBoy = (e) => {

    const clone = { ...boyBody }
    console.log(e.target.value);

    if (e.target.name === 'deliveryBoy') {
      const obj2 = { ...boyBody, deliveryBoy: e.target.value }
      setBoyBody(obj2)

    } else {
      clone[e.target.name] = e.target.value
      setBoyBody(clone)
    }
  }

  const sendAssignBoy = async () => {
    console.log(boyBody);
    try {
      const res = await axios.post('https://onlineparttimejobs.in/api/assignDeliveryBoy/add_AssignDeliveryBoy', boyBody)
      alert('Assign To Delevery Boy Successfully')
    } catch (error) {
      alert('Assign To Delevery Boy Failed')
    }
  }


  return (
    <>
      {isLoading && (
        <Spinner animation="border" role="status" className="d-block" style={{ marginLeft: 15 + "px" }}>
          <span className="visually-hidden " >
            Loading...
          </span>
        </Spinner>
      )}

      {isSuccess && (
        <div className="aiz-main-content">
          <div className="px-15px px-lg-25px">
            <div className="card">
              <div className="row">
                <div className="col-lg-6">
                  <div className="card-header topCardHeader">
                    <h6 className="mb-0">
                      Order No - {data?.getaOrderById?.order_referenceNo}
                    </h6>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card-header topCardHeader">
                    <h6 className="mb-0 order-creation-d">
                      Order Created On - {data?.getaOrderById?.createdAt}
                    </h6>
                  </div>
                </div>
              </div>

              <div className="row p-3">
                <div className="col-lg-6">
                  <h6 className="heading-wrapper">General</h6>
                  <div className="p-3 orderStatus">
                    <div className="d-flex align-items-center form-group">
                      <label htmlFor="update_delivery_status">
                        Order Status :
                      </label>
                      <select
                        className="form-select"
                        name="orderStatusId"
                        aria-label="Default select example"
                        defaultValue={""}
                        onChange={onChangehandler}

                        style={{ height: 38 + "px", fontSize: 13 + "px" }}>

                        {orderStatusD &&
                          orderStatusD.map((item, i) => {
                            return (
                              <option value={item._id} key={i}>
                                {item.orderStatusName}
                              </option>
                            );


                          })}
                      </select>
                    </div>

                    <div className="small-text-wraper">
                      <div className="customerName">
                        Customer Name:{" "}
                        <span>
                          {data?.getaOrderById?.user?.firstname + " " +
                            data?.getaOrderById?.user?.lastname}
                        </span>
                      </div>
                    </div>


                    {isLogin === 'true' && <div className="assignPickup">
                      <h6>Assign To PickUp Point</h6>
                      <div className="d-flex align-items-center form-group">
                        <label htmlFor="update_delivery_status">
                          PickUp Manager :
                        </label>
                        <select
                          className="form-select"
                          name="managerId"
                          aria-label="Default select example"
                          defaultValue={""}
                          onChange={handelChange}

                          style={{ height: 38 + "px", fontSize: 13 + "px" }}>

                          {pickups && pickups.map((item) => {
                            return <option key={item._id} id={item._id} >
                              {item.pickupPoint_name}
                            </option>
                          })}

                        </select>
                      </div>

                      <h6>Note..</h6>
                      <div className="form-floating" style={{ margin: "8px 0" }}>
                        <textarea name="note" onChange={handelChange} className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                      </div>

                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={sendAssign}
                      >
                        Send
                      </button>

                    </div>}








                  </div>
                  <div className="btn-wrapper">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => setModalShow(true)}
                    >
                      POD Entry
                    </button>

                  </div>
                  <PodEnteris
                    show={modalShow}
                    data={data}
                    onHide={() => setModalShow(false)}
                  />
                </div>
                <div className="col-lg-6">
                  <h6 className="heading-wrapper">Order Notes</h6>
                  <div className="form-group mt-3">
                    <textarea
                      className="form-control"
                      placeholder="Add Note"
                      name="Note"
                      rows={2}
                      onChange={onChangehandler}
                      value={inputVal.Note}
                    ></textarea>
                  </div>
                  <div className="toggle-wrapper">
                    <ToggleStatus />
                    <span>Send to Customer</span>
                  </div>
                  <div className="btn-wrapper">
                    <button
                      type="button"
                      onClick={submitOrderStd}
                      className="btn btn-primary"
                    >
                      Submit
                    </button>
                  </div>


                  {/* DELEVRY BOY */}

                  {isLogin === 'true' && <div className="assignPickup">
                    <h6>Assign To Delevery Boy</h6>
                    <div className="d-flex align-items-center form-group">
                      <label htmlFor="update_delivery_status">
                        Delevery Boy:
                      </label>
                      <select
                        className="form-select"
                        name="deliveryBoy"
                        aria-label="Default select example"
                        defaultValue={""}
                        onChange={changeHandleBoy}
                        style={{ height: 38 + "px", fontSize: 13 + "px" }}>
                        <option>Select Delevery Boy</option>
                        {dataBoy && dataBoy.map((item) => {
                          return <option key={item._id} id={item._id} value={item._id}>
                            {item.firstname} {item?.lastname}
                          </option>
                        })}

                      </select>
                    </div>

                    <h6>Note..</h6>
                    <div className="form-floating" style={{ margin: "8px 0" }}>
                      <textarea name="note" onChange={changeHandleBoy} className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                    </div>

                    <div style={{ display: "flex", justifyContent: "end" }}>
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={sendAssignBoy}
                      >
                        Send
                      </button>
                    </div>

                  </div>}




                </div>

                {/* Billing */}
                <div className="col-md-4">
                  <div className="addressDetailSec">
                    <div className="addressDetailInfo">
                      <h6 className="heading-wrapper">Billing Address</h6>
                      {/* { data?.getaOrderById?.btype === "billing" && ()} */}
                      <ul>
                        <li>
                          <strong>Address Line 1:</strong>
                          <span>{data?.getaOrderById?.billingAddress?.baddressLine1}</span>
                        </li>
                        <li>
                          <strong> Address Line 2: </strong>
                          <span>{data?.getaOrderById?.billingAddress?.baddressLine2}</span>
                        </li>
                        <li>
                          <strong>Province:</strong>
                          <span>{data?.getaOrderById?.billingAddress?.bprovince}</span>
                        </li>


                        <li>
                          <strong>ZIP:</strong>
                          <span>{data?.getaOrderById?.billingAddress?.bzip}</span>
                        </li>
                        <li>
                          <strong>City:</strong>
                          <span>{data?.getaOrderById?.billingAddress?.bcity}</span>
                        </li>
                        <li>
                          <strong> State:</strong>
                          <span>{data?.getaOrderById?.billingAddress?.bstate}</span>
                        </li>
                        <li>
                          <strong>Country:</strong>
                          <span>{data?.getaOrderById?.billingAddress?.bcountry}</span>
                        </li>


                        {/* <li>
                            <strong>Company*:</strong>
                            {data?.getaOrderById?.bcompany}
                          </li> */}
                      </ul>
                    </div>
                  </div>
                </div>

                {data?.getaOrderById?.products[0]?.deliveryType === "HOME DELIVERY" ? (
                  <div className="col-md-4">
                    <div className="addressDetailSec">
                      <div className="addressDetailInfo">
                        <h6 className="heading-wrapper">Shipping Address</h6>
                        <ul>
                          <li>
                            <strong>Address Line 1:</strong>
                            {/* <span>{data?.getaOrderById?.shippingAddress_save?.addressLine1}</span> */}
                            {data?.getaOrderById?.shippingAddress_save?.addressLine1}
                          </li>
                          <li>
                            <strong> Address Line 2: </strong>
                            {/* <span>{data?.getaOrderById?.shippingAddress_save?.addressLine2}</span> */}
                            {data?.getaOrderById?.shippingAddress_save?.addressLine2}

                          </li>
                          <li>
                            <strong>City:</strong>
                            <span>
                              {data?.getaOrderById?.shippingAddress_save?.city ? data?.getaOrderById?.shippingAddress_save?.city : data?.getaOrderById?.billingAddress?.city}
                            </span>
                          </li>
                          <li>
                            <strong> State:</strong>
                            {/* <span>{data?.getaOrderById?.shippingAddress_save?.state}</span> */}
                            <span>{data?.getaOrderById?.shippingAddress_save?.state ? data?.getaOrderById?.shippingAddress_save?.state : data?.getaOrderById?.billingAddress?.state}</span>

                          </li>
                          <li>
                            <strong>Province:</strong>
                            {/* <span>{data?.getaOrderById?.shippingAddress_save?.province}</span> */}
                            <span>{data?.getaOrderById?.shippingAddress_save?.province ? data?.getaOrderById?.shippingAddress_save?.province : data?.getaOrderById?.billingAddress?.province}</span>

                          </li>

                          <li>
                            <strong>Country:</strong>
                            {/* <span>{data?.getaOrderById?.shippingAddress_save?.country}</span> */}
                            <span>{data?.getaOrderById?.shippingAddress_save?.country ? data?.getaOrderById?.shippingAddress_save?.country : data?.getaOrderById?.billingAddress?.country}</span>

                          </li>

                          <li>
                            <strong>Name:</strong>
                            <span>{data?.getaOrderById?.shippingAddress_save?.firstname + " " + data?.getaOrderById?.shippingAddress_save?.lastname}</span>


                          </li>
                          <li>
                            <strong>Email:</strong>
                            <span>{data?.getaOrderById?.shippingAddress_save?.email ? data?.getaOrderById?.shippingAddress_save?.email : data?.getaOrderById?.billingAddress?.email}</span>


                          </li>
                          <li>
                            <strong>Phone:</strong>
                            <span>{data?.getaOrderById?.shippingAddress_save?.phone ? data?.getaOrderById?.shippingAddress_save?.phone : data?.getaOrderById?.billingAddress?.phone}</span>

                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ) :
                  <div className="col-md-4">
                    <div className="addressDetailSec">
                      <div className="addressDetailInfo">
                        <h6 className="heading-wrapper">Pickup Point Address</h6>
                        <ul>

                          <li>
                            <strong>PickUp Point Name:</strong>
                            <span>{data?.getaOrderById.pickupAddress?.pickupPoint_name}</span>

                          </li>
                          <li>
                            <strong>PickUp Point sManager:</strong>
                            {/* <span>{data?.getaOrderById.pickupAddress?.pickUpManagerSchema}</span> */}

                          </li>
                          <li>
                            <strong>Address:</strong>
                            <span>{data?.getaOrderById.pickupAddress?.address}</span>
                          </li>
                          {/* <li>
                            <strong> Location : </strong>
                            <span>{data?.getaOrderById.pickupAddress?.location}</span>

                          </li> */}
                          <li>
                            <strong>Province:</strong>
                            <span>{data?.getaOrderById.pickupAddress?.province}</span>

                          </li>
                          <li>
                            <strong> Phone:</strong>
                            <span>{data?.getaOrderById.pickupAddress?.phone}</span>

                          </li>
                          <li>
                            <strong>Email:</strong>
                            <span>{data?.getaOrderById.pickupAddress?.email}</span>

                          </li>


                          {/* <li>
                            <strong>PickUp Point Status:</strong>
                            <span>{data?.getaOrderById.pickupAddress?.pickUpPointStatus}</span>

                          </li> */}
                          {/* <li>
                            <strong>PickUp Manager Schema:</strong>
                            <span>{data?.getaOrderById.pickupAddress?.pickUpManagerSchema}</span>

                          </li> */}
                        </ul>

                      </div>
                    </div>
                  </div>
                }

                <div className="col-md-4">
                  <div className="addressDetailSec">
                    <div className="addressDetailInfo">
                      <h6 className="heading-wrapper">Seller Address</h6>
                      <ul>

                        <li>
                          <strong>Seller Name:</strong>
                          <span>{data?.getaOrderById?.Seller[0]?.firstname} {data?.getaOrderById?.Seller[0]?.lastname}</span>

                        </li>
                        <li>
                          <strong>Seller Company Name</strong>
                          <span>jk</span>
                        </li>

                        <li>
                          <strong>Address Line 1</strong>
                          <span>k</span>

                        </li>
                        <li>
                          <strong>Address line 2,</strong>
                          <span>ad</span>

                        </li>
                        <li>
                          <strong>City</strong>
                          <span>ads</span>

                        </li>
                        <li>
                          <strong>State</strong>
                          <span>ads</span>

                        </li>

                        <li>
                          <strong>Country</strong>
                          <span>ads</span>

                        </li>
                        <li>
                          <strong>Tax No</strong>
                          <span>ads</span>

                        </li>
                      </ul>

                    </div>
                  </div>
                </div>
              </div>



              <div className="row p-3">
                <div className="col-lg-8">
                  <h6 className="heading-wrapper">Product Detail</h6>

                  <div className="row input-search-wrapper">
                    {/* <div className="col-lg-12 t-align-end">
                      <div className="">
                        <label>search:</label>
                        <input
                          className="search-inp"
                          type="number"
                          placeholder=""
                        />
                      </div>
                    </div> */}
                  </div>
                </div>
                <div className="col-lg-4">
                  <h6 className="heading-wrapper">Order Logs</h6>
                  <div className="order-date-sec">
                    {data?.getaOrderById?.createdAt} Created
                  </div>
                </div>

                <div className="col-lg-12 table-responsive">
                  <table
                    className="table-bordered aiz-table invoice-summary table footable footable-1 breakpoint-xl"
                    style={{}}
                  >
                    <thead>
                      <tr className="bg-trans-dark footable-header">
                        <th
                          data-breakpoints="lg"
                          className="min-col footable-first-visible"
                          style={{ display: "table-cell" }}
                        >
                          S.No
                        </th>
                        <th width="10%" style={{ display: "table-cell" }}>
                          Product Image
                        </th>
                        <th
                          className="text-uppercase"
                          style={{ display: "table-cell" }}
                        >
                          Product
                        </th>
                        <th
                          className="text-uppercase"
                          style={{ display: "table-cell" }}
                        >
                          Variant
                        </th>

                        <th
                          data-breakpoints="lg"
                          className="min-col text-uppercase text-center"
                          style={{ display: "table-cell" }}
                        >
                          Quantity
                        </th>
                        <th
                          data-breakpoints="lg"
                          className="min-col text-uppercase text-center"
                          style={{ display: "table-cell" }}
                        >
                          Unit Price
                        </th>
                        <th
                          data-breakpoints="lg"
                          className="min-col text-uppercase text-center"
                          style={{ display: "table-cell" }}
                        >
                          Sub Total
                        </th>

                        <th
                          data-breakpoints="lg"
                          className="min-col text-uppercase text-center"
                          style={{ display: "table-cell" }}
                        >
                          TAX
                        </th>

                        <th
                          data-breakpoints="lg"
                          className="min-col text-uppercase text-right footable-last-visible"
                          style={{ display: "table-cell" }}
                        >
                          Total
                        </th>
                        <th
                          data-breakpoints="lg"
                          className="min-col text-uppercase text-center footable-last-visible"
                          style={{ display: "table-cell" }}
                        >
                          Delivery Type
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {isSuccess &&
                        data?.products?.map((item, i) => {
                          return (
                            <tr key={i}>
                              <td
                                className="footable-first-visible"
                                style={{ display: "table-cell" }}
                              >
                                {i + 1}
                              </td>
                              <td style={{ display: "table-cell" }}>
                                <Link to="#">
                                  <img
                                    height={50}
                                    src="https://mmslfashions.in/public/uploads/all/g7ZiaWNvwkLwNhl67jtfbUaIcwSzVarNuc7T8dLP.jpg"
                                  />
                                </Link>
                              </td>
                              <td style={{ display: "table-cell" }}>
                                <strong>{item.product_name}</strong>
                                <small></small>
                                <br />
                              </td>
                              <td style={{ display: "table-cell" }}>
                                <strong>{item.product_variant.weight}</strong>
                                <small></small>
                                <br />
                              </td>

                              <td style={{ display: "table-cell", textAlign: "right" }}>
                                {item.product_count}
                              </td>
                              <td style={{ display: "table-cell", textAlign: "right" }}>
                                <small>{item.product_variant.sale_rate}</small>
                              </td>

                              <td
                                className="text-right"
                                style={{ display: "table-cell" }}
                              >
                                {data?.getaOrderById?.products[i]?.subTotal}
                              </td>


                              <td
                                className="text-right footable-last-visible"
                                style={{ display: "table-cell", textAlign: "right" }}
                              >
                                {data?.getaOrderById?.products[i]?.tax}
                              </td>

                              <td
                                className="text-right footable-last-visible"
                                style={{ display: "table-cell" }}
                              >
                                {data?.getaOrderById?.products[i]?.subTotal + data?.getaOrderById?.products[i]?.tax}
                              </td>
                              <td
                                className="text-center footable-last-visible"
                                style={{ display: "table-cell" }}
                              >
                                {/* {data?.getaOrderById?.products?.[0].deliveryType} */}
                                {data?.getaOrderById?.products[0]?.deliveryType}
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
                <div className="text-right">
                  <div className="mb-2"><big className="pr-2">Shipping Cost:<strong> {data?.getaOrderById?.shippingCost}</strong></big></div>
                  <div><big className="pr-2">Grand Total:  <strong>{data?.getaOrderById?.grandTotal}</strong></big></div>
                </div>

              </div>

            </div>
          </div>
          <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto"></div>
        </div>
      )}

      {error && (<h6 className="ps-3">Data not found</h6>)}
      <ToastContainer />
    </>
  );
}
export default OrderDetails;
