import { NavLink, Outlet } from "react-router-dom";
import { FaUser, FaHome, FaRegListAlt } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

const AdminLayout = () => {
    return (
        <>
            <header>
                <div className="container">
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/admin/users">
                                    <FaUser />
                                    Users
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/admin/contacts">
                                    <FaMessage />
                                    Contacts
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/service">
                                    <FaHome />
                                    Services
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/">
                                    <FaRegListAlt />
                                    Home
                                </NavLink>
                            </li>

                        </ul>
                    </nav>
                </div>
            </header>
            <Outlet />
        </>
    )
};

export default AdminLayout;

