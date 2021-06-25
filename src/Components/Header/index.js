import { ImPhone,ImCart } from 'react-icons/im';
import { AiFillHeart } from 'react-icons/ai';
import { BiKey } from 'react-icons/bi'
import { FaUserAlt,FaSearch } from 'react-icons/fa'
import logo from '../../Assets/Img/Logo/logo.png'
import './style.css'

function Header() {
    return (
        <div className="Headernav">
            <div className="section-topbanner">
                <div className="top-banner">
                    <div className="left-top-banner flex-row">
                        <a className="flex-row" href="#">
                            <ImPhone className="icon" /><span> Hotline: 19002008</span>
                        </a>
                        <a className="flex-row" href="#">
                            < AiFillHeart className="icon" /><span> Danh sách yêu thích</span>
                        </a>

                    </div>
                    <div className="right-top-banner flex-row">
                        <a className="flex-row" href="#">
                            <BiKey className="icon" /> <span> Đăng ký</span>
                        </a>
                        <a className="flex-row" href="#">
                            <FaUserAlt className="icon" /><span> Đăng nhập</span>
                        </a>

                    </div>

                </div>
            </div>
            <div className="section-bottombanner flex-row center">
                <img className="logo" src={logo} />
                <div className="search-input">
                    <input type="text" />
                    <FaSearch/>
                </div>
                <div className="package">
                <ImCart/>
                </div>
            </div>
        </div>
    )
}

export default Header