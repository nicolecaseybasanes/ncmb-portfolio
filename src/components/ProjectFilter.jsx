export default function ProjectFilter({ activeFilter, setActiveFilter }) {
  // Tinanggal muna natin ang 'UI Design' dito para hindi siya lumabas sa toggle
  const filters = ['Website Projects', 'Graphic Design'];

  return (
    <div className="inline-flex items-center p-1.5 md:p-2 rounded-full bg-gray-50 dark:bg-[#121614] border border-gray-200/60 dark:border-white/5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] dark:shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]">
      {filters.map((filter) => {
        const isActive = activeFilter === filter;
        return (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 md:px-6 py-2 md:py-2.5 rounded-full text-[10px] md:text-xs font-semibold transition-all duration-300 whitespace-nowrap ${
              isActive
                ? 'bg-white dark:bg-[#252e29] text-gray-900 dark:text-white shadow-[0_2px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_2px_10px_rgba(0,0,0,0.4)]'
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-100/50 dark:hover:bg-white/5'
            }`}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
}