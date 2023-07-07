import { createClient } from "contentful";
import Link from "next/link";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function TeamMember({ teamMember }) {
  if (teamMember === undefined || teamMember.length === 0) {
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
        <div className="font-mono uppercase text-2xl">
          {teamMember[0].fields.title}
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 lg:gap-8 xl:gap-16 max-w-[1600px] w-full">
        {teamMember[0].fields.bands.map(
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
        {teamMember[0].fields.bands.map(
          ({ fields: { title, slug, folders, image } }, i) => {
            return (
              <Link key={i} href={`/bands/${slug}`}>
                <div className="relative  lg:max-h-[300px]  lg:h-[300px] w-[100%] max-w-[100%] h-[400px] lg:mb-0 mb-16 border-white-500 border-2 rounded-xl">
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
        {teamMember[0].fields.bands.map(
          ({ fields: { title, slug, folders, image } }, i) => {
            return (
              <Link key={i} href={`/bands/${slug}`}>
                <div className="relative  lg:max-h-[300px]  lg:h-[300px] w-[100%] max-w-[100%] h-[400px] lg:mb-0 mb-16 border-white-500 border-2 rounded-xl">
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
    </main>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const data = await client.getEntries();
  const teamMember = data.items.filter(
    (item) =>
      item.sys.contentType.sys.id === "teamMember" &&
      item.fields.slug === params.slug
  );
  return {
    props: {
      teamMember,
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
    content_type: "teamMember",
  });

  const paths = data.items.map((item) => ({
    params: { slug: item.fields.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}
