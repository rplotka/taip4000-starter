import { useEffect, useState } from "react";

interface HealthStatus {
  status: string;
  timestamp: string;
}

export function App() {
  const [health, setHealth] = useState<HealthStatus | null>(null);

  useEffect(() => {
    fetch("/api/health")
      .then((res) => res.json())
      .then(setHealth)
      .catch(console.error);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          SLMS-101 Starter
        </h1>
        <p className="text-gray-600 mb-6">
          Your full-stack project is ready. Start building!
        </p>
        {health && (
          <div className="bg-green-50 border border-green-200 rounded p-3">
            <p className="text-green-800 text-sm">
              API Status: <span className="font-semibold">{health.status}</span>
            </p>
          </div>
        )}
        <div className="mt-6 text-sm text-gray-500">
          <p>Edit <code className="bg-gray-100 px-1 rounded">src/client/App.tsx</code> to get started.</p>
          <p className="mt-1">API routes in <code className="bg-gray-100 px-1 rounded">src/server/routes/</code></p>
        </div>
      </div>
    </main>
  );
}
