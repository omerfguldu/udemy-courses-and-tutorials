function FlagEmoji({ className, emoji }) {
  return (
    <span className={className}>
      <img
        src={`https://flagcdn.com/24x18/${emoji?.toLowerCase()}.png`}
        alt={emoji}
        width={24}
        height={18}
      />
    </span>
  );
}

export default FlagEmoji;
