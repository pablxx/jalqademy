import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>

      {/* Descomentar para poner una imagen redonda
        <div className={classes.image}>
        <Image
          src='/images/site/max.png'
          alt='An image showing Max'
          width={300}
          height={300}
        />
      </div> */}
      <h1>Jalqa Academy</h1>
      <p>
       En este sitio puedes encontrar recursos sobre desarrollo de videojuegos.
      </p>
    </section>
  );
}

export default Hero;
