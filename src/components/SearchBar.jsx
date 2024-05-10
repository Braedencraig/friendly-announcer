import React from "react";

export default function SearchBar({ setQuery, query, data }) {
  return (
    <div className="flex w-full mb-12 max-w-[1600px]">
      <input
        className="text-black font-mono py-2 px-4 w-full lg:w-auto rounded-lg"
        type="text"
        placeholder="Search"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
      {query.length !== 0 && (
        <span
          onClick={() => setQuery("")}
          className="ml-2 cursor-pointer flex items-center text-2xl"
        >
          X
        </span>
      )}
      {query.length === 0 ? null : (
        <div className="bg-white text-black font-mono absolute z-[1000] mt-10">
          {data.map((item, i) => {
            return item.fields.folders && Array.isArray(item.fields.folders)
              ? item.fields.folders.map((folder, i) => {
                  if (!folder.fields || !folder.fields.folderContents)
                    return null;

                  return folder.fields.folderContents
                    .map((content, i) => {
                      if (
                        content.fields &&
                        content.fields.title &&
                        content.fields.title
                          .toLowerCase()
                          .includes(query.toLowerCase())
                      ) {
                        return (
                          <div
                            className="py-2 px-4 bg-white hover:bg-black hover:text-white"
                            key={i}
                          >
                            <a
                              href={content.fields.url}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <h1>{content.fields.title}</h1>
                            </a>
                          </div>
                        );
                      }
                      return null;
                    })
                    .filter(Boolean);
                })
              : null;
          })}
        </div>
      )}
    </div>
  );
}
