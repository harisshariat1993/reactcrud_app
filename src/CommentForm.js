// src/CommentForm.js
import React, { useState, useEffect } from 'react';

const CommentForm = ({ onSave, currentComment }) => {
  const [comment, setComment] = useState({
    id: '',
    name: '',
    email: '',
    body: ''
  });

  useEffect(() => {
    if (currentComment) {
      setComment(currentComment);
    } else {
      setComment({ id: '', name: '', email: '', body: '' });
    }
  }, [currentComment]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setComment((prevComment) => ({
      ...prevComment,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(comment);
    setComment({ id: '', name: '', email: '', body: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={comment.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={comment.email}
        onChange={handleChange}
        required
      />
      <textarea
        name="body"
        placeholder="Body"
        value={comment.body}
        onChange={handleChange}
        required
      ></textarea>
      <button type="submit">Save</button>
    </form>
  );
};

export default CommentForm;
