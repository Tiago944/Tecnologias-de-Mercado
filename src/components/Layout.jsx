import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Header />
      </header>
      <section> {children} </section>
      <footer></footer>
    </>
  );
};

export default Layout;
