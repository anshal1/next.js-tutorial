export default async function Page() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, 2000);
  });
  return <p>Customer Page</p>;
}
