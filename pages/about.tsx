import Head from "next/head";
import styles from "../styles/AboutItemGrid.module.css";
import stuyvesantSpectatorLogo from "./about/Untitled_design-removebg-preview (1).png";
import Image from "next/image";
import one_hundred_years_logo from "../public/images/100years_logo.png";
import Link from "next/link";

function AboutUs(props: any) {
  const pages: Array<{
    name: string;
    link: string;
    summary: string;
    image: string;
  }> = [
    {
      name: "Our Charter",
      link: "/our-charter",
      summary:
        "Curious about our policies? Learn more by reading the charter of the Stuyvesant Spectator.",
      image: "string",
    },
    {
      name: "Advertise",
      link: "/advertise",
      summary:
        "Considering posting an advertisement? Learn more about how you can advertise on The Stuyvesant Spectator's website.",
      image: "string",
    },
    {
      name: "Sponsors",
      link: "/sponsors",
      summary:
        "Considering sponsoring us? Learn more about how you can sponsor us here.",
      image: "string",
    },
    {
      name: "Staff",
      link: "/staff",
      summary: "Learn more about our current or past staff members.",
      image: "string",
    },
    {
      name: "Developers",
      link: "/developers",
      summary:
        "Learn more about the developers behind The Stuyvesant Spectator's website.",
      image: "string",
    },
    {
      name: "Contact",
      link: "/contact",
      summary: "Want to contact us? Get in touch.",
      image: "string",
    },
  ];

  return (
    <div>
      <Head>
        <title>About Us</title>
        <meta name="description" content="The Stuyvesant Spectator" />
      </Head>
      <main>
        <div className={styles.aboutUsContainer}>
          <div className={styles.aboutUsText}>
            <h1 id={styles.aboutUsHeader}>The Spectator</h1>
            <h1 id={styles.mainCatchPhrase}>Interesting Quote Goes Here</h1>
            <p id={styles.aboutUsDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              dignissim enim sit amet mollis auctor. Suspendisse suscipit tempus
              velit ut eleifend. Donec egestas odio lacus. Proin ipsum dolor,
              sodales vel lacinia ac, bibendum et odio. Etiam quis massa a
              mauris condimentum commodo. Nunc condimentum nulla leo, vitae
              aliquam lectus efficitur ac. Ut sem orci, mollis vitae feugiat eu,
              placerat in est.
            </p>
          </div>
          <div className={styles.aboutUsImage}>
            <div id={styles.logo}>
              <img
                src={stuyvesantSpectatorLogo.src}
                alt="Stuyvesant Spectator Logo"
              />
            </div>
          </div>
        </div>
        <div className={styles.gridHeaderContainer}>
          <div id={styles.line}></div>
          <h1 id={styles.gridHeader}>About Us</h1>
          <div id={styles.line}></div>
        </div>
        <div className={styles.grid}>
          {pages.map((page, key) => (
            <div id={styles.item} key={key}>
              <div id={styles.overlay}>
                <div className={styles.itemContent}>
                  <div className={styles.itemText}>
                    {/*<Link passHref href={`/about${page.link}`}>
							<>
							 <Image
								id={styles.image}
								alt="The Stuyvesant Spectator: 100 years of journalism"
								src={one_hundred_years_logo}
							/> */}
                    <div id={styles.header}>
                      <div id={styles.headerName}>
                        <h2>{page.name}</h2>
                      </div>
                    </div>
                    {/* </>
						</Link> */}
                  </div>
                  <div className={styles.expandItemContainer}>
                    <div id={styles.headerSummary}>
                      <p>{page.summary}</p>
                    </div>

                    <Link passHref href={`/about${page.link}`}>
                      <button id={styles.expandItem}>
                        <p id={styles.expandItemPlus}>+</p>
                        <p id={styles.expandItemLearnMore}>
                          <span>L</span>
                          <span>e</span>
                          <span>a</span>
                          <span>r</span>
                          <span>n</span>
                          <span id={styles.expandItemSpace}> </span>
                          <span>M</span>
                          <span>o</span>
                          <span>r</span>
                          <span>e</span>
                        </p>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
    /** 
			<main id={styles.container}>
				<h1 id={styles.textCentered}>About Us</h1>
				<div id={styles.grid}>
			
					{pages.map((page, key) => (
						<div id={styles.item} key={key}>
							<Link passHref href={`/about${page.link}`}>
								<>
									<Image
										id={styles.image}
										alt="The Stuyvesant Spectator: 100 years of journalism"
										src={one_hundred_years_logo}
									/>
									<h2>{page.name}</h2>
									<p>{page.summary}</p>
								</>
							</Link>
						</div>
					))}

				
				</div>
			</main>
**/
  );
}

export default AboutUs;
