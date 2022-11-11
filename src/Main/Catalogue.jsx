/*
    <one line to give the program's name and a brief idea of what it does.>
    Copyright (C) <year>  <name of author>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/
import items from "./items";
import { Icon } from "@iconify/react";
import Image from "next/image";

let itemID = 0;

const Catalogue = () => {

  return (
    <>
      <p className="relative text-center">Artwork by <a href="https://ko-fi.com/velocipasta" rel="noreferrer" target="_blank"> <Icon className="inline" icon="simple-icons:kofi" /> <b>Velocipasta</b></a></p>
      <div className="grid portrait:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => {
          return (
            <div
              style={{ color: item.color }}
              className={`mx-4 my-4 bg-[rgba(0,0,0,0.45)] p-4 rounded-full text-center`}
              key={item.name}
            >
              <Image alt={item.description} src={`https://db17gxef1g90a.cloudfront.net/potions/${item.icon}.png`} width="800" height="300" quality="100" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Catalogue;
