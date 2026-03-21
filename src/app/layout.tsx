import type { Metadata, Viewport } from "next";
import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DeferredStyles from "@/components/DeferredStyles";
import ScrollToTopWrapper from "@/components/ScrollToTopWrapper";
import WebVitalsTracker from "@/components/WebVitalsTracker";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#06091F",
  viewportFit: "cover",
  interactiveWidget: "resizes-visual",
};

export const metadata: Metadata = {
  metadataBase: new URL('https://3pattiblue.pk'),
  title: {
    default: "3 Patti Blue APK Download – Top Earning App in Pakistan 2026",
    template: "%s | 3 Patti Blue"
  },
  description: "3 Patti Blue is the combination of various casino games like cards, rummy, slots, poker, Jili Slots, and Fishing Games. Download 3 Patti Blue APK and earn real money in Pakistan 2026.",
  keywords: [
    "3 Patti Blue",
    "3Patti Blue",
    "3 Patti Blue APK",
    "3 Patti Blue download",
    "3 Patti Blue app",
    "3 Patti Blue Pakistan",
    "Teen Patti Blue",
    "3 Patti Blue 2026",
    "download 3 Patti Blue",
    "3 Patti Blue real money",
    "3 Patti Blue earning app",
    "best earning app Pakistan 2026",
    "online casino Pakistan",
    "Teen Patti game Pakistan",
    "3 Patti online Pakistan",
    "JazzCash gaming",
    "EasyPaisa gaming",
    "real money games Pakistan",
    "Dragon vs Tiger",
    "Andar Bahar game",
    "Jili Slots Pakistan",
    "fishing games online",
    "slot games Pakistan",
    "poker online Pakistan",
    "3patti blue apk download",
    "3pattiblue.pk"
  ],
  authors: [{ name: "3 Patti Blue Team" }],
  creator: "3 Patti Blue",
  publisher: "3 Patti Blue",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon', sizes: 'any' },
      { url: '/3-patti-blue-logo.webp', type: 'image/webp', sizes: '192x192' },
      { url: '/3-patti-blue.webp', type: 'image/webp', sizes: '512x512' }
    ],
    apple: [
      { url: '/3-patti-blue-logo.webp', sizes: '180x180' }
    ],
    shortcut: [
      { url: '/favicon.ico', type: 'image/x-icon' }
    ]
  },
  verification: {
    google: "8a7c21f6e90a89ef",
  },
  alternates: {
    canonical: "https://3pattiblue.pk",
  },
  openGraph: {
    title: "3 Patti Blue APK Download – Top Earning App in Pakistan 2026",
    description: "3 Patti Blue is the combination of various casino games like cards, rummy, slots, poker, Jili Slots, and Fishing Games. Download now and earn real money.",
    url: "https://3pattiblue.pk",
    siteName: "3 Patti Blue",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://3pattiblue.pk/feature/og-image.webp",
        width: 1200,
        height: 630,
        alt: "3 Patti Blue – Top Earning App in Pakistan 2026",
      },
      {
        url: "https://3pattiblue.pk/feature/og-image-square.webp",
        width: 800,
        height: 800,
        alt: "3 Patti Blue – Top Earning App in Pakistan 2026",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "3 Patti Blue APK Download – Top Earning App in Pakistan 2026",
    description: "3 Patti Blue is the combination of various casino games like cards, rummy, slots, poker, Jili Slots, and Fishing Games. Download now and earn real money.",
    creator: "@3pattiblue",
    images: [
      {
        url: "https://3pattiblue.pk/feature/twitter-card.webp",
        width: 1200,
        height: 600,
        alt: "3 Patti Blue – Top Earning App in Pakistan 2026",
      }
    ],
  },
  applicationName: "3 Patti Blue",
  category: "Gaming",
  classification: "Card Gaming Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="16x16 32x32" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/3-patti-blue-logo.webp" type="image/webp" sizes="192x192" />
        <link rel="icon" href="/3-patti-blue.webp" type="image/webp" sizes="512x512" />
        <link rel="apple-touch-icon" href="/3-patti-blue-logo.webp" sizes="180x180" />
        <meta property="og:image" content="https://3pattiblue.pk/3-patti-blue.webp" />
        <meta property="og:image:alt" content="3 Patti Blue – Top Earning App in Pakistan 2026. Play Teen Patti, Rummy, Slots, Poker." />
        
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Defer manifest to avoid critical path (374ms latency) - load after page interactive */}
        <Script id="deferred-manifest" strategy="lazyOnload">
          {`(function(){var l=document.createElement('link');l.rel='manifest';l.href='/manifest.json';document.head.appendChild(l);})();`}
        </Script>
        {/* Google Analytics - only load if GA ID is set in env (use NEXT_PUBLIC_GA_MEASUREMENT_ID) */}
        {typeof process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID === 'string' &&
         process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID &&
         !/^G-XXXXXXXXXX$/i.test(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
              strategy="lazyOnload"
            />
            <Script id="google-analytics" strategy="lazyOnload">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                  send_page_view: false,
                  transport_type: 'beacon'
                });
              `}
            </Script>
          </>
        )}
      </head>
      <body
        className="antialiased bg-primary text-white min-h-screen flex flex-col"
        style={{
          backgroundImage: "radial-gradient(circle at 10% 20%, rgba(10, 16, 41, 0.4) 0%, rgba(6, 9, 31, 0.01) 90%)",
          backgroundAttachment: "fixed",
          minHeight: "100vh"
        }}
        suppressHydrationWarning
      >
        <div className="stars-bg fixed inset-0 z-0 opacity-20"></div>
        <Header />
        <main className="relative z-10">
        {children}
        </main>
        <DeferredStyles />
        <Footer />
        <ScrollToTopWrapper />
        <WebVitalsTracker />
        
        {/* Structured data for Organization */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "3 Patti Blue",
              "url": "https://3pattiblue.pk",
              "logo": "https://3pattiblue.pk/3-patti-blue-logo.webp",
              "description": "3 Patti Blue is Pakistan's top earning app offering Teen Patti, Rummy, Slots, Poker, Jili Slots, and Fishing Games with real cash rewards.",
              "sameAs": [
                "https://facebook.com/3pattiblue",
                "https://twitter.com/3pattiblue"
              ]
            })
          }}
        />
        
        {/* Structured data for SoftwareApplication */}
        <Script
          id="app-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "3 Patti Blue",
              "operatingSystem": "Android 5.0+",
              "applicationCategory": "GameApplication",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "PKR"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.5",
                "ratingCount": "300000"
              }
            })
          }}
        />
      </body>
    </html>
  );
}
