export default function Header() {
    return (
      <header className="bg-primary text-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <h1 className="text-blue-600 text-xl font-bold">CBG II Innovate4DigiJob</h1>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#home" className=" text-blue-600 hover:text-accent transition">Home</a></li>
              <li><a href="#about" className=" text-blue-600 hover:text-accent transition">About</a></li>
              <li><a href="#activities" className="text-blue-600 hover:text-accent transition">Activities</a></li>
              <li><a href="#impact" className="text-blue-600 hover:text-accent transition">Impact</a></li>
              <li><a href="#team" className="text-blue-600 hover:text-accent transition">Team</a></li>
              <li><a href="#contact" className="text-blue-600 hover:text-accent transition">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }