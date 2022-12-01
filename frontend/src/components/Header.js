import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav, Container, Row, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { logout } from "../actions/userActions";

function Header() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <div>
      <section id="header">
        <a href="#">
          <img src="img/logo.png" class="logo" alt=""></img>
        </a>
        <div>
          <ul id="navbar">
            <li>
              <LinkContainer to="/">
                <NavDropdown.Item>Home</NavDropdown.Item>
              </LinkContainer>
            </li>
            <li>
              <LinkContainer to="/shop">
                <NavDropdown.Item>Shop</NavDropdown.Item>
              </LinkContainer>
            </li>
            <li>
              <LinkContainer to="/blog">
                <NavDropdown.Item>Blog</NavDropdown.Item>
              </LinkContainer>
            </li>
            <li>
              <LinkContainer to="/about">
                <NavDropdown.Item>About</NavDropdown.Item>
              </LinkContainer>
            </li>
            <li>
              <LinkContainer to="/contact">
                <NavDropdown.Item>Contact</NavDropdown.Item>
              </LinkContainer>
            </li>
            <li>
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i>
                </Nav.Link>
              </LinkContainer>
            </li>
            {userInfo ? (
              <NavDropdown title={userInfo.name} id="username">
                <LinkContainer to="/profile">
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <li>
                <LinkContainer to="/login">
                  <Nav.Link>
                    <i className="fas fa-user"></i>
                  </Nav.Link>
                </LinkContainer>
              </li>
            )}
            {userInfo && userInfo.isAdmin && (
                                <NavDropdown title='💎' id='adminmenue'>
                                    <LinkContainer to='/admin/userlist'>
                                        <NavDropdown.Item>Users</NavDropdown.Item>
                                    </LinkContainer>

                                    <LinkContainer to='/admin/productlist'>
                                        <NavDropdown.Item>Products</NavDropdown.Item>
                                    </LinkContainer>

                                    <LinkContainer to='/admin/orderlist'>
                                        <NavDropdown.Item>Orders</NavDropdown.Item>
                                    </LinkContainer>
                                </NavDropdown>
                            )}
          </ul>
        </div>
      </section>
    </div>
  );
}
export default Header;
