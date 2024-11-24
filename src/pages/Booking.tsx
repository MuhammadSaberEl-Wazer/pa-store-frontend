const Booking: React.FC = () => {
  return (
    <div className="flex justify-center p-10 bg-gray-50">
      <div className="flex flex-col lg:flex-row w-full bg-white shadow-lg rounded-lg p-6">
        <div className="w-full lg:w-1/3 p-5 border-b lg:border-b-0 lg:border-r border-gray-200">
          <h2 className="text-center text-lg font-semibold mb-4">
            حدد التاريخ والوقت المناسب
          </h2>
          <div className="flex flex-col space-y-3">
            <button className="w-full py-2 border border-green-500 text-green-600 font-medium rounded-lg hover:bg-green-100">
              PM 9:30
            </button>
            <button className="w-full py-2 border border-green-500 text-green-600 font-medium rounded-lg hover:bg-green-100">
              PM 10:00
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/3 p-5 border-b lg:border-b-0 lg:border-r border-gray-200">
          <div className="text-center text-lg font-semibold mb-4">
            نوفمبر 2024
          </div>
          <div className="flex justify-between items-center mb-4">
            <button className="text-gray-500">&lt;</button>
            <div>تغيير الشهر</div>
            <button className="text-gray-500">&gt;</button>
          </div>
          <div className="grid grid-cols-7 gap-2 text-center">
            <div className="text-gray-500">أحد</div>
            <div className="text-gray-500">اثنين</div>
            <div className="text-gray-500">ثلاثاء</div>
            <div className="text-gray-500">أربعاء</div>
            <div className="text-gray-500">خميس</div>
            <div className="text-gray-500">جمعة</div>
            <div className="text-gray-500">سبت</div>
            <div className="py-1 rounded-full ">1</div>
            <div className="py-1 rounded-full ">2</div>
            <div className="py-1 rounded-full ">3</div>
            <div className="py-1 rounded-full ">4</div>
            <div className="py-1 rounded-full ">5</div>
            <div className="py-1 rounded-full ">6</div>
            <div className="py-1 rounded-full ">7</div>
            <div className="py-1 rounded-full ">8</div>
            <div className="py-1 rounded-full ">9</div>
            <div className="py-1 rounded-full ">10</div>
            <div className="py-1 rounded-full ">11</div>
            <div className="py-1 rounded-full ">12</div>
            <div className="py-1 rounded-full ">13</div>
            <div className="py-1 rounded-full ">14</div>
            <div className="py-1 rounded-full ">15</div>
            <div className="py-1 rounded-full ">16</div>
            <div className="py-1 rounded-full bg-green-500 text-white">17</div>
            <div className="py-1 rounded-full ">18</div>
            <div className="py-1 rounded-full ">19</div>
            <div className="py-1 rounded-full ">20</div>
            <div className="py-1 rounded-full ">21</div>
            <div className="py-1 rounded-full ">22</div>
            <div className="py-1 rounded-full ">23</div>
            <div className="py-1 rounded-full ">24</div>
            <div className="py-1 rounded-full ">25</div>
            <div className="py-1 rounded-full ">26</div>
            <div className="py-1 rounded-full ">27</div>
            <div className="py-1 rounded-full ">28</div>
            <div className="py-1 rounded-full ">29</div>
            <div className="py-1 rounded-full ">30</div>
          </div>
        </div>
        <div className="w-full lg:w-1/3 p-5">
          <h2 className="text-xl font-semibold mb-3">
            استشارة شخصية مع عبدالرحمن خالد | 30 دقيقة
          </h2>
          <div className="border rounded-lg p-4 mb-4">
            <div className="flex items-center justify-between">
              <span className="font-medium">تحديد المستشار</span>
              <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
                ع
              </span>
            </div>
            <div className="text-gray-600">عبدالرحمن خالد الجهني</div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">540 ريال سعودي</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">مدة الجلسة: 0 ساعة 30 دقيقة</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">
                المكان: مكالمة فيديو - Google Meet
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">
                التوقيت الزمني: Africa/Cairo
              </span>
            </div>
          </div>
          <div className="mt-5">
            <button className="w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
              تأكيد الحجز
            </button>
          </div>
          <div className="mt-2">
            <button className="w-full py-2 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300">
              إلغاء
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
