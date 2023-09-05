import { createClient } from "contentful";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
import LoginForm from "@/components/LoginForm";
import { FaInstagram, FaTwitter, FaYoutube, FaTiktok } from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });

export default function Band({ band, onePassword }) {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [active, setActive] = useState("");

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
        className={`flex h-full  flex-col items-center justify-between p-12 ${inter.className} relative`}
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
          <div className="w-full max-w-[1600px] mb-12 flex justify-between items-center">
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
        <div className="w-full max-w-[1600px] mb-12 flex justify-between items-center">
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
          <div className="font-mono uppercase text-2xl flex items-center">
            {band[0].fields.title}
            {band[0].fields.instagram && (
              <span className="ml-4">
                <a
                  href={band[0].fields.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
              </span>
            )}
            {band[0].fields.twitter && (
              <span className="ml-4">
                <a
                  href={band[0].fields.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
              </span>
            )}
            {band[0].fields.tikTok && (
              <span className="ml-4">
                <a
                  href={band[0].fields.tikTok}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTiktok />
                </a>
              </span>
            )}
            {band[0].fields.youTube && (
              <span className="ml-4">
                <a
                  href={band[0].fields.youTube}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube />
                </a>
              </span>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 lg:gap-8 xl:gap-16 max-w-[1600px] w-full">
          {band[0].fields.folders &&
            band[0].fields.folders.map((folder, i) => {
              const emoji = folder.fields.titleWithEmoji?.content.map(
                (item, i) => {
                  return item.content[0].value;
                }
              );
              return (
                <div
                  key={i}
                  onClick={() => setActive(i)}
                  className={`lg:mb-0 mb-8 group rounded-lg border cursor-pointer ${
                    active === i ? "border-black" : "border-gray-300"
                  }  bg-black px-5 py-4 transition-all hover:scale-105`}
                >
                  <h2 className={`mb-3 text-2xl font-semibold font-mono`}>
                    {emoji !== undefined && `${emoji[0]} ${" "}`}
                    {folder.fields.title}
                  </h2>
                </div>
              );
            })}
        </div>
        {band[0].fields.folders &&
          band[0].fields.folders.map((folder, i) => {
            if (active === i) {
              if (folder.fields.folderContents === undefined) {
                return (
                  <div
                    key={i}
                    className="text-center mt-32 max-w-[1600px] w-full"
                  >
                    <div className="lg:mb-0 mb-8 px-5 py-4 ">
                      <h2
                        className={`mb-3 text-2xl font-semibold font-mono transition-all hover:scale-105`}
                      >
                        No content yet
                      </h2>
                    </div>
                  </div>
                );
              }
              return (
                <div
                  key={i}
                  className="text-center mt-32 max-w-[1600px] w-full"
                >
                  {folder.fields.folderContents?.map((item, i) => {
                    return (
                      <a
                        key={i}
                        href={item.fields.url}
                        className="lg:mb-0 mb-8 px-5 py-4 "
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <h2
                          className={`mb-3 text-2xl font-semibold font-mono transition-all hover:scale-105`}
                        >
                          {item.fields.title}
                        </h2>
                      </a>
                    );
                  })}
                </div>
              );
            }
          })}
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
    revalidate: 10,
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
    fallback: true,
  };
}
