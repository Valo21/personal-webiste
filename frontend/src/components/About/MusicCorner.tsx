const MusicCorner = () => {
  return (
    <section
      className="text-white py-5 text-center position-relative"
      style={{
        backgroundImage: "url(https://wallpaperaccess.com/full/15399569.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className="text-center mb-4 py-4 bg-dark fw-bold">My Music Corner</h2>

      <figure className="d-flex justify-content-center">
        <iframe
          title="Spotify Playlist"
          src="https://open.spotify.com/embed/playlist/1WCRwQ0f4yT8tuIUUxP5m1?utm_source=generator"
          width="100%"
          height="380"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          style={{ maxWidth: "400px" }}
        ></iframe>
      </figure>
    </section>
  );
};

export default MusicCorner;
