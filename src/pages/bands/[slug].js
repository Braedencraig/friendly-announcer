import { createClient } from "contentful";
import Link from "next/link";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Band({ band }) {
  if (band === undefined || band.length === 0) {
    return (
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-12 ${inter.className}`}
      >
        <div className="w-full max-w-[1600px] mb-16 flex justify-between items-center">
          <Link href="/">
            <Image
              src="/fa.jpg"
              alt="Friendly Announcer"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main
      className={`flex flex-col items-center justify-between p-12 ${inter.className}`}
    >
      <div className="w-full max-w-[1600px] mb-16 flex justify-between items-center">
        <Link href="/">
          <Image
            src="/fa.jpg"
            alt="Friendly Announcer"
            className="dark:invert"
            width={100}
            height={24}
            priority
          />
        </Link>
        <div className="font-mono uppercase text-2xl">
          {band[0].fields.title}
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 lg:gap-8 xl:gap-16 max-w-[1600px] w-full">
        {band[0].fields.folders.map((folder, i) => {
          return (
            <a
              key={i}
              href={folder.fields.url}
              className="lg:mb-0 mb-8 group rounded-lg border border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30 px-5 py-4 transition-all hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={`mb-3 text-2xl font-semibold font-mono`}>
                {folder.fields.title}
              </h2>
            </a>
          );
        })}
        {band[0].fields.folders.map((folder, i) => {
          return (
            <a
              key={i}
              href={folder.fields.url}
              className="lg:mb-0 mb-8 group rounded-lg border border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30 px-5 py-4 transition-all hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={`mb-3 text-2xl font-semibold font-mono`}>
                {folder.fields.title}
              </h2>
            </a>
          );
        })}
        {band[0].fields.folders.map((folder, i) => {
          return (
            <a
              key={i}
              href={folder.fields.url}
              className="lg:mb-0 mb-8 group rounded-lg border border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30 px-5 py-4 transition-all hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={`mb-3 text-2xl font-semibold font-mono`}>
                {folder.fields.title}
              </h2>
            </a>
          );
        })}
        {band[0].fields.folders.map((folder, i) => {
          return (
            <a
              key={i}
              href={folder.fields.url}
              className="lg:mb-0 mb-8 group rounded-lg border border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30 px-5 py-4 transition-all hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={`mb-3 text-2xl font-semibold font-mono`}>
                {folder.fields.title}
              </h2>
            </a>
          );
        })}
        {band[0].fields.folders.map((folder, i) => {
          return (
            <a
              key={i}
              href={folder.fields.url}
              className="lg:mb-0 mb-8 group rounded-lg border border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30 px-5 py-4 transition-all hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={`mb-3 text-2xl font-semibold font-mono`}>
                {folder.fields.title}
              </h2>
            </a>
          );
        })}
        {band[0].fields.folders.map((folder, i) => {
          return (
            <a
              key={i}
              href={folder.fields.url}
              className="lg:mb-0 mb-8 group rounded-lg border border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30 px-5 py-4 transition-all hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={`mb-3 text-2xl font-semibold font-mono`}>
                {folder.fields.title}
              </h2>
            </a>
          );
        })}
        {band[0].fields.folders.map((folder, i) => {
          return (
            <a
              key={i}
              href={folder.fields.url}
              className="lg:mb-0 mb-8 group rounded-lg border border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30 px-5 py-4 transition-all hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={`mb-3 text-2xl font-semibold font-mono`}>
                {folder.fields.title}
              </h2>
            </a>
          );
        })}
        {band[0].fields.folders.map((folder, i) => {
          return (
            <a
              key={i}
              href={folder.fields.url}
              className="lg:mb-0 mb-8 group rounded-lg border border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30 px-5 py-4 transition-all hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={`mb-3 text-2xl font-semibold font-mono`}>
                {folder.fields.title}
              </h2>
            </a>
          );
        })}
        {band[0].fields.folders.map((folder, i) => {
          return (
            <a
              key={i}
              href={folder.fields.url}
              className="lg:mb-0 mb-8 group rounded-lg border border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30 px-5 py-4 transition-all hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={`mb-3 text-2xl font-semibold font-mono`}>
                {folder.fields.title}
              </h2>
            </a>
          );
        })}
      </div>
      {/* <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        {} */}
      {/* <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="lg:mb-0 mb-8 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a> */}

      {/* <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="lg:mb-0 mb-8 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a> */}

      {/* <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="lg:mb-0 mb-8 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Discover and deploy boilerplate example Next.js&nbsp;projects.
          </p>
        </a> */}

      {/* <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="lg:mb-0 mb-8 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a> */}
    </main>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const data = await client.getEntries();
  const band = data.items.filter(
    (item) =>
      item.sys.contentType.sys.id === "band" && item.fields.slug === params.slug
  );

  return {
    props: {
      band,
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: false,
  };
}
