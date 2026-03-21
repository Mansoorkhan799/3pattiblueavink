import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';

export const metadata: Metadata = {
  title: '3 Patti Blue Login in Pakistan | Step by Step Guide',
  description: 'How to login to 3 Patti Blue account in Pakistan. Step-by-step guide: download the app, create account, OTP verification, and fix common login problems.',
  keywords: [
    '3 patti blue login',
    '3 patti blue account create',
    'signup kaise kare 3 patti blue',
    '3 patti blue register pakistan',
    '3 patti blue OTP verification',
    '3 patti blue login problem',
    '3pattiblue login guide',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  alternates: { canonical: 'https://3pattiblue.pk/3-patti-blue-login' },
};

export default function PattiBlueLoginPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: '3 Patti Blue Login in Pakistan',
    description: 'Step-by-step guide to login to your 3 Patti Blue account in Pakistan.',
    step: [
      { '@type': 'HowToStep', name: 'Open official Website', text: 'Visit 3pattiblue.pk and download the 3 Patti Blue APK.' },
      { '@type': 'HowToStep', name: 'Open the App', text: 'Open the app and tap "Play as Guest" or "Login".' },
      { '@type': 'HowToStep', name: 'Create an Account', text: 'Fill in your ID, password, email, and phone number, then press submit.' },
      { '@type': 'HowToStep', name: 'Verify your Account', text: 'Click the verification link sent to your Gmail or enter the OTP sent to your number.' },
      { '@type': 'HowToStep', name: 'Log in', text: 'Enter your email and password and press enter to access your account.' },
    ],
  };

  return (
    <main className="min-h-screen bg-[#060A20]">
      <Script id="login-schema" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <nav className="mb-8 text-sm text-gray-400">
          <Link href="/" className="hover:text-[#FFA500]">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-white">3 Patti Blue Login</span>
        </nav>

        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            3 Patti Blue Login in Pakistan | Step by Step Guide
          </h1>
          <div className="flex items-center gap-4 text-gray-400 text-sm">
            <time dateTime="2026-01-04">January 4, 2026</time>
            <span>•</span>
            <span>7 min read</span>
          </div>
        </header>

        <div className="prose prose-invert prose-lg max-w-none space-y-8">
          <p className="text-xl text-gray-300 leading-relaxed">
            <Link href="/" className="text-[#FFA500] hover:underline font-semibold">3 Patti Blue</Link> has emerged as the most-played online casino game in Pakistan. The game provides the best way to earn money without any restrictions. If you are a beginner and do not know how to login, this step-by-step guide covers everything — including how to fix common login problems.
          </p>

          <div className="flex justify-center my-6">
            <Image
              src="/3-patti-blue.webp"
              alt="3 Patti Blue Login – Step by Step Guide Pakistan"
              width={300}
              height={300}
              className="rounded-xl"
              quality={80}
            />
          </div>

          <section>
            <h2 className="text-3xl font-bold text-[#FFA500] mb-6">Step-by-Step Login Guide</h2>
            <div className="space-y-5">
              <div className="bg-[#0A1029] p-6 rounded-xl border-l-4 border-[#FFA500]">
                <h3 className="text-lg font-bold text-white mb-2">Step 1: Open the Official Website</h3>
                <p className="text-gray-300">Visit <strong className="text-white">3pattiblue.pk</strong> to download the official 3 Patti Blue APK. Always download from the official site to avoid fake versions.</p>
              </div>
              <div className="bg-[#0A1029] p-6 rounded-xl border-l-4 border-[#FFA500]">
                <h3 className="text-lg font-bold text-white mb-2">Step 2: Open the App</h3>
                <p className="text-gray-300">Once the app is installed and opened, you will see two options: <strong className="text-white">Login</strong> and <strong className="text-white">Play as Guest</strong>. If you are a new user, tap Play as Guest to explore the app, or tap Login if you already have an account.</p>
              </div>
              <div className="bg-[#0A1029] p-6 rounded-xl border-l-4 border-[#FFA500]">
                <h3 className="text-lg font-bold text-white mb-2">Step 3: Create an Account</h3>
                <p className="text-gray-300">Tap your profile picture at the top left and fill in your details — set your ID and password, provide a valid email address and phone number, complete the captcha, then press <strong className="text-white">Submit</strong>.</p>
              </div>
              <div className="bg-[#0A1029] p-6 rounded-xl border-l-4 border-[#FFA500]">
                <h3 className="text-lg font-bold text-white mb-2">Step 4: Verify Your Account</h3>
                <p className="text-gray-300">After creating your account, a verification link is sent to your Gmail and an OTP to your phone number. Click the link in the email — if you do not see it, check your spam folder. Enter the OTP to complete verification.</p>
              </div>
              <div className="bg-[#0A1029] p-6 rounded-xl border-l-4 border-[#FFA500]">
                <h3 className="text-lg font-bold text-white mb-2">Step 5: Log in to Your Account</h3>
                <p className="text-gray-300">Open the game and enter your registered <strong className="text-white">email and password</strong>, then press enter. You can now withdraw and deposit money, enjoy games, and earn real cash.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-[#FFA500] mb-4">3 Patti Blue Login Problems & Fixes</h2>
            <div className="bg-[#0A1029] p-6 rounded-xl space-y-4">
              <p className="text-gray-300 leading-relaxed">Sometimes you may face login issues due to an error in the IP servers. This is a common problem faced by many players. Try the following fixes:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>Wait a few minutes and try again</li>
                <li>Clear all cache from your phone settings</li>
                <li>Try using a VPN while logging in — this resolves most IP-related issues</li>
                <li>Make sure you are using the latest version of the app</li>
                <li>Restart your phone and try again</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-[#FFA500] mb-4">Forgot Your Password?</h2>
            <div className="bg-[#0A1029] p-6 rounded-xl">
              <p className="text-gray-300 leading-relaxed">Tap the <strong className="text-white">Forgot Password</strong> option on the login page. Enter your registered email address and a recovery link will be sent to you. Click the link to regain access to your account. If you need more help, contact the customer support team through the app.</p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-[#FFA500] mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: 'Can we earn real money from 3 Patti Blue?', a: 'Yes, you can earn real money from this game and withdraw it directly to your JazzCash or EasyPaisa account.' },
                { q: 'What should I do if I forget my password?', a: 'Press Forgot Password on the login page, enter your email, and follow the recovery link sent to your inbox.' },
                { q: 'Can I login on multiple devices?', a: 'Yes, but you need to remove your account from the previous device first before logging in on a new one.' },
                { q: 'Is 3 Patti Blue safe to use in Pakistan?', a: 'Yes, the app uses advanced security features to protect your personal information and financial transactions.' },
              ].map((faq) => (
                <details key={faq.q} className="group bg-[#0a1029]/50 rounded-xl border border-gray-700 hover:border-[#FFA500]/50 transition-all duration-300">
                  <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium hover:text-[#FFA500] transition-colors">
                    {faq.q}
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6" /></svg>
                    </span>
                  </summary>
                  <div className="p-4 pt-0 text-gray-300 border-t border-gray-700/50">{faq.a}</div>
                </details>
              ))}
            </div>
          </section>

          <div className="flex justify-center mt-8">
            <a href="https://pk3pattiblue.com/?from_gameid=7852455&channelCode=100000" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-8 py-4 text-white font-semibold text-lg rounded-full border-2 border-[#0ea5e9] hover:bg-[#0ea5e9]/10 transition-all">
              Download 3 Patti Blue →
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
