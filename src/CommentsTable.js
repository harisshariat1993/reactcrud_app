// src/CommentsTable.js
import React from 'react';

const CommentsTable = ({ data, onEdit, onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Body</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((comment) => (
          <tr key={comment.id}>
            <td>{comment.id}</td>
            <td>{comment.name}</td>
            <td>{comment.email}</td>
            <td>{comment.body}</td>
            <td>
              <button onClick={() => onEdit(comment)}>Edit</button>
              <button onClick={() => onDelete(comment.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CommentsTable;
