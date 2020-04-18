import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import { auth } from '../../firebase/firebase.utils';
import {connect} from 'react-redux';

const Header = ({ currentUser, hidden }) => {
    return (
        <div className='header'>
            <Link to='/' className='logo-container'>
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link to='/shop' className='option'>
                    SHOP
                </Link>
                <Link to='/shop' className='option'>
                    CONTACT
                </Link>
                {
                    currentUser ?
                        <div className='option' onClick={() => auth.signOut()}>
                            SIGN OUT
                    </div> :
                        <Link to='/signin' className='option'>
                            SIGN IN
                    </Link>
                }
                <CartIcon />
            </div>
            {hidden ? null : <CartDropdown />}
        </div>
    )
}

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
});

export default connect(mapStateToProps)(Header);