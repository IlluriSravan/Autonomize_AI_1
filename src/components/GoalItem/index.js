// Write your code here
import './index.css'
import {useState} from 'react'
import {CiCircleRemove} from 'react-icons/ci'
import {FaPencil} from 'react-icons/fa6'
import {FaRegThumbsUp} from 'react-icons/fa'

const GoalItem = props => {
  const {item, deleteFunction, editFunction} = props
  const {title, id, count} = item
  const [edit, setEdit] = useState(true)
  const [inp, setinp] = useState(title)

  const iconToShow = edit ? (
    <FaPencil className="pencil" />
  ) : (
    <FaRegThumbsUp className="pencil" />
  )

  const onDelete = () => {
    deleteFunction(id)
  }

  const onEdit = () => {
    editFunction(id)
    setEdit(prev => !prev)
  }

  return (
    <li className="individualItem">
      <div className="item">
        {edit ? (
          <p className="para">
            {inp} (Updated {count} Times)
          </p>
        ) : (
          <input
            type="input"
            className="edit-input"
            onChange={e => setinp(e.target.value)}
            value={inp}
          />
        )}
        <button className="icon" type="button" onClick={onEdit}>
          {iconToShow}
        </button>
        <button
          className="icon"
          type="button"
          onClick={onDelete}
          aria-label="remove"
        >
          <CiCircleRemove className="remove" />
        </button>
      </div>
    </li>
  )
}
export default GoalItem
