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

## 1. Crypto Conversation Bot
Purpose: Assists users in understanding cryptocurrency markets, tracking prices, and learning trading concepts.
Features:
Provides real-time cryptocurrency data (e.g., bid, ask, last trade price, 24-hour volume).
Explains crypto trading terms like "bid," "ask," "spread," and "liquidity."
Offers personalized advice based on user preferences (trading, investing, or learning).
Suggests popular cryptocurrencies (e.g., BTCUSD, ETHUSD, SOLUSD).
Prominence:
Educates users about crypto markets, making it ideal for beginners.
Helps traders and investors make informed decisions by analyzing market trends.
How It Works:
Users interact with the bot via a chat interface.
The bot processes user queries, fetches data from the backend API (e.g., Gemini API), and provides insights.
It adapts responses based on user preferences and conversation flow.


![alt text](image-3.png)

## 2. Financial Purchase Advisor
Purpose: Helps users evaluate whether a purchase aligns with their budget.
Features:
Analyzes user income and purchase cost to determine affordability.
Provides recommendations on whether to proceed with the purchase.
Calculates monthly payment estimates for installment plans.
Prominence:
Encourages responsible spending habits.
Assists users in avoiding unnecessary debt by analyzing affordability.
How It Works:
Users input their income, the item they want to purchase, and its cost.
The bot calculates affordability based on a percentage of the user's income and provides actionable advice.

![alt text](image-4.png)

## 3. Investment Comparator
Purpose: Compares different investment options to help users maximize returns.
Features:
Allows users to input investment amount, duration, and select two options to compare.
Calculates projected returns based on historical averages.
Highlights the best option based on returns and risk levels.
Prominence:
Simplifies investment decision-making for users unfamiliar with financial markets.
Encourages informed investment choices by providing clear comparisons.
How It Works:
Users provide investment details.
The bot calculates future values using predefined return rates and risk factors.
Results are displayed with a detailed breakdown of each option.

![alt text](image-1.png)

## 4. Debt Manager Bot
Purpose: Helps users create and manage debt repayment plans.
Features:
Collects details about user debts (e.g., balance, interest rate, minimum payment).
Suggests repayment strategies like the "Snowball Method."
Provides monthly payment schedules and tracks progress.
Prominence:
Empowers users to become debt-free faster by optimizing repayment strategies.
Reduces financial stress by providing clear, actionable plans.
How It Works:
Users input details for each debt.
The bot calculates repayment schedules and prioritizes debts based on the chosen strategy.
Progress is tracked, and users receive updates on remaining balances.

![alt text](image.png)



