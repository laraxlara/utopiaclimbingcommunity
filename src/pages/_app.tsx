import type { AppType } from "next/app";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import en from '../../lang/en.json'
import sr from '../../lang/sr.json'
import "../styles/globals.css";

const messages = {
  sr,
  en,
};

type Locale = keyof typeof messages;

function getDirection(locale: any) {
  if (locale === "sr") {
    return "rtl";
  }

  return "ltr";
}

const MyApp: AppType = ({ Component, pageProps }) => {
  const { locale } = useRouter();
  return (
    <IntlProvider locale={locale as string} messages={messages[locale as Locale]}>
      <Component {...pageProps} />
    </IntlProvider>
  )
};
export default MyApp;
