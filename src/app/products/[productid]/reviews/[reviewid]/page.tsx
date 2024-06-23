'use client';
import { notFound } from 'next/navigation';

const getRandomInt = (count: number) => {
  return Math.floor(Math.random() * count);
}

const ReviewDetail = (
  {params,
  }: {
    params: {productid: string, reviewid: string}
  }) => {

  // const random =getRandomInt(2);

  // if (random === 1) {
  //   throw new Error("Error loading revew");
  // }

  if (parseInt(params.reviewid) > 1000) {
    notFound();
  }

  return (
    <div>
      <h1>Review {params.reviewid} for Product {params.productid}</h1>
    </div>
  );
};

export default ReviewDetail;
