import Image from "next/image";
import RevealEmail from "./components/RevealEmail";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/collinatuslogo.png"
          alt="Collinatus Venturtes"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <p><iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ccSejkELhKY?si=h4RhZzBq-Nk6A1hG"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe></p>
          <p><RevealEmail /></p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          
        </div>
      </main>
    </div>
  );
}
