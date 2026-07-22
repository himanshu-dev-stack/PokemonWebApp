  const PokeIcons = (status) => {
    if (status === "grass") return "./public/grass.svg";
    if (status === "fire") return "/public/fire.svg";
    if (status === "water") return "/public/water.svg";
    if (status === "bug") return "/public/bug.svg";
    if (status === "normal") return "/public/normal.svg";
    if (status === "fairy") return "/public/fairy.svg";
    if (status === "poison") return "/public/poison.svg";
    if (status === "electric") return "/public/electric.svg";
    if (status === "ground") return "/public/ground.svg";
    if (status === "fighting") return "/public/fighting.svg";
    if (status === "rock") return "/public/rock.svg";
    if (status === "psychic") return "/public/psychic.svg";
    if (status === "ghost") return "/public/ghost.svg";
    if (status === "ice") return "/public/ice.svg";
    if (status === "dragon") return "/public/dragon.svg";
    if (status === "dark") return "/public/dark.svg";
    if (status === "steel") return "/public/steel.svg";
    if (status === "flying") return "/public/flying.svg";
    return null;
  };



  export default PokeIcons;
