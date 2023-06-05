import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

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
  const [update, setUpdate] = useState(false);
  const [facebook, setFacebook] = useState(false);
  const [google, setGoogle] = useState(false);
  const [shipping, setShipping] = useState(false);


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
            <li className="aiz-side-nav-item">
              <Link to="#" className="aiz-side-nav-link" onClick={() => { setState(!state) }}>
                <i className="las la-tasks aiz-side-nav-icon" />
                <span className="aiz-side-nav-text">POS System</span>
                <span className="aiz-side-nav-arrow" />
              </Link>
              <ul className={`aiz-side-nav-list level-2 mm-collapse ${state ? "mm-show" : "extra"}`} id="product">
                <li className="aiz-side-nav-item">
                  <NavLink to="#" className="aiz-side-nav-link ">
                    <span className="aiz-side-nav-text">POS Manager</span>
                  </NavLink>
                </li>
                <li className="aiz-side-nav-item">
                  <NavLink to="pos-activation" className="aiz-side-nav-link">
                    <span className="aiz-side-nav-text">POS Configuration</span>
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="aiz-side-nav-item">
              <Link to="#" className="aiz-side-nav-link" onClick={() => { setProducts(!products) }}>
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
                  <a href="#" className="aiz-side-nav-link ">
                    <span className="aiz-side-nav-text">In House Products</span>
                  </a>
                </li>
                <li className="aiz-side-nav-item">
                  <Link to="products/seller" className="aiz-side-nav-link ">
                    <span className="aiz-side-nav-text">Seller Products</span>
                  </Link>
                </li>
                <li className="aiz-side-nav-item">
                  <Link to="digitalproducts" className="aiz-side-nav-link ">
                    <span className="aiz-side-nav-text">Digital Products</span>
                  </Link>
                </li>
                <li className="aiz-side-nav-item">
                  <Link to="product-bulk-upload/index" className="aiz-side-nav-link">
                    <span className="aiz-side-nav-text">Bulk Import</span>
                  </Link>
                </li>
                <li className="aiz-side-nav-item">
                  <a href="https://mmslfashions.in/admin/product-bulk-export" className="aiz-side-nav-link">
                    <span className="aiz-side-nav-text">Bulk Export</span>
                  </a>
                </li>
                <li className="aiz-side-nav-item">
                  <Link to="categories" className="aiz-side-nav-link ">
                    <span className="aiz-side-nav-text">Category</span>
                  </Link>
                </li>
                <li className="aiz-side-nav-item">
                  <Link to="brands" className="aiz-side-nav-link ">
                    <span className="aiz-side-nav-text">Brand</span>
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

                <li className="aiz-side-nav-item">
                  <Link to="reviews" className="aiz-side-nav-link">
                    <span className="aiz-side-nav-text">Product Reviews</span>
                  </Link>
                </li>
              </ul>
            </li>
            {/* Wholesale Product */}
            <li className="aiz-side-nav-item">
              <Link to="#" className="aiz-side-nav-link" onClick={() => { setWholsale(!wholeSale) }}>
                <i className="las la-luggage-cart aiz-side-nav-icon" />
                <span className="aiz-side-nav-text">Wholesale Products</span>
                <span className="aiz-side-nav-arrow" />
              </Link>
              <ul className={`aiz-side-nav-list level-2 mm-collapse ${wholeSale ? "mm-show" : "extra"}`} id="product">
                <li className="aiz-side-nav-item">
                  <Link to="wholesale-product/create" className="aiz-side-nav-link">
                    <span className="aiz-side-nav-text">Add New Wholesale Product</span>
                  </Link>
                </li>
                <li className="aiz-side-nav-item">
                  <Link to="wholesale/all-products" className="aiz-side-nav-link ">
                    <span className="aiz-side-nav-text">All Wholesale Products</span>
                  </Link>
                </li>
                <li className="aiz-side-nav-item">
                  <Link to="wholesale/all-products" className="aiz-side-nav-link ">
                    <span className="aiz-side-nav-text">In House Wholesale Products</span>
                  </Link>
                </li>
                <li className="aiz-side-nav-item">
                  <a href="https://mmslfashions.in/admin/wholesale/seller-products" className="aiz-side-nav-link ">
                    <span className="aiz-side-nav-text">Seller Wholesale Products</span>
                  </a>
                </li>
              </ul>
            </li>
            {/* Sale */}
            <li className="aiz-side-nav-item">
              <Link to="#" className="aiz-side-nav-link" onClick={() => { setSales(!sales) }}>
                <i className="las la-money-bill aiz-side-nav-icon" />
                <span className="aiz-side-nav-text">Sales</span>
                <span className="aiz-side-nav-arrow" />
              </Link>
              {/*Submenu*/}
              <ul className={`aiz-side-nav-list level-2 mm-collapse ${sales ? "mm-show" : "extra"}`} id="product">
                <li className="aiz-side-nav-item">
                  <Link to="all_orders" className="aiz-side-nav-link ">
                    <span className="aiz-side-nav-text">All Orders</span>
                  </Link>
                </li>
                <li className="aiz-side-nav-item">
                  <Link to="inhouse-orders" className="aiz-side-nav-link ">
                    <span className="aiz-side-nav-text">Inhouse orders</span>
                  </Link>
                </li>
                <li className="aiz-side-nav-item">
                  <Link to="seller-orders" className="aiz-side-nav-link ">
                    <span className="aiz-side-nav-text">Seller Orders</span>
                  </Link>
                </li>
                <li className="aiz-side-nav-item">
                  <Link to="orders_by_pickup_point" className="aiz-side-nav-link ">
                    <span className="aiz-side-nav-text">Pick-up Point Order</span>
                  </Link>
                </li>
              </ul>
            </li>
            {/* Deliver Boy Addon*/}
            {/* Refund addon */}
            <li className="aiz-side-nav-item">
              <Link to="#" className="aiz-side-nav-link" onClick={() => { setRefunds(!refunds) }}>
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
            {/* Customers */}
            <li className="aiz-side-nav-item">
              <Link to="#" className="aiz-side-nav-link" onClick={() => { setCustomers(!customers) }}>
                <i className="las la-user-friends aiz-side-nav-icon" />
                <span className="aiz-side-nav-text">Customers</span>
                <span className="aiz-side-nav-arrow" />
              </Link>
              <ul className={`aiz-side-nav-list level-2 mm-collapse ${customers ? "mm-show" : "extra"}`} id="product">
                <li className="aiz-side-nav-item">
                  <Link to="customer-list" className="aiz-side-nav-link">
                    <span className="aiz-side-nav-text">Customer list</span>
                  </Link>
                </li>
              </ul>
            </li>
            {/* Sellers */}
            <li className="aiz-side-nav-item">
              <Link to="#" className="aiz-side-nav-link" onClick={() => { setSellers(!sellers) }}>
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
                  <Link to="Paymets" className="aiz-side-nav-link">
                    <span className="aiz-side-nav-text">Payouts</span>
                  </Link>
                </li>
                <li className="aiz-side-nav-item">
                  <Link to="withdraw_requests_all" className="aiz-side-nav-link">
                    <span className="aiz-side-nav-text">Payout Requests</span>
                  </Link>
                </li>
                <li className="aiz-side-nav-item">
                  <Link to="vendor_commission" className="aiz-side-nav-link">
                    <span className="aiz-side-nav-text">Seller Commission</span>
                  </Link>
                </li>
                <li className="aiz-side-nav-item">
                  <Link to="seller_packages" className="aiz-side-nav-link ">
                    <span className="aiz-side-nav-text">Seller Packages</span>
                  </Link>
                </li>
                <li className="aiz-side-nav-item">
                  <Link to="verification/form" className="aiz-side-nav-link">
                    <span className="aiz-side-nav-text">Seller Verification Form</span>
                  </Link>
                </li>
                <li className="aiz-side-nav-item">
                  <Link to="seller-banners" className="aiz-side-nav-link">
                    <span className="aiz-side-nav-text">Seller Banners</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="aiz-side-nav-item">
              <Link to="uploaded-files" className="aiz-side-nav-link ">
                <i className="las la-folder-open aiz-side-nav-icon" />
                <span className="aiz-side-nav-text">Uploaded Files</span>
              </Link>
            </li>
            {/* Reports */}
            <li className="aiz-side-nav-item">
              <Link to="#" className="aiz-side-nav-link" onClick={() => { setReport(!report) }}>
                <i className="las la-file-alt aiz-side-nav-icon" />
                <span className="aiz-side-nav-text">Reports</span>
                <span className="aiz-side-nav-arrow" />
              </Link>
              <ul className={`aiz-side-nav-list level-2 mm-collapse ${report ? "mm-show" : "extra"}`}>
                <li className="aiz-side-nav-item">
                  <Link to="in_house_sale_report" className="aiz-side-nav-link ">
                    <span className="aiz-side-nav-text">In House Product Sale</span>
                  </Link>
                </li>
                <li className="aiz-side-nav-item">
                  <Link to="seller_sale_report" className="aiz-side-nav-link ">
                    <span className="aiz-side-nav-text">Seller Products Sale</span>
                  </Link>
                </li>
                <li className="aiz-side-nav-item">
                  <Link to="stock_report" className="aiz-side-nav-link ">
                    <span className="aiz-side-nav-text">Products Stock</span>
                  </Link>
                </li>
                <li className="aiz-side-nav-item">
                  <Link to="wish_report" className="aiz-side-nav-link ">
                    <span className="aiz-side-nav-text">Products wishlist</span>
                  </Link>
                </li>
                <li className="aiz-side-nav-item">
                  <Link to="user_search_report" className="aiz-side-nav-link ">
                    <span className="aiz-side-nav-text">User Searches</span>
                  </Link>
                </li>
                <li className="aiz-side-nav-item">
                  <Link to="commission-log" className="aiz-side-nav-link">
                    <span className="aiz-side-nav-text">Commission History</span>
                  </Link>
                </li>
                <li className="aiz-side-nav-item">
                  <Link to="wallet-history" className="aiz-side-nav-link">
                    <span className="aiz-side-nav-text">Wallet Recharge History</span>
                  </Link>
                </li>
              </ul>
            </li>
            {/*Blog System*/}
            <li className="aiz-side-nav-item">
              <Link to="#" className="aiz-side-nav-link" onClick={() => { setBlogSystem(!blogSystem) }}>
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
            <li className="aiz-side-nav-item">
              <Link to="#" className="aiz-side-nav-link" onClick={() => { setMarketing(!marketing) }}>
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
            <li className="aiz-side-nav-item">
              <Link to="#" className="aiz-side-nav-link" onClick={() => { setSupport(!support) }}>
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
            {/* Affiliate Addon */}
            <li className="aiz-side-nav-item">
              <a href="#" className="aiz-side-nav-link" onClick={() => { setAffliated(!affliated) }}>
                <i className="las la-link aiz-side-nav-icon" />
                <span className="aiz-side-nav-text">Affiliate System</span>
                <span className="aiz-side-nav-arrow" />
              </a>
              <ul className={`aiz-side-nav-list level-2 mm-collapse ${affliated ? "mm-show" : "extra"}`}>
                <li className="aiz-side-nav-item">
                  <Link to="affiliate" className="aiz-side-nav-link">
                    <span className="aiz-side-nav-text">Affiliate Registration Form</span>
                  </Link>
                </li>
                <li className="aiz-side-nav-item">
                  <Link to="affiliate-cofiguration" className="aiz-side-nav-link">
                    <span className="aiz-side-nav-text">Affiliate Configurations</span>
                  </Link>
                </li>
                <li className="aiz-side-nav-item">
                  <Link to="affiliate-users" className="aiz-side-nav-link ">
                    <span className="aiz-side-nav-text">Affiliate Users</span>
                  </Link>
                </li>
                <li className="aiz-side-nav-item">
                  <Link to="refferal/users" className="aiz-side-nav-link">
                    <span className="aiz-side-nav-text">Referral Users</span>
                  </Link>
                </li>
                <li className="aiz-side-nav-item">
                  <Link to="affiliate/withdraw_requests" className="aiz-side-nav-link">
                    <span className="aiz-side-nav-text">Affiliate Withdraw Requests</span>
                  </Link>
                </li>
                <li className="aiz-side-nav-item">
                  <Link to="affiliate/logs" className="aiz-side-nav-link">
                    <span className="aiz-side-nav-text">Affiliate Logs</span>
                  </Link>
                </li>
              </ul>
            </li>
            {/* Offline Payment Addon*/}
            <li className="aiz-side-nav-item">
              <Link to="#" className="aiz-side-nav-link" onClick={() => { setOfflineWalletRecharge(!offlineWalletRecharge) }}>
                <i className="las la-money-check-alt aiz-side-nav-icon" />
                <span className="aiz-side-nav-text">Offline Payment System</span>
                <span className="aiz-side-nav-arrow" />
              </Link>
              <ul className={`aiz-side-nav-list level-2 mm-collapse ${offlineWalletRecharge ? "mm-show" : "extra"}`}>
                <li className="aiz-side-nav-item">
                  <Link to="manual_payment_methods" className="aiz-side-nav-link ">
                    <span className="aiz-side-nav-text">Manual Payment Methods</span>
                  </Link>
                </li>
                <li className="aiz-side-nav-item">
                  <Link to="offline-wallet-recharge-requests" className="aiz-side-nav-link">
                    <span className="aiz-side-nav-text">Offline Wallet Recharge</span>
                  </Link>
                </li>
                <li className="aiz-side-nav-item">
                  <Link to="offline-seller-package-payment-requests" className="aiz-side-nav-link">
                    <span className="aiz-side-nav-text">Offline Seller Package Payments</span>
                  </Link>
                </li>
              </ul>
            </li>
            {/* Paytm Addon */}
            {/* Club Point Addon*/}
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
                  <a href="https://mmslfashions.in/admin/set-club-points" className="aiz-side-nav-link ">
                    <span className="aiz-side-nav-text">Set Product Point</span>
                  </a>
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
              <Link to="#" className="aiz-side-nav-link" onClick={() => setOtpSystem(!otpSystem)}>
                <i className="las la-phone aiz-side-nav-icon" />
                <span className="aiz-side-nav-text">OTP System</span>
                <span className="aiz-side-nav-arrow" />
              </Link>
              <ul className={`aiz-side-nav-list level-2 mm-collapse ${otpSystem ? "mm-show" : "extra"}`} id="product">
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
            <li className="aiz-side-nav-item">
              <Link to="#" className="aiz-side-nav-link" onClick={() => { setAfricanPayment(!africanPayment) }}>
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
            {/* Website Setup */}
            <li className="aiz-side-nav-item">
              <Link to="#" className="aiz-side-nav-link " onClick={() => { setWebsite(!website) }}>
                <i className="las la-desktop aiz-side-nav-icon" />
                <span className="aiz-side-nav-text">Website Setup</span>
                <span className="aiz-side-nav-arrow" />
              </Link>
              <ul className={`aiz-side-nav-list level-2 mm-collapse ${website ? "mm-show" : "extra"}`}>
                <li className="aiz-side-nav-item">
                  <Link to="website/header" className="aiz-side-nav-link">
                    <span className="aiz-side-nav-text">Header</span>
                  </Link>
                </li>
                <li className="aiz-side-nav-item">
                  <Link to="website-footer" className="aiz-side-nav-link ">
                    <span className="aiz-side-nav-text">Footer</span>
                  </Link>
                </li>
                <li className="aiz-side-nav-item">
                  <Link to="website-pages" className="aiz-side-nav-link ">
                    <span className="aiz-side-nav-text">Pages</span>
                  </Link>
                </li>
                <li className="aiz-side-nav-item">
                  <Link to="website/appearance" className="aiz-side-nav-link">
                    <span className="aiz-side-nav-text">Appearance</span>
                  </Link>
                </li>
              </ul>
            </li>
            {/* Setup & Configurations */}
            <li className="aiz-side-nav-item">
              <Link to="#" className="aiz-side-nav-link" onClick={() => setSetupConfiguration(!setupConfiguration)}>
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
                <li className="aiz-side-nav-item">
                  <Link to="activation" className="aiz-side-nav-link">
                    <span className="aiz-side-nav-text">Features activation</span>
                  </Link>
                </li>
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
                <li className="aiz-side-nav-item">
                  <Link to="smtp-settings" className="aiz-side-nav-link">
                    <span className="aiz-side-nav-text">SMTP Settings</span>
                  </Link>
                </li>
                <li className="aiz-side-nav-item">
                  <Link to="payment-method" className="aiz-side-nav-link">
                    <span className="aiz-side-nav-text">Payment Methods</span>
                  </Link>
                </li>
                <li className="aiz-side-nav-item">
                  <Link to="order-configuration" className="aiz-side-nav-link">
                    <span className="aiz-side-nav-text">Order Configuration</span>
                  </Link>
                </li>
                <li className="aiz-side-nav-item">
                  <Link to="file_system" className="aiz-side-nav-link">
                    <span className="aiz-side-nav-text">File System &amp; Cache Configuration</span>
                  </Link>
                </li>


                <li className="aiz-side-nav-item">
                  <Link to="#" className="aiz-side-nav-link" >
                    <span className="aiz-side-nav-text">Social media Logins</span>
                  </Link>
                </li>
                <li className="aiz-side-nav-item">
                  <Link to="#" className="aiz-side-nav-link" onClick={() => setFacebook(!facebook)}>
                    <span className="aiz-side-nav-text">Facebook</span>
                    <span className="aiz-side-nav-arrow" />
                  </Link>
                  <ul className={`aiz-side-nav-list level-2 mm-collapse ${facebook ? "mm-show" : "extra"}`}>
                    <li className="aiz-side-nav-item">
                      <Link to="facebook-chat" className="aiz-side-nav-link">
                        <span className="aiz-side-nav-text">Facebook Chat</span>
                      </Link>
                    </li>
                    <li className="aiz-side-nav-item">
                      <Link to="facebook-comment" className="aiz-side-nav-link">
                        <span className="aiz-side-nav-text">Facebook Comment</span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="aiz-side-nav-item">
                  <Link to="#" className="aiz-side-nav-link" onClick={() => setGoogle(!google)}>
                    <span className="aiz-side-nav-text">Google</span>
                    <span className="aiz-side-nav-arrow" />
                  </Link>
                  <ul className={`aiz-side-nav-list level-2 mm-collapse ${google ? "mm-show" : "extra"}`}>
                    <li className="aiz-side-nav-item">
                      <Link to="google-analytics" className="aiz-side-nav-link">
                        <span className="aiz-side-nav-text">Analytics Tools</span>
                      </Link>
                    </li>
                    <li className="aiz-side-nav-item">
                      <Link to="google-recaptcha" className="aiz-side-nav-link">
                        <span className="aiz-side-nav-text">Google reCAPTCHA</span>
                      </Link>
                    </li>
                    <li className="aiz-side-nav-item">
                      <Link to="google-map" className="aiz-side-nav-link">
                        <span className="aiz-side-nav-text">Google Map</span>
                      </Link>
                    </li>
                    <li className="aiz-side-nav-item">
                      <Link to="google-firebase" className="aiz-side-nav-link">
                        <span className="aiz-side-nav-text">Google Firebase</span>
                      </Link>
                    </li>
                  </ul>
                </li>





                <li className="aiz-side-nav-item">
                  <Link to="#" className="aiz-side-nav-link" onClick={() => setShipping(!shipping)}>
                    <span className="aiz-side-nav-text">Shipping</span>
                    <span className="aiz-side-nav-arrow" />
                  </Link>
                  <ul className={`aiz-side-nav-list level-2 mm-collapse ${shipping ? "mm-show" : "extra"}`}>
                    <li className="aiz-side-nav-item">
                      <Link to="shipping_configuration" className="aiz-side-nav-link ">
                        <span className="aiz-side-nav-text">Shipping Configuration</span>
                      </Link>
                    </li>
                    <li className="aiz-side-nav-item">
                      <Link to="countries" className="aiz-side-nav-link ">
                        <span className="aiz-side-nav-text">Shipping Countries</span>
                      </Link>
                    </li>
                    <li className="aiz-side-nav-item">
                      <Link to="states" className="aiz-side-nav-link ">
                        <span className="aiz-side-nav-text">Shipping States</span>
                      </Link>
                    </li>
                    <li className="aiz-side-nav-item">
                      <Link to="cities" className="aiz-side-nav-link ">
                        <span className="aiz-side-nav-text">Shipping Cities</span>
                      </Link>
                    </li>
                    <li className="aiz-side-nav-item">
                      <Link to="zones" className="aiz-side-nav-link ">
                        <span className="aiz-side-nav-text">Shipping Zones</span>
                      </Link>
                    </li>
                    <li className="aiz-side-nav-item">
                      <Link to="carriers" className="aiz-side-nav-link ">
                        <span className="aiz-side-nav-text">Shipping Carrier</span>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            {/* Staffs */}
            <li className="aiz-side-nav-item">
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
            </li>
            <li className="aiz-side-nav-item">
              <Link to="#" className="aiz-side-nav-link" onClick={() => { setUpdate(!update) }}>
                <i className="las la-user-tie aiz-side-nav-icon" />
                <span className="aiz-side-nav-text">System</span>
                <span className="aiz-side-nav-arrow" />
              </Link>
              <ul className={`aiz-side-nav-list level-2 mm-collapse ${update ? "mm-show" : "extra"}`}>
                <li className="aiz-side-nav-item">
                  <Link to="system/update" className="aiz-side-nav-link">
                    <span className="aiz-side-nav-text">Update</span>
                  </Link>
                </li>
                <li className="aiz-side-nav-item">
                  <Link to="system/server-status" className="aiz-side-nav-link">
                    <span className="aiz-side-nav-text">Server status</span>
                  </Link>
                </li>
              </ul>
            </li>
            {/* Addon Manager 
                              <li class="aiz-side-nav-item">
                  <a href="https://mmslfashions.in/admin/addons" class="aiz-side-nav-link ">
                      <i class="las la-wrench aiz-side-nav-icon"></i>
                      <span class="aiz-side-nav-text">Addon Manager</span>
                  </a>
              </li>
                          */}
          </ul>{/* .aiz-side-nav */}
        </div>{/* .aiz-side-nav-wrap */}
      </div>

    </>
  )
}
export default AsideAdmin