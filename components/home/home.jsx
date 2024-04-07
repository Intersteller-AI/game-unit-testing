import Board from "@/components/board/board";
import Score from "@/components/score/score";
import Image from "next/image";
import styles from "../styles.module.css";
import Link from "next/link";

const Home = () => {

  return (
    <div className={styles.twenty48}>
      <header>
        <h1>2048</h1>
        <Score />
      </header>
      <main>
        <Board />
      </main>
      <div>
        <p>
          Join me on{" "}
          <a
            href="https://www.linkedin.com/in/priyanshu-sahu-fullstack-developer/"
            target="_blank"
            rel="noopener"
          >
            LinkedIn
          </a>
        </p>
      </div>
      <footer>
        <div className={styles.socials}>
          <a
            href="https://github.com/Intersteller-AI"
            target="_blank"
            rel="noopener"
          >
            <Image
              src="social-github.svg"
              alt="2048-in-react on GitHub"
              width={32}
              height={32}
            />
          </a>
        </div>
        <div>Made by Intersteller</div>
      </footer>
    </div>
  )
}

export default Home