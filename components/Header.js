import React from "react";

function Header() {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a
            href="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <h1 className="ml-3 text-xl">
              <span style={{ color: "#2977f5" }}>NEXTJS</span> AUTHENTICATION
            </h1>
          </a>
        </div>
      </header>
    </div>
  );
}

export default Header;
