export default function Hero() {
    return (
      <section id="home" className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className=" text-blue-600 text-4xl md:text-5xl font-bold mb-4">Empowering Youth Through Digital Innovation</h1>
            <p className="text-blue-600  text-xl mb-8">Transforming education and job creation with technology and creativity in Rubavu, Rwanda.</p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 hover:bg-orange-400 text-white font-bold py-3 px-6 rounded-lg transition">
                Join the Movement
              </button>
              <button className="bg-blue-600 hover:bg-orange-400 text-primary font-bold py-3 px-6 rounded-lg transition">
                Our Projects
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-white hover:text-primary font-bold py-3 px-6 rounded-lg transition">
                Contact Us
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.squarespace-cdn.com/content/v1/5e99665d59916e47fbab549e/1626372841603-WKB3UW6CCDZX40CMLXFR/WikiAfrica_Schools_training_African_School_for_Excellence_%283%29.jpg" 
              alt="Students engaged in digital learning" 
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>
    )
  }