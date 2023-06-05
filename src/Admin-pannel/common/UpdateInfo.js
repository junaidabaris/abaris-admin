import { Tab, Tabs } from "react-bootstrap"
import Bangla from "./Bangla"
import English from "./English"

function UpdateInfo() {
    return (
        <>
        <div className="aiz-main-content">
  <div className="px-15px px-lg-25px">
    <div className="aiz-titlebar mt-2 mb-3">
      <h5 className="mb-0 h6">Update Package Information</h5>
    </div>
    <div className="col-lg-10 mx-auto cl">
    <Tabs
      defaultActiveKey="home"
      transition={false}
      id="noanim-tab-example"
      className="mb-3 nav nav-tabs nav-fill border-light nav-item"
    >
      <Tab className="nav-link text-reset  active  py-3" eventKey="home" title="English">
        <English/>
      </Tab>
      <Tab className="nav-link text-reset border-left-0  py-3" eventKey="profile" title="Bangla">
      {/* <English/> */}

      {/* <Bangla/> */}
        
      </Tab>
      <Tab className="nav-link text-reset   border-left-0  py-3" eventKey="contact" title="Arabic" >
        {/* <Sonnet /> */}
        {/* <English/> */}
      </Tab>
    </Tabs>
     
    </div>
  </div>
  <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
    {/*p class="mb-0">&copy;  v6.3.3</p*/}
  </div>
</div>

        </>
    )
}
export default UpdateInfo