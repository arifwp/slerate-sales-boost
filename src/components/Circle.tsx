import clsx from "clsx";

export const Circle = ({ className }: { className?: string }) => {
  return (
    <div
      className={clsx(
        "p-4 rounded-full aspect-square bg-(--color-primary)",
        className
      )}
    />
  );
};
