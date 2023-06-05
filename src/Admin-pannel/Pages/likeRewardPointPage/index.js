import ShareRewardPoints from "../../Components/shareRewardPoints/ShareRewardPoints";

function LikeRewardPointsPage(){
  const data = {
    title: "Social Like Reward Points",
    facebook: "Facebook Share",
    twitter: "Twitter Share",
    linkedin: "Linkedin Share",
    instagram: "Instagram Share",
    youtube: "Youtube Share",

  }
  return(
    <>
      <ShareRewardPoints data={data}/>
    </>
  )
}
export default LikeRewardPointsPage;