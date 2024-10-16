export default function Page() {
    const invoices = [
        { id: 1, customer: 'Karen', amount: 350, status: 'Paid', date: '2024-09-15' },
        { id: 2, customer: 'Nayla', amount: 120, status: 'Pending', date: '2024-09-17' },
        { id: 3, customer: 'Manuela', amount: 500, status: 'Canceled', date: '2024-09-20' },
        { id: 4, customer: 'Maya', amount: 420, status: 'Paid', date: '2024-09-22' },
        { id: 5, customer: 'Mia', amount: 300, status: 'Pending', date: '2024-09-25' },
      ];

  const statusClasses = {
    Paid: 'text-green-500 bg-green-100',
    Pending: 'text-yellow-500 bg-yellow-100',
    Canceled: 'text-red-500 bg-red-100',
  };

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Faturas</h1>
        <p className="text-lg text-gray-500 mt-2">Acompanhe o status de suas faturas abaixo.</p>
      </header>

      <section className="bg-white shadow-lg rounded-lg p-6">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="text-left text-gray-700 uppercase text-sm tracking-wider">
              <th className="px-4 py-2">Cliente</th>
              <th className="px-4 py-2">Data</th>
              <th className="px-4 py-2">Valor</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice) => (
              <tr key={invoice.id} className="text-gray-700 border-t">
                <td className="px-4 py-3">{invoice.customer}</td>
                <td className="px-4 py-3">{invoice.date}</td>
                <td className="px-4 py-3">${invoice.amount.toFixed(2)}</td>
                <td className="px-4 py-3">
                  <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium ${statusClasses[invoice.status]}`}>
                    {invoice.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}
