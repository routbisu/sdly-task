const allTopics = {
  covid19: 'COVID-19',
  payments: 'Payments',
};

const allUsers = {
  yhlens: {
    name: `Yh.lens`,
    level: `Level 3. Wonderkid`,
  },
};

const featuredTopics = [allTopics.covid19];

const allQuestions = [
  {
    question: `What does the market look like now? Does it look like it will decline further or is it a good time to invest?`,
    answers: [
      {
        content: [
          `As most long term investors say, It's not about timing the market, it's about time in the market. It is important to stay invested even if we are in a bear market, as for whether its a good time to invest, I believe that even if you decide to start investing today, you will still be doing way better than someone who does nothing and left their cash idle in a bank. In 10 years time, you have everything to gain while the other guy's has everything to lose. (inflation) The key now in the bear market is to determine solid companies with great fundamentals (eg Free Cashflow, High ROE, Low Debt/Equity Ratio etc.) Once you have identified these companies, you do not need to worry about timing the market, either lump sum invest or dollar cost average it every month until you're fully vested. For lump sum, you can divide it into 3 tranches so you can average it down in a downward trending market. Please do your own due diligence as well and note that this is not an investment advice, just my 2 cents.`,
          `Hope this helps.`,
        ],
        featured: true,
        author: allUsers.yhlens,
        time: `Mon Apr 20 2020 14:50:51 GMT+0800 (Singapore Standard Time)`,
      },
      {
        content: [`Non featured answer 1.`],
      },
      {
        content: [`Non featured answer 2.`],
      },
    ],
    topics: [allTopics.covid19],
  },
];

module.exports = { allTopics, allUsers, allQuestions, featuredTopics };
