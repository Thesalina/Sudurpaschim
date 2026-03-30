import heroLandscape from "../assets/sudurpaschim/heropage.avif";
import khaptad from "../assets/sudurpaschim/khaptad.jpg";
import apiHimal from "../assets/sudurpaschim/api.jpeg";
import shuklaphanta from "../assets/sudurpaschim/sukhlaphata.jpg";
import dadeldhura from "../assets/sudurpaschim/dadeldhura.jpg";
import bajhang from "../assets/sudurpaschim/bajhang.jpg";
import gaura from "../assets/sudurpaschim/gaura.jpg";
import tharu from "../assets/sudurpaschim/tharuheritage.jpg";
import deuda from "../assets/sudurpaschim/deuda.png";
import chhaupadi from "../assets/sudurpaschim/chaupadi.jpg";
import language from "../assets/sudurpaschim/language.jpg";
import dress from "../assets/sudurpaschim/dress.jpg";
import food from "../assets/sudurpaschim/food.svg";
import village from "../assets/sudurpaschim/village.jpg";
import religion from "../assets/sudurpaschim/religion.jpg";
import badimalika from "../assets/sudurpaschim/badimalika.jpg";
import ghodaghodi from "../assets/sudurpaschim/ghodaghodi-lake.jpg";
import ramaroshan from "../assets/sudurpaschim/ramrosan.jpg";
import bridge from "../assets/sudurpaschim/dodharachandanibridge.avif";
import tikapur from "../assets/sudurpaschim/tikapur.jpg";

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
      "Dadeldhura shows everyday hill-town life and how people actually move through Sudurpashchim, grounding the region between plains and high trails.",
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
  "It offers a wide mix of journeys—treks, safaris, hill towns, and pilgrimage routes—so visitors can plan different kinds of trips from one place.",
];

export const regionOverviewCards = [
  {
    title: "Geography",
    description:
      "The province stretches from lowland plains to high Himalayan terrain, creating one of Nepal's widest landscape contrasts within a single region.",
  },
  {
    title: "District Identity",
    description:
      "Each district adds a different rhythm to Sudurpashchim, from gateway cities and hill towns to remote valleys and pilgrimage routes.",
  },
  {
    title: "Culture and Language",
    description:
      "Doteli, Deuda traditions, Gaura, Tharu heritage, and local belief systems shape a cultural identity that feels distinct from the rest of Nepal.",
  },
  {
    title: "Why It Matters",
    description:
      "Sudurpashchim is often underrepresented online, which makes this region especially valuable for a deeper, more educational platform.",
  },
];

export const districtHighlights = [
  "Dhangadhi and Kailali function as the main lowland gateway for travel, trade, and movement.",
  "Darchula and Bajhang represent the remote mountain frontier and stronger trekking identity.",
  "Bajura and Achham hold pilgrimage sites, hill communities, and quieter regional stories.",
  "Kanchanpur broadens the province with wildlife landscapes and border-connected mobility.",
];

export const travelGuideSections = [
  {
    title: "How to Reach",
    description:
      "Most journeys start through Dhangadhi by flight or long-distance road travel, then continue toward hill districts or protected areas depending on your route.",
  },
  {
    title: "Where to Stay",
    description:
      "Accommodation ranges from city hotels and hill lodges to safari stays, homestays, and simple trekking support in remote districts.",
  },
  {
    title: "Budget and Food",
    description:
      "Costs vary by route. City travel is simpler and more predictable, while remote hill or trekking journeys require extra transport and support planning.",
  },
  {
    title: "Safety and Preparation",
    description:
      "Weather, road conditions, remoteness, and local support matter much more here than in easy urban trips, especially outside the plains.",
  },
];

export const contactDetails = [
  { label: "Base", value: "Dhangadhi, Sudurpashchim" },
  { label: "Focus", value: "Visitor guidance, local partnerships" },
  { label: "Response", value: "We reply as quickly as possible" },
];

export const siteVisuals = {
  heroLandscape,
  gaura,
  tharu,
};
