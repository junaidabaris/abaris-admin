function OrderConfiguration() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="mb-0 h6">Minimum Order Amount Settings</h5>
                                </div>
                                <form action="https://mmslfashions.in/admin/business-settings/update" method="POST" encType="multipart/form-data">
                                    <div className="card-body">
                                        <input type="hidden" name="_token" defaultValue="kXMve4kNuwpLskUZw6eQaBIihyAaanRjWMC2zCTA" />                    <div className="form-group row">
                                            <div className="col-md-4">
                                                <label className="control-label">Minimum Order Amount Check</label>
                                            </div>
                                            <div className="col-md-8">
                                                <label className="aiz-switch aiz-switch-success mb-0">
                                                    <input type="hidden" name="types[]" defaultValue="minimum_order_amount_check" />
                                                    <input defaultValue={1} name="minimum_order_amount_check" type="checkbox" />
                                                    <span className="slider round" />
                                                </label>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="minimum_order_amount" />
                                            <div className="col-md-4">
                                                <label className="control-label">Set Minimum Order Amount</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" name="minimum_order_amount" defaultValue placeholder="Minimum Order Amount" required fdprocessedid="65xqz" />
                                            </div>
                                        </div>
                                        <div className="form-group mb-0 text-right">
                                            <button type="submit" className="btn btn-sm btn-primary" fdprocessedid="am63ql">Save</button>
                                        </div>
                                    </div>
                                </form>
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
export default OrderConfiguration;