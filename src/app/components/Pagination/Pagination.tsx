// components/Pagination.tsx
import React from 'react';
import Link from 'next/link';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages }) => {
  const pageButtons = [];
  for (let i = 1; i <= totalPages; i++) {
    pageButtons.push(
      <Link key={i} href={`/?page=${i}`}>
        <button disabled={i === currentPage}>{i}</button>
      </Link>
    );
  }

  return <div>{pageButtons}</div>;
};

export default Pagination;
