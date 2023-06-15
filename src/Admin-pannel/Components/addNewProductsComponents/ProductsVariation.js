import { useEffect, useState } from "react";
import { MultiselectOption } from "../../common/MultiSelectOption";
import { useGetPickupPointQuery, useGetAttributesQuery, useForm_variatioMutation } from "../all-products/allproductsApi/allProductsApi";
import { AttributeItem } from "./AttributeItem";
import { ColorVariant } from "./ColorVariant";

let sendPayload = [];
function ProductsVariation({ handleVariantData, productData, setattributesVal }) {


    const [variationArr, setVariationArr] = useState([]);
    // console.log('....prod', productData)
    // const [inputval, setInputVal] = useState({
    //     unit_price: '',
    //     minimum_purchase_qty: '',
    //     variations: [],
    //     attributes: '',
    //     size: '',
    //     current_stock: '',
    //     minimum_order_qty: '',
    //     shipping_cost: '',
    //     purchase_price: '',
    //     variant: '',
    //     variant_price: '',
    //     quantity: '',
    //     total_quantity: '',
    //     minimum_order_quantity: '',
    //     shipping_coast: '',
    //     Shipping_cost_multiply_with_quantity: '',
    //     mrp: '',
    //     purchase_rate: '',
    //     sale_rate: '',
    //     tax: '',
    //     tax_type: '',
    //     discount: '',
    //     discount_type: '',
    //     sku: '',
    //     pickup_points: '',
    //     current_qty: '',
    //     Quantity: '',
    // });

    // const onChangeHandler = (e) => {
    //     let slug = e.target.value + new Date().getUTCMilliseconds();
    //     const inpName = e.target.name;
    //     const inpVal = e.target.value;
    //     variationArr.map((item, i) => {
    //         if (item.id == e.target.getAttribute('data_id')) {
    //             item[inpName] = inpVal;
    //             console.log(variationArr)
    //         }
    //     })
    //     const clonedObj = { ...inputval, slug };
    //     clonedObj[inpName] = inpVal;
    //     setInputVal(clonedObj)
    // };

    const { data: pickUp } = useGetPickupPointQuery();


    const [form_variatio, { data: variationsData, isLoading: isVariantLoading }] = useForm_variatioMutation();
    const [updatedVariants, setUpdatedVariants] = useState()

    useEffect(() => {
        if (variationsData) {
            setVariationArr(variationsData)
        }
    }, [isVariantLoading, variationsData])

    const { data: attributesData } = useGetAttributesQuery()
    const [colorVariant, setColorVariant] = useState([]);
    const [allAttributes, setAllAttributes] = useState(null);
    const [allChoices, setAllChoices] = useState(null);

    const getAttributes = (attributes) => {
        setAllAttributes([...attributes])
    }
    const getChoiceValues = (choiceValues, currentAttr) => {

        setAllChoices(choiceValues && [...choiceValues])
        let flag = true;
        if (sendPayload.length) {
            sendPayload.map((item, i) => {
                if (item.id === currentAttr.id) {
                    sendPayload.splice(i, 1, currentAttr)
                    flag = false;
                }
            })
            if (flag) {
                sendPayload.push(currentAttr)
            }
        } else {
            sendPayload.push(currentAttr)
        }
        const filteredData = sendPayload.filter(item => item.data.length)
       
        if (filteredData.length) {
            form_variatio({ attributes: filteredData })
            setattributesVal(filteredData)
        }
        if (!filteredData.length) {
            setVariationArr([])
        }

    }
    useEffect(() => {
        if (allChoices) {
            const finalAttributes = generateOb(colorVariant, allChoices)
            setColorVariant([...finalAttributes.flat()])
        }
    }, [allChoices]);

    useEffect(() => {
        if (variationsData) {
            // setVariants(variations)
            setUpdatedVariants(variationsData)
        }

    }, [variationsData])


    function generateOb(data, prices) {
        const result = data.map((att, i) => {
            return prices.map((price) => {
                return {
                    ...att,
                    variant: `${att.name}-${price}`,
                    sku: `-${att.name}-${price}`,
                }
            })
        })
        return result;
    }

    const getUpdatedVariant = (variant) => {
        const updatedData = updatedVariants?.map(item => {
            if (variant._id === item._id) {
                return variant
            } else {
                return item
            }
        })
        setUpdatedVariants(updatedData);

    }

    useEffect(() => {
        if (updatedVariants) {
            handleVariantData(updatedVariants)
        }
    }, [updatedVariants]);


    return (
        <>
            <div className="row">
                <div className="card mt-2 rest-part physical_product_show" data-select2-id={176}>
                    <div className="card-header">
                        <h4 className="mb-0">Variation</h4>
                    </div>
                    <div className="col-lg-12" style={{ padding: 25 + 'px', margin: 5 + 'px' }}>
                        <div className="row">
                            <div className="col-lg-6">
                                <MultiselectOption data={attributesData} showCheckbox={true} getSelectedOptions={getAttributes}>
                                    <label>Attributes:</label>
                                </MultiselectOption>
                            </div>

                            <div className="col-lg-12 mt-3">
                                {allAttributes?.map((item) => {
                                    return <AttributeItem key={item._id} item={item} handleChoiceValues={getChoiceValues} />
                                })}
                            </div>

                        </div>
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
                                            <td><label className="control-label">Variant</label></td>
                                            <td><label className="control-label">MRP</label></td>
                                            <td><label className="control-label">Purchase Rate</label></td>
                                            <td><label className="control-label">Tax %</label></td>
                                            <td><label className="control-label">Tax Type</label></td>
                                            <td><label className="control-label">Sale Rate</label></td>
                                            <td><label className="control-label">Discount</label></td>
                                            <td><label className="control-label">Discount Type</label></td>
                                            <td><label className="control-label">SKU</label></td>
                                            <td><label className="control-label">HSN Code</label></td>
                                            <td><label className="control-label">Sale Reward Point</label></td>
                                            <td><label className="control-label">Share Reward Point</label></td>
                                            {/* <td><label className="control-label">Pickup Point</label></td>
                                            <td><label className="control-label">Quantity</label></td> */}
                                        </tr>

                                    </thead>

                                    <tbody>
                                        {isVariantLoading && (
                                            <tr>
                                                <td colSpan={10}>
                                                    <div className="loader_spinner spinner-border text-primary" role="status">
                                                        <span className="visually-hidden">Loading...</span>
                                                    </div>
                                                </td>
                                            </tr>
                                        )}

                                        {/* { 
                                            getOptions(variationsData).map((variantItem, i) => (
                                                <ColorVariant key={i} data={variantItem} pickUp={pickUp} handleVariant={getUpdatedVariant} />
                                            ))
                                        } */}
                                        {variationArr && variationArr.map((variantItem, i) => {
                                            return (
                                                <ColorVariant key={i} data={variantItem} pickUp={pickUp} handleVariant={getUpdatedVariant} />
                                            )
                                        })}

                                        {/* {productData?.variations?.map((variantItem, i) => {
                                            return (
                                                <ColorVariant key={i} data={variantItem} pickUp={pickUp} handleVariant={getUpdatedVariant} />
                                            )
                                        })} */}


                                    </tbody>

                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProductsVariation;