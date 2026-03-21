import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://3pattiblue.pk';
  
  // Define page type
  type PageType = {
    url: string;
    lastMod: string;
    changeFreq: string;
    priority: number;
    images?: Array<{
      loc: string;
      title: string;
      caption: string;
    }>;
  };
  
  // Main pages with high priority
  const mainPages: PageType[] = [
    {
      url: '/',
      lastMod: new Date().toISOString(),
      changeFreq: 'daily',
      priority: 1.0,
      images: [
        {
          loc: '/3-patti-blue.webp',
          title: '3 Patti Blue - Official App Icon and Brand Image',
          caption: "Card Rummy - Pakistan's #1 card game app. Play Teen Patti, Rummy, Dragon vs Tiger. Download 3 Patti Blue APK for Android."
        },
        {
          loc: '/3-patti-blue-logo.webp',
          title: '3 Patti Blue Official Logo',
          caption: "Official 3 Patti Blue logo - Top earning gaming app in Pakistan"
        }
      ]
    },
    {
      url: '/download-3-patti-blue',
      lastMod: new Date().toISOString(),
      changeFreq: 'weekly',
      priority: 0.9,
      images: [
        {
          loc: '/3-patti-blue.webp',
          title: 'Download 3 Patti Blue',
          caption: 'Download 3 Patti Blue APK for Android'
        }
      ]
    },
    {
      url: '/add-money-in-3-patti-blue',
      lastMod: new Date().toISOString(),
      changeFreq: 'weekly',
      priority: 0.9
    },
    {
      url: '/withdraw-money-from-3-patti-blue',
      lastMod: new Date().toISOString(),
      changeFreq: 'weekly',
      priority: 0.9
    },
    {
      url: '/3-patti-blue-for-pc',
      lastMod: new Date().toISOString(),
      changeFreq: 'weekly',
      priority: 0.9,
      images: [
        {
          loc: '/3-patti-blue.webp',
          title: '3 Patti Blue for PC',
          caption: 'Play 3 Patti Blue on PC using Android Emulator'
        }
      ]
    },
    {
      url: '/3-patti-blue-login',
      lastMod: new Date().toISOString(),
      changeFreq: 'weekly',
      priority: 0.9
    },
    {
      url: '/about-us',
      lastMod: new Date().toISOString(),
      changeFreq: 'monthly',
      priority: 0.7,
      images: [
        {
          loc: '/3-patti-blue.webp',
          title: 'About 3 Patti Blue',
          caption: 'Learn about 3 Patti Blue gaming app'
        }
      ]
    },
    {
      url: '/blog',
      lastMod: new Date().toISOString(),
      changeFreq: 'weekly',
      priority: 0.8,
      images: [
        {
          loc: '/3-patti-blue.webp',
          title: '3 Patti Blue Blog',
          caption: 'Guides and tutorials for 3 Patti Blue gaming app'
        }
      ]
    },
    {
      url: '/contact-us',
      lastMod: new Date().toISOString(),
      changeFreq: 'monthly',
      priority: 0.7
    },
    {
      url: '/privacy',
      lastMod: new Date().toISOString(),
      changeFreq: 'yearly',
      priority: 0.6
    },
    {
      url: '/disclaimer',
      lastMod: new Date().toISOString(),
      changeFreq: 'yearly',
      priority: 0.6
    }
  ];

  // Blog posts
  const blogPosts: PageType[] = [
    {
      url: '/blog/3-patti-blue-app-review',
      lastMod: new Date().toISOString(),
      changeFreq: 'monthly',
      priority: 0.9
    },
    {
      url: '/blog/install-3-patti-blue-android-guide',
      lastMod: new Date().toISOString(),
      changeFreq: 'monthly',
      priority: 0.8
    },
    {
      url: '/blog/3-patti-blue-vs-3-patti-lucky-comparison',
      lastMod: new Date().toISOString(),
      changeFreq: 'monthly',
      priority: 0.8
    },
    {
      url: '/blog/top-5-real-money-gaming-apps-pakistan',
      lastMod: new Date().toISOString(),
      changeFreq: 'monthly',
      priority: 0.8
    },
    {
      url: '/blog/3-patti-blue-referral-code-earn-commission',
      lastMod: new Date().toISOString(),
      changeFreq: 'monthly',
      priority: 0.8
    },
    {
      url: '/blog/3-patti-blue-welcome-bonus-free-pkr',
      lastMod: new Date().toISOString(),
      changeFreq: 'monthly',
      priority: 0.8
    },
    {
      url: '/blog/all-games-on-3-patti-blue-complete-list',
      lastMod: new Date().toISOString(),
      changeFreq: 'monthly',
      priority: 0.8
    },
    {
      url: '/blog/dragon-vs-tiger-game-guide-rules-winning',
      lastMod: new Date().toISOString(),
      changeFreq: 'monthly',
      priority: 0.8
    },
    {
      url: '/blog/forgot-3-patti-blue-password-account-recovery',
      lastMod: new Date().toISOString(),
      changeFreq: 'monthly',
      priority: 0.8
    },
    {
      url: '/blog/is-3-patti-blue-safe-security-analysis',
      lastMod: new Date().toISOString(),
      changeFreq: 'monthly',
      priority: 0.8
    },
    {
      url: '/blog/3-patti-blue-not-working-problems-solutions',
      lastMod: new Date().toISOString(),
      changeFreq: 'monthly',
      priority: 0.8
    }
  ];

  // Only include existing pages
  const allPages = [...mainPages, ...blogPosts];
  
  // Generate XML with mobile and image extensions
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${allPages.map(page => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastMod}</lastmod>
    <changefreq>${page.changeFreq}</changefreq>
    <priority>${page.priority}</priority>
    <mobile:mobile/>
    ${page.images?.map(img => `
    <image:image>
      <image:loc>${baseUrl}${img.loc}</image:loc>
      <image:title>${img.title}</image:title>
      <image:caption>${img.caption}</image:caption>
    </image:image>`).join('') || ''}
  </url>
  `).join('')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400'
    }
  });
} 