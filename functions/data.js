const allTopics = {
  covid19: 'COVID-19',
  payments: 'Payments',
  roboAdvisors: 'Robo-Advisors',
  seedlyTvS204: 'SeedlyTV S2E04',
  fireMovement: 'FIRE Movement',
  MileLion: 'mileLion',
  sgBudgetBabe: 'SG Budget Babe',
  stocksDiscussion: 'Stocks Discussion',
  investments: 'Investments',
  insurance: 'Insurance',
  property: 'Property',
  creditCards: 'Credit Cards',
  savings: 'Savings',
  lifestyle: 'Lifestyle',
};

const allUsers = {
  elijahLee: {
    profile: `https://f.seedly.sg/assets/files/000/002/967/square/9088ef4d86df9746368f3bbe8e2c902cb550bfe2.jpg?1561623440`,
    name: `Elijah Lee`,
    level: `Level 10. Unicorn`,
  },
  wilson: {
    profile: `https://graph.facebook.com/v3.1/10157888516515744/picture?type=square`,
    name: `Wilson Nid A Break`,
    level: `Level 8. Wizard`,
  },
  danielLim: {
    profile: `https://graph.facebook.com/2540542656000956/picture?type=square`,
    name: `Daniel Lim`,
    level: `Level 3. Wonderkid`,
  },
  lokYangTeng: {
    profile: `https://graph.facebook.com/v2.6/973692769482722/picture?type=square`,
    name: `Lok Yang Teng`,
    level: `Level 8. Wizard`,
  },
  cedricJamieSoh: {
    profile: `https://graph.facebook.com/v3.1/10161391054930721/picture?type=square`,
    name: `Cedric Jamie Soh`,
    level: `Level 9. God of Wisdom`,
  },
};

const featuredTopics = [
  allTopics.covid19,
  allTopics.payments,
  allTopics.roboAdvisors,
  allTopics.seedlyTvS204,
  allTopics.fireMovement,
  allTopics.MileLion,
  allTopics.sgBudgetBabe,
  allTopics.stocksDiscussion,
  allTopics.investments,
  allTopics.insurance,
];

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
        time: `Mon Apr 16 2020 14:50:51 GMT+0800 (Singapore Standard Time)`,
      },
      {
        content: [`Non featured answer 1.`],
      },
      {
        content: [`Non featured answer 2.`],
      },
    ],
    topics: [allTopics.covid19, allTopics.payments, allTopics.roboAdvisors],
    likes: 9,
  },
  {
    question: `Is it really impossible to make money through trading over the long run?`,
    answers: [
      {
        content: [
          `Hi anon,`,
          `It's not impossible, just improbable.`,
          `You'll need to have a very disciplined game plan and stick to it, and learn to short the markets so that regardless of the direction of market movement, you'll still make something.`,
          `Further more, you will need nerves of steel, because it can be terrifying to see your money go down the drain when you execute your stop loss plan.`,
          `Probably 80% of those who trade will lose money in the end. 15% probably break even, and 5% make. But with that 5% chance, its enough to make people want to try. After all, we know the odds are stacked against us in Toto, but that 0.0000001% chance of striking a million (or two) makes people buy the ticket anyway.`,
        ],
        featured: true,
        author: allUsers.elijahLee,
        time: `Mon Apr 10 2020 14:50:51 GMT+0800 (Singapore Standard Time)`,
      },
      {
        content: [`Non featured answer 1.`],
      },
      {
        content: [`Non featured answer 2.`],
      },
      {
        content: [`Non featured answer 2.`],
      },
      {
        content: [`Non featured answer 2.`],
      },
    ],
    topics: [allTopics.covid19, allTopics.roboAdvisors],
    likes: 6,
  },
  {
    question: `Are there any administrative fees (i.e. management fees) or additional taxes that are applicable to REITs that would impact the distribution rate?`,
    answers: [
      {
        content: [
          `If you're buying REITs from a fund, either in the form of a roboadvisor or unit trust, you will have to pay some management fees. If you're buying into the REIT directly, then you will want to consider the holding fees associated with the brokerage firm you have engaged.`,
        ],
        featured: true,
        author: allUsers.lokYangTeng,
        time: `Mon Apr 27 2020 14:50:51 GMT+0800 (Singapore Standard Time)`,
      },
      {
        content: [`Non featured answer 1.`],
      },
    ],
    topics: [
      allTopics.roboAdvisors,
      allTopics.seedlyTvS204,
      allTopics.fireMovement,
    ],
    likes: 120,
  },
  {
    question: `Hi! Can someone help me calculate how much transactions fees or total fees I am paying for Pulsar if I am throwing in 10k a year?`,
    answers: [
      {
        content: [
          `Hi anon,`,
          `In addition to what was already listed fees wise, be aware that the account maintainence fee is 4% of your first 18 month's premium, perpetually. So this 4% as a proportion of your entire portfolio value will eventually start to drop, but the other 2% + $10/mth will continue for the rest of the policy's duration.`,
          `Go to this website, key in $0 for the base amount, 1% for the yearly return (which approximates the current FD rates), 30 years calculation period, and $833/mth deposit (which is around $10K/yr. Press the calculate button, look at the final figure, and compare that to the projections from your policy illustration. It should help put things in perspective for you. I hope you will draw a conclusion from that.`,
        ],
        featured: true,
        author: allUsers.lokYangTeng,
        time: `Mon Apr 27 2020 14:50:51 GMT+0800 (Singapore Standard Time)`,
      },
      {
        content: [`Non featured answer 1.`],
      },
      {
        content: [`Non featured answer 1.`],
      },
      {
        content: [`Non featured answer 1.`],
      },
      {
        content: [`Non featured answer 1.`],
      },
    ],
    topics: [allTopics.investments],
    likes: 3,
  },
  {
    question: `Hi! Can someone help me calculate how much transactions fees or total fees I am paying for Pulsar if I am throwing in 10k a year?`,
    answers: [
      {
        content: [
          `Third-party couriers are now instructed not to visit home addresses (warehouse address are fine).`,
          `because of this news:`,
          `This instruction is very new today (27th April) and all the couriers are confused as well. There are change.org petition for the government to allow home-based ecommerce business to allow couriers, if not there would be tens of thousands of businesses forced to shut down for a few weeks.​​​`,
        ],
        featured: true,
        author: allUsers.cedricJamieSoh,
        time: `Mon Apr 27 2020 14:50:51 GMT+0800 (Singapore Standard Time)`,
      },
      {
        content: [`Non featured answer 1.`],
      },
      {
        content: [`Non featured answer 1.`],
      },
    ],
    topics: [allTopics.covid19, allTopics.insurance],
    likes: 8,
  },
];

module.exports = { allTopics, allUsers, allQuestions, featuredTopics };
