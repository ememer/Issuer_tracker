interface List {
  id: number;
  url: () => void;
  border: string;
}

export const avatarLists: List[] = [
  {
    id: 1,
    url: require("../Assets/1.jpg"),
    border: "#9EB23B",
  },
  {
    id: 2,
    url: require("../Assets/1.jpg"),
    border: "#00FFAB",
  },
  {
    id: 3,
    url: require("../Assets/1.jpg"),
    border: "#FAC213",
  },
  {
    id: 4,
    url: require("../Assets/1.jpg"),
    border: "#F47C7C",
  },
  {
    id: 5,
    url: require("../Assets/1.jpg"),
    border: "#F24C4C",
  },
  {
    id: 6,
    url: require("../Assets/1.jpg"),
    border: "#2E0249",
  },
  {
    id: 7,
    url: require("../Assets/1.jpg"),
    border: "#827397",
  },
  {
    id: 8,
    url: require("../Assets/1.jpg"),
    border: "#2F8F9D",
  },
];
