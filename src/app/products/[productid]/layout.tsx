export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const getRandomInt = (count: number) => {
    return Math.floor(Math.random() * count);
  };

  const random = getRandomInt(2);

  if (random === 1) {
    throw new Error("Error loading product");
  }

  return (
    <>
      {children}
      <h2 className='text-yellow-400 pb-2'>Features products</h2>
    </>
  );
};
