import { describe, expect, test } from "bun:test";

import { cn, formatDate } from "./utils";

describe("cn", () => {
  test("merges conditional classes", () => {
    expect(cn("base", false && "hidden", ["flex", "items-center"])).toBe(
      "base flex items-center",
    );
  });

  test("resolves conflicting Tailwind classes", () => {
    expect(cn("px-2 py-1", "px-4")).toBe("py-1 px-4");
  });
});

describe("formatDate", () => {
  test("formats dates in UTC", () => {
    expect(formatDate("2024-01-01")).toBe("January 1, 2024");
  });
});
