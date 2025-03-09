import Head from "next/head";
import about_styles from "../../styles/About.module.css";
import styles from "../../styles/Advertise.module.css";
import { ReceivedStaff } from "../../ts_types/db_types";
import { get_staff_by_position } from "../../db";
import { generateMetaTags } from "../../utils/generateMetaTags";
import newsPaperPng from "./newspaperTemporary.png";
import { StaticImageData } from "next/image";
import { useState } from "react";

function Advertise() {
  const email = "business@stuyspec.com";
  const mailto = "mailto:" + email;
  const page_title = "Advertise - The Stuyvesant Spectator";
  const meta_url = `https://stuyspec.com/about/advertise`;
  const meta_description = `How to advertise in The Stuyvesant Spectator.`;
  const mailToEmail = (
    <a href={mailto} className="link">
      {email}
    </a>
  );
  const articles: Array<{
    image: StaticImageData;
    title: string;
    description: string;
  }> = [
    {
      image: newsPaperPng,
      title: "Sample Title",
      description: `Lorem ipsum odor amet, consectetuer adipiscing elit. Metus
              porttitor turpis praesent sollicitudin iaculis magna. Vitae
              condimentum ad vestibulum quam pretium montes diam sociosqu.
              Quisque lectus potenti nostra cras nulla dui risus. Inceptos cras
              ex gravida mollis augue consequat morbi at est. Velit fermentum
              aenean fusce cras natoque non. Pulvinar aliquet quis class;
              efficitur netus sagittis maximus. Conubia dictum porta faucibus
              himenaeos eros, pulvinar pharetra ultrices.`,
    },
    {
      image: newsPaperPng,
      title: "Sample Title",
      description: `Lorem ipsum odor amet, consectetuer adipiscing elit. Metus
              porttitor turpis praesent sollicitudin iaculis magna. Vitae
              condimentum ad vestibulum quam pretium montes diam sociosqu.
              Quisque lectus potenti nostra cras nulla dui risus. Inceptos cras
              ex gravida mollis augue consequat morbi at est. Velit fermentum
              aenean fusce cras natoque non. Pulvinar aliquet quis class;
              efficitur netus sagittis maximus. Conubia dictum porta faucibus
              himenaeos eros, pulvinar pharetra ultrices.`,
    },
    {
      image: newsPaperPng,
      title: "Sample Title",
      description: `Lorem ipsum odor amet, consectetuer adipiscing elit. Metus
              porttitor turpis praesent sollicitudin iaculis magna. Vitae
              condimentum ad vestibulum quam pretium montes diam sociosqu.
              Quisque lectus potenti nostra cras nulla dui risus. Inceptos cras
              ex gravida mollis augue consequat morbi at est. Velit fermentum
              aenean fusce cras natoque non. Pulvinar aliquet quis class;
              efficitur netus sagittis maximus. Conubia dictum porta faucibus
              himenaeos eros, pulvinar pharetra ultrices.`,
    },
  ];
  const priceTablePrint: Array<{
    title: string;
    dimensions: string;
    price1: number;
    price2: number;
    price3: number;
    price4: number;
  }> = [
    {
      title: "Full Page",
      dimensions: "15.5in x 9.5in",
      price1: 500,
      price2: 450,
      price3: 400,
      price4: 240,
    },
    {
      title: "Half Page",
      dimensions: "7.5in x 9.5in",
      price1: 350,
      price2: 300,
      price3: 250,
      price4: 130,
    },
    {
      title: "Quarter Page",
      dimensions: "7.5in x 5in",
      price1: 200,
      price2: 160,
      price3: 120,
      price4: 70,
    },
    {
      title: "Eighth Page",
      dimensions: "4in x 5in",
      price1: 120,
      price2: 85,
      price3: 60,
      price4: 40,
    },
  ];
  const priceTableWeb: Array<{
    title: string;
    dimensions: string;
    price1: number;
    price2: number;
    price3: number;
    price4: number;
  }> = [
    {
      title: "Box",
      dimensions: "375px x 500px",
      price1: 150,
      price2: 135,
      price3: 120,
      price4: 90,
    },
    {
      title: "Banner",
      dimensions: "900px x 200px",
      price1: 125,
      price2: 115,
      price3: 100,
      price4: 75,
    },
    {
      title: "COMBO Deal",
      dimensions: "Box & Banner",
      price1: 240,
      price2: 215,
      price3: 185,
      price4: 140,
    },
  ];
  const [issueQuantityModePrint, setIssueQuantityModePrint] = useState(1);
  const [issueQuantityModeWeb, setIssueQuantityModeWeb] = useState(1);
  return (
    <>
      <Head>{generateMetaTags(page_title, meta_description, meta_url)}</Head>
      <main className={styles.mainContainer}>
        <section className={styles.advertisementHeroContainer}>
          <div className={styles.mainText}>
            <h2 id={styles.mainTextCompany}>The Spectator</h2>
            <h1 id={styles.mainTextHeader}>Advertisements</h1>
            <p id={styles.mainTextDescription}>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Metus
              porttitor turpis praesent sollicitudin iaculis magna. Vitae
              condimentum ad vestibulum quam pretium montes diam sociosqu.
              Quisque lectus potenti nostra cras nulla dui risus. Inceptos cras
              ex gravida mollis augue consequat morbi at est. Velit fermentum
              aenean fusce cras natoque non. Pulvinar aliquet quis class;
              efficitur netus sagittis maximus. Conubia dictum porta faucibus
              himenaeos eros, pulvinar pharetra ultrices. Sociosqu sagittis
              eleifend condimentum; ultrices morbi ultrices rutrum mattis. At
              primis molestie scelerisque, senectus nam sagittis.
            </p>
          </div>
          <div className={styles.advertisementHeroSidePanel}>
            <figure>
              <img src={newsPaperPng.src} alt="News Paper Image" />
            </figure>
          </div>
        </section>
        {/*
		This is the container for the advertisement articles. The point of this is so that people
		can read up on why the spectator is so beneficial to advertise in. This is good to
		allow for more prospect buyers and to convince people that the spectator is a good place
		to advertise in.
		*/}
        <div className={styles.advertisementArticlesContainer}>
          {articles.map((value, index): any => {
            return (
              <article className={`${styles.advertisementArticle}`} key={index}>
                <img src={value.image.src} alt={`Image`} />
                <h1>
                  {value.title} {index + 1}
                </h1>
                <p>{value.description}</p>
              </article>
            );
          })}
        </div>
        <section className={styles.pricePlanContainer}>
          <div className={styles.pricePlanPrintContainer}>
            <h1>Price Plan for Print Articles</h1>
            <div className={styles.issueQuantitySelectionContainer}>
              <button onClick={() => setIssueQuantityModePrint(1)}>1</button>
              <button onClick={() => setIssueQuantityModePrint(2)}>2-6</button>
              <button onClick={() => setIssueQuantityModePrint(3)}>7-15</button>
              <button onClick={() => setIssueQuantityModePrint(4)}>
                16 (ANNUAL LOCKOUT)
              </button>
            </div>
            <div className={styles.pricePlanTableContainer}>
              {issueQuantityModePrint === 1
                ? priceTablePrint.map((value, index) => {
                    return (
                      <div className={styles.pricePlanItem} key={index}>
                        <h1>{value.title}</h1>
                        <h2>{value.dimensions}</h2>
                        <div className={styles.price}>
                          <h2>${value.price1}</h2>
                          <h3>/issue</h3>
                        </div>
                      </div>
                    );
                  })
                : issueQuantityModePrint === 2
                  ? priceTablePrint.map((value, index) => {
                      return (
                        <div className={styles.pricePlanItem} key={index}>
                          <h1>{value.title}</h1>
                          <h2>{value.dimensions}</h2>
                          <div className={styles.price}>
                            <h2>${value.price2}</h2>
                            <h3>/issue</h3>
                          </div>
                        </div>
                      );
                    })
                  : issueQuantityModePrint === 3
                    ? priceTablePrint.map((value, index) => {
                        return (
                          <div className={styles.pricePlanItem} key={index}>
                            <h1>{value.title}</h1>
                            <h2>{value.dimensions}</h2>
                            <div className={styles.price}>
                              <h2>${value.price3}</h2>
                              <h3>/issue</h3>
                            </div>
                          </div>
                        );
                      })
                    : priceTablePrint.map((value, index) => {
                        return (
                          <div className={styles.pricePlanItem} key={index}>
                            <h1>{value.title}</h1>
                            <h2>{value.dimensions}</h2>
                            <div className={styles.price}>
                              <h2>${value.price4}</h2>
                              <h3>/issue</h3>
                            </div>
                          </div>
                        );
                      })}
            </div>
          </div>
          <div className={styles.pricePlanWebContainer}>
            <h1>Price Plan for Web Articles</h1>
            <div className={styles.issueQuantitySelectionContainer}>
              <button onClick={() => setIssueQuantityModeWeb(1)}>2</button>
              <button onClick={() => setIssueQuantityModeWeb(2)}>4-8</button>
              <button onClick={() => setIssueQuantityModeWeb(3)}>9-12</button>
              <button onClick={() => setIssueQuantityModeWeb(4)}>
                16 (ANNUAL LOCKOUT)
              </button>
            </div>
            {issueQuantityModeWeb === 1
              ? priceTableWeb.map((value, index) => {
                  return (
                    <div className={styles.pricePlanItem} key={index}>
                      <h1>{value.title}</h1>
                      <h2>{value.dimensions}</h2>
                      <div className={styles.price}>
                        <h2>${value.price1}</h2>
                        <h3>/issue</h3>
                      </div>
                    </div>
                  );
                })
              : issueQuantityModeWeb === 2
                ? priceTableWeb.map((value, index) => {
                    return (
                      <div className={styles.pricePlanItem} key={index}>
                        <h1>{value.title}</h1>
                        <h2>{value.dimensions}</h2>
                        <div className={styles.price}>
                          <h2>${value.price2}</h2>
                          <h3>/issue</h3>
                        </div>
                      </div>
                    );
                  })
                : issueQuantityModeWeb === 2
                  ? priceTableWeb.map((value, index) => {
                      return (
                        <div className={styles.pricePlanItem} key={index}>
                          <h1>{value.title}</h1>
                          <h2>{value.dimensions}</h2>
                          <div className={styles.price}>
                            <h2>${value.price3}</h2>
                            <h3>/issue</h3>
                          </div>
                        </div>
                      );
                    })
                  : issueQuantityModeWeb === 3
                    ? priceTableWeb.map((value, index) => {
                        return (
                          <div className={styles.pricePlanItem} key={index}>
                            <h1>{value.title}</h1>
                            <h2>{value.dimensions}</h2>
                            <div className={styles.price}>
                              <h2>${value.price3}</h2>
                              <h3>/issue</h3>
                            </div>
                          </div>
                        );
                      })
                    : priceTableWeb.map((value, index) => {
                        return (
                          <div className={styles.pricePlanItem} key={index}>
                            <h1>{value.title}</h1>
                            <h2>{value.dimensions}</h2>
                            <div className={styles.price}>
                              <h2>${value.price4}</h2>
                              <h3>/issue</h3>
                            </div>
                          </div>
                        );
                      })}
          </div>
        </section>
      </main>
    </>
  );
}

// export async function getServerSideProps() {
// 	let manager = await get_staff_by_position("business manager");
// 	if (manager) {
// 		return {
// 			props: { manager: JSON.parse(JSON.stringify(manager)) },
// 		};
// 	} else
// 		return {
// 			props: {
// 				manager: {
// 					name: "Error: Not found",
// 					email: "Error: Not found",
// 				},
// 			},
// 		};
// }
/*
				<h1 className={styles.title}>Advertise</h1>
				<section className={styles.place_order + " " + styles.section}>
					<h3>In order to place an advertisement, please email <a href={mailto} className="link">{email}</a> with the following information:</h3>
					<ol>
						<li>Size/type of advertisement requested</li>
						<li>Number of issues</li>
						<li>The date or issue that you would like your advertisement to appear on</li>
						<li>A digital copy of the ad in JPG, PNG, or PDF format in the approriate dimensions</li>
						<li>For Web advertsiments: A link (preferrably with a referral/tracking code) for the advertsiment to take users to</li>
					</ol>
				</section>
				<section className={styles.section}>
					<h2>Print Pricing (Per Issue)</h2>
					<table className={styles.pricing_table}>
						<tr>
							<th>SIZES</th>
							<th>1 issue</th>
							<th>2-6 issues</th>
							<th>7+ issues</th>
							<th>Annual Lockout (16 Issues)</th>
						</tr>
						<tr>
							<td>Full Page (15.5in x 9.5in)</td>
							<td>$500</td>
							<td>$450</td>
							<td>$400</td>
							<td>$240</td>
						</tr>
						<tr>
							<td>Half Page (7.5in x 9.5in)</td>
							<td>$350</td>
							<td>$300</td>
							<td>$250</td>
							<td>$130</td>
						</tr>
						<tr>
							<td>Quarter Page (7.5in x 5in)</td>
							<td>$200</td>
							<td>$160</td>
							<td>$120</td>
							<td>$70</td>
						</tr>
						<tr>
							<td>Eighth Page (4in x 5in)</td>
							<td>$120</td>
							<td>$85</td>
							<td>$60</td>
							<td>$40</td>
						</tr>
					</table>
				</section>
				<section className={styles.section}>
					<h2>Web Pricing (Per Issue)</h2>
					<table className={styles.pricing_table}>
						<tr>
							<th>SIZES</th>
							<th>2 issues</th>
							<th>4-8 issues</th>
							<th>9-12 issues</th>
							<th>Annual Lockout (16 Issues)</th>
						</tr>
						<tr>
							<td>Box (375px x 500px)</td>
							<td>$150</td>
							<td>$135</td>
							<td>$120</td>
							<td>$90</td>
						</tr>
						<tr>
							<td>Banner* (900px x 200px)</td>
							<td>$125</td>
							<td>$115</td>
							<td>$100</td>
							<td>$75</td>
						</tr>
						<tr>
							<td>Both</td>
							<td>$240</td>
							<td>$215</td>
							<td>$185</td>
							<td>$140</td>
						</tr>
					</table>
					<p className={styles.asterisk}>*Banners appear on top of an article page 30% of the time.</p>
				</section>
				<section className={styles.section}>
					<h2>Student Groups</h2>
					<p>All Clubs and Pubs registered groups are offered discounted advertising rates in The Spectator! A president or cabinet member must email <a href={mailto} className="link">{email}</a> for more details.</p>
				</section>
				*/
export default Advertise;
