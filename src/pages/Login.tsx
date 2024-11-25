import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { LoginData, loginUser } from "../API/Auth/login";

const Login = () => {
  // Validation schema using Yup
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("البريد الإلكتروني غير صالح")
      .required("البريد الإلكتروني مطلوب"),
    password: Yup.string()
      .min(6, "كلمة المرور يجب أن تكون 6 أحرف على الأقل")
      .required("كلمة المرور مطلوبة"),
  });

  // Initial form values
  const initialValues: LoginData = {
    email: "",
    password: "",
  };

  // Form submission handler
  const handleSubmit = async (values: LoginData) => {
    try {
      const response = await loginUser(values);
      console.log("Login successful:", response);
      // Handle successful login (e.g., redirect to dashboard)
    } catch (error) {
      console.error("Login failed:", error);
      // Optionally, display an error message to the user
    }
  };

  return (
    <div dir="rtl">
      <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <section className="relative hidden lg:!flex h-32 items-end bg-primary-text lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              className="absolute inset-0 h-full w-full object-cover opacity-80"
            />
            <div className="hidden lg:relative lg:block lg:p-12">
              <h2 className="mt-6 text-2xl font-bold text-white lg:text-3xl md:text-4xl">
                مرحباً بعودتك إلى سكود 🦑
              </h2>
              <p className="mt-4 leading-relaxed text-white/90">
                يرجى تسجيل الدخول للوصول إلى حسابك.
              </p>
            </div>
          </section>

          <main className="flex items-center justify-center px-8 py-8 lg:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form className="mt-8 grid grid-cols-6 gap-6">
                    <div className="col-span-6 ">
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
                        className="mt-1 w-full rounded-md border-gray-400 py-[10px] px-[10px] border bg-white text-lg text-primary-text shadow-sm focus:border-gray-500 focus:ring-gray-500"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-600 text-sm mt-1"
                      />
                    </div>

                    <div className="col-span-6">
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
                        className="mt-1 w-full rounded-md border-gray-400 py-[10px] px-[10px] border bg-white text-lg text-gray-700 shadow-sm focus:border-gray-500 focus:ring-gray-500"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-red-600 text-sm mt-1"
                      />
                    </div>

                    <div className="col-span-6">
                      <p className="text-lg text-gray-500">
                        من خلال تسجيل الدخول، أنت توافق على{" "}
                        <a href="#" className="text-gray-700 underline">
                          الشروط والأحكام
                        </a>{" "}
                        و{" "}
                        <a href="#" className="text-gray-700 underline">
                          سياسة الخصوصية
                        </a>
                        .
                      </p>
                    </div>

                    <div className="col-span-6 flex justify-between">
                      <a
                        href="#"
                        className="text-lg text-gray-500 hover:underline"
                      >
                        هل نسيت كلمة المرور؟
                      </a>
                    </div>

                    <div className="col-span-6">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`inline-block w-full rounded-md bg-primary-text px-8 py-3 text-lg font-medium text-white hover:bg-red-950 focus:outline-none focus:ring focus:ring-gray-300 ${
                          isSubmitting ? "opacity-50" : ""
                        }`}
                      >
                        {isSubmitting ? "جاري تسجيل الدخول..." : "تسجيل الدخول"}
                      </button>
                    </div>

                    <div className="col-span-6 mt-6">
                      <p className="text-lg text-gray-500">
                        ليس لديك حساب؟{" "}
                        <Link
                          to="/register"
                          className="text-gray-700 underline"
                        >
                          سجل الآن
                        </Link>
                      </p>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
};

export default Login;
