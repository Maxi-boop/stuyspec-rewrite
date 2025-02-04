import Head from "next/head";
import styles from "../../styles/Staff.module.css";
import { generateMetaTags } from "../../utils/generateMetaTags";
import { StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";
import Modal from "./staff/modal";
import Card from "./staff/cards";
import DepartmentTags from "./staff/tags/departmentTags";
function StaffPage() {
  let department: number = 0;
  const page_title = "Staff - The Stuyvesant Spectator";
  const meta_url = `https://stuyspec.com/about/staff`;
  const meta_description = `The members of The Stuyvesant Spectator's 2024-2025 Editorial Board.`;
  interface membersInterface {
    picture?: StaticImageData | undefined;
    name: string;
    managingBoard: boolean;
    editorsInTraining: boolean;
    departmentNumber: number;
  }
  const sectionalDepartment: Array<{
    departmentTitle: string;
    members: membersInterface[];
  }> = [
    {
      departmentTitle: "Editor In Chief",
      members: [
        {
          picture: undefined,
          name: "Suyeon Ryu",
          managingBoard: true,
          editorsInTraining: false,
          departmentNumber: 0,
        },
        {
          picture: undefined,
          name: "Khush Wadwa",
          managingBoard: false,
          editorsInTraining: false,
          departmentNumber: 0,
        },
      ],
    },
    {
      departmentTitle: "News Editors",
      members: [
        {
          picture: undefined,
          name: "Talia Arcasoy",
          managingBoard: true,
          editorsInTraining: false,
          departmentNumber: 1,
        },
        {
          picture: undefined,
          name: "Seth Fenton",
          managingBoard: true,
          editorsInTraining: false,
          departmentNumber: 1,
        },
        {
          picture: undefined,
          name: "Zoey Marcus",
          managingBoard: false,
          editorsInTraining: false,
          departmentNumber: 1,
        },
        {
          picture: undefined,
          name: "Brendan Tan",
          managingBoard: false,
          editorsInTraining: false,
          departmentNumber: 1,
        },
        {
          picture: undefined,
          name: "Lauren Yang",
          managingBoard: false,
          editorsInTraining: false,
          departmentNumber: 1,
        },
      ],
    },
    {
      departmentTitle: "Features Editors",
      members: [
        {
          picture: undefined,
          name: "Abigail Jin",
          managingBoard: false,
          editorsInTraining: false,
          departmentNumber: 2,
        },
        {
          picture: undefined,
          name: "Hifza Kaleem",
          managingBoard: false,
          editorsInTraining: false,
          departmentNumber: 2,
        },
        {
          picture: undefined,
          name: "Cathleen Xi",
          managingBoard: false,
          editorsInTraining: false,
          departmentNumber: 2,
        },
      ],
    },
    {
      departmentTitle: "Opinions Editors",
      members: [
        {
          picture: undefined,
          name: "Joanne Hwang",
          managingBoard: false,
          editorsInTraining: false,
          departmentNumber: 3,
        },
        {
          picture: undefined,
          name: "Helen Mancini",
          managingBoard: true,
          editorsInTraining: false,
          departmentNumber: 3,
        },
        {
          picture: undefined,
          name: "Amaryllis Sun",
          managingBoard: false,
          editorsInTraining: false,
          departmentNumber: 3,
        },
        {
          picture: undefined,
          name: "Myles Vuong",
          managingBoard: false,
          editorsInTraining: false,
          departmentNumber: 3,
        },
      ],
    },
    {
      departmentTitle: "Science Editors",
      members: [
        {
          picture: undefined,
          name: "Aarya Balakrishnan",
          managingBoard: false,
          editorsInTraining: false,
          departmentNumber: 4,
        },
        {
          picture: undefined,
          name: "Sonya Cisse",
          managingBoard: false,
          editorsInTraining: false,
          departmentNumber: 4,
        },
        {
          picture: undefined,
          name: "Ryan Lin",
          managingBoard: false,
          editorsInTraining: false,
          departmentNumber: 4,
        },
        {
          picture: undefined,
          name: "Michelle Ng",
          managingBoard: false,
          editorsInTraining: false,
          departmentNumber: 4,
        },
      ],
    },
    {
      departmentTitle: "Arts & Entertainment Editors",
      members: [
        {
          picture: undefined,
          name: "Benson Chen",
          managingBoard: false,
          editorsInTraining: false,
          departmentNumber: 5,
        },
        {
          picture: undefined,
          name: "Zoë Feigelson",
          managingBoard: false,
          editorsInTraining: false,
          departmentNumber: 5,
        },
        {
          picture: undefined,
          name: "Madeline Hutchinson",
          managingBoard: false,
          editorsInTraining: false,
          departmentNumber: 5,
        },
        {
          picture: undefined,
          name: "Emile Lee-Suk",
          managingBoard: false,
          editorsInTraining: false,
          departmentNumber: 5,
        },
        {
          picture: undefined,
          name: "Santio Suarez",
          managingBoard: true,
          editorsInTraining: false,
          departmentNumber: 5,
        },
      ],
    },
    {
      departmentTitle: "Humor Editors",
      members: [
        {
          picture: undefined,
          name: `Michelle "Mike" Huang`,
          managingBoard: false,
          editorsInTraining: false,
          departmentNumber: 6,
        },
        {
          picture: undefined,
          name: "Munem Tajwar",
          managingBoard: false,
          editorsInTraining: false,
          departmentNumber: 6,
        },
      ],
    },
    {
      departmentTitle: "Sports Editors",
      members: [
        {
          picture: undefined,
          name: "Elijah Choi",
          managingBoard: false,
          editorsInTraining: false,
          departmentNumber: 7,
        },
        {
          picture: undefined,
          name: "Leonardo Guidi",
          managingBoard: false,
          editorsInTraining: false,
          departmentNumber: 7,
        },
        {
          picture: undefined,
          name: "Kaileen So",
          managingBoard: false,
          editorsInTraining: false,
          departmentNumber: 7,
        },
        {
          picture: undefined,
          name: "Evan Wong",
          managingBoard: false,
          editorsInTraining: false,
          departmentNumber: 7,
        },
        {
          picture: undefined,
          name: "Duncan Park",
          managingBoard: false,
          editorsInTraining: false,
          departmentNumber: 7,
        },
      ],
    },
    {
      departmentTitle: "Photography Editors",
      members: [
        {
          picture: undefined,
          name: "Geoffry Huang",
          managingBoard: false,
          editorsInTraining: false,
          departmentNumber: 8,
        },
        {
          picture: undefined,
          name: "Ibtida Khurshed",
          managingBoard: false,
          editorsInTraining: false,
          departmentNumber: 8,
        },
        {
          picture: undefined,
          name: "Honora Muratori",
          managingBoard: false,
          editorsInTraining: false,
          departmentNumber: 8,
        },
      ],
    },
    {
      departmentTitle: "Art Directors",
      members: [
        {
          picture: undefined,
          name: "Stacey Chen",
          managingBoard: false,
          editorsInTraining: false,
          departmentNumber: 9,
        },
        {
          picture: undefined,
          name: "Jaden Bae",
          managingBoard: false,
          editorsInTraining: false,
          departmentNumber: 9,
        },
        {
          picture: undefined,
          name: "Rhea Malhotra",
          managingBoard: false,
          editorsInTraining: false,
          departmentNumber: 9,
        },
        {
          picture: undefined,
          name: "Chuer Zhong",
          managingBoard: false,
          editorsInTraining: false,
          departmentNumber: 9,
        },
      ],
    },
    {
      departmentTitle: "Layout Editors",
      members: [
        {
          picture: undefined,
          name: "Anjali Bechu",
          managingBoard: false,
          editorsInTraining: true,
          departmentNumber: 10,
        },
        {
          picture: undefined,
          name: "Elaine Liu",
          managingBoard: false,
          editorsInTraining: false,
          departmentNumber: 10,
        },
        {
          picture: undefined,
          name: "Isabel Noh",
          managingBoard: false,
          editorsInTraining: true,
          departmentNumber: 10,
        },
        {
          picture: undefined,
          name: "Andre Wang",
          managingBoard: false,
          editorsInTraining: false,
          departmentNumber: 10,
        },
        {
          picture: undefined,
          name: "Karen Xu",
          managingBoard: false,
          editorsInTraining: false,
          departmentNumber: 10,
        },
        {
          picture: undefined,
          name: "Jasper Yu-Dawidowicz",
          managingBoard: false,
          editorsInTraining: false,
          departmentNumber: 10,
        },
      ],
    },
    {
      departmentTitle: "Copy Editors",
      members: [
        {
          picture: undefined,
          name: "Yuna Lee",
          managingBoard: false,
          editorsInTraining: false,
          departmentNumber: 11,
        },
        {
          picture: undefined,
          name: "Ryan Park",
          managingBoard: false,
          editorsInTraining: false,
          departmentNumber: 11,
        },
        {
          picture: undefined,
          name: "Niamh Werner",
          managingBoard: false,
          editorsInTraining: false,
          departmentNumber: 11,
        },
      ],
    },
    {
      departmentTitle: "Buisness Managers",
      members: [
        {
          picture: undefined,
          name: "Fiona Cai",
          managingBoard: false,
          editorsInTraining: false,
          departmentNumber: 12,
        },
        {
          picture: undefined,
          name: "Christopher Louie",
          managingBoard: false,
          editorsInTraining: false,
          departmentNumber: 12,
        },
        {
          picture: undefined,
          name: "Anderson Oh",
          managingBoard: false,
          editorsInTraining: false,
          departmentNumber: 12,
        },
        {
          picture: undefined,
          name: "Everett Yu-Dawidowicz",
          managingBoard: false,
          editorsInTraining: true,
          departmentNumber: 12,
        },
      ],
    },
    {
      departmentTitle: "Web Editors",
      members: [
        {
          picture: undefined,
          name: "Adam Choi",
          managingBoard: false,
          editorsInTraining: false,
          departmentNumber: 13,
        },
        {
          picture: undefined,
          name: "Angela Mashuryan",
          managingBoard: false,
          editorsInTraining: false,
          departmentNumber: 13,
        },
        {
          picture: undefined,
          name: "Lenny Metlitsky",
          managingBoard: true,
          editorsInTraining: false,
          departmentNumber: 13,
        },
        {
          picture: undefined,
          name: "Ankita Saha",
          managingBoard: false,
          editorsInTraining: false,
          departmentNumber: 13,
        },
      ],
    },
    {
      departmentTitle: "Faculty Advisor",
      members: [
        {
          picture: undefined,
          name: "Kerry Garfinkel",
          managingBoard: false,
          editorsInTraining: false,
          departmentNumber: 14,
        },
      ],
    },
  ];
  const [numberArray, setNumberArray] = useState<number[]>([]);
  useEffect(() => {
    const newArray = [];
    for (let i = 0; i < 1000; i++) {
      newArray.push(Math.floor(Math.random() * 13) + 1);
    }
    setNumberArray(newArray);
  }, []);
  return (
    <>
      <Head>{generateMetaTags(page_title, meta_description, meta_url)}</Head>
      <main id={styles.main}>
        <div className={styles.header}>
          <div id={styles.text}>
            <h1>Members of the Spectator Editorial Board</h1>
          </div>
          <div id={styles.tagScrollContainer}>
              <div id={styles.tagScrollContent}>
                {numberArray.map((value, _) => {
                  return <DepartmentTags departmentNumber={value} />;
                })}
              </div>
            </div>
        </div>
        <div id={styles.curve}>
          <svg
            id="visual"
            viewBox="0 0 960 100"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
          >
            <path
              d="M0 52L32 49.2C64 46.3 128 40.7 192 39.3C256 38 320 41 384 44.5C448 48 512 52 576 51.7C640 51.3 704 46.7 768 43.7C832 40.7 896 39.3 928 38.7L960 38L960 0L928 0C896 0 832 0 768 0C704 0 640 0 576 0C512 0 448 0 384 0C320 0 256 0 192 0C128 0 64 0 32 0L0 0Z"
              fill="#2b2b2b"
              stroke-linecap="round"
              stroke-linejoin="miter"
            ></path>
          </svg>
        </div>
        <section id={styles.departments}>
          <p className={styles.special_def}>* Managing Board</p>
          <p className={styles.special_def}>** Editors-in-Training</p>
          {sectionalDepartment.map((value, index) => {
            department = department + 1;
            return (
              <div key={index} className={styles.deprartmentContainer}>
                <h1 id={styles.title}>{value.departmentTitle}</h1>
                <div className={styles.cardsContainer}>
                  {value.members.map((value, _) => {
                    return (
                      <Card
                        picture={value.picture}
                        name={value.name}
                        departmentNumber={value.departmentNumber + 1}
                        managingBoard={value.managingBoard}
                        editorsInTraining={value.editorsInTraining}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </section>
      </main>
    </>
  );
}

export default StaffPage;
