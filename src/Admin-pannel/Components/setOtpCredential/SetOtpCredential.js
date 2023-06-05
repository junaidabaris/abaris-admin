function SetOtpCredential() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="mb-0 h6">Twilio Credential</h5>
                                </div>
                                <div className="card-body">
                                    <form className="form-horizontal" action="https://mmslfashions.in/admin/otp-credentials-update" method="POST">
                                        <input type="hidden" name="otp_method" defaultValue="twillo" />
                                        <input type="hidden" name="_token" defaultValue="yvsI85OUsNWahvVWddcBV8G0DeeFRu9FCTlKnQDo" />                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="TWILIO_SID" />
                                            <div className="col-lg-3">
                                                <label className="col-from-label">TWILIO SID</label>
                                            </div>
                                            <div className="col-lg-6">
                                                <input type="text" className="form-control" name="TWILIO_SID" defaultValue placeholder="TWILIO SID" required fdprocessedid="p8ysmd" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="TWILIO_AUTH_TOKEN" />
                                            <div className="col-lg-3">
                                                <label className="col-from-label">TWILIO AUTH TOKEN</label>
                                            </div>
                                            <div className="col-lg-6">
                                                <input type="text" className="form-control" name="TWILIO_AUTH_TOKEN" defaultValue placeholder="TWILIO AUTH TOKEN" required fdprocessedid="ljiplq" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="VALID_TWILLO_NUMBER" />
                                            <div className="col-lg-3">
                                                <label className="col-from-label">VALID TWILIO NUMBER</label>
                                            </div>
                                            <div className="col-lg-6">
                                                <input type="text" className="form-control" name="VALID_TWILLO_NUMBER" defaultValue placeholder="VALID TWILLO NUMBER" fdprocessedid="wrof99" />
                                            </div>
                                        </div>
                                        <div className="form-group mb-0 text-right">
                                            <button type="submit" className="btn btn-sm btn-primary" fdprocessedid="rchano">Save</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="mb-0 h6">Nexmo Credential</h5>
                                </div>
                                <div className="card-body">
                                    <form className="form-horizontal" action="https://mmslfashions.in/admin/otp-credentials-update" method="POST">
                                        <input type="hidden" name="otp_method" defaultValue="nexmo" />
                                        <input type="hidden" name="_token" defaultValue="yvsI85OUsNWahvVWddcBV8G0DeeFRu9FCTlKnQDo" />                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="NEXMO_KEY" />
                                            <div className="col-lg-3">
                                                <label className="col-from-label">NEXMO KEY</label>
                                            </div>
                                            <div className="col-lg-6">
                                                <input type="text" className="form-control" name="NEXMO_KEY" defaultValue placeholder="NEXMO KEY" required fdprocessedid="tv25z8" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="NEXMO_SECRET" />
                                            <div className="col-lg-3">
                                                <label className="col-from-label">NEXMO SECRET</label>
                                            </div>
                                            <div className="col-lg-6">
                                                <input type="text" className="form-control" name="NEXMO_SECRET" defaultValue placeholder="NEXMO SECRET" required fdprocessedid="5ck0f" />
                                            </div>
                                        </div>
                                        <div className="form-group mb-0 text-right">
                                            <button type="submit" className="btn btn-sm btn-primary" fdprocessedid="ge0wz">Save</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="mb-0 h6">SSL Wireless Credential</h5>
                                </div>
                                <div className="card-body">
                                    <form className="form-horizontal" action="https://mmslfashions.in/admin/otp-credentials-update" method="POST">
                                        <input type="hidden" name="otp_method" defaultValue="ssl_wireless" />
                                        <input type="hidden" name="_token" defaultValue="yvsI85OUsNWahvVWddcBV8G0DeeFRu9FCTlKnQDo" />                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="SSL_SMS_API_TOKEN" />
                                            <div className="col-lg-3">
                                                <label className="col-from-label">SSL SMS API TOKEN</label>
                                            </div>
                                            <div className="col-lg-6">
                                                <input type="text" className="form-control" name="SSL_SMS_API_TOKEN" defaultValue placeholder="SSL SMS API TOKEN" required fdprocessedid="a7dg1m" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="SSL_SMS_SID" />
                                            <div className="col-lg-3">
                                                <label className="col-from-label">SSL SMS SID</label>
                                            </div>
                                            <div className="col-lg-6">
                                                <input type="text" className="form-control" name="SSL_SMS_SID" defaultValue placeholder="SSL SMS SID" required fdprocessedid="796w" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="SSL_SMS_URL" />
                                            <div className="col-lg-3">
                                                <label className="col-from-label">SSL SMS URL</label>
                                            </div>
                                            <div className="col-lg-6">
                                                <input type="text" className="form-control" name="SSL_SMS_URL" defaultValue="http://sms.sslwireless.com/pushapi/dynamic/server.php" placeholder="SSL SMS URL" fdprocessedid="efnla" />
                                            </div>
                                        </div>
                                        <div className="form-group mb-0 text-right">
                                            <button type="submit" className="btn btn-sm btn-primary" fdprocessedid="v05m04">Save</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="mb-0 h6">Fast2SMS Credential</h5>
                                </div>
                                <div className="card-body">
                                    <form className="form-horizontal" action="https://mmslfashions.in/admin/otp-credentials-update" method="POST">
                                        <input type="hidden" name="otp_method" defaultValue="fast2sms" />
                                        <input type="hidden" name="_token" defaultValue="yvsI85OUsNWahvVWddcBV8G0DeeFRu9FCTlKnQDo" />                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="AUTH_KEY" />
                                            <div className="col-lg-3">
                                                <label className="col-from-label">AUTH KEY</label>
                                            </div>
                                            <div className="col-lg-6">
                                                <input type="text" className="form-control" name="AUTH_KEY" defaultValue={1} placeholder="AUTH KEY" required fdprocessedid="ktjd9o" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="ENTITY_ID" />
                                            <div className="col-lg-3">
                                                <label className="col-from-label">ENTITY ID</label>
                                            </div>
                                            <div className="col-lg-6">
                                                <input type="text" className="form-control" name="ENTITY_ID" defaultValue={123} placeholder="ENTITY ID" fdprocessedid="y46fx" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="ROUTE" />
                                            <div className="col-lg-3">
                                                <label className="col-from-label">ROUTE</label>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="dropdown bootstrap-select form-control aiz-"><select className="form-control aiz-selectpicker" name="ROUTE" required tabIndex={-98}>
                                                    <option value="dlt_manual" selected>DLT Manual</option>
                                                    <option value="p">Promotional Use</option>
                                                    <option value="t">Transactional Use</option>
                                                </select><button type="button" className="btn dropdown-toggle btn-light" data-toggle="dropdown" role="combobox" aria-owns="bs-select-1" aria-haspopup="listbox" aria-expanded="false" title="DLT Manual" fdprocessedid="771a7"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">DLT Manual</div></div> </div></button><div className="dropdown-menu "><div className="inner show" role="listbox" id="bs-select-1" tabIndex={-1}><ul className="dropdown-menu inner show" role="presentation" /></div></div></div>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="LANGUAGE" />
                                            <div className="col-lg-3">
                                                <label className="col-from-label">Language</label>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="dropdown bootstrap-select form-control aiz-"><select className="form-control aiz-selectpicker" name="LANGUAGE" required tabIndex={-98}>
                                                    <option value="english" selected>English</option>
                                                    <option value="unicode">Unicode</option>
                                                </select><button type="button" className="btn dropdown-toggle btn-light" data-toggle="dropdown" role="combobox" aria-owns="bs-select-2" aria-haspopup="listbox" aria-expanded="false" title="English" fdprocessedid="xz965h"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">English</div></div> </div></button><div className="dropdown-menu "><div className="inner show" role="listbox" id="bs-select-2" tabIndex={-1}><ul className="dropdown-menu inner show" role="presentation" /></div></div></div>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="SENDER_ID" />
                                            <div className="col-lg-3">
                                                <label className="col-from-label">SENDER ID</label>
                                            </div>
                                            <div className="col-lg-6">
                                                <input type="text" className="form-control" name="SENDER_ID" defaultValue="FSTSMS" placeholder="6 digit SENDER ID" fdprocessedid="ae01na" />
                                            </div>
                                        </div>
                                        <div className="form-group mb-0 text-right">
                                            <button type="submit" className="btn btn-sm btn-primary" fdprocessedid="yqmfzd">Save</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="mb-0 h6">MIMO Credential</h5>
                                </div>
                                <div className="card-body">
                                    <form className="form-horizontal" action="https://mmslfashions.in/admin/otp-credentials-update" method="POST">
                                        <input type="hidden" name="otp_method" defaultValue="mimo" />
                                        <input type="hidden" name="_token" defaultValue="yvsI85OUsNWahvVWddcBV8G0DeeFRu9FCTlKnQDo" />                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="MIMO_USERNAME" />
                                            <div className="col-lg-3">
                                                <label className="col-from-label">MIMO_USERNAME</label>
                                            </div>
                                            <div className="col-lg-6">
                                                <input type="text" className="form-control" name="MIMO_USERNAME" defaultValue placeholder="MIMO_USERNAME" required fdprocessedid="plmla" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="MIMO_PASSWORD" />
                                            <div className="col-lg-3">
                                                <label className="col-from-label">MIMO_PASSWORD</label>
                                            </div>
                                            <div className="col-lg-6">
                                                <input type="text" className="form-control" name="MIMO_PASSWORD" defaultValue placeholder="MIMO_PASSWORD" required fdprocessedid="p7q33e" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="MIMO_SENDER_ID" />
                                            <div className="col-lg-3">
                                                <label className="col-from-label">MIMO_SENDER_ID</label>
                                            </div>
                                            <div className="col-lg-6">
                                                <input type="text" className="form-control" name="MIMO_SENDER_ID" defaultValue placeholder="MIMO_SENDER_ID" required fdprocessedid="oas8m7" />
                                            </div>
                                        </div>
                                        <div className="form-group mb-0 text-right">
                                            <button type="submit" className="btn btn-sm btn-primary" fdprocessedid="83bu1i">Save</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="mb-0 h6">MIMSMS Credential</h5>
                                </div>
                                <div className="card-body">
                                    <form className="form-horizontal" action="https://mmslfashions.in/admin/otp-credentials-update" method="POST">
                                        <input type="hidden" name="otp_method" defaultValue="mimsms" />
                                        <input type="hidden" name="_token" defaultValue="yvsI85OUsNWahvVWddcBV8G0DeeFRu9FCTlKnQDo" />                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="MIM_API_KEY" />
                                            <div className="col-lg-3">
                                                <label className="col-from-label">MIM_API_KEY</label>
                                            </div>
                                            <div className="col-lg-6">
                                                <input type="text" className="form-control" name="MIM_API_KEY" defaultValue placeholder="MIM_API_KEY" required fdprocessedid="bohr7r" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="MIM_SENDER_ID" />
                                            <div className="col-lg-3">
                                                <label className="col-from-label">MIM_SENDER_ID</label>
                                            </div>
                                            <div className="col-lg-6">
                                                <input type="text" className="form-control" name="MIM_SENDER_ID" defaultValue placeholder="MIM_SENDER_ID" required fdprocessedid="g3uo1k" />
                                            </div>
                                        </div>
                                        <div className="form-group mb-0 text-right">
                                            <button type="submit" className="btn btn-sm btn-primary" fdprocessedid="zygwc">Save</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="mb-0 h6">MSEGAT Credential</h5>
                                </div>
                                <div className="card-body">
                                    <form className="form-horizontal" action="https://mmslfashions.in/admin/otp-credentials-update" method="POST">
                                        <input type="hidden" name="otp_method" defaultValue="msegat" />
                                        <input type="hidden" name="_token" defaultValue="yvsI85OUsNWahvVWddcBV8G0DeeFRu9FCTlKnQDo" />                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="MSEGAT_API_KEY" />
                                            <div className="col-lg-3">
                                                <label className="col-from-label">MSEGAT_API_KEY</label>
                                            </div>
                                            <div className="col-lg-6">
                                                <input type="text" className="form-control" name="MSEGAT_API_KEY" defaultValue placeholder="MSEGAT_API_KEY" required fdprocessedid="snq4qd" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="MSEGAT_USERNAME" />
                                            <div className="col-lg-3">
                                                <label className="col-from-label">MSEGAT_USERNAME</label>
                                            </div>
                                            <div className="col-lg-6">
                                                <input type="text" className="form-control" name="MSEGAT_USERNAME" defaultValue placeholder="MSEGAT_USERNAME" required fdprocessedid="cygw44" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="MSEGAT_USER_SENDER" />
                                            <div className="col-lg-3">
                                                <label className="col-from-label">MSEGAT_USER_SENDER</label>
                                            </div>
                                            <div className="col-lg-6">
                                                <input type="text" className="form-control" name="MSEGAT_USER_SENDER" defaultValue placeholder="MSEGAT_USER_SENDER" required fdprocessedid="tj3va7" />
                                            </div>
                                        </div>
                                        <div className="form-group mb-0 text-right">
                                            <button type="submit" className="btn btn-sm btn-primary" fdprocessedid="klbaq">Save</button>
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
export default SetOtpCredential;