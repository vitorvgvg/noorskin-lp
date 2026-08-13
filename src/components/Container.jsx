export default function Container({ className = "", children }) {
  return (
    <div className={`mx-auto max-w-[1360px] px-6 md:px-0 ${className}`}>
      {children}
    </div>
  );
}
