import { Link } from "react-router-dom";
import { useGetOrdersQuery } from "../all-products/allproductsApi/allProductsApi";

function AllOrders() {


  const { isLoading, data } = useGetOrdersQuery();
  console.log(data);

  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="card">
            <form id="sort_orders" method="GET">
              <div className="card-header row gutters-5">
                <div className="col">
                  <h5 className="mb-md-0 h6">All Orders</h5>
                </div>
                <div className="col-lg-2 dropdown mb-2 mb-md-0">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option>Bulk Action</option>
                    <option value="1">Delete Selection</option>
                  </select>
                </div>
                <div className="col-lg-2 ml-auto">
                  <select className="form-select" aria-label="Default select example">
                    <option>Filter by Delivery Status</option>
                    <option value="1">Pending</option>
                    <option value="2">Confirmed</option>
                    <option value="3">Picked Up</option>
                    <option value="3">On The Way</option>
                  </select>
                </div>

                <div className="col-lg-2 ml-auto">
                  <select className="form-select" aria-label="Default select example">
                    <option >Filter by Payment Status</option>
                    <option value="1">Paid</option>
                    <option value="2">Un-Paid</option>
                  </select>
                </div>

                <div className="col-lg-2">
                  <div className="form-group mb-0">
                    <input type="text" className="aiz-date-range form-control" name="date" placeholder="Filter by date" data-format="DD-MM-Y" data-separator=" to " data-advanced-range="true" autoComplete="off" fdprocessedid="sq6vu7" />
                  </div>
                </div>

                <div className="col-lg-2">
                  <div className="form-group mb-0">
                    <input
                      type="text"
                      className="form-control"
                      id="search"
                      name="search"
                      placeholder="Type Order code & hit Enter"
                      fdprocessedid="wffmea"
                    />
                  </div>
                </div>
                <div className="col-auto">
                  <div className="form-group mb-0">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      fdprocessedid="24gy4"
                    >
                      Filter
                    </button>
                  </div>
                </div>
              </div>
              <div className="card-body">

                {isLoading ? <h2>Loading...</h2>
                  : <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" style={{}}  >
                    <thead>
                      <tr className="footable-header">
                        {/*<th>#</th>*/}
                        <th
                          className="footable-first-visible"
                          style={{ display: "table-cell" }}
                        >
                          <div className="form-group">
                            <div className="aiz-checkbox-inline">
                              <label className="aiz-checkbox">
                                <input type="checkbox" className="check-all" />
                                <span className="aiz-square-check" />
                              </label>
                            </div>
                          </div>
                        </th>
                        <th style={{ display: "table-cell" }}>Order Code:</th>
                        <th
                          data-breakpoints="md"
                          style={{ display: "table-cell" }}
                        >
                          Num. of Products
                        </th>
                        <th
                          data-breakpoints="md"
                          style={{ display: "table-cell" }}
                        >
                          Customer
                        </th>
                        <th
                          data-breakpoints="md"
                          style={{ display: "table-cell" }}
                        >
                          Seller
                        </th>
                        <th
                          data-breakpoints="md"
                          style={{ display: "table-cell" }}
                        >
                          Amount
                        </th>
                        <th
                          data-breakpoints="md"
                          style={{ display: "table-cell" }}
                        >
                          Delivery Status
                        </th>
                        <th
                          data-breakpoints="md"
                          style={{ display: "table-cell" }}
                        >
                          Payment method
                        </th>
                        <th
                          data-breakpoints="md"
                          style={{ display: "table-cell" }}
                        >
                          Payment Status
                        </th>
                        <th style={{ display: "table-cell" }}>Refund</th>
                        <th
                          className="text-right footable-last-visible"
                          width="15%"
                          style={{ display: "table-cell" }}
                        >
                          Options
                        </th>
                      </tr>
                    </thead>

                    <tbody>

                      {data && data.map((item, i) => {
                        return <tr key={item._id}>
                          <td
                            className="footable-first-visible"
                            style={{ display: "table-cell" }}
                          >
                            <div className="form-group">
                              <div className="aiz-checkbox-inline">
                                <label className="aiz-checkbox">
                                  <input
                                    type="checkbox"
                                    className="check-one"
                                    name="id[]"
                                    defaultValue={8}
                                  />
                                  <span className="aiz-square-check" />
                                </label>
                              </div>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            20230130-10174545{" "}
                            <span className="badge badge-inline badge-info">
                              new
                            </span>{" "}
                          </td>
                          <td style={{ display: "table-cell" }}>2</td>
                          <td style={{ display: "table-cell" }}>
                            Azharuddin Shamim
                          </td>
                          <td style={{ display: "table-cell" }}>Abaris Products</td>
                          <td style={{ display: "table-cell" }}>{item.grandTotal}</td>
                          <td style={{ display: "table-cell" }}>
                            {item.isDelivered === false && (<span>Pending</span>)}
                            {item.isDelivered === true && (<span>Delivered</span>)}
                          </td>
                          <td style={{ display: "table-cell" }}>-</td>
                          <td style={{ display: "table-cell" }}>
                            {item.isPaid === true && (<span className="badge badge-inline badge-danger">
                              Paid
                            </span>)}
                          </td>
                          <td style={{ display: "table-cell" }}>No Refund</td>
                          <td
                            className="text-right footable-last-visible"
                            style={{ display: "table-cell" }}
                          >
                            <Link
                              className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                              to={`/admin/all_orders/order-Details/${item._id}`}
                              title="View"
                            >
                              <i className="las la-eye" />
                            </Link>
                            <a
                              className="btn btn-soft-info btn-icon btn-circle btn-sm"
                              href="https://mmslfashions.in/invoice/8"
                              title="Download Invoice"
                            >
                              <i className="las la-download" />
                            </a>
                            {/* <a
                        href="#"
                        className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                        data-href="https://mmslfashions.in/admin/orders/destroy/8"
                        title="Delete"
                      >
                        <i className="las la-trash" />
                      </a> */}
                          </td>
                        </tr>
                      })}

                    </tbody>
                  </table>
                }

                <div className="aiz-pagination"></div>
              </div>
            </form>
          </div>
        </div>
        <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
          {/*p className="mb-0">&copy;  v6.3.3</p*/}
        </div>
      </div>
    </>
  );
}
export default AllOrders;
