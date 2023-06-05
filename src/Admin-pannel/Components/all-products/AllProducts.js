// import { SlideshowLightbox } from "lightbox.js-react";
import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";

import { useDeleteProductMutation, useGetAllProductsQuery, useGetCategoriesQuery } from "./allproductsApi/allProductsApi";


const image = [
  {
    id: "1",
    url: "https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg",
  },
];



function AllProducts() {
  const [inputVal, setInputVal] = useState('');
  const { data, isLoading } = useGetAllProductsQuery();
  // const [fData, setFData] = useState(data);
  const [bArr, setBArr] = useState([]);


  useEffect(() => {
    setBArr(data)
  }, [data])

  console.log(data)
  // const categoryD = useGetCategoriesQuery()
  // console.log(categoryD.data)

  const onChangeHandler = (e) => {
    const inpVal = e.target.value
    setInputVal(inpVal)
  }
  // console.log(inputVal)

  const searchData = () => {
    const filteredData = data?.filter((item) => {
      if (!item.name) {
        return
      }
      if (item.name.includes(inputVal)) {
        return item
      }
    })
    console.log(filteredData);
    setBArr(filteredData)
  }
  // const d = data?.filter((item) => item._id === '640fe77aa0391c8bd2189b0d')


  const [deleteData, response] = useDeleteProductMutation();

  function deleteProductData(id) {
    deleteData(id)
  };

  // console.log('-----all prod res', response);

  if (response.isSuccess === true) {
    alert("Product deleted Successfully")
  };



  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="aiz-titlebar text-left mt-2 mb-3">
            <div className="row align-items-center">
              <div className="col-auto">
                <h1 className="h3">All products</h1>
              </div>
              <div className="col text-right">
                <Link to="/admin/products/all/products/create" className="btn btn-circle btn-info">
                  <span>Add New Product</span>
                </Link>
              </div>
            </div>
          </div>
          <br />

          {isLoading ? <h2>Loading...</h2>
            : <div className="card">
              <form id="sort_products">
                <div className="card-header row gutters-5">
                  <div className="col-md-4">
                    <h5 className="mb-md-0 h6">All Product</h5>
                  </div>
                  <div className="col-md-2 dropdown mb-2 mb-md-0">
                    <button className="btn border dropdown-toggle " id="btn-drop" type="button" data-toggle="dropdown">
                      Bulk Action
                    </button>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#" > Delete selection</a>
                    </div>
                  </div>
                  <div className="col-md-2 ml-auto">
                    <div>
                      <Form.Select aria-label="Default select example" className="form-control form-control-sm aiz-selectpicker mb-2 mb-md-0" >
                        <option>All Sellers</option>
                        <option >Abaris Seller</option>
                        <option >superadmin</option>
                      </Form.Select>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="form-group mb-0 d-flex">
                      <input type="text" className="form-control form-control-sm" id="search" name="search" placeholder="Type" onChange={onChangeHandler} />
                      <button type='button' className='btn btn-primary ms-1' style={{ padding: '0 10px' }} onClick={searchData}>Search</button>
                    </div>
                  </div>
                </div>
                <div className="card-body">

                  <table className="table aiz-table mb-0 footable footable-1 breakpoint breakpoint-lg" style={{}}>
                    <thead>
                      <tr className="footable-header">
                        <th className="footable-first-visible" style={{ display: 'table-cell' }}># </th>
                        <th style={{ display: 'table-cell' }}>Product</th>
                        <th style={{ display: 'table-cell' }}>Category</th>
                        <th style={{ display: 'table-cell' }}>Brand</th>
                        <th data-breakpoints="lg" style={{ display: 'none' }}>Added By</th>
                        <th data-breakpoints="sm" style={{ display: 'table-cell' }}>Info</th>
                        <th data-breakpoints="md" style={{ display: 'table-cell' }}>Total Stock</th>
                        <th data-breakpoints="lg" style={{ display: 'none' }}>Todays Deal</th>
                        <th data-breakpoints="lg" style={{ display: 'none' }}>Published</th>
                        <th data-breakpoints="lg" style={{ display: 'none' }}>Featured</th>
                        <th data-breakpoints="sm" className="text-right footable-last-visible" style={{ display: 'table-cell' }}>Options</th>
                      </tr>
                    </thead>
                    <tbody>

                      {bArr?.map((item, i) => {
                        return <tr key={i}>
                          <td className="footable-first-visible" style={{ display: 'table-cell' }}>
                            {i + 1}
                          </td>
                          <td style={{ display: 'table-cell' }}>
                            <div className="row gutters-5 w-200px w-md-300px mw-100">
                              <div className="col-auto">
                                <img src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg" alt="Image" className="size-50px img-fit" />
                              </div>
                              <div className="col">
                                <span className="text-muted text-truncate-2">{item.name}</span>
                              </div>
                            </div>
                          </td>
                          <td style={{ display: 'table-cell' }}>
                            {item.category_id && item.category_id.name}
                          </td>

                          <td style={{ display: 'table-cell' }}>
                            {item.brand_id && item.brand_id.name}

                          </td>
                          <td style={{ display: 'table-cell' }}>
                            <strong>Num of Sale:</strong> 0 Times <br />
                            <strong>Base Price:</strong>{item.unit_price}<br />
                            <strong>Rating:</strong> 0 <br />
                          </td>
                          <td style={{ display: 'table-cell' }}>10</td>
                          <td style={{ display: 'none' }}>
                            <label className="aiz-switch aiz-switch-success mb-0">
                              <input defaultValue={73} type="checkbox" />
                              <span className="slider round" />
                            </label>
                          </td>
                          <td style={{ display: 'none' }}>
                            <label className="aiz-switch aiz-switch-success mb-0">
                              <input defaultValue={73} type="checkbox" defaultChecked />
                              <span className="slider round" />
                            </label>
                          </td>
                          <td style={{ display: 'none' }}>
                            <label className="aiz-switch aiz-switch-success mb-0">
                              <input defaultValue={73} type="checkbox" />
                              <span className="slider round" />
                            </label>
                          </td>
                          <td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                            <a className="btn btn-soft-success btn-icon btn-circle btn-sm" href="https://mmslfashions.in/product/kieserite-mag-sul-in-25-kg-bag-LeWMh" target="_blank" title="View">
                              <i className="las la-eye" />
                            </a>
                            <a className="btn btn-soft-primary btn-icon btn-circle btn-sm" href="https://mmslfashions.in/admin/products/admin/73/edit?lang=en" title="Edit">
                              <i className="las la-edit" />
                            </a>
                            {/* <a className="btn btn-soft-warning btn-icon btn-circle btn-sm" href="https://mmslfashions.in/admin/products/duplicate/73?type=All" title="Duplicate">
                              <i className="las la-copy" />
                            </a> */}

                            <button type="button" onClick={() => { deleteProductData(item._id) }} className="btn btn-soft-danger btn-icon btn-circle btn-sm">
                              <i className="las la-trash" />
                            </button>

                          </td>
                        </tr>
                      })}
                    </tbody>
                  </table>

                  <div className="aiz-pagination">
                    <nav>
                      <ul className="pagination">
                        <li className="page-item disabled" aria-label="« Previous">
                          <span className="page-link" >‹</span>
                        </li>
                        <li className="page-item active" aria-current="page">
                          <span className="page-link">1</span>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="https://mmslfashions.in/admin/products/all?page=2">2</a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="https://mmslfashions.in/admin/products/all?page=3">3</a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="https://mmslfashions.in/admin/products/all?page=4">4</a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="https://mmslfashions.in/admin/products/all?page=5">5</a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="https://mmslfashions.in/admin/products/all?page=2" rel="next" aria-label="Next »">›</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </form>
            </div>
          }

          {/* {error && <h2>Error</h2>} */}

        </div>
        <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto"></div>
      </div>
    </>
  )
}
export default AllProducts;