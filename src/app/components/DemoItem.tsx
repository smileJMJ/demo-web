const DemoItem = ({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
      {children}
    </div>
  );
};

export default DemoItem;
