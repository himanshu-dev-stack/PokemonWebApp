  const PokeIcons = (status) => {
    if (status === "grass") return "./grass.svg";
    if (status === "fire") return "./fire.svg";
    if (status === "water") return "./water.svg";
    if (status === "bug") return "./bug.svg";
    if (status === "normal") return "./normal.svg";
    if (status === "fairy") return "./fairy.svg";
    if (status === "poison") return "./poison.svg";
    if (status === "electric") return "./electric.svg";
    if (status === "ground") return "./ground.svg";
    if (status === "fighting") return "./fighting.svg";
    if (status === "rock") return "./rock.svg";
    if (status === "psychic") return "./psychic.svg";
    if (status === "ghost") return "./ghost.svg";
    if (status === "ice") return "./ice.svg";
    if (status === "dragon") return "./dragon.svg";
    if (status === "dark") return "./dark.svg";
    if (status === "steel") return "./steel.svg";
    if (status === "flying") return "./flying.svg";
    return null;
  };



  export default PokeIcons;
