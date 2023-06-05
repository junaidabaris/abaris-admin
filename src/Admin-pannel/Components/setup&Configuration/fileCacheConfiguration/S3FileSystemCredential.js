function S3FileSystemCredential() {
    return (
        <>
            <div className="col-xxl-6">
                <div className="card">
                    <div className="card-header">
                        <h3 className="fs-18 mb-0 text-center">S3 File System Credentials</h3>
                    </div>
                    <div className="card-body">
                        <form className="form-horizontal" action="https://mmslfashions.in/admin/payment_method_update" method="POST">
                            <input type="hidden" name="payment_method" defaultValue="paypal" />
                            <input type="hidden" name="_token" defaultValue="t1kIjSzA66IWcAwVqC8sgvte7FLgAx9ARqaAs2hQ" />                        <div className="form-group row">
                                <input type="hidden" name="types[]" defaultValue="AWS_ACCESS_KEY_ID" />
                                <div className="col-lg-4">
                                    <label className="control-label">AWS_ACCESS_KEY_ID</label>
                                </div>
                                <div className="col-lg-8">
                                    <input type="text" className="form-control" name="AWS_ACCESS_KEY_ID" defaultValue placeholder="AWS_ACCESS_KEY_ID" required fdprocessedid="u60f2q" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <input type="hidden" name="types[]" defaultValue="AWS_SECRET_ACCESS_KEY" />
                                <div className="col-lg-4">
                                    <label className="control-label">AWS_SECRET_ACCESS_KEY</label>
                                </div>
                                <div className="col-lg-8">
                                    <input type="text" className="form-control" name="AWS_SECRET_ACCESS_KEY" defaultValue placeholder="AWS_SECRET_ACCESS_KEY" required fdprocessedid="m9o7h" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <input type="hidden" name="types[]" defaultValue="AWS_DEFAULT_REGION" />
                                <div className="col-lg-4">
                                    <label className="control-label">AWS_DEFAULT_REGION</label>
                                </div>
                                <div className="col-lg-8">
                                    <input type="text" className="form-control" name="AWS_DEFAULT_REGION" defaultValue placeholder="AWS_DEFAULT_REGION" required fdprocessedid="cbgu1" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <input type="hidden" name="types[]" defaultValue="AWS_BUCKET" />
                                <div className="col-lg-4">
                                    <label className="control-label">AWS_BUCKET</label>
                                </div>
                                <div className="col-lg-8">
                                    <input type="text" className="form-control" name="AWS_BUCKET" defaultValue placeholder="AWS_BUCKET" required fdprocessedid="nzew7f" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <input type="hidden" name="types[]" defaultValue="AWS_URL" />
                                <div className="col-lg-4">
                                    <label className="control-label">AWS_URL</label>
                                </div>
                                <div className="col-lg-8">
                                    <input type="text" className="form-control" name="AWS_URL" defaultValue="https://bucket-name.s3.region.amazonaws.com" placeholder="AWS_URL" required fdprocessedid="kqypr" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-lg-12 text-right">
                                    <button className="btn btn-primary" type="submit" fdprocessedid="jwa6n">Save</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default S3FileSystemCredential;