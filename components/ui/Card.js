function Card({ children }) {
  return (
    <div class="card mx-auto" style={{ width: "25rem" }}>
      <div className="card-body">{children}</div>
    </div>
  );
}

export default Card;
