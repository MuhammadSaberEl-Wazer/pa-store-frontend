import { Link } from "react-router-dom";

const ConsultHome = () => {
  return (
    <div dir="ltr">
      <div className="w-full m-5 flex justify-center items-center">
        <h2 className="text-center font-semibold text-primary-text text-5xl lg:text-7xl">
          الاستشارات
        </h2>
      </div>
      <div className="flex flex-col md:flex-row justify-between p-8 gap-5 rounded-lg shadow-lg overflow-hidden  mx-auto my-8 ">
        {/* Consultation Details */}
        <div dir="rtl" className="bg-white p-6 w-full md:w-1/3 flex flex-col ">
          <div>
            <h2 className="text-3xl font-semibold">
              استشارة شخصية مع عبدالرحمن خالد | 30 دقيقة
            </h2>
            <p className="text-green-600 text-2xl font-bold mb-4">
              540 ريال سعودي
            </p>
          </div>
          <div>
            <div className="flex flex-col justify-between">
              <p className="text-2xl my-4 flex text-right gap-2">
                <span>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="clock"
                    className="svg-inline--fa fa-clock"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"
                    ></path>
                  </svg>
                </span>
                مدة الجلسة: 0 ساعة 30 دقيقة
              </p>
              <p className="text-2xl flex text-right gap-2">
                <span>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="video"
                    className="svg-inline--fa fa-video"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M0 128C0 92.7 28.7 64 64 64l256 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2l0 256c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1l0-17.1 0-128 0-17.1 14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z"
                    ></path>
                  </svg>
                </span>
                المكان: مكالمة فيديو Google Meet
              </p>
            </div>
          </div>
          <Link
            to="/Booking"
            className="bg-green-500 hover:bg-green-600 text-white font-bold my-4 py-2 px-4 rounded w-full"
          >
            احجز الجلسة الآن
          </Link>
        </div>
        {/* Image Section */}
        <div className="relative w-full md:w-2/3 h-48 md:h-auto">
          <img
            src="/src/assets/Consultations-CwMcrmU6.png"
            alt="جلسة استشارة"
            className="object-cover w-full h-full rounded-xl"
          />
        </div>
      </div>
      {/* Session Description */}
      <div className="w-full p-8 text-right">
        <div className="flex justify-end items-center">
          <h2 className="text-3xl">وصف الجلسة</h2>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="circle-info"
            className="svg-inline--fa fa-circle-info text-3xl ml-5"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
            ></path>
          </svg>
        </div>
        <p className="leading-loose">
          استشارة خاصة مع عبدالرحمن خالد شخصياً لمدة 30 دقيقة
          <br />
          اقدر اساعدك في هذه المواضيع:
          <br />
          -كيف ترفع تفاعل حساباتك وتحصل على مشاهدات ومتابعين بشكل اسرع
          <br />
          -كيف تبني مشروعك الخاص
          <br />
          -كيف تستغل مهارتك لزيادة دخلك
          <br />
          -كيف تسوق لمشروعك بافضل الطرق
          <br />
          -كيف تصير مشهور في فترة قصيرة
          <br />
          -كيف تسوق من خلال صناعة المحتوى بالطريقة الصحيحة
          <br />
          استثمر في نفسك واطلب استشارتك الخاصة الان لنمو مشروعك ..
        </p>
      </div>
    </div>
  );
};

export default ConsultHome;
