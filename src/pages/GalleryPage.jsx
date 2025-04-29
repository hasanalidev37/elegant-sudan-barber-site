
import { useState } from 'react';

const galleryImages = [
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
  {
    id: 7,
    src: '/gallery7.jpg',
    alt: 'لحية فاخرة',
    category: 'beard'
  },
  {
    id: 8,
    src: '/gallery8.jpg',
    alt: 'قصة شعر متدرجة',
    category: 'hair'
  },
  {
    id: 9,
    src: '/gallery9.jpg',
    alt: 'حلاقة طفل',
    category: 'kids'
  },
  {
    id: 10,
    src: '/gallery10.jpg',
    alt: 'قصة عصرية مميزة',
    category: 'hair'
  },
  {
    id: 11,
    src: '/gallery11.jpg',
    alt: 'لحية قصيرة مرتبة',
    category: 'beard'
  },
  {
    id: 12,
    src: '/gallery12.jpg',
    alt: 'قصة شعر أطفال',
    category: 'kids'
  },
];

const GalleryPage = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === filter);
  
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-barber-orange">معرض الأعمال</h1>
          <p className="text-xl mt-4 max-w-3xl mx-auto text-gray-300">
            إبداعات صالون السوداني الأنيق - نماذج من أعمالنا المميزة
          </p>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            className={`px-6 py-2 rounded-full border-2 transition-colors ${
              filter === 'all' 
                ? 'bg-barber-orange text-black border-barber-orange' 
                : 'bg-transparent text-barber-orange border-barber-orange hover:bg-barber-orange hover:text-black'
            }`}
            onClick={() => setFilter('all')}
          >
            جميع الأعمال
          </button>
          <button
            className={`px-6 py-2 rounded-full border-2 transition-colors ${
              filter === 'hair' 
                ? 'bg-barber-orange text-black border-barber-orange' 
                : 'bg-transparent text-barber-orange border-barber-orange hover:bg-barber-orange hover:text-black'
            }`}
            onClick={() => setFilter('hair')}
          >
            قصات الشعر
          </button>
          <button
            className={`px-6 py-2 rounded-full border-2 transition-colors ${
              filter === 'beard' 
                ? 'bg-barber-orange text-black border-barber-orange' 
                : 'bg-transparent text-barber-orange border-barber-orange hover:bg-barber-orange hover:text-black'
            }`}
            onClick={() => setFilter('beard')}
          >
            تصميمات اللحية
          </button>
          <button
            className={`px-6 py-2 rounded-full border-2 transition-colors ${
              filter === 'kids' 
                ? 'bg-barber-orange text-black border-barber-orange' 
                : 'bg-transparent text-barber-orange border-barber-orange hover:bg-barber-orange hover:text-black'
            }`}
            onClick={() => setFilter('kids')}
          >
            حلاقة الأطفال
          </button>
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map(image => (
            <div 
              key={image.id} 
              className="relative bg-barber-dark bg-opacity-70 rounded-lg overflow-hidden border-2 border-barber-dark hover:border-barber-orange transition-all duration-300 group"
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                <div className="p-4 w-full text-center">
                  <h3 className="text-xl font-bold text-barber-orange">{image.alt}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Social Media Call-to-Action */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-barber-orange mb-4">لمزيد من أعمالنا</h2>
          <p className="text-lg mb-6">
            تابعونا على منصات التواصل الاجتماعي لمشاهدة المزيد من أعمالنا وآخر التحديثات
          </p>
          <div className="flex justify-center gap-6">
            <a 
              href="https://www.instagram.com/elegantsudanesbarber/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg flex items-center hover:from-purple-600 hover:to-pink-600 transition-all"
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Instagram
            </a>
            <a 
              href="https://www.tiktok.com/@barberelgant" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-black text-white px-6 py-3 rounded-lg flex items-center hover:bg-gray-900 transition-all"
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
              TikTok
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
