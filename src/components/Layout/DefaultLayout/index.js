import classNames from "classnames/bind"
import Header from "../components/Header";
import Styles from "./DefaultLayout.module.scss"
import Sidebar from "./Sidebar";
import Footer from "../components/Footer"


const cx = classNames.bind(Styles)

function DefaultLayout({ children }) {
     return (
          <div className={cx('wrapper')}>
               <Header />

               {/* CONTENT  */}
               <div className={cx('container')} >
                    <div className={cx('content')}>{children}</div>
                    <Sidebar />
               </div>
               {/* END CONTENT  */}

               <Footer />
          </div >
     )
}
export default DefaultLayout;