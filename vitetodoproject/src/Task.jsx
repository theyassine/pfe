import React, { useState } from 'react';

const Task = ({ task, onDelete, onUpdate }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleUpdateClick = () => {
    onUpdate(task.id, editedText);
    setEditMode(false);
  };

  return (
    <div className="task">
      {editMode ? (
        <>
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <button onClick={handleUpdateClick}>Save</button>
        </>
      ) : (
        <>
          <div className="task-text">{task.text}</div>
          <button onClick={() => setEditMode(true)}>Edit</button>
          <button onClick={() => onDelete(task.id)}>Delete</button>
        </>
      )}
    </div>
  );
};

export default Task;
