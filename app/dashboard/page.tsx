import { ChartBarIcon, UsersIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Painel de Controle</h1>
        <p className="text-lg text-gray-500 mt-2">Bem-vindo ao seu dashboard! Acompanhe as estatísticas e gerencie suas informações.</p>
      </header>

      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-center mb-4">
            <UsersIcon className="w-10 h-10 text-blue-500" />
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-gray-700">Usuários</h3>
              <p className="text-gray-500">Total de usuários cadastrados</p>
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-800">1.250</p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-center mb-4">
            <DocumentTextIcon className="w-10 h-10 text-green-500" />
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-gray-700">Documentos</h3>
              <p className="text-gray-500">Total de documentos processados</p>
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-800">89</p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-center mb-4">
            <ChartBarIcon className="w-10 h-10 text-purple-500" />
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-gray-700">Estatísticas</h3>
              <p className="text-gray-500">Relatórios gerados este mês</p>
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-800">42</p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Desempenho</h2>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
            Gráfico de desempenho
          </div>
        </div>
      </section>
    </main>
  );
}
