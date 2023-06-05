import { Link } from "react-router-dom"

function InHouseOrder() {
    return (
        <>
        <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="card">
            <form className action id="sort_orders" method="GET">
              <div className="card-header row gutters-5">
                <div className="col">
                  <h5 className="mb-md-0 h6">All Orders</h5>
                </div>
                <div className="col-lg-2 dropdown mb-2 mb-md-0">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Bulk Action</option>
                    <option value="1">Delete Selection</option>
                  </select>
                </div>
                <div className="col-lg-2 ml-auto">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Filter by Delivery Status</option>
                    <option value="1">Pending</option>
                    <option value="2">Confirmed</option>
                    <option value="3">Picked Up</option>
                    <option value="3">On The Way</option>
                  </select>
                  {/* <div className="dropdown bootstrap-select form-control aiz-">
                    <select
                      className="form-control aiz-selectpicker"
                      name="delivery_status"
                      id="delivery_status"
                      tabIndex={-98}
                    >
                      <option value>Filter by Delivery Status</option>
                      <option value="pending">Pending</option>
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
                      aria-owns="bs-select-1"
                      aria-haspopup="listbox"
                      aria-expanded="false"
                      data-id="delivery_status"
                      title="Filter by Delivery Status"
                      fdprocessedid="yi4cvs"
                    >
                      <div className="filter-option">
                        <div className="filter-option-inner">
                          <div className="filter-option-inner-inner">
                            Filter by Delivery Status
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
                        id="bs-select-1"
                        tabIndex={-1}
                        aria-activedescendant="bs-select-1-0"
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
                              id="bs-select-1-0"
                              tabIndex={0}
                              aria-setsize={7}
                              aria-posinset={1}
                              aria-selected="true"
                            >
                              <span className="text">
                                Filter by Delivery Status
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              role="option"
                              className="dropdown-item"
                              id="bs-select-1-1"
                              tabIndex={0}
                            >
                              <span className="text">Pending</span>
                            </a>
                          </li>
                          <li>
                            <a
                              role="option"
                              className="dropdown-item"
                              id="bs-select-1-2"
                              tabIndex={0}
                            >
                              <span className="text">Confirmed</span>
                            </a>
                          </li>
                          <li>
                            <a
                              role="option"
                              className="dropdown-item"
                              id="bs-select-1-3"
                              tabIndex={0}
                            >
                              <span className="text">Picked Up</span>
                            </a>
                          </li>
                          <li>
                            <a
                              role="option"
                              className="dropdown-item"
                              id="bs-select-1-4"
                              tabIndex={0}
                            >
                              <span className="text">On The Way</span>
                            </a>
                          </li>
                          <li>
                            <a
                              role="option"
                              className="dropdown-item"
                              id="bs-select-1-5"
                              tabIndex={0}
                            >
                              <span className="text">Delivered</span>
                            </a>
                          </li>
                          <li>
                            <a
                              role="option"
                              className="dropdown-item"
                              id="bs-select-1-6"
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
                <div className="col-lg-2 ml-auto">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Filter by Payment Status</option>
                    <option value="1">Paid</option>
                    <option value="2">Un-Paid</option>
                  </select>
                  {/* <div className="dropdown bootstrap-select form-control aiz-">
                    <select
                      className="form-control aiz-selectpicker"
                      name="payment_status"
                      id="payment_status"
                      tabIndex={-98}
                    >
                      <option value>Filter by Payment Status</option>
                      <option value="paid">Paid</option>
                      <option value="unpaid">Un-Paid</option>
                    </select>
                    <button
                      type="button"
                      className="btn dropdown-toggle btn-light"
                      data-toggle="dropdown"
                      role="combobox"
                      aria-owns="bs-select-2"
                      aria-haspopup="listbox"
                      aria-expanded="false"
                      data-id="payment_status"
                      title="Filter by Payment Status"
                      fdprocessedid="zjh2y"
                    >
                      <div className="filter-option">
                        <div className="filter-option-inner">
                          <div className="filter-option-inner-inner">
                            Filter by Payment Status
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
                        id="bs-select-2"
                        tabIndex={-1}
                        aria-activedescendant="bs-select-2-0"
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
                              id="bs-select-2-0"
                              tabIndex={0}
                              aria-setsize={3}
                              aria-posinset={1}
                              aria-selected="true"
                            >
                              <span className="text">
                                Filter by Payment Status
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              role="option"
                              className="dropdown-item"
                              id="bs-select-2-1"
                              tabIndex={0}
                            >
                              <span className="text">Paid</span>
                            </a>
                          </li>
                          <li>
                            <a
                              role="option"
                              className="dropdown-item"
                              id="bs-select-2-2"
                              tabIndex={0}
                            >
                              <span className="text">Un-Paid</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div> */}
                </div>
                <div className="col-lg-2">
                  <div className="form-group mb-0">
                    <input
                      type="text"
                      className="aiz-date-range form-control"
                      defaultValue
                      name="date"
                      placeholder="Filter by date"
                      data-format="DD-MM-Y"
                      data-separator=" to "
                      data-advanced-range="true"
                      autoComplete="off"
                      fdprocessedid="sq6vu7"
                    />
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
                <table
                  className="table aiz-table mb-0 footable footable-1 breakpoint-xl"
                  style={{}}
                >
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
                    <tr>
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
                      <td style={{ display: "table-cell" }}>ZK670.00</td>
                      <td style={{ display: "table-cell" }}>Pending</td>
                      <td style={{ display: "table-cell" }}>flutterwave</td>
                      <td style={{ display: "table-cell" }}>
                        <span className="badge badge-inline badge-danger">
                          Un-Paid
                        </span>
                      </td>
                      <td style={{ display: "table-cell" }}>No Refund</td>
                      <td
                        className="text-right footable-last-visible"
                        style={{ display: "table-cell" }}
                      >
                        <Link
                          className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                          to="/admin/all_orders/order-Details"
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
                        <a
                          href="#"
                          className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                          data-href="https://mmslfashions.in/admin/orders/destroy/8"
                          title="Delete"
                        >
                          <i className="las la-trash" />
                        </a>
                      </td>
                    </tr>
                    <tr>
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
                                defaultValue={7}
                              />
                              <span className="aiz-square-check" />
                            </label>
                          </div>
                        </div>
                      </td>
                      <td style={{ display: "table-cell" }}>
                        20221214-12222337{" "}
                      </td>
                      <td style={{ display: "table-cell" }}>1</td>
                      <td style={{ display: "table-cell" }}>Mr Abdul</td>
                      <td style={{ display: "table-cell" }}>Inhouse Order</td>
                      <td style={{ display: "table-cell" }}>ZK600.00</td>
                      <td style={{ display: "table-cell" }}>Pending</td>
                      <td style={{ display: "table-cell" }}>Wallet</td>
                      <td style={{ display: "table-cell" }}>
                        <span className="badge badge-inline badge-success">
                          Paid
                        </span>
                      </td>
                      <td style={{ display: "table-cell" }}>No Refund</td>
                      <td
                        className="text-right footable-last-visible"
                        style={{ display: "table-cell" }}
                      >
                         <Link
                          className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                          to="/admin/all_orders/order-Details"
                          title="View"
                        >
                          <i className="las la-eye" />
                        </Link>
                        <a
                          className="btn btn-soft-info btn-icon btn-circle btn-sm"
                          href="https://mmslfashions.in/invoice/7"
                          title="Download Invoice"
                        >
                          <i className="las la-download" />
                        </a>
                        <a
                          href="#"
                          className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                          data-href="https://mmslfashions.in/admin/orders/destroy/7"
                          title="Delete"
                        >
                          <i className="las la-trash" />
                        </a>
                      </td>
                    </tr>
                    <tr>
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
                                defaultValue={6}
                              />
                              <span className="aiz-square-check" />
                            </label>
                          </div>
                        </div>
                      </td>
                      <td style={{ display: "table-cell" }}>
                        20221209-06452846{" "}
                      </td>
                      <td style={{ display: "table-cell" }}>1</td>
                      <td style={{ display: "table-cell" }}>
                        Azharuddin Shamim
                      </td>
                      <td style={{ display: "table-cell" }}>Inhouse Order</td>
                      <td style={{ display: "table-cell" }}>ZK350.00</td>
                      <td style={{ display: "table-cell" }}>Confirmed</td>
                      <td style={{ display: "table-cell" }}>Cheque Payment</td>
                      <td style={{ display: "table-cell" }}>
                        <span className="badge badge-inline badge-success">
                          Paid
                        </span>
                      </td>
                      <td style={{ display: "table-cell" }}>No Refund</td>
                      <td
                        className="text-right footable-last-visible"
                        style={{ display: "table-cell" }}
                      >
                        <Link
                          className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                          to="/admin/all_orders/order-Details"
                          title="View"
                        >
                          <i className="las la-eye" />
                        </Link>
                        <a
                          className="btn btn-soft-info btn-icon btn-circle btn-sm"
                          href="https://mmslfashions.in/invoice/6"
                          title="Download Invoice"
                        >
                          <i className="las la-download" />
                        </a>
                        <a
                          href="#"
                          className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                          data-href="https://mmslfashions.in/admin/orders/destroy/6"
                          title="Delete"
                        >
                          <i className="las la-trash" />
                        </a>
                      </td>
                    </tr>
                    <tr>
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
                                defaultValue={5}
                              />
                              <span className="aiz-square-check" />
                            </label>
                          </div>
                        </div>
                      </td>
                      <td style={{ display: "table-cell" }}>
                        20221128-11185643{" "}
                      </td>
                      <td style={{ display: "table-cell" }}>1</td>
                      <td style={{ display: "table-cell" }}>ETG Customer2</td>
                      <td style={{ display: "table-cell" }}>Inhouse Order</td>
                      <td style={{ display: "table-cell" }}>ZK155.00</td>
                      <td style={{ display: "table-cell" }}>Confirmed</td>
                      <td style={{ display: "table-cell" }}>Wallet</td>
                      <td style={{ display: "table-cell" }}>
                        <span className="badge badge-inline badge-success">
                          Paid
                        </span>
                      </td>
                      <td style={{ display: "table-cell" }}>No Refund</td>
                      <td
                        className="text-right footable-last-visible"
                        style={{ display: "table-cell" }}
                      >
                         <Link
                          className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                          to="/admin/all_orders/order-Details"
                          title="View"
                        >
                          <i className="las la-eye" />
                        </Link>
                        <a
                          className="btn btn-soft-info btn-icon btn-circle btn-sm"
                          href="https://mmslfashions.in/invoice/5"
                          title="Download Invoice"
                        >
                          <i className="las la-download" />
                        </a>
                        <a
                          href="#"
                          className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                          data-href="https://mmslfashions.in/admin/orders/destroy/5"
                          title="Delete"
                        >
                          <i className="las la-trash" />
                        </a>
                      </td>
                    </tr>
                    <tr>
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
                                defaultValue={4}
                              />
                              <span className="aiz-square-check" />
                            </label>
                          </div>
                        </div>
                      </td>
                      <td style={{ display: "table-cell" }}>
                        20221128-11140415{" "}
                        <span className="badge badge-inline badge-info">
                          new
                        </span>{" "}
                      </td>
                      <td style={{ display: "table-cell" }}>2</td>
                      <td style={{ display: "table-cell" }}>ETG Customer2</td>
                      <td style={{ display: "table-cell" }}>Inhouse Order</td>
                      <td style={{ display: "table-cell" }}>ZK265.00</td>
                      <td style={{ display: "table-cell" }}>Pending</td>
                      <td style={{ display: "table-cell" }}>ICICI Bank</td>
                      <td style={{ display: "table-cell" }}>
                        <span className="badge badge-inline badge-danger">
                          Un-Paid
                        </span>
                      </td>
                      <td style={{ display: "table-cell" }}>No Refund</td>
                      <td
                        className="text-right footable-last-visible"
                        style={{ display: "table-cell" }}
                      >
                        <Link
                          className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                          to="/admin/all_orders/order-Details"
                          title="View"
                        >
                          <i className="las la-eye" />
                        </Link>
                        <a
                          className="btn btn-soft-info btn-icon btn-circle btn-sm"
                          href="https://mmslfashions.in/invoice/4"
                          title="Download Invoice"
                        >
                          <i className="las la-download" />
                        </a>
                        <a
                          href="#"
                          className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                          data-href="https://mmslfashions.in/admin/orders/destroy/4"
                          title="Delete"
                        >
                          <i className="las la-trash" />
                        </a>
                      </td>
                    </tr>
                    <tr>
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
                                defaultValue={3}
                              />
                              <span className="aiz-square-check" />
                            </label>
                          </div>
                        </div>
                      </td>
                      <td style={{ display: "table-cell" }}>
                        20221103-09563323{" "}
                      </td>
                      <td style={{ display: "table-cell" }}>1</td>
                      <td style={{ display: "table-cell" }}>
                        Azharuddin Shamim
                      </td>
                      <td style={{ display: "table-cell" }}>Abaris Products</td>
                      <td style={{ display: "table-cell" }}>ZK600.00</td>
                      <td style={{ display: "table-cell" }}>Pending</td>
                      <td style={{ display: "table-cell" }}>
                        Cash on Delivery
                      </td>
                      <td style={{ display: "table-cell" }}>
                        <span className="badge badge-inline badge-danger">
                          Un-Paid
                        </span>
                      </td>
                      <td style={{ display: "table-cell" }}>No Refund</td>
                      <td
                        className="text-right footable-last-visible"
                        style={{ display: "table-cell" }}
                      >
                        <Link
                          className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                          to="/admin/all_orders/order-Details"
                          title="View"
                        >
                          <i className="las la-eye" />
                        </Link>
                        <a
                          className="btn btn-soft-info btn-icon btn-circle btn-sm"
                          href="https://mmslfashions.in/invoice/3"
                          title="Download Invoice"
                        >
                          <i className="las la-download" />
                        </a>
                        <a
                          href="#"
                          className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                          data-href="https://mmslfashions.in/admin/orders/destroy/3"
                          title="Delete"
                        >
                          <i className="las la-trash" />
                        </a>
                      </td>
                    </tr>
                    <tr>
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
                                defaultValue={2}
                              />
                              <span className="aiz-square-check" />
                            </label>
                          </div>
                        </div>
                      </td>
                      <td style={{ display: "table-cell" }}>
                        20221006-19574683{" "}
                      </td>
                      <td style={{ display: "table-cell" }}>1</td>
                      <td style={{ display: "table-cell" }}>
                        Azharuddin Shamim
                      </td>
                      <td style={{ display: "table-cell" }}>Abaris Products</td>
                      <td style={{ display: "table-cell" }}>ZK220.00</td>
                      <td style={{ display: "table-cell" }}>Pending</td>
                      <td style={{ display: "table-cell" }}>
                        Cash on Delivery
                      </td>
                      <td style={{ display: "table-cell" }}>
                        <span className="badge badge-inline badge-danger">
                          Un-Paid
                        </span>
                      </td>
                      <td style={{ display: "table-cell" }}>No Refund</td>
                      <td
                        className="text-right footable-last-visible"
                        style={{ display: "table-cell" }}
                      >
                        <Link
                          className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                          to="/admin/all_orders/order-Details"
                          title="View"
                        >
                          <i className="las la-eye" />
                        </Link>
                        <a
                          className="btn btn-soft-info btn-icon btn-circle btn-sm"
                          href="https://mmslfashions.in/invoice/2"
                          title="Download Invoice"
                        >
                          <i className="las la-download" />
                        </a>
                        <a
                          href="#"
                          className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                          data-href="https://mmslfashions.in/admin/orders/destroy/2"
                          title="Delete"
                        >
                          <i className="las la-trash" />
                        </a>
                      </td>
                    </tr>
                    <tr>
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
                                defaultValue={1}
                              />
                              <span className="aiz-square-check" />
                            </label>
                          </div>
                        </div>
                      </td>
                      <td style={{ display: "table-cell" }}>
                        20221006-19574668{" "}
                        <span className="badge badge-inline badge-info">
                          new
                        </span>{" "}
                      </td>
                      <td style={{ display: "table-cell" }}>2</td>
                      <td style={{ display: "table-cell" }}>
                        Azharuddin Shamim
                      </td>
                      <td style={{ display: "table-cell" }}>Inhouse Order</td>
                      <td style={{ display: "table-cell" }}>ZK550.00</td>
                      <td style={{ display: "table-cell" }}>Pending</td>
                      <td style={{ display: "table-cell" }}>
                        Cash on Delivery
                      </td>
                      <td style={{ display: "table-cell" }}>
                        <span className="badge badge-inline badge-danger">
                          Un-Paid
                        </span>
                      </td>
                      <td style={{ display: "table-cell" }}>No Refund</td>
                      <td
                        className="text-right footable-last-visible"
                        style={{ display: "table-cell" }}
                      >
                         <Link
                          className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                          to="/admin/all_orders/order-Details"
                          title="View"
                        >
                          <i className="las la-eye" />
                        </Link>
                        <a
                          className="btn btn-soft-info btn-icon btn-circle btn-sm"
                          href="https://mmslfashions.in/invoice/1"
                          title="Download Invoice"
                        >
                          <i className="las la-download" />
                        </a>
                        <a
                          href="#"
                          className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                          data-href="https://mmslfashions.in/admin/orders/destroy/1"
                          title="Delete"
                        >
                          <i className="las la-trash" />
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="aiz-pagination"></div>
              </div>
            </form>
          </div>
        </div>
        <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
          {/*p class="mb-0">&copy;  v6.3.3</p*/}
        </div>
      </div>
        </>
    )
}
export default InHouseOrder