import { HomeFilled } from '@ant-design/icons';
import { Link, NavLink } from "react-router-dom";
import CartQuantity from '../../components/CartQuantity';
import { getCookie } from "../../helper/Cookie";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGear } from '@fortawesome/free-solid-svg-icons';

function Header(){
    const token = getCookie('token')
    const isLogin = useSelector(state => state.loginReducer)
    const navLinkstyle = ({isActive}) => {
        return{
            color :  isActive ? '#3CB815' : 'black'
        }
    }

    return(
        <div className="Layout-default__header">
                    <div className="container">
                        <div className="Layout-default__wrap">
                            <div className="Layout-default__logo">
                                <Link to = '/' > 
                                <HomeFilled className='home-icon'/>
                                </Link>
                            </div>
                            <div className='Layout-default__menu'>
                                <NavLink to ='/product' style={navLinkstyle}>Sản phẩm</NavLink>
                                <NavLink to ='/post' style={navLinkstyle}>Bài đăng</NavLink>
                            </div>
                            
                            <div className="Layout-default__account">
                                <CartQuantity/>
   
                                <Link to = 'login'> 
                                    <FontAwesomeIcon icon={faUserGear} />
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
    )
}
export default Header