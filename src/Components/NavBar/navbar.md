    <div className="navBar flex justify-between items-center p-[3rem]">
      <div className="logoDiv">
        <h1 className="logo text-[25px] text-blueColor">
          <strong>JOB</strong>Search
        </h1>
      </div>

      <button className="nav-toggle" onClick={showNavbar}>
        <AiOutlineMenu size={30} />
      </button>

      <nav className="menu flex gap-8" ref={navRef}>
        <button>
          <AiOutlineClose size={30} className='text-center md:hidden' onClick={showNavbar} />
        </button>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">Jobs</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">Companies</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">About</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">Contact</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">Blog</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">Login</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">Register</li>
      </nav>
    </div>