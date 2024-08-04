import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  return (
    <nav className="bg-amber-500 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <a className="text-xl font-bold">RSS Feed Reader</a>
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;