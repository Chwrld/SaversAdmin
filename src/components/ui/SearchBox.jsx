export default function SearchBox({ placeholder, value = '', onChange }) {
  return (
    <label className="table-search">
      <span>⌕</span>
      <input value={value} onChange={onChange} placeholder={`${placeholder}...`} />
    </label>
  )
}
