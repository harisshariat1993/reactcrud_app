// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CommentsTable from './CommentsTable';
import CommentForm from './CommentForm';
import './App.css';

const App = () => {
  const [comments, setComments] = useState([]);
  const [currentComment, setCurrentComment] = useState(null);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
      setComments(response.data);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  const handleSave = async (comment) => {
    if (comment.id) {
      // Update comment
      try {
        await axios.put(`https://jsonplaceholder.typicode.com/comments/${comment.id}`, comment);
        setComments((prevComments) =>
          prevComments.map((c) => (c.id === comment.id ? comment : c))
        );
      } catch (error) {
        console.error('Error updating comment:', error);
      }
    } else {
      // Create new comment
      try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/comments', comment);
        setComments([...comments, response.data]);
      } catch (error) {
        console.error('Error creating comment:', error);
      }
    }
    setCurrentComment(null);
  };

  const handleEdit = (comment) => {
    setCurrentComment(comment);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/comments/${id}`);
      setComments(comments.filter((comment) => comment.id !== id));
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
  };

  return (
    <div className="App">
      <h1>Comments</h1>
      <CommentForm onSave={handleSave} currentComment={currentComment} />
      <CommentsTable data={comments} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default App;


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
