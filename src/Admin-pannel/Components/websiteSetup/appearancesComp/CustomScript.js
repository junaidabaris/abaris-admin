function CustomScript() {
    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h6 className="fw-600 mb-0">Custom Script</h6>
                </div>
                <div className="card-body">
                    <form action="https://mmslfashions.in/admin/business-settings/update" method="POST" encType="multipart/form-data">
                        <input type="hidden" name="_token" defaultValue="MfWj9eEof7fNq0mKB42pyG49sPDPkHAVyVSS7UBT" />                        <div className="form-group row">
                            <label className="col-md-3 col-from-label">Header custom script - before &lt;/head&gt;</label>
                            <div className="col-md-8">
                                <input type="hidden" name="types[]" defaultValue="header_script" />
                                <textarea name="header_script" rows={4} className="form-control" placeholder defaultValue={""} />
                                <small>Write script with &lt;script&gt; tag</small>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-md-3 col-from-label">Footer custom script - before &lt;/body&gt;</label>
                            <div className="col-md-8">
                                <input type="hidden" name="types[]" defaultValue="footer_script" />
                                <textarea name="footer_script" rows={4} className="form-control" placeholder defaultValue={""} />
                                <small>Write script with &lt;script&gt; tag</small>
                            </div>
                        </div>
                        <div className="text-right">
                            <button type="submit" className="btn btn-primary" fdprocessedid="ujx6w">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default CustomScript;