import AllStaffs from "../../Components/allStaffs/AllStaffs";

function AllStaffsPage() {
  const data = {
    title:"All staffs",
    heading:"Staffs",
    addEmploy:"Add New Staffs",
    path:"/admin/staffs/create"
  }
  return (
    <>
      <AllStaffs data={data}/>
    </>
  )
}
export default AllStaffsPage;