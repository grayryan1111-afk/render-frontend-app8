import React from "react";

export default function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Clearview Cleaning Services</h1>
      <p style={styles.subtitle}>Professional • Reliable • Affordable</p>
    </header>
  );
}

const styles = {
  header: {
    textAlign: "center",
    marginBottom: "30px"
  },
  title: {
    margin: 0,
    fontSize: "32px"
  },
  subtitle: {
    margin: 0,
    color: "#666"
  }
};
