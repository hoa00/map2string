export default function parser(_k: unknown, v: any) {
  if (v?.dataType === "ES6Map") {
      return new Map(v.value);
  }
  return v;
}
