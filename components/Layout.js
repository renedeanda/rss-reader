import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        {children}
      </div>
    </>
  );
};

export default Layout;
