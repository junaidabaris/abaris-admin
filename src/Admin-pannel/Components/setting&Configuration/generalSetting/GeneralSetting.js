import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function GeneralSetting() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <div className="card">
                                <div className="card-header">
                                    <h1 className="mb-0 h6">General Settings</h1>
                                </div>
                                <div className="card-body">
                                    <form className="form-horizontal" action="https://mmslfashions.in/admin/business-settings/update" method="POST" encType="multipart/form-data">
                                        <input type="hidden" name="_token" defaultValue="MfWj9eEof7fNq0mKB42pyG49sPDPkHAVyVSS7UBT" />                        <div className="form-group row">
                                            <label className="col-sm-3 col-from-label">System Name</label>
                                            <div className="col-sm-9">
                                                <input type="hidden" name="types[]" defaultValue="site_name" />
                                                <input type="text" name="site_name" className="form-control" defaultValue fdprocessedid="ihieoq" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-sm-3 col-from-label">System Logo - White</label>
                                            <div className="col-sm-9">
                                                <div className="input-group" data-toggle="aizuploader" data-type="image" onClick={handleShow}>
                                                    <div className="input-group-prepend">
                                                        <div className="input-group-text bg-soft-secondary">Browse</div>
                                                    </div>
                                                    <div className="form-control file-amount">Choose Files</div>
                                                    <input type="hidden" name="types[]" defaultValue="system_logo_white" />
                                                    <input type="hidden" name="system_logo_white" defaultValue className="selected-files" />
                                                </div>
                                                <div className="file-preview box sm" />
                                                <small>Will be used in admin panel side menu</small>
                                            </div>
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
                                        <div className="form-group row">
                                            <label className="col-sm-3 col-from-label">System Logo - Black</label>
                                            <div className="col-sm-9">
                                                <div className="input-group" data-toggle="aizuploader" data-type="image" onClick={handleShow}>
                                                    <div className="input-group-prepend">
                                                        <div className="input-group-text bg-soft-secondary">Browse</div>
                                                    </div>
                                                    <div className="form-control file-amount">Choose Files</div>
                                                    <input type="hidden" name="types[]" defaultValue="system_logo_black" />
                                                    <input type="hidden" name="system_logo_black" defaultValue className="selected-files" />
                                                </div>
                                                <div className="file-preview box sm" />
                                                <small>Will be used in admin panel topbar in mobile + Admin login page</small>
                                            </div>
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
                                        <div className="form-group row">
                                            <label className="col-sm-3 col-from-label">System Timezone</label>
                                            <div className="col-sm-9">
                                                <input type="hidden" name="types[]" defaultValue="timezone" />
                                                <div className="dropdown bootstrap-select form-control aiz-"><select name="timezone" className="form-control aiz-selectpicker" data-live-search="true" tabIndex={-98}>
                                                    <option value="Pacific/Kwajalein">(GMT-12:00) International Date Line West</option>
                                                    <option value="Pacific/Midway">(GMT-11:00) Midway Island</option>
                                                    <option value="Pacific/Apia">(GMT-11:00) Samoa</option>
                                                    <option value="Pacific/Honolulu">(GMT-10:00) Hawaii</option>
                                                    <option value="America/Anchorage">(GMT-09:00) Alaska</option>
                                                    <option value="America/Los_Angeles">(GMT-08:00) Pacific Time (US &amp; Canada)</option>
                                                    <option value="America/Tijuana">(GMT-08:00) Tijuana</option>
                                                    <option value="America/Phoenix">(GMT-07:00) Arizona</option>
                                                    <option value="America/Denver">(GMT-07:00) Mountain Time (US &amp; Canada)</option>
                                                    <option value="America/Chihuahua">(GMT-07:00) Chihuahua</option>
                                                    <option value="America/Chihuahua">(GMT-07:00) La Paz</option>
                                                    <option value="America/Mazatlan">(GMT-07:00) Mazatlan</option>
                                                    <option value="America/Chicago">(GMT-06:00) Central Time (US &amp; Canada)</option>
                                                    <option value="America/Managua">(GMT-06:00) Central America</option>
                                                    <option value="America/Mexico_City">(GMT-06:00) Guadalajara</option>
                                                    <option value="America/Mexico_City">(GMT-06:00) Mexico City</option>
                                                    <option value="America/Monterrey">(GMT-06:00) Monterrey</option>
                                                    <option value="America/Regina">(GMT-06:00) Saskatchewan</option>
                                                    <option value="America/New_York">(GMT-05:00) Eastern Time (US &amp; Canada)</option>
                                                    <option value="America/Indiana/Indianapolis">(GMT-05:00) Indiana (East)</option>
                                                    <option value="America/Bogota">(GMT-05:00) Bogota</option>
                                                    <option value="America/Lima">(GMT-05:00) Lima</option>
                                                    <option value="America/Bogota">(GMT-05:00) Quito</option>
                                                    <option value="America/Halifax">(GMT-04:00) Atlantic Time (Canada)</option>
                                                    <option value="America/Caracas">(GMT-04:00) Caracas</option>
                                                    <option value="America/La_Paz">(GMT-04:00) La Paz</option>
                                                    <option value="America/Santiago">(GMT-04:00) Santiago</option>
                                                    <option value="America/St_Johns">(GMT-03:30) Newfoundland</option>
                                                    <option value="America/Sao_Paulo">(GMT-03:00) Brasilia</option>
                                                    <option value="America/Argentina/Buenos_Aires">(GMT-03:00) Buenos Aires</option>
                                                    <option value="America/Argentina/Buenos_Aires">(GMT-03:00) Georgetown</option>
                                                    <option value="America/Godthab">(GMT-03:00) Greenland</option>
                                                    <option value="America/Noronha">(GMT-02:00) Mid-Atlantic</option>
                                                    <option value="Atlantic/Azores">(GMT-01:00) Azores</option>
                                                    <option value="Atlantic/Cape_Verde">(GMT-01:00) Cape Verde Is.</option>
                                                    <option value="Africa/Casablanca">(GMT) Casablanca</option>
                                                    <option value="Europe/London">(GMT) Dublin</option>
                                                    <option value="Europe/London">(GMT) Edinburgh</option>
                                                    <option value="Europe/Lisbon">(GMT) Lisbon</option>
                                                    <option value="Europe/London">(GMT) London</option>
                                                    <option value="UTC" selected>(GMT) UTC</option>
                                                    <option value="Africa/Monrovia">(GMT) Monrovia</option>
                                                    <option value="Europe/Amsterdam">(GMT+01:00) Amsterdam</option>
                                                    <option value="Europe/Belgrade">(GMT+01:00) Belgrade</option>
                                                    <option value="Europe/Berlin">(GMT+01:00) Berlin</option>
                                                    <option value="Europe/Berlin">(GMT+01:00) Bern</option>
                                                    <option value="Europe/Bratislava">(GMT+01:00) Bratislava</option>
                                                    <option value="Europe/Brussels">(GMT+01:00) Brussels</option>
                                                    <option value="Europe/Budapest">(GMT+01:00) Budapest</option>
                                                    <option value="Europe/Copenhagen">(GMT+01:00) Copenhagen</option>
                                                    <option value="Europe/Ljubljana">(GMT+01:00) Ljubljana</option>
                                                    <option value="Europe/Madrid">(GMT+01:00) Madrid</option>
                                                    <option value="Europe/Paris">(GMT+01:00) Paris</option>
                                                    <option value="Europe/Prague">(GMT+01:00) Prague</option>
                                                    <option value="Europe/Rome">(GMT+01:00) Rome</option>
                                                    <option value="Europe/Sarajevo">(GMT+01:00) Sarajevo</option>
                                                    <option value="Europe/Skopje">(GMT+01:00) Skopje</option>
                                                    <option value="Europe/Stockholm">(GMT+01:00) Stockholm</option>
                                                    <option value="Europe/Vienna">(GMT+01:00) Vienna</option>
                                                    <option value="Europe/Warsaw">(GMT+01:00) Warsaw</option>
                                                    <option value="Africa/Lagos">(GMT+01:00) West Central Africa</option>
                                                    <option value="Europe/Zagreb">(GMT+01:00) Zagreb</option>
                                                    <option value="Europe/Athens">(GMT+02:00) Athens</option>
                                                    <option value="Europe/Bucharest">(GMT+02:00) Bucharest</option>
                                                    <option value="Africa/Cairo">(GMT+02:00) Cairo</option>
                                                    <option value="Africa/Harare">(GMT+02:00) Harare</option>
                                                    <option value="Europe/Helsinki">(GMT+02:00) Helsinki</option>
                                                    <option value="Europe/Istanbul">(GMT+02:00) Istanbul</option>
                                                    <option value="Asia/Jerusalem">(GMT+02:00) Jerusalem</option>
                                                    <option value="Europe/Kiev">(GMT+02:00) Kyev</option>
                                                    <option value="Europe/Minsk">(GMT+02:00) Minsk</option>
                                                    <option value="Africa/Johannesburg">(GMT+02:00) Pretoria</option>
                                                    <option value="Europe/Riga">(GMT+02:00) Riga</option>
                                                    <option value="Europe/Sofia">(GMT+02:00) Sofia</option>
                                                    <option value="Europe/Tallinn">(GMT+02:00) Tallinn</option>
                                                    <option value="Europe/Vilnius">(GMT+02:00) Vilnius</option>
                                                    <option value="Asia/Baghdad">(GMT+03:00) Baghdad</option>
                                                    <option value="Asia/Kuwait">(GMT+03:00) Kuwait</option>
                                                    <option value="Europe/Moscow">(GMT+03:00) Moscow</option>
                                                    <option value="Africa/Nairobi">(GMT+03:00) Nairobi</option>
                                                    <option value="Asia/Riyadh">(GMT+03:00) Riyadh</option>
                                                    <option value="Europe/Moscow">(GMT+03:00) St. Petersburg</option>
                                                    <option value="Europe/Volgograd">(GMT+03:00) Volgograd</option>
                                                    <option value="Asia/Tehran">(GMT+03:30) Tehran</option>
                                                    <option value="Asia/Muscat">(GMT+04:00) Abu Dhabi</option>
                                                    <option value="Asia/Baku">(GMT+04:00) Baku</option>
                                                    <option value="Asia/Muscat">(GMT+04:00) Muscat</option>
                                                    <option value="Asia/Tbilisi">(GMT+04:00) Tbilisi</option>
                                                    <option value="Asia/Yerevan">(GMT+04:00) Yerevan</option>
                                                    <option value="Asia/Kabul">(GMT+04:30) Kabul</option>
                                                    <option value="Asia/Yekaterinburg">(GMT+05:00) Ekaterinburg</option>
                                                    <option value="Asia/Karachi">(GMT+05:00) Islamabad</option>
                                                    <option value="Asia/Karachi">(GMT+05:00) Karachi</option>
                                                    <option value="Asia/Tashkent">(GMT+05:00) Tashkent</option>
                                                    <option value="Asia/Kolkata">(GMT+05:30) Chennai</option>
                                                    <option value="Asia/Kolkata">(GMT+05:30) Kolkata</option>
                                                    <option value="Asia/Kolkata">(GMT+05:30) Mumbai</option>
                                                    <option value="Asia/Kolkata">(GMT+05:30) New Delhi</option>
                                                    <option value="Asia/Kathmandu">(GMT+05:45) Kathmandu</option>
                                                    <option value="Asia/Almaty">(GMT+06:00) Almaty</option>
                                                    <option value="Asia/Dhaka">(GMT+06:00) Astana</option>
                                                    <option value="Asia/Dhaka">(GMT+06:00) Dhaka</option>
                                                    <option value="Asia/Novosibirsk">(GMT+06:00) Novosibirsk</option>
                                                    <option value="Asia/Colombo">(GMT+06:00) Sri Jayawardenepura</option>
                                                    <option value="Asia/Rangoon">(GMT+06:30) Rangoon</option>
                                                    <option value="Asia/Bangkok">(GMT+07:00) Bangkok</option>
                                                    <option value="Asia/Bangkok">(GMT+07:00) Hanoi</option>
                                                    <option value="Asia/Jakarta">(GMT+07:00) Jakarta</option>
                                                    <option value="Asia/Krasnoyarsk">(GMT+07:00) Krasnoyarsk</option>
                                                    <option value="Asia/Hong_Kong">(GMT+08:00) Beijing</option>
                                                    <option value="Asia/Chongqing">(GMT+08:00) Chongqing</option>
                                                    <option value="Asia/Hong_Kong">(GMT+08:00) Hong Kong</option>
                                                    <option value="Asia/Irkutsk">(GMT+08:00) Irkutsk</option>
                                                    <option value="Asia/Kuala_Lumpur">(GMT+08:00) Kuala Lumpur</option>
                                                    <option value="Australia/Perth">(GMT+08:00) Perth</option>
                                                    <option value="Asia/Singapore">(GMT+08:00) Singapore</option>
                                                    <option value="Asia/Taipei">(GMT+08:00) Taipei</option>
                                                    <option value="Asia/Irkutsk">(GMT+08:00) Ulaan Bataar</option>
                                                    <option value="Asia/Urumqi">(GMT+08:00) Urumqi</option>
                                                    <option value="Asia/Tokyo">(GMT+09:00) Osaka</option>
                                                    <option value="Asia/Tokyo">(GMT+09:00) Sapporo</option>
                                                    <option value="Asia/Seoul">(GMT+09:00) Seoul</option>
                                                    <option value="Asia/Tokyo">(GMT+09:00) Tokyo</option>
                                                    <option value="Asia/Yakutsk">(GMT+09:00) Yakutsk</option>
                                                    <option value="Australia/Adelaide">(GMT+09:30) Adelaide</option>
                                                    <option value="Australia/Darwin">(GMT+09:30) Darwin</option>
                                                    <option value="Australia/Brisbane">(GMT+10:00) Brisbane</option>
                                                    <option value="Australia/Sydney">(GMT+10:00) Canberra</option>
                                                    <option value="Pacific/Guam">(GMT+10:00) Guam</option>
                                                    <option value="Australia/Hobart">(GMT+10:00) Hobart</option>
                                                    <option value="Australia/Melbourne">(GMT+10:00) Melbourne</option>
                                                    <option value="Pacific/Port_Moresby">(GMT+10:00) Port Moresby</option>
                                                    <option value="Australia/Sydney">(GMT+10:00) Sydney</option>
                                                    <option value="Asia/Vladivostok">(GMT+10:00) Vladivostok</option>
                                                    <option value="Asia/Magadan">(GMT+11:00) Magadan</option>
                                                    <option value="Asia/Magadan">(GMT+11:00) New Caledonia</option>
                                                    <option value="Asia/Magadan">(GMT+11:00) Solomon Is.</option>
                                                    <option value="Pacific/Auckland">(GMT+12:00) Auckland</option>
                                                    <option value="Pacific/Fiji">(GMT+12:00) Fiji</option>
                                                    <option value="Asia/Kamchatka">(GMT+12:00) Kamchatka</option>
                                                    <option value="Pacific/Fiji">(GMT+12:00) Marshall Is.</option>
                                                    <option value="Pacific/Auckland">(GMT+12:00) Wellington</option>
                                                    <option value="Pacific/Tongatapu">(GMT+13:00) Nuku'alofa</option>
                                                </select><button type="button" className="btn dropdown-toggle btn-light" data-toggle="dropdown" role="combobox" aria-owns="bs-select-1" aria-haspopup="listbox" aria-expanded="false" title="(GMT) UTC" fdprocessedid="l0u58i"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">(GMT) UTC</div></div> </div></button><div className="dropdown-menu "><div className="bs-searchbox"><input type="search" className="form-control" autoComplete="off" role="combobox" aria-label="Search" aria-controls="bs-select-1" aria-autocomplete="list" /></div><div className="inner show" role="listbox" id="bs-select-1" tabIndex={-1}><ul className="dropdown-menu inner show" role="presentation" /></div></div></div>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-sm-3 col-from-label">Admin login page background</label>
                                            <div className="col-sm-9">
                                                <div className="input-group" data-toggle="aizuploader" data-type="image" onClick={handleShow}>
                                                    <div className="input-group-prepend">
                                                        <div className="input-group-text bg-soft-secondary">Browse</div>
                                                    </div>
                                                    <div className="form-control file-amount">Choose Files</div>
                                                    <input type="hidden" name="types[]" defaultValue="admin_login_background" />
                                                    <input type="hidden" name="admin_login_background" defaultValue className="selected-files" />
                                                </div>
                                                <div className="file-preview box sm" />
                                            </div>
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
                                        <div className="text-right">
                                            <button type="submit" className="btn btn-primary" fdprocessedid="a528s9">Update</button>
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
export default GeneralSetting;