import { createClient } from "contentful";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
import LoginForm from "@/components/LoginForm";

const inter = Inter({ subsets: ["latin"] });

export default function Band({ band, onePassword }) {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const authenticated = localStorage.getItem("token");

    if (authenticated) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [isAuthenticated]);

  if (isAuthenticated === null) {
    return <></>;
  }

  if (!isAuthenticated) {
    return (
      <main
        className={`flex h-full flex-col items-center justify-between p-12 ${inter.className} relative`}
      >
        <LoginForm setIsAuthenticated={setIsAuthenticated} />
      </main>
    );
  } else {
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
          <div className="flex items-center md:flex-row flex-col">
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
            <a
              className="md:ml-8 mt-8 md:mt-0 font-mono"
              href={onePassword[0].fields.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              1Password
            </a>
          </div>
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
                className="lg:mb-0 mb-8 group rounded-lg border border-gray-300 bg-black dark:border-neutral-700 dark:bg-neutral-800/30 px-5 py-4 transition-all hover:scale-105"
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
      </main>
    );
  }
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
      onePassword: data.items.filter(
        (item) => item.sys.contentType.sys.id === "onePassword"
      ),
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const data = await client.getEntries({
    content_type: "band",
  });

  const paths = data.items.map((item) => ({
    params: { slug: item.fields.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}
