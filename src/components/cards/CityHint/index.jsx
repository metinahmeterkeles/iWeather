/* eslint-disable react/prop-types */
import styles from "./styles.module.css";
import HintButton from "../HintButton";

function CityHint({ hintData }) {
  return (
    <div className={styles.hintCard}>
      {hintData?.map((data, index) => {
        return <HintButton data={data} key={index} />;
      })}
    </div>
  );
}

export default CityHint;
