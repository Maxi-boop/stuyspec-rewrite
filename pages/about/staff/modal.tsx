import { StaticImageData } from "next/image";
import { Dispatch, RefObject, SetStateAction } from "react";
import undefinedProfilePicture from "./../undefinedProfilePicture.jpg";
import styles from "./../../../styles/Modal.module.css";
interface Modal {
  name: string;
  description: string;
  photo: StaticImageData | undefined;
  departmentNumber: number;
  managingBoard: boolean;
  editorsInTraining: boolean;
  state: Dispatch<SetStateAction<boolean>>;
}
export default function Modal(props: Modal) {
  let description;
  if (props.description.length >= 300) {
    description = props.description.substring(0, 300) + "...";
  } else {
    description = props.description;
  }
  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalContenter}>
        <div className={styles.modalContent}>
          <div id={styles.close}>
            <button onClick={() => props.state(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
              </svg>
            </button>
          </div>
          <div id={styles.photo}>
            {props.photo !== undefined ? (
              <img src={props.photo.src} alt={`Pictue of: ${props.name}`} />
            ) : (
              <img
                src={undefinedProfilePicture.src}
                alt={"Profile Picture is undefined"}
              />
            )}
          </div>
          <div id={styles.text}>
            <h1>{props.name}</h1>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
