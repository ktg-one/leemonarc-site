import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

for (const width of [360, 768, 1440]) {
  for (const path of ["/", "/contact"]) {
    test(`${path} is accessible and stays within ${width}px`, async ({
      page,
    }) => {
      const errors: string[] = [];
      page.on("pageerror", (error) => errors.push(error.message));
      await page.setViewportSize({ width, height: 1000 });
      await page.emulateMedia({ reducedMotion: "reduce" });
      await page.goto(path, { waitUntil: "networkidle" });
      await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= window.innerWidth,
        ),
      ).toBe(true);
      for (const image of await page.locator("img").all())
        await image.scrollIntoViewIfNeeded();
      await page.evaluate(() =>
        window.scrollTo({ top: 0, behavior: "instant" }),
      );
      const images = await page.evaluate(() =>
        Array.from(document.images)
          .filter((image) => !image.complete || image.naturalWidth === 0)
          .map((image) => image.src),
      );
      expect(images).toEqual([]);
      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
        .analyze();
      expect(results.violations).toEqual([]);
      expect(errors).toEqual([]);
    });
  }
}

test("services expand using keyboard interaction", async ({ page }) => {
  await page.goto("/");
  const service = page.locator(".service").first();
  await service.locator("summary").focus();
  await page.keyboard.press("Enter");
  await expect(service).toHaveAttribute("open", "");
  await expect(service.getByText("Capital gains considerations")).toBeVisible();
  await page.keyboard.press("Enter");
  await expect(service).not.toHaveAttribute("open", "");
});

test("no-JavaScript visitors retain all essential content and navigation", async ({
  browser,
}) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 360, height: 900 },
  });
  const page = await context.newPage();
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await page.locator(".service summary").first().click();
  await expect(page.getByText("Capital gains considerations")).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Bring the pieces together." }),
  ).toBeVisible();
  await page.getByText("Menu", { exact: true }).click();
  await page
    .getByRole("navigation", { name: "Mobile navigation" })
    .getByRole("link", { name: "Let’s talk" })
    .click();
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "What’s on your mind?",
  );
  await context.close();
});

test("keyboard skip link reaches main content", async ({ page }) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Skip to content" }),
  ).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/#main$/);
});

test("reduced motion removes pinning and animated geometry", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.locator("#perspective")).not.toHaveAttribute(
    "data-scroll-scene",
    "true",
  );
  const duration = await page
    .locator(".orbit-one")
    .evaluate((element) => getComputedStyle(element).transitionDuration);
  expect(parseFloat(duration)).toBeLessThan(0.01);
});
