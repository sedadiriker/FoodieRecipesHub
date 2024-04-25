import { Navigate, Outlet } from "react-router-dom"
import { useAuthContext } from "../context/AuthProvider"

const PrivateRouter = () => {
  const {currentUser} = useAuthContext()
console.log(currentUser)
  return currentUser ? (
    <>
      <Outlet/>
    </>
  ) : (
    <Navigate to="/"/>
  )
}

export default PrivateRouter
