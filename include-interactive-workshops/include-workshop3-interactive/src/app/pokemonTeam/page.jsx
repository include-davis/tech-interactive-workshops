import styles from "./page.module.scss";
import Link from "next/link";
import { team } from "../../data/pokemonData";

export default function PokemonPage() {
  // *Insert team type filter here!*
  // const *Insert pokemon type variable!* = *Insert .filter function here!* => pokemon.type === ["*Insert type here*"]


  const fireTeam = team.filter((pokemon) => pokemon.type === "Fire");


  return (
    <main className={styles.container}>
      <h1>Pokémon Team</h1>

      <section className={styles.section}>
        <h2>.Map Method</h2>
        <h3> Insert Map Function Here!</h3>
        <div className={styles.pokemonCards}>
          {team.map((team) => (
            <div key={team.id} className={styles.card}>
            <img src={team.image} alt={team.name} className={styles.pokemonImage}/>
            <h3>{team.name}</h3>
            <p>Type: {team.type}</p>
            </div>
          ))
          }
        </div>
        
      </section>

      <section className={styles.section}>
        <h2>.Filter Method</h2>
        <h3> Fire Pokemon</h3>

        <div className={styles.pokemonCards}>
          {/* Insert .map function here! */}
          {fireTeam.map((team) => (
            <div key={team.id} className={styles.card}>
            <img src={team.image} alt={team.name} className={styles.pokemonImage}/>
            <h3>{team.name}</h3>
            <p>Type: {team.type}</p>
            </div>
          ))
          }
        </div>
      </section>

      <div className={styles.buttonGroup}>
        <Link href="/basics">
          <button className={styles.backButton}>Go to Basics</button>
        </Link>

        <Link href="/solution">
          <button className={styles.backButton}>Go to Solution</button>
        </Link>
      </div>
    </main>
  );
}
