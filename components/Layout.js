import Nav from "./Nav";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return(
        <>
        <Nav />
            { 
            children // the children is send from _app.js like this :   <Component {...pageProps} /> 
            }
        <Footer /> 
        </>
    )
}
export default Layout;
