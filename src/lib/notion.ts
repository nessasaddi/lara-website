import { Client } from "@notionhq/client";
import type {
  PageObjectResponse,
  QueryDatabaseResponse,
} from "@notionhq/client/build/src/api-endpoints";

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_PORTFOLIO_DB_ID!;

export type PortfolioItem = {
  id: string;
  name: string;
  category: string;
  imageUrl: string | null;
  isCover: boolean;
  isFeatured: boolean;
  order: number;
};

export type CategoryGroup = {
  category: string;
  coverImage: string | null;
  items: PortfolioItem[];
};

function extractImageUrl(page: PageObjectResponse): string | null {
  const prop = page.properties["Image"];
  if (prop?.type === "files" && prop.files.length > 0) {
    const file = prop.files[0];
    if (file.type === "file") return file.file.url;
    if (file.type === "external") return file.external.url;
  }
  return null;
}

function extractItem(page: PageObjectResponse): PortfolioItem {
  const props = page.properties;
  return {
    id: page.id,
    name: props["Name"]?.type === "title"
      ? props["Name"].title.map((t) => t.plain_text).join("")
      : "",
    category: props["Category"]?.type === "select"
      ? props["Category"].select?.name ?? "Uncategorized"
      : "Uncategorized",
    imageUrl: extractImageUrl(page),
    isCover: props["Cover Image"]?.type === "checkbox"
      ? props["Cover Image"].checkbox
      : false,
    isFeatured: props["Featured"]?.type === "checkbox"
      ? props["Featured"].checkbox
      : false,
    order: props["Order"]?.type === "number"
      ? props["Order"].number ?? 0
      : 0,
  };
}

export async function getPortfolioItems(): Promise<PortfolioItem[]> {
  const pages: PageObjectResponse[] = [];
  let cursor: string | undefined;

  do {
    const response: QueryDatabaseResponse = await notion.databases.query({
      database_id: databaseId,
      start_cursor: cursor,
      sorts: [{ property: "Order", direction: "ascending" }],
    });
    for (const page of response.results) {
      if ("properties" in page) pages.push(page as PageObjectResponse);
    }
    cursor = response.has_more ? response.next_cursor ?? undefined : undefined;
  } while (cursor);

  return pages.map(extractItem);
}

export async function getCategoryGroups(): Promise<CategoryGroup[]> {
  const items = await getPortfolioItems();

  const categoryOrder = [
    "Personal Branding",
    "Founders & CEOs",
    "Real Estate",
    "Wellness",
    "Ongoing Content",
  ];

  const grouped = new Map<string, PortfolioItem[]>();
  for (const item of items) {
    const list = grouped.get(item.category) ?? [];
    list.push(item);
    grouped.set(item.category, list);
  }

  return categoryOrder
    .filter((cat) => grouped.has(cat))
    .map((category) => {
      const catItems = grouped.get(category)!;
      const cover = catItems.find((i) => i.isCover);
      return {
        category,
        coverImage: cover?.imageUrl ?? catItems[0]?.imageUrl ?? null,
        items: catItems,
      };
    });
}
