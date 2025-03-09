import { StaticImageData } from "next/image";
import undefinedProfilePicture from "./../undefinedProfilePicture.jpg";
import styles from "../../../styles/Staff.module.css";
import { useState } from "react";
import Modal from "./modal";
import DepartmentTags from "./tags/departmentTags";
interface Cards {
  picture: StaticImageData | undefined;
  name: string;
  departmentNumber: number;
  managingBoard: boolean;
  editorsInTraining: boolean;
}
export default function Card(props: Cards) {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <>
      {modalOpened === true ? (
        <div className={styles.modalArea}>
          <Modal
            name={props.name}
            description={"undefined at the moment"}
            photo={props.picture}
            managingBoard={props.managingBoard}
            editorsInTraining={props.editorsInTraining}
            departmentNumber={props.departmentNumber}
            state={setModalOpened}
          />
        </div>
      ) : null}

      <div className={styles.cardContainer}>
        <div className={styles.cardPicture}>
          {props.picture !== undefined ? (
            <img src={props.picture.src} alt={`Pictue of: ${props.name}`} />
          ) : (
            <img
              src={undefinedProfilePicture.src}
              alt={"Profile Picture is undefined"}
            />
          )}
        </div>
        <div className={styles.cardName}>
          <h2>{props.name}</h2>
        </div>
        <div className={styles.cardTags}>
          <div id={styles.departmentTags}>
            <DepartmentTags departmentNumber={props.departmentNumber} />
          </div>
          {props.managingBoard === true ? (
            <div id={styles.cardManagingBoard}>
              <p>*</p>
            </div>
          ) : null}
          {props.editorsInTraining === true ? (
            <div id={styles.cardEditorsInTraining}>
              <p id={styles.unclickedEIT}>
                <span id={styles.spanAsterisk}>*</span>
                <span id={styles.spanAsterisk}>*</span>
              </p>
              <p id={styles.clickedEIT}>
                {turnIntoSpan("Say Hello", undefined)}
                <span>&#127881;</span>
              </p>
            </div>
          ) : null}
          <button
            id={styles.cardLearnMore}
            onClick={() => setModalOpened(true)}
          >
            <p id={styles.plusButton}>+</p>
            <p id={styles.learnMoreAbout}>
              {turnIntoSpan(`Learn More About ${props.name}`, 23)}
            </p>
          </button>
        </div>
      </div>
    </>
  );
}
function turnIntoSpan(input: string, maxLength: number | undefined) {
  let array: string[] = [];
  if (maxLength === undefined || maxLength >= input.length) {
    for (let i = 0; i < input.length; i++) {
      array.push(input.substring(i, i + 1));
    }
  } else if (maxLength < input.length) {
    for (let i = 0; i < maxLength; i++) {
      array.push(input.substring(i, i + 1));
    }
    array.push("...");
  }
  return (
    <>
      {array.map((value, _) => {
        return <span>{value}</span>;
      })}
    </>
  );
}
