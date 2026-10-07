import antiSlop from "eslint-plugin-anti-slop";

export default [
  // anti-slop recommended config covers all 16 rules at their preset severity
  {
    ...antiSlop.configs.recommended,
    files: ["client/src/**/*.{ts,tsx}", "server/**/*.ts"],
  },
];
