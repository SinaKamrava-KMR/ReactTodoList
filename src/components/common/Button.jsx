export default function Button({ bgColor='#ff6f47', children, onClick }) {
  return (
    <button className="btn" style={{ backgroundColor: bgColor }} onClick={onClick}>
      {children}
    </button>
  );
}
