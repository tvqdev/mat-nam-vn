import Footer from "../components/Footer";

function FooterOnly({ children }) {
     return (
          <div className="">
               <div className="container">
                    <div className="content">{children}</div>

               </div>
               <Footer />
          </div>
     )
}
export default FooterOnly;