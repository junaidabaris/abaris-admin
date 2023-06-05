import AllStaffs from "../../Components/allStaffs/AllStaffs";


function StaffPermissionPage() {
  const data = {
    title: "All Role",
    heading: "Roles",
    addEmploy: "Add New Role",
    path:"/admin/roles/create"
  }
  return (
    <>
      <AllStaffs data={data}/>
    </>
  )
}
export default StaffPermissionPage;