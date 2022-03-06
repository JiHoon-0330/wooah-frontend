const getEnNameFromKoName = (
  name: "나나" | "우연" | "소라" | "루시" | "민서" | string,
) => {
  if (name === "나나") return "NANA";
  if (name === "우연") return "WOOYEON";
  if (name === "소라") return "SORA";
  if (name === "루시") return "LUCY";
  if (name === "민서") return "MINSEO";
  if (name?.slice(0, 3) === "wa_") return "MEDIA";
  return undefined;
};

export default getEnNameFromKoName;
