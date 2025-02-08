const getLocales = () => [
  // you can choose / add the locales you want
  { countryCode: 'US', languageTag: 'en-US', languageCode: 'en', isRTL: true },
  { countryCode: 'FR', languageTag: 'fr-FR', languageCode: 'fr', isRTL: false },
];
const getCurrencies = () => ['All currencies conversion connect usd exchange ']; // can be empty array

export { getLocales, getCurrencies };
