const Code = ({ children }: { children: React.ReactNode }) => {
  return (
    <pre className="bg-gray-100 p-1 text-black text-[14px] rounded-md">
      <code>{children}</code>
    </pre>
  );
};

export default Code;
