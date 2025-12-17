import React, { useEffect, useRef, useState } from "react";
import "./Wallpapers.css";

const UNSPLASH_ACCESS_KEY = "87j8q8P5T33MmhP5VbjrzvdFKjmw67mD7pk_pPMRAKE";
const MIN_4K_WIDTH = 3840;

function handleBack() {
  if (window.history.length > 1) {
    window.history.back();
  } else {
    window.location.href = "/";
  }
}

export default function Wallpaper({ onSelect }) {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(false);

  const scrollRef = useRef(null);

  useEffect(() => {
    fetchWallpapers();
    // eslint-disable-next-line
  }, [page, query]);

  const fetchWallpapers = async () => {
    if (loading) return;
    setLoading(true);

    const url = query
      ? `https://api.unsplash.com/search/photos?page=${page}&per_page=30&query=${encodeURIComponent(
          query
        )}&orientation=landscape`
      : `https://api.unsplash.com/photos?page=${page}&per_page=30&order_by=popular`;

    try {
      const res = await fetch(url, {
        headers: {
          Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
        },
      });

      const data = await res.json();
      const results = query ? data.results : data;

      const fourKPhotos = results.filter(
        (photo) => photo.width >= MIN_4K_WIDTH
      );

      setPhotos((prev) =>
        page === 1 ? fourKPhotos : [...prev, ...fourKPhotos]
      );
    } catch (err) {
      console.error("Unsplash error:", err);
    } finally {
      setLoading(false);
    }
  };

  /* ✅ SCROLL HANDLER */
  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el || loading) return;

    const scrollPosition = el.scrollTop + el.clientHeight;
    const scrollThreshold = el.scrollHeight * 0.8;

    if (scrollPosition >= scrollThreshold) {
      setPage((prev) => prev + 1);
    }
  };

  const handleSearch = () => {
    if (!searchInput.trim()) return;
    setPhotos([]);
    setPage(1);
    setQuery(searchInput.trim());
  };

  return (
    <div className="wallpaper-layout">
      {/* HEADER */}
      <header className="wallpaper-header">
        <button className="wallpaper-back-btn" onClick={handleBack}>
          ←
        </button>

        <h1 className="wallpaper-title">Wallpapers</h1>

        <div className="wallpaper-search">
          <input
            type="text"
            placeholder="Search 4K wallpapers..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </header>

      {/* CONTENT */}
      <div className="wallpaper-root" ref={scrollRef} onScroll={handleScroll}>
        <div className="wallpaper-masonry">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="wallpaper-tile"
              onClick={() => onSelect?.(photo.urls.full)}
            >
              <img
                src={photo.urls.small}
                alt={photo.alt_description || "wallpaper"}
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {loading && (
          <div className="wallpaper-loading">Loading more 4K+ images…</div>
        )}
      </div>
    </div>
  );
}
