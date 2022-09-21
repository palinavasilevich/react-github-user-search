import React, { FC, useState } from "react";

import { useActions } from "../hooks/actions";
import { useAppSelector } from "../hooks/redux";
import { IRepo } from "../models/models";

interface IRepoCardProps {
  repo: IRepo;
}

const RepoCard: FC<IRepoCardProps> = ({ repo }) => {
  const { addFavourite, removeFavourite } = useActions();
  const { favourites } = useAppSelector((state) => state.github);

  const [isFavourite, setIsFavourite] = useState(
    favourites.includes(repo.html_url)
  );

  const addToFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    addFavourite(repo.html_url);
    setIsFavourite(true);
  };

  const removeFromFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    removeFavourite(repo.html_url);
    setIsFavourite(false);
  };

  return (
    <div className="border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all cursor-pointer">
      <a href={repo.html_url} target="_blank">
        <h2 className="text-lg font-bold">{repo.full_name}</h2>
        <p className="text-sm">
          Forks: <span className="font-bold mr-2">{repo.forks}</span>
          Watchers: <span className="font-bold">{repo.watchers}</span>
        </p>
        <p className="text-sm font-thin">{repo?.description}</p>
        {!isFavourite ? (
          <button
            className="py-2 mt-2 px-4 min-w-[100px] bg-yellow-400 rounded font-bold hover:shadow-sm transition-all"
            onClick={addToFavourite}
          >
            Add
          </button>
        ) : (
          <button
            className="mt-2 py-2 px-4 min-w-[100px] bg-red-400 rounded font-bold hover:shadow-sm transition-all"
            onClick={removeFromFavourite}
          >
            Remove
          </button>
        )}
      </a>
    </div>
  );
};

export default RepoCard;
