import FlutterCredential from "../../Components/africanCredential/FlutterCredential";
import PayFastCredential from "../../Components/africanCredential/PayFastCredential";

function AfricanPgCredentialPage() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="row">
                        <FlutterCredential />
                        <PayFastCredential />
                    </div>
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                    {/*p class="mb-0">&copy;  v6.3.3</p*/}
                </div>
            </div>
        </>
    )
}
export default AfricanPgCredentialPage;