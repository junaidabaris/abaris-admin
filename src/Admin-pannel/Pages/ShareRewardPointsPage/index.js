
import ShareRewardPoints from "../../Components/shareRewardPoints/ShareRewardPoints";

function ShareRewardPointsPage(){
  const data = {
    title:"Social Share Reward Points",
    facebook:"Facebook Share",
    twitter:"Twitter Share",
    linkedin:"Linkedin Share",
    instagram:"Instagram Share",
    youtube:"Youtube Share",
  
  }
  return(
    <>
      <ShareRewardPoints data={data}/>
    </>
  )
}
export default ShareRewardPointsPage;