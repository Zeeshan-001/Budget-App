import kids from "../svgs/kids.svg";
import eating from "../svgs/eating.svg";
import generals from "../svgs/generals.svg";
import bags from "../svgs/luggage.svg";
import savings from "../svgs/savings.svg";
import shopping from "../svgs/shopping.svg";
import sport from "../svgs/sport.svg";
import travel from "../svgs/travel.svg";
import wallet from "../svgs/wallet.svg";
import wifi from "../svgs/wifi.svg";
import car from "../svgs/car.svg";
import petrol from "../svgs/petrol.svg";
import electricity from "../svgs/electricity.svg";
import mobile from "../svgs/mobile.svg";
import house from "../svgs/house.svg";

// export const categories = [
//   { _id: "001", type: "income", label: "salary", svg: wallet },
//   { _id: "002", type: "income", label: "saving", svg: savings },
//   { _id: "003", type: "income", label: "other", svg: generals },
//   { _id: "004", type: "expense", label: "sport", svg: sport },
//   { _id: "005", type: "expense", label: "house", svg: house },
//   { _id: "006", type: "expense", label: "mobile", svg: mobile },
//   { _id: "007", type: "expense", label: "electricity", svg: electricity },
//   { _id: "008", type: "expense", label: "petrol", svg: petrol },
//   { _id: "009", type: "expense", label: "car", svg: car },
//   { _id: "010", type: "expense", label: "wifi", svg: wifi },
//   { _id: "011", type: "expense", label: "travel", svg: travel },
//   { _id: "012", type: "expense", label: "kids", svg: kids },
//   { _id: "013", type: "expense", label: "bags", svg: bags },
//   { _id: "015", type: "expense", label: "eating", svg: eating },
//   { _id: "016", type: "expense", label: "shopping", svg: shopping },
//   { _id: "017", type: "expense", label: "travel", svg: travel },
//   { _id: "014", type: "generals", label: "generals", svg: generals },
// ];

export const categories = [
  { _id: "101", type: "income", label: "Gehalt", svg: wallet },
  { _id: "102", type: "income", label: "Ersparnisse", svg: savings },
  { _id: "103", type: "income", label: "Sonstiges", svg: generals },
  { _id: "104", type: "expense", label: "Sport", svg: sport },
  { _id: "105", type: "expense", label: "Haus", svg: house },
  { _id: "106", type: "expense", label: "Mobile", svg: mobile },
  { _id: "107", type: "expense", label: "Strom", svg: electricity },
  { _id: "108", type: "expense", label: "Benzin", svg: petrol },
  { _id: "109", type: "expense", label: "Auto", svg: car },
  { _id: "110", type: "expense", label: "WLAN", svg: wifi },
  { _id: "111", type: "expense", label: "Reisen", svg: travel },
  { _id: "112", type: "expense", label: "Kinder", svg: kids },
  { _id: "113", type: "expense", label: "Taschen", svg: bags },
  { _id: "114", type: "expense", label: "Essen", svg: eating },
  { _id: "115", type: "expense", label: "Einkaufen", svg: shopping },
  { _id: "116", type: "expense", label: "Reisen", svg: travel },
  { _id: "117", type: "generals", label: "Allgemein", svg: generals },
];

// Function to return an array of SVGs
export const getSvgs = () => categories.map((cat) => cat.svg);
