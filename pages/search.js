import ResultCard from "../containers/SearchResult/sections/resultCard";
import { getResultsByPin, getResultsByDistrict } from "../network";
import styles from "../styles/search.module.css";

export default function Search(props) {
  console.log(props);
  const { results } = props;

  return (
    <div>
      {results.map((r) => (
        <ResultCard data={r} key={r.center_id} />
      ))}
    </div>
  );
}

export async function getServerSideProps(context) {
  // Fetch data from external API
  const { query } = context;

  const { pincode, date, district } = query;

  let data = [];
  if (pincode) {
    const requestData = { pincode, date };

    data = await getResultsByPin(requestData);
  }

  if (district) {
    const requestData = { districtId: district, date };

    data = await getResultsByDistrict(requestData);
  }

  // Pass data to the page via props
  return { props: { results: data } };
}
