
function AddPrinter() {
    return (
        <>
            <div className="container">
                <div className="row card">
                    <div className="">

                        <div className="card-header gutters-5">
                            <h5 class="mb-md-0 h6">Add Printer</h5>
                        </div>
                        <div className="col-lg-12">
                            <p>Please fill in the information below. The field labels marked with * are required input fields.</p>
                        </div>
                        <div className="col-lg-6">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="sellect" className="form-label">Type *</label>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Network</option>
                                        <option value="1">Windows</option>
                                        <option value="2">Linux</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="sellect" className="form-label">Profile *</label>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Default</option>
                                        <option value="1">Simple</option>
                                        <option value="2">Star-branded</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Characters per line *</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Path *</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <button type="button" className="btn btn-primary">Add Printer</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default AddPrinter
