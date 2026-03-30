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

const assetMap = {
  "/assets/sudurpaschim/hero-landscape.svg": heroLandscape,
  "/assets/sudurpaschim/khaptad.svg": khaptad,
  "/assets/sudurpaschim/api-himal.svg": apiHimal,
  "/assets/sudurpaschim/shuklaphanta.svg": shuklaphanta,
  "/assets/sudurpaschim/dadeldhura.svg": dadeldhura,
  "/assets/sudurpaschim/bajhang.svg": bajhang,
  "/assets/sudurpaschim/gaura.svg": gaura,
  "/assets/sudurpaschim/tharu.svg": tharu,
  "/assets/sudurpaschim/deuda.svg": deuda,
  "/assets/sudurpaschim/chhaupadi.svg": chhaupadi,
  "/assets/sudurpaschim/language.svg": language,
  "/assets/sudurpaschim/dress.svg": dress,
  "/assets/sudurpaschim/food.svg": food,
  "/assets/sudurpaschim/village.svg": village,
  "/assets/sudurpaschim/religion.svg": religion,
  "/assets/sudurpaschim/badimalika.svg": badimalika,
  "/assets/sudurpaschim/apihimal.svg": apiHimal,
  "/assets/sudurpaschim/ghodaghodi.svg": ghodaghodi,
  "/assets/sudurpaschim/ramaroshan.svg": ramaroshan,
  "/assets/sudurpaschim/bridge.svg": bridge,
  "/assets/sudurpaschim/tikapur.svg": tikapur,
};

export function resolveAsset(path) {
  return assetMap[path] || path;
}

export function hydrateDestination(destination) {
  return {
    ...destination,
    image: resolveAsset(destination.image),
    gallery: Array.isArray(destination.gallery)
      ? destination.gallery.map(resolveAsset)
      : [],
  };
}

export function hydrateCulturePost(post) {
  return {
    ...post,
    image: resolveAsset(post.image),
  };
}
