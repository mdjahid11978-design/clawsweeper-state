import assert from "node:assert/strict";
import test from "node:test";
import { formatTimestamp, percent, tableCell } from "../scripts/markdown.mjs";

test("markdown helpers keep dashboard tables stable", () => {
  assert.equal(tableCell("a | b\nc"), "a \\| b c");
  assert.equal(percent(1, 4), "25.0%");
  assert.equal(percent(1, 0), "0.0%");
  assert.match(formatTimestamp("2026-05-01T05:37:00.000Z"), /May 1, 2026/);
});
