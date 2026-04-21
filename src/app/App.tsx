import { useEffect } from "react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";

export default function App() {
  useEffect(() => {
    const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'icon';
    link.href = '/favicon.png';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="size-full overflow-y-auto bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1725042893312-5ec0dea9e369?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Modern clean living room"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-5xl md:text-7xl text-white mb-6">
            Relax. We’ll Take Care of the Cleaning.
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12">
            Enjoy your freshly cleaned home
          </p>
          <button 
            onClick={() => {
                window.open(
      "https://wa.me/9074588022?text=Hello%20I%20need%20cleaning%20service",
      "_blank"
          );
              }}
            className="bg-white text-gray-900 px-10 py-4 rounded-sm hover:bg-gray-100 transition-colors">
            Get In Touch
          </button>
        </div>

        <button className="absolute top-8 right-8 bg-white/90 text-gray-900 px-6 py-3 rounded-sm hover:bg-white transition-colors">
          View Properties
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1630835016331-1a9b60581820?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Clean bedroom interior"
              className="w-full h-[500px] object-cover rounded-sm"
            />
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl mb-8">
              About Urboz Home
              <br />
              Cleaners
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              We are a trusted home cleaning service dedicated
              to bringing comfort and peace to your living
              spaces. Our team of professional cleaners uses
              eco-friendly products and meticulous attention to
              detail to ensure your home is not just clean, but
              a sanctuary you can truly relax in.
            </p>
            <button
              onClick={() => {
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" });
              }}
              className="border-2 border-gray-900 text-gray-900 px-10 py-4 rounded-sm hover:bg-gray-900 hover:text-white transition-colors"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-center mb-20">
            Services & Strategies
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1597665863042-47e00964d899?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                alt="Move-in cleaning"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl mb-4">
                  Move-in / Move-out Cleaning
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Complete deep cleaning service for your new or
                  departing home. We ensure every corner is
                  spotless for a fresh start or a smooth
                  handover.
                </p>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758448018619-4cbe2250b9ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                alt="Bathroom cleaning"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl mb-4">
                  Bathroom Cleaning
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Thorough sanitization and cleaning of all
                  bathroom fixtures, tiles, and surfaces. We
                  leave your bathroom sparkling and hygienic.
                </p>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1774716925788-5c4fc543d688?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                alt="Full house cleaning"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl mb-4">
                  Full House Cleaning
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive cleaning of your entire home
                  including all rooms, surfaces, and common
                  areas. Customized to your specific needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlight Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl leading-tight">
              Experience the joy
              <br />
              of a perfectly
              <br />
              cleaned house
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1774716925718-82ea2f2eb01b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
              alt="Clean kitchen"
              className="w-full h-64 object-cover rounded-sm"
            />
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1756199638047-6d6930280e37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
              alt="Clean living room"
              className="w-full h-64 object-cover rounded-sm mt-8"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 px-6 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1595557471828-2008122d0c89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl text-center mb-20">
            Satisfied Clients
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-sm shadow-sm">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                "Absolutely wonderful service! The team was
                professional, thorough, and left our home
                spotless. We couldn't be happier with the
                results."
              </p>
              <p className="text-gray-900">— Selva Raj</p>
            </div>

            <div className="bg-white p-10 rounded-sm shadow-sm">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                "Best cleaning service we've ever used. They pay
                attention to every detail and use eco-friendly
                products. Highly recommend!"
              </p>
              <p className="text-gray-900">— Swahi Mishra</p>
            </div>

            <div className="bg-white p-10 rounded-sm shadow-sm">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                "The move-out cleaning was exceptional. They
                made sure everything was perfect for the new
                tenants. Very reliable and trustworthy."
              </p>
              <p className="text-gray-900">— Muhammad Ali</p>
            </div>

            <div className="bg-white p-10 rounded-sm shadow-sm">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                "Professional, efficient, and incredibly
                thorough. Our home has never looked better. We
                now use their services monthly!"
              </p>
              <p className="text-gray-900">— Vicky Mariyam Benjamin</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl md:text-5xl mb-8">
              Get in touch
              <br />
              with us
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Ready to experience a perfectly clean home?
              Contact us today for a free quote or to schedule
              your first cleaning service.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl mb-2">Address</h3>
              <p className="text-gray-600">
                No 347, Winnfield Garden,<br></br>3rd Cross,6th B Main road,<br></br>Sakthi Nagar, Bangalore,<br></br>Karnataka 560077, India
              </p>
            </div>

            <div>
              <h3 className="text-xl mb-2">Email</h3>
              <a href="mailto:urbozhomecleaners@gmail.com" className="text-gray-600">
                urbozhomecleaners@gmail.com
              </a>
            </div>

            <div>
              <h3 className="text-xl mb-2">Phone</h3>
              <a href="tel:+919074588022" className="text-gray-600">
                
                +91 9074588022
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl mb-4">
              Urboz Home Cleaners
            </h3>
            <p className="text-gray-600">
              Your trusted partner for a cleaner, healthier
              home.
            </p>
          </div>

          <div>
            <h4 className="text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#about" className="hover:text-gray-900">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gray-900">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-900">
                  Contact
                </a>
              </li>
            </ul>
          </div>


        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-200 text-center text-gray-500">
          <p>
            &copy; 2026 Urboz Home Cleaners. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}