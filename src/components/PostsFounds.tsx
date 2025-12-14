
export const PostsFounds = ({ total }: { total: number }) => {
  return (
    <div
      className="px-4 py-2 rounded-lg text-text-indigo-700 font-semibold text-center mb-4"
      style={{
        background: `repeating-linear-gradient(
          45deg,
          var(--color-indigo-100),
          var(--color-indigo-100) 10px,
          var(--color-indigo-200) 10px,
          var(--color-indigo-200) 20px
        )`,
      }}
    >
      Posts found: {total}
    </div>
  );
};
