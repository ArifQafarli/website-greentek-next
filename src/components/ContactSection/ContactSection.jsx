"use client";

import { useMemo } from "react";
import Container from "../layout/Container";
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
import { useLanguage } from "@/context/LanguageContext";
import { useTranslation } from "@/lib/useTranslation";

const ReusableInput = ({ name, type = "text", placeholder }) => (
  <div className="relative mb-8">
    <Field
      type={type}
      name={name}
      placeholder={placeholder}
      className="w-full p-4 bg-gray-100 rounded-xl outline-none"
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
      className="w-full p-4 bg-gray-100 rounded-xl outline-none"
    />
    <ErrorMessage
      name={name}
      component="div"
      className="absolute -bottom-5 left-0 text-red-500 text-sm"
    />
  </div>
);

export default function ContactSection() {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

 
  const ContactSchema = useMemo(
    () =>
      Yup.object().shape({
        firstName: Yup.string().required(t("contact_firstname_required")),
        lastName: Yup.string().required(t("contact_lastname_required")),
        email: Yup.string()
          .email(t("contact_email_invalid"))
          .required(t("contact_email_required")),
        phone: Yup.string()
          .matches(/^[0-9+\s()-]*$/, t("contact_phone_invalid"))
          .required(t("contact_phone_required")),
        message: Yup.string()
          .min(10, t("contact_message_min"))
          .required(t("contact_message_required")),
      }),
    [language, t]
  );

  const handleSubmit = async (values, { resetForm }) => {
    try {
      console.log("Form Values:", values);
      toast.success(t("contact_success"));
      resetForm();
    } catch (error) {
      toast.error(t("contact_error"));
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
              {t("contact_title")}{" "}
              <span className="font-semibold">{t("contact_highlight")}</span>{" "}
              {t("contact_title_rest")}
            </h2>
          </div>

          <div className="bg-white p-12 rounded-4xl ">
            <p className="text-[#747B81] text-sm uppercase">
              {t("contact_phone")}
            </p>
            <a
              href="tel:+994125970747"
              className="text-lg font-medium mb-4 block hover:text-black transition"
            >
              +994 12 597 07 47
            </a>

            <p className="text-gray-600 text-sm uppercase">
              {t("contact_email")}
            </p>
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
            key={language} // 🔑 DİL DƏYİŞƏNDƏ FORMİK TAM RESET
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
                <ReusableInput
                  name="firstName"
                  placeholder={t("contact_firstname")}
                />
                <ReusableInput
                  name="lastName"
                  placeholder={t("contact_lastname")}
                />
                <ReusableInput
                  name="email"
                  type="email"
                  placeholder={t("contact_email_placeholder")}
                />
                <ReusableInput
                  name="phone"
                  placeholder={t("contact_phone_placeholder")}
                />
                <ReusableTextarea
                  name="message"
                  placeholder={t("contact_message")}
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-auto w-full bg-[#0F5156] text-white py-4 rounded-full font-semibold disabled:opacity-70"
                >
                  {isSubmitting ? t("contact_submitting") : t("contact_submit")}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </Container>
  );
}
