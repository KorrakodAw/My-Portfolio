import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

const locales = ["en", "th"];

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically works better with the new version than destructing {locale} directly
  let locale = await requestLocale;

  // Validate that the incoming `locale` parameter is valid
  if (!locale || !locales.includes(locale as any)) {
    locale = "en"; // Fallback to default
    // Or call notFound() if you prefer strict 404s
  }

  return {
    locale: locale as string,
    messages: (await import(`../messages/${locale}.json`)).default,
    // ^ Note: You might need to adjust "../" depending on where 'messages' folder is relative to this new folder
  };
});
