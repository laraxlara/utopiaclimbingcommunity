/* eslint-disable  @typescript-eslint/no-misused-promises */
/* eslint-disable  @typescript-eslint/no-unsafe-assignment */

import React, { useState } from "react";
import * as yup from "yup";
import { FormattedMessage } from "react-intl";

import Loading from "./Loading";

const valuesSchema = yup.object({
  name: yup.string(),
  surname: yup.string(),
  email: yup.string(),
  subject: yup.string(),
  message: yup.string(),
});

type Values = yup.InferType<typeof valuesSchema>;

function ContactForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState<Values>({
    name: "",
    surname: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLElement>) => {
    setValues({
      ...values,
      [(e.target as HTMLInputElement).id]: (e.target as HTMLInputElement).value,
    });
  };

  const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(values);
    setValues(values);
    setLoading(true);

    if (
      values.name &&
      values.surname &&
      values.email &&
      values.subject &&
      values.message
    ) {
      try {
        const res = await fetch(`api/contact/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        if (res) {
          setSent(true);
          setLoading(false);
        }
        const { data } = await res.json();

        if (data) {
          return;
        }
      } catch (error) {
        console.log(error);
        setError(true);
      }
    }
  };

  return (
    <div className="flex flex-col">
      <h2 className="mb-4 text-6xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
        <FormattedMessage id="page.home.contact.h" />
      </h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-md">
        <FormattedMessage id="page.home.contact.p" />
      </p>

      {error ? (
        <p className="text-[red] text-md font-bold py-6">
          Error: Something went wrong! Try again later!
        </p>
      ) : null}

      {loading ? (
        <>
          <Loading />
        </>
      ) : sent && !error && !loading ? (
        <>
          <p className="text-[green] text-7xl text-center font-bold py-6">
            Your message has been sent!
          </p>
          <button type="submit">Send another message</button>
        </>
      ) : (
        <>
          <form onSubmit={(e) => onSubmitForm(e)} className="space-y-8">
            <div className="flex gap-10">
              <div>
                <label className="block mb-2 text-[2rem] text-gray-700 dark:text-gray-300">
                  <FormattedMessage id="page.home.contact.n" />
                </label>
                <input
                  type="text"
                  value={values.name}
                  onChange={handleChange}
                  id="name"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-[2rem] rounded-lg block w-full p-2.5 dark:bg-[#18181b] dark:border-gray-600 dark:placeholder-gray-600 dark:text-white"
                  placeholder="Name"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-[2rem] text-gray-700 dark:text-gray-300">
                  <FormattedMessage id="page.home.contact.su" />
                </label>
                <input
                  type="text"
                  value={values.surname}
                  onChange={handleChange}
                  id="surname"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-[2rem] rounded-lg block w-full p-2.5 dark:bg-[#18181b] dark:border-gray-600 dark:placeholder-gray-600 dark:text-white"
                  placeholder="Surname"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block mb-2 text-[2rem] text-gray-700 dark:text-gray-300">
                <FormattedMessage id="page.home.contact.e" />
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
                <FormattedMessage id="page.home.contact.s" />
              </label>
              <input
                type="text"
                value={values.subject}
                onChange={handleChange}
                id="subject"
                className="block p-3 w-full text-[2rem] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm dark:bg-[#18181b] dark:border-gray-600 dark:placeholder-gray-600 dark:text-white"
                placeholder="Subject"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block mb-2 text-[2rem] text-gray-900 dark:text-gray-400">
                <FormattedMessage id="page.home.contact.m" />
              </label>
              <textarea
                id="message"
                value={values.message}
                onChange={handleChange}
                rows={6}
                className="block p-2.5 w-full text-[2rem] text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 dark:bg-[#18181b] dark:border-gray-600 dark:placeholder-gray-600 dark:text-white"
                placeholder="Leave a message here"
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-[1.8rem] text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-[#052e16] dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              <FormattedMessage id="page.home.contact.b" />
            </button>
          </form>
        </>
      )}
    </div>
  );
}

export default ContactForm;
