import './index.css'

const HistoryItem = props => {
  const {listItem, deleteListItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = listItem

  const onDelete = () => {
    deleteListItem(id)
  }

  return (
    <li className="listItem">
      <div className="list-container">
        <p className="timeAccessed">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="logoUrl" />
        <p className="title">{title}</p>
        <p className="domainUrl">{domainUrl}</p>
      </div>
      <button
        className="button"
        type="button"
        onClick={onDelete}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete"
        />
      </button>
    </li>
  )
}
export default HistoryItem
