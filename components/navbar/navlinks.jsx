const NavLinks = () => {
  return (
    <div className="flex items-center flex-[0.2] md:flex-none md:justify-start space-x-6 py-2">
      <a href="/signin" className="text-sm font-semibold text-blue-500">
        Sign In
      </a>
      <a
        href="/signup"
        className="hidden md:inline-flex text-sm font-semibold text-white bg-pink-400 hover:bg-pink-300 px-3 py-2 rounded"
      >
        Sign Up
      </a>
    </div>
  )
}

export default NavLinks