import React from "react";

interface CollectionProps {
  children: React.ReactElement<typeof Item> | React.ReactElement<typeof Item>[];
}

function Collection({ children }: CollectionProps) {
  return (
    <div className="flex snap-x snap-proximity flex-row flex-nowrap items-center gap-4 overflow-x-auto">
      {children}
    </div>
  );
}

function Item({ children }: any) {
  return <div className="snap-start">{children}</div>;
}

Collection.Item = Item;

export { Collection, Item };
