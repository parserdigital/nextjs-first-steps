import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/jorge.jpeg"
          alt="A wonderful image of Jorge"
          width={300}
          height={300}
        />
      </div>
      <h1>Hello, I'm Jorge!</h1>
      <p>I'm a frontend developer showing NextJs to people!</p>
    </section>
  );
}
export default Hero;
