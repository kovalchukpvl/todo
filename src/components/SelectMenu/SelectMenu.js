
export const SelectMenu = ({ select, setSelect, deleteSelect, editTodo }) => {
  return select.open ? (
    <>
      <button onClick={deleteSelect}>Delete</button>
      <button onClick={() => setSelect({ open: false, ids: [] })}>Close</button>
    </>
  ) : (
    <button onClick={() => setSelect({ ...select, open: true })} disabled={editTodo}>Select</button>
  );
};
