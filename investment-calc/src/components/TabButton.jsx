export default function TabButton({ children, isSelected, ...props }) {
  console.log('EXECUTED');
  return (
    <li>
      <button className={isSelected ? 'active' : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}