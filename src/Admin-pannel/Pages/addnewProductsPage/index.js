import { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import "./AddNewProduct.css";
import ShippingConfigurationAdmin from "../../Components/addNewProductsComponents/ShippingConfigurationAdmin";
import { useAddNewProductMutation, useGetBrandsQuery, useGetCategoriesQuery } from "../../Components/all-products/allproductsApi/allProductsApi";
import { ToastContainer, toast } from "react-toastify";
// import { data } from "jquery";
let arr2 = []
function AddNewProductsPage() {
    const [featuredval, setFeaturedval] = useState(false)
    const [tags, setTags] = useState([]);
    const [attributes, setAttributes] = useState([]);
    const [countId, setCountId] = useState(0)
    const [sizeTags, setSizeTags] = useState([]);
    const [variationArr, setVariationArr] = useState([]);


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
        tax: '',
        discount: '',
        discount_type: '',
        variant: '',
        variant_price: '',
        sku: '',
        quantity: '',
        total_quantity: '',
        minimum_order_quantity: '',
        shipping_coast: '',
        Shipping_cost_multiply_with_quantity: '',
        slug: '',

        // seo meta tags
        meta_title: '',
        meta_description: '',
        meta_img: '',

        // low stock quantity
        Quantity: '',

    });

    const catData = useGetCategoriesQuery()
    // console.log(catData.data)
    const brandData = useGetBrandsQuery();

    const handelBrand = (id) => {
        // console.log("id")
    }

    console.log(tags)
    const arr = []
    const onChangeHandler = (e) => {
        // setFeaturedval(true)
        let slug = e.target.value + new Date().getUTCMilliseconds();
        const inpName = e.target.name;
        const inpVal = e.target.value;



        // const cloneStateVariations ={...variation};
        // cloneStateVariations[inpName]= inpVal;
        // setVariation(cloneStateVariations)
        // setVariation(cloneStateVariations)
        // console.log('cloned var', cloneStateVariations)
        // clonedObj.variations = { [inpName]: inpVal };

        // if (e.target.name == "weight" || e.target.name == "price" || e.target.name == "sku" || e.target.name == "current_qty") {
        //     cloneStateVariations[inpName] = inpVal;
        // }
        variationArr.map((item, i) => {
            if (item.id == e.target.getAttribute('data_id')) {
                item[inpName] = inpVal;
                console.log(variationArr)
            }
        })

        const clonedObj = { ...inputval, slug };
        clonedObj[inpName] = inpVal;
        if (e.target.name == 'hide_stock' || e.target.name == 'refundable' || e.target.name == 'trending' || e.target.name == 'todays_deal' || e.target.name == 'featured' || e.target.name == 'cash_on_delivery' || e.target.name == 'show_stock_with_text_only' || e.target.name == 'show_stock_quantity') {

            clonedObj[inpName] = !featuredval;
            console.log(featuredval, clonedObj)
            setFeaturedval(!featuredval);



        }

        console.log('--------------upd-------', clonedObj)

        setInputVal(clonedObj)
    };



    // console.log(data)
    const [addProduct, response] = useAddNewProductMutation()

    const submitAddProductData = () => {
        setFeaturedval(true)
        // let cloneVariations = [...inputval.variations];
        // cloneVariations = arr2
        const clonedObj = { ...inputval, variations: variationArr, tags: tags };
        setInputVal(clonedObj)
        addProduct(clonedObj)
        document.getElementsByTagName("form")[0].reset();
        // console.log(inputval);
        // console.log('////////////////', variation, clonedObj)
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


    const toastSuccessMessage = () => {
        toast.success("Product added Successfully", {
            position: "top-center"
        })
    };

    if (response.isSuccess === true) {
        toastSuccessMessage()
    };
    if (response.isError === true) {
        // alert('!Error Product not added')
    }

    console.log(featuredval)
    console.log(inputval)
    console.log(response)

    return (
        <>
            {/* <AddNewProducts /> */}
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        <h5 className="mb-0 h6">Add New Product</h5>
                    </div>
                    <div>
                        {/* Error Meassages */}
                        <form className="form form-horizontal mar-top" encType="multipart/form-data" id="choice_form">
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
                                                    <input type="text" className="form-control" name="name" placeholder="Product Name" required fdprocessedid="3bss68" onChange={onChangeHandler} />
                                                </div>
                                            </div>

                                            <div className="form-group row" id="category">
                                                <label className="col-md-3 col-from-label">Category <span className="text-danger">*</span></label>
                                                <div className="col-md-8">
                                                    <select className="form-select" aria-label="Default select example" name="category_id" onChange={onChangeHandler}>
                                                        {catData.data && catData.data.map((item) => {
                                                            return <option value={item._id}>{item.name || item._id}</option>
                                                        })}
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="form-group row" id="brand">
                                                <label className="col-md-3 col-from-label">Brand</label>
                                                <div className="col-md-8">

                                                    <select className="form-select" aria-label="Default select example" name="brand_id" onChange={onChangeHandler}>
                                                        {brandData.data && brandData.data.map((item) => {
                                                            return <option value={item._id} onChange={handelBrand}>{item.name || item._id}</option>
                                                        })}
                                                    </select>

                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-md-3 col-from-label">Unit</label>
                                                <div className="col-md-8">
                                                    <input type="text" className="form-control" name="unit_price" placeholder="Unit (e.g. KG, Pc etc)" required fdprocessedid="nnwct" onChange={onChangeHandler} />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-md-3 col-from-label">Weight <small>(In Kg)</small></label>
                                                <div className="col-md-8">
                                                    <input type="text" className="form-control" name="weight" step="0.01" placeholder="weight" fdprocessedid="sq5qc3" onChange={onChangeHandler} />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-md-3 col-from-label">Minimum Purchase Qty <span className="text-danger">*</span></label>
                                                <div className="col-md-8">
                                                    <input type="number" lang="en" className="form-control" name=" minimum_purchase_qty" required fdprocessedid="d0gl3m" onChange={onChangeHandler} />
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

                                                    {/* <div className="tagify  form-control aiz-tag-input" aria-haspopup="listbox" aria-expanded="false" role="tagslist" tabIndex={-1}>
                                                        <span contentEditable data-placeholder="tags" aria-placeholder="Type and hit enter to add a tag" className="tagify__input" role="textbox" aria-autocomplete="both" aria-multiline="false" />
                                                    </div>
                                                    <input type="text" className="form-control aiz-tag-input" name="tags" placeholder="Type and hit enter to add a tag" onChange={onChangeHandler} />
                                                    
                                                    <small className="text-muted">This is used for search. Input those words by which cutomer can find this product.</small> */}
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-md-3 col-from-label">Barcode</label>
                                                <div className="col-md-8">
                                                    <input type="text" className="form-control" name="barcode" placeholder="Barcode" fdprocessedid="ifjwoo" onChange={onChangeHandler} />
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
                                    <div className="card mt-2 rest-part physical_product_show" data-select2-id={176}>
                                        <div className="card-header">
                                            <h4 className="mb-0">Variation</h4>
                                        </div>
                                        <div className="col-lg-12" style={{ padding: '25px', margin: '5px' }}>
                                            {/* <form> */}
                                            <label>Attributes:</label><br />
                                            <div className="tags_inp_wrapper">
                                                <div className='tags-input-container'>
                                                    {attributes.map((tag, index) => {
                                                        return <div className='tag-item' key={index}>
                                                            <span className='text'>{attributes}</span>
                                                            <span className='close' onClick={() => removeAttributetag(index)}>&times;</span>
                                                        </div>
                                                    })}

                                                    <input type="text" onKeyDown={handleAttributeKeyDown} placeholder='type some text' className='tags-input' name="attributes" onChange={onChangeHandler} />
                                                </div>
                                            </div>

                                            <label style={{ margin: '5px 0' }}>Size:</label>
                                            <div className="size_tags_inp_wrapper">
                                                <div className='size-tags-input-container'>
                                                    {sizeTags.map((tag, index) => {
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

                                    {/* <ProductsVariation /> */}

                                    <div className="card mt-2 rest-part col-lg-12">
                                        <div className="card-header">
                                            <h4 className="mb-0">Product price &amp; stock</h4>
                                        </div>
                                        <div className="card-body">
                                            <div className="row align-items-end">
                                                <div className="col-md-6 form-group">
                                                    <label className="title-color">Unit price</label>
                                                    <input type="number" min={0} step="0.01" placeholder="Unit price" name="price" className="form-control" required fdprocessedid="0v4oa" onChange={onChangeHandler} />
                                                </div>
                                                <div className="col-md-6 form-group">
                                                    <label className="title-color">Purchese price</label>
                                                    <input type="text" min={0} step="0.01" placeholder="Purchase price" name="purchase_price" className="form-control" required fdprocessedid="6w85f" onChange={onChangeHandler} />
                                                </div>
                                                <div className="col-md-4 form-group">
                                                    <label className="title-color">Tax</label>
                                                    <label className="text-info title-color">Percent ( % )</label>
                                                    <input type="text" min={0} step="0.01" placeholder="Tax" name="tax" className="form-control" required fdprocessedid="s1cjk5" onChange={onChangeHandler} />

                                                    <input name="tax_type" defaultValue="percent" className="d-none" />
                                                </div>

                                                <div className="col-md-4 form-group">
                                                    <label className="title-color">Discount</label>
                                                    <input type="text" min={0} step="0.01" placeholder="Discount" name="discount" className="form-control" required fdprocessedid="yxlxe6" onChange={onChangeHandler} />
                                                </div>

                                                <div className="col-md-4 form-group">
                                                    <label className="title-color">Discount type </label>

                                                    <select className="js-example-basic-multiple js-states js-example-responsive demo-select2 w-100 select2-hidden-accessible" name="discount_type" data-select2-id={20} tabIndex={-1} aria-hidden="true" onChange={onChangeHandler}>
                                                        <option value="percent">Percent</option>
                                                        <option value="flat">Flat</option>
                                                    </select>

                                                    <span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id={21} style={{ width: '363.862px' }}>
                                                        <span className="selection">
                                                            {/* <span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-disabled="false" aria-labelledby="select2-discount_type-51-container">
                                                                <span className="select2-selection__rendered" id="select2-discount_type-51-container" role="textbox" aria-readonly="true" title="Flat">Flat</span>
                                                                <span className="select2-selection__arrow" role="presentation"><b role="presentation" />
                                                                </span>
                                                            </span> */}
                                                        </span>
                                                        <span className="dropdown-wrapper" aria-hidden="true" />
                                                    </span>
                                                </div>

                                                <div className="col-12 sku_combination table-responsive form-group" id="sku_combination">
                                                    <table className="table table-bordered physical_product_show">

                                                        <thead>
                                                            <tr>
                                                                <td className="text-center">
                                                                    <label className="control-label">Variant</label>
                                                                </td>
                                                                <td className="text-center">
                                                                    <label className="control-label">Variant Price</label>
                                                                </td>
                                                                <td className="text-center">
                                                                    <label className="control-label">SKU</label>
                                                                </td>
                                                                <td className="text-center">
                                                                    <label className="control-label">Quantity</label>
                                                                </td>
                                                            </tr>
                                                        </thead>

                                                        <tbody>
                                                            {sizeTags.map((item, index) => {
                                                                return <tr key={index}>
                                                                    <td>
                                                                        <label data_id={index} name="weight" className="control-label">{item}</label>
                                                                    </td>
                                                                    <td>
                                                                        <input data_id={index} type="number" name="price" min={0} step="0.01" className="form-control" required onChange={onChangeHandler} />
                                                                    </td>
                                                                    <td>
                                                                        <input data_id={index} type="text" name="sku" defaultValue="MTP-10Ml" className="form-control" required onChange={onChangeHandler} />
                                                                    </td>
                                                                    <td>
                                                                        <input data_id={index} type="number" name="current_qty" defaultValue={0} min={1} max={1000000} step={1} className="form-control" required onChange={onChangeHandler} />
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
                                                    <input type="number" min={1} defaultValue={1} step={1} placeholder="Minimum order quantity" name="minimum_order_qty" className="form-control" required fdprocessedid="wabmv" onChange={onChangeHandler} />
                                                </div>
                                                <div className="col-md-3 form-group physical_product_show" id="shipping_cost">
                                                    <label className="title-color">Shipping cost </label>
                                                    <input type="number" min={0} defaultValue={0} step={1} placeholder="Shipping cost" name="shipping_cost" className="form-control" required fdprocessedid="pvn15" onChange={onChangeHandler} />
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
                                                    <input type="text" className="form-control" name="meta_title" placeholder="Meta Title" fdprocessedid="1hz7zu" onChange={onChangeHandler} />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-md-3 col-from-label">Description</label>
                                                <div className="col-md-8">
                                                    <textarea name="meta_description" rows={8} className="form-control" onChange={onChangeHandler} />
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
                                                <input type="number" name="low_stock_quantity" defaultValue={1} min={0} step={1} className="form-control" fdprocessedid="dtmr1" onChange={onChangeHandler} />
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
                                                    <label className="aiz-switch aiz-switch-success mb-0">
                                                        <input type="radio" name="show_stock_quantity" value={featuredval} onChange={onChangeHandler} />
                                                        <span />
                                                    </label>
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-md-6 col-from-label">Show Stock With Text Only</label>
                                                <div className="col-md-6">
                                                    <label className="aiz-switch aiz-switch-success mb-0">
                                                        <input type="checkbox" name="show_stock_with_text_only" value={featuredval} onChange={onChangeHandler} />
                                                        <span />
                                                    </label>
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-md-6 col-from-label">Hide Stock</label>
                                                <div className="col-md-6">
                                                    <label className="aiz-switch aiz-switch-success mb-0">
                                                        <input type="checkbox" name="hide_stock" value={featuredval} onChange={onChangeHandler} />
                                                        <span />
                                                    </label>
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
                                                    <label className="aiz-switch aiz-switch-success mb-0">
                                                        <input type="checkbox" name="cash_on_delivery" value={featuredval} onChange={onChangeHandler} />
                                                        <span />
                                                    </label>
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
                                                    <label className="aiz-switch aiz-switch-success mb-0">
                                                        <input type="checkbox" name="featured" value={featuredval} onChange={onChangeHandler} />
                                                        <span />
                                                    </label>
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
                                                    <label className="aiz-switch aiz-switch-success mb-0">
                                                        <input type="checkbox" name="todays_deal" value={featuredval} onChange={onChangeHandler} />
                                                        <span />
                                                    </label>
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
                                                    <label className="aiz-switch aiz-switch-success mb-0">
                                                        <input type="checkbox" name="trending" value={featuredval} onChange={onChangeHandler} />
                                                        <span />
                                                    </label>
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
                        </form>
                    </div>
                    <button className="btn btn-primary m-3" onClick={submitAddProductData}>Add Products</button>
                    <ToastContainer />
                </div>
            </div>
        </>
    )
}
export default AddNewProductsPage;