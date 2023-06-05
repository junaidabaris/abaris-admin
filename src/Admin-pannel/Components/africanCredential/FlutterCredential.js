function FlutterCredential() {
    return (
        <>
            <div className="col-lg-6">
                <div className="card">
                    <div className="card-header">
                        <h3 className="mb-0 h6">Flutterwave Credential</h3>
                    </div>
                    <div className="card-body">
                        <form className="form-horizontal" action="https://mmslfashions.in/admin/payment_method_update" method="POST">
                            <input type="hidden" name="_token" defaultValue="bZlht2QD73bDkPhHtuYc3AVcfnrS42HFjF5kM5xe" />                        <input type="hidden" name="payment_method" defaultValue="flutterwave" />
                            <div className="form-group row">
                                <input type="hidden" name="types[]" defaultValue="FLW_PUBLIC_KEY" />
                                <div className="col-lg-4">
                                    <label className="col-from-label">FLW_PUBLIC_KEY</label>
                                </div>
                                <div className="col-lg-8">
                                    <input type="text" className="form-control" name="FLW_PUBLIC_KEY" defaultValue placeholder="FLW_PUBLIC_KEY" required fdprocessedid="3dbyrq" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <input type="hidden" name="types[]" defaultValue="FLW_SECRET_KEY" />
                                <div className="col-lg-4">
                                    <label className="col-from-label">FLW_SECRET_KEY</label>
                                </div>
                                <div className="col-lg-8">
                                    <input type="text" className="form-control" name="FLW_SECRET_KEY" defaultValue placeholder="FLW_SECRET_KEY" required fdprocessedid="fucvcm" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <input type="hidden" name="types[]" defaultValue="FLW_SECRET_HASH" />
                                <div className="col-lg-4">
                                    <label className="col-from-label">FLW_SECRET_HASH</label>
                                </div>
                                <div className="col-lg-8">
                                    <input type="text" className="form-control" name="FLW_SECRET_HASH" defaultValue placeholder="FLW_SECRET_HASH" required fdprocessedid="7gb0aa" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <input type="hidden" name="types[]" defaultValue="FLW_PAYMENT_CURRENCY_CODE" />
                                <div className="col-lg-4">
                                    <label className="col-from-label">FLW_PAYMENT_CURRENCY_CODE</label>
                                </div>
                                <div className="col-lg-8">
                                    <input type="text" className="form-control" name="FLW_PAYMENT_CURRENCY_CODE" defaultValue placeholder="FLW_PAYMENT_CURRENCY_CODE" required fdprocessedid="v7bidh" />
                                </div>
                            </div>
                            <div className="form-group mb-0 text-right">
                                <button type="submit" className="btn btn-sm btn-primary" fdprocessedid="9iw6cm">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default FlutterCredential;