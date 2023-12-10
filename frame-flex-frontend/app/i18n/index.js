import { createInstance } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { initReactI18next } from "react-i18next/initReactI18next";
import { getOptions } from "./settings";

const initI18next = async (lng, ns) => {
  const i18nInstance = createInstance();
  try {
    await i18nInstance
      .use(initReactI18next)
      .use(
        resourcesToBackend((language, namespace) =>
          import(`./locales/${language}/${namespace}.json`)
        )
      )
      .init(getOptions(lng, ns));
    return i18nInstance;
  } catch (error) {
    // console.error("Error initializing i18next:", error);
    throw error; // Re-throw to handle it in the calling function.
  }
};

export async function getCustomTranslation(lng, ns, options = {}) {
  try {
    const i18nextInstance = await initI18next(lng, ns);
    return {
      t: i18nextInstance.getFixedT(
        lng,
        Array.isArray(ns) ? ns[0] : ns,
        options.keyPrefix
      ),
      i18n: i18nextInstance,
    };
  } catch (error) {
    // TODO: Handle the error appropriately, @ex: return a default value or throw.
    // console.error("Error in getCustomTranslation:", error);
  }
}
