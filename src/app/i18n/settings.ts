export const fallbackLng = 'en';
export const languages = [fallbackLng, 'ua'];
export const defaultNS = 'common';

export function getOptions(lng = fallbackLng, ns: string | string[]) {
  return {
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
