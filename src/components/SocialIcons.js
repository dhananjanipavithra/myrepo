const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a className="icon" style={styles.icon} href="https://www.youtube.com/@PavithraDhananjani">
        <i className="fa-brands fa-youtube" aria-hidden="true" title="Pavithra Dhananjani' Youtube  Channel"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.linkedin.com/in/mdyeates/">
        <i className="fa-brands fa-linkedin" aria-hidden="true" title="Michael Yeates' LinkedIn Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://open.spotify.com/playlist/37i9dQZF1E4wjx6WM0yqXI?si=4bb96552ac044985/">
        <i className="fa-brands fa-spotify" aria-hidden="true" title="Pavithra Dhananjani' Spotify Radio"></i>
      </a>
      
    </div>
  );
};

export default SocialIcons;
