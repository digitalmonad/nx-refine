'use client';
import { useList } from '@refinedev/core';

export const ProductsList = () => {
  const c = useList();

  console.log(c.data);
  return <div>{}</div>;
};
