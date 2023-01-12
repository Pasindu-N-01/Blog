
import "./Header.css"
import sea from "../../Images/sea.jpg"

export default function header() {
  return (
    <div className='header'>

      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>

      <img className="headerImg" src={sea} alt="" />



    </div>
  )
}
