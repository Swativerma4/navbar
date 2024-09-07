import React, { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { menuOutline, closeOutline } from 'ionicons/icons';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const onToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="font-[Poppins] bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] h-screen">
      <header className="bg-white">
        <nav className="flex justify-between items-center w-[92%] mx-auto py-4">
          <div>
            <img
              className="w-16 cursor-pointer"
              src="https://cdn-icons-png.flaticon.com/512/5968/5968204.png"
              alt="Logo"
            />
          </div>
          {/* Navigation links for large screens */}
          <div className="hidden md:flex md:items-center md:gap-6">
            <a className="hover:text-gray-500" href="#">Products</a>
            <a className="hover:text-gray-500" href="#">Solution</a>
            <a className="hover:text-gray-500" href="#">Resource</a>
            <a className="hover:text-gray-500" href="#">Developers</a>
            <a className="hover:text-gray-500" href="#">Pricing</a>
          </div>
          {/* Sign in and Log in buttons */}
          <div className="flex items-center gap-6">
            <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">
              Sign in
            </button>
            <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">
              Log in
            </button>
            {/* Toggle icon for small screens */}
            <IonIcon
              onClick={onToggleMenu}
              icon={menuOpen ? closeOutline : menuOutline}
              className="text-3xl cursor-pointer md:hidden z-50 relative"
            />
          </div>
        </nav>
        {/* Mobile menu */}
        <div
          className={`md:hidden fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center transition-transform duration-300 ${menuOpen ? 'translate-y-0' : '-translate-y-full'}`}
        >
          <ul className="flex flex-col gap-6">
            <li><a className="hover:text-gray-500" href="#">Products</a></li>
            <li><a className="hover:text-gray-500" href="#">Solution</a></li>
            <li><a className="hover:text-gray-500" href="#">Resource</a></li>
            <li><a className="hover:text-gray-500" href="#">Developers</a></li>
            <li><a className="hover:text-gray-500" href="#">Pricing</a></li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
