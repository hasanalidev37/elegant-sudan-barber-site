
const services = [
  {
    title: 'قصة شعر',
    price: '40 ريال',
    description: 'قصات عصرية وكلاسيكية تناسب جميع الأذواق',
    icon: 'scissors'
  },
  {
    title: 'قصة شعر + لحية',
    price: '70 ريال',
    description: 'قصات متكاملة مع تشذيب وتصميم اللحية',
    icon: 'scissors-beard'
  },
  {
    title: 'حلاقة اطفال',
    price: '35 ريال',
    description: 'خدمات خاصة للأطفال في أجواء مريحة',
    icon: 'child'
  },
  {
    title: 'تشذيب لحية',
    price: '30 ريال',
    description: 'عناية فائقة وتصميم احترافي للحية',
    icon: 'beard'
  },
  {
    title: 'العناية بالبشرة',
    price: '50 ريال',
    description: 'تنظيف البشرة وإزالة الرؤوس السوداء',
    icon: 'face'
  },
  {
    title: 'الحمام المغربي',
    price: '100 ريال',
    description: 'تجربة مميزة للاسترخاء والعناية بالبشرة',
    icon: 'bath'
  },
];

const ServiceItem = ({ title, price, description, icon }) => {
  return (
    <div className="service-card">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-barber-orange">{title}</h3>
        <span className="text-xl font-bold bg-barber-orange text-black py-1 px-4 rounded-md">{price}</span>
      </div>
      <p className="mb-4 text-gray-300">{description}</p>
      <div className="flex justify-center">
        {icon === 'scissors' && (
          <svg className="w-10 h-10 text-barber-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.879 9.879M8 5.879l-2.879 2.879M2 2l5 5m0 0l2.879 2.879M7.879 7.879L11 11m0 0l2.121 2.121M18 18l-2.879-2.879M16 8l2.879-2.879M18.121 18.121L16 16"></path>
          </svg>
        )}
        {icon === 'scissors-beard' && (
          <svg className="w-10 h-10 text-barber-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
          </svg>
        )}
        {icon === 'child' && (
          <svg className="w-10 h-10 text-barber-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
          </svg>
        )}
        {icon === 'beard' && (
          <svg className="w-10 h-10 text-barber-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
          </svg>
        )}
        {icon === 'face' && (
          <svg className="w-10 h-10 text-barber-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        )}
        {icon === 'bath' && (
          <svg className="w-10 h-10 text-barber-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
          </svg>
        )}
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div id="services" className="py-16 bg-barber-dark bg-opacity-90">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">خدماتنا المميزة</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            نقدم في صالون السوداني الأنيق مجموعة متكاملة من خدمات الحلاقة والعناية الشخصية
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceItem key={index} {...service} />
          ))}
        </div>
        <div className="text-center mt-10">
          <a href="/services" className="orange-btn text-lg px-8 py-3">
            عرض كل الخدمات
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
