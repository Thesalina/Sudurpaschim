import { hydrateCulturePost, hydrateDestination } from "./assetMap";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

async function request(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    ...options,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Request failed.");
  }

  return data;
}

export async function fetchDestinations({ category = "All", search = "" } = {}) {
  const params = new URLSearchParams();

  if (category && category !== "All") {
    params.set("category", category);
  }

  if (search.trim()) {
    params.set("search", search.trim());
  }

  const query = params.toString();
  const data = await request(`/destinations${query ? `?${query}` : ""}`);

  return data.data.map(hydrateDestination);
}

export async function fetchDestinationById(destinationId) {
  const data = await request(`/destinations/${destinationId}`);
  return hydrateDestination(data.data);
}

export async function fetchCulturePosts() {
  const data = await request("/culture");
  return data.data.map(hydrateCulturePost);
}

export async function submitContactMessage(payload) {
  const data = await request("/contact", {
    method: "POST",
    body: JSON.stringify(payload),
  });

  return data;
}
