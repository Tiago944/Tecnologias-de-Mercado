import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Header />
      </header>
      <section> {children} </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
