import "./background.css"

const namesList = [
  "Jadi",
  "Babuchak",
  "Bhesu",
  "Dabbi (Apple)",
  "Non Sense",
  "Janudi",
  "Pagal",
];

const shuffleArray = (array) => {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
};

const Background = () => {

  return (
    <div>
      <div className="background-container">
        {[...Array(55)].map((_, rowIndex) => {
          const shuffledNames = shuffleArray([...namesList,...namesList,...namesList]);
          return (
            <div className="row" key={rowIndex}>
              {[...shuffledNames].map((name, nameIndex) => (
                <div className="animated-name" key={nameIndex}>
                  <h1>{name}</h1>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Background;
