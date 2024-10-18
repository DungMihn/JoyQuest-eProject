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
];
