import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetOrderDetailQuery } from "../all-products/allproductsApi/allProductsApi";

function OrderDetails() {
  const param = useParams()
  const { data } = useGetOrderDetailQuery(param.id)
  console.log();
  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="card">
            <div className="card-header">
              <h1 className="h2 fs-16 mb-0">Order Details</h1>
            </div>
            <div className="card-body">
              <div className="row gutters-5">
                <div className="col text-md-left text-center"></div>
                {/*Assign Delivery Boy*/}
                <div className="col-md-3 ml-auto">
                  <label htmlFor="update_payment_status">Payment Status</label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Un-Paid</option>
                    <option value="1">Paid</option>
                  </select>
                  {/* <div className="dropdown bootstrap-select form-control aiz-">
                    <select
                      className="form-control aiz-selectpicker"
                      data-minimum-results-for-search="Infinity"
                      id="update_payment_status"
                      tabIndex={-98}
                    >
                      <option value="unpaid" selected>
                        Un-Paid
                      </option>
                      <option value="paid">Paid</option>
                    </select>
                    <button
                      type="button"
                      className="btn dropdown-toggle btn-light"
                      data-toggle="dropdown"
                      role="combobox"
                      aria-owns="bs-select-1"
                      aria-haspopup="listbox"
                      aria-expanded="false"
                      data-id="update_payment_status"
                      title="Un-Paid"
                      fdprocessedid="y7eu0o"
                    >
                      <div className="filter-option">
                        <div className="filter-option-inner">
                          <div className="filter-option-inner-inner">
                            Un-Paid
                          </div>
                        </div>{" "}
                      </div>
                    </button>
                    <div
                      className="dropdown-menu"
                      style={{ overflow: "hidden" }}
                    >
                      <div
                        className="inner show"
                        role="listbox"
                        id="bs-select-1"
                        tabIndex={-1}
                        aria-activedescendant="bs-select-1-0"
                        style={{ overflowY: "auto" }}
                      >
                        <ul
                          className="dropdown-menu inner show"
                          role="presentation"
                          style={{ marginTop: 0, marginBottom: 0 }}
                        >
                          <li className="selected active">
                            <a
                              role="option"
                              className="dropdown-item active selected"
                              id="bs-select-1-0"
                              tabIndex={0}
                              aria-setsize={2}
                              aria-posinset={1}
                              aria-selected="true"
                            >
                              <span className="text">Un-Paid</span>
                            </a>
                          </li>
                          <li>
                            <a
                              role="option"
                              className="dropdown-item"
                              id="bs-select-1-1"
                              tabIndex={0}
                            >
                              <span className="text">Paid</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div> */}
                </div>
                <div className="col-md-3 ml-auto">
                  <label htmlFor="update_delivery_status">
                    Delivery Status
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Pending</option>
                    <option value="confirmed">Confirmed</option>
                    <option value="picked_up">Picked Up</option>
                    <option value="on_the_way">On The Way</option>
                    <option value="delivered">Delivered</option>
                    <option value="cancelled">Cancel</option>
                  </select>
                  {/* <div className="dropdown bootstrap-select form-control aiz-">
                    <select
                      className="form-control aiz-selectpicker"
                      data-minimum-results-for-search="Infinity"
                      id="update_delivery_status"
                      tabIndex={-98}
                    >
                      <option value="pending" selected>
                        Pending
                      </option>
                      <option value="confirmed">Confirmed</option>
                      <option value="picked_up">Picked Up</option>
                      <option value="on_the_way">On The Way</option>
                      <option value="delivered">Delivered</option>
                      <option value="cancelled">Cancel</option>
                    </select>
                    <button
                      type="button"
                      className="btn dropdown-toggle btn-light"
                      data-toggle="dropdown"
                      role="combobox"
                      aria-owns="bs-select-2"
                      aria-haspopup="listbox"
                      aria-expanded="false"
                      data-id="update_delivery_status"
                      title="Pending"
                      fdprocessedid="oc88y8"
                    >
                      <div className="filter-option">
                        <div className="filter-option-inner">
                          <div className="filter-option-inner-inner">
                            Pending
                          </div>
                        </div>{" "}
                      </div>
                    </button>
                    <div
                      className="dropdown-menu"
                      style={{ maxHeight: 201, overflow: "hidden" }}
                    >
                      <div
                        className="inner show"
                        role="listbox"
                        id="bs-select-2"
                        tabIndex={-1}
                        aria-activedescendant="bs-select-2-0"
                        style={{ maxHeight: 185, overflowY: "auto" }}
                      >
                        <ul
                          className="dropdown-menu inner show"
                          role="presentation"
                          style={{ marginTop: 0, marginBottom: 0 }}
                        >
                          <li className="selected active">
                            <a
                              role="option"
                              className="dropdown-item active selected"
                              id="bs-select-2-0"
                              tabIndex={0}
                              aria-setsize={6}
                              aria-posinset={1}
                              aria-selected="true"
                            >
                              <span className="text">Pending</span>
                            </a>
                          </li>
                          <li>
                            <a
                              role="option"
                              className="dropdown-item"
                              id="bs-select-2-1"
                              tabIndex={0}
                            >
                              <span className="text">Confirmed</span>
                            </a>
                          </li>
                          <li>
                            <a
                              role="option"
                              className="dropdown-item"
                              id="bs-select-2-2"
                              tabIndex={0}
                            >
                              <span className="text">Picked Up</span>
                            </a>
                          </li>
                          <li>
                            <a
                              role="option"
                              className="dropdown-item"
                              id="bs-select-2-3"
                              tabIndex={0}
                            >
                              <span className="text">On The Way</span>
                            </a>
                          </li>
                          <li>
                            <a
                              role="option"
                              className="dropdown-item"
                              id="bs-select-2-4"
                              tabIndex={0}
                            >
                              <span className="text">Delivered</span>
                            </a>
                          </li>
                          <li>
                            <a
                              role="option"
                              className="dropdown-item"
                              id="bs-select-2-5"
                              tabIndex={0}
                            >
                              <span className="text">Cancel</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div> */}
                </div>
                <div className="col-md-3 ml-auto">
                  <label htmlFor="update_tracking_code">
                    Tracking Code (optional)
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="update_tracking_code"
                    fdprocessedid="nujtxn"
                  />
                </div>
              </div>
              <div className="mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  width={100}
                  height={100}
                  viewBox="0 0 100 100"
                >
                  <rect x={0} y={0} width={100} height={100} fill="#ffffff" />
                  <g transform="scale(4.762)">
                    <g transform="translate(0,0)">
                      <path
                        fillRule="evenodd"
                        d="M10 0L10 1L11 1L11 0ZM12 0L12 2L13 2L13 0ZM8 2L8 3L9 3L9 2ZM10 2L10 3L11 3L11 2ZM12 3L12 4L11 4L11 5L10 5L10 4L9 4L9 6L8 6L8 8L4 8L4 9L3 9L3 8L0 8L0 10L2 10L2 11L1 11L1 13L2 13L2 11L3 11L3 13L5 13L5 12L4 12L4 11L5 11L5 10L4 10L4 9L9 9L9 10L8 10L8 12L6 12L6 13L8 13L8 17L9 17L9 18L8 18L8 21L9 21L9 19L10 19L10 20L12 20L12 21L14 21L14 20L13 20L13 19L10 19L10 17L11 17L11 18L12 18L12 17L11 17L11 16L13 16L13 17L14 17L14 19L15 19L15 21L17 21L17 20L16 20L16 19L17 19L17 18L18 18L18 19L19 19L19 20L18 20L18 21L19 21L19 20L20 20L20 21L21 21L21 18L20 18L20 17L19 17L19 16L20 16L20 15L19 15L19 16L18 16L18 15L17 15L17 14L20 14L20 13L21 13L21 12L19 12L19 10L21 10L21 9L19 9L19 8L18 8L18 9L17 9L17 10L16 10L16 9L15 9L15 8L12 8L12 9L11 9L11 6L12 6L12 7L13 7L13 6L12 6L12 5L13 5L13 3ZM9 6L9 9L10 9L10 10L9 10L9 11L10 11L10 10L11 10L11 9L10 9L10 6ZM12 9L12 11L14 11L14 12L12 12L12 14L10 14L10 15L9 15L9 17L10 17L10 16L11 16L11 15L12 15L12 14L13 14L13 16L14 16L14 17L15 17L15 19L16 19L16 17L18 17L18 18L19 18L19 19L20 19L20 18L19 18L19 17L18 17L18 16L16 16L16 13L15 13L15 11L16 11L16 10L15 10L15 9L14 9L14 10L13 10L13 9ZM18 9L18 10L17 10L17 11L18 11L18 10L19 10L19 9ZM6 10L6 11L7 11L7 10ZM14 10L14 11L15 11L15 10ZM8 12L8 13L11 13L11 12ZM18 12L18 13L19 13L19 12ZM14 14L14 16L15 16L15 17L16 17L16 16L15 16L15 14ZM0 0L0 7L7 7L7 0ZM1 1L1 6L6 6L6 1ZM2 2L2 5L5 5L5 2ZM14 0L14 7L21 7L21 0ZM15 1L15 6L20 6L20 1ZM16 2L16 5L19 5L19 2ZM0 14L0 21L7 21L7 14ZM1 15L1 20L6 20L6 15ZM2 16L2 19L5 19L5 16Z"
                        fill="#000000"
                      />
                    </g>
                  </g>
                </svg>
              </div>
              <div className="row gutters-5">
                <div className="col text-md-left text-center">
                  <address>
                    <strong className="text-main">{data?.shippingAddress?.firstName}</strong>
                    <br />
                    abarissolution@gmail.com
                    <br />
                    08851746286
                    <br />
                    {data?.shippingAddress?.address}
                    <br />
                    {data?.shippingAddress?.country}
                  </address>
                </div>
                <div className="col-md-4 ml-auto">
                  <table>
                    <tbody>
                      <tr>
                        <td className="text-main text-bold">Order #</td>
                        <td className="text-info text-bold text-right">
                          {" "}
                          20230130-10174545
                        </td>
                      </tr>
                      <tr>
                        <td className="text-main text-bold">Order status</td>
                        <td className="text-right">
                          <span className="badge badge-inline badge-info">
                            Pending
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-main text-bold">Order date </td>
                        <td className="text-right">30-01-2023 10:17 AM</td>
                      </tr>
                      <tr>
                        <td className="text-main text-bold">Total amount</td>
                        <td className="text-right">ZK670.00</td>
                      </tr>
                      <tr>
                        <td className="text-main text-bold">Payment method</td>
                        <td className="text-right">flutterwave</td>
                      </tr>
                      <tr>
                        <td className="text-main text-bold">Additional Info</td>
                        <td className="text-right" />
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <hr className="new-section-sm bord-no" />
              <div className="row">
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
                          #
                        </th>
                        <th width="10%" style={{ display: "table-cell" }}>
                          Photo
                        </th>
                        <th
                          className="text-uppercase"
                          style={{ display: "table-cell" }}
                        >
                          Description
                        </th>
                        <th
                          data-breakpoints="lg"
                          className="text-uppercase"
                          style={{ display: "table-cell" }}
                        >
                          Delivery Type
                        </th>
                        <th
                          data-breakpoints="lg"
                          className="min-col text-uppercase text-center"
                          style={{ display: "table-cell" }}
                        >
                          QTY
                        </th>
                        <th
                          data-breakpoints="lg"
                          className="min-col text-uppercase text-center"
                          style={{ display: "table-cell" }}
                        >
                          Price
                        </th>
                        <th
                          data-breakpoints="lg"
                          className="min-col text-uppercase text-right footable-last-visible"
                          style={{ display: "table-cell" }}
                        >
                          Total
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data?.orderItems?.map((item, i) => {
                        return <tr key={item._id}>
                          <td
                            className="footable-first-visible"
                            style={{ display: "table-cell" }}
                          >
                            {++i}
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <a
                              href="https://mmslfashions.in/product/ntrat-alamonyom"
                              target="_blank"
                            >
                              <img
                                height={50}
                                src="https://mmslfashions.in/public/uploads/all/g7ZiaWNvwkLwNhl67jtfbUaIcwSzVarNuc7T8dLP.jpg"
                              />
                            </a>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <strong>
                              <a
                                href="https://mmslfashions.in/product/ntrat-alamonyom"
                                target="_blank"
                                className="text-muted"
                              >
                                {item.name}
                              </a>
                            </strong>
                            <small></small>
                            <br />
                            <small>SKU: AF301010000001</small>
                          </td>
                          <td style={{ display: "table-cell" }}>Home Delivery</td>
                          <td
                            className="text-center"
                            style={{ display: "table-cell" }}
                          >
                            {item.quantity}
                          </td>
                          <td
                            className="text-center"
                            style={{ display: "table-cell" }}
                          >
                            ZK{item.price}
                          </td>
                          <td
                            className="text-center footable-last-visible"
                            style={{ display: "table-cell" }}
                          >
                            ZK350.00
                          </td>
                        </tr>
                      })}


                    </tbody>
                  </table>
                </div>
              </div>
              <div className="clearfix float-right">
                <table className="table">
                  <tbody>
                    <tr>
                      <td>
                        <strong className="text-muted">Sub Total :</strong>
                      </td>
                      <td>ZK570.00</td>
                    </tr>
                    <tr>
                      <td>
                        <strong className="text-muted">Tax :</strong>
                      </td>
                      <td>ZK0.00</td>
                    </tr>
                    <tr>
                      <td>
                        <strong className="text-muted">Shipping :</strong>
                      </td>
                      <td>ZK100.00</td>
                    </tr>
                    <tr>
                      <td>
                        <strong className="text-muted">Coupon :</strong>
                      </td>
                      <td>ZK0.00</td>
                    </tr>
                    <tr>
                      <td>
                        <strong className="text-muted">Total :</strong>
                      </td>
                      <td className="text-muted h5">ZK670.00</td>
                    </tr>
                  </tbody>
                </table>
                <div className="no-print text-right">
                  <a
                    href="https://mmslfashions.in/invoice/8"
                    type="button"
                    className="btn btn-icon btn-light"
                  >
                    <i className="las la-print" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
          {/*p class="mb-0">&copy;  v6.3.3</p*/}
        </div>
      </div>
    </>
  );
}
export default OrderDetails;
