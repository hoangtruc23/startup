import ArtistContentCreation from "./components/artist-content-creation";

export default function Home() {
  return (
    <>
      <div className="mx-25">
        <div className="flex flex-col justify-center items-center h-[calc(100vh-150px)]">
          <h1 className="text-5xl font-semibold">AI-Powered Social Media Intelligence</h1>
          <h2 className="text-5xl font-semibold">Intelligence</h2>
        </div>
        <ArtistContentCreation />
      </div>
    </>
  );
}