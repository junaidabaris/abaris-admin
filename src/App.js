
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/media.css";
import "./assets/css/style.css";

import Header from "./common/header/Header";
import "./assets/all-pannel-css/css/vendors.css";
import "./assets/all-pannel-css/css/stylesheets.css";
import "./assets/all-pannel-css/css/aiz-core.css";
import "./assets/all-pannel-css/css/custom-style.css";
import { Navigate, Route, Routes } from 'react-router-dom';

import HomePage from './pages/home';
import Footer from './common/footer/Footer';
import { useState } from 'react';
import DashboardRightSectionAdmin from "./Admin-pannel/Pages/dashboardRightSection";
import DashboardAdminPage from "./Admin-pannel/Pages/dashboardPage";
import AddNewProductsPage from "./Admin-pannel/Pages/addnewProductsPage";
import SellerProductsPage from "./Admin-pannel/Pages/sellerProducts";
import BrandPageAdmin from "./Admin-pannel/Pages/brandAdmin";
import AttributeAdminPage from "./Admin-pannel/Pages/attributeAdminPage";
import CategoriesPageAdmin from "./Admin-pannel/Pages/categoriesPageAdmin";
import PosConfigurationPage from "./Admin-pannel/Pages/posConfigurationPage";
import AllProductsPage from "./Admin-pannel/Pages/all-productsPage";
import ProductsReviewPage from "./Admin-pannel/Pages/productsReviewPage";
import ColorsPage from "./Admin-pannel/Pages/colors";
import AddNewWholesaleProductsPage from "./Admin-pannel/Pages/addNewWholsaleProducts";
import AllWholsaleProductsPage from "./Admin-pannel/Pages/allWholsaleProducts";
import AllOrdersPage from "./Admin-pannel/Pages/allOrders/Index";
import OrdersDetailsPage from "./Admin-pannel/Pages/OrderDetails/Index";
import InHouseOrderPage from "./Admin-pannel/Pages/inhouseOrder/Index";
import SellerOrdersPage from "./Admin-pannel/Pages/sellerOrders/Index";
import PickUpPointOrderPage from "./Admin-pannel/Pages/pickUpPointOrder/Index";
import CustomerListPage from "./Admin-pannel/Pages/customerList/Index";
import AllSellerPage from "./Admin-pannel/Pages/allSeller/Index";
import InHouseProductsSalePage from "./Admin-pannel/Pages/inHouseProductsSale";
import SellerProductsSalePage from "./Admin-pannel/Pages/sellerproductsSalePage";
import ProductsStockPage from "./Admin-pannel/Pages/productsStockPage";
import ProductWhislistPage from "./Admin-pannel/Pages/productWishlistPage";
import UserSearchesPage from "./Admin-pannel/Pages/userSearchesPage";
import ComissionHistoryPage from "./Admin-pannel/Pages/comissionHistoryPage";
import WalletRechargeHistoryPage from "./Admin-pannel/Pages/walletRechargeHistory";
import PayoutsPage from "./Admin-pannel/Pages/payout/Index";
import PayoutRequestPage from "./Admin-pannel/Pages/payoutRequest/Index";
import PaymentShowPage from "./Admin-pannel/Pages/payoutRequest/paymentShow/Index";
import SellerCommissionPage from "./Admin-pannel/Pages/sellerCommission/Index";
import SellerPackagePage from "./Admin-pannel/Pages/sellerPackage/Index";
import CreatePackagePage from "./Admin-pannel/Pages/sellerPackage/createPackage/Index";
import FlashDealsPage from "./Admin-pannel/Pages/flashDealsPage";
import FlashDealsInformationPage from "./Admin-pannel/Pages/flashDealsInformation";
import NewsLetterPage from "./Admin-pannel/Pages/newsLetter";
import BulkSMSPage from "./Admin-pannel/Pages/bulkSMS";
import SubscribersPage from "./Admin-pannel/Pages/subscribersPage";
import UpdateInfo from "./Admin-pannel/common/UpdateInfo";
import VerificationFormPage from "./Admin-pannel/Pages/varification-form/Index";
import SellerBannerPage from "./Admin-pannel/Pages/sellerBanner/Index";
import UploadedFilePages from "./Admin-pannel/Pages/uploadedFile/Index";
import AffiliatePage from "./Admin-pannel/Pages/affliated/Index";
import CouponPage from "./Admin-pannel/Pages/couponPage";
import CouponInformationAddingPage from "./Admin-pannel/Pages/couponInformationAdding";
import TicketPage from "./Admin-pannel/Pages/ticketPage";
import SupportTicketDetailPage from "./Admin-pannel/Pages/supportTicketDetailPage";
import ProductsConversationPage from "./Admin-pannel/Pages/productsConversation";
import ProductsQuerriesPage from "./Admin-pannel/Pages/productsQuerries";
import AfiliatedConfigurationPage from "./Admin-pannel/Pages/affiliatedConfiguration/Index";
import AffiliateUserPage from "./Admin-pannel/Pages/affiliateUser/Index";
import AffiliateUserDetailsPage from "./Admin-pannel/Pages/affiliateUserDetails/AffiliateUserDetails";
import UploadCreate from "./Admin-pannel/Components/uploadedFile/uploadCreate/UploadCreate";
import AffiliateWithdrowPage from "./Admin-pannel/Pages/affiliateWithdrowRequest/Index";
import AffliateLogsPage from "./Admin-pannel/Pages/affliateLogs/Index";
import OfflineWalletRechargePage from "./Admin-pannel/Pages/offlineWalletRecharge/Index";
import OfflineSellerPackagePaymentRequestPage from "./Admin-pannel/Pages/offlineSellerPackage/Index";
import RefundRequestPage from "./Admin-pannel/Pages/refund-request-page";
import ApprovedRefundsPage from "./Admin-pannel/Pages/approved-RefundsPage";
import RejectedRefundsPage from "./Admin-pannel/Pages/rejected-refunds-page";
import DigitalProductsPage from "./Admin-pannel/Pages/digital-products-page";
import BulkImportPage from "./Admin-pannel/Pages/bulkImport-page";
import NewDigitalProducts from "./Admin-pannel/Components/digitalProducts/new-digital-products/NewDigitalProducts";
import RefundConfigurationPage from "./Admin-pannel/Pages/refund-configurationPage";
import AllPostPage from "./Admin-pannel/Pages/all-post-page";
import AddNewPost from "./Admin-pannel/Components/all-post/add-new-post/AddNewPost";
import BlogCategoriesPage from "./Admin-pannel/Pages/blogCategoriesPage";
import AddCategories from "./Admin-pannel/Components/blogCategories/addCategories/AddCategories";
import ShareRewardPointsPage from "./Admin-pannel/Pages/ShareRewardPointsPage";
import RefferalUsersPage from "./Admin-pannel/Pages/refferalUsers/Index";
import ManualPaymentMethordPage from "./Admin-pannel/Pages/manualPaymentMethord/Index";
import ManualPaymentMethordCreate from "./Admin-pannel/Components/manualPaymentMethord/ManualPaymentMethordCreate";
import ManualPaymentMethordInformation from "./Admin-pannel/Components/manualPaymentMethord/ManualPaymentMethordInformation";
import OtpConfigurationPage from "./Admin-pannel/Pages/otpConfigurationPage";
import SmsTemplatesPage from "./Admin-pannel/Pages/smsTemplatesPage";
import SetOtpCredentialPage from "./Admin-pannel/Pages/setOtpCredentialPage";
import ClubPointConfigurationPage from "./Admin-pannel/Pages/clubPointConfiguration/Index";
import UserPointPage from "./Admin-pannel/Pages/userPonts/Index";
import UsrPointsDetails from "./Admin-pannel/Components/userPoint/UserPointDetails";
import AfricanPgConfigurationPage from "./Admin-pannel/Pages/africanPgConfigurationPage";
import PaymentMethodPage from "./Admin-pannel/Pages/paymentMethodPage";
import AfricanPgCredentialPage from "./Admin-pannel/Pages/africanPgCredentialPage";
import HeaderPage from "./Admin-pannel/Pages/websiteSetup/headerPage";
import WebsitePagesPage from "./Admin-pannel/Pages/websiteSetup/wbsitePagesPage";
import AllPages from "./Admin-pannel/Components/websiteSetup/websitePage/AllPages";
import AddNewPage from "./Admin-pannel/Pages/websiteSetup/wbsitePagesPage/AddNewPage";
import FooterPage from "./Admin-pannel/Pages/websiteSetup/footerPage";
import AppearancesPage from "./Admin-pannel/Pages/websiteSetup/appearancesPage";
import GeneralSettingPage from "./Admin-pannel/Pages/setup&Configuration/generalSettingPage";
import FeaturesActivationPage from "./Admin-pannel/Pages/setup&Configuration/featuresActivationPage";
import LikeRewardPointsPage from "./Admin-pannel/Pages/likeRewardPointPage";
import AllStaffsPage from "./Admin-pannel/Pages/allStaffsPage";
import StaffPermissionPage from "./Admin-pannel/Pages/staffPermissionsPage";
import StaffInformation from "./Admin-pannel/Components/allStaffs/staffInformation/StaffInformation";
import RoleInformation from "./Admin-pannel/Components/staffPermissionRole/RoleInformation";
import LanguagesPage from "./Admin-pannel/Pages/setup&Configuration/languagePage";
import AddNewLanguagePage from "./Admin-pannel/Pages/addnewLanguagePage";
import LanguageTranslationPage from "./Admin-pannel/Pages/languageTranslationPage";
import AppTranslationPage from "./Admin-pannel/Pages/appTranslationPage";
import LanguageEditPage from "./Admin-pannel/Pages/languageEditPage";
import CurrencyPage from "./Admin-pannel/Pages/setup&Configuration/currencyPage";
import SystemUpdatePage from "./Admin-pannel/Pages/systemUpdatePage";
import ServerStatusPage from "./Admin-pannel/Pages/serverStatusPage";
import PaymentsMethodPage from "./Admin-pannel/Pages/setup&Configuration/paymentsMethod";
import OrderConfigurationPage from "./Admin-pannel/Pages/setup&Configuration/orderConfigurationPage";
import FileSystemCacheConfigurationPage from "./Admin-pannel/Pages/setup&Configuration/fileSystem&CacheConfiguration";
import SocialMediaLoginPage from "./Admin-pannel/Pages/setup&Configuration/socialMediaLoginPage";
import PickupPointsPage from "./Admin-pannel/Pages/setup&Configuration/pickupPointsPage";
import AddnewPickupPoint from "./Admin-pannel/Components/setup&Configuration/pickupPoints/addNewPickupPoint/AddnewPickupPoint";
import SmtpSettingsPage from "./Admin-pannel/Pages/setup&Configuration/smtpSettingPage";
import FacebookChatPage from "./Admin-pannel/Pages/setup&Configuration/facebook/facebookCahtPage";
import FacebookCommentPage from "./Admin-pannel/Pages/setup&Configuration/facebook/facebookCommentPage";
import AnalyticalPage from "./Admin-pannel/Pages/setup&Configuration/google/analyticalToolsPage";
import GoogleRecaptchaPage from "./Admin-pannel/Pages/setup&Configuration/google/googleRecaptchaPage";
import GoogleMapPage from "./Admin-pannel/Pages/setup&Configuration/google/googlemapPage";
import GoogleFirebasePage from "./Admin-pannel/Pages/setup&Configuration/google/googleFirebasePage";
import ShippingConfigurationPage from "./Admin-pannel/Pages/setup&Configuration/shipping/shippingConfigurationPage";
import ShippingCountriesPage from "./Admin-pannel/Pages/setup&Configuration/shipping/shippingCountriesPage";
import ShippingStatePage from "./Admin-pannel/Pages/setup&Configuration/shipping/shippingStatesPage";
import ShippingCitiesPage from "./Admin-pannel/Pages/setup&Configuration/shipping/shippingCitiesPage";
import ShippingZonesPage from "./Admin-pannel/Pages/setup&Configuration/shipping/shippingZonesPage";
import ShippingCarrierPage from "./Admin-pannel/Pages/setup&Configuration/shipping/shippingCarrierPage";
import AddnewCategories from "./Admin-pannel/Components/categories/addnewCategories/AddnewCategories";
import EditCategories from "./Admin-pannel/Components/categories/editCategories/EditCategories";
import SizePage from "./Admin-pannel/Pages/sizePage";
import EditBrand from "./Admin-pannel/Components/brandsComponents/EditBrand";
import EditSize from "./Admin-pannel/Components/size/editSize/EditSize";
import AddNewCurrency from "./Admin-pannel/Components/setup&Configuration/currency/addNewCurrency/AddNewCurrency";
import EditCurrency from "./Admin-pannel/Components/setup&Configuration/currency/editCurrency/EditCurrency";
import EditCoupon from "./Admin-pannel/Components/couponInformation/editCoupon/EditCoupon";


function App() {
  const [show, setshow] = useState(true);

  return (
    <>
      {show && <Header />}
      <Routes>categories/create
        <Route path="/" element={<Navigate to="/admin" />} />
        <Route path="/admin" element={<DashboardRightSectionAdmin setshow={setshow} />}>
          <Route path="" element={<DashboardAdminPage />} />
          <Route path="products/all/products/create" element={<AddNewProductsPage />} />
          <Route path="products/seller" element={<SellerProductsPage />} />
          <Route path="brands" element={<BrandPageAdmin />} />
          <Route path="brands/edit/:id" element={<EditBrand />} />
          <Route path="attributes" element={<AttributeAdminPage />} />

          <Route path="pos-activation" element={< PosConfigurationPage />} />
          <Route path="products/all" element={< AllProductsPage />} />
          <Route path="reviews" element={<ProductsReviewPage />} />
          <Route path="colors" element={<ColorsPage />} />
          <Route path="size" element={<SizePage />} />
          <Route path="size/edit/:id" element={<EditSize />} />
          <Route path="wholesale-product/create" element={<AddNewWholesaleProductsPage />} />
          <Route path="wholesale/all-products" element={<AllWholsaleProductsPage />} />
          <Route path="all_orders" element={<AllOrdersPage />} />
          <Route path="all_orders/order-Details/:id" element={<OrdersDetailsPage />} />
          <Route path="inhouse-orders" element={<InHouseOrderPage />} />
          <Route path="seller-orders" element={<SellerOrdersPage />} />
          <Route path="orders_by_pickup_point" element={<PickUpPointOrderPage />} />
          <Route path="customer-list" element={<CustomerListPage />} />
          <Route path="seller" element={<AllSellerPage />} />
          <Route path="in_house_sale_report" element={<InHouseProductsSalePage />} />
          <Route path="seller_sale_report" element={<SellerProductsSalePage />} />
          <Route path="stock_report" element={<ProductsStockPage />} />
          <Route path="wish_report" element={<ProductWhislistPage />} />
          <Route path="user_search_report" element={<UserSearchesPage />} />
          <Route path="commission-log" element={<ComissionHistoryPage />} />
          <Route path="wallet-history" element={<WalletRechargeHistoryPage />} />
          <Route path="Paymets" element={<PayoutsPage />} />
          <Route path="withdraw_requests_all" element={<PayoutRequestPage />} />
          <Route path="seller/payment-show" element={<PaymentShowPage />} />
          <Route path="vendor_commission" element={<SellerCommissionPage />} />
          <Route path="seller_packages" element={<SellerPackagePage />} />
          <Route path="seller_packages/create" element={<CreatePackagePage />} />
          <Route path="flash_deals" element={<FlashDealsPage />} />
          <Route path="flash_deals/create" element={<FlashDealsInformationPage />} />
          <Route path="newsletter" element={<NewsLetterPage />} />
          <Route path="sms" element={<BulkSMSPage />} />
          <Route path="subscribers" element={<SubscribersPage />} />
          <Route path="seller_packages/edit" element={<UpdateInfo />} />
          <Route path="verification/form" element={<VerificationFormPage />} />
          <Route path="seller-banners" element={<SellerBannerPage />} />
          <Route path="affiliate" element={<AffiliatePage />} />
          <Route path="affiliate-cofiguration" element={<AfiliatedConfigurationPage />} />
          <Route path="affiliate-users" element={<AffiliateUserPage />} />
          <Route path="affiliate-users/deatails" element={<AffiliateUserDetailsPage />} />
          <Route path="refferal/users" element={<RefferalUsersPage />} />
          <Route path="uploaded-files" element={<UploadedFilePages />} />
          <Route path="uploaded-files/create" element={<UploadCreate />} />
          <Route path="affiliate/withdraw_requests" element={<AffiliateWithdrowPage />} />
          <Route path="affiliate/logs" element={<AffliateLogsPage />} />
          <Route path="coupon" element={<CouponPage />} />
          <Route path="coupon/create" element={<CouponInformationAddingPage />} />
          <Route path="coupon/edit/:id" element={<EditCoupon />} />
          <Route path="support_ticket" element={<TicketPage />} />
          <Route path="support_ticket/detail" element={<SupportTicketDetailPage />} />
          <Route path="conversations" element={<ProductsConversationPage />} />
          <Route path="product-queries" element={<ProductsQuerriesPage />} />
          <Route path="offline-wallet-recharge-requests" element={<OfflineWalletRechargePage />} />
          <Route path="offline-seller-package-payment-requests" element={<OfflineSellerPackagePaymentRequestPage />} />
          <Route path="digitalproducts" element={<DigitalProductsPage />} />
          <Route path="digitalproducts/create" element={<NewDigitalProducts />} />
          <Route path="product-bulk-upload/index" element={<BulkImportPage />} />
          <Route path="refund-request-all" element={<RefundRequestPage />} />
          <Route path="paid-refund" element={<ApprovedRefundsPage />} />
          <Route path="rejected-refund" element={<RejectedRefundsPage />} />
          <Route path="refund-request-config" element={<RefundConfigurationPage />} />
          <Route path="blog" element={< AllPostPage />} />
          <Route path="blog/create" element={< AddNewPost />} />
          <Route path="blog-category" element={< BlogCategoriesPage />} />
          <Route path="blog-category/create" element={< AddCategories />} />
          <Route path="set-share-reward-points" element={< ShareRewardPointsPage />} />
          <Route path="set-like-reward-points" element={< LikeRewardPointsPage />} />
          <Route path="manual_payment_methods" element={<ManualPaymentMethordPage />} />
          <Route path="manual_payment_methods/create" element={<ManualPaymentMethordCreate />} />
          <Route path="manual_payment_methods/Information" element={<ManualPaymentMethordInformation />} />
          <Route path="otp-configuration" element={<OtpConfigurationPage />} />
          <Route path="sms-templates" element={<SmsTemplatesPage />} />
          <Route path="otp-credentials-configuration" element={<SetOtpCredentialPage />} />
          <Route path="club-points/configuration" element={<ClubPointConfigurationPage />} />
          <Route path="club-points/index" element={<UserPointPage />} />
          <Route path="club-points/Details" element={<UsrPointsDetails />} />
          <Route path="african/configuration" element={<AfricanPgConfigurationPage />} />
          <Route path="african/configuration/payment-method" element={<PaymentMethodPage />} />
          <Route path="credentials_index" element={<AfricanPgCredentialPage />} />
          <Route path="website/header" element={<HeaderPage />} />
          <Route path="website-pages" element={<WebsitePagesPage />} />
          <Route path="website-pages/custom-pages/create" element={<AddNewPage />} />
          <Route path="website-pages/custom-pages/edit/:id" element={<AddNewPage />} />
          <Route path="website-footer" element={<FooterPage />} />
          <Route path="website/appearance" element={<AppearancesPage />} />
          <Route path="general-setting" element={<GeneralSettingPage />} />
          <Route path="activation" element={<FeaturesActivationPage />} />
          <Route path="staffs" element={<AllStaffsPage />} />
          <Route path="/admin/staffs/create" element={<StaffInformation />} />
          <Route path="roles" element={<StaffPermissionPage />} />
          <Route path="/admin/roles/create" element={<RoleInformation />} />
          <Route path="languages" element={<LanguagesPage />} />
          <Route path="languages/create" element={<AddNewLanguagePage />} />
          <Route path="languages/translation" element={<LanguageTranslationPage />} />
          <Route path="languages/app-translation" element={<AppTranslationPage />} />
          <Route path="languages/edit/:id" element={<LanguageEditPage />} />
          <Route path="currency" element={<CurrencyPage />} />
          <Route path="currency/create" element={<AddNewCurrency />} />
          <Route path="currency/edit/:id" element={<EditCurrency />} />

          <Route path="system/update" element={<SystemUpdatePage />} />
          <Route path="system/server-status" element={< ServerStatusPage />} />
          <Route path="payment-method" element={<PaymentsMethodPage />} />
          <Route path="order-configuration" element={<OrderConfigurationPage />} />
          <Route path="file_system" element={<FileSystemCacheConfigurationPage />} />
          <Route path="pick_up_points" element={<PickupPointsPage />} />
          <Route path="pick_up_points/create" element={<AddnewPickupPoint />} />
          <Route path="smtp-settings" element={<SmtpSettingsPage />} />
          <Route path="facebook-chat" element={<FacebookChatPage />} />
          <Route path="facebook-comment" element={<FacebookCommentPage />} />
          <Route path="google-analytics" element={<AnalyticalPage />} />
          <Route path="google-recaptcha" element={<GoogleRecaptchaPage />} />
          <Route path="google-map" element={<GoogleMapPage />} />
          <Route path="google-firebase" element={<GoogleFirebasePage />} />
          <Route path="shipping_configuration" element={<ShippingConfigurationPage />} />
          <Route path="countries" element={<ShippingCountriesPage />} />
          <Route path="states" element={<ShippingStatePage />} />
          <Route path="cities" element={<ShippingCitiesPage />} />
          <Route path="zones" element={<ShippingZonesPage />} />
          <Route path="carriers" element={<ShippingCarrierPage />} />

          <Route path="categories" element={<CategoriesPageAdmin />} />
          <Route path="categories/create" element={<AddnewCategories />} />
          <Route path="categories/edit/:id" element={<EditCategories />} />
        </Route>
      </Routes>
      {show && <Footer />}
    </>
  );
}
export default App;
