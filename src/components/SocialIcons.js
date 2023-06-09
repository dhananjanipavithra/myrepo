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
      
      <a className="icon" style={styles.icon} href="https://open.spotify.com/playlist/3wkJRBE6x667jzllAu1meP?si=4d706b1cf4164195/">
        <i className="fa-brands fa-spotify" aria-hidden="true" title="Pavithra Dhananjani' Spotify Radio"></i>
      </a>

      <a className="icon" style={styles.icon} href="https://github.com/dhananjanipavithra/">
        <i className="fa-brands fa-github" aria-hidden="true" title="Pavithra Dhananjani' Github"></i>
      </a>
      
    </div>
  );
};

export default SocialIcons;
