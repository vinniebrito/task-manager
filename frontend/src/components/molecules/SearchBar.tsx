import SearchIcon from "../atoms/icons/Search";
import SearchOffIcon from "../atoms/icons/SearchOff";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  onClear?: () => void;
  placeholder?: string;
};

function SearchBar({
  value,
  onChange,
  onClear,
  placeholder = "Pesquisar tarefas...",
}: SearchBarProps) {
  return (
    <div
      className="
        flex items-center
        w-full max-w-[450px] min-w-0
        rounded-[8px] px-3
        bg-sand
        transition h-8 focus-within:ring-2 focus-within:ring-limewash focus-within:border-limewash border border-transparent shadow
      "
    >
      <input
        className="
          flex-1 min-w-0 bg-transparent outline-none
          text-base
          placeholder:truncate
          overflow-hidden peer
        "
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label="Buscar tarefas"
      />
      {value ? (
        <button
          type="button"
          onClick={onClear}
          aria-label="Limpar busca"
          className="cursor-pointer flex-shrink-0"
        >
          <SearchOffIcon fill="#5e6b52" className="w-6 h-6 ml-2" />
        </button>
      ) : (
        <SearchIcon fill="#5e6b52" className="w-6 h-6 ml-2 flex-shrink-0" />
      )}
    </div>
  );
}

export default SearchBar;
