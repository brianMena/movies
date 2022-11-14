export const genres = [
  { _id: "32345", name: "Drama" },
  { _id: "14345", name: "Action" },
  { _id: "17345", name: "Aventure" },
  { _id: "62345", name: "Terror" },
];

export function getGenres() {
  return genres.filter((g) => g);
}
