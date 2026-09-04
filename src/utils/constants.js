import airindia from "../assets/airlines/airindia.jpeg";
import indigo from "../assets/airlines/indigo.jpeg";
import emirates from "../assets/airlines/emirates.jpeg";
import qatar from "../assets/airlines/qatar.jpeg";
import singapore from "../assets/airlines/singapore.jpeg";
import lufthansa from "../assets/airlines/lufthansa.jpeg";

export const destinations = [
  {
    id: 1,
    city: "Delhi",
    country: "India",
    price: "₹3,999",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800",
  },
  {
    id: 2,
    city: "Goa",
    country: "India",
    price: "₹4,999",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800",
  },
  {
    id: 3,
    city: "Dubai",
    country: "UAE",
    price: "₹18,999",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800",
  },
  {
    id: 4,
    city: "Paris",
    country: "France",
    price: "₹42,999",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800",
  },
  {
    id: 5,
    city: "Singapore",
    country: "Singapore",
    price: "₹25,999",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800",
  },
  {
    id: 6,
    city: "New York",
    country: "USA",
    price: "₹55,999",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?w=800",
  },
];

export const offers = [
  {
    id: 1,
    title: "30% OFF",
    subtitle: "International Flights",
    description:
      "Book international flights and save up to 30% this summer.",
    button: "Book Now",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200",
    color: "from-blue-600 to-cyan-500",
  },
  {
    id: 2,
    title: "Flat ₹2000 OFF",
    subtitle: "Domestic Flights",
    description:
      "Travel across India with exclusive discounts on every booking.",
    button: "Explore",
    image:
      "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?w=1200",
    color: "from-orange-500 to-pink-500",
  },
];

export const airlines = [
  {
    id: 1,
    name: "Air India",
    logo: airindia,
  },
  {
    id: 2,
    name: "IndiGo",
    logo: indigo,
  },
  {
    id: 3,
    name: "Emirates",
    logo: emirates,
  },
  {
    id: 4,
    name: "Qatar Airways",
    logo: qatar,
  },
  {
    id: 5,
    name: "Singapore Airlines",
    logo: singapore,
  },
  {
    id: 6,
    name: "Lufthansa",
    logo: lufthansa,
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    city: "Delhi",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "Booking was super easy and the prices were better than any other website. Highly recommended!",
  },
  {
    id: 2,
    name: "Priya Singh",
    city: "Lucknow",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "Excellent customer support and smooth payment experience. Loved the interface.",
  },
  {
    id: 3,
    name: "Amit Verma",
    city: "Mumbai",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    review:
      "Very clean design, fast booking process and amazing offers. Will definitely use again.",
  },
];