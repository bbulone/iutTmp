export const useImage = (title: string) => {
  const imageName = `${title.toLowerCase().replace(" ", "")}`;

  let source;
  switch (imageName) {
    case "cr90corvette":
      source = require("../../../assets/starships/vaisseau1.jpeg");

      break;
  }
  return source;
};
