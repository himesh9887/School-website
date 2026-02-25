export default function Card({ children, className = '' }) {
  return <div className={`panel hover-lift p-6 ${className}`}>{children}</div>;
}
