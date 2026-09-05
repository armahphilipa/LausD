import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  variant?: 'nav' | 'drawer';
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ variant = 'nav', className = '' }) => {
  const { isLight, toggleTheme } = useTheme();

  if (variant === 'drawer') {
    return (
      <button
        type="button"
        onClick={toggleTheme}
        id="theme-toggle-drawer"
        className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl border transition-all ${
          isLight
            ? 'bg-slate-100 hover:bg-slate-200 border-slate-200 text-slate-900'
            : 'bg-[#333533]/80 hover:bg-[#333533] border-[#333533] text-[#D6D6D6]'
        } ${className}`}
        aria-label={`Switch to ${isLight ? 'dark' : 'light'} theme`}
      >
        <span className="flex items-center gap-2.5 text-sm font-semibold">
          {isLight ? (
            <Sun className="w-4 h-4 text-amber-500" />
          ) : (
            <Moon className="w-4 h-4 text-[#FFEE32]" />
          )}
          <span>{isLight ? 'Light Theme' : 'Dark Theme'}</span>
        </span>
        <span
          className={`text-xs px-2.5 py-1 rounded-full font-bold uppercase tracking-wider ${
            isLight
              ? 'bg-amber-100 text-amber-900 border border-amber-300'
              : 'bg-[#202020] text-[#FFEE32] border border-[#FFEE32]/30'
          }`}
        >
          {isLight ? 'Switch to Dark' : 'Switch to Light'}
        </span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      id="theme-toggle-nav"
      className={`relative p-2 rounded-full border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#FFEE32]/60 ${
        isLight
          ? 'bg-white border-slate-200 text-slate-800 hover:bg-slate-100 shadow-sm'
          : 'bg-[#202020]/80 border-white/20 text-[#D6D6D6] hover:text-[#FFEE32] hover:bg-white/10'
      } ${className}`}
      aria-label={`Switch to ${isLight ? 'dark' : 'light'} theme`}
      title={`Switch to ${isLight ? 'dark' : 'light'} theme`}
    >
      {isLight ? (
        <Moon className="w-4 h-4 text-slate-700 hover:text-slate-950 transition-transform duration-200 hover:scale-110" />
      ) : (
        <Sun className="w-4 h-4 text-[#FFEE32] transition-transform duration-200 hover:scale-110" />
      )}
    </button>
  );
};
