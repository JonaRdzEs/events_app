import Header from "../Header";

function MainLayout ({ children }) {
  return (
    <div className="container px-2 py-7 mx-auto">
      <Header />
      {children}
    </div>
  );
}

export default MainLayout;
