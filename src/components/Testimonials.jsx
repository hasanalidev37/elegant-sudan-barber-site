
import { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Moez Salih',
    stars: 5,
    date: 'قبل 5 أشهر',
    text: 'Very clean place, people are very welcoming in there.',
    image: '/testimonial1.jpg'
  },
  {
    id: 2,
    name: 'على عشا',
    stars: 5,
    date: 'قبل 5 أشهر',
    text: 'مبدعين ومحل مرتب ونظيف واهتمام بالعملا نتمني لكم التوفيق',
    image: '/testimonial2.jpg'
  },
  {
    id: 3,
    name: 'MUNTASIR ABDALLA',
    stars: 5,
    date: 'قبل 4 أشهر',
    text: 'والله من افضل الصوالين السودانية في الرياض ❤️ تعامل اكثر من رائع 🌹 وصالون مجهز بكل المعدات الحديثة والانتظار مجهز باحتراف ✌️ حبيبنا مصطفى بالتوفيق يا غالي',
    image: '/testimonial3.jpg'
  },
  {
    id: 4,
    name: 'hesham kambal',
    stars: 5,
    date: 'قبل 3 أشهر',
    text: 'ماشاء الله يامصطفى شي مرتب ونظافه الله يوفقكم يارب مبروك المكان الجديد 💚👍',
    image: '/testimonial4.jpg'
  },
  {
    id: 5,
    name: 'obai algafari',
    stars: 5,
    date: 'قبل 3 أشهر',
    text: 'ممتاذ شباب حلوين محل نظيف جديد تحية للأخ مصطفى قمة في الأخلاق بتوفيق دوام التقدم',
    image: '/testimonial5.jpg'
  },
];

const Stars = ({ count }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < count ? 'text-barber-orange' : 'text-gray-400'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      ))}
    </div>
  );
};

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-16 bg-barber-dark bg-opacity-90">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">آراء عملائنا</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            نفتخر بتقييمنا المميز 4.9 من 5 بناءً على تقييمات عملائنا الكرام
          </p>
        </div>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-barber-wood bg-opacity-50 rounded-lg p-6 border-2 border-barber-orange">
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 relative">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-barber-orange">
                          <img 
                            src={testimonial.image || '/placeholder-avatar.jpg'} 
                            alt={testimonial.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="mr-4">
                        <div className="font-bold text-xl text-barber-orange">{testimonial.name}</div>
                        <div className="flex items-center mt-1">
                          <Stars count={testimonial.stars} />
                          <span className="mr-2 text-sm text-gray-400">{testimonial.date}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-lg">{testimonial.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-barber-orange' : 'bg-gray-600'
                }`}
              ></button>
            ))}
          </div>
          
          <button
            onClick={() => setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 -translate-x-2 bg-barber-orange text-black rounded-full p-2 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
          <button
            onClick={() => setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 translate-x-2 bg-barber-orange text-black rounded-full p-2 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
        </div>
        
        <div className="text-center mt-10">
          <a href="/reviews" className="orange-btn text-lg px-8 py-3">
            عرض كل التقييمات
          </a>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
