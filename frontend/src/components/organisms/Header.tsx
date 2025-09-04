import PrimaryButton from "../atoms/buttons/PrimaryButton";
import AddIcon from "../atoms/icons/Add";
import SearchBar from "../molecules/SearchBar";

type HeaderProps = {
  search: string;
  setSearch: (value: string) => void;
};

function Header({ search, setSearch }: HeaderProps) {
  return (
    <div className="flex justify-between gap-6 items-center px-7 py-4 border-b border-gray-300">
      <h1 className="text-3xl font-fascinante">DONE!</h1>
      <SearchBar
        value={search}
        onChange={setSearch}
        onClear={() => setSearch("")}
      />
      <PrimaryButton icon={<AddIcon className="w-4 h-4" />}>
        Nova Tarefa
      </PrimaryButton>
    </div>
  );
}

export default Header;
