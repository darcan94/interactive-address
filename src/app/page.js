import Address from "./components/address";
import Map from "./components/map-viewer";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-between p-2">
      <Address 
        street="One Apple Park Way"
        city="Cupertino"
        state="CA"
        zip="95014"
        country="United Stets"
        className="w-4/12"
      />
      <Map className="w-7/12"/>
    </main>
  );
}
