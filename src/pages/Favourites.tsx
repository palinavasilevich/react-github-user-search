import React from "react";
import { useAppSelector } from "../hooks/redux";

const Favourites = () => {
  const { favourites } = useAppSelector((state) => state.github);

  if (favourites.length === 0) return <p className="text-center">No items.</p>;

  return (
    <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
      <ul className="list-none">
        {favourites.map((f) => (
          <li key={f} className="cursor-pointer mb-2">
            <a href={f} target="_blank">
              {f}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favourites;
