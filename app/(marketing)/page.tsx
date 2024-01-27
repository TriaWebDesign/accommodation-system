import Accomodations from "@/components/marketing/accomodations";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col pb-10">
      <h1 className="text-7xl text-primary font-bold mb-5">
        We help Students with Learning Disorders.
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
