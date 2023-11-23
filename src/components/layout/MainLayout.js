import Footer from "../Footer";
import Header from "../Header";

function MainLayout ({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default MainLayout;
