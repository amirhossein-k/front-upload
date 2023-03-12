import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import SingleUpload from '../pages/SingleUpload'

const Header = () => {
    const [singleclick,setSingleclick]=useState(false)
  return (
    <>
        <ul className="nav justify-content-center nav-mystyle ">
            <li className="nav-item">
                <Link className="nav-link active" to="/singleupload"  onClick={e=>setSingleclick(true)}>Upload Single</Link>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/multipleupload">Upload Multiple</a>
            </li>
          
        </ul>
    </>
  )
}

export default Header