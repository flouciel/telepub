// src/app/books/[id]/page.tsx
"use client";

import React, { useState } from 'react';
import { useParams } from 'next/navigation'; // Import useParams
import { books } from '@/app/data/books'; // Adjust the path according to your project structure
import { ReactReader } from 'react-reader';

const BookPage: React.FC = () => {
  const [location, setLocation] = useState<string | number>(0);
  const params = useParams();
  const id = params.id as string;

  // Ensure id is valid before using it
  if (!id) {
    return <p>Invalid ID</p>;
  }

  const book = books.find((book) => book.id === parseInt(id, 10));

  if (!book) {
    return <p>Book not found</p>;
  }

  return (
    <div style={{ height: '100vh', padding: '1rem' }}>
      {/* Render ReactReader */}
      <ReactReader
        url={book.href}
        title={book.name}
        location={location}
        locationChanged={(epubcfi: string) => setLocation(epubcfi)}
      />
    </div>
  );
};

export default BookPage;