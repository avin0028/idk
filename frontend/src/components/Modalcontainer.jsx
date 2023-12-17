import Deleteitem from "./Deleteitem"
import AddSavings from "./Addsavings"
const Modalcontainer = ({ visible, onClose, component, props }) => {
  const handleOnclose = (e) => {
    if (e.target.id === "container") onClose()
  }
  if (!visible) return null
  return (
    <div
      id="container"
      onClick={handleOnclose}
      className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center"
    >
      {component === "delete" ? (
        <Deleteitem itemkey={props.id} selectNo={() => onClose()} />
      ) : component === "addSaving" ? (
        <AddSavings
          selectNo={() => onClose()}
          itemKey={props.id}
          savings={props.savings}
        />
      ) : null}
    </div>
  )
}

export default Modalcontainer
