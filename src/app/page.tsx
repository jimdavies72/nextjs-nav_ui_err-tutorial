import Link from "next/link";

export default function Home() {
  return (
    <main>
     <h1>Home Page</h1>
     <Link href="/blog">Blog</Link>
     <div>
     <  Link href="/products">Products</Link>
     </div>
    </main>
  );
}
