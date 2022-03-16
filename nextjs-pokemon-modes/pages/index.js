import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://ccaj-pokemon-1.s3.us-west-1.amazonaws.com/index.json"
      );
      const data = await res.json();
      setPokemon(data);
    }
    fetchData();
  }, []);
  if (!pokemon) return <div>Loading...</div>;
  return (
    <div className={styles.container}>
      <Head>
        <title>Pokemon List</title>
      </Head>
      <div className={styles.grid}>
        {pokemon.map((pokemon) => (
          <div className={styles.card} key={pokemon.id}>
            <Link href={`/pokemon/${pokemon.id}`}>
              <a>
                <img
                  src={`https://ccaj-pokemon-1.s3.us-west-1.amazonaws.com/${pokemon.image}`}
                  alt={pokemon.name}
                />
                <h3>{pokemon.name}</h3>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

/*
              href={`https://ccaj-pokemon-1.s3.us-west-1.amazonaws.com/pokemon/${pokemon.id}.json`}

*/
