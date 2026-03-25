import Image from "next/image";
import Link from 'next/link';
import Script from 'next/script';
import ScreenshotCarousel from '@/components/ScreenshotCarousel';
import { Metadata } from 'next';
import { imageObjectLicensing } from '@/lib/schemaImageLicensing';

export const metadata: Metadata = {
  title: {
    default: "3 Patti Blue APK Download – Top Earning App in Pakistan 2026",
    template: "%s | 3 Patti Blue"
  },
  description: "3 Patti Blue is the combination of various casino games like cards, rummy, slots, poker, Jili Slots, and Fishing Games. Download it now and earn real money.",
  keywords: [
    "3 Patti Blue",
    "3Patti Blue",
    "3 Patti Blue APK",
    "3 Patti Blue download",
    "3 Patti Blue Pakistan",
    "3 Patti Blue 2026",
    "Teen Patti Blue",
    "earning app Pakistan",
    "online casino Pakistan",
    "real money games Pakistan",
    "JazzCash gaming",
    "EasyPaisa gaming",
  ],
  openGraph: {
    title: '3 Patti Blue APK Download – Top Earning App in Pakistan 2026',
    description: '3 Patti Blue is the combination of various casino games like cards, rummy, slots, poker, Jili Slots, and Fishing Games. Download it now and earn real money.',
    images: [
      {
        url: 'https://3pattiblue.pk/3-patti-blue.webp',
        width: 512,
        height: 512,
        alt: '3 Patti Blue – Top Earning App in Pakistan 2026'
      },
      {
        url: 'https://3pattiblue.pk/feature/og-image.webp',
        width: 1200,
        height: 630,
        alt: '3 Patti Blue – Top Earning App in Pakistan 2026'
      }
    ],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: '3 Patti Blue APK Download – Top Earning App in Pakistan 2026',
    description: '3 Patti Blue is the combination of various casino games like cards, rummy, slots, poker, Jili Slots, and Fishing Games. Download it now and earn real money.',
    images: ['https://3pattiblue.pk/3-patti-blue.webp', 'https://3pattiblue.pk/feature/og-image.webp']
  }
};

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://3pattiblue.pk/#website",
        "url": "https://3pattiblue.pk/",
        "name": "3 Patti Blue",
        "description": "Top earning app in Pakistan offering Teen Patti, Rummy, Slots, Poker, Jili Slots and Fishing Games",
        "inLanguage": "en-US",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://3pattiblue.pk/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://3pattiblue.pk/#webpage",
        "url": "https://3pattiblue.pk/",
        "name": "3 Patti Blue APK Download – Top Earning App in Pakistan 2026",
        "description": "3 Patti Blue is the combination of various casino games like cards, rummy, slots, poker, Jili Slots, and Fishing Games. Download it now and earn real money.",
        "isPartOf": { "@id": "https://3pattiblue.pk/#website" },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://3pattiblue.pk/3-patti-blue.webp",
          "width": 512,
          "height": 512,
          "name": "3 Patti Blue",
          "description": "3 Patti Blue – Top Earning App in Pakistan 2026. Play Teen Patti, Rummy, Slots, Poker, Jili Slots and Fishing Games.",
          ...imageObjectLicensing
        }
      },
      {
        "@type": "Organization",
        "@id": "https://3pattiblue.pk/#organization",
        "name": "3 Patti Blue",
        "url": "https://3pattiblue.pk/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://3pattiblue.pk/3-patti-blue-logo.webp",
          "width": 512,
          "height": 512,
          ...imageObjectLicensing,
          "creditText": "3 Patti Blue logo"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "roberthenry5426@gmail.com",
          "contactType": "Customer Support",
          "areaServed": "PK"
        }
      },
      {
        "@type": "SoftwareApplication",
        "name": "3 Patti Blue",
        "operatingSystem": "Android 5.0+",
        "applicationCategory": "GameApplication",
        "image": {
          "@type": "ImageObject",
          "url": "https://3pattiblue.pk/3-patti-blue.webp",
          ...imageObjectLicensing
        },
        "logo": {
          "@type": "ImageObject",
          "url": "https://3pattiblue.pk/3-patti-blue.webp",
          ...imageObjectLicensing
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.5",
          "ratingCount": "300000"
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "PKR"
        },
        "softwareVersion": "Latest",
        "fileSize": "54MB",
        "description": "Play Teen Patti, Rummy, Slots, Poker, Jili Slots and Fishing Games. Earn real money with JazzCash & EasyPaisa withdrawals.",
        "author": {
          "@type": "Organization",
          "name": "3Patti Blue Dev"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is 3 Patti Blue legal in Pakistan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, it is legal and safe to use in Pakistan. The app is designed for entertainment and uses chips instead of direct cash betting."
            }
          },
          {
            "@type": "Question",
            "name": "Is 3 Patti Blue free to use?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, you can play the game with free chips and rewards that make this platform exciting."
            }
          },
          {
            "@type": "Question",
            "name": "How can I deposit money into 3 Patti Blue?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can deposit money using local payment methods like JazzCash and Easy Paisa to start playing games."
            }
          },
          {
            "@type": "Question",
            "name": "Are there bonuses in 3 Patti Blue?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, players get welcome bonuses, daily rewards, cashback, and referral bonuses to help them play more."
            }
          },
          {
            "@type": "Question",
            "name": "Can I download the 3Patti Blue App on a PC?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, the 3 Patti Blue APK can also be downloaded on a PC using a dedicated emulator such as BlueStacks or NOX Player."
            }
          },
          {
            "@type": "Question",
            "name": "What are the popular games on 3 Patti Blue?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Games like Teen Patti, Andar Bahar, Dragon vs Tiger, Roulette, and slot games like Sweet Bonanza and 777 Bingo are Popular on the 3Patti Blue."
            }
          },
          {
            "@type": "Question",
            "name": "Is 3 Patti Blue safe to use?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, the 3 Patti Blue App is safe and secure to use. The app uses advanced security features to protect your personal information and transactions."
            }
          },
          {
            "@type": "Question",
            "name": "How can I invite friends to the 3 Patti Blue?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can invite your friends by using your referral link. When they join the game using the link, you get a bonus and free chips."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      {/* Schema.org JSON-LD */}
      <Script
        id="homepage-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      
      {/* Hero Section */}
      <section className="py-8 md:py-16 px-4 md:px-8 max-w-7xl mx-auto" style={{ minHeight: '400px' }}>
        <div className="md:flex md:items-start md:justify-between md:space-x-12 lg:space-x-20">
          <div className="md:w-1/2 space-y-6">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                <span className="text-[#FFA500]">3 Patti Blue APK Download</span>{' '}
                <span className="text-white">– Top Earning App in Pakistan 2026</span>
              </h1>
            </div>
            
            <p className="text-lg text-gray-300 leading-relaxed" style={{ contain: 'layout style', minHeight: '80px', display: 'block' }}>
              <Link href="/" className="text-accent hover:underline">3 Patti Blue</Link> is the combination of various casino games like cards, rummy, slots, poker, Jili Slots, and Fishing Games. Download it now and earn real money.
            </p>

            {/* Download Button */}
            <div className="flex justify-center my-8">
              <a 
                href="https://pk3pattiblue.com/?from_gameid=7852455&channelCode=100000"
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center px-8 py-4 text-white font-semibold text-lg rounded-full border-2 border-[#0ea5e9] hover:bg-[#0ea5e9]/10 transition-all group"
              >
                <span>Download 3Patti Blue</span>
                <div className="ml-3 bg-[#f97316] rounded-full p-2 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                  </svg>
                </div>
              </a>
            </div>

            {/* Stats Grid */}
            <div className="flex flex-row gap-4 justify-center mt-8 mb-4" style={{ minHeight: '120px' }}>
              <div className="bg-[#0A1029] p-6 rounded-2xl text-center flex-1 max-w-[180px]" style={{ minHeight: '120px' }}>
                <svg className="w-6 h-6 mb-3 text-[#FFA500] mx-auto" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
                <div className="text-white text-2xl font-bold mb-1">300K+</div>
                <div className="text-gray-400 text-sm">Downloads</div>
              </div>
              
              <div className="bg-[#0A1029] p-6 rounded-2xl text-center flex-1 max-w-[180px]" style={{ minHeight: '120px' }}>
                <svg className="w-6 h-6 mb-3 text-[#FFA500] mx-auto" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z"/>
                </svg>
                <div className="text-white text-2xl font-bold mb-1">Android</div>
                <div className="text-gray-400 text-sm">5.0+ Required</div>
              </div>
              
              <div className="bg-[#0A1029] p-6 rounded-2xl text-center flex-1 max-w-[180px]" style={{ minHeight: '120px' }}>
                <svg className="w-6 h-6 mb-3 text-[#FFA500] mx-auto" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
                <div className="text-white text-2xl font-bold mb-1">54MB</div>
                <div className="text-gray-400 text-sm">App Size</div>
              </div>
            </div>

            <p className="text-gray-400 text-sm text-center italic">*Available for Android devices only</p>
          </div>

          {/* Desktop Image */}
          <div className="hidden md:block md:w-1/2 md:mt-8">
            <div className="relative ml-auto" style={{ width: '320px', height: '320px', maxWidth: '100%' }}>
              <Image
                src="/3-patti-blue.webp"
                alt="3 Patti Blue – Top Earning App in Pakistan 2026. Play Teen Patti, Rummy, Slots, Poker."
                width={320}
                height={320}
                className="object-contain drop-shadow-2xl"
                priority={true}
                fetchPriority="high"
                quality={90}
                sizes="320px"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
          </div>

          {/* Mobile Image */}
          <div className="mt-8 md:hidden">
            <div className="relative mx-auto" style={{ width: '280px', height: '280px', maxWidth: '100%' }}>
              <Image
                src="/3-patti-blue.webp"
                alt="3 Patti Blue – Top Earning App in Pakistan 2026. Play Teen Patti, Rummy, Slots, Poker."
                width={280}
                height={280}
                className="object-contain drop-shadow-2xl"
                priority={true}
                fetchPriority="high"
                quality={90}
                sizes="280px"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* App Info Table */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto" id="download">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500]">Download 3Patti Blue</h2>
        <div className="overflow-hidden rounded-2xl shadow-2xl border border-gray-800">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-800">
              <tbody className="divide-y divide-gray-800">
                <tr className="bg-[#0a1029]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Name</td>
                  <td className="py-4 px-6 text-left text-white">3Patti Blue</td>
                </tr>
                <tr className="bg-[#06091F]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Developer</td>
                  <td className="py-4 px-6 text-left text-white">3Patti Blue Dev</td>
                </tr>
                <tr className="bg-[#0a1029]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Category</td>
                  <td className="py-4 px-6 text-left text-white">Cards, Game</td>
                </tr>
                <tr className="bg-[#06091F]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Size</td>
                  <td className="py-4 px-6 text-left text-white">54MB</td>
                </tr>
                <tr className="bg-[#0a1029]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Required OS</td>
                  <td className="py-4 px-6 text-left text-white">Android 5.0+</td>
                </tr>
                <tr className="bg-[#06091F]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Show Ads</td>
                  <td className="py-4 px-6 text-left text-white">No</td>
                </tr>
                <tr className="bg-[#0a1029]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Update</td>
                  <td className="py-4 px-6 text-left text-white">04 Jan, 2026</td>
                </tr>
                <tr className="bg-[#06091F]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Downloads</td>
                  <td className="py-4 px-6 text-left text-white">300K+</td>
                </tr>
                <tr className="bg-[#0a1029]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Language</td>
                  <td className="py-4 px-6 text-left text-white">English, Urdu</td>
                </tr>
                <tr className="bg-[#06091F]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Price</td>
                  <td className="py-4 px-6 text-left text-white">Free 0$</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* App Screenshots Section */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500]">3 Patti Blue App Screenshots</h2>
          <ScreenshotCarousel />
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">Overview</h2>
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              3 Patti Blue is an online betting game where you can earn real cash by playing your favorite games. You can enjoy real-time mini-games with people from around the world and earn real money for free. The game is easy to understand, so that everyone can play and enjoy competitive matches.
            </p>
            <p className="text-gray-300 leading-relaxed">
              This app offers online multiplayer rooms, daily rewards, and fast withdrawals, which make the game more attractive. The app has smooth graphics, apparent sound effects, and simple controls, making it comfortable to play for everyone. Download the 3Patti Blue APK and enjoy safe gameplay with a large community of casino enthusiasts.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">Introduction to 3 Patti Blue</h2>
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              3 Patti Blue is an online game app where you can earn real money by playing different mini-games. You can choose any game you like and enjoy fun entertainment anytime. You can join tables from home, play with friends, or compete with people from different countries to make real cash.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The game is easy to use and provides free chips and simple tutorials to learn the rules. Skilled players can join high-stakes rooms and tournaments for more excitement and high rewards. Overall, the app offers fun competitions and social entertainment, making this game engaging and exciting.
            </p>
          </div>
        </div>
      </section>

      {/* Why Popular Section */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">Why is 3 Patti Blue so Popular in Pakistan?</h2>
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              3Patti Blue APK is popular in Pakistan because it offers fun, easy, and exciting gameplay for users of all types. The app includes many games, such as Teen Patti, Dragon vs Tiger, Roulette, and other casino-style games, keeping you entertained. It is simple to use, so even beginners can play without difficulty. Another reason for their popularity is support for local payment methods like JazzCash and Easy Paisa, making it easy to add or withdraw money. Daily rewards, events, and tournaments also attract players and keep them engaged, encouraging regular play. All features are fully unlocked for free, making this one of the best games to play.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-accent">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-secondary px-8 py-8 rounded-lg card-glow">
              <h3 className="text-xl font-semibold mb-3 text-accent">Bonuses &amp; Rewards</h3>
              <p className="text-gray-300">3Patti Blue offers many bonuses and rewards to make the game more exciting. New players can receive free chips when they start, allowing them to play without spending money. The app also offers daily rewards that players can collect by just logging in regularly. There are special bonus events and challenges that award extra chips or gifts upon completion. These bonuses provide extra opportunities to play without spending money, keeping engagement high, and encouraging regular gameplay. <Link href="/blog/3-patti-blue-welcome-bonus-free-pkr" className="text-accent hover:underline font-medium">Learn how to claim your welcome bonus →</Link></p>
            </div>
            <div className="bg-secondary px-8 py-8 rounded-lg card-glow">
              <h3 className="text-xl font-semibold mb-3 text-accent">Easy Registration</h3>
              <p className="text-gray-300">Signing up for this game is quick and straightforward, with no complications. You can create an account in just a few steps by entering basic information such as your name, phone number, or email address. There is no complicated process or long form to fill out, so new players can start playing without any hassle.</p>
            </div>
            <div className="bg-secondary px-8 py-8 rounded-lg card-glow">
              <h3 className="text-xl font-semibold mb-3 text-accent">Fast &amp; Secure Withdrawal</h3>
              <p className="text-gray-300">3Patti Blue allows players in Pakistan to withdraw their winnings quickly and safely using popular local payment methods such as JazzCash and the Easy Paisa app. These options make it easy to transfer money directly to your mobile wallet without visiting a bank. Withdrawals are processed fast, and your personal and financial information is kept secure. Using Jazzcash and Easypaisa ensures that players can enjoy their rewards conveniently and confidently. <Link href="/withdraw-money-from-3-patti-blue" className="text-accent hover:underline font-medium">See the full withdrawal guide →</Link></p>
            </div>
            <div className="bg-secondary px-8 py-8 rounded-lg card-glow">
              <h3 className="text-xl font-semibold mb-3 text-accent">Graphics &amp; Performance</h3>
              <p className="text-gray-300">3 Patti Blue App features bright, smooth graphics that make the game look attractive and fun to play. The cards, tables, and game animations are straightforward to see, which improves the overall experience. The app is designed to run fast without lag and load quickly for smooth gameplay. Smooth performance means you can play the game without delays or crashes, even when playing online with others.</p>
            </div>
            <div className="bg-secondary px-8 py-8 rounded-lg card-glow">
              <h3 className="text-xl font-semibold mb-3 text-accent">Tournaments &amp; Events</h3>
              <p className="text-gray-300">3 Patti Blue offers exciting tournaments and special events that give players more chances to win big rewards. In tournaments, many players compete for top positions and prizes. Events are held regularly, especially during holidays or special occasions, and often include bonuses, challenges, and high rewards.</p>
            </div>
            <div className="bg-secondary px-8 py-8 rounded-lg card-glow">
              <h3 className="text-xl font-semibold mb-3 text-accent">Multiple Game Modes</h3>
              <p className="text-gray-300">It offers different game modes so players can choose how they want to play. You can enjoy classic Teen Patti, fast games, high-stakes tables, and other modes like Dragon vs Tiger or Roulette, depending on what is available. Each mode has its own style and rules, giving variety and more fun for all types of players.</p>
            </div>
            <div className="bg-secondary px-8 py-8 rounded-lg card-glow">
              <h3 className="text-xl font-semibold mb-3 text-accent">Invite &amp; Earn</h3>
              <p className="text-gray-300">This app allows you to invite your friends to join the game. By spending an invitation, you can play together at the same table, compete, and have more fun. The app also offers rewards or bonus chips when friends join through your link. This feature makes it more social and enjoyable, letting you connect with friends while playing and earn extra benefits. <Link href="/blog/3-patti-blue-referral-code-earn-commission" className="text-accent hover:underline font-medium">Read the full referral guide →</Link></p>
            </div>
            <div className="bg-secondary px-8 py-8 rounded-lg card-glow">
              <h3 className="text-xl font-semibold mb-3 text-accent">Advanced Security</h3>
              <p className="text-gray-300">3 Patti Blue uses advanced security features to protect players' personal information and transactions. All data, including account details and payments, is kept safe with encryption and a secure system. This game ensures that unauthorised players cannot access chips, winnings, and financial information.</p>
            </div>
            <div className="bg-secondary px-8 py-8 rounded-lg card-glow">
              <h3 className="text-xl font-semibold mb-3 text-accent">Customer Support</h3>
              <p className="text-gray-300">3 Patti Blue provides customer support to help players with any problems or questions. If you encounter issues such as login problems, payment issues, or game errors, you can contact the support team through the app or by email. The support team replies to messages, guides you step by step, and solves your concerns quickly.</p>
            </div>
            <div className="bg-secondary px-8 py-8 rounded-lg card-glow md:col-span-2 lg:col-span-1">
              <h3 className="text-xl font-semibold mb-3 text-accent">Realistic Sound Effects</h3>
              <p className="text-gray-300">This game features realistic effects that make it more exciting and immersive. From the shuffling of cards to the winning celebrations, every sound is designed to feel like a real casino experience. With realistic audio, players feel more connected to the game and the thrill of winning.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Gaming Categories */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Top Gaming Categories of the 3 Patti Blue APK</h2>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-[#FFA500]">Table Games</h3>
            <p className="text-gray-300 mb-4">3 Patti Blue offers a variety of table games that bring the casino feel to your phone. Some popular table games include:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className="bg-[#0A1029] p-4 rounded-lg"><p className="text-white font-medium">Andar Bahar</p></div>
              <div className="bg-[#0A1029] p-4 rounded-lg"><p className="text-white font-medium">Dragon vs Tiger</p></div>
              <div className="bg-[#0A1029] p-4 rounded-lg"><p className="text-white font-medium">Roulette</p></div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-[#FFA500]">Slot Games</h3>
            <p className="text-gray-300 mb-4">This app includes exciting slot games that are easy to play and offer big rewards. Players can win quickly and enjoy colourful animations while playing, adding more excitement along with card and table games. Some slot games in the app are:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className="bg-[#0A1029] p-4 rounded-lg"><p className="text-white font-medium">777 Bingo</p></div>
              <div className="bg-[#0A1029] p-4 rounded-lg"><p className="text-white font-medium">Fruit Line</p></div>
              <div className="bg-[#0A1029] p-4 rounded-lg"><p className="text-white font-medium">Sweet Bonanza</p></div>
              <div className="bg-[#0A1029] p-4 rounded-lg"><p className="text-white font-medium">Crash</p></div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-[#FFA500]">Teen Patti Games</h3>
            <p className="text-gray-300 mb-4">Teen Patti in 3 Patti Blue offers a variety of game modes, making it more fun and exciting. Players cannot play the same game because each mode has its own style and rules. Some Teen Patti games in the app are:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className="bg-[#0A1029] p-4 rounded-lg"><p className="text-white font-medium">Joker</p></div>
              <div className="bg-[#0A1029] p-4 rounded-lg"><p className="text-white font-medium">10 Cards</p></div>
              <div className="bg-[#0A1029] p-4 rounded-lg"><p className="text-white font-medium">Muflis</p></div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-[#FFA500]">Casino Games</h3>
            <p className="text-gray-300 mb-4">3 Patti Blue offers casino games alongside card and Teen Patti games. These games give players an authentic casino experience with fun bets, quick wins, and colourful graphics. Some popular casino games in the app are:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className="bg-[#0A1029] p-4 rounded-lg"><p className="text-white font-medium">Blackjack</p></div>
              <div className="bg-[#0A1029] p-4 rounded-lg"><p className="text-white font-medium">Car Roulette</p></div>
              <div className="bg-[#0A1029] p-4 rounded-lg"><p className="text-white font-medium">God of Fortune</p></div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-[#FFA500]">Real Cash Games</h3>
            <p className="text-gray-300 mb-4">It offers desi-style games that are very popular in Pakistan. These games are loved for their local, familiar style and simple controls.</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className="bg-[#0A1029] p-4 rounded-lg"><p className="text-white font-medium">Andar Bahar</p></div>
              <div className="bg-[#0A1029] p-4 rounded-lg"><p className="text-white font-medium">Rummy</p></div>
              <div className="bg-[#0A1029] p-4 rounded-lg"><p className="text-white font-medium">Sports</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Download */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">How to Download 3 Patti Blue Latest for Android?</h2>
          <p className="text-gray-300 mb-4">To download the 3 Patti Blue on Android phones, you just need to follow the simple steps to get started:</p>
          <div className="space-y-4">
            <div className="bg-[#0A1029] p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-[#FFA500]">01: Find a Reliable Source</h3>
              <p className="text-gray-300">Open the browser and find a trusted source to download the latest version of the 3 Patti Blue APK file. Make sure the site is secure and safe to avoid harmful files.</p>
            </div>
            <div className="bg-[#0A1029] p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-[#FFA500]">02: Enable Unknown Sources</h3>
              <p className="text-gray-300">Go to the phone settings and enable unknown sources, which allows your browser to install apps from outside the Play Store.</p>
            </div>
            <div className="bg-[#0A1029] p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-[#FFA500]">03: Download the APK File</h3>
              <p className="text-gray-300">Tap the download button and wait for the APK file to save on your device. File size may vary depending on the version.</p>
            </div>
            <div className="bg-[#0A1029] p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-[#FFA500]">04: Install the File</h3>
              <p className="text-gray-300">Once downloaded, go to the file manager and tap to install the app. Wait until the installation completes on your device.</p>
            </div>
            <div className="bg-[#0A1029] p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-[#FFA500]">05: Launch &amp; Play</h3>
              <p className="text-gray-300">Now, open the app, and start playing your favorite games to earn real cash. You must keep the app updated to access new features and improve security.</p>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <a 
              href="https://pk3pattiblue.com/?from_gameid=7852455&channelCode=100000"
              target="_blank"
              rel="noopener noreferrer"
              className="download-btn bg-transparent hover:bg-[#0ea5e9]/10 text-white font-bold py-4 px-8 rounded-full inline-flex items-center transition-all shadow-lg hover:shadow-xl border-2 border-[#0ea5e9]"
            >
              <span className="text-lg">DOWNLOAD NOW</span>
              <div className="download-icon ml-2 bg-[#f97316] rounded-full p-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">System Requirements &amp; Compatibility</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#0A1029] p-4 rounded-lg">
              <h3 className="font-semibold text-[#FFA500] mb-1">01: Android Version</h3>
              <p className="text-gray-300">You need Android version 7.0 or higher to play the game smoothly.</p>
            </div>
            <div className="bg-[#0A1029] p-4 rounded-lg">
              <h3 className="font-semibold text-[#FFA500] mb-1">02: RAM</h3>
              <p className="text-gray-300">At least 2 GB of RAM is recommended for better performance.</p>
            </div>
            <div className="bg-[#0A1029] p-4 rounded-lg">
              <h3 className="font-semibold text-[#FFA500] mb-1">03: Storage Space</h3>
              <p className="text-gray-300">A minimum of 500 MB of free space is required to download the latest version of the game.</p>
            </div>
            <div className="bg-[#0A1029] p-4 rounded-lg">
              <h3 className="font-semibold text-[#FFA500] mb-1">04: Internet Connection</h3>
              <p className="text-gray-300">A stable internet connection is required for smooth gameplay of 3 Patti Blue.</p>
            </div>
            <div className="bg-[#0A1029] p-4 rounded-lg">
              <h3 className="font-semibold text-[#FFA500] mb-1">05: Supported Device</h3>
              <p className="text-gray-300">The game works on both mid-range and high-end devices.</p>
            </div>
            <div className="bg-[#0A1029] p-4 rounded-lg">
              <h3 className="font-semibold text-[#FFA500] mb-1">06: Compatible Device</h3>
              <p className="text-gray-300">You can play on Android Phones or PC by using emulators like BlueStacks. <Link href="/3-patti-blue-for-pc" className="text-accent hover:underline font-medium">See our full PC guide →</Link></p>
            </div>
          </div>
        </div>
      </section>

      {/* Register & Login */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">How to Register an Account on the 3 Patti Blue App?</h2>
          <div className="mb-8">
            <ol className="list-decimal pl-5 space-y-3 text-gray-300">
              <li>Open the app and select "Play as Guest."</li>
              <li>Click the profile button and bind your phone number or email.</li>
              <li>You will receive an OTP at the email address you provided.</li>
              <li>Enter the OTP to verify the identity of your profile.</li>
              <li>Now, set a strong password that should not be easily guessed.</li>
              <li>Ensure all the details are correct, and tap submit to register your account.</li>
              <li>Now, you can play your favorite games and earn real cash without any worry.</li>
            </ol>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">How to Log in to an Account on 3 Patti Blue?</h2>
          <div>
            <ol className="list-decimal pl-5 space-y-3 text-gray-300">
              <li>Open the 3 Patti Blue App on your device.</li>
              <li>Tap on the login button to log in to your account.</li>
              <li>Enter your registered Email and password.</li>
              <li>Now, confirm all the details, then tap login.</li>
              <li>Once logged in, you can continue playing games to earn real cash.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Deposit & Withdrawal */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-secondary rounded-xl p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Deposit Money</h2>
            <ol className="list-decimal pl-5 space-y-3 text-gray-300">
              <li>Open the app and go to the game's main menu.</li>
              <li>Tap on the deposit button to deposit money into the game.</li>
              <li>Choose a payment method, such as JazzCash or Easy Paisa.</li>
              <li>Enter the amount that you want to deposit.</li>
              <li>Enter your account details, such as your wallet number and name.</li>
              <li>Now, enter your transaction password to complete the deposit.</li>
              <li>Wait a few minutes, and the money will be added to your account so you can start playing games without delay.</li>
            </ol>
          </div>
          <div className="bg-secondary rounded-xl p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Withdraw Money</h2>
            <ol className="list-decimal pl-5 space-y-3 text-gray-300">
              <li>Open the 3Patti Blue app on your device.</li>
              <li>Go to the wallet section and tap the withdrawal button.</li>
              <li>Add your preferred payment method, such as JazzCash or Easy Paisa.</li>
              <li>Enter all required details for your preferred payment method, then tap confirm.</li>
              <li>Once confirmed, the money will be transferred to your account in no time.</li>
              <li>You can now use or enjoy your withdrawn funds safely and quickly.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* How to Earn Real Money */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">How to Earn Real Money in the 3 Patti Blue Game?</h2>
          <p className="text-gray-300 mb-6">You can earn real money in 3 Patti Blue in many different ways.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#0A1029] p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-[#FFA500]">01: Welcome Bonus</h3>
              <p className="text-gray-300">When you first join the game, you can receive a welcome bonus of free chips or rewards. This bonus gives you a good start without spending the money and helps you practice and play more games right away.</p>
            </div>
            <div className="bg-[#0A1029] p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-[#FFA500]">02: Daily Rewards</h3>
              <p className="text-gray-300">You can get daily rewards by logging in to the app each day. These rewards often include free chips or bonuses that help you play more games without spending real money. Collecting daily rewards regularly increases your chips balance and gives more chances to win.</p>
            </div>
            <div className="bg-[#0A1029] p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-[#FFA500]">03: Play and Win</h3>
              <p className="text-gray-300">You can earn real money by playing and winning games in this app. Games like Teen Patti, Andar Bahar, and Rummy let you compete with others and earn rewards when you win. The more games you win, the more real money or chips you can earn.</p>
            </div>
            <div className="bg-[#0A1029] p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-[#FFA500]">04: Join Tournaments</h3>
              <p className="text-gray-300">You can earn real money by joining tournaments. Tournaments are special competitions where players compete for big prizes. If you play well and finish in the top positions, you can win extra rewards and cash.</p>
            </div>
            <div className="bg-[#0A1029] p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-[#FFA500]">05: Invite Friends</h3>
              <p className="text-gray-300">You can earn real money in the 3 Patti Blue App by inviting your friends to play. Share your referral link with them. When they join the game using the link, you get a bonus and rewards. The more friends you invite, the more rewards and cash you can earn.</p>
            </div>
            <div className="bg-[#0A1029] p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-[#FFA500]">06: Cashback Offer</h3>
              <p className="text-gray-300">You can get a cashback offer that returns a portion of your money after certain activities, like your first withdrawal or a specific deposit.</p>
            </div>
            <div className="bg-[#0A1029] p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-[#FFA500]">07: Playing Smart</h3>
              <p className="text-gray-300">Playing smart in a game means using strategies rather than relying solely on luck. Make small bets, watch other players, and fold when your hands are weak. Playing smart helps you reduce losses and increase your chance of winning.</p>
            </div>
            <div className="bg-[#0A1029] p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-[#FFA500]">08: Special Events</h3>
              <p className="text-gray-300">Special events are limited-time games or challenges that offer extra rewards and big prizes. These events often give players more chances to win free chips, bonuses, or cash.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tips to Win */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Tips to Win More Money on 3 Patti Blue Game</h2>
          <div className="space-y-4">
            <ul className="list-disc pl-5 space-y-3 text-gray-300">
              <li><strong>Learn the Rules:</strong> Before playing 3 Patti Blue, make sure you understand the game rules. Understanding how betting rounds work helps you make better decisions. Understanding the rules also makes the game more enjoyable and less confusing.</li>
              <li><strong>Claim Daily Bonus:</strong> Take advantage of daily bonuses, rewards, and free chips in games. These bonuses give you extra chips to play additional rounds without spending real money.</li>
              <li><strong>Start With a Small Bet:</strong> When you start playing for the first time in the game, first bet a small amount. This helps you learn the game and practice without losing too many chips.</li>
              <li><strong>Choose the Right Mode:</strong> Try out the different modes and choose the one that best matches your playing style. Picking the proper mode helps you to play better and enjoy the game more.</li>
              <li><strong>Manage Your Chips:</strong> Use your chips carefully and do not put all of them in one game. Make small bets, so you can play the game longer and not lose everything at once.</li>
              <li><strong>Watch other Players:</strong> Pay attention to how other players bet and play. By observing their patterns and strategies, you can make smarter decisions and increase your chance of winning.</li>
              <li><strong>Focus on one Game:</strong> Focusing on one game helps you make better decisions, observe opponents more clearly, and manage your chips more effectively, increasing your chances of winning.</li>
              <li><strong>Bluff Smartly:</strong> You can sometimes pretend to be a strong player to make opponents fold. Use bluffing carefully because overusing it can make others catch on and reduce its effectiveness.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3 Patti Blue vs Others */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">3 Patti Blue vs other 3 Patti Games</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#FFA500]">3 Patti Blue</h3>
              <div className="bg-[#0A1029] px-8 py-8 rounded-lg">
                <ul className="list-disc pl-5 space-y-3 text-gray-300">
                  <li>Offers many modes, including classic, Joker, Muflis, AK-47, and more.</li>
                  <li>Players get daily free chips and daily bonuses.</li>
                  <li>Supports deposits and withdrawals with real money.</li>
                  <li>Works with local payment methods, like Easypaisa and Jazzcash.</li>
                  <li>Regular competitions with big prizes.</li>
                  <li>Play your favorite games to earn real cash.</li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#FFA500]">Other 3 Patti Games</h3>
              <div className="bg-[#0A1029] px-8 py-8 rounded-lg">
                <ul className="list-disc pl-5 space-y-3 text-gray-300">
                  <li>Usually play standard Teen Patti with a few modes.</li>
                  <li>There are no daily rewards or free chips.</li>
                  <li>Many games do not allow real money play.</li>
                  <li>May not support local payment methods.</li>
                  <li>Less frequent tournaments and special events.</li>
                  <li>More basic design and gameplay without extra perks.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Is it Safe */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Is the 3 Patti Blue App Safe to Use?</h2>
          <p className="text-gray-300 leading-relaxed">
            3 Patti Blue is safe and secure to use if you download from a trusted website and follow the safety steps. The app uses security features to protect your accounts and transactions, and supports secure payment methods such as JazzCash and Easy Paisa for deposits and withdrawals. Make sure your device has up-to-date antivirus software, never share your account information or passwords, and only play on official, trusted sites to avoid fake versions. Playing responsibly and protecting your personal information helps keep your gameplay experience secure. <Link href="/blog/is-3-patti-blue-safe-security-analysis" className="text-accent hover:underline font-medium">Read the full security analysis →</Link>
          </p>
        </div>
      </section>

      {/* Pros and Cons */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Pros and Cons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">Pros</h3>
              <div className="bg-[#0A1029] px-8 py-8 rounded-lg">
                <ul className="list-disc pl-5 space-y-3 text-gray-300">
                  <li>Easy to play and Suitable for beginners</li>
                  <li>Smooth and Realistic Gameplay</li>
                  <li>Large and active player community</li>
                  <li>Daily bonus and free chips</li>
                  <li>Many events and tournaments to win rewards</li>
                  <li>Fast deposit and withdrawal options</li>
                  <li>Works well on Android devices</li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">Cons</h3>
              <div className="bg-[#0A1029] px-8 py-8 rounded-lg">
                <ul className="list-disc pl-5 space-y-3 text-gray-300">
                  <li>Not available on the Google Play Store</li>
                  <li>Ads may appear on screen</li>
                  <li>Require a stable internet connection</li>
                  <li>No legal Support Available</li>
                  <li>Risk of losing Money</li>
                  <li>Some features require real money</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Conclusion</h2>
          <p className="text-gray-300 leading-relaxed">
            3 Patti Blue, also known as Teen Patti Blue, is a popular and entertaining game app that brings the classic Teen Patti experience to your Android device. It offers many game modes, daily bonuses, events, tournaments, and real cash opportunities, making it fun for both beginners and experienced players. It has a user-friendly interface and helps its players earn money while enjoying their favourite games. 3 Patti Blue APK is a fun and exciting game with many features, but it should be played responsibly and with smart decisions for the best experience.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pt-12 pb-4 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="group bg-[#0a1029]/50 rounded-xl border border-gray-700 hover:border-[#FFA500]/50 transition-all duration-300 shadow-md hover:shadow-lg">
              <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium hover:text-[#FFA500] transition-colors">
                Is 3 Patti Blue legal in Pakistan?
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <div className="p-4 pt-0 text-gray-300 border-t border-gray-700/50">
                Yes, it is legal and safe to use in Pakistan. The app is designed for entertainment and uses chips instead of direct cash betting.
              </div>
            </details>

            <details className="group bg-[#0a1029]/50 rounded-xl border border-gray-700 hover:border-[#FFA500]/50 transition-all duration-300 shadow-md hover:shadow-lg">
              <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium hover:text-[#FFA500] transition-colors">
                Is 3 Patti Blue free to use?
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <div className="p-4 pt-0 text-gray-300 border-t border-gray-700/50">
                Yes, you can play the game with free chips and rewards that make this platform exciting.
              </div>
            </details>

            <details className="group bg-[#0a1029]/50 rounded-xl border border-gray-700 hover:border-[#FFA500]/50 transition-all duration-300 shadow-md hover:shadow-lg">
              <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium hover:text-[#FFA500] transition-colors">
                How can I deposit money into 3 Patti Blue?
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <div className="p-4 pt-0 text-gray-300 border-t border-gray-700/50">
                You can deposit money using local payment methods like JazzCash and Easy Paisa to start playing games.
              </div>
            </details>

            <details className="group bg-[#0a1029]/50 rounded-xl border border-gray-700 hover:border-[#FFA500]/50 transition-all duration-300 shadow-md hover:shadow-lg">
              <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium hover:text-[#FFA500] transition-colors">
                Are there bonuses in 3 Patti Blue?
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <div className="p-4 pt-0 text-gray-300 border-t border-gray-700/50">
                Yes, players get welcome bonuses, daily rewards, cashback, and referral bonuses to help them play more.
              </div>
            </details>

            <details className="group bg-[#0a1029]/50 rounded-xl border border-gray-700 hover:border-[#FFA500]/50 transition-all duration-300 shadow-md hover:shadow-lg">
              <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium hover:text-[#FFA500] transition-colors">
                Can I download the 3Patti Blue App on a PC?
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <div className="p-4 pt-0 text-gray-300 border-t border-gray-700/50">
                Yes, the 3 Patti Blue APK can also be downloaded on a PC using a dedicated emulator such as BlueStacks or NOX Player.
              </div>
            </details>

            <details className="group bg-[#0a1029]/50 rounded-xl border border-gray-700 hover:border-[#FFA500]/50 transition-all duration-300 shadow-md hover:shadow-lg">
              <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium hover:text-[#FFA500] transition-colors">
                How can I invite friends to the 3 Patti Blue?
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <div className="p-4 pt-0 text-gray-300 border-t border-gray-700/50">
                You can invite your friends by using your referral link. When they join the link, you get a bonus and free chips.
              </div>
            </details>

            <details className="group bg-[#0a1029]/50 rounded-xl border border-gray-700 hover:border-[#FFA500]/50 transition-all duration-300 shadow-md hover:shadow-lg">
              <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium hover:text-[#FFA500] transition-colors">
                What are the popular games on 3 Patti Blue?
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <div className="p-4 pt-0 text-gray-300 border-t border-gray-700/50">
                Games like Teen Patti, Andar Bahar, Dragon vs Tiger, Roulette, and slot games like Sweet Bonanza and 777 Bingo are Popular on the 3Patti Blue.
              </div>
            </details>

            <details className="group bg-[#0a1029]/50 rounded-xl border border-gray-700 hover:border-[#FFA500]/50 transition-all duration-300 shadow-md hover:shadow-lg">
              <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium hover:text-[#FFA500] transition-colors">
                Is 3 Patti Blue safe to use?
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <div className="p-4 pt-0 text-gray-300 border-t border-gray-700/50">
                Yes, the 3 Patti Blue App is safe and secure to use. The app uses advanced security features to protect your personal information and transactions.
              </div>
            </details>
          </div>
        </div>
      </section>
    </>
  );
}
