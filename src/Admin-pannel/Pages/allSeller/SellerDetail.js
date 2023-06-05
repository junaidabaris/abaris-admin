import { useEffect } from "react"
import { useParams } from "react-router"
import { useGetSellerDetailQuery } from "../../Components/all-products/allproductsApi/allProductsApi"

function SellerDetail() {
    const obj = {
        id: "1",
        url: "https://source.unsplash.com/pAKCx4y2H6Q/1400x1200",
    }
    const params = useParams()
    const { data } = useGetSellerDetailQuery(params.id)
    useEffect(() => {
        console.log(data);
    }, [])
    return <div>
        <div style={{ width: "200px", height: "200px", padding: "10px" }}>
            <img style={{ width: "100%", height: "100%" }} src={obj.url} />
            <table style={{width:"600px", margin:"50px auto"}}>
                <tbody>
                    <tr>
                        <td class="text-main text-bold">Order #</td>
                        <td class="text-info text-bold text-right"> 20230130-10174545</td>
                    </tr>
                    <tr>
                        <td class="text-main text-bold">Order status</td>
                        <td class="text-right"><span class="badge badge-inline badge-info">Pending</span></td>
                    </tr>
                    <tr>
                        <td class="text-main text-bold">Order date </td>
                        <td class="text-right">30-01-2023 10:17 AM</td>
                    </tr>
                    <tr>
                        <td class="text-main text-bold">Total amount</td>
                        <td class="text-right">ZK670.00</td>
                    </tr>
                    <tr>
                        <td class="text-main text-bold">Payment method</td>
                        <td class="text-right">flutterwave</td>
                    </tr>
                    <tr>
                        <td class="text-main text-bold">Additional Info</td>
                        <td class="text-right"></td>
                    </tr>
                </tbody></table>
        </div>
    </div>
}
export default SellerDetail