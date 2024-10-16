export default function Page() {
    const customers = [
        { id: 1, name: 'Karen', email: 'karen@gmail.com', phone: '(11) 99999-9999', status: 'Ativo' },
        { id: 2, name: 'Nayla', email: 'nayla@gmail.com', phone: '(11) 98888-8888', status: 'Inativo' },
        { id: 3, name: 'Manuela', email: 'manuela@gmail.com', phone: '(21) 97777-7777', status: 'Ativo' },
        { id: 4, name: 'Maya', email: 'maya@gmail.com', phone: '(31) 96666-6666', status: 'Ativo' },
        { id: 5, name: 'Mia', email: 'mia@gmail.com', phone: '(41) 95555-5555', status: 'Inativo' },
      ];

  const statusClasses = {
    Ativo: 'text-green-500 bg-green-100',
    Inativo: 'text-red-500 bg-red-100',
  };

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Clientes</h1>
        <p className="text-lg text-gray-500 mt-2">Veja abaixo a lista de clientes e seus detalhes.</p>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {customers.map((customer) => (
          <div key={customer.id} className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{customer.name}</h2>
            <p className="text-gray-600 mb-2"><strong>Email:</strong> {customer.email}</p>
            <p className="text-gray-600 mb-2"><strong>Telefone:</strong> {customer.phone}</p>
            <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${statusClasses[customer.status]}`}>
              {customer.status}
            </span>
          </div>
        ))}
      </section>
    </main>
  );
}
