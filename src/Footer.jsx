function Footer() {
  return (
    <footer className="bg-[#001B3D] text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 ">
        <div className="flex-1 text-center md:text-left text-sm">
          <p>&copy; 2025 VIRACH.</p>
          <p>All rights reserved.</p>
        </div>

        <div className="hidden md:block w-[1px] bg-gray-500 h-10"></div>

        <ul className="flex-1 text-center md:text-right space-y-2 md:space-y-0">
          <li className="hover:text-blue-400 cursor-pointer">Privacy Policy</li>
          <li className="hover:text-blue-400 cursor-pointer">
            Terms of Service
          </li>
          <li className="hover:text-blue-400 cursor-pointer">Contact Us</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
