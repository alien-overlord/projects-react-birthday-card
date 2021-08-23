import React from "react";

const List = ({ people }) => {
  return (
    <section>
      {people.map((person) => {
        const { image, id, name, age } = person;
        return (
          <div className="person" key={id}>
            <img src={image} alt={name} title={name} />
            <div>
              <h4>{name}</h4>
              <p>{`${age} years old`}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default List;
