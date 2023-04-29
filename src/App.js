import React from "react";
import BookList from "./components/Books.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookDetails from "./pages/BookDetails.js";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BookList />}></Route>

          <Route path="books/:bookId" element={<BookDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
