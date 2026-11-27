import { test } from "node:test";
import assert from "node:assert/strict";
import { findBestMatch } from "../client/src/lib/chatbotKnowledge.js";
test("chat questions route to restored architecture and agent answers", () => {
  assert.equal(
    findBestMatch("What technology stack uses FastAPI and Pinecone?", null)
      ?.topic,
    "architecture"
  );
  assert.equal(
    findBestMatch("Tell me about the 17 agents", null)?.topic,
    "coordinationAgents"
  );
  assert.equal(
    findBestMatch("Google calendar scheduling", null)?.topic,
    "scheduling"
  );
  assert.equal(findBestMatch("xyzzy unmatched", null), null);
});
test("security and commercial answers qualify claims rather than promising controls or free pilots", () => {
  const security = findBestMatch("security encryption", null);
  assert.equal(security?.topic, "security");
  assert.ok(security?.text.includes("must be verified"));
  const pilot = findBestMatch("founding pilot", null);
  assert.equal(pilot?.topic, "pilotProgram");
  assert.ok(pilot?.text.includes("agreed with each organization"));
  const pricing = findBestMatch("pricing", null);
  assert.equal(pricing?.topic, "pricing");
  assert.ok(pricing?.text.includes("no published price"));
});
