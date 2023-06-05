function AddNewAttributesAdmin() {
    return (
        <>
            <div className="col-md-5">
                <div className="card">
                    <div className="card-header">
                        <h5 className="mb-0 h6">Add New Attribute</h5>
                    </div>
                    <div className="card-body">
                        <form action="https://mmslfashions.in/admin/attributes" method="POST">
                            <input type="hidden" name="_token" defaultValue="6klBhNOhEcSYzHAP1WU8ctR90lIocmkKBETVGkNx" />						<div className="form-group mb-3">
                                <label htmlFor="name">Name</label>
                                <input type="text" placeholder="Name" id="name" name="name" className="form-control" required fdprocessedid="8s3s9v" />
                            </div>
                            <div className="form-group mb-3 text-right">
                                <button type="submit" className="btn btn-primary" fdprocessedid="uzw7ye">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AddNewAttributesAdmin;