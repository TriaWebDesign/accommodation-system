import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="h-full flex flex-col justify-center">
      <h1 className="text-7xl text-primary font-bold mb-5">
        How to make a multi-million dollar Application?
      </h1>
      <p className="mb-4 text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa voluptas
        expedita dolores ducimus alias tempora, tempore odio, porro assumenda id
        officiis quo, fugiat possimus earum. Natus molestiae dolor quas fuga?
      </p>
      <div>
        <Button variant="secondary">Learn More</Button>
      </div>
    </main>
  );
}
