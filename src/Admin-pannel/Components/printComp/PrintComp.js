import React from "react";

export const ComponentToPrint = React.forwardRef((props, ref) => {
    const { totalPosProductsPrice, showCombo } = props
    return (
        <div ref={ref} className="p-5">
            <h1 style={{ textAlign: 'center' }}>ETG</h1>
            <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Bill</h2>

            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {showCombo && showCombo.map((item, i) => {
                        return <tr key={i}>
                            <td>{i + 1}</td>
                            <td style={{ display: 'table-cell' }}>
                                <span className='txt-bold ps-1'>{item.product[0]?.name}</span>
                            </td>
                            <td className='txt-bold text-end' style={{ display: 'table-cell' }}>{item.variant_id?.sale_rate}</td>
                            <td className='txt-bold text-end' style={{ display: 'table-cell' }}>{item.count}</td>
                            <td className='txt-bold text-end' style={{ display: 'table-cell' }}>{item.subTotal}</td>
                            <td className='txt-bold' style={{ display: 'table-cell' }}></td>
                        </tr>
                    })}

                </tbody>
            </table>

            <h1>Total Payable Amount:{totalPosProductsPrice}</h1>
        </div>
    );
});