export const useImage = (title: string) => {
  const imageName = `${title.toLowerCase().replace(" ", "")}`;

  let source;
  switch (imageName) {
    case "cr90corvette":
      source = require("../../../assets/starships/vaisseau1.jpeg");

      break;

    case "stardestroyer":
      source = require("../../../assets/starships/starship.gif");

      break;

    case "Sentinel-class landing craft":
      source = require("../../../assets/starships/Sentinel-classlandingcraft.gif");

      break;
  }
  return source;
};
