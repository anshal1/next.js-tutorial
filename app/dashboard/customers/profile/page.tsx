const page = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, 2000);
  });
  return <div>Customer Profile Page</div>;
};

export default page;
