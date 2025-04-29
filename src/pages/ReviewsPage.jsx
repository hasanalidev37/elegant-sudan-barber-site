
const reviewsList = [
  {
    id: 1,
    name: 'Moez Salih',
    rating: 5,
    date: 'قبل 5 أشهر',
    text: 'Very clean place, people are very welcoming in there.',
    image: '/testimonial1.jpg'
  },
  {
    id: 2,
    name: 'على عشا',
    rating: 5,
    date: 'قبل 5 أشهر',
    text: 'مبدعين ومحل مرتب ونظيف واهتمام بالعملا نتمني لكم التوفيق',
    image: '/testimonial2.jpg'
  },
  {
    id: 3,
    name: 'MUNTASIR ABDALLA',
    rating: 5,
    date: 'قبل 4 أشهر',
    text: 'والله من افضل الصوالين السودانية في الرياض ❤️ تعامل اكثر من رائع 🌹 وصالون مجهز بكل المعدات الحديثة والانتظار مجهز باحتراف ✌️ حبيبنا مصطفى بالتوفيق يا غالي',
    image: '/testimonial3.jpg'
  },
  {
    id: 4,
    name: 'hesham kambal',
    rating: 5,
    date: 'قبل 3 أشهر',
    text: 'ماشاء الله يامصطفى شي مرتب ونظافه الله يوفقكم يارب مبروك المكان الجديد 💚👍',
    image: '/testimonial4.jpg'
  },
  {
    id: 5,
    name: 'obai algafari',
    rating: 5,
    date: 'قبل 3 أشهر',
    text: 'ممتاذ شباب حلوين محل نظيف جديد تحية للأخ مصطفى قمة في الأخلاق بتوفيق دوام التقدم',
    image: '/testimonial5.jpg'
  },
  {
    id: 6,
    name: 'سوما عمر',
    rating: 5,
    date: 'قبل 5 أشهر',
    text: 'افضل صالون في الرياض استطاف ممتاز وتعامل راقي والمكان مريح جدا ومجهز تجهيز حلو جدا ربنا يوفقكم',
    image: '/testimonial6.jpg'
  },
  {
    id: 7,
    name: 'MOHAMED SIDEEG ADAM ABDALLAH',
    rating: 5,
    date: 'قبل 5 أشهر',
    text: 'صالون جميل و نظيف جداً و مرتب و طاقم حلاقين ممتاز عندهم حلاق اطفال رهيب و ممتازين و تعاملهم راقي جداً شكراً 🌹 علي التعامل الراقي',
    image: '/testimonial7.jpg'
  },
  {
    id: 8,
    name: 'Khlaid Abdulgader',
    rating: 5,
    date: 'قبل 5 أشهر',
    text: 'ماشاء الله صالون مميز جدا، حلاقة ونظافة على اعلى مستوى، ياريت نشوف الحلاقين السودانيين بنفس المستوى ده. موفقين جدا',
    image: '/testimonial8.jpg'
  },
];

const RatingStars = ({ rating }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-barber-orange' : 'text-gray-400'}`}
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

const ReviewsPage = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-barber-orange">تقييمات وشهادات العملاء</h1>
          <p className="text-xl mt-4 max-w-3xl mx-auto text-gray-300">
            نفخر بتقييم عملائنا المميز البالغ 4.9 من 5، وهذا يعكس التزامنا بتقديم خدمات عالية الجودة
          </p>
        </div>
        
        <div className="flex justify-center mb-12">
          <div className="bg-barber-dark bg-opacity-70 px-8 py-6 rounded-lg border-2 border-barber-orange text-center">
            <div className="text-5xl font-bold text-barber-orange mb-2">4.9</div>
            <div className="flex justify-center mb-2">
              <RatingStars rating={5} />
            </div>
            <p className="text-lg">بناءً على أكثر من 71 تقييم</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviewsList.map(review => (
            <div key={review.id} className="bg-barber-dark bg-opacity-70 rounded-lg p-6 border border-barber-orange hover:border-2 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 relative">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-barber-orange">
                    <img 
                      src={review.image || '/placeholder-avatar.jpg'} 
                      alt={review.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="mr-4">
                  <div className="font-bold text-xl text-barber-orange">{review.name}</div>
                  <div className="flex items-center mt-1">
                    <RatingStars rating={review.rating} />
                    <span className="mr-2 text-sm text-gray-400">{review.date}</span>
                  </div>
                </div>
              </div>
              <p className="text-lg">{review.text}</p>
            </div>
          ))}
        </div>
        
        {/* Add Review Call-to-Action */}
        <div className="max-w-3xl mx-auto mt-16 bg-gradient-to-r from-barber-dark to-barber-wood p-8 rounded-lg border-2 border-barber-orange text-center">
          <h3 className="text-2xl font-bold text-barber-orange mb-4">شاركنا تجربتك</h3>
          <p className="text-lg mb-6">
            نحن نقدر آراء عملائنا ونسعى دائماً لتحسين خدماتنا. شاركنا تجربتك في صالون السوداني الأنيق
          </p>
          <a 
            href="https://maps.app.goo.gl/43rafdhCiehkz16QA" 
            target="_blank" 
            rel="noopener noreferrer"
            className="orange-btn text-lg px-8 py-3 inline-flex items-center"
          >
            <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M12 2C7.31 2 3.5 5.81 3.5 10.5c0 2.97 1.46 5.13 2.58 6.62.56.73 1.11 1.35 1.59 1.84l.39.39c1.17 1.17 1.95 1.95 2.34 2.31.39.36.93.36 1.32 0 .39-.36 1.17-1.14 2.34-2.31l.39-.39c.48-.48 1.03-1.11 1.59-1.84 1.12-1.48 2.58-3.66 2.58-6.62 0-4.69-3.81-8.5-8.5-8.5zm0 11c-1.5 0-2.5-1-2.5-2.5s1-2.5 2.5-2.5 2.5 1 2.5 2.5-1 2.5-2.5 2.5z" clipRule="evenodd"/>
            </svg>
            أضف تقييمك على Google
          </a>
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;
