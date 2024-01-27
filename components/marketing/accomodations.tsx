import { accommodations } from "@/lib/globals";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Button } from "../ui/button";

export default function Accomodations() {
  return (
    <section>
      <h1 className="font-bold text-2xl mb-4">Accommodations</h1>
      <div className="flex flex-wrap gap-4 justify-center">
        {accommodations.map((accomodation, i) => (
          <Card key={i} className="w-[400px]">
            <CardHeader>
              <h1 className="font-semibold">{accomodation.accommodation}</h1>
            </CardHeader>
            <CardContent className="max-h-[200px]">
              <p>{accomodation.description}</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline">View</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
