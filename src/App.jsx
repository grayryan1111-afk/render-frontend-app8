import React from "react";
import Header from "./components/Header.jsx";
import ServiceCard from "./components/ServiceCard.jsx";

export default function App() {
  return (
    <div style={styles.container}>
      <Header />

      <h2 style={styles.sectionTitle}>Our Services</h2>

      <div style={styles.cards}>
        <ServiceCard title="Window Cleaning" price="From $99" />
        <ServiceCard title="Pressure Washing" price="From $149" />
        <ServiceCard title="Gutter Cleaning" price="From $129" />
        <ServiceCard title="Roof Cleaning" price="From $249" />
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    maxWidth: "900px",
    margin: "0 auto"
  },
  sectionTitle: {
    marginTop: "20px",
    marginBottom: "10px"
  },
  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px"
  }
};
