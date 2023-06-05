function AddNewColors() {
    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h5 className="mb-0 h6">Add New Color</h5>
                </div>
                <div className="card-body">
                    <form action="https://mmslfashions.in/admin/colors/store" method="POST">
                        <input type="hidden" name="_token" defaultValue="mFQ16X9Zo13qx9C2bzuKYymExbrY6MHLe0ZCOO2a" />                            <div className="form-group mb-3">
                            <label htmlFor="name">Name</label>
                            <input type="text" placeholder="Name" id="name" name="name" className="form-control" defaultValue required fdprocessedid="kwk34" />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="name">Color Code</label>
                            <input type="text" placeholder="Color Code" id="code" name="code" className="form-control" defaultValue required fdprocessedid="4cvz5b" />
                        </div>
                        <div className="form-group mb-3 text-right">
                            <button type="submit" className="btn btn-primary" fdprocessedid="yix9lq">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default AddNewColors;