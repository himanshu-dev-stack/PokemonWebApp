import { useState, useEffect } from 'react';
import {
  Search,
  Sun,
  Moon,
  ChevronDown,
  Zap,
  Menu,
  X
} from 'lucide-react';
import { useSearch } from '../Context/SearchContext';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Shared with PokemonList so typing/selecting here actually filters results there
  const { searchTerm, setSearchTerm, selectedCategory, setSelectedCategory } = useSearch();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const categories = ["All", "Grass", "Bug", "Water", "Fire", "Poison", "Electric", "Ground", "Fighting", "Rock", "Psychic", "Ghost", "Ice", "Dragon", "Dark", "Steel", "Fairy"];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* LEFT: Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <div className="p-1.5 rounded-lg">
              <img src='../public/pokemon-png-21242.png' alt='Pokemon Logo' className="h-12 w-full" />
            </div>
          </div>

          {/* CENTER: Search Bar with Dropdown (Hidden on small mobile) */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8 relative">
            <div className="w-full flex items-center bg-gray-100 dark:bg-slate-800 rounded-full border border-transparent focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 dark:focus-within:ring-blue-900 transition-all">

              {/* Search Icon */}
              <div className="pl-4 text-gray-400">
                <Search className="h-5 w-5" />
              </div>

              {/* Input Field */}
              <input
                type="text"
                placeholder="Search Pokemon..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-transparent hover:border-none focus:ring-0 text-gray-800 dark:text-gray-100 placeholder-gray-400 px-4 py-2"
              />

              {/* Dropdown Trigger */}
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 border-l border-gray-300 dark:border-slate-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {selectedCategory}
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* The Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute right-0 top-full mt-2 w-40 max-h-64 overflow-y-auto bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-gray-100 dark:border-slate-700 py-2 animate-in fade-in slide-in-from-top-2">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => {
                          setSelectedCategory(cat);
                          setIsDropdownOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-slate-700 hover:text-blue-600 transition-colors"
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT: Actions & Theme Toggle */}
          <div className="flex items-center gap-4">

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-slate-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-yellow-500" />
              ) : (
                <Moon className="h-5 w-5 text-slate-700" />
              )}
            </button>

            {/* Profile / Sign In (Placeholder) */}
            <button className="hidden md:block px-4 py-2 text-sm font-medium text-white bg-blue-900 hover:bg-blue-500 rounded-full transition-colors">
              Sign In
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 dark:text-gray-300"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Optional expansion) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800 p-4 space-y-4">
          <input
            className="w-full bg-gray-100 dark:bg-slate-800 p-2 rounded-lg text-gray-800 dark:text-white"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-full text-xs font-medium ${selectedCategory === cat ? 'bg-blue-900 text-white' : 'bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300'}`}
              >
                {cat}
              </button>
            ))}
          </div>
          <button className="w-full bg-blue-900 text-white py-2 rounded-lg">Sign In</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
