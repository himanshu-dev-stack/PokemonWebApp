  const getColor = (status) => {
    if (status === "grass") return "bg-[#74cb48]";
    if (status === "fire") return "bg-[#EE8130]";
    if (status === "water") return "bg-[#6390F0]";
    if (status === "bug") return "bg-[#A6B91A]";
    if (status === "normal") return "bg-[#A8A77A]";
    if (status === "fairy") return "bg-[#D685AD]";
    if (status === "poison") return "bg-[#A33EA1]";
    if (status === "electric") return "bg-[#F7D02C]";
    if (status === "ground") return "bg-[#E2BF65]";
    if (status === "fighting") return "bg-[#C22E28]";
    if (status === "rock") return "bg-[#B6A136]";
    if (status === "psychic") return "bg-[#F95587]";
    if (status === "ghost") return "bg-[#735797]";
    if (status === "ice") return "bg-[#96D9D6]";
    if (status === "dragon") return "bg-[#6F35FC]";
    if (status === "dark") return "bg-[#705746]";
    if (status === "steel") return "bg-[#B7B7CE]";
    if (status === "flying") return "bg-[#A98FF3]";
    return null;
  };



  export default getColor;