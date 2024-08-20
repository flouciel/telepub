// src/app/components/CardBook/CardBook.tsx
import React from 'react';
import Link from 'next/link';
import { books } from '@/app/data/books'; // Adjust path if necessary
import { CardDescription, CardFooter, CardTitle, CardContent, Card } from '@/components/ui/card';

const CardBook: React.FC = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 md:p-6">
      {books.map((book) => (
        <Link key={book.id} href={`/books/${book.id}`} className="cursor-pointer">
          <Card>
            <img
              src={book.img} // Use the cover image from the book data
              alt={book.name}
              width="200"
              height="300"
              className="object-cover w-full h-60"
              style={{ aspectRatio: '200/300', objectFit: 'cover' }}
            />
            <CardContent className="p-4">
              <CardTitle className="text-lg font-semibold">{book.name}</CardTitle>
              <div className="text-md text-gray-600 dark:text-gray-400">
                Author: {book.author} | Year: {book.year}
              </div>
              <CardDescription className="text-sm text-gray-500 dark:text-gray-400">
                Tags: {book.tags}
              </CardDescription>
              <CardFooter className="flex justify-between items-center mt-4">
                <CardDescription className="text-sm text-gray-500 dark:text-gray-400">
                  Rating:
                </CardDescription>
                <div />
              </CardFooter>
            </CardContent>
          </Card>
        </Link>
      ))}
    </section>
  );
};

export default CardBook;