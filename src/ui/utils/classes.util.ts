export function classes(...args: any[]) {
  return args.filter((a) => !!a).join(" ");
}
