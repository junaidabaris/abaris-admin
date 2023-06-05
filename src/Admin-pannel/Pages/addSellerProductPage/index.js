import { useEffect, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import ShippingConfigurationAdmin from "../../Components/addNewProductsComponents/ShippingConfigurationAdmin";
import { useAddSellerProductMutation, useAddSellerProductNewMutation, useEditProductMutation, useGetAllProductsQuery, useGetBrandsQuery, useGetCategoriesQuery, useGetPickupPointQuery, useGetProductByIdQuery, useGetSellersQuery, useGetUnitMasterQuery } from "../../Components/all-products/allproductsApi/allProductsApi";
import { ToastContainer, toast } from "react-toastify";
import { useParams } from "react-router-dom";
import Multiselect from "multiselect-react-dropdown";
// import ToggleStatus from "../toggleStatus/ToggleStatus";
// import ProductDescriptionWrapper from "../productDescriptionWrapper/productDescriptionWrapper";
// import ProductsVariation from "../addNewProductsComponents/ProductsVariation";
import ToggleStatus from "../../Components/toggleStatus/ToggleStatus";
import ProductsVariation from "../../Components/addNewProductsComponents/ProductsVariation";
import { useSelector } from "react-redux";
import { Spinner } from "react-bootstrap";


function AddsellerProductPage() {
    const sellerLog = window.localStorage.getItem('isSellerLogin')

    const [featuredval, setFeaturedval] = useState(false)
    const [tags, setTags] = useState([]);
    const [attributes, setAttributes] = useState([]);
    const [countId, setCountId] = useState(0)
    const [sizeTags, setSizeTags] = useState([]);
    const [exsitingId, setExsistingId] = useState('');
    const [variationArr, setVariationArr] = useState([]);
    // const [categ, setCateg] = useState([]);
    const [finalCatD, setFinalCatD] = useState([]);
    const { data: categ } = useGetCategoriesQuery();
    const { data: sellerD } = useGetSellersQuery()

    const params = useParams();

    const [inputval, setInputVal] = useState({
        todays_deal: false,
        featured: false,
        cash_on_delivery: false,
        show_stock_quantity: false,
        show_stock_with_text_only: false,
        hide_stock: false,
        low_stock_quantity: false,
        trending: false,
        // products information
        name: '',
        user_id: '63e6579c455104434981d8da',
        // category_id: '',
        // category_id: [],
        // brand_id: '',
        unit_price: '',
        // weight: "",
        minimum_purchase_qty: '',
        tags: [],
        barcode: '',
        refundable: '',
        // products images
        gallary_img: '',
        thumbnail_img: '',
        // product vedios
        vedio_provider: '',
        video_link: '',
        variations: [],
        attributes: '',
        size: '',
        current_stock: '',
        minimum_order_qty: '',
        shipping_cost: '',
        // Product price & stock
        // price: '',
        purchase_price: '',
        variant: '',
        variant_price: '',
        quantity: '',
        total_quantity: '',
        minimum_order_quantity: '',
        shipping_coast: '',
        Shipping_cost_multiply_with_quantity: '',
        slug: '',
        mrp: '',
        purchase_rate: '',
        sale_rate: '',
        tax: '',
        discount: '',
        discount_type: '',
        sku: '',
        pickup_points: '',
        current_qty: '',
        // seo meta tags
        meta_title: '',
        meta_description: '',
        meta_img: '',
        // low stock quantity
        Quantity: '',
        flash_discount: '',
        product_id: '',
    });

    const brandData = useGetBrandsQuery();


    const { productDescription } = useSelector((state) => {
        return state.textEditorData
    })
    // useEffect(() => {
    //     const getCatData = async () => {
    //         const getCategoryName = []
    //         const reqData = await fetch("https://etg-backend-project-node-abarisapp.vercel.app/api/category")
    //         const resData = await reqData.json();
    //         console.log('--res--d', resData)

    //         for (let i = 0; i < resData.length; i++) {
    //             getCategoryName.push(resData[i].name || resData[i]._id)
    //         };
    //         setCateg(getCategoryName)
    //     }
    //     getCatData();
    // }, [])


    const onChangeHandler = (e) => {
        let slug = e.target.value + new Date().getUTCMilliseconds();
        const inpName = e.target.name;
        const inpVal = e.target.value;
        let tempPickList = JSON.parse(JSON.stringify(variationArr));
        tempPickList?.map((item, i) => {
            if (item._id == e.target.getAttribute('data_id'))
                return item[inpName] = inpVal
        })

        const newVariationArr = [...tempPickList]
        setVariationArr(newVariationArr);
        const clonedObj = { ...inputval, slug };
        clonedObj[inpName] = inpVal;

        setInputVal(clonedObj);

        if (inpName == 'product_id') {
            setExsistingId(inpVal)
        };
    };



    const onchengePhotoHandel = (e) => {
        const clonedObj = { ...inputval };
        const inpName = e.target.name;
        const inpVal = e.target.files[0];
        clonedObj[inpName] = inpVal;
        setInputVal(clonedObj)

    }

    const [addSellerProD, response] = useAddSellerProductMutation();

    const { data: allProD } = useGetAllProductsQuery();

    const submitEditProductData = () => {
        setFeaturedval(true)
        const clonedObj = { ...inputval, variations: variationArr, tags: tags, category_id: finalCatD };
        setInputVal(clonedObj);
        console.log('edit--', inputval)
        addSellerProD(clonedObj);
        // document.getElementsById("form")[0].reset();
    };



    function handleTagKeyDown(e) {
        if (e.key !== 'Enter') return
        const value = e.target.value
        if (!value.trim()) return
        setTags([...tags, value])
        e.target.value = ''
    };
    const removetagTag = (index) => [
        setTags(tags.filter((el, i) => i !== index))
    ];


    const { data: unitMast } = useGetUnitMasterQuery()

    function handleAttributeKeyDown(e) {
        if (e.key !== 'Enter') return
        const value = e.target.value
        if (!value.trim()) return
        setAttributes([...attributes, value])
        e.target.value = ''
    };
    const removeAttributetag = (index) => [
        setAttributes(attributes.filter((el, i) => i !== index))
    ];

    const handleSizeKeyDown = (e) => {
        if (e.key !== 'Enter') return
        const value = e.target.value
        if (!value.trim()) return
        setSizeTags([...sizeTags, value])
        setVariationArr([...variationArr, { id: countId, weight: value }])
        setCountId(countId + 1)
        e.target.value = ''
    };
    const removeSizetag = (index) => [
        setSizeTags(sizeTags.filter((el, i) => i !== index))
    ];


    const { data: pickUp } = useGetPickupPointQuery();
    // const { data: productData, isSuccess } = useGetProductByIdQuery(params.id);

    const productData = []
    const isSuccess = false

    useEffect(() => {
        if (exsitingId && productData) {
            const obj = { ...productData, product_id: exsitingId }
            setInputVal(obj)
            setTags(obj.tags)
            const weights = obj?.variations?.map((variation) => variation.weight)
            setSizeTags(weights);
            setVariationArr(obj.variations);
        }
    }, [isSuccess, productData])
    const changeStatus = (isStatus, key) => {
        const clonedInputVal = { ...inputval }
        clonedInputVal[key] = isStatus;
        setInputVal(clonedInputVal)
    }


    const toastSuccessMessage = () => {
        toast.success("SellerProduct Successfully Saved", {
            position: "top-center"
        })
    };

    useEffect(() => {
        if (response.isSuccess === true) {
            toastSuccessMessage()
        };
    }, [response])

    useEffect(() => {
        if (response.isError === true) {
            alert('!SellerProduct not Saved')
        };
    }, [response])


    const [varianstData, setVariantsData] = useState()

    const handleVariantData = (data) => {
        setVariantsData(data)
    }


    const seller_id = window.localStorage.getItem('isSellerId')
    const [addSellPro, { isLoading, isSuccess: addIssu, isError }] = useAddSellerProductNewMutation()

    const submitAddProductData = () => {
        const seller_id = sellerD && sellerD[0]._id;
        const brand_id = brandData.data && brandData.data[0]._id;
        const slug = 'youtube' + new Date().getUTCMilliseconds();
        const clonedObj = { ...inputval, variations: varianstData, tags: tags, category_id: finalCatD, seller_id, brand_id, slug, productDescription: productDescription };
        console.log(clonedObj);

        addSellPro({ ...clonedObj, seller_id })

    };


    if (params.id) {
        return (
            <>
                <div className="aiz-main-content">
                    <div className="px-15px px-lg-25px">
                        <div className="aiz-titlebar text-left mt-2 mb-3">
                            {params.id ? <h5 className="mb-0 h6">Edit Product</h5> : <h5 className="mb-0 h6">Add Seller Product</h5>}
                        </div>
                        <div>
                            <form className="form form-horizontal mar-top" id="choice_form">
                                <div className="row gutters-5">
                                    <div className="col-lg-8">

                                        <input type="hidden" name="_token" defaultValue="6klBhNOhEcSYzHAP1WU8ctR90lIocmkKBETVGkNx" />
                                        <input type="hidden" name="added_by" defaultValue="admin" onChange={onChangeHandler} />


                                        <div className="card">

                                            <div className="card-header">
                                                <h5 className="mb-0 h6">Product Information</h5>
                                            </div>

                                            <div className="card-body">

                                                <div className="form-group row" id="exsisting products">
                                                    <label className="col-md-3 col-from-label">Exsisting Products</label>
                                                    <div className="col-md-8">

                                                        <select className="form-select" aria-label="Default select example" name="product_id" onChange={onChangeHandler}>
                                                            {allProD && allProD?.map((item) => {
                                                                // console.log('item----', item._id)
                                                                return <option value={item._id} key={item._id}>{item.name || item._id}</option>
                                                            })}
                                                        </select>

                                                    </div>
                                                </div>

                                                <div className="form-group row">
                                                    <label className="col-md-3 col-from-label">Product Name <span className="text-danger">*</span></label>
                                                    <div className="col-md-8">
                                                        <input type="text" className="form-control" value={inputval?.name} name="name" placeholder="Product Name" required fdprocessedid="3bss68" onChange={onChangeHandler} />
                                                    </div>
                                                </div>

                                                <div className="form-group row" id="category">
                                                    <label className="col-md-3 col-from-label">Category <span className="text-danger">*</span></label>
                                                    <div className="col-md-8">

                                                        <Multiselect
                                                            displayValue="name"
                                                            isObject={true}
                                                            options={categ ? categ : []}
                                                            showCheckbox
                                                            selectedValues={productData && productData.category_id}
                                                            onRemove={(event) => { console.log(event) }}
                                                            onSelect={(event) => {
                                                                // setFinalCatD(event)
                                                                console.log('event', event)
                                                            }}
                                                        />

                                                    </div>
                                                </div>


                                                <div className="form-group row" id="brand">
                                                    <label className="col-md-3 col-from-label">Brand</label>
                                                    <div className="col-md-8">

                                                        <select className="form-select" aria-label="Default select example" name="brand_id" onChange={onChangeHandler}>
                                                            {brandData.data && brandData.data.map((item) => {
                                                                return <option value={item._id} key={item._id} selected={item._id === productData?.brand_id?._id}>{item.name || item._id}</option>
                                                            })}
                                                        </select>

                                                    </div>
                                                </div>

                                                <div className="form-group row" id="seller">
                                                    <label className="col-md-3 col-from-label">Seller</label>
                                                    <div className="col-md-8">
                                                        <select disabled={sellerLog} className="form-select" aria-label="Default select example" name="seller_id" onChange={onChangeHandler}>
                                                            {sellerD && sellerD.map((item) => {
                                                                return <option value={item._id} key={item._id}>{item.firstname + " " + item.lastname}</option>
                                                            })}
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="form-group row">
                                                    <label className="col-md-3 col-from-label">Unit</label>
                                                    <div className="col-md-8">
                                                        <input type="text" value={inputval?.unit_price} className="form-control" name="unit_price" placeholder="Unit (e.g. KG, Pc etc)" required fdprocessedid="nnwct" onChange={onChangeHandler} />
                                                    </div>
                                                </div>

                                                <div className="form-group row">
                                                    <label className="col-md-3 col-from-label">Weight <small>(In Kg)</small></label>
                                                    <div className="col-md-8">
                                                        <input type="text" value={inputval?.weight} className="form-control" name="weight" step="0.01" placeholder="weight" fdprocessedid="sq5qc3" onChange={onChangeHandler} />
                                                    </div>
                                                </div>

                                                <div className="form-group row">
                                                    <label className="col-md-3 col-from-label">Minimum Purchase Qty <span className="text-danger">*</span></label>
                                                    <div className="col-md-8">
                                                        <input type="number" value={inputval?.minimum_purchase_qty} lang="en" className="form-control" name=" minimum_purchase_qty" required fdprocessedid="d0gl3m" onChange={onChangeHandler} />
                                                    </div>
                                                </div>

                                                <div className="form-group row">
                                                    <label className="col-md-3 col-from-label">Tags <span className="text-danger">*</span>
                                                    </label>
                                                    <div className="col-md-8">
                                                        <div className="tags_inp_wrapper">
                                                            <div className='tags-input-container'>
                                                                {tags?.map((tag, index) => {
                                                                    return <div className='tag-item' key={index}>
                                                                        <span className='text'>{tag}</span>
                                                                        <span className='close' onClick={() => removetagTag(index)}>&times;</span>
                                                                    </div>
                                                                })}
                                                                <input type="text" value={inputval?.tags} onKeyDown={handleTagKeyDown} placeholder='type some text' className='tags-input' name="tags" onChange={onChangeHandler} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-group row">
                                                    <label className="col-md-3 col-from-label">Barcode</label>
                                                    <div className="col-md-8">
                                                        <input type="text" value={inputval?.barcode} className="form-control" name="barcode" placeholder="Barcode" fdprocessedid="ifjwoo" onChange={onChangeHandler} />
                                                    </div>
                                                </div>

                                                <div className="form-group row">
                                                    <label className="col-md-3 col-from-label">Refundable</label>
                                                    <div className="col-md-8">
                                                        <label className="aiz-switch aiz-switch-success mb-0">
                                                            <input type="checkbox" name="refundable" value={featuredval} onChange={onChangeHandler} />
                                                            <span />
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        {/* <ProductsInformationAdmin /> */}

                                        <div className="card">
                                            <div className="card-header">
                                                <h5 className="mb-0 h6">Product Images</h5>
                                            </div>
                                            <div className="card-body">
                                                <div className="form-group row">
                                                    <label className="col-md-3 col-form-label" htmlFor="signinSrEmail">Gallery Images <small>(600x600)</small></label>
                                                    <div className="col-md-8">

                                                        <div className="input-group" data-type="image" data-multiple="true">
                                                            <div className="input-group-prepend">
                                                                <div className="input-group-text bg-soft-secondary font-weight-medium">Browse</div>
                                                            </div>
                                                            <div className="form-control file-amount">
                                                                <input type="file" name="gallary_img" className="selected-files" onChange={onChangeHandler} />
                                                            </div>
                                                        </div>
                                                        <div className="file-preview box sm">
                                                        </div>
                                                        <small className="text-muted">These images are visible in product details page gallery. Use 600x600 sizes images.</small>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-md-3 col-form-label" htmlFor="signinSrEmail">Thumbnail Image <small>(300x300)</small></label>
                                                    <div className="col-md-8">
                                                        <div className="input-group" data-toggle="aizuploader" data-type="image">
                                                            <div className="input-group-prepend">
                                                                <div className="input-group-text bg-soft-secondary font-weight-medium">Browse</div>
                                                            </div>
                                                            <div className="form-control file-amount">
                                                                <input type="file" name="thumbnail_img" className="selected-files" onChange={onChangeHandler} />
                                                            </div>
                                                        </div>
                                                        <div className="file-preview box sm">
                                                        </div>
                                                        <small className="text-muted">This image is visible in all product box. Use 300x300 sizes image. Keep some blank space around main object of your image as we had to crop some edge in different devices to make it responsive.</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <ProductsImages /> */}

                                        <div className="card">
                                            <div className="card-header">
                                                <h5 className="mb-0 h6">Product Videos</h5>
                                            </div>
                                            <div className="card-body">

                                                <div className="form-group row">
                                                    <label className="col-md-3 col-from-label">Video Provider</label>
                                                    <div className="col-md-8">
                                                        <select className="form-select" aria-label="Default select example" name="vedio_provider" onChange={onChangeHandler}>
                                                            <option value="youtube">Youtube</option>
                                                            <option value="dailymotion">Dailymotion</option>
                                                            <option value="vimeo">Vimeo</option>
                                                        </select>

                                                    </div>
                                                </div>

                                                <div className="form-group row">
                                                    <label className="col-md-3 col-from-label">Video Link</label>
                                                    <div className="col-md-8">
                                                        <input type="text" className="form-control" name="video_link" placeholder="Video Link" fdprocessedid="2pggse" onChange={onChangeHandler} />
                                                        <small className="text-muted">Use proper link without extra parameter. Don't use short share link/embeded iframe code.</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <ProductsVedios /> */}



                                        {/* <ProductsVariation /> */}


                                        {/* <ProductsPriceStock /> */}

                                        {/* <ProductsDescriptionAdmin /> */}

                                        <div className="card">
                                            <div className="card-header">
                                                <h5 className="mb-0 h6">SEO Meta Tags</h5>
                                            </div>
                                            <div className="card-body">
                                                <div className="form-group row">
                                                    <label className="col-md-3 col-from-label">Meta Title</label>
                                                    <div className="col-md-8">
                                                        <input type="text" value={inputval?.meta_title} className="form-control" name="meta_title" placeholder="Meta Title" fdprocessedid="1hz7zu" onChange={onChangeHandler} />
                                                    </div>
                                                </div>

                                                <div className="form-group row">
                                                    <label className="col-md-3 col-from-label">Description</label>
                                                    <div className="col-md-8">
                                                        <textarea name="meta_description" value={inputval?.meta_description} rows={8} className="form-control" onChange={onChangeHandler} />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-md-3 col-form-label" htmlFor="signinSrEmail">Meta Image</label>
                                                    <div className="col-md-8">
                                                        <div className="input-group" data-toggle="aizuploader" data-type="image">
                                                            <div className="input-group-prepend">
                                                                <div className="input-group-text bg-soft-secondary font-weight-medium">Browse</div>
                                                            </div>
                                                            <div className="form-control file-amount">
                                                                <input type="file" name="meta_image" className="selected-files" onChange={onChangeHandler} />
                                                            </div>
                                                        </div>
                                                        <div className="file-preview box sm">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <SeoMetaTagsAdmin /> */}

                                    </div>
                                    <div className="col-lg-4">
                                        <ShippingConfigurationAdmin />

                                        <div className="card">

                                            <div className="card-header">
                                                <h5 className="mb-0 h6">Low Stock Quantity Warning</h5>
                                            </div>
                                            <div className="card-body">
                                                <div className="form-group mb-3">
                                                    <label htmlFor="name">
                                                        Quantity
                                                    </label>
                                                    <input type="number" name="low_stock_quantity" value={inputval?.low_stock_quantity} className="form-control" fdprocessedid="dtmr1" onChange={onChangeHandler} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card">
                                            <div className="card-header">
                                                <h5 className="mb-0 h6">
                                                    Stock Visibility State
                                                </h5>
                                            </div>
                                            <div className="card-body">

                                                <div className="form-group row">
                                                    <label className="col-md-6 col-from-label">Show Stock Quantity</label>
                                                    <div className="col-md-6">
                                                        {/* <label className="aiz-switch aiz-switch-success mb-0">
                                                            <input type="radio" name="show_stock_quantity" value={featuredval} onChange={onChangeHandler} />
                                                            <span />
                                                        </label> */}
                                                        <ToggleStatus name="show_stock_quantity" isStatus={inputval?.show_stock_quantity} changeStatus={changeStatus} />
                                                    </div>
                                                </div>

                                                <div className="form-group row">
                                                    <label className="col-md-6 col-from-label">Show Stock With Text Only</label>
                                                    <div className="col-md-6">
                                                        {/* <label className="aiz-switch aiz-switch-success mb-0">
                                                            <input type="checkbox" name="show_stock_with_text_only" value={featuredval} onChange={onChangeHandler} />
                                                            <span />
                                                        </label> */}
                                                        <ToggleStatus name="show_stock_with_text_only" isStatus={inputval?.show_stock_with_text_only} changeStatus={changeStatus} />
                                                    </div>
                                                </div>

                                                <div className="form-group row">
                                                    <label className="col-md-6 col-from-label">Hide Stock</label>
                                                    <div className="col-md-6">
                                                        {/* <label className="aiz-switch aiz-switch-success mb-0">
                                                            <input type="checkbox" name="hide_stock" value={featuredval} onChange={onChangeHandler} />
                                                            <span />
                                                        </label> */}
                                                        <ToggleStatus name="hide_stock" isStatus={inputval.hide_stock} changeStatus={changeStatus} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card">
                                            <div className="card-header">
                                                <h5 className="mb-0 h6">Cash on Delivery</h5>
                                            </div>
                                            <div className="card-body">
                                                <div className="form-group row">
                                                    <label className="col-md-6 col-from-label">Status</label>
                                                    <div className="col-md-6">
                                                        {/* <label className="aiz-switch aiz-switch-success mb-0">
                                                            <input type="checkbox" name="cash_on_delivery" value={featuredval} onChange={onChangeHandler} />
                                                            <span />
                                                        </label> */}
                                                        <ToggleStatus name="cash_on_delivery" isStatus={inputval.cash_on_delivery} changeStatus={changeStatus} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card">
                                            <div className="card-header">
                                                <h5 className="mb-0 h6">Featured</h5>
                                            </div>
                                            <div className="card-body">
                                                <div className="form-group row">
                                                    <label className="col-md-6 col-from-label">Status</label>
                                                    <div className="col-md-6">
                                                        {/* <label className="aiz-switch aiz-switch-success mb-0">
                                                            <input type="checkbox" name="featured" value={featuredval} onChange={onChangeHandler} />
                                                            <span />
                                                        </label> */}
                                                        <ToggleStatus name="featured" isStatus={inputval.featured} changeStatus={changeStatus} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card">
                                            <div className="card-header">
                                                <h5 className="mb-0 h6">Todays Deal</h5>
                                            </div>
                                            <div className="card-body">
                                                <div className="form-group row">
                                                    <label className="col-md-6 col-from-label">Status</label>
                                                    <div className="col-md-6">
                                                        {/* <label className="aiz-switch aiz-switch-success mb-0">
                                                            <input type="checkbox" name="todays_deal" value={featuredval} onChange={onChangeHandler} />
                                                            <span />
                                                        </label> */}
                                                        <ToggleStatus name="todays_deal" isStatus={inputval.todays_deal} changeStatus={changeStatus} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card">
                                            <div className="card-header">
                                                <h5 className="mb-0 h6">Trending</h5>
                                            </div>
                                            <div className="card-body">
                                                <div className="form-group row">
                                                    <label className="col-md-6 col-from-label">Status</label>
                                                    <div className="col-md-6">
                                                        {/* <label className="aiz-switch aiz-switch-success mb-0">
                                                            <input type="checkbox" name="trending" value={featuredval} onChange={onChangeHandler} />
                                                            <span />
                                                        </label> */}
                                                        <ToggleStatus name="trending" isStatus={inputval.trending} changeStatus={changeStatus} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <div className="card">
                                            <div className="card-header">
                                                <h5 className="mb-0 h6">Flash Deal</h5>
                                            </div>
                                            <div className="card-body">
                                                <div className="form-group mb-3">
                                                    <label htmlFor="name">
                                                        Add To Flash
                                                    </label>
                                                    <div className="dropdown bootstrap-select form-control aiz-">
                                                        <select className="form-control aiz-selectpicker" name="flash_deal_id" id="flash_deal" tabIndex={-98}>
                                                            <option value>Choose Flash Title</option>
                                                        </select>
                                                        <button type="button" className="btn dropdown-toggle btn-light" data-toggle="dropdown" role="combobox" aria-owns="bs-select-7" aria-haspopup="listbox" aria-expanded="false" data-id="flash_deal" title="Choose Flash Title" fdprocessedid="5qasuo">
                                                            <div className="filter-option">
                                                                <div className="filter-option-inner">
                                                                    <div className="filter-option-inner-inner">Choose Flash Title</div>
                                                                </div>
                                                            </div>
                                                        </button>
                                                        <div className="dropdown-menu ">
                                                            <div className="inner show" role="listbox" id="bs-select-7" tabIndex={-1}>
                                                                <ul className="dropdown-menu inner show" role="presentation" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label htmlFor="name">
                                                        Discount
                                                    </label>
                                                    <input type="number" name="flash_discount" defaultValue={0} min={0} step="0.01" className="form-control" fdprocessedid="hltlp8" />
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label htmlFor="name">
                                                        Discount Type
                                                    </label>
                                                    <div className="dropdown bootstrap-select form-control aiz-">
                                                        <select className="form-control aiz-selectpicker" name="flash_discount_type" id="flash_discount_type" tabIndex={-98}>
                                                            <option value>Choose Discount Type</option>
                                                            <option value="amount">Flat</option>
                                                            <option value="percent">Percent</option>
                                                        </select>
                                                        <button type="button" className="btn dropdown-toggle btn-light" data-toggle="dropdown" role="combobox" aria-owns="bs-select-8" aria-haspopup="listbox" aria-expanded="false" data-id="flash_discount_type" title="Choose Discount Type" fdprocessedid="nwltk3">
                                                            <div className="filter-option">
                                                                <div className="filter-option-inner">
                                                                    <div className="filter-option-inner-inner">Choose Discount Type</div>
                                                                </div>
                                                            </div>
                                                        </button>
                                                        <div className="dropdown-menu ">
                                                            <div className="inner show" role="listbox" id="bs-select-8" tabIndex={-1}>
                                                                <ul className="dropdown-menu inner show" role="presentation" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}


                                        {/* <div className="card">
                                            <div className="card-header">
                                                <h5 className="mb-0 h6">Estimate Shipping Time</h5>
                                            </div>
                                            <div className="card-body">
                                                <div className="form-group mb-3">
                                                    <label htmlFor="name">
                                                        Shipping Days
                                                    </label>
                                                    <div className="input-group">
                                                        <input type="number" className="form-control" name="est_shipping_days" min={1} step={1} placeholder="Shipping Days" fdprocessedid="y5axgb" />
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text" id="inputGroupPrepend">Days</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}


                                        {/* <div className="card">
                                            <div className="card-header">
                                                <h5 className="mb-0 h6">Vat &amp; TAX</h5>
                                            </div>
                                            <div className="card-body">
                                                <label htmlFor="name">
                                                    Tax
                                                    <input type="hidden" defaultValue={3} name="tax_id[]" />
                                                </label>
                                                <div className="form-row">
                                                    <div className="form-group col-md-6">
                                                        <input type="number" lang="en" min={0} defaultValue={0} step="0.01" placeholder="Tax" name="tax[]" className="form-control" required fdprocessedid="8sory3" />
                                                    </div>
                                                    <div className="form-group col-md-6">
                                                        <div className="dropdown bootstrap-select form-control aiz-"><select className="form-control aiz-selectpicker" name="tax_type[]" tabIndex={-98}>
                                                            <option value="amount">Flat</option>
                                                            <option value="percent">Percent</option>
                                                        </select><button type="button" className="btn dropdown-toggle btn-light" data-toggle="dropdown" role="combobox" aria-owns="bs-select-9" aria-haspopup="listbox" aria-expanded="false" title="Flat" fdprocessedid="dban6w"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">Flat</div></div> </div></button><div className="dropdown-menu "><div className="inner show" role="listbox" id="bs-select-9" tabIndex={-1}><ul className="dropdown-menu inner show" role="presentation" /></div></div></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}

                                    </div>

                                    {/* <div className="col-12">
                                        <div className="btn-toolbar float-right mb-3" role="toolbar" aria-label="Toolbar with button groups">
                                            <div className="btn-group mr-2" role="group" aria-label="Third group">
                                                <button type="submit" name="button" value="unpublish" className="btn btn-primary action-btn" fdprocessedid="g0kx9r">Save &amp; Unpublish</button>
                                            </div>
                                            <div className="btn-group" role="group" aria-label="Second group">
                                                <button type="submit" name="button" value="publish" className="btn btn-success action-btn" fdprocessedid="spajja">Save &amp; Publish</button>
                                            </div>
                                        </div>
                                    </div> */}

                                </div>

                                <div className="row">
                                    <div className="card mt-2 rest-part physical_product_show" data-select2-id={176}>
                                        <div className="card-header">
                                            <h4 className="mb-0">Variation</h4>
                                        </div>
                                        <div className="col-lg-12" style={{ padding: '25px', margin: '5px' }}>
                                            {/* <form> */}
                                            <label>Attributes:</label><br />
                                            <div className="tags_inp_wrapper">
                                                <div className='tags-input-container'>
                                                    {attributes?.map((tag, index) => {
                                                        return <div className='tag-item' key={index}>
                                                            <span className='text'>{tag}</span>
                                                            <span className='close' onClick={() => removeAttributetag(index)}>&times;</span>
                                                        </div>
                                                    })}

                                                    <input type="text" value={inputval?.attributes} onKeyDown={handleAttributeKeyDown} placeholder='type some text' className='tags-input' name="attributes" onChange={onChangeHandler} />
                                                </div>
                                            </div>

                                            <label style={{ margin: '5px 0' }}>Size:</label>
                                            <div className="size_tags_inp_wrapper">
                                                <div className='size-tags-input-container'>
                                                    {sizeTags?.map((tag, index) => {
                                                        return <div className='size-tag-item' key={index}>
                                                            <span className='size-text'>{tag}</span>
                                                            <span className='size-close' onClick={() => removeSizetag(index)}>&times;</span>
                                                        </div>
                                                    })}

                                                    <input type="text" onKeyDown={handleSizeKeyDown} placeholder='type some text' className='size-tags-input' name="weight" onChange={onChangeHandler} />
                                                </div>
                                            </div>
                                            {/* <input className="form-control" /> */}
                                            {/* </form> */}
                                        </div>
                                    </div>


                                    <div className="card mt-2 rest-part col-lg-12">
                                        <div className="card-header">
                                            <h4 className="mb-0">Product price &amp; stock</h4>
                                        </div>
                                        <div className="card-body">
                                            <div className="row align-items-end">
                                                <div className="col-12 sku_combination table-responsive form-group" id="sku_combination">
                                                    <table className="table table-bordered physical_product_show">

                                                        <thead>
                                                            <tr>
                                                                <td className="text-center">
                                                                    <label className="control-label">Variant</label>
                                                                </td>
                                                                <td className="text-center">
                                                                    <label className="control-label">MRP</label>
                                                                </td>
                                                                <td className="text-center">
                                                                    <label className="control-label">Purchase Rate</label>
                                                                </td>
                                                                <td className="text-center">
                                                                    <label className="control-label">Tax %</label>
                                                                </td>
                                                                <td className="text-center">
                                                                    <label className="control-label">Tax Type</label>
                                                                </td>
                                                                <td className="text-center">
                                                                    <label className="control-label">Sale Rate</label>
                                                                </td>
                                                                <td className="text-center">
                                                                    <label className="control-label">Discount</label>
                                                                </td>
                                                                <td className="text-center">
                                                                    <label className="control-label">Discount Type</label>
                                                                </td>
                                                                <td className="text-center">
                                                                    <label className="control-label">SKU</label>
                                                                </td>
                                                                <td className="text-center">
                                                                    <label className="control-label">Pickup Point</label>
                                                                </td>
                                                                <td className="text-center">
                                                                    <label className="control-label">Quantity</label>
                                                                </td>
                                                            </tr>
                                                        </thead>

                                                        <tbody>
                                                            {variationArr?.map((item, index) => {

                                                                return <tr key={index}>
                                                                    <td>
                                                                        <label data_id={item._id} name="weight" className="control-label">{item.weight}</label>
                                                                    </td>
                                                                    <td>
                                                                        <input data_id={item._id} type="number" name="mrp" className="form-control" required onChange={onChangeHandler} value={item.mrp} />
                                                                    </td>

                                                                    <td>
                                                                        <input data_id={item._id} type="number" name="purchase_rate" className="form-control" required onChange={onChangeHandler} value={item.purchase_rate} />
                                                                    </td>
                                                                    <td>
                                                                        <input data_id={item._id} type="string" name="tax" className="form-control" required onChange={onChangeHandler} value={item.tax} />
                                                                    </td>

                                                                    <td>
                                                                        <select name="tax_type" className="selectOptions" aria-label="Default select example" onChange={onChangeHandler}>
                                                                            <option value={'Inclusive'}>Inclusive</option>
                                                                            <option value={'Exclusive'}>Exclusive</option>
                                                                        </select>
                                                                    </td>


                                                                    <td>
                                                                        <input data_id={item._id} type="number" name="sale_rate" className="form-control" required onChange={onChangeHandler} value={item.sale_rate} />
                                                                    </td>
                                                                    <td>
                                                                        <input data_id={item._id} type="text" name="discount" className="form-control" required onChange={onChangeHandler} value={item.discount} />
                                                                    </td>
                                                                    <td>
                                                                        <select name="discount_type" className="selectOptions" aria-label="Default select example" onChange={onChangeHandler}>
                                                                            <option value={'Percent'}>Percent</option>
                                                                            <option value={'Amount'}>Amount</option>
                                                                        </select>
                                                                    </td>
                                                                    <td>
                                                                        <input data_id={item._id} type="text" name="sku" className="form-control" required onChange={onChangeHandler} value={item.sku} />
                                                                    </td>
                                                                    <td>
                                                                        <select data_id={item._id} className="js-example-basic-multiple js-states js-example-responsive demo-select2 w-100 select2-hidden-accessible selectOptions" name="pickup_points" data-select2-id={20} tabIndex={-1} aria-hidden="true" onChange={onChangeHandler}>
                                                                            {pickUp && pickUp.map((item) => {
                                                                                return <option value={item._id} key={item._id}>{item.address}</option>
                                                                            })}
                                                                        </select>
                                                                    </td>
                                                                    <td>
                                                                        <input data_id={item._id} type="number" value={item.current_qty} name="current_qty" min={1} max={1000000} step={1} className="form-control" required onChange={onChangeHandler} />
                                                                    </td>
                                                                </tr>
                                                            })}
                                                        </tbody>

                                                    </table>
                                                </div>
                                                <div className="col-md-3 form-group physical_product_show" id="quantity">
                                                    <label className="title-color">Total Quantity</label>
                                                    <input type="number" min={0} defaultValue={0} step={1} placeholder="Quantity" name="current_stock" className="form-control" required fdprocessedid="gny5jm" readOnly="readonly" onChange={onChangeHandler} />
                                                </div>
                                                <div className="col-md-3 form-group" id="minimum_order_qty">
                                                    <label className="title-color">Minimum order quantity</label>
                                                    <input type="number" value={inputval?.minimum_order_qty} placeholder="Minimum order quantity" name="minimum_order_qty" className="form-control" required fdprocessedid="wabmv" onChange={onChangeHandler} />
                                                </div>
                                                <div className="col-md-3 form-group physical_product_show" id="shipping_cost">
                                                    <label className="title-color">Shipping cost </label>
                                                    <input type="number" value={inputval?.shipping_cost} placeholder="Shipping cost" name="shipping_cost" className="form-control" required fdprocessedid="pvn15" onChange={onChangeHandler} />
                                                </div>

                                                <div className="col-md-3 form-group physical_product_show" id="shipping_cost">
                                                    <label className="title-color">Shipping cost multiply with quantity </label>
                                                    <label className="switcher title-color">
                                                        <input className="switcher_input" type="checkbox" name="multiplyQTY" />
                                                        <span className="switcher_control" />
                                                    </label>
                                                </div>

                                            </div>

                                        </div>
                                    </div>

                                    {/* <ProductDescriptionWrapper />
                                    <ProductsVariation handleVariantData={handleVariantData} /> */}

                                </div>
                            </form>
                        </div>
                        <button type="button" onClick={submitEditProductData} className="btn btn-primary m-3">Save Product</button>
                        <ToastContainer />
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className="aiz-main-content">
                    <div className="px-15px px-lg-25px">
                        <div className="aiz-titlebar text-left mt-2 mb-3">
                            {params.id ? <h5 className="mb-0 h6">Edit Product</h5> : <h5 className="mb-0 h6">Add New Product</h5>}
                        </div>
                        <div>
                            <form className="form form-horizontal mar-top" id="choice_form">
                                <div className="row gutters-5">
                                    <div className="col-lg-8">

                                        <input type="hidden" name="_token" defaultValue="6klBhNOhEcSYzHAP1WU8ctR90lIocmkKBETVGkNx" />
                                        <input type="hidden" name="added_by" defaultValue="admin" onChange={onChangeHandler} />


                                        <div className="card">
                                            <div className="card-header">
                                                <h5 className="mb-0 h6">Product Information</h5>
                                            </div>
                                            <div className="card-body">

                                                <div className="form-group row">
                                                    <label className="col-md-3 col-from-label">Product Name <span className="text-danger">*</span></label>
                                                    <div className="col-md-8">
                                                        <input type="text" className="form-control" value={inputval?.name} name="name" placeholder="Product Name" required fdprocessedid="3bss68" onChange={onChangeHandler} />
                                                    </div>
                                                </div>

                                                <div className="form-group row" id="category">
                                                    <label className="col-md-3 col-from-label">Category <span className="text-danger">*</span></label>
                                                    <div className="col-md-8">
                                                        <Multiselect
                                                            isObject={true}
                                                            displayValue="name"
                                                            options={categ}
                                                            showCheckbox
                                                            selectedValues={[]}
                                                            onRemove={(selectedCat) => {
                                                                const selectedIds = selectedCat.map((cat) => {
                                                                    return cat._id
                                                                })
                                                                setFinalCatD(selectedIds)
                                                            }}
                                                            onSelect={(selectedCat) => {
                                                                // setFinalCatD(event)
                                                                const selectedIds = selectedCat.map((cat) => {
                                                                    return cat._id
                                                                })
                                                                setFinalCatD(selectedIds)
                                                            }}
                                                        />
                                                    </div>
                                                </div>


                                                <div className="form-group row" id="seller">
                                                    <label className="col-md-3 col-from-label">Seller</label>
                                                    <div className="col-md-8">
                                                        <select className="form-select" disabled={sellerLog} aria-label="Default select example" name="seller_id" onChange={onChangeHandler}>
                                                            {sellerD && sellerD.map((item) => {
                                                                return <option value={item._id} key={item._id}>{item.firstname + " " + item.lastname}</option>
                                                            })}
                                                        </select>
                                                    </div>
                                                </div>


                                                <div className="form-group row" id="brand">
                                                    <label className="col-md-3 col-from-label">Brand</label>
                                                    <div className="col-md-8">
                                                        <select className="form-select" aria-label="Default select example" name="brand_id" onChange={onChangeHandler}>
                                                            {brandData.data && brandData.data.map((item) => {
                                                                return <option value={item._id} key={item._id}>{item.name || item._id}</option>
                                                            })}
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="form-group row">
                                                    <label className="col-md-3 col-from-label">Unit</label>
                                                    <div className="col-md-8">
                                                        <select className="form-select" aria-label="Default select example" name="unit" onChange={onChangeHandler}>
                                                            <option value={1}>Select Unit</option>
                                                            {unitMast && unitMast.map((item) => {
                                                                return <option value={item.name} key={item._id}>{item.name}</option>
                                                            })}
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="form-group row">
                                                    <label className="col-md-3 col-from-label">Weight <small>(In Kg)</small></label>
                                                    <div className="col-md-8">
                                                        <input type="text" value={inputval?.weight} className="form-control" name="weight" step="0.01" placeholder="weight" fdprocessedid="sq5qc3" onChange={onChangeHandler} />
                                                    </div>
                                                </div>

                                                <div className="form-group row">
                                                    <label className="col-md-3 col-from-label">Minimum Purchase Qty <span className="text-danger">*</span></label>
                                                    <div className="col-md-8">
                                                        <input type="number" value={inputval?.minimum_purchase_qty} lang="en" className="form-control" name="minimum_purchase_qty" required fdprocessedid="d0gl3m" onChange={onChangeHandler} />
                                                    </div>
                                                </div>

                                                <div className="form-group row">
                                                    <label className="col-md-3 col-from-label">Tags <span className="text-danger">*</span>
                                                    </label>
                                                    <div className="col-md-8">
                                                        <div className="tags_inp_wrapper">
                                                            <div className='tags-input-container'>
                                                                {tags.map((tag, index) => {
                                                                    return <div className='tag-item' key={index}>
                                                                        <span className='text'>{tag}</span>
                                                                        <span className='close' onClick={() => removetagTag(index)}>&times;</span>
                                                                    </div>
                                                                })}
                                                                <input type="text" onKeyDown={handleTagKeyDown} placeholder='type some text' className='tags-input' name="attributes" onChange={onChangeHandler} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-group row">
                                                    <label className="col-md-3 col-from-label">Barcode</label>
                                                    <div className="col-md-8">
                                                        <input type="text" value={inputval?.barcode} className="form-control" name="barcode" placeholder="Barcode" fdprocessedid="ifjwoo" onChange={onChangeHandler} />
                                                    </div>
                                                </div>

                                                <div className="form-group row">
                                                    <label className="col-md-3 col-from-label">Refundable</label>
                                                    <div className="col-md-8">
                                                        <ToggleStatus name="refundable" isStatus={inputval.refundable} changeStatus={changeStatus} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <ProductsInformationAdmin /> */}

                                        <div className="card">
                                            <div className="card-header">
                                                <h5 className="mb-0 h6">Product Images</h5>
                                            </div>
                                            <div className="card-body">
                                                <div className="form-group row">
                                                    <label className="col-md-3 col-form-label" htmlFor="signinSrEmail">Gallery Images <small>(600x600)</small></label>
                                                    <div className="col-md-8">

                                                        <div className="input-group" data-type="image" data-multiple="true">
                                                            <div className="input-group-prepend">
                                                                <div className="input-group-text bg-soft-secondary font-weight-medium">Browse</div>
                                                            </div>
                                                            <div className="form-control file-amount">
                                                                <input type="file" name="gallary_image" className="selected-files" onChange={onchengePhotoHandel} />
                                                            </div>
                                                        </div>
                                                        <div className="file-preview box sm">
                                                        </div>
                                                        <small className="text-muted">These images are visible in product details page gallery. Use 600x600 sizes images.</small>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-md-3 col-form-label" htmlFor="signinSrEmail">Thumbnail Image <small>(300x300)</small></label>
                                                    <div className="col-md-8">
                                                        <div className="input-group" data-toggle="aizuploader" data-type="image">
                                                            <div className="input-group-prepend">
                                                                <div className="input-group-text bg-soft-secondary font-weight-medium">Browse</div>
                                                            </div>
                                                            <div className="form-control file-amount">
                                                                <input type="file" name="thumbnail_image" className="selected-files" onChange={onchengePhotoHandel} />
                                                            </div>
                                                        </div>
                                                        <div className="file-preview box sm">
                                                        </div>
                                                        <small className="text-muted">This image is visible in all product box. Use 300x300 sizes image. Keep some blank space around main object of your image as we had to crop some edge in different devices to make it responsive.</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <ProductsImages /> */}

                                        <div className="card">
                                            <div className="card-header">
                                                <h5 className="mb-0 h6">Product Videos</h5>
                                            </div>
                                            <div className="card-body">

                                                <div className="form-group row">
                                                    <label className="col-md-3 col-from-label">Video Provider</label>
                                                    <div className="col-md-8">
                                                        <select className="form-select" aria-label="Default select example" name="vedio_provider" onChange={onChangeHandler}>
                                                            <option value="youtube">Youtube</option>
                                                            <option value="dailymotion">Dailymotion</option>
                                                            <option value="vimeo">Vimeo</option>
                                                        </select>

                                                    </div>
                                                </div>

                                                <div className="form-group row">
                                                    <label className="col-md-3 col-from-label">Video Link</label>
                                                    <div className="col-md-8">
                                                        <input type="text" className="form-control" name="video_link" placeholder="Video Link" fdprocessedid="2pggse" onChange={onChangeHandler} />
                                                        <small className="text-muted">Use proper link without extra parameter. Don't use short share link/embeded iframe code.</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <ProductsDescriptionAdmin /> */}

                                        <div className="card">
                                            <div className="card-header">
                                                <h5 className="mb-0 h6">SEO Meta Tags</h5>
                                            </div>
                                            <div className="card-body">
                                                <div className="form-group row">
                                                    <label className="col-md-3 col-from-label">Meta Title</label>
                                                    <div className="col-md-8">
                                                        <input type="text" value={inputval?.meta_title} className="form-control" name="meta_title" placeholder="Meta Title" fdprocessedid="1hz7zu" onChange={onChangeHandler} />
                                                    </div>
                                                </div>

                                                <div className="form-group row">
                                                    <label className="col-md-3 col-from-label">Description</label>
                                                    <div className="col-md-8">
                                                        <textarea name="meta_description" value={inputval?.meta_description} rows={8} className="form-control" onChange={onChangeHandler} />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-md-3 col-form-label" htmlFor="signinSrEmail">Meta Image</label>
                                                    <div className="col-md-8">
                                                        <div className="input-group" data-toggle="aizuploader" data-type="image">
                                                            <div className="input-group-prepend">
                                                                <div className="input-group-text bg-soft-secondary font-weight-medium">Browse</div>
                                                            </div>
                                                            <div className="form-control file-amount">
                                                                <input type="file" name="meta_image" className="selected-files" onChange={onChangeHandler} />
                                                            </div>
                                                        </div>
                                                        <div className="file-preview box sm">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <SeoMetaTagsAdmin /> */}
                                    </div>
                                    <div className="col-lg-4">
                                        <ShippingConfigurationAdmin />

                                        <div className="card">
                                            <div className="card-header">
                                                <h5 className="mb-0 h6">Low Stock Quantity Warning</h5>
                                            </div>
                                            <div className="card-body">
                                                <div className="form-group mb-3">
                                                    <label htmlFor="name">
                                                        Quantity
                                                    </label>
                                                    <input type="number" name="low_stock_quantity" value={inputval?.low_stock_quantity} className="form-control" fdprocessedid="dtmr1" onChange={onChangeHandler} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card">
                                            <div className="card-header">
                                                <h5 className="mb-0 h6">
                                                    Stock Visibility State
                                                </h5>
                                            </div>
                                            <div className="card-body">

                                                <div className="form-group row">
                                                    <label className="col-md-6 col-from-label">Show Stock Quantity</label>
                                                    <div className="col-md-6">
                                                        <ToggleStatus name="show_stock_quantity" isStatus={inputval.show_stock_quantity} changeStatus={changeStatus} />
                                                    </div>
                                                </div>

                                                <div className="form-group row">
                                                    <label className="col-md-6 col-from-label">Show Stock With Text Only</label>
                                                    <div className="col-md-6">
                                                        <ToggleStatus name="show_stock_with_text_only" isStatus={inputval.show_stock_with_text_only} changeStatus={changeStatus} />
                                                    </div>
                                                </div>

                                                <div className="form-group row">
                                                    <label className="col-md-6 col-from-label">Hide Stock</label>
                                                    <div className="col-md-6">
                                                        <ToggleStatus name="hide_stock" isStatus={inputval.hide_stock} changeStatus={changeStatus} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card">
                                            <div className="card-header">
                                                <h5 className="mb-0 h6">Cash on Delivery</h5>
                                            </div>
                                            <div className="card-body">
                                                <div className="form-group row">
                                                    <label className="col-md-6 col-from-label">Status</label>
                                                    <div className="col-md-6">
                                                        <ToggleStatus name="cash_on_delivery" isStatus={inputval.cash_on_delivery} changeStatus={changeStatus} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card">
                                            <div className="card-header">
                                                <h5 className="mb-0 h6">Featured</h5>
                                            </div>
                                            <div className="card-body">
                                                <div className="form-group row">
                                                    <label className="col-md-6 col-from-label">Status</label>
                                                    <div className="col-md-6">
                                                        <ToggleStatus name="featured" isStatus={inputval.featured} changeStatus={changeStatus} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card">
                                            <div className="card-header">
                                                <h5 className="mb-0 h6">Todays Deal</h5>
                                            </div>
                                            <div className="card-body">
                                                <div className="form-group row">
                                                    <label className="col-md-6 col-from-label">Status</label>
                                                    <div className="col-md-6">
                                                        <ToggleStatus name="todays_deal" isStatus={inputval.todays_deal} changeStatus={changeStatus} />

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card">
                                            <div className="card-header">
                                                <h5 className="mb-0 h6">Trending</h5>
                                            </div>
                                            <div className="card-body">
                                                <div className="form-group row">
                                                    <label className="col-md-6 col-from-label">Status</label>
                                                    <div className="col-md-6">
                                                        <ToggleStatus name="trending" isStatus={inputval.trending} changeStatus={changeStatus} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card">
                                            <div className="card-header">
                                                <h5 className="mb-0 h6">Flash Deal</h5>
                                            </div>
                                            <div className="card-body">
                                                <div className="form-group mb-3">
                                                    <label htmlFor="name">
                                                        Add To Flash
                                                    </label>
                                                    <div className="dropdown bootstrap-select form-control aiz-">
                                                        <select className="form-control aiz-selectpicker" name="flash_deal_id" id="flash_deal" tabIndex={-98}>
                                                            <option value>Choose Flash Title</option>
                                                        </select>
                                                        <button type="button" className="btn dropdown-toggle btn-light" data-toggle="dropdown" role="combobox" aria-owns="bs-select-7" aria-haspopup="listbox" aria-expanded="false" data-id="flash_deal" title="Choose Flash Title" fdprocessedid="5qasuo">
                                                            <div className="filter-option">
                                                                <div className="filter-option-inner">
                                                                    <div className="filter-option-inner-inner">Choose Flash Title</div>
                                                                </div>
                                                            </div>
                                                        </button>
                                                        <div className="dropdown-menu ">
                                                            <div className="inner show" role="listbox" id="bs-select-7" tabIndex={-1}>
                                                                <ul className="dropdown-menu inner show" role="presentation" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label htmlFor="name">
                                                        Discount
                                                    </label>
                                                    <input type="number" name="flash_discount" defaultValue={0} min={0} step="0.01" className="form-control" fdprocessedid="hltlp8" />
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label htmlFor="name">
                                                        Discount Type
                                                    </label>
                                                    <div className="dropdown bootstrap-select form-control aiz-">
                                                        <select className="form-control aiz-selectpicker" name="flash_discount_type" id="flash_discount_type" tabIndex={-98}>
                                                            <option value>Choose Discount Type</option>
                                                            <option value="amount">Flat</option>
                                                            <option value="percent">Percent</option>
                                                        </select>
                                                        <button type="button" className="btn dropdown-toggle btn-light" data-toggle="dropdown" role="combobox" aria-owns="bs-select-8" aria-haspopup="listbox" aria-expanded="false" data-id="flash_discount_type" title="Choose Discount Type" fdprocessedid="nwltk3">
                                                            <div className="filter-option">
                                                                <div className="filter-option-inner">
                                                                    <div className="filter-option-inner-inner">Choose Discount Type</div>
                                                                </div>
                                                            </div>
                                                        </button>
                                                        <div className="dropdown-menu ">
                                                            <div className="inner show" role="listbox" id="bs-select-8" tabIndex={-1}>
                                                                <ul className="dropdown-menu inner show" role="presentation" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                                {/* <ProductDescriptionWrapper /> */}
                                <ProductsVariation handleVariantData={handleVariantData} />

                                <div className="row">
                                    <div className="col-md-3 form-group physical_product_show" id="quantity">
                                        <label className="title-color">Total Quantity</label>
                                        <input type="number" placeholder="Quantity" name="current_stock" className="form-control" required fdprocessedid="gny5jm" readOnly="readonly" onChange={onChangeHandler} />
                                    </div>
                                    <div className="col-md-3 form-group" id="minimum_order_qty">
                                        <label className="title-color">Minimum order quantity</label>
                                        <input type="number" placeholder="Minimum order quantity" name="minimum_order_qty" className="form-control" required fdprocessedid="wabmv" onChange={onChangeHandler} />
                                    </div>
                                    <div className="col-md-3 form-group physical_product_show" id="shipping_cost">
                                        <label className="title-color">Shipping cost </label>
                                        <input type="number" placeholder="Shipping cost" name="shipping_cost" className="form-control" required fdprocessedid="pvn15" onChange={onChangeHandler} />
                                    </div>
                                    <div className="col-md-3 form-group physical_product_show" id="shipping_cost">
                                        <label className="title-color">Shipping cost multiply with quantity </label>
                                        <label className="switcher title-color">
                                            <input className="switcher_input" type="checkbox" name=" Shipping_cost_multiply_with_quantity" onChange={onChangeHandler} />
                                            <span className="switcher_control" />
                                        </label>
                                    </div>
                                </div>

                            </form>

                        </div>
                        {addIssu && <h5>Product Added</h5>}
                        {isError && <h5>Product Not Add Somthing Went Wrong!</h5>}

                        {params.id ? <button type="button" onClick={submitAddProductData} className="btn btn-primary m-3">Update Products {isLoading && <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>}</button>
                            : <button type="button" onClick={submitAddProductData} className="btn btn-primary m-3">Add Products  {isLoading && <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>}</button>
                        }
                        <ToastContainer />
                    </div>
                </div>
            </>
        )
    }


}
export default AddsellerProductPage;