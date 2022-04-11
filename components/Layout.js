import Nav from "./Nav";
import Footer from "./Footer";
import globalStyles from "../styles/global";

const Layout = ({ children }) => {
    return(
        <>
        <style jsx>{globalStyles}</style>

        <Nav type="main" />
            { 
            children // the children is send from _app.js like this :   <Component {...pageProps} /> 
            }
        <Footer /> 
        </>
    );
}
export default Layout;
