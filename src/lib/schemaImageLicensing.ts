/** Site origin for absolute schema URLs */
export const SITE_ORIGIN = "https://3pattiblue.pk";

/**
 * Schema.org ImageObject properties Google recommends for Image Metadata
 * Fixes Search Console: Missing field 'license' and Missing field 'creator'.
 */
export const imageObjectLicensing = {
  license: `${SITE_ORIGIN}/disclaimer`,
  acquireLicensePage: `${SITE_ORIGIN}/contact-us`,
  copyrightNotice: "© 2026 3 Patti Blue. All rights reserved.",
  creditText: "3 Patti Blue",
  creator: {
    "@type": "Organization",
    name: "3 Patti Blue",
    url: SITE_ORIGIN,
  },
} as const;
