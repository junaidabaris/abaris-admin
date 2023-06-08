import ActivationTypes from "../../Components/africanPgConfiguration/ActivationTypes";
import FlutterActivation from "./FlutterActivation";
import PayFastActivation from "./PayFastActivation";
import TingoActivation from "./TingoActivation";

function AfricanPgConfigurationPage() {

    const activationData = {
        title: 'flutterwave Activation',
        imgUrl: 'https://mmslfashions.in/public/assets/img/cards/flutterwave.png',
        description: 'You need to configure flutterwave correctly to enable this feature. Configure Now'
    }
    const activationData2 = {
        title: 'Payfast Activation',
        imgUrl: 'https://mmslfashions.in/public/assets/img/cards/payfast.png',
        description: 'You need to configure payfast correctly to enable this feature. Configure Now'
    }


    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="row">
                        <FlutterActivation />
                        <PayFastActivation />
                        <TingoActivation />
                        {/* <ActivationTypes data={activationData} />
                        <ActivationTypes data={activationData2} />
                        <ActivationTypes data={activationData2} /> */}
                    </div>
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                    {/*p class="mb-0">&copy;  v6.3.3</p*/}
                </div>
            </div>
        </>
    )
}
export default AfricanPgConfigurationPage;