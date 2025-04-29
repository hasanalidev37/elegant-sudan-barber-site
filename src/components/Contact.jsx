
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    notes: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    // Here you would typically send the form data to your server
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: '',
        phone: '',
        service: '',
        date: '',
        time: '',
        notes: ''
      });
      setSubmitted(false);
    }, 5000);
  };
  
  return (
    <div id="contact" className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-title">احجز موعدك الآن</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            يمكنك حجز موعد مع حلاقينا المحترفين بسهولة من خلال ملء النموذج التالي
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {submitted ? (
            <div className="bg-green-800 bg-opacity-80 text-white p-6 rounded-lg text-center">
              <svg className="w-16 h-16 mx-auto text-barber-orange mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <h3 className="text-2xl font-bold mb-2">تم إرسال طلب الحجز بنجاح!</h3>
              <p>سنتواصل معك قريباً لتأكيد موعدك. شكراً لاختيارك صالون السوداني الأنيق.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-barber-dark bg-opacity-80 p-6 rounded-lg border-2 border-barber-orange">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-lg mb-2">الاسم</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-barber-wood bg-opacity-30 border border-barber-orange rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-barber-orange"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-lg mb-2">رقم الهاتف</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-barber-wood bg-opacity-30 border border-barber-orange rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-barber-orange"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-lg mb-2">الخدمة المطلوبة</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full bg-barber-wood bg-opacity-30 border border-barber-orange rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-barber-orange"
                  >
                    <option value="">اختر الخدمة</option>
                    <option value="haircut">قصة شعر</option>
                    <option value="haircut-beard">قصة شعر + لحية</option>
                    <option value="kids">حلاقة أطفال</option>
                    <option value="beard">تشذيب لحية</option>
                    <option value="skin">العناية بالبشرة</option>
                    <option value="bath">الحمام المغربي</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="date" className="block text-lg mb-2">التاريخ المفضل</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full bg-barber-wood bg-opacity-30 border border-barber-orange rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-barber-orange"
                  />
                </div>
                
                <div>
                  <label htmlFor="time" className="block text-lg mb-2">الوقت المفضل</label>
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full bg-barber-wood bg-opacity-30 border border-barber-orange rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-barber-orange"
                  >
                    <option value="">اختر الوقت</option>
                    <option value="12:00">12:00 ظهراً</option>
                    <option value="13:00">01:00 ظهراً</option>
                    <option value="14:00">02:00 ظهراً</option>
                    <option value="15:00">03:00 عصراً</option>
                    <option value="16:00">04:00 عصراً</option>
                    <option value="17:00">05:00 مساءً</option>
                    <option value="18:00">06:00 مساءً</option>
                    <option value="19:00">07:00 مساءً</option>
                    <option value="20:00">08:00 مساءً</option>
                    <option value="21:00">09:00 مساءً</option>
                    <option value="22:00">10:00 مساءً</option>
                    <option value="23:00">11:00 مساءً</option>
                    <option value="00:00">12:00 منتصف الليل</option>
                    <option value="01:00">01:00 صباحاً</option>
                  </select>
                </div>
                
                <div className="md:col-span-2">
                  <label htmlFor="notes" className="block text-lg mb-2">ملاحظات إضافية</label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows="4"
                    className="w-full bg-barber-wood bg-opacity-30 border border-barber-orange rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-barber-orange"
                  ></textarea>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <button
                  type="submit"
                  className="orange-btn text-lg px-10 py-3"
                >
                  إرسال طلب الحجز
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
