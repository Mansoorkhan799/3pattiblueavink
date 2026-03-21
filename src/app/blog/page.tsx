import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '3 Patti Blue Blog - Guides, Tips, Reviews & Tutorials 2026',
  description: 'Complete 3 Patti Blue blog 2026: Installation guides, game tutorials, deposit & withdrawal guides, security reviews, earning tips, and app comparisons for Pakistani players.',
  keywords: [
    '3 patti blue blog',
    '3 patti blue guide',
    '3 patti blue review 2026',
    '3 patti blue tips',
    '3 patti blue tutorial',
    '3 patti blue how to play',
    '3 patti blue pakistan',
    '3 patti blue earning guide',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://3pattiblue.pk/blog',
  },
};

const posts = [
  {
    slug: '3-patti-blue-app-review',
    title: '3 Patti Blue App Review: Pros, Cons & User Experience',
    description: 'Honest, complete review of 3 Patti Blue: game variety, payment speed, bonuses, security, and whether it is worth downloading for Pakistani players.',
    date: 'January 2026',
    readTime: '15 min read',
    featured: true,
  },
  {
    slug: 'install-3-patti-blue-android-guide',
    title: 'How to Install 3 Patti Blue on Android Phone (Step-by-Step)',
    description: 'Complete installation guide for 3 Patti Blue APK: enable unknown sources, download safely, install, and start earning real money in Pakistan.',
    date: 'January 2026',
    readTime: '7 min read',
  },
  {
    slug: '3-patti-blue-vs-3-patti-lucky-comparison',
    title: '3 Patti Blue vs 3 Patti Lucky: Which is Better for Pakistani Players?',
    description: 'Complete feature comparison: bonuses, games, payment methods, withdrawal speed. Find the best 3 Patti app for earning real money in Pakistan.',
    date: 'January 2026',
    readTime: '10 min read',
  },
  {
    slug: 'top-5-real-money-gaming-apps-pakistan',
    title: 'Top 5 Real Money Gaming Apps in Pakistan',
    description: 'Compare the top 5 real money gaming apps in Pakistan. See how 3 Patti Blue stacks up against the competition in games, bonuses, and payment speed.',
    date: 'January 2026',
    readTime: '12 min read',
  },
  {
    slug: '3-patti-blue-referral-code-earn-commission',
    title: '3 Patti Blue Referral Code: Earn 30% Commission Guide',
    description: 'How to find your referral code, share it via WhatsApp and Facebook, track earnings, and maximize your commission income from 3 Patti Blue.',
    date: 'January 2026',
    readTime: '8 min read',
  },
  {
    slug: '3-patti-blue-welcome-bonus-free-pkr',
    title: '3 Patti Blue Welcome Bonus: How to Claim Your Free Bonus',
    description: 'Step-by-step guide to claim your 3 Patti Blue signup bonus, understand bonus rules, and use free chips strategically to maximize early earnings.',
    date: 'January 2026',
    readTime: '7 min read',
  },
  {
    slug: 'all-games-on-3-patti-blue-complete-list',
    title: 'All 23+ Games on 3 Patti Blue Explained (Complete List)',
    description: 'Comprehensive guide to every game on 3 Patti Blue: Teen Patti modes, table games, casino games, slots, Jili Slots, and Fishing Games with rules and tips.',
    date: 'January 2026',
    readTime: '14 min read',
  },
  {
    slug: 'dragon-vs-tiger-game-guide-rules-winning',
    title: 'Dragon vs Tiger Game Guide: Rules and Winning Formula',
    description: 'Complete Dragon vs Tiger guide: card values, betting options explained, proven winning strategies, and common mistakes to avoid on 3 Patti Blue.',
    date: 'January 2026',
    readTime: '10 min read',
  },
  {
    slug: 'forgot-3-patti-blue-password-account-recovery',
    title: 'Forgot 3 Patti Blue Password? Account Recovery Guide',
    description: 'Step-by-step guide to reset your 3 Patti Blue password via phone OTP or email, recover account access, and prevent future lockouts.',
    date: 'January 2026',
    readTime: '6 min read',
  },
  {
    slug: 'is-3-patti-blue-safe-security-analysis',
    title: 'Is 3 Patti Blue Safe? Security Analysis for Pakistani Users',
    description: 'Complete security analysis: data encryption, payment safety, how to identify fake apps, and how to play 3 Patti Blue safely in Pakistan.',
    date: 'January 2026',
    readTime: '10 min read',
  },
  {
    slug: '3-patti-blue-not-working-problems-solutions',
    title: '3 Patti Blue Not Working? Common Problems & Solutions',
    description: 'Fix all 3 Patti Blue issues: installation errors, app crashes, loading problems, login failures, payment issues, and when to contact customer support.',
    date: 'January 2026',
    readTime: '11 min read',
  },
];

export default function Blog() {
  const [featuredPost, ...regularPosts] = posts;

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-3 text-accent">3 Patti Blue Blog</h1>
      <p className="text-gray-300 mb-10 text-lg">Complete guides, tutorials, and reviews for 3 Patti Blue players in Pakistan</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Featured Post */}
        <div className="bg-secondary px-8 py-8 rounded-lg hover:shadow-lg transition-all border-2 border-[#FFA500]">
          <div className="inline-block bg-[#FFA500] text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
            ⭐ FEATURED
          </div>
          <h2 className="text-2xl font-bold mb-4 text-white">{featuredPost.title}</h2>
          <p className="text-gray-300 mb-4">{featuredPost.description}</p>
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <span>📅 {featuredPost.date}</span>
            <span>•</span>
            <span>{featuredPost.readTime}</span>
          </div>
          <Link href={`/blog/${featuredPost.slug}`} className="text-accent hover:underline font-semibold">
            Read More →
          </Link>
        </div>

        {/* Regular Posts */}
        {regularPosts.map((post) => (
          <div key={post.slug} className="bg-secondary px-8 py-8 rounded-lg hover:shadow-lg transition-all border-2 border-gray-700 hover:border-accent">
            <h2 className="text-2xl font-bold mb-4 text-white">{post.title}</h2>
            <p className="text-gray-300 mb-4">{post.description}</p>
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
              <span>📅 {post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <Link href={`/blog/${post.slug}`} className="text-accent hover:underline font-semibold">
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
