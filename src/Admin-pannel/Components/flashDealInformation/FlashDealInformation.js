import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function FlashDealInformation() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="mb-0 h6">Flash Deal Information</h5>
                                </div>
                                <div className="card-body">
                                    <form action="https://mmslfashions.in/admin/flash_deals" method="POST">
                                        <input type="hidden" name="_token" defaultValue="Xu5GTasdShJ8Mb4DnbZuXHgHlus31K693Rksc8am" />                    <div className="form-group row">
                                            <label className="col-sm-3 control-label" htmlFor="name">Title</label>
                                            <div className="col-sm-9">
                                                <input type="text" placeholder="Title" id="name" name="title" className="form-control" required fdprocessedid="tr0md" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-sm-3 control-label" htmlFor="background_color">Background Color <small>(Hexa-code)</small></label>
                                            <div className="col-sm-9">
                                                <input type="text" placeholder="#FFFFFF" id="background_color" name="background_color" className="form-control" required fdprocessedid="p23i8k" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-lg-3 control-label" htmlFor="name">Text Color</label>
                                            <div className="col-lg-9">
                                                <div className="dropdown bootstrap-select form-control aiz-"><select name="text_color" id="text_color" className="form-control aiz-selectpicker" required tabIndex={-98}>
                                                    <option value>Select One</option>
                                                    <option value="white">White</option>
                                                    <option value="dark">Dark</option>
                                                </select><button type="button" className="btn dropdown-toggle btn-light" data-toggle="dropdown" role="combobox" aria-owns="bs-select-1" aria-haspopup="listbox" aria-expanded="false" data-id="text_color" title="Select One" fdprocessedid="3i7fjl"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">Select One</div></div> </div></button><div className="dropdown-menu "><div className="inner show" role="listbox" id="bs-select-1" tabIndex={-1}><ul className="dropdown-menu inner show" role="presentation" /></div></div></div>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-md-3 col-form-label" htmlFor="signinSrEmail">Banner <small>(1920x500)</small>
                                            </label>
                                            <div className="col-md-9">
                                                <div className="input-group" data-toggle="aizuploader" data-type="image" onClick={handleShow}>
                                                    <div className="input-group-prepend">
                                                        <div className="input-group-text bg-soft-secondary font-weight-medium">Browse</div>
                                                    </div>
                                                    <div className="form-control file-amount">Choose File</div>
                                                    <input type="hidden" name="banner" className="selected-files" />
                                                </div>
                                                <div className="file-preview box sm">
                                                </div>
                                                <span className="small text-muted">This image is shown as cover banner in flash deal details page.</span>

                                                <Modal show={show} onHide={handleClose}>
                                                    <Modal.Header closeButton className='pb-0 bg-light'>
                                                        {/* <Modal.Title>Modal heading</Modal.Title> */}

                                                        <div className="modal-header">
                                                            <div className="uppy-modal-nav">
                                                                <ul className="nav nav-tabs border-0">
                                                                    <li className="nav-item">
                                                                        <a className="nav-link active font-weight-medium text-dark" data-toggle="tab" href="#aiz-select-file">Select File</a>
                                                                    </li>
                                                                    <li className="nav-item">
                                                                        <a className="nav-link font-weight-medium text-dark" data-toggle="tab" href="#aiz-upload-new">Upload New</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" fdprocessedid="rf9ago" onClick={handleClose}>
                                                                <span aria-hidden="true" />
                                                            </button>
                                                        </div>

                                                    </Modal.Header>
                                                    <Modal.Body>
                                                        {/* <div className="modal-body"> */}
                                                        <div className="tab-content h-100">
                                                            <div className="tab-pane active h-100" id="aiz-select-file">
                                                                <div className="aiz-uploader-filter pt-1 pb-3 border-bottom mb-4">
                                                                    <div className="row align-items-center gutters-5 gutters-md-10 position-relative">
                                                                        <div className="col-xl-2 col-md-3 col-5">
                                                                            <div className>
                                                                                {/* Input */}
                                                                                <select className="form-control form-control-xs aiz-selectpicker" name="aiz-uploader-sort" fdprocessedid="irf1if">
                                                                                    <option value="newest" selected>Sort by newest</option>
                                                                                    <option value="oldest">Sort by oldest</option>
                                                                                    <option value="smallest">Sort by smallest</option>
                                                                                    <option value="largest">Sort by largest</option>
                                                                                </select>
                                                                                {/* End Input */}
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-3 col-5">
                                                                            <div className="custom-control custom-radio">
                                                                                <input type="checkbox" className="custom-control-input" name="aiz-show-selected" id="aiz-show-selected" />
                                                                                <label className="custom-control-label" htmlFor="aiz-show-selected">
                                                                                    Selected Only
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-4 col-xl-3 ml-auto mr-0 col-2 position-static">
                                                                            <div className="aiz-uploader-search text-right">
                                                                                <input type="text" className="form-control form-control-xs" name="aiz-uploader-search" placeholder="Search your files" fdprocessedid="xrbxjl" />
                                                                                <i className="search-icon d-md-none"><span /></i>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="aiz-uploader-all clearfix c-scrollbar-light"><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="OEMFF BrandSmall.png" data-value={28}><div className="card-file-thumb"><img src="//mmslfashions.in/public/uploads/all/ClBKaveL2CshSfloa9MHVGkI3l8coNtciAHjCfS9.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">OEMFF BrandSmall</span><span className="ext flex-shrink-0">.png</span></h6><p>8 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="OEMFF Brand.png" data-value={27}><div className="card-file-thumb"><img src="//mmslfashions.in/public/uploads/all/FVxTnItYPUQWkUjCwlcPzfjtaWFoZWisOR0p6OWO.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">OEMFF Brand</span><span className="ext flex-shrink-0">.png</span></h6><p>22 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="banner-6.png" data-value={25}><div className="card-file-thumb"><img src="//mmslfashions.in/public/uploads/all/Nx70PCRmd0brMGlmMCO68H8L2kJo1D8Nmsg25AwV.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">banner-6</span><span className="ext flex-shrink-0">.png</span></h6><p>1 MB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="banner-3.png" data-value={22}><div className="card-file-thumb"><img src="//mmslfashions.in/public/uploads/all/7Bv6pS1lCcsO6IA6KTfKSrJOFRpdokhsUBEaKHoe.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">banner-3</span><span className="ext flex-shrink-0">.png</span></h6><p>1008 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="banner-2.png" data-value={23}><div className="card-file-thumb"><img src="//mmslfashions.in/public/uploads/all/QvlEdvbRcJm2YEPtJkDSgF3Cqe6en5gkGN7zUaQK.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">banner-2</span><span className="ext flex-shrink-0">.png</span></h6><p>1 MB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="banner-4.png" data-value={24}><div className="card-file-thumb"><img src="//mmslfashions.in/public/uploads/all/jbaiLs9zaW6BEZz01pmndGSW5b4odbCIlHcPh49N.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">banner-4</span><span className="ext flex-shrink-0">.png</span></h6><p>1 MB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="banner-5.png" data-value={21}><div className="card-file-thumb"><img src="//mmslfashions.in/public/uploads/all/woEGB2oL5MC7PMezPymdpRD7RBqC0fnian5nj3FZ.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">banner-5</span><span className="ext flex-shrink-0">.png</span></h6><p>455 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="banner-1.png" data-value={20}><div className="card-file-thumb"><img src="//mmslfashions.in/public/uploads/all/J2YmbYGVbQWOoaQOdfEFdcrW71ajvUIME7TpwNMz.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">banner-1</span><span className="ext flex-shrink-0">.png</span></h6><p>1 MB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="fertlz_01.jpg" data-value={15}><div className="card-file-thumb"><img src="//mmslfashions.in/public/uploads/all/v01lSDffgSnZK0HXzyIvBNgzdjnlIuolRvWXoCMA.jpg" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">fertlz_01</span><span className="ext flex-shrink-0">.jpg</span></h6><p>150 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="soybean-1379x331.jpg" data-value={14}><div className="card-file-thumb"><img src="//mmslfashions.in/public/uploads/all/0mM656EXmjvm5VJWhFFvXDaU6W8FZHYfzWCaQOSs.jpg" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">soybean-1379x331</span><span className="ext flex-shrink-0">.jpg</span></h6><p>117 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="falcon-logo.png" data-value={13}><div className="card-file-thumb"><img src="//mmslfashions.in/public/uploads/all/Wnhuad4Xbhfy69Jd8MN8PHGvoGO8hnFcYDs9EnX2.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">falcon-logo</span><span className="ext flex-shrink-0">.png</span></h6><p>4 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="Kynoch-Logo-PNG.png" data-value={12}><div className="card-file-thumb"><img src="//mmslfashions.in/public/uploads/all/z1CNIkuY8rhgQFW7r8RvWWA0akrBbMCTOPgaKzja.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">Kynoch-Logo-PNG</span><span className="ext flex-shrink-0">.png</span></h6><p>30 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="3.png" data-value={10}><div className="card-file-thumb"><img src="//mmslfashions.in/public/uploads/all/VRg3fxSHDaSL6GfE9o05ropnhBao78kMgl0mvIqR.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">3</span><span className="ext flex-shrink-0">.png</span></h6><p>62 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="4.png" data-value={11}><div className="card-file-thumb"><img src="//mmslfashions.in/public/uploads/all/X8h9TcK3S4MFhEH7HiV62ewEnG1S3Jgq1UlzvRtu.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">4</span><span className="ext flex-shrink-0">.png</span></h6><p>55 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="2.png" data-value={9}><div className="card-file-thumb"><img src="//mmslfashions.in/public/uploads/all/zNg9tlDvU7nCORhtIwFGhFzBpbPAoNwUL3FWpkpx.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">2</span><span className="ext flex-shrink-0">.png</span></h6><p>48 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="1.png" data-value={8}><div className="card-file-thumb"><img src="//mmslfashions.in/public/uploads/all/0fszFBvsXqbAUVAsKTXrOAVHBnuvUvHsVeWjuqji.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">1</span><span className="ext flex-shrink-0">.png</span></h6><p>51 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="cate1.png" data-value={7}><div className="card-file-thumb"><img src="//mmslfashions.in/public/uploads/all/DgCjfbcutqaF1glvntiF2FqbUNOXKGozoEflL3Qg.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">cate1</span><span className="ext flex-shrink-0">.png</span></h6><p>87 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="favicon-16x16.png" data-value={6}><div className="card-file-thumb"><img src="//mmslfashions.in/public/uploads/all/vJzLXpWA3m6TDXRLHvfuunmAl2Zb4K1imttT1QqB.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">favicon-16x16</span><span className="ext flex-shrink-0">.png</span></h6><p>743 Bytes</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="favicon-32x32.png" data-value={5}><div className="card-file-thumb"><img src="//mmslfashions.in/public/uploads/all/qWtVvdVrkexRR41VVaNV6W7yzjMGUVrD3HqfnYNA.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">favicon-32x32</span><span className="ext flex-shrink-0">.png</span></h6><p>2 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="categore-1.png" data-value={4}><div className="card-file-thumb"><img src="//mmslfashions.in/public/uploads/all/AaGZPAv5UQcsOyE0eV96T1JNQgxmynDDD1cdApbn.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">categore-1</span><span className="ext flex-shrink-0">.png</span></h6><p>121 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="etglogo.png" data-value={1}><div className="card-file-thumb"><img src="//mmslfashions.in/public/uploads/all/AkvOmGh1LRAnHZmlVDsgPA5f5jgYesnZxVtONnhX.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">etglogo</span><span className="ext flex-shrink-0">.png</span></h6><p>2 KB</p></div></div></div></div></div>
                                                            </div>
                                                            <div className="tab-pane h-100" id="aiz-upload-new">
                                                                <div id="aiz-upload-files" className="h-100">
                                                                    <div className="uppy-Root uppy-Dashboard uppy-Dashboard--animateOpenClose uppy-Dashboard--isInnerWrapVisible" aria-hidden="false" aria-label="File Uploader">
                                                                        <div className="uppy-Dashboard-overlay" tabIndex={-1} />
                                                                        <div className="uppy-Dashboard-inner" style={{ width: 750, height: 550 }}>
                                                                            <div className="uppy-Dashboard-innerWrap">
                                                                                <div className="uppy-Dashboard-dropFilesHereHint">Drop your files here</div>
                                                                                <div className="uppy-DashboardAddFiles">
                                                                                    <input className="uppy-Dashboard-input" hidden aria-hidden="true" tabIndex={-1} type="file" name="files[]" multiple />
                                                                                    <div className="uppy-DashboardTabs">
                                                                                        <div className="uppy-Dashboard-dropFilesTitle">Drop files here, paste or <button type="button" className="uppy-u-reset uppy-Dashboard-browse">Browse</button>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="uppy-DashboardAddFiles-info" />
                                                                                </div>
                                                                                <span />
                                                                                <span />
                                                                                <span />
                                                                                <div className="uppy-Dashboard-progressindicators">
                                                                                    <div className="uppy-StatusBar is-waiting" aria-hidden="true">
                                                                                        <div className="uppy-StatusBar-progress  " role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={0} style={{ width: '0%' }} />

                                                                                        <div className="uppy-StatusBar-actions" />
                                                                                    </div>
                                                                                    <div className="uppy uppy-Informer" aria-hidden="true">
                                                                                        <p role="alert">
                                                                                        </p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* </div> */}



                                                    </Modal.Body>
                                                    <Modal.Footer className='modal-footer justify-content-between bg-light'>
                                                        <div className="flex-grow-1 overflow-hidden d-flex">
                                                            <div className>
                                                                <div className="aiz-uploader-selected">0 File selected</div>
                                                                <button type="button" className="btn-link btn btn-sm p-0 aiz-uploader-selected-clear" fdprocessedid="1y2zyf">Clear</button>
                                                            </div>
                                                            <div className="mb-0 ml-3">
                                                                <button type="button" className="btn btn-sm btn-primary me-2" id="uploader_prev_btn" disabled="disabled">Prev</button>
                                                                <button type="button" className="btn btn-sm btn-primary" id="uploader_next_btn" disabled="disabled">Next</button>
                                                            </div>
                                                        </div>
                                                        <button type="button" className="btn btn-sm btn-primary " data-toggle="aizUploaderAddSelected" fdprocessedid="edrfkp" onClick={handleClose}>Add Files</button>

                                                    </Modal.Footer>
                                                </Modal>

                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-sm-3 control-label" htmlFor="start_date">Date</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control aiz-date-range" name="date_range" placeholder="Select Date" data-time-picker="true" data-format="DD-MM-Y HH:mm:ss" data-separator=" to " autoComplete="off" required fdprocessedid="hq8ckh" />
                                            </div>
                                        </div>
                                        <div className="form-group row mb-3">
                                            <label className="col-sm-3 control-label" htmlFor="products">Products</label>
                                            <div className="col-sm-9">
                                                <div className="dropdown bootstrap-select show-tick form-control aiz-"><select name="products[]" id="products" className="form-control aiz-selectpicker" multiple required data-placeholder="Choose Products" data-live-search="true" data-selected-text-format="count" tabIndex={-98}>
                                                    <option value={78}>PRILLED UREA 50KG BAG</option>
                                                    <option value={77}>Ammonium Sulphate</option>
                                                    <option value={76}>Ammonium Sulphate</option>
                                                    <option value={75}>Ammonium Sulphate</option>
                                                    <option value={74}>test11</option>
                                                    <option value={11}>17:17:17  50 KG BAG</option>
                                                    <option value={12}>AMMONIUM NITRATE 10 KG BAG</option>
                                                    <option value={13}>AMMONIUM NITRATE 25 KG BAG</option>
                                                    <option value={14}>AMMONIUM NITRATE 5 KG BAG</option>
                                                    <option value={15}>AMMONIUM NITRATE IN 50 KG BAG</option>
                                                    <option value={16}>AS (CAPROLACTAM) IN BULK</option>
                                                    <option value={17}>AS (GRANULAR) IN 5 KG BAG</option>
                                                    <option value={18}>AS (GRANULAR) IN 50 KG BAG</option>
                                                    <option value={19}>CAN - CAN 27% IN 25 KG BAG</option>
                                                    <option value={20}>CAN - CAN 27% IN 50 KG BAG</option>
                                                    <option value={21}>CAN 10 KG BAG</option>
                                                    <option value={22}>CAN 25 KG BAG</option>
                                                    <option value={23}>CAN 5 KG BAG</option>
                                                    <option value={24}>CAN PRILLED 25 KG BAG</option>
                                                    <option value={25}>CAN PRILLED 50 KG BAG</option>
                                                    <option value={26}>D COMPOUND (10-20-10+6S)-10 KG BAG</option>
                                                    <option value={27}>D COMPOUND (10-20-10+6S)-25 KG BAG</option>
                                                    <option value={28}>D COMPOUND (10-20-10+6S)-5 KG BAG</option>
                                                    <option value={29}>D COMPOUND (10-20-10+6S)-50 KG BAG</option>
                                                    <option value={30}>DAP IN 50 KG BAG</option>
                                                    <option value={31}>DOLOMITIC MICRONISED LIME 100 GM</option>
                                                    <option value={32}>DOLOMITIC MICRONISED LIME 50 GM</option>
                                                    <option value={33}>GRANULAR UREA IN 10 KG BAG</option>
                                                    <option value={34}>MAP 10 KG BAG</option>
                                                    <option value={35}>MAP 25 KG BAG</option>
                                                    <option value={36}>MAP GRANULAR 5 KG BAG</option>
                                                    <option value={37}>MAP GRANULAR IN 50 KG BAG</option>
                                                    <option value={38}>MICRONISED GYPSUM 100 GM</option>
                                                    <option value={39}>MICRONISED GYPSUM 5 KG BAG</option>
                                                    <option value={40}>MICRONISED GYPSUM 50 GM</option>
                                                    <option value={41}>MICRONISED LIME 25 KG BAG</option>
                                                    <option value={42}>MOP 10 KG BAG</option>
                                                    <option value={43}>MOP Fine IN 50 KG BAG</option>
                                                    <option value={44}>MOP GRANULAR IN 50 KG BAG</option>
                                                    <option value={45}>MOP STANDARD IN 50 KG BAG</option>
                                                    <option value={46}>PRILLED CAN IN 5 KG</option>
                                                    <option value={47}>SOP GRANULAR IN 50 KG BAG</option>
                                                    <option value={48}>SSP GRANULAR IN 50 KG BAG</option>
                                                    <option value={49}>SULPHUR (GRANULAR) IN 50 KG BAG</option>
                                                    <option value={50}>UREA 50 KG BAG</option>
                                                    <option value={51}>UREA GRANULAR 10 KG BAG</option>
                                                    <option value={52}>UREA GRANULAR 25 KG BAG</option>
                                                    <option value={53}>UREA GRANULAR 5 KG BAG</option>
                                                    <option value={54}>UREA PRILLED 10 KG BAG</option>
                                                    <option value={55}>UREA PRILLED 25 KG BAG</option>
                                                    <option value={56}>UREA PRILLED 5 KG BAG</option>
                                                    <option value={57}>UREA PRILLED 50 KG BAG</option>
                                                    <option value={58}>SOP 10 KG BAG</option>
                                                    <option value={59}>NPK (23-10-5+6S+1ZN) IN 10 KG BAG</option>
                                                    <option value={60}>NPK (23-10-5+6S+1ZN) IN 25 KG BAG</option>
                                                    <option value={61}>NPK (23-10-5+6S+1ZN) IN 50 KG BAG</option>
                                                    <option value={62}>GRANULAR UREA IN 25 KG BAG</option>
                                                    <option value={63}>GRANULAR UREA IN 50 KG BAG</option>
                                                    <option value={64}>PRILLED UREA 50KG BAG</option>
                                                    <option value={65}>CAN IN 25 KG BAG</option>
                                                    <option value={66}>CAN IN 50 KG BAG</option>
                                                    <option value={67}>CALCIUM AMMONIUM NITRATE+0.3% BORON</option>
                                                    <option value={68}>AS (CAPROLACTAM) IN 50 KG BAG</option>
                                                    <option value={69}>AS (CAPROLACTUM) IN 25 KG BAG</option>
                                                    <option value={70}>AS (GRANULAR) IN BULK</option>
                                                    <option value={71}>D COMPOUND (8-18-15+6S+0.1B)-50 KG BAG</option>
                                                    <option value={72}>MAP GRANULAR IN 50KG BAG</option>
                                                    <option value={73}>KIESERITE (MAG SUL) IN 25 KG BAG</option>
                                                    <option value={5}>Ammonium Sulphate</option>
                                                    <option value={4}>Ammonium Sulphate</option>
                                                    <option value={3}>Ammonium Nitrate</option>
                                                    <option value={2}>17:17:17</option>
                                                    <option value={1}>ACETA</option>
                                                </select><button type="button" className="btn dropdown-toggle btn-light bs-placeholder" data-toggle="dropdown" role="combobox" aria-owns="bs-select-2" aria-haspopup="listbox" aria-expanded="false" data-id="products" title="Nothing selected" fdprocessedid="px0be5"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">Nothing selected</div></div> </div></button><div className="dropdown-menu "><div className="bs-searchbox"><input type="search" className="form-control" autoComplete="off" role="combobox" aria-label="Search" aria-controls="bs-select-2" aria-autocomplete="list" /></div><div className="inner show" role="listbox" id="bs-select-2" tabIndex={-1} aria-multiselectable="true"><ul className="dropdown-menu inner show" role="presentation" /></div></div></div>
                                            </div>
                                        </div>
                                        <div className="alert alert-danger">
                                            If any product has discount or exists in another flash deal, the discount will be replaced by this discount &amp; time limit.
                                        </div>
                                        <br />
                                        <div className="form-group" id="discount_table">
                                        </div>
                                        <div className="form-group mb-0 text-right">
                                            <button type="submit" className="btn btn-primary" fdprocessedid="le2936">Save</button>
                                        </div>
                                    </form>
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
    )
}
export default FlashDealInformation;