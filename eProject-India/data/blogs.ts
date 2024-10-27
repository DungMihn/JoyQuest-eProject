export interface Blog {
  id: number;
  title: string;
  writer_image: string;
  writer_name: string;
  date: string;
  content: string;
  description: string;
  imageUrl: string;
  images: { id: number; image: string }[];
}
export const blogs: Blog[] = [
  {
    id: 1,
    title: "How to Build a Campfire in 5 Easy Steps",
    writer_image: "https://duruthemes.com/demo/html/bycamp/img/team/3.jpg",
    writer_name: "John Doe",
    date: "2024-10-01",
    content:
      "Fansipan, the highest mountain in Vietnam, offers breathtaking views and an exhilarating hiking experience. This blog explores the best trails, preparation tips, and the stunning scenery awaiting adventurers. Learn about the history of Fansipan, why it's called 'the roof of Indochina,' and what to expect during the hike. We'll also cover essential gear, weather conditions, and ways to make your journey safer and more enjoyable. The experience is not only about reaching the summit but also about appreciating the beautiful landscapes along the way, making it a must-visit for nature lovers.",
    description:
      "Fansipan, the highest mountain in Vietnam, is one of the most attractive destinations for adventure travel enthusiasts.",
    imageUrl: "https://duruthemes.com/demo/html/bycamp/img/blog/01.jpg",
    images: [
      {
        id: 1,
        image: "https://duruthemes.com/demo/html/bycamp/img/slider/07.jpg",
      },
      {
        id: 2,
        image: "https://duruthemes.com/demo/html/bycamp/img/slider/08.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "20 Things to Do When Camping (Actually Fun!)",
    writer_image: "https://duruthemes.com/demo/html/bycamp/img/team/1.jpg",
    writer_name: "Jane Smith",
    date: "2024-09-15",
    content:
      "Da Nang is a vibrant city with a rich cultural heritage and stunning landscapes. This blog lists the top 10 must-see attractions that showcase the beauty and excitement of this coastal gem. From exploring the iconic Marble Mountains to soaking in the sun at My Khe Beach, there's something for everyone. Learn about the local cuisine, famous for its seafood dishes, and don't miss out on the Dragon Bridge, which lights up the night sky with its stunning displays. We'll also suggest some off-the-beaten-path experiences that add a unique twist to your trip.",
    description:
      "Da Nang is a livable city with many fascinating tourist spots. Discover the top 10 highlights you shouldn't miss!",
    imageUrl: "https://duruthemes.com/demo/html/bycamp/img/blog/02.jpg",
    images: [
      {
        id: 1,
        image: "https://duruthemes.com/demo/html/bycamp/img/slider/07.jpg",
      },
      {
        id: 2,
        image: "https://duruthemes.com/demo/html/bycamp/img/slider/08.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "How to Clean Your Tent in 4 Simple Steps",
    writer_image: "https://duruthemes.com/demo/html/bycamp/img/team/2.jpg",
    writer_name: "Alex Nguyen",
    date: "2024-08-10",
    content:
      "Vietnam's coastline is dotted with stunning beaches, each offering unique experiences. In this guide, we'll explore the best beaches for relaxation, adventure, and breathtaking views. From the tranquil shores of Phu Quoc to the surfing spots in Nha Trang, there's a beach for every type of traveler. We'll also share some tips on how to stay safe while enjoying water activities and how to find the best beachside accommodations. Don't miss out on exploring the local markets near the beaches, where you can find fresh seafood and authentic Vietnamese street food.",
    description:
      "Vietnam boasts some of the most beautiful beaches in the world. Here’s a guide to the must-visit beaches along the coastline.",
    imageUrl: "https://duruthemes.com/demo/html/bycamp/img/blog/03.jpg",
    images: [
      {
        id: 1,
        image: "https://duruthemes.com/demo/html/bycamp/img/slider/07.jpg",
      },
      {
        id: 2,
        image: "https://duruthemes.com/demo/html/bycamp/img/slider/08.jpg",
      },
    ],
  },
  {
    id: 4,
    title: "Tasting Street Food in Ho Chi Minh City",
    writer_image: "https://duruthemes.com/demo/html/bycamp/img/team/2.jpg",
    writer_name: "Lisa Tran",
    date: "2024-07-25",
    content:
      "Street food in Ho Chi Minh City is an adventure in itself. Join me as we navigate bustling markets and taste the flavors that make this city a food lover's paradise. From the famous Banh Mi and Pho to lesser-known dishes like Bun Mam, each bite offers a glimpse into the rich culinary culture of Vietnam. We'll also explore some of the best spots for street food and discuss the history behind these traditional dishes. Don't forget to try local desserts like Che, which provide a refreshing end to your street food journey.",
    description:
      "Dive into the vibrant street food scene of Ho Chi Minh City, where flavors come alive and every corner has a story.",
    imageUrl: "https://duruthemes.com/demo/html/bycamp/img/blog/04.jpg",
    images: [
      {
        id: 1,
        image: "https://duruthemes.com/demo/html/bycamp/img/slider/07.jpg",
      },
      {
        id: 2,
        image: "https://duruthemes.com/demo/html/bycamp/img/slider/08.jpg",
      },
    ],
  },
  {
    id: 5,
    title: "Exploring the Ancient Temples of Angkor Wat",
    writer_image: "https://duruthemes.com/demo/html/bycamp/img/team/4.jpg",
    writer_name: "Jane Smith",
    date: "2024-10-05",
    content:
      "Angkor Wat is one of the most iconic and stunning archaeological sites in the world. This blog will guide you through the history, architecture, and spiritual significance of the temple complex. Discover the best times to visit, tips for exploring the site, and nearby attractions that enhance your journey. Whether you're an avid history buff or simply looking for breathtaking views, Angkor Wat has something for everyone.",
    description:
      "A guide to the majestic Angkor Wat, the largest religious monument in the world.",
    imageUrl: "https://duruthemes.com/demo/html/bycamp/img/blog/02.jpg",
    images: [
      {
        id: 1,
        image: "https://duruthemes.com/demo/html/bycamp/img/slider/08.jpg",
      },
      {
        id: 2,
        image: "https://duruthemes.com/demo/html/bycamp/img/slider/09.jpg",
      },
    ],
  },
  {
    id: 6,
    title: "Top 10 Breathtaking Hiking Trails Around the World",
    writer_image: "https://duruthemes.com/demo/html/bycamp/img/team/5.jpg",
    writer_name: "Michael Brown",
    date: "2024-10-10",
    content:
      "For the adventure seeker, hiking is one of the most rewarding activities. This blog highlights ten of the most breathtaking hiking trails around the globe, each offering unique landscapes and experiences. From the rugged terrains of Patagonia to the serene paths of the Swiss Alps, discover where to find these trails and what to expect during your hike. This guide is perfect for those looking to challenge themselves and explore nature's beauty.",
    description:
      "A comprehensive list of the top hiking trails for outdoor enthusiasts.",
    imageUrl: "https://duruthemes.com/demo/html/bycamp/img/blog/03.jpg",
    images: [
      {
        id: 1,
        image: "https://duruthemes.com/demo/html/bycamp/img/slider/10.jpg",
      },
      {
        id: 2,
        image: "https://duruthemes.com/demo/html/bycamp/img/slider/11.jpg",
      },
    ],
  },
  {
    id: 7,
    title: "The Best Tips for Backpacking Through Europe",
    writer_image: "https://duruthemes.com/demo/html/bycamp/img/team/6.jpg",
    writer_name: "Emily Johnson",
    date: "2024-10-15",
    content:
      "Backpacking through Europe can be one of the most rewarding travel experiences. This blog offers tips on planning your itinerary, budgeting, and choosing accommodations that fit your travel style. We'll cover essential items to pack, safety tips, and how to meet fellow travelers along the way. Whether you’re a first-timer or a seasoned backpacker, this guide will help you navigate your journey through the beautiful landscapes and cultures of Europe.",
    description:
      "Essential tips for an unforgettable backpacking adventure across Europe.",
    imageUrl: "https://duruthemes.com/demo/html/bycamp/img/blog/04.jpg",
    images: [
      {
        id: 1,
        image: "https://duruthemes.com/demo/html/bycamp/img/slider/12.jpg",
      },
      {
        id: 2,
        image: "https://duruthemes.com/demo/html/bycamp/img/slider/13.jpg",
      },
    ],
  },
  {
    id: 8,
    title: "A Culinary Journey Through Vietnam",
    writer_image: "https://duruthemes.com/demo/html/bycamp/img/team/7.jpg",
    writer_name: "Sophia Lee",
    date: "2024-10-20",
    content:
      "Vietnam is renowned for its rich culinary heritage. This blog takes you on a journey through the must-try dishes and the best places to find authentic Vietnamese cuisine. From street food stalls to high-end restaurants, discover the flavors and ingredients that make Vietnamese food unique. We'll also share recipes and cooking tips to bring the taste of Vietnam into your own kitchen.",
    description:
      "Explore the vibrant flavors of Vietnamese cuisine with our comprehensive guide.",
    imageUrl: "https://duruthemes.com/demo/html/bycamp/img/blog/05.jpg",
    images: [
      {
        id: 1,
        image: "https://duruthemes.com/demo/html/bycamp/img/slider/14.jpg",
      },
      {
        id: 2,
        image: "https://duruthemes.com/demo/html/bycamp/img/slider/15.jpg",
      },
    ],
  },
];
