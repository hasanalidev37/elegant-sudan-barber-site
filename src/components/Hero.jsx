
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-cover bg-center" style={{ 
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/hero-barber.jpg)'
    }}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-barber-dark opacity-90"></div>
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-barber-orange">حلاق</span> السوداني الأنيق
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          وجهتكم المثالية للحصول على أفضل خدمات الحلاقة والعناية الشخصية في الرياض
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/services" className="orange-btn text-lg px-8 py-3">
            خدماتنا
          </Link>
          <a href="#contact" className="bg-transparent hover:bg-barber-dark text-barber-orange border-2 border-barber-orange font-bold py-3 px-8 rounded-md transition-colors duration-200 text-lg">
            احجز موعد
          </a>
        </div>
        <div className="mt-12 inline-block bg-barber-dark bg-opacity-80 rounded-lg p-4 border border-barber-orange">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center">
              <div className="text-barber-orange">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                </svg>
              </div>
              <div className="mr-3">
                <span className="block font-bold text-xl">4.9/5</span>
                <span className="text-gray-300 text-sm">تقييم Google</span>
              </div>
            </div>
            <div className="h-12 border-l border-barber-orange hidden sm:block"></div>
            <div className="flex items-center">
              <div className="text-barber-orange">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div className="mr-3">
                <span className="block font-bold text-xl">12 ظ - 2 ص</span>
                <span className="text-gray-300 text-sm">مفتوح يومياً</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-0 right-0 text-center">
        <a href="#services" className="inline-block animate-bounce">
          <svg className="w-8 h-8 text-barber-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Hero;
