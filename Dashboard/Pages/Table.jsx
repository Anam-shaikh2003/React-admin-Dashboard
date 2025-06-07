const Table = () => {
  const rows = [
    { name: 'John', email: 'john@example.com', role: 'Admin' },
    { name: 'Sara', email: 'sara@example.com', role: 'Editor' },
    { name: 'Mike', email: 'mike@example.com', role: 'Viewer' },
  ];

  return (
    <div className="overflow-x-auto rounded-lg shadow-md bg-white">
      <table className="min-w-full table-auto text-sm text-left text-gray-700">
        <thead className="bg-gradient-to-r from-purple-200 to-indigo-200">
          <tr>
            <th className="px-6 py-3 font-bold uppercase tracking-wider border-b border-purple-300">Name</th>
            <th className="px-6 py-3 font-bold uppercase tracking-wider border-b border-purple-300">Email</th>
            <th className="px-6 py-3 font-bold uppercase tracking-wider border-b border-purple-300">Role</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="hover:bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap">{row.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{row.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">{row.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
