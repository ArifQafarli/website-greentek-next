import { Formik, Form } from "formik";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import { useLanguage } from "@/context/LanguageContext";
import { useTranslation } from "@/lib/useTranslation";
import { Field, ErrorMessage } from "formik";
import { useState } from "react";

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

export default function JobDetail({ job }) {
  const { language } = useLanguage();
  const { t } = useTranslation(language);
  const [selectedFile, setSelectedFile] = useState(null);

  const ApplicationSchema = Yup.object().shape({
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
  });

  // Dosya seçildiğinde çalışacak fonksiyon
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = async (values, { resetForm }) => {
    const formData = new FormData();
    formData.append("firstName", values.firstName);
    formData.append("lastName", values.lastName);
    formData.append("email", values.email);
    formData.append("phone", values.phone);
    formData.append("message", values.message);
    if (selectedFile) {
      formData.append("resume", selectedFile);
    }

    try {
      console.log("Başvuru:", values);
      toast.success(t("contact_success"));
      resetForm();
    } catch (error) {
      toast.error(t("contact_error"));
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
      <Toaster position="top-right" />

      {/* LEFT: Job Details */}
      <div className="lg:col-span-2 space-y-10 bg-white p-8 rounded-2xl shadow-sm">
        <div>
          <h2 className="text-xl font-semibold mb-4">Job Overview</h2>
          <p className="text-gray-600 leading-relaxed">{job.overview}</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Responsibilities</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            {job.responsibilities.map((res, i) => (
              <li key={i}>{res}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Qualifications</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            {job.qualifications.map((q, i) => (
              <li key={i}>{q}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* RIGHT: Application Form */}
      <div className="bg-white rounded-4xl p-8 shadow-md h-full flex flex-col">
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
          }}
          validationSchema={ApplicationSchema}
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

              {/* CV Upload Section */}
              <div className="mb-4">
                <button
                  type="button"
                  onClick={() => document.getElementById("fileInput").click()}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-green-700 bg-green-100 hover:bg-green-200"
                >
                  📎 Add Resume
                </button>
                {/* Dosya input */}
                <input
                  type="file"
                  id="fileInput"
                  name="resume"
                  accept=".pdf,.doc,.docx,.txt"
                  onChange={handleFileChange}
                  className="hidden"
                />
                {selectedFile && (
                  <div className="mt-2 text-sm text-gray-600">
                    Seçilen dosya: {selectedFile.name}
                  </div>
                )}
              </div>

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
  );
}
