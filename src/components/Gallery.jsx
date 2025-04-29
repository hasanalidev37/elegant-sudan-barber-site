
const images = [
  {
    id: 1,
    src: '/gallery1.jpg',
    alt: 'قصة شعر عصرية',
    category: 'hair'
  },
  {
    id: 2,
    src: '/gallery2.jpg',
    alt: 'تشذيب لحية',
    category: 'beard'
  },
  {
    id: 3,
    src: '/gallery3.jpg',
    alt: 'قص شعر الأطفال',
    category: 'kids'
  },
  {
    id: 4,
    src: '/gallery4.jpg',
    alt: 'تصميم لحية',
    category: 'beard'
  },
  {
    id: 5,
    src: '/gallery5.jpg',
    alt: 'قصة شعر كلاسيكية',
    category: 'hair'
  },
  {
    id: 6,
    src: '/gallery6.jpg',
    alt: 'تصفيف شعر',
    category: 'hair'
  },
];

const Gallery = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">معرض أعمالنا</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            إليكم لمحة عن بعض أعمالنا المميزة في صالون السوداني الأنيق
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image) => (
            <div key={image.id} className="relative group overflow-hidden rounded-lg border-2 border-barber-dark hover:border-barber-orange transition-all duration-300">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-barber-dark to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full">
                  <h3 className="text-xl font-bold text-barber-orange">{image.alt}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <a href="/gallery" className="orange-btn text-lg px-8 py-3">
            عرض المزيد من الأعمال
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
