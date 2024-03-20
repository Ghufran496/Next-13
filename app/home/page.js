import Image from "next/image";
import OurStoryPic from "../../images/home-image-1.jpg";
import styles from "./home.module.css";

export default function Page() {
  return (
    <>
      <div className={styles.bgWrap}>
        <Image
          src={OurStoryPic}
          alt="our Story Pic"
          quality={100}
          placeholder="blur" // or empty
          sizes={"100vw"}
          fill
          style={{
            objectFit: "cover",
          }}
        ></Image>
      </div>
      <h1 className={styles.bgHeader}>Humble beginnings a story of life</h1>
      <p className={styles.bgText}>
        How we became the farmers of the future, tilling the technology of
        tomoorw today.
      </p>
    </>
  );
}
