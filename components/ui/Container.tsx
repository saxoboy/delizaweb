export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="container relative px-4 mx-auto lg:px-6">{children}</div>
  );
}
