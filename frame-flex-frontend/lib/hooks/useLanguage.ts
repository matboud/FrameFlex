export const useLanguageItems = () => {
  const languageItems = [
    { label: "🇺🇸", value: "en" },
    { label: "🇪🇸", value: "es" },
    { label: "🇫🇷", value: "fr" },
  ];

  return languageItems;
};

export const useFlagByLanguageCode = (languageCode: string, languageItems: { label: string; value: string }[]) => {
    const getFlag = (code: string) => {
      const item = languageItems.find((item) => item.value === code);
      return item ? item.label : "🇺🇸";
    };
  
    return getFlag(languageCode);
  };
  
