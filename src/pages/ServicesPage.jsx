
const serviceCategories = [
  {
    title: 'قصات الشعر',
    items: [
      { name: 'قصات الشعر العصرية', price: '50 ريال', description: 'نواكب أحدث صيحات الموضة العالمية في مجال قصات الشعر' },
      { name: 'قصات الشعر الكلاسيكية', price: '40 ريال', description: 'للباحثين عن الأناقة التقليدية، نقدم أفضل القصات الكلاسيكية' },
      { name: 'قصات شعر الأطفال', price: '35 ريال', description: 'خدمات حلاقة خاصة للأطفال في أجواء مريحة وودية' }
    ]
  },
  {
    title: 'خدمات اللحية',
    items: [
      { name: 'تشذيب وتصميم اللحية', price: '30 ريال', description: 'خدمات احترافية لتشذيب وتصميم اللحية بدقة عالية' },
      { name: 'حلاقة اللحية الكاملة', price: '25 ريال', description: 'حلاقة متقنة تضمن نعومة البشرة وحمايتها من التهيج' },
      { name: 'العناية باللحية', price: '40 ريال', description: 'خدمات متكاملة للعناية باللحية تشمل التنظيف العميق والترطيب' }
    ]
  },
  {
    title: 'خدمات العناية بالبشرة',
    items: [
      { name: 'تنظيف البشرة', price: '50 ريال', description: 'خدمة متكاملة لتنظيف البشرة وإزالة الرؤوس السوداء' },
      { name: 'الحمام المغربي', price: '100 ريال', description: 'تجربة فريدة للاسترخاء والعناية بالبشرة' },
      { name: 'ماسك الوجه', price: '60 ريال', description: 'ماسكات طبيعية لتنظيف وترطيب البشرة' }
    ]
  }
];

const products = [
  {
    name: 'ماكينات الحلاقة',
    image: '/product1.jpg',
    description: 'ماكينات حلاقة احترافية للمناطق الحساسة'
  },
  {
    name: 'كريمات ما بعد الحلاقة',
    image: '/product2.jpg',
    description: 'كريمات وكولونيا من أرقى الماركات'
  },
  {
    name: 'منتجات العناية بالشعر',
    image: '/product3.jpg',
    description: 'منتجات متخصصة للعناية بالشعر واللحية'
  },
  {
    name: 'ماكينات التنعيم',
    image: '/product4.jpg',
    description: 'ماكينات المحترفين للزيرو وقصات الشعر'
  }
];

const ServicesPage = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-barber-orange">خدماتنا المتميزة</h1>
          <p className="text-xl mt-4 max-w-3xl mx-auto text-gray-300">
            نقدم في حلاق السوداني الأنيق مجموعة متكاملة من خدمات الحلاقة والعناية الشخصية
          </p>
        </div>
        
        {/* Services Categories */}
        {serviceCategories.map((category, index) => (
          <div key={index} className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-barber-orange">{category.title}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((service, serviceIndex) => (
                <div key={serviceIndex} className="bg-barber-dark bg-opacity-70 p-6 rounded-lg border-2 border-barber-orange hover:bg-barber-wood hover:bg-opacity-20 transition-all duration-300">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-barber-orange">{service.name}</h3>
                    <span className="text-lg font-bold bg-barber-orange text-black py-1 px-3 rounded-md">{service.price}</span>
                  </div>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
        
        {/* Products Section */}
        <div className="my-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-barber-orange mb-4">المنتجات المتوفرة</h2>
            <p className="text-xl max-w-3xl mx-auto text-gray-300">
              نوفر في صالون حلاق السوداني الأنيق مجموعة متميزة من المنتجات المختارة بعناية
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-barber-dark bg-opacity-70 rounded-lg overflow-hidden border border-barber-orange">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-barber-orange mb-2">{product.name}</h3>
                  <p className="text-gray-300">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Booking Call-to-Action */}
        <div className="bg-gradient-to-r from-barber-dark to-barber-wood p-8 rounded-lg border-2 border-barber-orange mt-16">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 text-center md:text-right">
              <h3 className="text-2xl font-bold text-barber-orange mb-2">هل أنت مستعد لتجربة خدماتنا؟</h3>
              <p className="text-gray-300">احجز موعدك الآن واستمتع بتجربة حلاقة فريدة</p>
            </div>
            <a href="/#contact" className="orange-btn text-lg px-8 py-3">
              احجز موعد الآن
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
