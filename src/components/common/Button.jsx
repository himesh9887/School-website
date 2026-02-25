export default function Button({
  children,
  className = '',
  type = 'button',
  variant = 'primary',
  ...props
}) {
  const base =
    'inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold transition-all duration-300';

  const variants = {
    primary: 'gradient-btn',
    outline:
      'border border-[#123063] text-[#123063] hover:bg-[#123063] hover:text-white',
    muted: 'bg-slate-100 text-slate-700 hover:bg-slate-200',
  };

  return (
    <button type={type} className={`${base} ${variants[variant] || variants.primary} ${className}`} {...props}>
      {children}
    </button>
  );
}
