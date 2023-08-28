export const addEmojiToString = (emoji: string, string: string) => {
  const pts = emoji
    .toUpperCase()
    .split("")
    .map((ch) => 127397 + ch.charCodeAt());
  return String.fromCodePoint(...pts) + string;
};
