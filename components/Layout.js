import Navbar from "./Navbar";

const Layout = (props) => (
    <div className="bg-gray-100">
        <Navbar/>
        <div>
            {props.children}
        </div>
    </div>
);

export default Layout;
