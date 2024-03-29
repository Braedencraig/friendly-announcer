import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import WidgetBot from "@widgetbot/react-embed";
import { Inter } from "next/font/google";
import { createClient } from "contentful";
import LoginForm from "@/components/LoginForm";
import SearchBar from "@/components/SearchBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ teamMembers, bands, onePassword }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [query, setQuery] = useState("");

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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
    return (
      <main
        className={`flex h-full flex-col items-center justify-between p-12 ${inter.className} relative`}
      >
        {/* <div className="discord-widget">
          {!isModalOpen && (
            <button className="open-button" onClick={handleOpenModal}>
              Open Discord
            </button>
          )}

          {isModalOpen && (
            <div className="modal">
              <button className="close-button" onClick={handleCloseModal}>
                Close Discord
              </button>
              <WidgetBot
                style={{ height: "80vh", width: "80vw" }}
                server={process.env.NEXT_PUBLIC_BIG_SERVER}
                channel={process.env.NEXT_PUBLIC_BIG_CHANNEL}
              />
            </div>
          )}

          <style jsx>{`
            .discord-widget {
              position: fixed;
              bottom: 20px;
              right: 120px;
              z-index: 1000;
            }

            .open-button {
              padding: 10px 20px;
              background-color: #7289da;
              color: #fff;
              border: none;
              border-radius: 4px;
              cursor: pointer;
              font-size: 16px;
            }

            .modal {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background-color: rgba(0, 0, 0, 0.8);
              display: flex;
              align-items: center;
              justify-content: center;
              z-index: 9999;
            }

            .close-button {
              position: absolute;
              top: 20px;
              right: 20px;
              padding: 5px;
              background-color: transparent;
              color: #fff;
              border: none;
              font-size: 16px;
              cursor: pointer;
              padding: 10px 20px;
              background-color: #7289da;
              color: #fff;
              border: none;
              border-radius: 4px;
              cursor: pointer;
              margin-bottom: 16px;
            }

            @media screen and (max-width: 768px) {
              .discord-widget {
                bottom: 10px;
                right: 10px;
              }

              .close-button {
                top: 10px;
                right: 10px;
              }
            }
          `}</style>
        </div> */}
        <div className="discord-widget">
          {!isModalOpen && (
            <button className="open-button" onClick={handleOpenModal}>
              Open Discord
            </button>
          )}

          {isModalOpen && (
            <div className="modal">
              <button className="close-button" onClick={handleCloseModal}>
                Close Discord
              </button>
              <WidgetBot
                style={{ height: "80vh", width: "80vw" }}
                server={process.env.NEXT_PUBLIC_SERVER}
                channel={process.env.NEXT_PUBLIC_CHANNEL}
              />
            </div>
          )}

          <style jsx>{`
            .discord-widget {
              position: fixed;
              bottom: 20px;
              right: 20px;
              z-index: 1000;
            }

            .open-button {
              padding: 10px 20px;
              background-color: #7289da;
              color: #fff;
              border: none;
              border-radius: 4px;
              cursor: pointer;
              font-size: 16px;
            }

            .modal {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background-color: rgba(0, 0, 0, 0.8);
              display: flex;
              align-items: center;
              justify-content: center;
              z-index: 9999;
            }

            .close-button {
              position: absolute;
              top: 20px;
              right: 20px;
              padding: 5px;
              background-color: transparent;
              color: #fff;
              border: none;
              font-size: 16px;
              cursor: pointer;
              padding: 10px 20px;
              background-color: #7289da;
              color: #fff;
              border: none;
              border-radius: 4px;
              cursor: pointer;
              margin-bottom: 16px;
            }

            @media screen and (max-width: 768px) {
              .discord-widget {
                bottom: 10px;
                right: 10px;
              }

              .close-button {
                top: 10px;
                right: 10px;
              }
            }
          `}</style>
        </div>
        {!isModalOpen && (
          <>
            <div className="w-full max-w-[1600px] mb-12 flex lg:flex-row flex-col justify-between items-center">
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
                  href={onePassword[0]?.fields.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  1Password
                </a>
              </div>
              <div className="font-mono w-full flex justify-start lg:justify-end gap-8 flex-wrap max-w-[900px] lg:mt-0 mt-12">
                {teamMembers[0].fields.teamMember.map(
                  ({ fields: { title, slug } }, i) => {
                    return (
                      <Link key={i} href={`/team/${slug}`}>
                        <span className="text-xl uppercase hover:opacity-50 transition duration-300">
                          {title}
                        </span>
                      </Link>
                    );
                  }
                )}
              </div>
            </div>
            <SearchBar
              setQuery={setQuery}
              query={query}
              data={bands[0].fields.band}
            />
            <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 lg:gap-8 xl:gap-16 max-w-[1600px] w-full">
              {bands[0].fields.band.map(
                ({ fields: { title, slug, folders, image } }, i) => {
                  return (
                    <Link key={i} href={`/bands/${slug}`}>
                      <div className="relative lg:max-h-[300px] lg:h-[300px] w-[100%] max-w-[100%] h-[400px] lg:mb-0 mb-16 border-white-500 border-2 rounded-xl">
                        <h2 className="absolute left-0 right-0 text-center top-8 lg:top-4 text-4xl lg:text-2xl uppercase z-40 font-black font-mono">
                          {title}
                        </h2>
                        {image?.fields.file.url && (
                          <Image
                            className="opacity-75 hover:opacity-50 transition duration-300 relative rounded-xl"
                            src={"https:" + image?.fields.file.url}
                            alt="band"
                            layout="fill"
                            objectFit="cover"
                          />
                        )}
                      </div>
                    </Link>
                  );
                }
              )}
            </div>
          </>
        )}
      </main>
    );
  }
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const data = await client.getEntries();

  return {
    props: {
      teamMembers: data.items.filter(
        (item) => item.sys.contentType.sys.id === "teamMembers"
      ),
      bands: data.items.filter(
        (item) => item.sys.contentType.sys.id === "bands"
      ),
      onePassword: data.items.filter(
        (item) => item.sys.contentType.sys.id === "onePassword"
      ),
    },
    revalidate: 10,
  };
}
