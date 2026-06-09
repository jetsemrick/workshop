import { describe, expect, test } from "bun:test";

import { getAllPostIds, getPostData, getSortedPostsData } from "./posts";

describe("getSortedPostsData", () => {
  test("reads post frontmatter sorted by newest date first", () => {
    expect(getSortedPostsData()).toEqual([
      {
        id: "hello-world",
        title: "Hello, world",
        date: "2024-01-01",
        description: "A short introduction.",
      },
    ]);
  });
});

describe("getAllPostIds", () => {
  test("returns route params for markdown posts", () => {
    expect(getAllPostIds()).toEqual([
      {
        params: {
          slug: "hello-world",
        },
      },
    ]);
  });
});

describe("getPostData", () => {
  test("returns frontmatter and rendered markdown content", async () => {
    await expect(getPostData("hello-world")).resolves.toMatchObject({
      id: "hello-world",
      title: "Hello, world",
      date: "2024-01-01",
      description: "A short introduction.",
      contentHtml:
        "<p>Welcome. This is the first entry \u2014 more soon on engineering, debate, and building Cursor.</p>\n",
    });
  });
});
