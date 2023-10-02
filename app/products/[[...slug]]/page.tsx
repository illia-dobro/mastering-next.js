import React from 'react';

type Props = {
  params: { slug: string[] };
  searchParams: { sortOrder: string}
};

const ProductPage = ({ params: { slug }, searchParams: {sortOrder} }: Props) => {
  return (
    <>
      <div>ProductPage</div>
      {slug}{sortOrder}

    </>
  );
};

export default ProductPage;
