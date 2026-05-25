export interface BlogPost {
  title: string;
  slug: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
  excerpt: string;
  content: string;
}

export const CATEGORIES = [
  "All",
  "Nifty Analysis",
  "BankNifty Analysis",
  "Options Trading",
  "Risk Management",
  "Trading Psychology",
  "Price Action",
  "Execution Engine"
];

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "The Architecture of Institutional BankNifty Execution",
    slug: "institutional-banknifty-execution",
    category: "BankNifty Analysis",
    date: "2024-05-24",
    readTime: "8 min read",
    author: "Mahir - Lead Analyst",
    image: "https://picsum.photos/seed/banknifty-arch/1200/600",
    excerpt: "Dissecting the algorithmic boundaries and liquidity pools that dictate BankNifty's daily trajectory. A framework for high-probability setups.",
    content: `## The Fluidity of BankNifty Liquidity
BankNifty is arguably the most volatile sub-index available to Indian traders. Unlike Nifty50, whose heavier constituents provide a damping effect, BankNifty is highly sensitive to macro-economic data, interbank rates, and global liquidity flows.

### The Myth of Standard Support and Resistance
Standard retail traders draw horizontal lines at every conceivable price pivot. Institutional algorithms do not care about your 15-minute trendline. They care about orders.

1. **Liquidity Sweeps:** Often, a level heavily guarded by retail stops becomes the exact target for institutional algorithms. They will deliberately push the price below a perceived "strong support" to trigger stop-losses.
2. **Order Block Mitigation:** Once the stops are triggered, the smart money steps in, absorbing that massive sell-side liquidity with their buy limit orders.

### Our Execution Framework
At THE CAPITAL GURU, our execution model pivots around **Structural Shift Identification**. We wait for the displacement. We enter on the retest of the original order block.`
  },
  {
    title: "Mastering Options Gamma: The Weapon of the Elite",
    slug: "mastering-options-gamma",
    category: "Options Trading",
    date: "2024-05-22",
    readTime: "10 min read",
    author: "Mahir - Lead Analyst",
    image: "https://picsum.photos/seed/gamma-weapon/1200/600",
    excerpt: "Why most retail traders lose money on expiry day, and how understanding Gamma acceleration can transform your PNL.",
    content: `## The Gamma Trap
Options buying is inherently a losing game if you do not understand the underlying mathematics. Theta (time decay) is the silent killer, but Gamma is the explosive force that ruins accounts—or builds them.

Gamma represents the rate of change of Delta. As an option gets closer to At-The-Money (ATM) and closer to expiration, Gamma expands exponentially.

### Why Retail Loses on Expiry Day
Retail traders love buying Out-Of-The-Money (OTM) options on expiry day because they are "cheap." What they fail to realize is that if the underlying does not make an immediate, violent move, Theta will compress that option to zero.

### The Capital Guru Setup: Gamma Scalping
Our most profitable strategy involves scalping Gamma acceleration on 0DTE (Zero Days to Expiration).
1. Spotting the Squeeze
2. The Trigger
3. The Acceleration
4. The Execution

*Amateurs hold and hope. Professionals execute and exit.*`
  },
  {
    title: "The Stoicism of Stop Losses: Psychology of Survival",
    slug: "stoicism-of-stop-losses",
    category: "Trading Psychology",
    date: "2024-05-20",
    readTime: "7 min read",
    author: "Mahir - Lead Analyst",
    image: "https://picsum.photos/seed/stoic-loss/1200/600",
    excerpt: "Capital preservation is the only holy grail in trading. How to eliminate emotional attachment to losing trades.",
    content: `## The Ego vs. The Market
The market does not know you. It does not care about your mortgage, your aspirations, or your ego. It is an impartial mechanism of wealth transfer. 

The biggest differentiator between our Elite members and the 95% who fail is not strategy—it is the stoic acceptance of a stop-loss.

### The Sunk Cost Fallacy in F&O
When a retail trader enters a trade, they mentally spend the profit before securing it. When the trade goes against them, closing it means accepting a failure. This triggers the *sunk cost fallacy*.

### Institutional Risk Management
At THE CAPITAL GURU, trading is not an emotional endeavor; it is algorithmic accounting.
* Every setup has a predefined invalidation point.
* Once the invalidation point is breached, the premise of the trade is false.
* Holding a trade based on a false premise is gambling.

We never risk more than 1% to 2% of our capital on a single setup.`
  },
  {
    title: "Price Action Purity: Stripping Away the Noise",
    slug: "price-action-purity",
    category: "Price Action",
    date: "2024-05-18",
    readTime: "6 min read",
    author: "Mahir - Lead Analyst",
    image: "https://picsum.photos/seed/price-purity/1200/600",
    excerpt: "Why moving averages, RSI, and MACD are lagging indicators that degrade your institutional execution speed.",
    content: `## The Indicator Trap
Open a novice trader's screen, and you will see a Jackson Pollock painting. MACD, stochastic oscillators, three different EMAs, and Bollinger Bands. They are searching for the perfect combination that generates guaranteed signals.

This is a structural flaw. Indicators are derivatives of price. They are mathematically lagging.

### The Only Leading Indicator
The only true leading indicator is **Price and Volume**.
1. **Wicks:** Pay intense attention to candlestick wicks at key liquidity zones.
2. **Volume at Price (Volume Profile):** Time-based volume is useful, but volume-at-price tells you where the *value* was established.

Our platform advocates clean charts. We use bare candlesticks, VWAP for institutional average cost, and anchored volume profiles. Removing the visual noise significantly reduces cognitive load, allowing for split-second, high-conviction decision making.`
  },
  {
    title: "Nifty 50 Liquidity Traps: Identifying False Breakouts",
    slug: "nifty-liquidity-traps",
    category: "Nifty Analysis",
    date: "2024-05-15",
    readTime: "9 min read",
    author: "Mahir - Lead Analyst",
    image: "https://picsum.photos/seed/trap-nifty/1200/600",
    excerpt: "How to avoid getting caught in the algorithms designed to harvest retail liquidity at major resistance zones.",
    content: `## The Breakout Mirage
The most common retail strategy is trading the breakout of the high of the day (HOD). Algorithms know this.

When Nifty approaches a significant psychological resistance, say 22,000, retail participation skyrockets. Breakout traders set buy-stop orders just above the level. Option sellers place their stop-losses there.

### The Algorithm's Playbook
1. **The Lure:** The price crawls towards 22,000, looking incredibly bullish.
2. **The Trigger:** It spikes to 22,020. Retail buy orders execute. Their stop-losses are dragged under the breakout candle.
3. **The Trap:** Institutional money, which needed that exact liquidity to offload their massive long positions, dumps their inventory.
4. **The Crush:** The price aggressively reverses back under 22,000. 

At THE CAPITAL GURU, we prefer to fade these obvious breakouts. We wait for the candle to close definitively above the level. If it leaves a massive rejection wick (a liquidity sweep) and closes back below the key level, we execute a high-probability short.`
  },
  {
    title: "Scaling Your Equity: From 1L to Institutional Size",
    slug: "scaling-equity-institutional",
    category: "Risk Management",
    date: "2024-05-10",
    readTime: "11 min read",
    author: "Mahir - Lead Analyst",
    image: "https://picsum.photos/seed/scale-cap/1200/600",
    excerpt: "The psychological barriers of sizing up. Why your 1-lot strategy fails when you trade 100 lots.",
    content: `## The Mathematics of Scaling
A trader can be immensely profitable trading 2 lots of Nifty. But when they scale to 50 lots, they blow their account in a week. Why? The setups didn't change; the psychology and the liquidity did.

### The Psychological Slip
When you trade small, a 15-point drawdown against you is easily managed. You stay objective. When you have expanded your sizing without scaling your mental threshold, that same 15-point drawdown equates to half your monthly salary. Panic sets in.

### Liquidity Constraints
At 1 or 2 lots, you are a ghost in the market. You get filled at the Exact price you see. At 1000 lots, you are the slippage. Buying at market order means you will clear the order book, getting an average fill much worse than the spot price.

### The Capital Guru Growth Framework
1. **Incremental Sizing:** Never double your position size overnight.
2. **Limit Orders Only:** The moment you size up, you must master the art of limit orders.
3. **Percentage Metrics:** Stop looking at your PNL in terms of Rupees.

Trading is the ultimate vehicle for wealth, provided you maintain institutional discipline at every stage of growth.`
  },
  {
    title: "The Anatomy of a Market Top: Distribution Phases",
    slug: "anatomy-of-a-market-top",
    category: "Price Action",
    date: "2024-05-08",
    readTime: "8 min read",
    author: "Mahir - Lead Analyst",
    image: "https://picsum.photos/seed/top-market/1200/600",
    excerpt: "Recognizing the signs of institutional distribution before the retail panic sets in.",
    content: `## Institutional Distribution
Markets do not crash from the top down without warning. They distribute. Distribution is the phase where smart money offloads its inventory accumulated at the bottom to retail buyers rushing in due to FOMO.

### Wyckoff's Theory in Action
The Wyckoff method of distribution is perfectly applicable to the Nifty. We look for the 'Upthrust After Distribution' (UTAD)—a sudden, sharp spike above the resistance that quickly fails. This is the ultimate bull trap.

### Identifying the Shift
* **Volume Divergence:** Price makes higher highs, but volume steadily declines. The effort is not producing a result.
* **Choppiness:** The clean, impulsive moves of the markup phase are replaced by erratic, choppy swings. This is the battle between late retail buyers and institutional sellers.
* **Heavy Option Writing:** Massive Call writing far Out-of-The-Money indicates smart money does not expect the rally to continue.

By recognizing these signs, Elite members of THE CAPITAL GURU can systematically reduce long exposure and prepare for high-probability short setups during the markdown phase.`
  },
  {
    title: "Option Greeks Simplified: Delta and Theta Dynamics",
    slug: "option-greeks-simplified",
    category: "Options Trading",
    date: "2024-05-05",
    readTime: "9 min read",
    author: "Mahir - Lead Analyst",
    image: "https://picsum.photos/seed/greeks-simple/1200/600",
    excerpt: "A practical guide to understanding how Delta and Theta impact your daily MTM in options buying.",
    content: `## Demystifying the Greeks
Options pricing isn't arbitrary. It's driven by mathematical variables known as 'Greeks'. For day traders, the two most critical Greeks to understand are Delta and Theta.

### Delta: The Engine of Movement
Delta measures how much the option price will change for a 1-point move in the underlying asset (e.g., Nifty or BankNifty).
* An At-The-Money (ATM) option typically has a Delta of around 0.50. This means if Nifty moves 100 points, your option premium will move approximately 50 points.
* Deep In-The-Money (ITM) options have Deltas closer to 1.0 (they act like the futures contract itself).

### Theta: The Silent Killer
Theta measures the rate of time decay. It tells you how much value your option will lose every day simply because time has passed.
* Theta accelerates as you get closer to expiration.
* This is why holding Out-Of-The-Money (OTM) options over the weekend or on the day of expiry is a mathematically flawed strategy unless you anticipate a violent, immediate move.

At THE CAPITAL GURU, we prefer buying slightly ITM or ATM options for intraday scalps. The higher Delta gives us immediate profit on the move, and we exit before Theta decay meaningfully affects our position.`
  },
  {
    title: "Mastering the VWAP: The Institutional Anchor",
    slug: "mastering-vwap",
    category: "BankNifty Analysis",
    date: "2024-05-01",
    readTime: "7 min read",
    author: "Mahir - Lead Analyst",
    image: "https://picsum.photos/seed/vwap-anchor/1200/600",
    excerpt: "Why Volume Weighted Average Price is the only moving average that matters for intraday F&O traders.",
    content: `## The Problem with Traditional EMAs
Traditional Exponential Moving Averages (EMAs) only factor in time and price. They ignore the most critical component of market mechanics: Volume.

### The Power of VWAP
The Volume Weighted Average Price (VWAP) calculates the average price a security has traded at throughout the day, based on both volume and price. It is heavily utilized by institutional algorithms for execution.

* **Institutional Buying/Selling:** Large funds use VWAP algorithms to ensure they are getting a "fair" price over the course of a day. If they buy below VWAP, they consider it a good fill.
* **The Magnet Effect:** Price tends to revert to the VWAP, especially in choppy or range-bound markets.

### The VWAP Bounce Setup
One of our core intraday setups involves the VWAP pullback.
1. The market opens and establishes a strong directional trend (e.g., heavily above VWAP).
2. The initial momentum fades, and the price pulls back toward the VWAP.
3. We observe price action and volume at the VWAP line. If we see absorption (e.g., a long lower wick on a 5-minute candle) accompanied by high volume, it signals that buyers are defending the average price.
4. We enter long, placing our stop strictly below the VWAP structure.

It is simple, mechanical, and highly effective on BankNifty.`
  },
  {
    title: "Revenge Trading: The Destroyer of Accounts",
    slug: "revenge-trading-destroyer",
    category: "Trading Psychology",
    date: "2024-04-28",
    readTime: "6 min read",
    author: "Mahir - Lead Analyst",
    image: "https://picsum.photos/seed/revenge/1200/600",
    excerpt: "Understanding the emotional trigger of revenge trading and constructing strict rules to prevent it.",
    content: `## The Spiral of Revenge
You take a perfectly valid setup. It hits your stop-loss. It's a calculated 1% loss. Normal. Acceptable.

But then, anger sets in. The market "stole" your money. You immediately look for another trade to make it back. You abandon your rulebook. You increase your position size. You buy a random OTM option. Within 30 minutes, your 1% loss has ballooned into a 20% drawdown. Your account is gutted.

This is Revenge Trading.

### The Neurological Response
Losing money triggers the same regions of the brain as physical pain. Our natural instinct is to fight back against the source of that pain. In the market, this response is lethal.

### The Circuit Breaker Protocol
To survive, you must install 'circuit breakers' in your trading plan.
1. **The Walk-Away Rule:** If you hit two consecutive stop-losses in one day, you must close the terminal for at least two hours. No exceptions.
2. **Daily Loss Limit:** Define a hard numeric limit on daily losses (e.g., ₹5000 or 2% of equity). If your MTM hits that number, your broker terminal should be forcefully closed.
3. **Acceptance:** Accept that losses are the cost of doing business. You are a risk manager first, a trader second.`
  },
  {
    title: "Intermarket Analysis: Nifty vs. BankNifty Divergence",
    slug: "intermarket-analysis-divergence",
    category: "Nifty Analysis",
    date: "2024-04-25",
    readTime: "8 min read",
    author: "Mahir - Lead Analyst",
    image: "https://picsum.photos/seed/diverge/1200/600",
    excerpt: "How to read the divergences between the major indices to filter out low-probability trades.",
    content: `## The Concept of Correlation
Nifty 50 and BankNifty are highly correlated. Because financial stocks hold significant weight in the broader Nifty 50, the two indices typically move in tandem.

However, the most profitable opportunities—and the most dangerous traps—occur when this correlation breaks down.

### Trading the Divergence
A divergence happens when Nifty makes a new high for the day, but BankNifty fails to do the same (or vice versa).
* **Bullish Divergence:** Nifty is selling off, but BankNifty is holding its structural support rigidly. This suggests underlying strength in financials. Once the selling pressure on IT or Reliance (Nifty constituents) subsides, BankNifty is primed for a violent explosive move upside.
* **Bearish Divergence (The Trap):** BankNifty breaks out to a new high, luring in retail buyers, but Nifty is sluggish and failing to clear its resistance. This lack of confirmation often precedes a sharp "fakeout" and reversal in BankNifty.

At THE CAPITAL GURU, we rarely take a breakout trade on BankNifty unless Nifty is confirming the directional bias. Alignment across indices is critical for high-conviction momentum.`
  },
  {
    title: "Position Sizing Matrix: Protecting the Capital",
    slug: "position-sizing-matrix",
    category: "Risk Management",
    date: "2024-04-20",
    readTime: "11 min read",
    author: "Mahir - Lead Analyst",
    image: "https://picsum.photos/seed/matrix/1200/600",
    excerpt: "A mathematical approach to determining exactly how many lots you should trade on any given setup.",
    content: `## The Gambler's Flaw
Retail traders determine their position size based on how much money they have in their account, or how "confident" they feel about a trade. This is gambling.

Professional position sizing is derived purely through mathematics, based on the distance to the invalidation point (stop-loss).

### The 2% Rule
Never risk more than 1% to 2% of your total trading capital on a single trade.

**The Formula:**
Position Size (Quantity) = (Total Trading Capital * 0.02) / (Entry Price - Stop Loss Price)

### Practical Example
* **Capital:** ₹5,00,000
* **Max Risk (2%):** ₹10,000
* **Setup:** BankNifty ATM Call
* **Entry Price:** ₹300
* **Stop Loss Price:** ₹250
* **Risk per unit:** ₹50

**Calculation:**
₹10,000 / ₹50 = 200 quantities (approximately 13 lots of BankNifty at lot size 15).

If you are "highly confident" in a trade where the stop loss is very wide (e.g., ₹100 risk per unit), you MUST reduce your lot size to maintain the ₹10,000 maximum risk threshold. Discipline in sizing is what keeps you alive during drawdowns.`
  },
  {
    title: "FII/DII Data: Separating Signal from Noise",
    slug: "fii-dii-data-analysis",
    category: "Execution Engine",
    date: "2024-04-18",
    readTime: "7 min read",
    author: "Mahir - Lead Analyst",
    image: "https://picsum.photos/seed/fiidii/1200/600",
    excerpt: "How to accurately interpret end-of-day institutional activity reports without falling into predictive traps.",
    content: `## The End of Day Report
Every evening, retail traders eagerly await the FII (Foreign Institutional Investors) and DII (Domestic Institutional Investors) data. If FIIs bought ₹2000 Crores in Cash, retail assumes the market will gap up tomorrow.

This simplistic analysis is deeply flawed.

### Context is King
FIIs operate complex Delta-neutral strategies. They might buy cash equities while simultaneously aggressively shorting Index Futures or buying massive Put options to hedge. Looking at the cash figures in isolation is useless.

**What Actually Matters:**
1. **Index Futures Long/Short Ratio:** This reveals the directional bias of institutions in the derivative segment. If FII long positioning drops from 60% to 35% over a week, a trend reversal is highly probable.
2. **Option Index Activity:** Are they net buyers of calls or puts? More importantly, where are the major open interest concentrations?
3. **The Roll-Over Data:** Observing how positions are rolled over from one expiry series to the next provides crucial insight into structural macro-trends.

We use FII data strictly for contextual macro-bias, never as an intraday trigger. Execution must always be based on live price action.`
  },
  {
    title: "Creating a Mechanical Trading Plan",
    slug: "mechanical-trading-plan",
    category: "Trading Psychology",
    date: "2024-04-15",
    readTime: "8 min read",
    author: "Mahir - Lead Analyst",
    image: "https://picsum.photos/seed/plan/1200/600",
    excerpt: "Why discretionary trading fails under pressure and how to build a rules-based execution framework.",
    content: `## Discretion vs. Mechanics
"I feel like the market is going up today."
This sentence has bankrupted millions of retail traders. Operating on "feel" or "intuition" works until volatility spikes. When your screen is flashing red and PNL is dropping rapidly, intuition is replaced by panic.

### The Mechanical Framework
The goal of a professional trader is to remove emotion from execution. To do this, every scenario must be pre-defined in a Trading Plan.

**Core Components of a Plan:**
1. **Instrument Selection:** (e.g., Strictly BankNifty Options, no stock options).
2. **Setup Criteria:** (e.g., Must pull back to VWAP + volume confirmation). If the criteria aren't met, there is no trade.
3. **Execution Rules:** Limit orders only. No market orders on entry.
4. **Risk Parameters:** Max 2% risk per trade. Max 3 trades per day.
5. **Trade Management:** Scaling out at 1:2 Risk/Reward, trailing remainder to cost.

When the market opens, you are no longer a thinker. You are simply an executor of the plan. If A happens, you do B. If C happens, you do D. Mechanical trading is boring, and boring is profitable.`
  },
  {
    title: "Understanding Order Flow and Level 2 Data",
    slug: "understanding-order-flow",
    category: "Price Action",
    date: "2024-04-10",
    readTime: "9 min read",
    author: "Mahir - Lead Analyst",
    image: "https://picsum.photos/seed/orderflow/1200/600",
    excerpt: "Looking beneath the candlestick chart to see the actual buy and sell orders driving the market.",
    content: `## The Microstructure of the Market
Candlestick charts represent the *past*. They tell you where historical transactions took place. Order Flow is the *present*. It shows you the aggression of buyers and sellers at every specific price tick right now.

### Reading the Tape
While advanced Order Flow tools (like footprint charts) are complex, understanding the basic DOM (Depth of Market) or Level 2 data is crucial for precision entries.

1. **Spoofing:** Often, you will see a massive sell order sitting at resistance (e.g., 100,000 quantities). Retail gets scared and shorts. Just as the price approaches the order, it is instantly cancelled. This is spoofing—institutional manipulation to push price lower to accumulate longs.
2. **Absorption:** You observe price hitting a support level. Massive sell market orders are flooding the tape, but the price is not dropping. Why? Institutional buy limit orders are absorbing all the selling pressure. This 'Iceberg' buying is a massive tell for an imminent reversal.

At THE CAPITAL GURU, we cross-reference our price action zones with live order flow aggression to validate our entries.`
  },
  {
    title: "The Reality of Prop Firm Challenges",
    slug: "reality-of-prop-firms",
    category: "Risk Management",
    date: "2024-04-05",
    readTime: "8 min read",
    author: "Mahir - Lead Analyst",
    image: "https://picsum.photos/seed/prop/1200/600",
    excerpt: "Why the rules of funded accounts are designed against you, and how to actually pass them.",
    content: `## The Business Model of Prop Firms
Proprietary trading firms offering funded accounts market themselves as a way to trade large capital for a small fee. 

The reality is that their primary revenue stream is challenge fees from failed traders, not profit splits from successful ones. The rules (daily drawdown limits, trailing drawdowns) are psychologically engineered to make you fail.

### The Trailing Drawdown Trap
If you are up 5% for the month, but your trailing drawdown limit is 4%, a temporary 2% dip in equity will blow your account—even though you are still net positive. This forces traders to take profits prematurely and cuts winners short, ruining their risk-to-reward ratio.

### How to Pass institutional challenges
1. **Drastically Reduce Risk:** If your normal risk is 1%, reduce it to 0.25%. The goal is survival, not quick profits.
2. **Focus on A+ Setups Only:** You cannot afford average trades. Wait for perfect structural alignment.
3. **Understand the Math:** 90% fail the challenge. 90% of those who pass lose the funded account in month one. Only disciplined, mechanical risk managers survive.`
  },
  {
    title: "Opening Range Breakouts: Handling Morning Volatility",
    slug: "opening-range-breakouts",
    category: "Execution Engine",
    date: "2024-04-02",
    readTime: "7 min read",
    author: "Mahir - Lead Analyst",
    image: "https://picsum.photos/seed/orb/1200/600",
    excerpt: "Strategies for trading the chaotic first 45 minutes of the Indian market open.",
    content: `## The Amateur Hour
The first 15 to 45 minutes of the market (9:15 AM to 10:00 AM) is characterized by extreme volatility, wide spreads, and aggressive price discovery. This is often referred to as "Amateur Hour" because retail traders rush to execute overnight news, while institutional players use this liquidity to offload inventory.

### The Standard ORB
Retail strategy often dictates buying the breakout of the first 15-minute candle. Algorithms heavily target this strategy, creating massive false breakouts (wicks) that trap retail longs before aggressively reversing the trend.

### The Institutional Approach to the Open
1. **Patience:** We rarely execute in the first 15 minutes unless managing an overnight positional trade. We let the market establish its Initial Balance (IB).
2. **Identifying the Value Area:** We observe where the market spends most of its time in the first hour. This establishes the value area.
3. **Trading the Rejection:** If price breaks out of the Initial Balance but gets rapidly rejected with high volume, we look to fade that breakout back into the value area.

Let the market settle. The best, most structurally sound trends usually develop after 10:30 AM.`
  },
  {
    title: "Option Chain Analysis: The Institutional Dashboard",
    slug: "option-chain-analysis",
    category: "Options Trading",
    date: "2024-03-25",
    readTime: "11 min read",
    author: "Mahir - Lead Analyst",
    image: "https://picsum.photos/seed/chain/1200/600",
    excerpt: "Moving beyond basic technicals to read the Open Interest data indicating institutional sentiment.",
    content: `## The Real Support and Resistance
A chart tells you what happened. The Option Chain tells you what institutional money is willing to defend right now. Open Interest (OI) is the total number of outstanding derivative contracts.

### Analyzing the Writers
Always view the Option Chain from the perspective of Option Sellers (Writers). They have unlimited risk and deeper pockets.
* **Heavy Call Writing (Call OI):** Indicates smart money believes the market will NOT go above that strike price. This acts as a massive resistance barrier.
* **Heavy Put Writing (Put OI):** Indicates smart money believes the market will NOT go below that strike price. This acts as a structural support.

### The Squeeze Strategy
The most powerful trades occur when the writers are wrong.
If BankNifty has massive Call OI at 47,000, and the spot price aggressively sustains above 47,020, those Call writers are in deep losses. To cover their short positions, they MUST buy BankNifty futures or calls. This panic buying fuels exponential upside momentum (Short Covering). 

We monitor live changes in OI to identify exactly when the institutions begin unwinding their positions.`
  },
  {
    title: "Advanced Intraday Scalping: The 3-Minute Execution",
    slug: "advanced-intraday-scalping",
    category: "Price Action",
    date: "2024-03-20",
    readTime: "8 min read",
    author: "Mahir - Lead Analyst",
    image: "https://picsum.photos/seed/scalping/1200/600",
    excerpt: "The relentless intensity of micro-timeframe execution and how to maintain psychological composure.",
    content: `## The Speed of the Micro-Trend
Scalping on a 1-minute or 3-minute chart is not for the faint-hearted. It requires hyper-focus, split-second reflexes, and absolute emotional detachment. You are not trading the macro trend; you are trading immediate order flow imbalances.

### The Setup
For micro-scalps, we rely on Momentum and Impulsive Moves rather than deep structural pullbacks.
1. **The Catalyst:** Breakout of a tight pre-market consolidation zone with sudden, surging volume.
2. **The Entry:** Execution is done via limits on the absolute first micro-pullback (the first red candle on a 1-min chart in a strong uptrend).
3. **The Exit:** In scalping, we are not looking for 100 points. We secure 15-25 points on BankNifty options rapidly, scaling out 80% of the position to ensure a risk-free trade, holding a runner for a larger move.

### The Danger
Scalping leads to overtrading faster than any other strategy. The dopamine feedback loop is intense. A strict maximum trade rule (e.g., 3 scalps per day) is critical to prevent giving profits back during choppy periods.`
  },
  {
    title: "Surviving Drawdowns: The Math of Recovery",
    slug: "surviving-drawdowns",
    category: "Risk Management",
    date: "2024-03-15",
    readTime: "6 min read",
    author: "Mahir - Lead Analyst",
    image: "https://picsum.photos/seed/recovery/1200/600",
    excerpt: "Why losing 50% of your account requires a 100% gain just to break even, and how to avoid the death spiral.",
    content: `## The Asymmetry of Loss
If you have ₹1,00,000 and lose 50%, your account is at ₹50,000. 
To get back to ₹1,00,000, a 50% gain isn't enough (that only gets you to ₹75,000). You need a massive **100% gain** just to break even. This mathematical asymmetry is why aggressive risk management is the only way to survive.

### The Death Spiral
When a trader experiences a heavy drawdown (e.g., 30%), the psychological urge to "make it back quickly" dominates. They increase their position size dramatically on the next trade. If that trade loses, the account enters a death spiral from which recovery is mathematically improbable without depositing more capital.

### The Drawdown Protocol
At THE CAPITAL GURU, if an Elite member hits a 10% drawdown on their total equity:
1. They must immediately reduce their standard position size by 50%.
2. They cannot scale back up until they have recovered the drawdown using the smaller, safer size.
3. This forces them to focus on flawless execution rather than large PNL swings.

Protect the capital first. The profits will take care of themselves.`
  }
];
