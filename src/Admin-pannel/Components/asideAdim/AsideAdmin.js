import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useGetAllStatusOrdersQuery, useGetPickupPointQuery } from "../all-products/allproductsApi/allProductsApi";

function AsideAdmin() {

  const [state, setState] = useState(false)
  const [products, setProducts] = useState(false)
  const [wholeSale, setWholsale] = useState(false)
  const [sales, setSales] = useState(false)
  const [refunds, setRefunds] = useState(false)
  const [customers, setCustomers] = useState(false)
  const [sellers, setSellers] = useState(false)
  const [blogSystem, setBlogSystem] = useState(false)
  const [rewardPoints, setRewardPoints] = useState(false)
  const [support, setSupport] = useState(false)
  const [marketing, setMarketing] = useState(false)
  const [report, setReport] = useState(false)
  const [affliated, setAffliated] = useState(false)
  const [offlineWalletRecharge, setOfflineWalletRecharge] = useState(false)
  const [otpSystem, setOtpSystem] = useState(false)
  const [clubPointsystem, setClubPointsystem] = useState(false);
  const [africanPayment, setAfricanPayment] = useState(false);
  const [website, setWebsite] = useState(false);
  const [setupConfiguration, setSetupConfiguration] = useState(false)
  const [allStaffs, setAllStaffs] = useState(false);
  const [allStaff, setAllStaff] = useState(false);
  const [update, setUpdate] = useState(false);
  const [facebook, setFacebook] = useState(false);
  const [google, setGoogle] = useState(false);
  const [shipping, setShipping] = useState(false);
  const [purchase, setPurchase] = useState(false);
  const [reports, setReports] = useState(false);
  const [saleMod, setSaleMod] = useState(false);
  const [productsManagement, setProductsManagement] = useState(false);
  const [front, setFront] = useState(false);
  const [quotations, setQuotations] = useState(false);
  const [booking, setBooking] = useState(false);
  const [affiliate, setAffiliate] = useState(false);
  const [member, setMember] = useState(false);
  const [deliveryBoy, setDeliveryBoy] = useState(false);

  const { data, isLoading } = useGetAllStatusOrdersQuery()
  const { data: pickup, isLoading: isLoadingPick } = useGetPickupPointQuery()

  const isSuperAdminLogin = window.localStorage.getItem('showMainadmin')
  const isSellerLogin = window.localStorage.getItem('isSellerLogin')


  if (isSellerLogin === 'true') {
    return (
      <>
        <div className="aiz-sidebar left c-scrollbar c-scrollbar-2" style={{ backgroundColor: "#e1e1db" }}>
          <div className="aiz-side-nav-logo-wrap">
            <a href="https://mmslfashions.in/admin" className="d-block text-left">
              {/* <img className="mw-100" src={"https://mmslfashions.in/public/assets/img/logo.png"} alt /> */}
            </a>
          </div>
          <div className="aiz-side-nav-wrap">
            <div className="px-20px mb-3">
              <input className="form-control bg-soft-secondary border-0 form-control-sm text-white" type="text" placeholder="Search in menu" id="menu-search" fdprocessedid="axe2ae" />
            </div>
            <ul className="aiz-side-nav-list" id="search-menu">
            </ul>
            <ul className="aiz-side-nav-list metismenu" id="main-menu" data-toggle="aiz-side-menu">
              <li className="aiz-side-nav-item">
                <Link to="products/seller" className="aiz-side-nav-link ">
                  <span className="aiz-side-nav-text">Seller Products</span>
                </Link>
              </li>

              <li className="aiz-side-nav-item">
                <Link to="add-seller-product" className="aiz-side-nav-link ">
                  <span className="aiz-side-nav-text">Add Seller Product</span>
                </Link>
              </li>

              <li className="aiz-side-nav-item">
                <Link to="seller/all_orders" className="aiz-side-nav-link ">
                  <span className="aiz-side-nav-text">Seller Orders</span>
                </Link>
              </li>



              <li className="aiz-side-nav-item">
                <Link to="sellerBrand_List" className="aiz-side-nav-link">
                  <span className="aiz-side-nav-text">Seller Brand List</span>
                </Link>
              </li>

              <li className="aiz-side-nav-item">
                <Link to="add_Seller_brand" className="aiz-side-nav-link">
                  <span className="aiz-side-nav-text">Add Seller Brnads</span>
                </Link>
              </li>


              {/* {data && data.map((item) => {
                if (item.orderStatusName === 'Pending' || item.orderStatusName === 'Delivered' || item.orderStatusName === 'Canceled' || item.orderStatusName === 'Rejected') {
                  return <li key={item._id} className="aiz-side-nav-item" onClick={() => window.localStorage.setItem('orderName', item.orderStatusName)}>
                    <Link to={`orders/status/${item._id}`} className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">{item.orderStatusName}</span>
                    </Link>
                  </li>
                }
              })} */}

              <li className="aiz-side-nav-item">
                <Link to="inhouse-orders" className="aiz-side-nav-link ">
                  <span className="aiz-side-nav-text">Inhouse orders</span>
                </Link>
              </li>



              <li className="aiz-side-nav-item" onClick={() => window.localStorage.setItem('orderName', 'All Pick-up Point Order')}>
                <Link to="orders_by_pickup_point" className="aiz-side-nav-link ">
                  <span className="aiz-side-nav-text" style={{ fontSize: "15px", color: "indigo" }}>All Pick-up Point Order</span>
                </Link>
              </li>



              {/* {data && data.map((item) => {
                if (item.orderStatusName === 'Pending' || item.orderStatusName === 'Delivered' || item.orderStatusName === 'Canceled' || item.orderStatusName === 'Rejected') {
                  return <li key={item._id} className="aiz-side-nav-item" onClick={() => window.localStorage.setItem('orderName', item.orderStatusName)}>
                    <Link to={`orders/PickupPints/${item._id}`} className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">{item.orderStatusName}</span>
                    </Link>
                  </li>
                }

              })} */}










              <li className="aiz-side-nav-item">
                <Link to="withdraw_requests_all" className="aiz-side-nav-link">
                  <span className="aiz-side-nav-text">Payout Requests</span>
                </Link>
              </li>

              <li className="aiz-side-nav-item">
                <Link to="seller_packages" className="aiz-side-nav-link ">
                  <span className="aiz-side-nav-text">Seller Packages</span>
                </Link>
              </li>

              <li className="aiz-side-nav-item">
                <Link to="seller-banners" className="aiz-side-nav-link">
                  <span className="aiz-side-nav-text">Add Seller Banners</span>
                </Link>
              </li>
              <li className="aiz-side-nav-item">
                <Link to="seller-banners" className="aiz-side-nav-link">
                  <span className="aiz-side-nav-text">Seller Banners</span>
                </Link>
              </li>
              <li className="aiz-side-nav-item">
                <Link to="profile" className="aiz-side-nav-link">
                  <span className="aiz-side-nav-text">Profile Setting</span>
                </Link>
              </li>








            </ul>{/* .aiz-side-nav */}
          </div>{/* .aiz-side-nav-wrap */}
        </div>

      </>
    )
  }

  if (isSuperAdminLogin === 'true') {
    return (
      <>
        <div className="aiz-sidebar left c-scrollbar c-scrollbar-2" style={{ backgroundColor: "#e1e1db" }}>
          <div className="aiz-side-nav-logo-wrap">
            <a href="https://mmslfashions.in/admin" className="d-block text-left">
              {/* <img className="mw-100" src={"https://mmslfashions.in/public/assets/img/logo.png"} alt /> */}
            </a>
          </div>
          <div className="aiz-side-nav-wrap">
            <div className="px-20px mb-3">
              <input className="form-control bg-soft-secondary border-0 form-control-sm text-white" type="text" placeholder="Search in menu" id="menu-search" fdprocessedid="axe2ae" />
            </div>
            <ul className="aiz-side-nav-list" id="search-menu">
            </ul>
            <ul className="aiz-side-nav-list metismenu" id="main-menu" data-toggle="aiz-side-menu">
              <li className="aiz-side-nav-item mm-active">
                <Link to="" className="aiz-side-nav-link active">
                  <i className="las la-home aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Dashboard</span>
                </Link>
              </li>

              <li className="aiz-side-nav-item" onClick={() => { setProducts(!products) }}
              // onMouseOut={() => { setProducts(!products) }}
              >
                <Link to="#" className="aiz-side-nav-link" >
                  <i className="las la-shopping-cart aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Products</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                {/*Submenu*/}
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${products ? "mm-show" : "extra"}`} id="product">
                  <li className="aiz-side-nav-item">
                    <Link to="products/all/products/create" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Add New Product</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="products/all" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">All products</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="products/all/products/create/comboProduct" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Add Combo Product</span>
                    </Link>
                  </li>

                  <li className="aiz-side-nav-item">
                    <Link to="products/all/comboProduct" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">All Combo products</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="products/seller" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Seller Products</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="product-bulk-upload/index" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Bulk Import</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="bulk_import_inventory" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Bulk Import Inventory</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="categories" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Category</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="brands" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Brands</span>
                    </Link>
                  </li>

                  <li className="aiz-side-nav-item">
                    <Link to="brands_requested" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Requested Brands</span>
                    </Link>
                  </li>

                  <li className="aiz-side-nav-item">
                    <Link to="attributes" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Attribute</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="colors" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Colors</span>
                    </Link>
                  </li>

                  <li className="aiz-side-nav-item">
                    <Link to="size" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Size</span>
                    </Link>
                  </li>


                </ul>
              </li>





              <li className="aiz-side-nav-item">
                <Link to="#" className="aiz-side-nav-link" onClick={() => { setWholsale(!wholeSale) }}>
                  <i className="las la-shopping-cart aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Wholesale Products</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                {/*Submenu*/}
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${wholeSale ? "mm-show" : "extra"}`} id="product">
                  <li className="aiz-side-nav-item">
                    <Link to="wholesale-product/create" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Add New Wholesale Products</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="wholesale/all-products" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">All Wholesale Products</span>
                    </Link>
                  </li>
                  {/* <li className="aiz-side-nav-item">
                    <Link to="sizechart" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Size Chart</span>
                    </Link>
                  </li> */}


                </ul>
              </li>



              {/* Delevery Boy start */}

              <li className="aiz-side-nav-item">
                <Link to="#" className="aiz-side-nav-link" onClick={() => { setDeliveryBoy(!deliveryBoy) }}>
                  <i className="las la-shopping-cart aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Delivery Boy</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${deliveryBoy ? "mm-show" : "extra"}`} id="product">
                  <li className="aiz-side-nav-item">
                    <Link to="#" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Delivery Boys</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="#" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Add New Delivery Boys</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="#" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Delivery Boys Payment History</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="#" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Delivery Boys Collection List</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="#" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Delivery Boys Cancel List</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="#" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Delivery Boy Configuration</span>
                    </Link>
                  </li>
                </ul>
              </li>
              {/* Delivery Boy end */}



              <li className="aiz-side-nav-item" onClick={() => { setProductsManagement(!productsManagement) }}>
                <Link to="#" className="aiz-side-nav-link" >
                  <i className="las la-shopping-cart aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Products Management</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                {/*Submenu*/}
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${productsManagement ? "mm-show" : "extra"}`} id="product">
                  <li className="aiz-side-nav-item">
                    <Link to="requested-brands" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Requested Brands</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="all_reviews_ratings" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">All reviews & ratings</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="sizechart" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Size Chart</span>
                    </Link>
                  </li>


                </ul>
              </li>

              <li className="aiz-side-nav-item">
                <Link to="tracking-order" className="aiz-side-nav-link">
                  <i class="las la-shopping-cart aiz-side-nav-icon"></i>
                  <span className="aiz-side-nav-text">Tracking Order</span>
                </Link>
              </li>






              <li className="aiz-side-nav-item" onClick={() => { setPurchase(!purchase) }}>
                <Link to="#" className="aiz-side-nav-link">
                  <i className="las la-backward aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Purchase</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${purchase ? "mm-show" : "extra"}`} id="product">
                  <li className="aiz-side-nav-item">
                    <Link to="list-purchase" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">List Purchase</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="add-purchase-list" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Add Purchase</span>
                    </Link>
                  </li>
                </ul>
              </li>


              <li className="aiz-side-nav-item" >
                <Link to="#" className="aiz-side-nav-link" onClick={() => { setQuotations(!quotations) }} >
                  <i className="las la-user-tie aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Quotations </span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${quotations ? "mm-show" : "extra"}`}>
                  <li className="aiz-side-nav-item">
                    <Link to="list_quotation" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">List Quotation</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="add_quotation" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Add Quotation</span>
                    </Link>
                  </li>
                </ul>
              </li>




              <li className="aiz-side-nav-item" onClick={() => { setSaleMod(!saleMod) }}>
                <Link to="#" className="aiz-side-nav-link">
                  <i className="las la-backward aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Sales Module</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${saleMod ? "mm-show" : "extra"}`} id="product">
                  <li className="aiz-side-nav-item">
                    <Link to="sales_entry" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Sales Enty</span>
                    </Link>
                  </li>
                  {/* <li className="aiz-side-nav-item">
                    <Link to="sales_return_entry" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Sales Return Enty</span>
                    </Link>
                  </li> */}
                </ul>
              </li>









              <li className="aiz-side-nav-item">
                <Link to="all_orders" className="aiz-side-nav-link ">
                  <i className="las la-shopping-cart aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">All Orders</span>
                </Link>
              </li>

              {data && data.map((item) => {
                if (item.orderStatusName === 'Pending' || item.orderStatusName === 'Delivered' || item.orderStatusName === 'Canceled' || item.orderStatusName === 'Rejected') {
                  return <li key={item._id} className="aiz-side-nav-item" onClick={() => window.localStorage.setItem('orderName', item.orderStatusName)}>
                    <Link to={`orders/status/${item._id}`} className="aiz-side-nav-link">
                      <i className="las la-shopping-cart aiz-side-nav-icon" />
                      <span className="aiz-side-nav-text">{item.orderStatusName}</span>
                    </Link>
                  </li>
                }
              })}



              <li className="aiz-side-nav-item">
                <Link to="inhouse-orders" className="aiz-side-nav-link ">
                  <i className="las la-shopping-cart aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Inhouse orders</span>
                </Link>
              </li>

              <li className="aiz-side-nav-item">
                <Link to="seller-orders" className="aiz-side-nav-link ">
                  <i className="las la-shopping-cart aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Seller Orders</span>
                </Link>
              </li>


              <li className="aiz-side-nav-item" onClick={() => window.localStorage.setItem('orderName', 'All Pick-up Point Order')}>
                <Link to="orders_by_pickup_point" className="aiz-side-nav-link ">
                  <i className="las la-shopping-cart aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text" style={{ fontSize: "15px", color: "indigo" }}>All Pick-up Point Order</span>
                </Link>
              </li>



              {data && data.map((item) => {
                if (item.orderStatusName === 'Pending' || item.orderStatusName === 'Delivered' || item.orderStatusName === 'Canceled' || item.orderStatusName === 'Rejected') {
                  return <li key={item._id} className="aiz-side-nav-item" onClick={() => window.localStorage.setItem('orderName', item.orderStatusName)}>
                    <Link to={`orders/PickupPints/${item._id}`} className="aiz-side-nav-link">
                      <i className="las la-shopping-cart aiz-side-nav-icon" />
                      <span className="aiz-side-nav-text">{item.orderStatusName}</span>
                    </Link>
                  </li>
                }

              })}


              {/* Banner Setting */}


              <li className="aiz-side-nav-item">
                <Link to="all_cancel_orders" className="aiz-side-nav-link ">
                  <i className="las la-shopping-cart aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text" style={{ fontSize: "15px", color: "indigo" }}>All Cancelled Orders </span>
                </Link>
              </li>





              <li className="aiz-side-nav-item" onClick={() => { setFront(!front) }}>
                <Link to="#" className="aiz-side-nav-link" >
                  <i className="las la-shopping-cart aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Front Setting</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                {/*Submenu*/}
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${front ? "mm-show" : "extra"}`} id="product">
                  <li className="aiz-side-nav-item">
                    <Link to="add_banner" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Add Banner</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="list_banner" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">List Banner</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="add_popup" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Add Popup</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="list_popup" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">List Popup</span>
                    </Link>
                  </li>

                </ul>
              </li>


              <li className="aiz-side-nav-item" >
                <Link to="#" className="aiz-side-nav-link" onClick={() => { setMember(!member) }}>
                  <i className="las la-shopping-cart aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">EGT Members</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${member ? "mm-show" : "extra"}`} id="product">
                  <li className="aiz-side-nav-item">
                    <Link to="add_member" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Add Member</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="list_members" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">List Members</span>
                    </Link>
                  </li>

                </ul>
              </li>







              <li className="aiz-side-nav-item">
                <Link to="#" className="aiz-side-nav-link" onClick={() => { setWholsale(!wholeSale) }}>
                  <i className="las la-shopping-cart aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Web Setting</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                {/*Submenu*/}
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${wholeSale ? "mm-show" : "extra"}`} id="product">
                  <li className="aiz-side-nav-item">
                    <Link to="website-pages" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">website-pages</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="website-pages/custom-pages/create" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Add New Page</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="website/appearance" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Website Setting</span>
                    </Link>
                  </li>
                  {/* <li className="aiz-side-nav-item">
                    <Link to="website-footer" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Website-footer</span>
                    </Link>
                  </li> */}
                  {/* <li className="aiz-side-nav-item">
                    <Link to="sizechart" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Size Chart</span>
                    </Link>
                  </li> */}


                </ul>
              </li>







              <li className="aiz-side-nav-item" onClick={() => { setReports(!reports) }}>
                <Link to="#" className="aiz-side-nav-link" >
                  <i className="las la-backward aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Report's</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${reports ? "mm-show" : "extra"}`} id="product">
                  <li className="aiz-side-nav-item">
                    <Link to="stock_report" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Stock Report</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="sales_report" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Sales Report</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="register_report" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Register Report</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="products_quantity_alerts" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Product Quantity Alerts</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="products_report" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Products Report</span>
                    </Link>
                  </li>


                  <li className="aiz-side-nav-item">
                    <Link to="product-transfer-entry" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Product Transfer Entry</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="product-transfer-list" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Product Transfer's List</span>
                    </Link>
                  </li>





                  <li className="aiz-side-nav-item">
                    <Link to="damage-product-entry" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Products Damage Entry</span>
                    </Link>
                  </li>

                  <li className="aiz-side-nav-item">
                    <Link to="product-damage-list" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Products Damage List</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="material-re-order-list" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Material Re-Order List</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="adjustments_report" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Adjustments Report</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="categories_report" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Categories Report</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="brands_report" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Brands Report</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="daily_sales" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Daily Sales</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="monthly_sales" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Monthly Sales</span>
                    </Link>
                  </li>

                  {/* <li className="aiz-side-nav-item">
                    <Link to="sales_report" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Sales Report</span>
                    </Link>
                  </li> */}

                  <li className="aiz-side-nav-item">
                    <Link to="payments_report" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Payments Report</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="tax_report" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Tax Report</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="profit_loss" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Profit and/or Loss</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="daily_purchase" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Daily Purchases</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="monthly_purchase" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Monthly Purchases</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="purchases_report" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Purchases Report</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="expenses_report" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Expenses Report</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="customer_report" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Customers Report</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="suppliers_report" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Suppliers Report</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="staffs_report" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Staff Report</span>
                    </Link>
                  </li>
                </ul>
              </li>








              <li className="aiz-side-nav-item" onClick={() => { setRefunds(!refunds) }}>
                <Link to="#" className="aiz-side-nav-link" >
                  <i className="las la-backward aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Refunds</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${refunds ? "mm-show" : "extra"}`} id="product">
                  <li className="aiz-side-nav-item">
                    <Link to="refund-request-all" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Refund Requests</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="paid-refund" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Approved Refunds</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="rejected-refund" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">rejected Refunds</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="refund-request-config" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Refund Configuration</span>
                    </Link>
                  </li>
                </ul>
              </li>











              {/* Sellers */}
              <li className="aiz-side-nav-item" onClick={() => { setSellers(!sellers) }}>
                <Link to="#" className="aiz-side-nav-link" >
                  <i className="las la-user aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Sellers</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${sellers ? "mm-show" : "extra"}`}>
                  <li className="aiz-side-nav-item">
                    <Link to="seller" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">All Seller</span>
                    </Link>
                  </li>

                  <li className="aiz-side-nav-item">
                    <Link to="products/seller" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Seller Products</span>
                    </Link>
                  </li>

                  <li className="aiz-side-nav-item">
                    <Link to="add-seller-product" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Add Seller Product</span>
                    </Link>
                  </li>

                  {/* <li className="aiz-side-nav-item">
                    <Link to="Paymets" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Payouts</span>
                    </Link>
                  </li> */}
                  <li className="aiz-side-nav-item">
                    <Link to="withdraw_requests_all" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Payout Requests</span>
                    </Link>
                  </li>
                  {/* <li className="aiz-side-nav-item">
                    <Link to="vendor_commission" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Seller Commission</span>
                    </Link>
                  </li> */}
                  <li className="aiz-side-nav-item">
                    <Link to="seller_packages" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Seller Packages</span>
                    </Link>
                  </li>
                  {/* <li className="aiz-side-nav-item">
                    <Link to="verification/form" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Seller Verification Form</span>
                    </Link>
                  </li> */}
                  <li className="aiz-side-nav-item">
                    <Link to="seller-banners" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Seller Banners</span>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="aiz-side-nav-item" onClick={() => { setBlogSystem(!blogSystem) }}>
                <Link to="#" className="aiz-side-nav-link" >
                  <i className="las la-bullhorn aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Blog System</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${blogSystem ? "mm-show" : "extra"}`}>
                  <li className="aiz-side-nav-item">
                    <Link to="blog" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">All Posts</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="blog-category" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Categories</span>
                    </Link>
                  </li>
                </ul>
              </li>
              {/* marketing */}
              <li className="aiz-side-nav-item" onClick={() => { setMarketing(!marketing) }}>
                <Link to="#" className="aiz-side-nav-link" >
                  <i className="las la-bullhorn aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Marketing</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${marketing ? "mm-show" : "extra"}`}>
                  <li className="aiz-side-nav-item">
                    <Link to="flash_deals" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Flash deals</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="newsletter" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Newsletters</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="sms" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Bulk SMS</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="subscribers" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Subscribers</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="coupon" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Coupon</span>
                    </Link>
                  </li>
                </ul>
              </li>
              {/* Support */}
              <li className="aiz-side-nav-item" onClick={() => { setSupport(!support) }}>
                <Link to="#" className="aiz-side-nav-link" >
                  <i className="las la-link aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Support</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${support ? "mm-show" : "extra"}`}>
                  <li className="aiz-side-nav-item">
                    <Link to="support_ticket" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Ticket</span>
                      <span className="badge badge-info">2</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="conversations" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Product Conversations</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="product-queries" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Product Queries</span>
                    </Link>
                  </li>
                </ul>
              </li>

              {/* affilliate */}

              <li className="aiz-side-nav-item">
                <Link to="#" className="aiz-side-nav-link" onClick={() => { setAffiliate(!affiliate) }}>
                  <i className="las la-link aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Affiliate System</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${affiliate ? "mm-show" : "extra"}`}>
                  <li className="aiz-side-nav-item">
                    <Link to="affiliate" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Affiliate Registration Form</span>
                    </Link>
                  </li>

                  <li className="aiz-side-nav-item">
                    <Link to="affiliate-cofiguration" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Affiliate Configuration</span>
                    </Link>
                  </li>

                  <li className="aiz-side-nav-item">
                    <Link to="affiliate-users" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Affiliate Users</span>
                    </Link>
                  </li>

                  <li className="aiz-side-nav-item">
                    <Link to="refferal/users" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Referral Users</span>
                    </Link>
                  </li>

                  <li className="aiz-side-nav-item">
                    <Link to="affiliate/withdraw_requests" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Affiliate Withdraw Requests</span>
                    </Link>
                  </li>

                  <li className="aiz-side-nav-item">
                    <Link to="affiliate/logs" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Affiliate Logs</span>
                    </Link>
                  </li>

                </ul>
              </li>


              <li className="aiz-side-nav-item">
                <Link to="#" className="aiz-side-nav-link" onClick={() => { setClubPointsystem(!clubPointsystem) }}>
                  <i className="lab la-btc aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Club Point System</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${clubPointsystem ? "mm-show" : "extra"}`}>
                  <li className="aiz-side-nav-item">
                    <Link to="club-points/configuration" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Club Point Configurations</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="set-club-points" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Set Product Point</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="club-points/index" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">User Points</span>
                    </Link>
                  </li>
                </ul>
              </li>

              {/* reward Point Addon*/}
              <li className="aiz-side-nav-item">
                <Link to="#" className="aiz-side-nav-link" onClick={() => { setRewardPoints(!rewardPoints) }}>
                  <i className="lab la-btc aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Reward Point System</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${rewardPoints ? "mm-show" : "extra"}`} id="product">
                  <li className="aiz-side-nav-item">
                    <Link to="set-share-reward-points" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Social Share Reward Points</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="set-like-reward-points" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Social Media Like Reward Points</span>
                    </Link>
                  </li>
                </ul>
              </li>

              {/*OTP addon */}

              <li className="aiz-side-nav-item">
                <Link to="#" className="aiz-side-nav-link" onClick={() => { setOtpSystem(!otpSystem) }}>
                  <i className="las la-phone aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">OTP System</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${otpSystem ? "mm-show" : "extra"}`}>
                  <li className="aiz-side-nav-item">
                    <Link to="otp-configuration" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">OTP Configurations</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="sms-templates" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">SMS Templates</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="otp-credentials-configuration" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Set OTP Credentials</span>
                    </Link>
                  </li>
                </ul>
              </li>

              {/* {african payment gateway} */}

              <li className="aiz-side-nav-item" onClick={() => { setAfricanPayment(!africanPayment) }}>
                <Link to="#" className="aiz-side-nav-link" >
                  <i className="las la-phone aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">African Payment Gateway Addon</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${africanPayment ? "mm-show" : "extra"}`}>
                  <li className="aiz-side-nav-item">
                    <Link to="african/configuration" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">African PG Configurations</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="credentials_index" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Set African PG Credentials</span>
                    </Link>
                  </li>
                </ul>
              </li>
              {/* Setup & Configurations */}
              <li className="aiz-side-nav-item" onClick={() => setSetupConfiguration(!setupConfiguration)}>
                <Link to="#" className="aiz-side-nav-link">
                  <i className="las la-dharmachakra aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Setup &amp; Configurations</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${setupConfiguration ? "mm-show" : "extra"}`}>
                  <li className="aiz-side-nav-item">
                    <Link to="general-setting" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">General Settings</span>
                    </Link>
                  </li>

                  {/* <li className="aiz-side-nav-item">
                    <Link to="activation" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Features activation</span>
                    </Link>
                  </li> */}

                  <li className="aiz-side-nav-item">
                    <Link to="languages" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Languages</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="currency" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Currency</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <a href="https://mmslfashions.in/admin/tax" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Vat &amp; TAX</span>
                    </a>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="pick_up_points" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Pickup point</span>
                    </Link>
                  </li>
                  {/* 
                  <li className="aiz-side-nav-item">
                    <Link to="smtp-settings" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">SMTP Settings</span>
                    </Link>
                  </li> */}

                  {/* <li className="aiz-side-nav-item">
                    <Link to="payment-method" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Payment Methods</span>
                    </Link>
                  </li> */}

                  <li className="aiz-side-nav-item">
                    <Link to="order-configuration" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Order Configuration</span>
                    </Link>
                  </li>


                </ul>
              </li>

              {/* Staffs */}

              <li className="aiz-side-nav-item" onClick={() => { setAllStaffs(!allStaffs) }}>
                <Link to="#" className="aiz-side-nav-link" >
                  <i className="las la-user-tie aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Staffs</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${allStaffs ? "mm-show" : "extra"}`}>
                  <li className="aiz-side-nav-item">
                    <Link to="staffs" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">All staffs</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="roles" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Staff permissions</span>
                    </Link>
                  </li>
                </ul>
              </li>


              {/* <li className="aiz-side-nav-item">
                <Link to="tracking-order" className="aiz-side-nav-link">
                  <i class="las la-shopping-cart aiz-side-nav-icon"></i>
                  <span className="aiz-side-nav-text">Tracking Order</span>
                </Link>
              </li> */}

              <li className="aiz-side-nav-item">
                <Link to="#" className="aiz-side-nav-link" onClick={() => { setAllStaff(!allStaff) }}>
                  <i className="las la-user-tie aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Settings</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${allStaff ? "mm-show" : "extra"}`}>
                  <li className="aiz-side-nav-item">
                    <Link to="system_settings" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">System Settings</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="roles" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Staff permissions</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="add_printer" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Add Printer</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="list_pop" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">List Pop Ups</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="sms-templates" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">sms-templates</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="email_templates" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">email_templates</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="offical-sell" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">offical-sell</span>
                    </Link>
                  </li>

                </ul>
              </li>

              <li className="aiz-side-nav-item">
                <Link to="#" className="aiz-side-nav-link" onClick={() => { setBooking(!booking) }}>
                  <i className="las la-user-tie aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Logistics Operations</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${booking ? "mm-show" : "extra"}`}>
                  <li className="aiz-side-nav-item">
                    <Link to="booking-list" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Booking List</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="booking-entry" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Booking Entry</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="menifest-list" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Menifest List</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="menifest-entry" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Menifest entry</span>
                    </Link>
                  </li>


                  <li className="aiz-side-nav-item">
                    <Link to="delivery-run-list" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Parcel in Scan List</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="delivery-run-sheet" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Parcel in Scan Entry</span>
                    </Link>
                  </li>


                  <li className="aiz-side-nav-item">
                    <Link to="delivery-run-list" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Delivery Run Sheet List</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="delivery-run-sheet" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Delivery Run Sheet Entry</span>
                    </Link>
                  </li>

                  <li className="aiz-side-nav-item">
                    <Link to="pod-list" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">POD List</span>
                    </Link>
                  </li>

                </ul>
              </li>


            </ul>{/* .aiz-side-nav */}
          </div>{/* .aiz-side-nav-wrap */}
        </div>

      </>
    )
  } else {
    return (
      <>
        <div className="aiz-sidebar left c-scrollbar c-scrollbar-2" style={{ backgroundColor: "#e1e1db" }}>
          <div className="aiz-side-nav-logo-wrap">
            <a href="https://mmslfashions.in/admin" className="d-block text-left">
              {/* <img className="mw-100" src={"https://mmslfashions.in/public/assets/img/logo.png"} alt /> */}
            </a>
          </div>
          <div className="aiz-side-nav-wrap">
            <div className="px-20px mb-3">
              <input className="form-control bg-soft-secondary border-0 form-control-sm text-white" type="text" placeholder="Search in menu" id="menu-search" fdprocessedid="axe2ae" />
            </div>
            <ul className="aiz-side-nav-list" id="search-menu">
            </ul>
            <ul className="aiz-side-nav-list metismenu" id="main-menu" data-toggle="aiz-side-menu">



              <li className="aiz-side-nav-item">
                <Link to="" className="aiz-side-nav-link ">
                  <span className="aiz-side-nav-text">Dashboard</span>
                </Link>
              </li>

              <li className="aiz-side-nav-item">
                <Link to="assign_order" className="aiz-side-nav-link ">
                  <span className="aiz-side-nav-text">Assign Orders List</span>
                </Link>
              </li>


              {data && data.map((item) => {
                if (item.orderStatusName === 'Pending' || item.orderStatusName === 'Delivered' || item.orderStatusName === 'Cancelled' || item.orderStatusName === 'Rejected') {
                  return <li key={item._id} className="aiz-side-nav-item" onClick={() => window.localStorage.setItem('orderName', item.orderStatusName)}>
                    <Link to={`assign_orders/status/${item._id}`} className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Assign {item.orderStatusName}</span>
                    </Link>
                  </li>
                }
              })}




              {isLoading && <div className="preloaderCount">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>}



              {/* <li className="aiz-side-nav-item">
                <Link to="inhouse-orders" className="aiz-side-nav-link ">
                  <span className="aiz-side-nav-text">Inhouse orders</span>
                </Link>
              </li> */}

              {/* <li className="aiz-side-nav-item">
                <Link to="seller-orders" className="aiz-side-nav-link ">
                  <span className="aiz-side-nav-text">Seller Orders</span>
                </Link>
              </li> */}


              <li className="aiz-side-nav-item" onClick={() => window.localStorage.setItem('orderName', 'All Pick-up Point Order')}>
                <Link to="orders_by_pickup_point" className="aiz-side-nav-link ">
                  <span className="aiz-side-nav-text" style={{ fontSize: "15px", color: "indigo" }}>All Pick-up Point Order</span>
                </Link>
              </li>


              {data && data.map((item) => {
                if (item.orderStatusName === 'Pending' || item.orderStatusName === 'Delivered' || item.orderStatusName === 'Cancelled' || item.orderStatusName === 'Rejected') {
                  return <li key={item._id} className="aiz-side-nav-item" onClick={() => window.localStorage.setItem('orderName', item.orderStatusName)}>
                    <Link to={`orders/status/${item._id}`} className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">{item.orderStatusName}</span>
                    </Link>
                  </li>
                }
              })}


              {/* 
              {data && data.map((item) => {
                if (item.orderStatusName === 'Pending' || item.orderStatusName === 'Delivered' || item.orderStatusName === 'Canceled' || item.orderStatusName === 'Rejected') {
                  return <li key={item._id} className="aiz-side-nav-item" onClick={() => window.localStorage.setItem('orderName', item.orderStatusName)}>
                    <Link to={`orders/PickupPints/${item._id}`} className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">{item.orderStatusName}</span>
                    </Link>
                  </li>
                }

              })} */}

              {isLoadingPick && <div className="preloaderCount">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>}

              {/* Staffs */}

              {/* <li className="aiz-side-nav-item">
                <Link to="#" className="aiz-side-nav-link" onClick={() => { setAllStaffs(!allStaffs) }}>
                  <i className="las la-user-tie aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Staffs</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${allStaffs ? "mm-show" : "extra"}`}>
                  <li className="aiz-side-nav-item">
                    <Link to="staffs" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">All staffs</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="roles" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Staff permissions</span>
                    </Link>
                  </li>
                </ul>
              </li> */}


            </ul>{/* .aiz-side-nav */}
          </div>{/* .aiz-side-nav-wrap */}
        </div>

      </>
    )
  }



}
export default AsideAdmin