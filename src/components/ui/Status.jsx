export default function Status({ children }) {
  return <span className={`status ${children.toLowerCase()}`}>{children}</span>
}
