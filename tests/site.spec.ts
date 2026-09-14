import { test, expect } from "@playwright/test";

test("homepage presents the advisory proposition", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "The bigger picture. A clearer way forward.",
  );
  await expect(page.getByRole("main")).toContainText("Accounting");
});

test("perspective controls explain each stage without relying on animation", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/#perspective");
  await page.getByRole("button", { name: "02 Connect" }).click();
  await expect(
    page.getByRole("heading", { name: "Bring the pieces together." }),
  ).toBeVisible();
  await expect(
    page.getByRole("button", { name: "02 Connect" }),
  ).toHaveAttribute("aria-pressed", "true");
  await page.getByRole("button", { name: "03 Move forward" }).click();
  await expect(
    page.getByRole("heading", { name: "Decide with perspective." }),
  ).toBeVisible();
  await page.getByRole("button", { name: "01 Understand" }).click();
  await expect(
    page.getByRole("heading", { name: "See where you stand." }),
  ).toBeVisible();
});

test("desktop scroll connects the perspective stages", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/");
  const scene = page.locator("#perspective");
  await expect(page.locator("html")).toHaveAttribute(
    "data-scroll-scene",
    "true",
  );
  for (const [progress, name] of [
    [0.05, "01 Understand"],
    [0.5, "02 Connect"],
    [0.95, "03 Move forward"],
  ] as const) {
    await scene.evaluate((element, progress) => {
      const inner = element.querySelector(".perspective-inner")!;
      window.scrollTo({
        top:
          element.getBoundingClientRect().top +
          window.scrollY +
          (element.clientHeight - inner.clientHeight) * progress,
        behavior: "instant",
      });
    }, progress);
    await expect(page.getByRole("button", { name })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
  }
});

test("desktop scroll assembles the monogram study", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/");
  const scene = page.locator("#vivienne");
  await expect(page.locator("html")).toHaveAttribute(
    "data-scroll-scene",
    "true",
  );
  const art = scene.locator(".adviser-art");
  for (const [progress, step] of [
    [0.05, "0"],
    [0.5, "1"],
    [0.95, "2"],
  ] as const) {
    await scene.evaluate((element, progress) => {
      const art = element.querySelector(".adviser-art")!;
      window.scrollTo({
        top:
          element.getBoundingClientRect().top +
          window.scrollY +
          (element.clientHeight - art.clientHeight) * progress,
        behavior: "instant",
      });
    }, progress);
    await expect(art).toHaveAttribute("data-step", step);
  }
});

test("monogram study stays static under reduced motion", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/");
  const scene = page.locator("#vivienne");
  await expect(page.locator("html")).not.toHaveAttribute(
    "data-scroll-scene",
    "true",
  );
  await expect(scene.locator(".study-overlay")).toBeHidden();
});

test("conversation page provides real direct contact details", async ({
  page,
}) => {
  await page.goto("/");
  await page
    .getByRole("link", { name: "A conversation with Vivienne" })
    .click();
  await expect(page).toHaveURL(/\/contact$/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "What’s on your mind?",
  );
  await expect(
    page
      .getByRole("main")
      .getByRole("link", { name: "vivienne@leemonarc.com.au" }),
  ).toHaveAttribute("href", "mailto:vivienne@leemonarc.com.au");
  await expect(
    page.getByRole("main").getByRole("link", { name: "0413 149 137" }),
  ).toHaveAttribute("href", "tel:+61413149137");
});
