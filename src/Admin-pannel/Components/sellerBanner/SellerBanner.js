import { SlideshowLightbox } from "lightbox.js-react"
import { useGetBannerQuery } from "../all-products/allproductsApi/allProductsApi";

const image = [
  {
    id: "1",
    url: "https://mmslfashions.in/public/uploads/all/Nx70PCRmd0brMGlmMCO68H8L2kJo1D8Nmsg25AwV.png",
  },
  {
    id: "2",
    url: "https://mmslfashions.in/public/uploads/all/Nx70PCRmd0brMGlmMCO68H8L2kJo1D8Nmsg25AwV.png",
  },
  {
    id: "3",
    url: "https://source.unsplash.com/Kk8mEQAoIpI/1600x1200"
  },
  {
    id: "4",
    url: "https://source.unsplash.com/HF3X2TWv1-w/1600x1200"
  }
];
function SellerBanner() {

  const { data, isLoading } = useGetBannerQuery()
  console.log(data)

  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="aiz-titlebar mt-2 mb-4">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h1 className="h3">Banners</h1>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header row gutters-5">
              <div className="col">
                <h5 className="mb-md-0 h6">All Banners</h5>
              </div>
              <div className="col-md-4">
                <form className id="sort_brands" action method="GET">
                  <div className="input-group input-group-sm">
                    <input type="text" className="form-control" id="search" name="search" placeholder="Search" fdprocessedid="ef32ek" />
                  </div>
                </form>
              </div>
            </div>
            <div className="card-body">
              <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" style={{}}>
                <thead>
                  <tr className="footable-header">
                    <th className="footable-first-visible" style={{ display: 'table-cell' }}>#</th><th width="30%" style={{ display: 'table-cell' }}>Seller Name</th><th width="30%" style={{ display: 'table-cell' }}>Banner Name</th><th width="30%" style={{ display: 'table-cell' }}>Image</th><th data-breakpoints="md" style={{ display: 'table-cell' }}>Approval</th><th data-breakpoints="md" className="text-right footable-last-visible" style={{ display: 'table-cell' }}>Options</th></tr>
                </thead>

                <tbody>

                  {data && data.map((item, i) => {
                    return <tr>
                      <td className="footable-first-visible" style={{ display: 'table-cell' }}>1</td>
                      <td style={{ display: 'table-cell' }}>
                        {item.title}
                      </td>
                      <td style={{ display: 'table-cell' }}>
                        Banner 2
                      </td>
                      <td style={{ display: 'table-cell' }}>
                        {/* <a href="https://mmslfashions.in/public/uploads/all/Nx70PCRmd0brMGlmMCO68H8L2kJo1D8Nmsg25AwV.png" target="_blank" className="text-reset">
                <img src="https://mmslfashions.in/public/uploads/all/Nx70PCRmd0brMGlmMCO68H8L2kJo1D8Nmsg25AwV.png" height={100} className="mr-1" /> 
              </a> */}
                        <SlideshowLightbox >
                          {image.slice(0, 1).map((item) => {
                            return <img
                              // className="w-full rounded"
                              style={{ width: '50px', height: '50px' }}
                              src={item.url}
                            />
                          })}

                        </SlideshowLightbox>
                      </td>
                      <td style={{ display: 'table-cell' }}>
                        <span className="badge badge-inline badge-info">Pending</span>
                      </td>
                      <td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                        <a className="btn btn-soft-info btn-icon btn-circle btn-sm" href="#" title="Approved">
                          <i className="las la-edit" />
                        </a>

                        {/* <a href="#" className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" title="Delete">
                      <i className="las la-trash" />
                    </a> */}

                        <a href="#" class="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" data-href="https://mmslfashions.in/admin/banners/destroy/2" title="Delete">
                          <i class="las la-trash"></i>
                        </a>

                      </td>
                    </tr>
                  })}


                </tbody>
              </table>
              <div className="aiz-pagination">
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
export default SellerBanner