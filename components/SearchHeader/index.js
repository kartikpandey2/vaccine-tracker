import styles from "./styles/index.module.css";

const SearchHeader = (props) => {
  const {} = props;

  return (
    <div className={styles.searchHeader}>
      <div className={styles.backButttonContainer}>
        <svg
          viewBox="0 0 16 16"
          role="presentation"
          aria-hidden="true"
          focusable="false"
          style={{
            height: "1em",
            width: "1em",
            display: "block",
            fill: "currentcolor",
          }}
        >
          <path d="m10.8 16c-.4 0-.7-.1-.9-.4l-6.8-6.7c-.5-.5-.5-1.3 0-1.8l6.8-6.7c.5-.5 1.2-.5 1.7 0s .5 1.2 0 1.7l-5.8 5.9 5.8 5.9c.5.5.5 1.2 0 1.7-.2.3-.5.4-.8.4"></path>
        </svg>
      </div>
      <div className={styles.childrenContainer}>{props.children}</div>
      <div className={styles.filterContainer}>
        <svg
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="presentation"
          focusable="false"
          style={{
            display: "block",
            height: "16px",
            width: "16px",
            fill: "rgb(34, 34, 34)",
          }}
        >
          <path d="M5 8c1.306 0 2.418.835 2.83 2H14v2H7.829A3.001 3.001 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.829 4H2V4h6.17A3.001 3.001 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
        </svg>
      </div>
    </div>
  );
};

export default SearchHeader;
