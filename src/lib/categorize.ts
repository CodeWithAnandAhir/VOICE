export const MAP: Record<string, string> = {
  milk: "Dairy",
  yogurt: "Dairy",
  apple: "Produce",
  banana: "Produce",
  bread: "Bakery",
  rice: "Grains",
  chips: "Snacks",
  toothpaste: "Personal Care"
}

export const categorize = (item: string) =>
  Object.keys(MAP).find(k => item.includes(k))
    ? MAP[Object.keys(MAP).find(k => item.includes(k))!]
    : "Other" 