import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { RegisterData, registerUser } from "../API/Auth/register";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

// Define validation schema using Yup
const validationSchema = Yup.object({
  name: Yup.string()
    .required("الاسم مطلوب")
    .min(2, "الاسم يجب أن يكون على الأقل حرفين"),
  email: Yup.string()
    .email("البريد الإلكتروني غير صالح")
    .required("البريد الإلكتروني مطلوب"),
  password: Yup.string()
    .required("كلمة المرور مطلوبة")
    .min(6, "كلمة المرور يجب أن تكون على الأقل 6 أحرف"),
});

const handleSubmit = async (values: RegisterData) => {
  try {
    await registerUser(values);
    alert("تم التسجيل بنجاح!");
  } catch (error: unknown) {
    console.error("Registration failed:", error);
    alert(error || "حدث خطأ أثناء التسجيل. حاول مرة أخرى.");
  }
};
const Register = () => {
  return (
    <div dir="rtl">
      <section className="bg-white">
        <div className="lg:grid lg:min-h-[80vh] lg:grid-cols-12">
          <section className="relative hidden lg:!flex h-32 items-end bg-primary-text lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              className="absolute inset-0 h-full w-full object-cover opacity-80"
            />
            <div className="hidden lg:relative lg:block lg:p-12">
              <a className="block text-white" href="#">
                <span className="sr-only">الرئيسية</span>
                <svg
                  className="h-8 sm:h-10"
                  viewBox="0 0 28 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.41 10.3847C1.14777 7.4194..."
                    fill="currentColor"
                  />
                </svg>
              </a>
              <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                مرحبًا بك في PA Store
              </h2>
              <p className="mt-4 leading-relaxed text-white/90">
                قم بالتسجيل للحصول على حساب جديد واستمتع بالميزات الحصرية.
              </p>
            </div>
          </section>

          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="w-full h-full flex justify-center flex-col items-center">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form className="mt-8 w-full md:w-[80%] mx-auto gap-[20px] ">
                    <div className="col-span-12 mb-[2rem]">
                      <label
                        htmlFor="name"
                        className="block text-lg font-medium text-primary-text"
                      >
                        الاسم
                      </label>
                      <Field
                        type="text"
                        id="name"
                        name="name"
                        className="mt-1 w-full rounded-md border-black border py-[10px] bg-white text-lg text-primary-text shadow-sm"
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>

                    <div className="col-span-12 mb-[2rem]">
                      <label
                        htmlFor="email"
                        className="block text-lg font-medium text-primary-text"
                      >
                        البريد الإلكتروني
                      </label>
                      <Field
                        type="email"
                        id="email"
                        name="email"
                        className="mt-1 w-full rounded-md border-black border py-[10px] bg-white text-lg text-primary-text shadow-sm"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>

                    <div className="col-span-12 mb-[2rem]">
                      <label
                        htmlFor="password"
                        className="block text-lg font-medium text-primary-text"
                      >
                        كلمة المرور
                      </label>
                      <Field
                        type="password"
                        id="password"
                        name="password"
                        className="mt-1 w-full rounded-md border-black border py-[10px] bg-white text-lg text-primary-text shadow-sm"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>

                    <div className="col-span-12">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-block rounded-md w-full mt-[20px] py-[10px] bg-primary-text px-4 text-lg font-medium text-white shadow hover:bg-gray-800"
                      >
                        {isSubmitting ? "جارٍ التسجيل..." : "تسجيل"}
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
              <p className="mt-4 text-center text-lg text-gray-500">
                لديك حساب بالفعل؟
                <Link
                  to={"/login"}
                  className="font-medium text-primary-text mx-[5px] hover:underline"
                >
                  تسجيل الدخول
                </Link>
              </p>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
};

export default Register;
