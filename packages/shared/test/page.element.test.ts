/*
 * @Descripttion:
 * @Date: 2022-05-17 14:54:18
 * @LastEditors: Rail.Wang
 * @LastEditTime: 2022-05-17 14:59:45
 */
import { describe, expect, test } from "vitest";
import { PageElement, Project, Page } from "../src";

describe("page.element", () => {
  const project = Project.create();

  test("project.name", () => {
    expect(project.name).toBe("New Project");
  });

  test("project.pages.length === 1", () => {
    expect(project.pages.length).toBe(1);
  });

  test("project.json", () => {
    expect(project.getJson()).toMatchInlineSnapshot(`
      {
        "description": "New Project Description",
        "id": undefined,
        "name": "New Project",
        "pages": [
          {
            "description": "New Page Description",
            "elements": [],
            "name": "New Page",
          },
        ],
      }
    `);
  });
});
