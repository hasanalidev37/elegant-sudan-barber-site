
const About = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-barber-orange">نبذة عن الصالون</h1>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-barber-orange mb-6">قصة صالون السوداني الأنيق</h2>
            <p className="mb-6 text-lg">
              تأسس صالون السوداني الأنيق للحلاقة الرجالية والأطفال لتقديم تجربة حلاقة متميزة تجمع بين الاحترافية والراحة. يضم صالوننا نخبة من الحلاقين السودانيين المحترفين الذين يتمتعون بخبرة واسعة في مجال الحلاقة والعناية الشخصية.
            </p>
            <p className="mb-6 text-lg">
              نهدف إلى الارتقاء بمستوى خدمات الحلاقة في الرياض من خلال توفير بيئة نظيفة ومريحة، واستخدام أفضل المنتجات وأدوات الحلاقة المعقمة، لنضمن لكم تجربة متميزة في كل زيارة.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden border-4 border-barber-orange">
            <img src="/barber-shop-interior.jpg" alt="صالون السوداني الأنيق من الداخل" className="w-full h-full object-cover" />
          </div>
        </div>
        
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-barber-orange">رؤيتنا</h2>
          </div>
          <div className="bg-barber-dark bg-opacity-70 p-8 rounded-lg border border-barber-orange">
            <p className="text-xl text-center">
              نسعى لأن نكون الوجهة الأولى والمفضلة لخدمات الحلاقة الرجالية في الرياض، من خلال تقديم خدمات متميزة تلبي احتياجات وتطلعات عملائنا بأعلى مستويات الجودة والاحترافية.
            </p>
          </div>
        </div>
        
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-barber-orange">قيمنا</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-barber-dark bg-opacity-70 p-6 rounded-lg border border-barber-orange">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-barber-orange rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-barber-orange text-center mb-2">الاحترافية</h3>
              <p className="text-center">الالتزام بأعلى معايير الأداء في تقديم خدماتنا</p>
            </div>
            
            <div className="bg-barber-dark bg-opacity-70 p-6 rounded-lg border border-barber-orange">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-barber-orange rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-barber-orange text-center mb-2">النظافة</h3>
              <p className="text-center">الاهتمام بنظافة وتعقيم المكان والأدوات</p>
            </div>
            
            <div className="bg-barber-dark bg-opacity-70 p-6 rounded-lg border border-barber-orange">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-barber-orange rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-barber-orange text-center mb-2">الاهتمام بالعميل</h3>
              <p className="text-center">جعل رضا العميل أولوية قصوى ومحور اهتمامنا</p>
            </div>
            
            <div className="bg-barber-dark bg-opacity-70 p-6 rounded-lg border border-barber-orange">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-barber-orange rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-barber-orange text-center mb-2">التطوير المستمر</h3>
              <p className="text-center">مواكبة أحدث صيحات وتقنيات الحلاقة والعناية الشخصية</p>
            </div>
            
            <div className="bg-barber-dark bg-opacity-70 p-6 rounded-lg border border-barber-orange">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-barber-orange rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-barber-orange text-center mb-2">الأمانة</h3>
              <p className="text-center">الالتزام بالمصداقية والشفافية في تعاملاتنا</p>
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-barber-orange">بيئة الصالون</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-4">
                يتميز صالون حلاق السوداني الأنيق بتصميمه الأنيق والمريح الذي يوفر أجواء هادئة ومريحة لجميع العملاء. حرصنا على تجهيز الصالون بأحدث الكراسي والمعدات لضمان تجربة مريحة، كما يتوفر منطقة انتظار مجهزة بوسائل الراحة والترفيه.
              </p>
              <p className="text-lg">
                نولي اهتماماً خاصاً بالأطفال، حيث خصصنا لهم منطقة ملائمة تجعل تجربة الحلاقة لديهم ممتعة وخالية من الإزعاج.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden border-2 border-barber-orange">
                <img src="/shop-interior1.jpg" alt="داخل الصالون" className="w-full h-48 object-cover" />
              </div>
              <div className="rounded-lg overflow-hidden border-2 border-barber-orange">
                <img src="/shop-interior2.jpg" alt="منطقة الانتظار" className="w-full h-48 object-cover" />
              </div>
              <div className="rounded-lg overflow-hidden border-2 border-barber-orange">
                <img src="/shop-interior3.jpg" alt="كراسي الحلاقة" className="w-full h-48 object-cover" />
              </div>
              <div className="rounded-lg overflow-hidden border-2 border-barber-orange">
                <img src="/shop-interior4.jpg" alt="منطقة الأطفال" className="w-full h-48 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
