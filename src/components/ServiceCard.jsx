import React from "react";

export default function ServiceCard({ title, price }) {
  return (
    <div style={styles.card}>
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.price}>{price}</p>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "15px",
    textAlign: "center",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
  },
  title: {
    margin: "0 0 10px",
    fontSize: "20px"
  },
  price: {
    margin: 0,
    color: "#333",
    fontWeight: "bold"
  }
};
