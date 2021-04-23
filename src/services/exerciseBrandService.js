export const brands = [
  {_id: "123abc", name: "Lotus Cosmetics USA"},
  {_id: "456def", name: "Clinique"},
  {_id: "789ghi", name: "Dior"},
  {_id: "11ab11", name: "Smashbox"},
  {_id: "12ab34", name: "L'Oréal"},
  {_id: "56cd78", name: "Physicians Formula"},
  {_id: "91ef23", name: "Maybelline"}
];

export function getBrands() {
  return brands.filter(b => b);
}
