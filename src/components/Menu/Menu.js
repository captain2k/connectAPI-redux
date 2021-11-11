import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

const menus = [
    {
        children: 'Trang chủ',
        to: '/',
        exact: true
    },
    {
        children: 'Quản Lý Sản Phẩm',
        to: '/product-list',
        exact: false
    }
]

const MenuLink = ({ children, to, exact }) => (
    <Route path={to} exact={exact} children={({ match }) => (
        <li className={match ? 'active' : ''}>
            <Link to={to}>
                {children}
            </Link>
        </li>
    )} />
)

class Menu extends Component {
    showContent = (menus) => {
        var result = null;
        result = menus.map((menu, index) => {
            return (
                <MenuLink
                    key={index}
                    to={menu.to}
                    exact={menu.exact}
                    children={menu.children}
                />

            )
        })
        return result
    }


    render() {
        return (
            <div className="navbar navbar-default">
                <a href="*" className="navbar-brand" >Call API</a>
                <ul className="nav navbar-nav">
                    {this.showContent(menus)}
                </ul>
            </div>
        );
    }
}

export default Menu;