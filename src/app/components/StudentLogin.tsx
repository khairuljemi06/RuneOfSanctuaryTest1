import { User } from 'lucide-react';

interface StudentLoginProps {
  onLogin: (name: string) => void;
}

export function StudentLogin({ onLogin }: StudentLoginProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    if (name.trim()) {
      onLogin(name.trim());
    }
  };

  return (
    <div className="w-full max-w-md bg-card border border-border rounded-lg p-8 shadow-lg">
      <div className="flex items-center justify-center gap-2 mb-6">
        <User className="w-8 h-8 text-chart-1" />
        <h2 className="text-foreground">Masuk Kuiz</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-2 text-foreground">
            Nama Pelajar
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full p-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-foreground"
            placeholder="Masukkan nama anda"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-primary-foreground p-3 rounded-lg hover:opacity-90 transition-opacity"
        >
          Mula Kuiz
        </button>
      </form>
    </div>
  );
}
