export type OutletFaq = {
  question: string;
  answer: string;
};

export type Outlet = {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  /** Short name guests search for, e.g. "Stories HSR" */
  nickname: string;
  fullTitle: string;
  tagline: string;
  /** Home page card blurb */
  blurb: string;
  /** Locations index card blurb (doc has different copy than Home) */
  indexBlurb: string;
  suitableFor: string[];

  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];

  address: string;
  landmark: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  email: string;
  hours: string;
  cuisines: string[];
  instagram: string;
  /** ReserveGo online table reservation widget URL */
  reservationUrl: string;

  introHeading: string;
  introBody: string;
  aboutBody: string;
  whatToExpect: string[];

  foodDrinksHeading: string;
  foodDrinksBody: string;

  eventsBody: string;
  celebrationsHeading: string;
  celebrationsBody: string;

  galleryCategories: string[];

  faqs: OutletFaq[];

  finalCtaHeading: string;
  finalCtaBody: string;
};

export const outlets: Outlet[] = [
  {
    id: "hsr",
    slug: "hsr-layout",
    name: "HSR Layout",
    shortName: "HSR Layout",
    nickname: "Stories HSR",
    fullTitle: "Stories Bar & Kitchen – HSR Layout",
    tagline: "Good food, vibrant evenings and stories worth sharing.",
    blurb:
      "A lively bar and restaurant in HSR Layout for relaxed lunches, after-work drinks, music nights and weekend celebrations.",
    indexBlurb:
      "A lively multicuisine bar and restaurant in HSR Layout Sector 6 for food, cocktails, live music and celebrations.",
    suitableFor: [
      "Casual dining",
      "After-work drinks",
      "Music nights",
      "Group celebrations",
    ],
    seoTitle: "Stories Bar and Kitchen HSR Layout | Bar, Pub & Restaurant",
    seoDescription:
      "Stories HSR is a multicuisine bar and restaurant in HSR Layout Sector 6 with North Indian, Italian and Continental food, cocktails, live music and DJ nights. Open till 1 AM.",
    seoKeywords: [
      "Stories Bar and Kitchen HSR Layout",
      "Stories HSR",
      "restaurants in HSR Layout",
      "bars in HSR Layout",
      "pubs in HSR Layout",
      "bar and restaurant in HSR Layout",
      "multicuisine restaurant in HSR Layout",
      "restaurants in HSR Layout Sector 6",
      "live music in HSR Layout",
      "cocktails in HSR Layout",
      "birthday party restaurant in HSR Layout",
      "corporate party venue in HSR Layout",
    ],
    address:
      "365, 365A & 366, Time Square, 6th Sector, HSR Layout, 5th Main Road, Ring Road (Service Road), HSR, Bangalore",
    landmark: "",
    phone: "+918046809320",
    phoneDisplay: "080468 09320",
    whatsapp: "+918046809320",
    email: "hsr@storiesbarandkitchen.com",
    hours: "12 noon – 1 am daily",
    cuisines: ["North Indian", "Continental", "Italian"],
    instagram: "https://www.instagram.com/storiesbarandkitchen_hsr/",
    reservationUrl:
      "https://widget.reservego.co/reserveOutlets/69bcd9150f2197fb3951dcb3",
    introHeading: "Your Neighbourhood Bar and Restaurant in HSR Layout",
    introBody:
      "Stories Bar & Kitchen, HSR Layout, is a lively multicuisine restaurant in HSR Layout, with a full bar, for relaxed lunches, after-work drinks, dinners with friends and weekend celebrations. Drop in for a casual afternoon meal, meet your colleagues after work or soak up the energy of our music nights — and with the kitchen and bar open till 1 AM every day, it is one of the easiest late-night restaurants in HSR Layout to settle into.",
    aboutBody:
      "Located at Time Square on 5th Main Road in HSR Layout Sector 6, Stories HSR is a casual dining restaurant with a bar that works for families, couples, friends and colleagues alike. Good ambience, comfortable seating and a menu of vegetarian and non-vegetarian food make it an easy lunch place, a date night restaurant or an evening hangout — with live music, DJ nights and karaoke on selected days. It is no surprise that many guests count it among the best bars in HSR Layout.",
    whatToExpect: [
      "Comfortable seating and good ambience",
      "Vegetarian and non-vegetarian food",
      "Cocktails, beers, spirits and mocktails",
      "Live music and entertainment on selected days",
      "Group dining arrangements",
      "Birthday and celebration assistance",
      "Corporate gathering options",
      "Table booking support",
    ],
    foodDrinksHeading: "North Indian, Italian and Continental Food in HSR Layout",
    foodDrinksBody:
      "Explore shareable starters and pub food, North Indian favourites, Italian pasta, Asian dishes, Continental selections, main courses and desserts — with plenty of vegetarian food alongside non-veg favourites. Pair your meal with signature cocktails, classic cocktails, beers, spirits and mocktails, whether it is a quick round of after-work drinks or a long weekend evening.",
    eventsBody:
      "Nightlife in HSR Layout comes alive at Stories with live music and live band performances, DJ nights, karaoke nights, sports screenings, themed parties and weekend events — from Friday and Saturday night events to relaxed Sunday sessions, on selected days.",
    celebrationsHeading: "Birthday and Corporate Parties at Stories HSR",
    celebrationsBody:
      "Planning a birthday party, birthday dinner, anniversary dinner, reunion, team dinner or office party in HSR Layout? Our team can assist with group seating, food and beverage packages, entertainment and customised arrangements, making Stories HSR a dependable corporate party venue in HSR Layout and a group party restaurant for friends and family.",
    galleryCategories: [
      "Ambience",
      "Food",
      "Drinks",
      "Events",
      "Live performances",
      "Celebrations",
      "Guest moments",
    ],
    faqs: [
      {
        question: "Where is Stories Bar and Kitchen HSR Layout located?",
        answer:
          "Stories HSR is at 365, 365A & 366, Time Square, 6th Sector, HSR Layout, on 5th Main Road along the Ring Road service road — one of the easiest restaurants in HSR Layout Sector 6 to find, and a go-to among bars in HSR Layout for the neighbourhood.",
      },
      {
        question: "What are the timings of Stories HSR?",
        answer:
          "We are open from 12 noon to 1 AM every day, so Stories HSR is among the restaurants open till 1 AM in HSR Layout — ideal for lunch, dinner and late-night plans alike.",
      },
      {
        question: "How do I book a table at Stories HSR?",
        answer:
          "Stories HSR table booking is quick: use the Book a Table button on this page to reserve online, or call or WhatsApp us on 080468 09320. For large groups and parties, we recommend booking in advance.",
      },
      {
        question: "What is the Stories HSR contact number?",
        answer:
          "You can reach Stories HSR on 080468 09320 by phone or WhatsApp, or email hsr@storiesbarandkitchen.com.",
      },
      {
        question: "What is on the Stories HSR menu?",
        answer:
          "The Stories HSR menu covers North Indian, Italian, Continental and Asian dishes, from starters and pub food to pasta, main courses and desserts, along with signature cocktails, beers, spirits and mocktails.",
      },
      {
        question: "Does Stories HSR serve both veg and non-veg food?",
        answer:
          "Yes. The menu has a wide choice of vegetarian food alongside non-veg dishes, so mixed groups and families can order comfortably.",
      },
      {
        question: "What events happen at Stories HSR?",
        answer:
          "Stories HSR events include live music, live bands, DJ nights, karaoke nights, sports screenings and themed weekend events on selected days. Check our Events page for what is coming up.",
      },
      {
        question: "Can I host a birthday party or corporate party at Stories HSR?",
        answer:
          "Yes. We host birthday parties, anniversaries, reunions, team dinners, office parties and corporate events. Share your date and group size through our event enquiry form and our team will suggest suitable options.",
      },
    ],
    finalCtaHeading: "Ready to Create Your Next Story?",
    finalCtaBody:
      "Book a table at Stories Bar & Kitchen, HSR Layout, for great food, refreshing drinks and memorable experiences.",
  },
  {
    id: "nagarbhavi",
    slug: "nagarbhavi",
    name: "Nagarbhavi",
    shortName: "Nagarbhavi",
    nickname: "Stories Nagarbhavi",
    fullTitle: "Stories Bar & Kitchen – Nagarbhavi",
    tagline: "Where great flavours meet great company.",
    blurb:
      "A warm family restaurant and bar in Nagarbhavi for family dining, friendly gatherings, live entertainment and celebrations.",
    indexBlurb:
      "A welcoming bar and restaurant in Nagarbhavi 2nd Stage for family meals, friendly gatherings, entertainment and special occasions.",
    suitableFor: [
      "Family dining",
      "Group outings",
      "Weekend events",
      "Celebrations",
    ],
    seoTitle: "Stories Bar and Kitchen Nagarbhavi | Bar & Family Restaurant",
    seoDescription:
      "Stories Nagarbhavi is a bar and family restaurant on 80 Feet Road, Nagarbhavi 2nd Stage, serving North Indian, Chinese, pizza and cocktails, with weekend events. Open till 1 AM.",
    seoKeywords: [
      "Stories Bar and Kitchen Nagarbhavi",
      "Stories Nagarbhavi",
      "restaurants in Nagarbhavi",
      "bars in Nagarbhavi",
      "pubs in Nagarbhavi",
      "bar and restaurant in Nagarbhavi",
      "family restaurants in Nagarbhavi",
      "restaurants in Nagarbhavi 2nd Stage",
      "Chinese restaurant in Nagarbhavi",
      "cocktails in Nagarbhavi",
      "birthday party restaurant in Nagarbhavi",
      "corporate party venue in Nagarbhavi",
    ],
    address:
      "857, 3rd Floor, C L Arcade, 2nd Stage, Near Vinayaka Layout, 80 Feet Main Road, Nagarbhavi, Bangalore",
    landmark: "",
    phone: "+918046809512",
    phoneDisplay: "080468 09512",
    whatsapp: "+918046809512",
    email: "nagarbhavi@storiesbarandkitchen.com",
    hours: "12 noon – 1 am daily",
    cuisines: [
      "Bar Food",
      "Chinese",
      "Oriental",
      "North Indian",
      "Italian",
      "Pizza",
      "BBQ",
      "Desserts",
    ],
    instagram: "https://www.instagram.com/storiesbar_nagarbhavi/",
    reservationUrl:
      "https://widget.reservego.co/reserveOutlets/653e6e8416d6a2476004295f",
    introHeading: "Your Bar and Family Restaurant in Nagarbhavi",
    introBody:
      "Stories Bar & Kitchen, Nagarbhavi, brings together flavourful food, refreshing drinks and lively entertainment in a warm and welcoming atmosphere. Whether you are out for family dining, meeting friends for dinner or organising a special celebration, this multicuisine restaurant in Nagarbhavi, with its full bar, is designed to make every visit memorable.",
    aboutBody:
      "Located on the third floor of C L Arcade on 80 Feet Road in Nagarbhavi 2nd Stage, Stories Nagarbhavi is a casual dining restaurant with a bar for families, couples, friends and colleagues. With good ambience, comfortable group seating and both veg and non-veg food, it suits relaxed lunches, Sunday dining, date nights and family weekend outings alike — which is why many guests rate it among the best family restaurants in Nagarbhavi.",
    whatToExpect: [
      "Family-friendly dining",
      "Comfortable seating for groups",
      "Vegetarian and non-vegetarian dishes",
      "Cocktails, beers, spirits and mocktails",
      "Entertainment on selected days",
      "Birthday and celebration support",
      "Corporate gathering options",
      "Group reservations",
    ],
    foodDrinksHeading: "North Indian, Chinese and Pizza in Nagarbhavi",
    foodDrinksBody:
      "From shareable starters, pub food and BBQ to North Indian curries, Chinese and Oriental food, Italian dishes, pizza and desserts, our menu has something for every mood — with plenty of vegetarian food alongside non-veg favourites. Pair it with signature cocktails, beers, spirits or refreshing mocktails.",
    eventsBody:
      "Enjoy artist performances, DJ nights, music nights, Sunday experiences, festive celebrations and weekend events — Stories Nagarbhavi is one of the restaurants with entertainment that keeps nightlife in Nagarbhavi lively, from Friday and Saturday night events to family-friendly Sundays.",
    celebrationsHeading: "Birthday and Corporate Parties at Stories Nagarbhavi",
    celebrationsBody:
      "Looking for celebration venues in Nagarbhavi? Celebrate birthdays, birthday dinners, anniversaries, reunions, team dinners, office parties and group occasions with customised arrangements based on availability and group size.",
    galleryCategories: [
      "Ambience",
      "Food",
      "Drinks",
      "Family gatherings",
      "Music nights",
      "Celebrations",
      "Guest experiences",
    ],
    faqs: [
      {
        question: "Where is Stories Bar and Kitchen Nagarbhavi located?",
        answer:
          "Stories Nagarbhavi is at 857, 3rd Floor, C L Arcade, 2nd Stage, near Vinayaka Layout on 80 Feet Main Road — one of the most convenient restaurants in Nagarbhavi 2nd Stage and a favourite among pubs in Nagarbhavi.",
      },
      {
        question: "What are the timings of Stories Nagarbhavi?",
        answer:
          "We are open from 12 noon to 1 AM every day, for lunch, dinner and late evenings.",
      },
      {
        question: "How do I book a table at Stories Nagarbhavi?",
        answer:
          "For Stories Nagarbhavi table booking, use the Book a Table button on this page to reserve online, or call or WhatsApp us on 080468 09512. For families, large groups and parties, we recommend booking in advance.",
      },
      {
        question: "What is the Stories Nagarbhavi contact number?",
        answer:
          "You can reach Stories Nagarbhavi on 080468 09512 by phone or WhatsApp, or email nagarbhavi@storiesbarandkitchen.com.",
      },
      {
        question: "What is on the Stories Nagarbhavi menu?",
        answer:
          "The Stories Nagarbhavi menu includes North Indian, Chinese and Oriental food, Italian dishes, pizza, BBQ, starters, pub food and desserts, plus cocktails, beers, spirits and mocktails.",
      },
      {
        question: "Is Stories Nagarbhavi good for families?",
        answer:
          "Yes. It is a family-friendly restaurant with comfortable group seating and both vegetarian and non-vegetarian food, and it is a popular spot for Sunday dining and family weekend outings.",
      },
      {
        question: "What events happen at Stories Nagarbhavi?",
        answer:
          "Stories Nagarbhavi events include artist performances, DJ nights, music nights, Sunday experiences and festive celebrations on selected days. Check our Events page for the latest schedule.",
      },
      {
        question: "Can I host a birthday party or corporate party at Stories Nagarbhavi?",
        answer:
          "Yes. We host birthday parties, anniversaries, reunions, team dinners, office parties and corporate events. Share your date and group size through our event enquiry form and our team will suggest suitable options.",
      },
    ],
    finalCtaHeading: "Your Next Gathering Starts Here",
    finalCtaBody:
      "Book a table at Stories Bar & Kitchen, Nagarbhavi, for great food, refreshing drinks and memorable celebrations.",
  },
  {
    id: "rajajinagar",
    slug: "rajajinagar",
    name: "Rajajinagar",
    shortName: "Rajajinagar",
    nickname: "Stories Rajajinagar",
    fullTitle: "Stories Bar & Kitchen – Rajajinagar",
    tagline: "Food, music and unforgettable evenings.",
    blurb:
      "A vibrant bar and restaurant in Rajajinagar offering flavourful food, signature cocktails and energetic evenings.",
    indexBlurb:
      "A vibrant bar and restaurant on West of Chord Road offering flavourful food, refreshing drinks, music and sports screenings.",
    suitableFor: [
      "Lunches",
      "Evening outings",
      "Music nights",
      "Group gatherings",
    ],
    seoTitle: "Stories Bar and Kitchen Rajajinagar | Bar, Pub & Restaurant",
    seoDescription:
      "Stories Rajajinagar is a bar and restaurant on West of Chord Road serving North Indian, Chinese, seafood and pizza, with cocktails, DJ nights and sports screenings. Open till 1 AM.",
    seoKeywords: [
      "Stories Bar and Kitchen Rajajinagar",
      "Stories Rajajinagar",
      "restaurants in Rajajinagar",
      "bars in Rajajinagar",
      "pubs in Rajajinagar",
      "bar and restaurant in Rajajinagar",
      "restaurants on West of Chord Road",
      "seafood restaurant in Rajajinagar",
      "pubs with sports screening in Rajajinagar",
      "cocktails in Rajajinagar",
      "birthday party restaurant in Rajajinagar",
      "corporate party venue in Rajajinagar",
    ],
    address: "77, 1st R Block, West of Chord Road, Rajajinagar, Bangalore",
    landmark: "",
    phone: "+918046809322",
    phoneDisplay: "080468 09322",
    whatsapp: "+918046809322",
    email: "rajajinagar@storiesbarandkitchen.com",
    hours: "12 noon – 1 am daily",
    cuisines: [
      "Bar Food",
      "Chinese",
      "North Indian",
      "Italian",
      "Pizza",
      "Seafood",
      "Desserts",
    ],
    instagram: "https://www.instagram.com/storiesbar_rajajinagar/",
    reservationUrl:
      "https://widget.reservego.co/reserveOutlets/653e6e8316d6a247600428d4",
    introHeading: "A Vibrant Bar and Restaurant in Rajajinagar",
    introBody:
      "Stories Bar & Kitchen, Rajajinagar, is a destination for relaxed dining, refreshing drinks, music and energetic evenings. Visit this multicuisine restaurant in Rajajinagar for lunch, after-work drinks, weekend entertainment or a celebration with your favourite people — the kitchen and bar stay open till 1 AM every day.",
    aboutBody:
      "Located at 77, 1st R Block on West of Chord Road, Stories Rajajinagar offers a vibrant yet comfortable setting for casual dining, group outings and celebrations. With good ambience, veg and non-veg food and a full bar, it works as a family restaurant at lunch, a date night spot for couples and an evening hangout for friends — and many guests count it among the best pubs in Rajajinagar.",
    whatToExpect: [
      "Contemporary and comfortable ambience",
      "Vegetarian and non-vegetarian dishes",
      "Cocktails, beers, spirits and mocktails",
      "Music and entertainment on selected days",
      "Group reservations",
      "Celebration arrangements",
      "Corporate gathering support",
      "Seasonal experiences",
    ],
    foodDrinksHeading: "North Indian, Chinese, Seafood and Pizza in Rajajinagar",
    foodDrinksBody:
      "Begin with shareable starters and pub food, explore North Indian food, Chinese dishes, seafood, Italian favourites and pizza, and finish with desserts — with plenty of vegetarian food alongside non-veg favourites. Pair your meal with signature cocktails, beers, spirits and mocktails.",
    eventsBody:
      "Discover DJ nights, music nights, themed evenings and seasonal celebrations, plus sports screenings — including cricket and big-match screenings on selected days. It is one of the music restaurants and pubs with sports screening that shape nightlife in Rajajinagar, with Friday and Saturday night events and relaxed Sundays.",
    celebrationsHeading: "Birthday and Corporate Parties at Stories Rajajinagar",
    celebrationsBody:
      "Our team can assist with birthday parties, birthday dinners, anniversary dinners, reunions, team dinners, office parties and corporate gatherings — making Stories Rajajinagar an easy choice for a group party restaurant in Rajajinagar.",
    galleryCategories: [
      "Ambience",
      "Food",
      "Drinks",
      "DJ nights",
      "Live performances",
      "Group events",
      "Guest moments",
    ],
    faqs: [
      {
        question: "Where is Stories Bar and Kitchen Rajajinagar located?",
        answer:
          "Stories Rajajinagar is at 77, 1st R Block, West of Chord Road, Rajajinagar — one of the most central restaurants on West of Chord Road and an easy pick among bars in Rajajinagar.",
      },
      {
        question: "What are the timings of Stories Rajajinagar?",
        answer:
          "We are open from 12 noon to 1 AM every day, for lunch, dinner and late-night plans.",
      },
      {
        question: "How do I book a table at Stories Rajajinagar?",
        answer:
          "For Stories Rajajinagar table booking, use the Book a Table button on this page to reserve online, or call or WhatsApp us on 080468 09322. For large groups, match nights and parties, we recommend booking in advance.",
      },
      {
        question: "What is the Stories Rajajinagar contact number?",
        answer:
          "You can reach Stories Rajajinagar on 080468 09322 by phone or WhatsApp, or email rajajinagar@storiesbarandkitchen.com.",
      },
      {
        question: "What is on the Stories Rajajinagar menu?",
        answer:
          "The Stories Rajajinagar menu features North Indian food, Chinese dishes, seafood, Italian favourites, pizza, starters, pub food and desserts, along with signature cocktails, beers, spirits and mocktails.",
      },
      {
        question: "Does Stories Rajajinagar screen cricket and other sports?",
        answer:
          "Yes. We host sports screenings, including cricket and other big matches, on selected days. Follow our Events page or Instagram for match screening announcements.",
      },
      {
        question: "What events happen at Stories Rajajinagar?",
        answer:
          "Stories Rajajinagar events include DJ nights, music nights, themed evenings, sports screenings and seasonal celebrations on selected days.",
      },
      {
        question: "Can I host a birthday party or corporate party at Stories Rajajinagar?",
        answer:
          "Yes. We host birthday parties, anniversaries, reunions, team dinners, office parties and corporate events. Share your date and group size through our event enquiry form and our team will suggest suitable options.",
      },
    ],
    finalCtaHeading: "Make Your Evening a Story",
    finalCtaBody:
      "Book a table at Stories Bar & Kitchen, Rajajinagar, for food, drinks, music and memorable moments.",
  },
];

export function getOutletBySlug(slug: string) {
  return outlets.find((o) => o.slug === slug);
}

export const siteConfig = {
  name: "Stories Bar & Kitchen",
  url: "https://storiesbarandkitchen.com",
  email: "hello@storiesbarandkitchen.com",
} as const;
