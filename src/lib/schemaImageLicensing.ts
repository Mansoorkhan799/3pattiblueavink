/** Site origin for absolute schema URLs */
export const SITE_ORIGIN = "https://3pattiblue.pk";

/**
 * Schema.org ImageObject properties Google recommends for Image Metadata
 * (Search Console: acquireLicensePage, copyrightNotice, creditText).
 */
export const imageObjectLicensing = {
  acquireLicensePage: `${SITE_ORIGIN}/contact-us`,
  copyrightNotice: "© 3 Patti Blue. All rights reserved.",
  creditText: "3 Patti Blue",
} as const;
