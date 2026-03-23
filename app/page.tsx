"use client";

import { useState } from 'react';
import { Mail, Phone, MapPin, Menu, X, Send, MessageCircle } from 'lucide-react';

const App = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    alert(`Message sent from ${name} - ${email} : ${message}`);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md" style={{ zIndex: 10, backgroundColor: '#ffffff' }}>
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <span style={{ color: '{{ $json["Primary Color"] || "#3b82f6" }}', fontSize: 20, fontWeight: 'bold' }}>
            {{ $json["Business Name"] }}
          </span>
          <button className="lg:hidden" onClick={() => setShowMenu(!showMenu)}>
            {showMenu ? <X size={24} /> : <Menu size={24} />}
          </button>
          <ul className={`lg:flex lg:items-center lg:space-x-4 ${showMenu ? 'block' : 'hidden lg:block'}`}>
            <li>
              <a href="#features" className="hover:text-{{ $json["Primary Color"] || "#3b82f6" }} transition duration-300">
                Features
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-{{ $json["Primary Color"] || "#3b82f6" }} transition duration-300">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <header className="bg-white" style={{ padding: '6rem 2rem', backgroundColor: '#ffffff' }}>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold" style={{ color: '{{ $json["Primary Color"] || "#3b82f6" }}' }}>
            {{ $json["Business Name"] }}
          </h1>
          <p className="text-lg" style={{ color: '{{ $json["Secondary Color"] || "#1e293b" }}' }}>
            {{ $json["Description"] }}
          </p>
          <a href={`https://wa.me/${{ $json["Contact Number (WhatsApp)"] }}?text=Hello%20from%20{{ $json["Business Name"] }}!`} target="_blank" rel="noreferrer" className="bg-{{ $json["Primary Color"] || "#3b82f6" }} hover:bg-{{ $json["Primary Color"] || "#3b82f6" }} text-white font-bold py-2 px-4 rounded">
            <Phone size={20} className="inline-block mr-2" />
            WhatsApp Us
          </a>
        </div>
      </header>
      <section id="features" className="bg-gray-100 py-8" style={{ backgroundColor: '#f9f9f9' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold" style={{ color: '{{ $json["Primary Color"] || "#3b82f6" }}' }}>
            Features
          </h2>
          <div className="flex flex-wrap -mx-4">
            {JSON.parse('{{ $json["Features"] }}').map((feature, index) => (
              <div key={index} className="w-full lg:w-1/2 xl:w-1/3 p-4">
                <div className="bg-white rounded shadow-md p-4" style={{ backgroundColor: '#ffffff' }}>
                  <h3 className="text-lg font-bold" style={{ color: '{{ $json["Primary Color"] || "#3b82f6" }}' }}>
                    {feature.title}
                  </h3>
                  <p className="text-sm" style={{ color: '{{ $json["Secondary Color"] || "#1e293b" }}' }}>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="contact" className="bg-white py-8" style={{ backgroundColor: '#ffffff' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold" style={{ color: '{{ $json["Primary Color"] || "#3b82f6" }}' }}>
            Contact Us
          </h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/2 xl:w-1/3 p-4">
              <div className="bg-white rounded shadow-md p-4" style={{ backgroundColor: '#ffffff' }}>
                <img src="https://source.unsplash.com/200x200/?business,office" alt="Business Photo" />
                <h3 className="text-lg font-bold" style={{ color: '{{ $json["Primary Color"] || "#3b82f6" }}' }}>
                  Get in Touch
                </h3>
                <p className="text-sm" style={{ color: '{{ $json["Secondary Color"] || "#1e293b" }}' }}>
                  <MapPin size={20} className="inline-block mr-2" />
                  Address: {{ $json["Business Name"] }} Headquarters
                </p>
                <p className="text-sm" style={{ color: '{{ $json["Secondary Color"] || "#1e293b" }}' }}>
                  <Mail size={20} className="inline-block mr-2" />
                  Email: <a href={`mailto:info@{{ $json["Business Name"] }}.com`}>info@{{ $json["Business Name"] }}.com</a>
                </p>
                <p className="text-sm" style={{ color: '{{ $json["Secondary Color"] || "#1e293b" }}' }}>
                  <Phone size={20} className="inline-block mr-2" />
                  Phone: {{ $json["Contact Number (WhatsApp)"] }}
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 xl:w-2/3 p-4">
              <div className="bg-white rounded shadow-md p-4" style={{ backgroundColor: '#ffffff' }}>
                <h3 className="text-lg font-bold" style={{ color: '{{ $json["Primary Color"] || "#3b82f6" }}' }}>
                  Send a Message
                </h3>
                <form>
                  <div className="mb-4">
                    <label className="block text-sm" style={{ color: '{{ $json["Secondary Color"] || "#1e293b" }}' }}>
                      Name:
                    </label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="block w-full p-2 border border-gray-400 rounded" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm" style={{ color: '{{ $json["Secondary Color"] || "#1e293b" }}' }}>
                      Email:
                    </label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="block w-full p-2 border border-gray-400 rounded" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm" style={{ color: '{{ $json["Secondary Color"] || "#1e293b" }}' }}>
                      Message:
                    </label>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="block w-full p-2 border border-gray-400 rounded" />
                  </div>
                  <button type="button" onClick={handleSendMessage} className="bg-{{ $json["Primary Color"] || "#3b82f6" }} hover:bg-{{ $json["Primary Color"] || "#3b82f6" }} text-white font-bold py-2 px-4 rounded">
                    <Send size={20} className="inline-block mr-2" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-gray-100 py-4" style={{ backgroundColor: '#f9f9f9' }}>
        <div className="container mx-auto px-4">
          <p className="text-sm" style={{ color: '{{ $json["Secondary Color"] || "#1e293b" }}' }}>
            &copy; {{ $json["Business Name"] }} {{ new Date().getFullYear() }}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;