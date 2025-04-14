### 🤖 Conversational Financial Advisor

# The project aims to simplify financial decision-making for users with limited financial literacy. It provides tools for saving, investing, debt management, and cryptocurrency tracking. The platform integrates multiple chatbots, each specializing in a specific financial domain, to deliver tailored advice and insights. 

### 🔧 Libraries

- *HTML5*  
  Used for structuring the chatbot interface and layout.

- *CSS3*  
  Used for styling the chatbot, including animations, themes, and responsive design.

- *JavaScript (Vanilla)*  
  Used for handling user interactions, managing conversation flow, and dynamically updating the UI.

- *Fetch API*  
  Used for making HTTP requests to fetch cryptocurrency data from the backend or external APIs.

- *Node.js* 
  Used to create the backend server

- *Express.js*
  Used to define routes and managing http request 

---

### 🔌 APIs

- *Gemini API*  
  - *Endpoint*: http://localhost:3000/api/ask  
  - *Purpose*: Fetches cryptocurrency market data such as bid price, ask price, last trade price, and 24-hour volume.

---

![Landing page](https://media-hosting.imagekit.io/a4be8b6193d14726/image-5.png?Expires=1839224642&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=pKWW2R84-uhF8RXV5atdKxtmfaZ4Ij0Un1bABH~3PRvk0vf8KHR6W6WgZqlFGAAExSeuAoMmw~eJ9aMVuJ0CZEQe6RJACY0i83ZOwqdR4Us9XoMzmDsulWvGuirthyr8qkuaPDzoV7ilY7fx-~tegD4ClRW1pEBXG49huNBH-FBFxApbHlKjG24P4BWXYnbtGP0T0i5LiD~LqVBL4Wvi5xyLRdI-r~Wmgd28U-Ae7PLc2zjXSM2r-hszDCra40VxOvpgftFpdyDxEl1nugIfEbp5qWlJ136THuN0afbQmk20s6t3PqqUboADMcTBpxp71CnRaqEn30FMWVNzNDnDqA__)

---
## 1. Crypto Conversation Bot

**Purpose**  
Assists users in understanding cryptocurrency markets, tracking prices, and learning trading concepts.

**Features**
- Provides real-time cryptocurrency data (bid, ask, last trade price, 24-hour volume)
- Explains crypto trading terms: `bid`, `ask`, `spread`, and `liquidity`
- Offers personalized advice based on user preferences (trading, investing, learning)
- Suggests popular cryptocurrencies (e.g., BTCUSD, ETHUSD, SOLUSD)

**Prominence**
- Ideal for beginners entering the crypto space
- Helps traders and investors make informed decisions

**How It Works**
- Users interact with the bot via a chat interface
- Bot fetches data from the Gemini API and responds with insights
- Tailors answers based on user preferences and conversation flow

![Crypto Conversation Bot](https://media-hosting.imagekit.io/7e5e310b672f464c/image-3.png?Expires=1839224805&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=rMZEC0V5wrdNTencRtDMi8eTH3xpteFGZbqFqBwhE2rejyaoTzrBDWkYQR805ummpm8Zs~MJOIqARYim9Nm7GgVW270JSXaiCbJveSJbWL-7j7s8-2dheJ4CEuETnsIziaiyyXt1eJcvcxzxIWhJnlaBUhJES7GFhtfwag22ACdqlm8ctQJBTH8eTu7ueE-Yf53Dgj4FaIYIJPr8FZHWS7Lxh7PiqrpuKPUBK0mEdUUAcbNcokSZtGGW3R~WkX3U~eOqtNd8z56OGts1dccfJ3DumuscBl05nkEjYgRfcjBGwbffZw1o860OMa~PVNB4Fi3lyXZ8b3sfVqRGXSMnXQ__)

---

## 2. Financial Purchase Advisor

**Purpose**  
Helps users evaluate whether a purchase aligns with their budget.

**Features**
- Analyzes income and purchase cost to assess affordability
- Offers advice on whether to proceed with the purchase
- Calculates estimated monthly payments for installment options

**Prominence**
- Promotes responsible spending
- Aids users in avoiding unnecessary debt

**How It Works**
- Users input income, item details, and cost
- Bot calculates affordability and offers actionable suggestions

![Financial Purchase Advisor](https://media-hosting.imagekit.io/738feec531684ce6/image-4.png?Expires=1839224805&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ZxKjLylOrYKLARnD8-dnarMTdUrRe7LL6152MC8yscLpp-uknzMKIFRNyr5XUL4YmmpajKXpj9ivY7DqVDadjz4Ea-En-zh4qxDLDuaK6aLpIyhdoLA~FajYe6VwN5YtH~EB95YwGwIRfTObedKqmRZhGC0BeZIEuU5B1n2WjXXdiVGH97HqmdrWBwYeHn3Efj3Bcms~itSt5sre2YXdQm3eO9g5Mo417DbUdLjYt3Q0WRlx41PspPQwIKMNvRjEu4DYOY0fNcR8efVcLBelrK7Yv7zQdizBcGebA9o9dldB1PwtaUwzsdGdLPucHs3rSBWSWLa14Mj9Z6QydaG-TQ__)

---

## 3. Investment Comparator Advisor

**Purpose**  
Compares different investment options to help users maximize returns.

**Features**
- Accepts investment amount, duration, and options to compare
- Projects returns based on historical average performance
- Highlights best option considering returns and risk

**Prominence**
- Simplifies investment decisions for beginners
- Promotes informed financial choices

**How It Works**
- User provides investment details
- Bot computes future values using predefined return rates and risk factors
- Results include a detailed breakdown of each option

![Investment Comparator](https://media-hosting.imagekit.io/a5b88ebc0ca54c49/image-1.png?Expires=1839224805&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=xUtcUIjLREb~rzqBRijY7xWX~KPWRjQhgngj6D64MQRGD5IMKloNLka5XsrLRtjLQJOLHIQsV4AlxQtSVX1EPX7T4dyZWDILzIcnWl-3sSXGjM2LJ0bwFvlwka-BdAw5Mf3UAJxBw4PQf8qwLlDYslEbKOLub7QEEFfaL7JBNuoPDSp4QGq9-7UT34B5copBq2x1sy9Z8EZ2xdfUDYxPujqupEsh768mexKr2UyYidE954ic41sK8yFJuEQUHd0ueh5W3npa1CFFNsuEULZ4BSOeYjUQBQBgDeK~hfxy1T9wxOOvjo6NaLM-r~H33lP7990ha6IRCz8qW3dU66dhzA__)

---

## 4. Debt Manager Bot

**Purpose**  
Helps users create and manage a debt repayment plan.

**Features**
- Collects debt details: balance, interest rate, and minimum payment
- Recommends repayment strategies (e.g., Snowball Method)
- Provides repayment schedule and progress tracking

**Prominence**
- Empowers users to become debt-free faster
- Reduces stress with clear, manageable strategies

**How It Works**
- Users input details for each debt
- Bot calculates and prioritizes repayment based on chosen method
- Progress is tracked with regular updates on balances

![Debt Manager Bot](https://media-hosting.imagekit.io/3401fb7c49b94004/screenshot_1744616803091.png?Expires=1839224805&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=WnF5QgT6MMni9Lo9DDTYe6LGbhhY1n4yeWdlyPAcc2on8UUlJAXEDz2LXCX9LywMX~x6KGHhdjayv8GD8Y8BJxRVIkdXQevNEcdACOaV5Xh7Lxb0jjDziflg3AnscbfdAlGhQ33jRspK9GUfHK5BfYg0OmhXpHwWsybJ5ACRDu-93xV8Lwflzm8MTk-T94DjLvjaQ8Vo4tcC3TOrK3Dx1Ueo9EjJ6QHFfQjtyUke5ce7tV~aMMq8Nz~Zfww0q0azqNGi2yLL-Wh-bDNXe8tXkJE-IslrACw63F14u5ZIMKzhJ8JyRcuKZQ8YYGe-DVFxs3dbSfx6evhs2u12XhnotA__)

---

## Finance Professionals Section

**Purpose**  
To inspire users by presenting real-world professionals who specialize in different areas of finance.

**Features**
- Each profile includes:
  - A brief description of their expertise.
  - A professional photo.
  - A link to their LinkedIn profile for further connection.

**Prominence**
- Builds credibility by highlighting diverse financial expertise.
- Encourages users to trust the platform's guidance.

**How It Works**
- Users view professional profiles.
- Expertise help
- Each profile links to LinkedIn for further exploration.

![Financial Expertise](https://media-hosting.imagekit.io/57a6863562d544d9/image-6.png?Expires=1839224805&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Zth91SuQrvsvcPvVdvKBhxXRfemfz8xYUGh0KJ3BBb7B4qGQJg2eiGrvPULr4n0svL-q1-tYiY22jz77P6n3-zIDMFisuSm-32WhBEwBzfY8Y3oktN10Ml9CazRiZR1CLIxIDZmxZfYB4J3eNn~9m87G9FWF6h0--~m8sdUjjhVOeSMG3~xorR8Ek13UN17KOoKr~EWKNb7ltEyQ9l~9sX57ZqMbphURJOPMVcFdSqFZCBYmL4WUHTQdMlkuGdSNd1LurePUb6ZxJRFYOiySB8IsymVfWBbJc~D9cR3SzGDbFTO4U7G1irf6CNKCh3MeutYJF6Gn8hvKf0KPWK3Ang__)

---

## Financial Tip Feature

**Purpose**  
- To educate users on financial topics like saving, investing, and debt management.
- To offer quick, practical tips that users can implement in their daily lives.

**Features**
- *Categories*: Tips are divided into categories such as:
  - Saving Tips
  - Investing Tips
  - Debt Management Tips
  - Mixed Tips
- *Dynamic Display*: Tips are shuffled and displayed one at a time.
- *Typewriter Animation*: Tips are shown with a typewriter effect for an engaging user experience.
- *Auto-Rotation*: Tips change automatically every 10 seconds.

**Prominence**
- Provides users with actionable advice on saving, investing, and debt management, enhancing financial literacy.
- Offers quick, easy-to-implement tips that users can apply in their daily financial decisions.
- Covers diverse financial topics, making it relevant for users at different stages of their financial journey.

![alt text](https://media-hosting.imagekit.io/835072d44f6f4162/image-7.png?Expires=1839224805&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=h8DNgeRGHRfKajaWgGjDTuzqusKJicDwyI7lWW843zx0OYRBXVVqehMABuSewovHjNqz8nL71P7PJP6Bt2cFd8IUgNv2RnLLUOCaiJBZMkIS~M3Xj4~tYWKwJKTP~M86s6pl~4Nhh2jYAX90s4Lx~5~jG6c99Nqj2bXbn4hAOaMtLBfiq4ylv~21gode~GusjZJdyKFpN7VnJVwxxzmsJUg6f1L6sNZTQ0JLSATPviooOefXjomW0e8OQ47euUcz76GK0EdXaTHU1eF2sVm2G2l7qbrp00tjkduB5ER2Y8~T-bQRRtABx-TFCWNE072yBGW0FugNCuYzV3B1u6KsxQ__)

---
