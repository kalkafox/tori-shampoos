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
