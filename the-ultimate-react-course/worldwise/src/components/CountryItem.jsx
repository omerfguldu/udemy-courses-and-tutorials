import styles from "./CountryItem.module.css";

import FlagEmoji from "./FlagEmoji";

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <FlagEmoji emoji={country.emoji} />
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
