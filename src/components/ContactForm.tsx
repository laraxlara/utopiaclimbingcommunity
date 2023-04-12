import React, { useState } from "react";
import * as yup from "yup";
import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";

const valuesSchema = yup.object({
  email: yup.string(),
  subject: yup.string(),
  message: yup.string(),
});

type Values = yup.InferType<typeof valuesSchema>;

type Props = {
  form: string;
  values: Array<{ email: string; subject: string; message: string }>;
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
};

type State = {
  state: string;
};

function ContactForm() {
  const { locales } = useRouter();

  const intl = useIntl();
  const [values, setValues] = useState<Values>({
    email: "",
    subject: "",
    message: "",
  });

  const [form, setForm] = useState<State>({
    state: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [(e.target as HTMLInputElement).id]: (e.target as HTMLInputElement).value,
    });
  };

  const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(values);

    if (values.email && values.subject && values.message) {
      setForm({ state: "loading" });
      try {
        const res = await fetch(`api/contact`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        const { error } = await res.json();

        if (error) {
          console.log(error);
          return;
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <h2 className="mb-4 text-6xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
        <FormattedMessage id="page.home.contact.h" />
      </h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-md">
        <FormattedMessage id="page.home.contact.p" />
      </p>
      <form onSubmit={(e) => onSubmitForm(e)} className="space-y-8">
        <div>
          <label className="block mb-2 text-[2rem] text-gray-700 dark:text-gray-300">
            Email
          </label>
          <input
            type="email"
            value={values.email}
            onChange={handleChange}
            id="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-[2rem] rounded-lg block w-full p-2.5 dark:bg-[#18181b] dark:border-gray-600 dark:placeholder-gray-600 dark:text-white"
            placeholder="example@gmail.com"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-[2rem] text-gray-900 dark:text-gray-300">
            Subject
          </label>
          <input
            type="text"
            value={values.subject}
            onChange={handleChange}
            id="subject"
            className="block p-3 w-full text-[2rem] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm dark:bg-[#18181b] dark:border-gray-600 dark:placeholder-gray-600 dark:text-white"
            placeholder="Let us know how we can help you"
            required
          />
        </div>
        <div className="sm:col-span-2">
          <label className="block mb-2 text-[2rem] text-gray-900 dark:text-gray-400">
            Message
          </label>
          {/* <textarea
            id="message"
            value={values.message}
            onChange={handleChange}
            rows={6}
            className="block p-2.5 w-full text-[2rem] text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 dark:bg-[#18181b] dark:border-gray-600 dark:placeholder-gray-600 dark:text-white"
            placeholder="Leave a message..."
          ></textarea> */}
        </div>
        {/* {form.state === 'loading' ? (
				<div>Sending....</div>
			) : form.state === 'error' ? (
				<div>{form.message}</div>
			) : (
				form.state === 'success' && <div>Sent successfully</div>
			)} */}
        <button
          type="submit"
          className="py-3 px-5 text-[1.8rem] text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-[#052e16] dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Send message
        </button>
      </form>
    </>
  );
}

export default ContactForm;
