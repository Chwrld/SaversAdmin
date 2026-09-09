export default function SearchBox({ placeholder }) {
  return (
    <label className="table-search">
      <span>⌕</span>
      <input placeholder={`${placeholder}...`} />
    </label>
  )
}
