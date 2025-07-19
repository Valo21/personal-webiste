import { useTheme } from "../hooks/useTheme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="btn btn-outline-secondary"
      aria-label="Cambiar tema"
    >
      Cambiar a {theme === 'light' ? 'oscuro' : 'claro'}
    </button>
  );
}
