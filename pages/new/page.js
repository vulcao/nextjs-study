import Link from "next/link";

export default function Page() {


  return (
    <>
      <h1>Criação de Páginas</h1>
      <p>várias paradas...
        <a href="https://nextjs.org/learn/basics/navigate-between-pages/client-side">https://nextjs.org/learn/basics/navigate-between-pages/client-side</a>
      </p>

      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}
