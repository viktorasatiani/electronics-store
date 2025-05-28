export const navigationItems = [
  {
    id: "shop-all",
    label: "Shop All",
    href: "/category/shopall?page=1",
    type: "simple",
  },
  {
    id: "computers",
    label: "Computers",
    href: "/category/computers",
    type: "simple",
  },
  {
    id: "tablets",
    label: "Tablets",
    href: "/category/tablets",
    type: "simple",
  },
  {
    id: "drones-cameras",
    label: "Drones&Cameras",
    href: "/category/drones-cameras",
    type: "simple",
  },
  {
    id: "audio",
    label: "Audio",
    href: "#",
    type: "dropdown",
    subItems: [
      {
        id: "headphones",
        label: "Headphone",
        href: "/category/headphones",
      },
      {
        id: "speakers",
        label: "Speakers",
        href: "/category/speakers",
      },
    ],
    showInBrowseBy: true,
  },
  {
    id: "mobiles",
    label: "Mobile",
    href: "/category/mobiles",
    type: "simple",
  },
  {
    id: "tv-cinemas",
    label: "T.V & Home Cinema",
    href: "/category/tv-cinemas",
    type: "simple",
  },
  {
    id: "wearables",
    label: "Wearable Tech",
    href: "/category/wearables",
    type: "simple",
  },
];
