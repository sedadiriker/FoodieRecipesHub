import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="relative">
      <img className="w-8/12 m-auto" src="/images/notfound.jpg" alt="" />
      <Link className=" bg-green hover:opacity-80 text-white font-bold py-2 px-4 rounded absolute bottom-3 right-3" to={-1}> Go back</Link>
    </div>
  )
}

export default NotFound
