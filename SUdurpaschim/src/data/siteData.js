import heroLandscape from "../assets/sudurpaschim/hero-landscape.svg";
import khaptad from "../assets/sudurpaschim/khaptad.svg";
import apiHimal from "../assets/sudurpaschim/api-himal.svg";
import shuklaphanta from "../assets/sudurpaschim/shuklaphanta.svg";
import dadeldhura from "../assets/sudurpaschim/dadeldhura.svg";
import bajhang from "../assets/sudurpaschim/bajhang.svg";
import gaura from "../assets/sudurpaschim/gaura.svg";
import tharu from "../assets/sudurpaschim/tharu.svg";

export const navigationLinks = [
  { label: "Home", to: "/" },
  { label: "Places", to: "/destinations" },
  { label: "Culture", to: "/culture" },
  { label: "Region", to: "/about-region" },
  { label: "Travel Guide", to: "/travel-guide" },
  { label: "Contact", to: "/contact" },
];

export const destinationItems = [
  {
    id: "khaptad",
    tag: "National Park",
    name: "Khaptad",
    location: "Bajhang, Bajura, Doti, Achham",
    sub: "Sacred meadows and monastery trails",
    category: "Nature",
    image: khaptad,
    bestTime: "October to November",
    difficulty: "Moderate",
    stay: "Community lodges and simple trekking stays",
    reach: "Drive to Silgadhi or Chainpur, then continue on foot with a local guide.",
    description:
      "Khaptad combines high meadows, forests, meditation sites, and open skies in a landscape that feels both spiritual and remote.",
    highlights: [
      "Wide high-altitude grasslands unlike most classic Nepal park imagery",
      "A strong spiritual identity linked to Khaptad Baba and meditation sites",
      "Slow, contemplative walking routes rather than rush-through sightseeing",
    ],
    special:
      "Khaptad stands out because it blends ecology and spirituality in the same experience. It is a place where the landscape feels quiet, spacious, and reflective rather than crowded or commercial.",
    gallery: [khaptad, heroLandscape, gaura],
    nearby: ["dadeldhura", "bajhang"],
  },
  {
    id: "api-himal",
    tag: "Trekking",
    name: "Api Himal",
    location: "Darchula",
    sub: "Alpine routes below Nepal's far-western giant",
    category: "Trekking",
    image: apiHimal,
    bestTime: "April to May and October",
    difficulty: "Challenging",
    stay: "Camping and expedition-style trekking support",
    reach: "Fly or drive to Dhangadhi, continue toward Darchula, then trek with support.",
    description:
      "Api Himal is the dramatic high-altitude face of the province, ideal for long trekking narratives and ambitious adventure content.",
    highlights: [
      "A major Himalayan skyline that defines the province's alpine identity",
      "Strong long-route trekking potential for adventure-focused visitors",
      "Remote access that preserves the sense of scale and seriousness",
    ],
    special:
      "Api Himal gives Sudurpashchim a distinctly high-altitude frontier character. It is one of the clearest examples of how remote, physically demanding landscapes shape the image of the far west.",
    gallery: [apiHimal, heroLandscape, bajhang],
    nearby: ["bajhang", "khaptad"],
  },
  {
    id: "shuklaphanta",
    tag: "Wildlife",
    name: "Shuklaphanta",
    location: "Kanchanpur",
    sub: "Grasslands, swamp deer, and tiger habitat",
    category: "Wildlife",
    image: shuklaphanta,
    bestTime: "November to March",
    difficulty: "Easy",
    stay: "Safari lodges and city-based stays near Mahendranagar",
    reach: "Reach Mahendranagar or Dhangadhi, then continue by road to the reserve gates.",
    description:
      "Shuklaphanta offers Terai contrast to the province's mountain identity, with grassland ecosystems, safari potential, and rich biodiversity.",
    highlights: [
      "One of the clearest lowland contrasts to the mountain image of the province",
      "Strong wildlife storytelling with grassland, deer, and tiger habitat",
      "Easy to combine with culture and gateway-city travel through Dhangadhi",
    ],
    special:
      "Shuklaphanta matters because it broadens how people imagine Sudurpashchim. The province is not only peaks and trekking routes; it also includes lowland ecology, wildlife, and a different way of traveling through the region.",
    gallery: [shuklaphanta, tharu, heroLandscape],
    nearby: ["dadeldhura", "khaptad"],
  },
  {
    id: "dadeldhura",
    tag: "Hill Town",
    name: "Dadeldhura",
    location: "Dadeldhura",
    sub: "A cool ridgeline escape with layered mountain views",
    category: "Culture",
    image: dadeldhura,
    bestTime: "Spring and autumn",
    difficulty: "Easy",
    stay: "Town hotels and roadside hill stays",
    reach: "Drive from Dhangadhi on the Mahakali Highway with scenic hill stops.",
    description:
      "Dadeldhura works as a slower hill-town stop, giving the site a more lived-in regional texture between remote trekking zones and lowland reserves.",
    highlights: [
      "A strong hill-town atmosphere with local rhythm and road-based access",
      "Useful as a transition point between the plains and deeper mountain routes",
      "Good for showing everyday life, not only scenic spectacle",
    ],
    special:
      "Dadeldhura gives the project realism. It helps tell the story of how people actually move through and live within Sudurpashchim, which makes the overall platform feel more grounded and useful.",
    gallery: [dadeldhura, tharu, heroLandscape],
    nearby: ["khaptad", "shuklaphanta"],
  },
  {
    id: "bajhang",
    tag: "Remote Trek",
    name: "Bajhang",
    location: "Bajhang",
    sub: "Quiet valleys, raw trails, and local homestays",
    category: "Trekking",
    image: bajhang,
    bestTime: "October and April",
    difficulty: "Moderate to challenging",
    stay: "Homestays, jeep-route stops, and trek support camps",
    reach: "Travel overland from Dhangadhi or Dipayal, then continue deeper by jeep or on foot.",
    description:
      "Bajhang adds the sense of remoteness that makes Sudurpashchim stand out, where quiet valleys and local hospitality define the experience.",
    highlights: [
      "Remote valleys and rough routes that feel distinctly far western",
      "Strong potential for slow-travel and homestay-based storytelling",
      "A good destination for showing underrepresented district-level identity",
    ],
    special:
      "Bajhang gives the website depth because it moves beyond well-known names and into places that feel genuinely less documented. It supports the wider idea of knowing Sudurpashchim better, not just repeating familiar travel highlights.",
    gallery: [bajhang, apiHimal, khaptad],
    nearby: ["api-himal", "khaptad"],
  },
];

export const sanctuaryItems = [
  { name: "Khaptad National Park", type: "Nature and spirituality", image: khaptad },
  { name: "Shuklaphanta Reserve", type: "Wildlife safari", image: shuklaphanta },
  { name: "Api Himal Base Camp", type: "High-altitude trek", image: apiHimal },
];

export const cultureItems = [
  {
    title: "Gaura Festival",
    description:
      "A major far-western celebration of devotion, ritual, song, and shared memory.",
    image: gaura,
  },
  {
    title: "Deuda Music",
    description:
      "Circular singing and movement traditions that make cultural gatherings feel deeply local.",
    image: khaptad,
  },
  {
    title: "Tharu Heritage",
    description:
      "Community traditions, vernacular design, craft, and food culture from the plains.",
    image: tharu,
  },
];

export const peopleItems = [
  { image: gaura, label: "Festival rituals" },
  { image: dadeldhura, label: "Mountain villages" },
  { image: bajhang, label: "Trail life" },
  { image: tharu, label: "Tharu identity" },
];

export const seasonItems = [
  {
    label: "Peak season",
    months: "Oct - Nov",
    rating: 5,
    desc: "Clear skies for trekking, wildlife drives, and long-distance views.",
  },
  {
    label: "Spring",
    months: "Mar - May",
    rating: 4,
    desc: "Warmer trails, flowering hillsides, and lively local travel.",
  },
  {
    label: "Monsoon",
    months: "Jun - Sep",
    rating: 2,
    desc: "Rich green scenery and dramatic rivers, but reduced road reliability.",
  },
  {
    label: "Winter",
    months: "Dec - Feb",
    rating: 3,
    desc: "Snow on higher routes and comfortable safaris in the lower plains.",
  },
];

export const facts = [
  { label: "Districts", value: "9" },
  { label: "Tallest peak", value: "7,132 m" },
  { label: "National park", value: "Khaptad" },
  { label: "Provincial hub", value: "Dhangadhi" },
];

export const regionHighlights = [
  "Sudurpashchim spans the Terai plains, mid-hills, and Himalayan frontier in a single province.",
  "The region is strong for trekking, wildlife, spiritual landscapes, and underrepresented cultural storytelling.",
  "For a portfolio project, it gives you room to practice list pages, detail pages, contact flows, and API-backed content.",
];

export const contactDetails = [
  { label: "Base", value: "Dhangadhi, Sudurpashchim" },
  { label: "Focus", value: "Tourism concept and portfolio build" },
  { label: "Stack", value: "React, Tailwind, Express, MongoDB" },
];

export const siteVisuals = {
  heroLandscape,
  gaura,
  tharu,
};
