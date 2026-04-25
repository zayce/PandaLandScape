export const PRODUCTS = [
  {
    id: "1",
    name: "Classic Brown Sugar",
    price: "$5.50",
    category: "Milk Tea",
    description:
      "Rich black tea, creamy milk, and our signature slow-cooked brown sugar boba.",
    image:
      "https://images.unsplash.com/photo-1572715655204-47e297d3b050?q=80&w=1287&auto=format&fit=crop",
    tag: "Best Seller",
  },
  {
    id: "2",
    name: "Velvet Taro",
    price: "$6.00",
    category: "Milk Tea",
    description:
      "Earthy, sweet, and incredibly creamy. Made with real taro paste for a smooth texture.",
    image:
      "https://images.unsplash.com/photo-1579954115545-a95591f28be0?q=80&w=1470&auto=format&fit=crop",
  },
  {
    id: "3",
    name: "Premium Matcha",
    price: "$6.50",
    category: "Milk Tea",
    description:
      "Ceremonial grade matcha whisked to perfection, layered over fresh milk.",
    image:
      "https://images.unsplash.com/photo-1582743223274-06900692797e?q=80&w=1287&auto=format&fit=crop",
  },
  {
    id: "4",
    name: "Tropical Passion",
    price: "$5.75",
    category: "Fruit Tea",
    description:
      "Jasmine green tea shaken with real passionfruit pulp and aloe vera bits.",
    image:
      "https://images.unsplash.com/photo-1544145945-f904253db0ad?q=80&w=1287&auto=format&fit=crop",
    tag: "New",
  },
  {
    id: "5",
    name: "Strawberry Splash",
    price: "$6.25",
    category: "Fruit Tea",
    description:
      "Fresh muddled strawberries, Meyer lemon, and a subtle black tea base.",
    image:
      "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1287&auto=format&fit=crop",
  },
  {
    id: "6",
    name: "Strawberry Bliss",
    price: "$5.75",
    category: "Fruit Tea",
    description:
      "Fresh muddled strawberries shaken with premium jasmine green tea.",
    image:
      "https://images.unsplash.com/photo-1626081600854-3e91f1ce1c2b?q=80&w=1287&auto=format&fit=crop",
  },
];

export const LOCATIONS = [
  {
    id: "1",
    name: "Downtown Plaza",
    address: "123 Pearl Street, Suite A",
    city: "Metropolis",
    zip: "NY 10001",
    hours: {
      today: "10:00 AM - 9:00 PM",
      week: "Mon-Fri: 10:00 AM - 9:00 PM",
      weekend: "Sat-Sun: 11:00 AM - 10:00 PM",
    },
    status: "open",
    closest: true,
  },
  {
    id: "2",
    name: "Westside Mall",
    address: "4500 Shopper's Way, Food Court",
    city: "Metropolis",
    zip: "NY 10012",
    hours: {
      today: "11:00 AM - 8:00 PM",
      week: "Mon-Sun: 11:00 AM - 8:00 PM",
    },
    status: "open",
  },
  {
    id: "3",
    name: "University Campus",
    address: "88 College Ave, Student Center",
    city: "Metropolis",
    zip: "NY 10024",
    hours: {
      today: "Closed",
      week: "Mon-Fri: 8:00 AM - 6:00 PM",
      weekend: "Sat-Sun: Closed",
    },
    status: "closed",
  },
];
