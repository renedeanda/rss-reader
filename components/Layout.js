import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <>
      {/* Rede.io Promotion Banner */}
      
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        {children}
        <footer className="text-center text-gray-500 text-sm py-4">
          &copy; {new Date().getFullYear()} Crafted with 🧡 + 🤖 by the <a href="https://rede.io/?utm_source=rss-makr-io" className="text-amber-500 hover:underline">Rede team</a>.
        </footer>
      </div>
    </>
  );
};

export default Layout;
