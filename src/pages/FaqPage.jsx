
import { useState } from 'react';

const faqs = [
  {
    category: 'حول المواعيد والزيارة',
    questions: [
      {
        question: 'ما هي ساعات عمل الصالون؟',
        answer: 'صالون حلاق السوداني الأنيق يفتح أبوابه يومياً من الساعة 12 ظهراً حتى الساعة 2 صباحاً.'
      },
      {
        question: 'هل يلزم الحجز المسبق؟',
        answer: 'لا يلزم الحجز المسبق، يمكنكم زيارتنا مباشرة في أي وقت خلال ساعات العمل. ومع ذلك، يفضل الاتصال بنا في أوقات الذروة للتأكد من توفر الخدمة دون انتظار طويل.'
      },
      {
        question: 'هل يمكنني إحضار طفلي للحلاقة؟',
        answer: 'بالتأكيد، نحن نقدم خدمات حلاقة خاصة للأطفال في بيئة مريحة، ولدينا فريق متخصص في التعامل معهم بلطف واحترافية.'
      }
    ]
  },
  {
    category: 'حول الخدمات',
    questions: [
      {
        question: 'ما هي الخدمات الرئيسية التي تقدمونها؟',
        answer: 'نقدم مجموعة متكاملة من خدمات الحلاقة تشمل قص الشعر، تشذيب وتصميم اللحية، خدمات العناية بالبشرة، الحمام المغربي، بالإضافة إلى خدمات خاصة للأطفال.'
      },
      {
        question: 'هل توفرون منتجات العناية بالشعر واللحية؟',
        answer: 'نعم، نوفر مجموعة مختارة من أفضل منتجات العناية بالشعر واللحية، بالإضافة إلى ماكينات الحلاقة وكريمات ما بعد الحلاقة والكولونيا.'
      },
      {
        question: 'كم تستغرق خدمة قص الشعر واللحية؟',
        answer: 'تستغرق خدمة قص الشعر عادة حوالي 30-45 دقيقة، وتشذيب اللحية حوالي 15-20 دقيقة، وتعتمد المدة على نوع القصة والخدمة المطلوبة.'
      }
    ]
  },
  {
    category: 'حول الصالون',
    questions: [
      {
        question: 'ما هي إجراءات النظافة والتعقيم المتبعة في الصالون؟',
        answer: 'نلتزم بأعلى معايير النظافة والتعقيم، حيث نقوم بتعقيم جميع الأدوات بعد كل استخدام، واستخدام فوط نظيفة لكل عميل، بالإضافة إلى التنظيف المستمر للصالون والكراسي.'
      },
      {
        question: 'هل تقدمون خدمات للمناسبات الخاصة؟',
        answer: 'نعم، يمكننا تقديم خدمات خاصة للمناسبات مثل الأعراس والمناسبات المهمة، يرجى التواصل معنا مسبقاً للترتيب.'
      },
      {
        question: 'هل لديكم مواقف سيارات؟',
        answer: 'نعم، يتوفر مواقف للسيارات بالقرب من الصالون.'
      }
    ]
  }
];

const FaqItem = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div className="mb-4 border border-barber-orange rounded-lg overflow-hidden">
      <button
        className="w-full text-right p-4 flex justify-between items-center bg-barber-dark hover:bg-barber-wood hover:bg-opacity-20 transition-colors focus:outline-none"
        onClick={toggleOpen}
      >
        <span className="text-xl font-bold">{question}</span>
        <svg
          className={`w-6 h-6 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 p-4 bg-barber-wood bg-opacity-20' : 'max-h-0'
        }`}
      >
        <p className="text-lg">{answer}</p>
      </div>
    </div>
  );
};

const FaqPage = () => {
  const [openItems, setOpenItems] = useState({});
  
  const toggleItem = (category, index) => {
    setOpenItems(prev => ({
      ...prev,
      [`${category}-${index}`]: !prev[`${category}-${index}`]
    }));
  };
  
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-barber-orange">الأسئلة الشائعة</h1>
          <p className="text-xl mt-4 max-w-3xl mx-auto text-gray-300">
            إجابات على استفساراتكم الشائعة حول صالون السوداني الأنيق
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl font-bold text-barber-orange mb-6">{category.category}</h2>
              <div>
                {category.questions.map((item, itemIndex) => (
                  <FaqItem
                    key={`${category.category}-${itemIndex}`}
                    question={item.question}
                    answer={item.answer}
                    isOpen={!!openItems[`${category.category}-${itemIndex}`]}
                    toggleOpen={() => toggleItem(category.category, itemIndex)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Contact Call-to-Action */}
        <div className="max-w-3xl mx-auto mt-16 bg-gradient-to-r from-barber-dark to-barber-wood p-8 rounded-lg border-2 border-barber-orange text-center">
          <h3 className="text-2xl font-bold text-barber-orange mb-4">لديك سؤال آخر؟</h3>
          <p className="text-lg mb-6">
            لا تتردد في التواصل معنا مباشرة للإجابة على أي استفسار آخر
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="tel:0545162003" 
              className="bg-barber-orange hover:bg-barber-gold text-black font-bold py-3 px-6 rounded-md transition-colors duration-200 flex items-center justify-center"
            >
              <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 10.999h2C22 5.869 18.127 2 12.99 2v2C17.052 4 20 6.943 20 10.999z"></path>
                <path d="M13 8c2.103 0 3 .897 3 3h2c0-3.225-1.775-5-5-5v2zm3.422 5.443a1.001 1.001 0 00-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 00.043-1.391L6.859 3.513a1 1 0 00-1.391-.087l-2.17 1.861a1 1 0 00-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 00.648-.291l1.86-2.171a1 1 0 00-.086-1.391l-4.064-3.696z"></path>
              </svg>
              اتصل بنا
            </a>
            <a 
              href="https://wa.me/966530640121" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-md transition-colors duration-200 flex items-center justify-center"
            >
              <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              واتساب
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
