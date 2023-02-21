export default function converter(_k: unknown, v: unknown) {
  if (v instanceof Map) {
    return {
      dataType: "ES6Map",
      value: Array.from(v.entries()),
    };
  } else {
    return v;
  }
}
