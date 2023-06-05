import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { SlideshowLightbox } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";
import "lightbox.js-react/dist/index.css";
import { useGetSellersQuery } from "../all-products/allproductsApi/allProductsApi";

const image = [
  {
    id: "1",
    url: "https://source.unsplash.com/pAKCx4y2H6Q/1400x1200",
  },
  {
    id: "2",
    url: "https://source.unsplash.com/AYS2sSAMyhc/1400x1200",
  },
  {
    id: "3",
    url: "https://source.unsplash.com/Kk8mEQAoIpI/1600x1200"
  },
  {
    id: "4",
    url: "https://source.unsplash.com/HF3X2TWv1-w/1600x1200"
  }
];

function AllSeller() {
  const [optionShow, setOptionShow] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [show3, setShow3] = useState(false);

  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  // useEffect(() => {
  //   initLightboxJS("Insert your License Key here", "Insert plan type here");
  // }, []);

  const { data, response } = useGetSellersQuery()
  console.log('seller------', data)

  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="aiz-titlebar text-left mt-2 mb-3">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h1 className="h3">All Sellers</h1>
              </div>
            </div>
          </div>
          <div className="card">
            <form className id="sort_sellers" action method="GET">
              <div className="card-header row gutters-5">
                <div className="col">
                  <h5 className="mb-md-0 h6">Sellers</h5>
                </div>
                <div className="dropdown col-lg-2 mb-2 mb-md-0">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Bulk Action</option>
                    <option value="1">Delete selection</option>
                  </select>
                  {/* <button className="btn border dropdown-toggle" type="button" data-toggle="dropdown" fdprocessedid="mpve6h">
              Bulk Action
            </button>
            <div className="dropdown-menu dropdown-menu-right">
              <a className="dropdown-item" href="#" onclick="bulk_delete()">Delete selection</a>
            </div> */}
                </div>
                <div className="col-md-3 ml-auto">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Filter by Approval</option>
                    <option value="1">Approved</option>
                    <option value="2">Non-Approved</option>
                    <option value="3">Three</option>
                  </select>
                  {/* <div className="dropdown bootstrap-select form-control aiz-">
                    <select
                      className="form-control aiz-selectpicker"
                      name="approved_status"
                      id="approved_status"
                      onchange="sort_sellers()"
                      tabIndex={-98}
                    >
                      <option value>Filter by Approval</option>
                      <option value={1}>Approved</option>
                      <option value={0}>Non-Approved</option>
                    </select>
                    <button
                      type="button"
                      className="btn dropdown-toggle btn-light"
                      data-toggle="dropdown"
                      role="combobox"
                      aria-owns="bs-select-1"
                      aria-haspopup="listbox"
                      aria-expanded="false"
                      data-id="approved_status"
                      title="Filter by Approval"
                      fdprocessedid="b33jo"
                    >
                      <div className="filter-option">
                        <div className="filter-option-inner">
                          <div className="filter-option-inner-inner">
                            Filter by Approval
                          </div>
                        </div>{" "}
                      </div>
                    </button>
                    <div
                      className="dropdown-menu "
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
                              aria-setsize={3}
                              aria-posinset={1}
                              aria-selected="true"
                            >
                              <span className="text">Filter by Approval</span>
                            </a>
                          </li>
                          <li>
                            <a
                              role="option"
                              className="dropdown-item"
                              id="bs-select-1-1"
                              tabIndex={0}
                            >
                              <span className="text">Approved</span>
                            </a>
                          </li>
                          <li>
                            <a
                              role="option"
                              className="dropdown-item"
                              id="bs-select-1-2"
                              tabIndex={0}
                            >
                              <span className="text">Non-Approved</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div> */}
                </div>
                <div className="col-md-3">
                  <div className="form-group mb-0">
                    <input
                      type="text"
                      className="form-control"
                      id="search"
                      name="search"
                      placeholder="Type name or email & Enter"
                      fdprocessedid="3vgavp"
                    />
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
                      <th style={{ display: "table-cell" }}>Image</th>
                      <th style={{ display: "table-cell" }}>Name</th>
                      <th
                        data-breakpoints="lg"
                        style={{ display: "table-cell" }}
                      >
                        Phone
                      </th>
                      <th
                        data-breakpoints="lg"
                        style={{ display: "table-cell" }}
                      >
                        Email Address
                      </th>
                      <th
                        data-breakpoints="lg"
                        style={{ display: "table-cell" }}
                      >
                        Verification Info
                      </th>
                      <th
                        data-breakpoints="lg"
                        style={{ display: "table-cell" }}
                      >
                        Approval
                      </th>
                      <th
                        data-breakpoints="lg"
                        style={{ display: "table-cell" }}
                      >
                        Num. of Products
                      </th>
                      <th
                        data-breakpoints="lg"
                        style={{ display: "table-cell" }}
                      >
                        Due to seller
                      </th>
                      <th
                        width="10%"
                        className="footable-last-visible"
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
                                defaultValue={1}
                              />
                              <span className="aiz-square-check" />
                            </label>
                          </div>
                        </div>
                      </td>
                      <td style={{ display: "table-cell" }}>
                        <SlideshowLightbox>
                          {image.slice(0, 1).map((item) => {
                            return <img
                              className="w-full rounded"
                              style={{ width: '50px' }}
                              src={item.url}
                            />
                          })}

                        </SlideshowLightbox>
                      </td>
                      <td style={{ display: "table-cell" }}>
                        {" "}
                        Abaris Products
                      </td>
                      <td style={{ display: "table-cell" }}>08851746286</td>
                      <td style={{ display: "table-cell" }}>
                        abarisproducts@gmail.com
                      </td>
                      <td style={{ display: "table-cell" }}>
                        <a href="https://mmslfashions.in/admin/sellers/view/1/verification">
                          <span className="badge badge-inline badge-info">
                            Show
                          </span>
                        </a>
                      </td>
                      <td style={{ display: "table-cell" }}>
                        <label className="aiz-switch aiz-switch-success mb-0">
                          <input
                            onchange="update_approved(this)"
                            defaultValue={1}
                            type="checkbox"
                            defaultChecked
                          />
                          <span className="slider round" />
                        </label>
                      </td>
                      <td style={{ display: "table-cell" }}>6</td>
                      <td style={{ display: "table-cell" }}>ZK28.40</td>
                      <td
                        className="footable-last-visible"
                        style={{ display: "table-cell" }}
                      >
                        <div className="dropdown">
                          <button
                            type="button"
                            className="btn btn-sm btn-circle btn-soft-primary btn-icon dropdown-toggle no-arrow"
                            data-toggle="dropdown"
                            href="javascript:void(0);"
                            onClick={() => setOptionShow(!optionShow)}
                            role="button"
                            aria-haspopup="false"
                            aria-expanded="false"
                          >
                            <i className="las la-ellipsis-v" />
                          </button>
                          <div
                            className={`dropdown-menu dropdown-menu-right dropdown-menu-xs ${optionShow ? "mm-show-2" : "extra"
                              }`}
                          >
                            <a
                              href="#"
                              onClick={handleShow}
                              className="dropdown-item"
                            >
                              Profile
                            </a>
                            <Modal
                              dialogClassName="seller-profile-modle"
                              show={show}
                              onHide={handleClose}
                            >
                              {/* <Modal.Header closeButton>
                                  <Modal.Title>Modal heading</Modal.Title>
                                </Modal.Header> */}
                              <Modal.Body>
                                {/* <div className="modal-body"> */}
                                <div className="text-center">
                                  <span className="avatar avatar-xxl mb-3">
                                    <img
                                      src="https://mmslfashions.in/public/uploads/all/J3IHQMPrIal220S890WP4kxP1shTCJytvopboZrL.png"
                                      onerror="this.onerror=null;this.src='https://mmslfashions.in/public/assets/img/avatar-place.png';"
                                    />
                                  </span>
                                  <h1 className="h5 mb-1">Demo Seller</h1>
                                  <p className="text-sm text-muted">
                                    Demo Seller
                                  </p>
                                  <div className="pad-ver btn-groups">
                                    <a
                                      href="www.facebook.com"
                                      className="btn btn-icon demo-pli-facebook icon-lg add-tooltip"
                                      data-original-title="Facebook"
                                      data-container="body"
                                    />
                                    <a
                                      href="www.twitter.com"
                                      className="btn btn-icon demo-pli-twitter icon-lg add-tooltip"
                                      data-original-title="Twitter"
                                      data-container="body"
                                    />
                                    <a
                                      href="www.google.com"
                                      className="btn btn-icon demo-pli-google-plus icon-lg add-tooltip"
                                      data-original-title="Google+"
                                      data-container="body"
                                    />
                                  </div>
                                </div>
                                <hr />
                                {/* Profile Details */}
                                <h6 className="mb-4">About Demo Seller</h6>
                                <p>
                                  <i className="demo-pli-map-marker-2 icon-lg icon-fw mr-1" />
                                  G-44, 2nd Floor, Shaheen Bagh, New
                                  Delhi-110025, INDIA
                                </p>
                                <p>
                                  <a
                                    href="https://mmslfashions.in/shop/Abaris-Products-1"
                                    className="btn-link"
                                  >
                                    <i className="demo-pli-internet icon-lg icon-fw mr-1" />
                                    Abaris Products
                                  </a>
                                </p>
                                <p>
                                  <i className="demo-pli-old-telephone icon-lg icon-fw mr-1" />
                                  08851746286
                                </p>
                                <h6 className="mb-4">Payout Info</h6>
                                <p>Bank Name : ICICI BANK LTD</p>
                                <p>Bank Acc Name : 123456</p>
                                <p>Bank Acc Number : DEMO PRODUCTS</p>
                                <p>Bank Routing Number : 123123</p>
                                <br />
                                <div className="table-responsive">
                                  <table className="table table-striped mar-no">
                                    <tbody>
                                      <tr>
                                        <td>Total Products</td>
                                        <td>6</td>
                                      </tr>
                                      <tr>
                                        <td>Total orders</td>
                                        <td>4</td>
                                      </tr>
                                      <tr>
                                        <td>Total Sold Amount</td>
                                        <td>ZK0.00</td>
                                      </tr>
                                      <tr>
                                        <td>Wallet Balance</td>
                                        <td>ZK0.00</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                                {/* </div> */}
                              </Modal.Body>
                              <Modal.Footer>
                                <Button
                                  variant="secondary"
                                  onClick={handleClose}
                                >
                                  Close
                                </Button>
                                <Button variant="primary" onClick={handleClose}>
                                  Save Changes
                                </Button>
                              </Modal.Footer>
                            </Modal>
                            <a
                              href="https://mmslfashions.in/admin/sellers/login/eyJpdiI6IkxhRFJoTFd1eDlua3F3cFkvNXlZN0E9PSIsInZhbHVlIjoiT2k0c2FqZ0h6MTcxQVZRQmFEaFRiUT09IiwibWFjIjoiNGMyY2QzYzVkMGVhYzRhOTdhYjgxYWFjYTEyZDVjOWU1ZDExZmMwNjYxOTEwY2FhN2VjYWIxODBjYTNlOWY2NSIsInRhZyI6IiJ9"
                              className="dropdown-item"
                            >
                              Log in as this Seller
                            </a>
                            <a
                              href="#"
                              onclick="show_seller_payment_modal('1');"
                              className="dropdown-item"
                            >
                              Go to Payment
                            </a>
                            <a
                              href="https://mmslfashions.in/admin/seller/payments/show/eyJpdiI6IkRreUJvWWtzZ3VhSFE0S2RDaVNsR0E9PSIsInZhbHVlIjoiQlU2U240UnlEU0dWZ25PcHVyV05rZz09IiwibWFjIjoiNzRlZTUxOTE1OTA5NWM4YmZlNmY4MTcxMGJmZjc1ZTg3ZDBhZTJlZGM1MzQ5ZTk1OWY3ZTNmYmEwYmQ4NjIwZiIsInRhZyI6IiJ9"
                              className="dropdown-item"
                            >
                              Payment History
                            </a>
                            <a
                              href="https://mmslfashions.in/admin/sellers/eyJpdiI6ImpjU25Qd0NGd1pQNjFmdE4vNnlLSnc9PSIsInZhbHVlIjoiU1M5RVB2ZVNxMHpKNy9RMEY0anJ2Zz09IiwibWFjIjoiM2ZkMjQ4ZDRmNDI2ZDdhZDAwMjYzMjY4MmEwMjMyNmExMzNhMDliODkyY2Y3OTcwYjM4NjNiYjYyNjZkZmRlMyIsInRhZyI6IiJ9/edit"
                              className="dropdown-item"
                            >
                              Edit
                            </a>
                            <a
                              href="#"
                              onClick={handleShow2}
                              className="dropdown-item"
                            >
                              Ban this seller
                              <i
                                className="fa fa-ban text-danger"
                              // aria-hidden="true"
                              />
                            </a>
                            <Modal
                              dialogClassName="ban-this-seller-moddle"
                              show={show2}
                              onHide={handleClose2}
                            >
                              <Modal.Header closeButton>
                                <Modal.Title>Confirmation</Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                                Do you really want to ban this seller?
                              </Modal.Body>
                              <Modal.Footer>
                                <Button
                                  variant="secondary"
                                  onClick={handleClose2}
                                >
                                  Cancel
                                </Button>
                                <Button
                                  variant="success"
                                  onClick={handleClose2}
                                >
                                  Proceed!
                                </Button>
                              </Modal.Footer>
                            </Modal>
                            <a
                              href="#"
                              onClick={handleShow3}
                              className="dropdown-item confirm-delete"
                              data-href="https://mmslfashions.in/admin/sellers/destroy/1"
                            >
                              Delete
                            </a>
                            <Modal
                              dialogClassName="ban-this-seller-moddle"
                              show={show3}
                              onHide={handleClose3}
                            >
                              <Modal.Header closeButton>
                                <Modal.Title>Delete Confirmation</Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                                Are you sure to delete this?
                              </Modal.Body>
                              <Modal.Footer>
                                <Button
                                  variant="secondary"
                                  onClick={handleClose3}
                                >
                                  Cancel
                                </Button>
                                <Button
                                  variant="success"
                                  onClick={handleClose3}
                                >
                                  Delete
                                </Button>
                              </Modal.Footer>
                            </Modal>
                          </div>
                        </div>
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
  );
}
export default AllSeller;
