import { Metadata } from 'next';
import Link from 'next/link';
import BlogPostSchema from '@/components/BlogPostSchema';

export const metadata: Metadata = {
  title: 'All 23+ Games on 3 Patti Blue Explained (Complete List)',
  description: 'Complete guide to all 23+ games available on 3 Patti Blue in 2026: Teen Patti, Rummy, Slots, Poker, Casino, Dragon vs Tiger, Jili Slots, and Fishing Games with rules and tips.',
  keywords: [
    '3 patti blue games list',
    'all games on 3 patti blue',
    '3 patti blue game types 2026',
    'teen patti blue games',
    '3 patti blue jili slots',
    '3 patti blue fishing games',
  ],
  openGraph: {
    title: 'All 23+ Games on 3 Patti Blue Explained (Complete List)',
    description: 'Complete guide to every game available on 3 Patti Blue in 2026.',
    type: 'article',
  },
  alternates: { canonical: 'https://3pattiblue.pk/blog/all-games-on-3-patti-blue-complete-list' },
};

export default function BlogAllGames() {
  return (
    <main className="min-h-screen bg-[#060A20]">
      <BlogPostSchema
        title="All 23+ Games on 3 Patti Blue Explained (Complete List)"
        description="Complete guide to all 23+ games on 3 Patti Blue including Teen Patti, Slots, Casino, Fishing Games, and more."
        slug="all-games-on-3-patti-blue-complete-list"
        datePublished="2026-01-04"
      />
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <nav className="mb-8 text-sm text-gray-400">
          <Link href="/" className="hover:text-[#FFA500]">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-[#FFA500]">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-white">All Games on 3 Patti Blue</span>
        </nav>

        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            All 23+ Games on 3 Patti Blue Explained (Complete List)
          </h1>
          <div className="flex items-center gap-4 text-gray-400 text-sm">
            <time dateTime="2026-01-04">January 4, 2026</time>
            <span>•</span>
            <span>14 min read</span>
          </div>
        </header>

        <div className="prose prose-invert prose-lg max-w-none space-y-8">
          <p className="text-xl text-gray-300 leading-relaxed">
            <Link href="/" className="text-[#FFA500] hover:underline font-semibold">3 Patti Blue</Link> stands out from other apps because it offers over 23 different games in one platform. Whether you enjoy classic card games, fast slots, casino table games, or fishing games, there is something for every type of player. Here is the complete guide to every game category and game available.
          </p>

          <section>
            <h2 className="text-3xl font-bold text-[#FFA500] mb-6">1. Teen Patti Games</h2>
            <p className="text-gray-300 mb-4 leading-relaxed">Teen Patti (3 Patti) is the heart of 3 Patti Blue. The app offers multiple exciting Teen Patti modes, each with its own unique rules and gameplay style. This keeps the experience fresh even for experienced players.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: 'Classic Teen Patti', desc: 'The original 3-card game. Place your bet, get 3 cards, and compete to have the best hand. Best for beginners learning the basics.' },
                { name: 'Joker Mode', desc: 'Adds wild Joker cards to the standard Teen Patti deck. Jokers can replace any card, creating new winning combinations and more excitement.' },
                { name: '10 Cards', desc: 'Each player receives 10 cards instead of 3. Select your best 3-card hand from 10 cards, adding a strategic element to the game.' },
                { name: 'Muflis (Lowball)', desc: 'The reverse of classic Teen Patti — the lowest hand wins. A great twist that requires completely different strategy.' },
                { name: 'AK47 Mode', desc: 'Aces, Kings, 4s, and 7s act as wild cards. Creates powerful hand combinations and very unpredictable gameplay.' },
                { name: 'Best of Five', desc: 'Players receive 5 cards and choose their best 3. Gives more control over your final hand and rewards card knowledge.' },
              ].map((game) => (
                <div key={game.name} className="bg-[#0A1029] p-5 rounded-xl">
                  <h3 className="text-lg font-bold text-[#FFA500] mb-2">{game.name}</h3>
                  <p className="text-gray-300 text-sm">{game.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-[#FFA500] mb-6">2. Table Games</h2>
            <p className="text-gray-300 mb-4 leading-relaxed">Table games bring the real casino experience to your phone. These are fast-paced games based on outcomes you bet on, with quick results and high excitement.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: 'Dragon vs Tiger', desc: 'Bet on whether the Dragon or Tiger card will be higher. One of the simplest and fastest games — results appear in seconds. Very popular among Pakistani players.' },
                { name: 'Andar Bahar', desc: 'The classic Indian card game. A card is placed in the middle and you bet whether the matching card appears on the Andar (inside) or Bahar (outside) side.' },
                { name: 'Roulette', desc: 'A numbered wheel is spun and you bet on where the ball lands. Multiple betting options including numbers, colors (red/black), or ranges.' },
                { name: 'Car Roulette', desc: 'A unique twist on classic roulette where race cars are used instead of a ball. More visually engaging with the same betting principles.' },
                { name: '7 Up Down', desc: 'Predict whether the sum of two dice will be higher than 7, lower than 7, or exactly 7. Simple rules with different payout rates.' },
                { name: 'Zoo Roulette', desc: 'A fun themed version of roulette featuring zoo animals. Great for players who enjoy a light-hearted visual style.' },
              ].map((game) => (
                <div key={game.name} className="bg-[#0A1029] p-5 rounded-xl">
                  <h3 className="text-lg font-bold text-[#FFA500] mb-2">{game.name}</h3>
                  <p className="text-gray-300 text-sm">{game.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-[#FFA500] mb-6">3. Casino Card Games</h2>
            <p className="text-gray-300 mb-4 leading-relaxed">These classic casino games offer a more strategic gambling experience with established rules from real-world casinos.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: 'Blackjack', desc: 'Try to get closer to 21 than the dealer without going over. Uses standard casino rules. One of the most skill-based games on 3 Patti Blue.' },
                { name: 'Rummy', desc: 'Arrange your cards into valid sets and sequences before your opponents. A classic skill game extremely popular in Pakistan.' },
                { name: 'Poker', desc: 'The classic Texas Hold\'em style poker. Bet based on hand strength, bluff opponents, and win the pot. Requires strategy and patience.' },
                { name: 'God of Fortune', desc: 'A Chinese-themed casino game with multiple betting options and fast outcomes. Great for players who enjoy bonus rounds.' },
              ].map((game) => (
                <div key={game.name} className="bg-[#0A1029] p-5 rounded-xl">
                  <h3 className="text-lg font-bold text-[#FFA500] mb-2">{game.name}</h3>
                  <p className="text-gray-300 text-sm">{game.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-[#FFA500] mb-6">4. Slot Games</h2>
            <p className="text-gray-300 mb-4 leading-relaxed">Slots are the easiest games to play — just spin and win. 3 Patti Blue offers both classic slots and modern Jili Slots with exciting themes and features.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: '777 Bingo', desc: 'Classic slot machine with 7 symbols. Line up matching symbols across paylines for payouts. Very simple and beginner friendly.' },
                { name: 'Fruit Line', desc: 'Traditional fruit-themed slot with cherries, lemons, and melons. Nostalgic style with modern mobile optimization.' },
                { name: 'Sweet Bonanza', desc: 'A colorful candy-themed slot with cluster pays. No traditional paylines — clusters of 8+ matching symbols pay out.' },
                { name: 'Crash', desc: 'A multiplier game where a rocket climbs and can crash at any time. Cash out before the crash to win. Exciting and fast-paced.' },
                { name: 'Rattling GEMS', desc: 'Gem-themed slot with cascading wins. When you win, gems disappear and new ones fall — potentially creating chain wins.' },
                { name: 'Wild Energy', desc: 'An electrifying slot with wild multipliers and energy-themed symbols. High volatility with big win potential.' },
                { name: 'WoW Slot', desc: 'A fantasy-themed slot with magical symbols, free spins, and bonus rounds for extended winning opportunities.' },
                { name: 'Video Poker 1 & 2', desc: 'Combine poker hand rankings with slot machine mechanics. Hold cards and draw to try to make winning poker hands.' },
              ].map((game) => (
                <div key={game.name} className="bg-[#0A1029] p-5 rounded-xl">
                  <h3 className="text-lg font-bold text-[#FFA500] mb-2">{game.name}</h3>
                  <p className="text-gray-300 text-sm">{game.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-[#FFA500] mb-6">5. Jili Slots (Exclusive)</h2>
            <p className="text-gray-300 mb-4 leading-relaxed">Jili is a world-renowned slot game provider and 3 Patti Blue features an exclusive selection of Jili Slots. These are high-quality games with excellent graphics, sound effects, and bonus features not found on most competitor apps in Pakistan.</p>
            <div className="bg-[#0A1029] p-6 rounded-xl">
              <p className="text-gray-300">Jili Slots available on 3 Patti Blue include multiple titles with unique themes, progressive jackpots, free spin features, and exciting bonus rounds. The smooth animations and fair RNG (Random Number Generator) make Jili Slots a premium gaming experience. Check the app for the full current list of Jili Slots available.</p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-[#FFA500] mb-6">6. Fishing Games</h2>
            <p className="text-gray-300 mb-4 leading-relaxed">Fishing games are a unique and fun category where you shoot fish in a virtual underwater world to earn points that convert to real money rewards.</p>
            <div className="bg-[#0A1029] p-6 rounded-xl">
              <p className="text-gray-300 mb-3">How fishing games work:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>You use virtual bullets (which cost chips) to shoot fish swimming on screen</li>
                <li>Different fish have different point values — bigger fish = more points</li>
                <li>Special boss fish appear occasionally with massive point rewards</li>
                <li>Points convert to real money that you can withdraw</li>
                <li>Multiplayer mode lets you compete with other players in real time</li>
              </ul>
              <p className="text-gray-300 mt-3">3 Patti Blue offers multiple fishing game titles including <strong className="text-white">Fishing Rush</strong> and others with different underwater themes and fish types.</p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-[#FFA500] mb-6">7. Other Games</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: 'Mines', desc: 'Choose squares on a grid without hitting mines. The further you go without hitting a mine, the higher your multiplier — but one mine ends everything.' },
                { name: 'Domino', desc: 'Classic domino matching game with a competitive multiplayer format. Match tiles and empty your hand before opponents.' },
                { name: 'Teenpatti 20-20', desc: 'A rapid-fire version of Teen Patti with 20 rounds. Fast-paced and very entertaining for players who prefer quick games.' },
                { name: 'Ludo', desc: 'The classic board game in digital format. Race your pieces around the board and knock out opponents. Nostalgic and highly popular.' },
              ].map((game) => (
                <div key={game.name} className="bg-[#0A1029] p-5 rounded-xl">
                  <h3 className="text-lg font-bold text-[#FFA500] mb-2">{game.name}</h3>
                  <p className="text-gray-300 text-sm">{game.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-[#0A1029] p-6 rounded-xl border border-[#FFA500]">
            <h2 className="text-2xl font-bold text-[#FFA500] mb-4">Which Game Should You Start With?</h2>
            <ul className="space-y-2 text-gray-300">
              <li><strong className="text-white">Beginners:</strong> Start with Dragon vs Tiger or Andar Bahar — simple rules, quick results</li>
              <li><strong className="text-white">Card game fans:</strong> Classic Teen Patti or Rummy</li>
              <li><strong className="text-white">Slot lovers:</strong> Sweet Bonanza or 777 Bingo</li>
              <li><strong className="text-white">High earners:</strong> Tournaments in Teen Patti or Poker</li>
              <li><strong className="text-white">Fun seekers:</strong> Fishing Rush or Ludo</li>
            </ul>
          </section>


          <section className="mt-10">
            <h2 className="text-2xl font-bold text-[#FFA500] mb-4">Related Articles</h2>
            <ul className="space-y-2">
              <li><Link href="/blog/dragon-vs-tiger-game-guide-rules-winning" className="text-accent hover:underline font-medium">→ Dragon vs Tiger Game Guide: Rules & Winning Formula</Link></li>
              <li><Link href="/blog/3-patti-blue-app-review" className="text-accent hover:underline font-medium">→ 3 Patti Blue App Review: Pros, Cons & Experience</Link></li>
              <li><Link href="/blog/3-patti-blue-welcome-bonus-free-pkr" className="text-accent hover:underline font-medium">→ 3 Patti Blue Welcome Bonus: How to Claim</Link></li>
            </ul>
          </section>
          <div className="flex justify-center mt-8">
            <a href="https://pk3pattiblue.com/?from_gameid=7852455&channelCode=100000" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-8 py-4 text-white font-semibold text-lg rounded-full border-2 border-[#0ea5e9] hover:bg-[#0ea5e9]/10 transition-all">
              Download 3 Patti Blue &amp; Play All Games →
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
