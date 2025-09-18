"use client";

import Container from "../../components/layout/Container";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Send,
  MessageSquare,
  Twitter,
} from "lucide-react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";

const ContactSchema = Yup.object().shape({
  firstName: Yup.string().required("Ad tələb olunur*"),
  lastName: Yup.string().required("Soyad tələb olunur"),
  email: Yup.string()
    .email("Düzgün email daxil edin")
    .required("Email tələb olunur*"),
  phone: Yup.string()
    .matches(/^[0-9+\s()-]*$/, "Yalnız rəqəm daxil edin")
    .required("Telefon tələb olunur*"),
  message: Yup.string()
    .min(10, "Mesaj ən azı 10 simvol olmalıdır")
    .required("Mesaj tələb olunur*"),
});

const ReusableInput = ({ name, type = "text", placeholder }) => (
  <div className="relative mb-8">
    <Field
      type={type}
      name={name}
      placeholder={placeholder}
      className="w-full p-4 bg-gray-100 rounded-xl outline-none f0"
    />
    <ErrorMessage
      name={name}
      component="div"
      className="absolute -bottom-5 left-0 text-red-500 text-sm"
    />
  </div>
);

const ReusableTextarea = ({ name, placeholder, rows = 4 }) => (
  <div className="relative mb-8">
    <Field
      as="textarea"
      name={name}
      rows={rows}
      placeholder={placeholder}
      className="w-full p-4 bg-gray-100 rounded-xl outline-none "
    />
    <ErrorMessage
      name={name}
      component="div"
      className="absolute -bottom-5 left-0 text-red-500 text-sm"
    />
  </div>
);

export default function ContactSection() {
  const handleSubmit = async (values, { resetForm }) => {
    try {
      console.log("Form Values:", values);
      toast.success("Mesajınız uğurla göndərildi ✅");
      resetForm();
    } catch (error) {
      toast.error("Xəta baş verdi ❌");
    }
  };

  return (
    <Container className="px-4 py-12">
      <Toaster position="top-right" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 items-stretch">
        {/* 🔹 Sol tərəf */}
        <div className="flex flex-col gap-5 h-full">
          <div
            className="relative flex items-center text-left px-10 py-16 lg:px-6 lg:py-10 rounded-4xl h-full"
            style={{
              backgroundImage: "url('/assets/Contact/contact-bg.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h2 className="text-3xl lg:text-5xl text-black leading-relaxed pl-12">
              Biznesinizi <span className="font-semibold">Ekoloji</span> Ödəniş{" "}
              <br />
              Həlləri İlə Gələcəyə <br /> Daşıyaq!
            </h2>
          </div>

          {/* Əlaqə məlumatları */}
          <div className="bg-white p-12 rounded-4xl ">
            <p className="text-[#747B81] text-sm uppercase">Phone</p>
            <a
              href="tel:+994125970747"
              className="text-lg font-medium mb-4 block hover:text-black transition"
            >
              +994 12 597 07 47
            </a>

            <p className="text-gray-600 text-sm uppercase">Email</p>
            <a
              href="mailto:greentekpay@gmail.com"
              className="text-lg font-medium mb-6 block hover:text-black transition"
            >
              greentekpay@gmail.com
            </a>

            <div className="flex space-x-4 mt-4">
              {[
                MessageSquare,
                Send,
                Facebook,
                Instagram,
                Twitter,
                Linkedin,
                Youtube,
              ].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="p-2 bg-[#C7C7C76E] rounded-full text-[#033136] hover:bg-[#033136] hover:text-white transition"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* 🔹 Sağ tərəf – Formik */}
        <div className="bg-white rounded-4xl p-8 shadow-md h-full flex flex-col">
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              phone: "",
              message: "",
            }}
            validationSchema={ContactSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="flex flex-col flex-1">
                <ReusableInput name="firstName" placeholder="Ad" />
                <ReusableInput name="lastName" placeholder="Soyad" />
                <ReusableInput name="email" type="email" placeholder="Email" />
                <ReusableInput name="phone" placeholder="Telefon nömrəsi" />
                <ReusableTextarea name="message" placeholder="Mesaj" />


                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-auto w-full bg-[#0F5156] text-white py-4 rounded-full font-semibold disabled:opacity-70"
                >
                  {isSubmitting ? "Göndərilir..." : "Göndər"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </Container>
  );
}
