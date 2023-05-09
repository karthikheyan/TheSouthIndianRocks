import { useState } from 'react';
import './DropdownMenu.css'
import userImage from '../../images/user.svg'
import { Link, useNavigate} from 'react-router-dom';
import { useUserContext } from '../Context/useUserContext';

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();
  const {user,userLogout} = useUserContext();
  const handleLogout = ()=>{
    userLogout(null);
    navigate('/login')
  }

  return (
    <div className="dropdown">
      <button className="dropbtn" onClick={handleToggle}>
        <img src={userImage} alt="" />
        <p>{user}</p>
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <Link to="/cart">Your Cart</Link>
          <Link to="/orders">Ordered Items</Link>
          <Link onClick={handleLogout}to="/login">Logout</Link>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;
