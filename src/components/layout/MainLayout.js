import Header from "../Header";

function MainLayout ({ children }) {
  return (
    <div className="container px-4 py-7 mx-auto md:px-8">
      <Header />
      {children}
    </div>
  );
}

export default MainLayout;
