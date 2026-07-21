  const graDient = (status) => {
    if (status === "grass") return "bg-gradient-to-b from-black via-[#1a2e1a] to-[#74cb48]";
    if (status === "fire") return "bg-gradient-to-b from-black via-[#1a2e1a] to-[#EE8130]";
    if (status === "water") return "bg-gradient-to-b from-black via-[#1a2e1a] to-[#6390F0]";
    if (status === "bug") return "bg-gradient-to-b from-black via-[#1a2e1a] to-[#A6B91A]";
    if (status === "normal") return "bg-gradient-to-b from-black via-[#1a2e1a] to-[#A8A77A]";
    if (status === "fairy") return "bg-gradient-to-b from-black via-[#1a2e1a] to-[#D685AD]";
    if (status === "poison") return "bg-gradient-to-b from-black via-[#1a2e1a] to-[#A33EA1]";
    if (status === "electric") return "bg-gradient-to-b from-black via-[#1a2e1a] to-[#F7D02C]";
    if (status === "ground") return "bg-gradient-to-b from-black via-[#1a2e1a] to-[#E2BF65]";
    if (status === "fighting") return "bg-gradient-to-b from-black via-[#1a2e1a] to-[#C22E28]";
    if (status === "rock") return "bg-gradient-to-b from-black via-[#1a2e1a] to-[#B6A136]";
    if (status === "psychic") return "bg-gradient-to-b from-black via-[#1a2e1a] to-[#F95587]";
    if (status === "ghost") return "bg-gradient-to-b from-black via-[#1a2e1a] to-[#735797]";
    if (status === "ice") return "bg-gradient-to-b from-black via-[#1a2e1a] to-[#96D9D6]";
    if (status === "dragon") return "bg-gradient-to-b from-black via-[#1a2e1a] to-[#6F35FC]";
    if (status === "dark") return "bg-gradient-to-b from-black via-[#1a2e1a] to-[#705746]";
    if (status === "steel") return "bg-gradient-to-b from-black via-[#1a2e1a] to-[#B7B7CE]";
    if (status === "flying") return "bg-gradient-to-b from-black via-[#1a2e1a] to-[#A98FF3]";
    return "bg-gradient-to-b from-black via-[#1a2e1a] to-gray-600";
  };



  export default graDient;