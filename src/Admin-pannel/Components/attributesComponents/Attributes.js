function AttributesAdmin() {
    return (
        <>
            <div className=" col-lg-7 ">
                <div className="card">
                    <div className="card-header row gutters-5">
                        <div className="col text-center text-md-left">
                            <h5 className="mb-md-0 h6">Attributes</h5>
                        </div>
                        <div className="col-md-4">
                            <form className id="sort_brands" action method="GET">
                                <div className="input-group input-group-sm">
                                    <input type="text" className="form-control" id="search" name="search" placeholder="Search" fdprocessedid="jv5p0d" />
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="card-body">
                        <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" style={{}}>
                            <thead>
                                <tr className="footable-header">
                                    <th className="footable-first-visible" style={{ display: 'table-cell' }}>#</th><th style={{ display: 'table-cell' }}>Name</th><th style={{ display: 'table-cell' }}>Values</th><th className="text-right footable-last-visible" style={{ display: 'table-cell' }}>Options</th></tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="footable-first-visible" style={{ display: 'table-cell' }}>1</td><td style={{ display: 'table-cell' }}>Fabric</td><td style={{ display: 'table-cell' }}>
                                    </td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                        <a className="btn btn-soft-info btn-icon btn-circle btn-sm" href="https://mmslfashions.in/admin/attributes/2" title="Attribute values">
                                            <i className="las la-cog" />
                                        </a>
                                        <a className="btn btn-soft-primary btn-icon btn-circle btn-sm" href="https://mmslfashions.in/admin/attributes/edit/2?lang=en" title="Edit">
                                            <i className="las la-edit" />
                                        </a>
                                        {/* <a href="#" className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" data-href="https://mmslfashions.in/admin/attributes/destroy/2" title="Delete">
                                            <i className="las la-trash" />
                                        </a> */}
                                    </td></tr><tr>
                                    <td className="footable-first-visible" style={{ display: 'table-cell' }}>2</td><td style={{ display: 'table-cell' }}>Size</td><td style={{ display: 'table-cell' }}>
                                    </td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                        <a className="btn btn-soft-info btn-icon btn-circle btn-sm" href="https://mmslfashions.in/admin/attributes/1" title="Attribute values">
                                            <i className="las la-cog" />
                                        </a>
                                        <a className="btn btn-soft-primary btn-icon btn-circle btn-sm" href="https://mmslfashions.in/admin/attributes/edit/1?lang=en" title="Edit">
                                            <i className="las la-edit" />
                                        </a>
                                        {/* <a href="#" className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" data-href="https://mmslfashions.in/admin/attributes/destroy/1" title="Delete">
                                            <i className="las la-trash" />
                                        </a> */}
                                    </td></tr></tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AttributesAdmin;