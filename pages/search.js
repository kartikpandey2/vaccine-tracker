import { useRouter } from "next/router";
import ResultCard from "../containers/SearchResult/sections/resultCard";
import SearchHeader from "../components/SearchHeader";
import { getResultsByPin, getResultsByDistrict } from "../network";
import styles from "../styles/search.module.css";

const getSubHeading = (props) => {
  const { results } = props;

  if (results.length) {
    return `${results.length} centers for vaccination`;
  }
};

export default function Search(props) {
  const router = useRouter();
  const { results } = props;

  return (
    <div className={styles.searchContainer}>
      <div>
        <SearchHeader
          onBackClick={() => router.back()}
          onEdit={() => {}}
          onFilterClick={() => {}}
        >
          Kasauli 17 Aug – 18 Aug • 1 guest
        </SearchHeader>
      </div>
      <div className={styles.headingContainer}>
        <h3>{getSubHeading(props)}</h3>
      </div>
      <div className={styles.resultCardContainer}>
        {results.map((r) => (
          <ResultCard
            className={styles.resultCard}
            data={r}
            key={r.center_id}
          />
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  // Fetch data from external API
  const props = {};
  const { query } = context;

  let { pincode, date, district } = query;

  pincode = parseInt(pincode);

  let data = [];
  if (pincode) {
    const requestData = { pincode, date };

    data = await getResultsByPin(requestData);
    props.results = data;
    props.pincode = pincode;
    props.date = date;
  }

  if (district) {
    const requestData = { districtId: district, date };

    data = await getResultsByDistrict(requestData);
    props.results = data;
    props.district = district;
    props.date = date;
  }

  // Pass data to the page via props
  return { props };
}
