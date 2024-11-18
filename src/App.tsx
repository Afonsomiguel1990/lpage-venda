import React from 'react';
import Typewriter from 'typewriter-effect';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import Navbar from './components/Navbar';
import FeaturedItem from './components/FeaturedItem';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gray-50">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80"
            alt="Background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="container relative text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <Typewriter
              options={{
                strings: ['Venda na Garagem'],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 100,
              }}
            />
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">Tudo o que precisa, em segunda-mão.</p>
          <a href="https://g.co/kgs/KVdjrFP" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Ver no Mapa
          </a>
        </div>
      </section>

      {/* Featured Section */}
      <section id="featured" className="section bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-12 text-center">
            A nossa escolha...
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeaturedItem
              title="Sofás"
              image="https://scontent.flis6-1.fna.fbcdn.net/v/t39.30808-6/467331022_964964659001255_4038702973957206583_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=nigOqbBqF-QQ7kNvgHp8vfB&_nc_zt=23&_nc_ht=scontent.flis6-1.fna&_nc_gid=AUMNLSrgLa9Nqa_7oCtd2Dq&oh=00_AYCX6CA6HLfRiQu_Ec4GAUH-9xTyI96bOBgUTopRdjNVkQ&oe=6740600D"
              description="Temos sempre vários sofás em Stock."
            />
            <FeaturedItem
              title="Antiguidades"
              image="https://scontent.flis6-2.fna.fbcdn.net/v/t39.30808-6/467247974_964964859001235_5514285946503952_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=eXSIgzV4b24Q7kNvgFZKMzg&_nc_zt=23&_nc_ht=scontent.flis6-2.fna&_nc_gid=Az2B02xr5EawhuFgQRDNMKP&oh=00_AYDJxpVAyIao0YnGjvNoOgXQgPrcI_-GuSPQKTttFN4Pwg&oe=67406969"
              description="Chegam-nos artigos novos todas as semanas"
            />
            <FeaturedItem
              title="Artigos para restauro"
              image="https://scontent.flis6-1.fna.fbcdn.net/v/t39.30808-6/462533992_937754838388904_184941558824981965_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=HmMTUDjPB8wQ7kNvgEXcgYY&_nc_zt=23&_nc_ht=scontent.flis6-1.fna&_nc_gid=AfoRNw4bsnOutHDUhR2MR8-&oh=00_AYDyz14H4WhdvFFfp3Ymuzlx8LL1ANeyAsBK9XIKF8f5LQ&oe=674051A0"
              description="Se gosta de restauro e pintura temos centenas de artigos para si."
            />
          
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-6">Sobre Nós</h2>
            <p className="text-lg text-gray-600 mb-8">
              Aqui temos de tudo e se não temos ... está para chegar !!
              Há mais de 10 anos em Abrantes, ma nossa loja com 1500m2 pode encontrar o que precisa.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="font-bold mb-2">Peças únicas</h3>
                <p className="text-gray-600">Que já não se fazem nos dias de hoje.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="font-bold mb-2">Bons Preços</h3>
                <p className="text-gray-600">Temos os melhores preços do mercado</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="font-bold mb-2">Entrega ao Domicílio</h3>
                <p className="text-gray-600">Caso precise podemos entregar directamente na sua casa.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-12 text-center">Contacte-nos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Phone className="text-red-600" size={24} />
                <div>
                  <h3 className="font-bold">Telefone</h3>
                  <a href="tel:961689904" className="text-gray-600 hover:text-red-600">
                    961 689 904
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-red-600" size={24} />
                <div>
                  <h3 className="font-bold">Email</h3>
                  <a href="mailto:vendanagaragemabrantes@gmail.com" className="text-gray-600 hover:text-red-600">
                    vendanagaragemabrantes@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="text-red-600" size={24} />
                <div>
                  <h3 className="font-bold">Morada</h3>
                  <p className="text-gray-600">Rua da Fonte Quente 23-3<br />Abrantes</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Venda na Garagem</h3>
              <p className="text-gray-400">
                A sua loja de móveis em segunda mão de confiança desde 2014 em Abrantes.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Horário</h3>
              <ul className="text-gray-400 space-y-2">
                <li>Segunda - Sábado: 10h - 13h / 15h às 18h</li>
                <li>Domingo: Fechado</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Localização</h3>
              <a
                href="https://g.co/kgs/KVdjrFP"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white flex items-center gap-2"
              >
                <MapPin size={20} />
                <span>Ver no Google Maps</span>
              </a>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Redes Sociais</h3>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/vendadegaragemAbrantes" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Venda na Garagem. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;