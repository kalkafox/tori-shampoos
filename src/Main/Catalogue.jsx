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
import { faBottleWater } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

let itemID = 0;

const Catalogue = () => {
  return (
    <>
      <div className="grid portrait:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => {
          return (
            <div
              style={{ color: item.color }}
              className={`mx-4 my-4 bg-[rgba(127,54,150,0.45)] p-4 rounded-xl hover:scale-[1.1] transition-all text-center`}
              key={item.name}
            >
              <p
                className={`hover:text-[${item.color}] font-['Pacifico'] text-2xl`}
              >
                <b>{item.name}</b>
              </p>
              <FontAwesomeIcon icon={faBottleWater} />
              <p className={`font-['Poppins']`}>
                <i>{item.description}</i>
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Catalogue;
