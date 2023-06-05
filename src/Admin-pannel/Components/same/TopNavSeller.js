function TopNavSeller({ showSidebar }) {
    return <div className="aiz-topbar px-15px px-lg-25px d-flex align-items-stretch justify-content-between">
        <div className="d-flex">
            <div className="aiz-topbar-nav-toggler d-flex align-items-center justify-content-start mr-2 mr-md-3 ml-0"
                data-toggle="aiz-mobile-nav">
                <button className="aiz-mobile-toggler" onClick={showSidebar}>
                    <span></span>
                </button>
            </div>
        </div>
        <div className="d-flex justify-content-between align-items-stretch flex-grow-xl-1">
            <div className="d-flex justify-content-around align-items-center align-items-stretch">
                <div className="d-flex justify-content-around align-items-center align-items-stretch">
                    <div className="aiz-topbar-item">
                        <div className="d-flex align-items-center">
                            <a className="btn btn-icon btn-circle btn-light" href="#"
                                target="_blank" title="Browse Website">
                                <i className="las la-globe"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-around align-items-center align-items-stretch ml-3">
                    <div className="aiz-topbar-item">
                        <div className="d-flex align-items-center">
                            <a className="btn btn-icon btn-circle btn-light"
                                href="#" target="_blank" title="POS">
                                <i className="las la-print"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-around align-items-center align-items-stretch">

                <div className="aiz-topbar-item ml-2">
                    <div className="align-items-stretch d-flex dropdown">
                        <a className="dropdown-toggle no-arrow" data-toggle="dropdown" href="#"
                            role="button" aria-haspopup="false" aria-expanded="false">
                            <span className="btn btn-icon p-0 d-flex justify-content-center align-items-center">
                                <span className="d-flex align-items-center position-relative">
                                    <i className="las la-bell fs-24"></i>
                                    <span
                                        className="badge badge-sm badge-dot badge-circle badge-primary position-absolute absolute-top-right"></span>
                                </span>
                            </span>
                        </a>
                        <div
                            className="dropdown-menu dropdown-menu-right dropdown-menu-animated dropdown-menu-lg py-0">
                            <div className="p-3 bg-light border-bottom">
                                <h6 className="mb-0">Notifications</h6>
                            </div>
                            <div className="px-3 c-scrollbar-light overflow-auto " >
                                <ul className="list-group list-group-flush">
                                    <li
                                        className="list-group-item d-flex justify-content-between align-items- py-3">
                                        <div className="media text-inherit">
                                            <div className="media-body">
                                                <p className="mb-1 text-truncate-2">
                                                    <a
                                                        href="#">
                                                        Order code: 20221103-09563323 has been Placed
                                                    </a>
                                                </p>
                                                <small className="text-muted">
                                                    November 3 2022, 9:56 am
                                                </small>
                                            </div>
                                        </div>
                                    </li>
                                    <li
                                        className="list-group-item d-flex justify-content-between align-items- py-3">
                                        <div className="media text-inherit">
                                            <div className="media-body">
                                                <p className="mb-1 text-truncate-2">
                                                    <a
                                                        href="#">
                                                        Order code: 20221006-19574683 has been Placed
                                                    </a>
                                                </p>
                                                <small className="text-muted">
                                                    October 6 2022, 7:57 pm
                                                </small>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="text-center border-top">
                                <a href="#"
                                    className="text-reset d-block py-2">
                                    View All Notifications
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="aiz-topbar-item ml-2">
                    <div className="align-items-stretch d-flex dropdown " id="lang-change">
                        <a className="dropdown-toggle no-arrow" data-toggle="dropdown" href="#"
                            role="button" aria-haspopup="false" aria-expanded="false">
                            <span className="btn btn-icon">
                                <img src="https://mmslfashions.in/public/assets/img/flags/en.png" height="11" />
                            </span>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-right dropdown-menu-animated dropdown-menu-xs">
                            <li>
                                <a href="#" data-flag="en" className="dropdown-item  active ">
                                    <img src="https://mmslfashions.in/public/assets/img/flags/en.png"
                                        className="mr-2" />
                                    <span className="language">English</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" data-flag="bd" className="dropdown-item ">
                                    <img src="https://mmslfashions.in/public/assets/img/flags/bd.png"
                                        className="mr-2" />
                                    <span className="language">Bangla</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" data-flag="sa" className="dropdown-item ">
                                    <img src="https://mmslfashions.in/public/assets/img/flags/sa.png"
                                        className="mr-2" />
                                    <span className="language">Arabic</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="aiz-topbar-item ml-2">
                    <div className="align-items-stretch d-flex dropdown">
                        <a className="dropdown-toggle no-arrow text-dark" data-toggle="dropdown"
                            href="#" role="button" aria-haspopup="false"
                            aria-expanded="false">
                            <span className="d-flex align-items-center">
                                <span className="avatar avatar-sm mr-md-2">
                                    <img src="https://mmslfashions.in/public/uploads/all/J3IHQMPrIal220S890WP4kxP1shTCJytvopboZrL.png"
                                    />
                                </span>
                                <span className="d-none d-md-block">
                                    <span className="d-block fw-500">Demo Seller</span>
                                    <span className="d-block small opacity-60">seller</span>
                                </span>
                            </span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right dropdown-menu-animated dropdown-menu-md">
                            <a href="#" className="dropdown-item">
                                <i className="las la-user-circle"></i>
                                <span>Profile</span>
                            </a>
                            <a href="#" className="dropdown-item">
                                <i className="las la-sign-out-alt"></i>
                                <span>Logout</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default TopNavSeller