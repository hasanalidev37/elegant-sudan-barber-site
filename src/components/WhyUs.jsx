
const features = [
  {
    title: 'خدمة احترافية',
    description: 'فريق متخصص من الحلاقين ذوي الخبرة العالية والمهارات المتميزة',
    icon: 'professional'
  },
  {
    title: 'بيئة نظيفة',
    description: 'نهتم بالنظافة والتعقيم لكافة الأدوات والمعدات',
    icon: 'clean'
  },
  {
    title: 'مكان مريح',
    description: 'صالون مجهز بأحدث التقنيات لضمان راحتكم طوال فترة زيارتكم',
    icon: 'comfort'
  },
  {
    title: 'تعامل راقي',
    description: 'نقدم تجربة متكاملة تشمل الاستقبال الحار والخدمة المتميزة',
    icon: 'service'
  }
];

const WhyUs = () => {
  return (
    <div className="py-16 bg-barber-dark bg-opacity-90">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">لماذا تختارنا؟</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            نقدم لكم تجربة حلاقة متميزة تجمع بين الاحترافية والراحة
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-barber-wood bg-opacity-30 rounded-lg p-6 border border-barber-orange hover:border-2 transition-all duration-300 hover:-translate-y-2">
              <div className="flex justify-center mb-4">
                {feature.icon === 'professional' && (
                  <div className="w-16 h-16 bg-barber-orange rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                    </svg>
                  </div>
                )}
                {feature.icon === 'clean' && (
                  <div className="w-16 h-16 bg-barber-orange rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                )}
                {feature.icon === 'comfort' && (
                  <div className="w-16 h-16 bg-barber-orange rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                    </svg>
                  </div>
                )}
                {feature.icon === 'service' && (
                  <div className="w-16 h-16 bg-barber-orange rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
                    </svg>
                  </div>
                )}
              </div>
              <h3 className="text-xl font-bold text-barber-orange text-center mb-2">{feature.title}</h3>
              <p className="text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
