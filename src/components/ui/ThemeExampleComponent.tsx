import { useState } from 'react';

// Componente de exemplo mostrando como usar as classes do sistema de temas
const ThemeExampleComponent = () => {
  const [currentTheme, setCurrentTheme] = useState('light');

  const switchTheme = (theme:any) => {
    setCurrentTheme(theme);
    document.documentElement.setAttribute('data-theme', theme);
  };

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Header com seletor de tema */}
      <header className="bg-surface border-b border-light p-4 shadow-sm">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">
            Sistema de Temas
          </h1>
          
          {/* Theme Switcher */}
          <div className="flex gap-2">
            {['light', 'dark', 'corporate', 'nature', 'sunset'].map((theme) => (
              <button
                key={theme}
                onClick={() => switchTheme(theme)}
                className={`btn-base px-4 py-2 rounded-lg transition-all capitalize ${
                  currentTheme === theme
                    ? 'bg-primary text-on-primary shadow-colored'
                    : 'bg-surface text-secondary hover:bg-background-100 hover-lift'
                }`}
              >
                {theme}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto p-6 space-y-8">
        
        {/* Cards de exemplo */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card Principal */}
          <div className="bg-card border border-light rounded-lg p-6 shadow-md hover:shadow-lg hover-lift">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-primary-500 rounded"></div>
              </div>
              <div>
                <h3 className="font-semibold text-primary">Card Principal</h3>
                <p className="text-sm text-secondary">Exemplo de card</p>
              </div>
            </div>
            <p className="text-tertiary text-sm leading-relaxed">
              Este card demonstra o uso das cores do sistema de temas com 
              transições suaves e efeitos de hover.
            </p>
          </div>

          {/* Card com Estados */}
          <div className="bg-card border border-light rounded-lg p-6 shadow-md hover:shadow-lg hover-lift">
            <h3 className="font-semibold text-primary mb-4">Estados Semânticos</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-success rounded-full"></div>
                <span className="text-success text-sm">Sucesso</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-warning rounded-full"></div>
                <span className="text-warning text-sm">Aviso</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-error rounded-full"></div>
                <span className="text-error text-sm">Erro</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-info rounded-full"></div>
                <span className="text-info text-sm">Informação</span>
              </div>
            </div>
          </div>

          {/* Card com Glass Effect */}
          <div className="glass-effect rounded-lg p-6 shadow-lg hover:shadow-xl hover-lift">
            <h3 className="font-semibold text-primary mb-4">Glass Effect</h3>
            <p className="text-secondary text-sm">
              Card com efeito de vidro usando backdrop-filter e transparência.
            </p>
          </div>
        </section>

        {/* Seção de Formulário */}
        <section className="bg-card border border-light rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold text-primary mb-6">
            Formulário de Exemplo
          </h2>
          
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-secondary mb-2">
                Nome
              </label>
              <input
                type="text"
                className="input-base px-4 py-3 focus-ring"
                placeholder="Digite seu nome"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-secondary mb-2">
                Email
              </label>
              <input
                type="email"
                className="input-base px-4 py-3 focus-ring"
                placeholder="seu@email.com"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-secondary mb-2">
                Mensagem
              </label>
              <textarea
                className="input-base px-4 py-3 focus-ring resize-none"
                rows={4}
                placeholder="Sua mensagem..."
              ></textarea>
            </div>
            
            <div className="flex gap-3 pt-4">
              <button
                type="submit"
                className="btn-base px-6 py-3 bg-primary text-on-primary hover:bg-primary-700 hover-lift focus-ring"
              >
                Enviar
              </button>
              <button
                type="reset"
                className="btn-base px-6 py-3 bg-background-100 text-secondary hover:bg-background-200 border border-medium focus-ring"
              >
                Limpar
              </button>
            </div>
          </form>
        </section>

        {/* Seção de Alertas */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Alert Success */}
          <div className="bg-success-bg border border-success/20 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 bg-success rounded-full flex-shrink-0 mt-0.5"></div>
              <div>
                <h4 className="font-medium text-success">Sucesso!</h4>
                <p className="text-sm text-success/80 mt-1">
                  Operação realizada com sucesso.
                </p>
              </div>
            </div>
          </div>

          {/* Alert Warning */}
          <div className="bg-warning-bg border border-warning/20 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 bg-warning rounded-full flex-shrink-0 mt-0.5"></div>
              <div>
                <h4 className="font-medium text-warning">Atenção!</h4>
                <p className="text-sm text-warning/80 mt-1">
                  Verifique os dados antes de continuar.
                </p>
              </div>
            </div>
          </div>

          {/* Alert Error */}
          <div className="bg-error-bg border border-error/20 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 bg-error rounded-full flex-shrink-0 mt-0.5"></div>
              <div>
                <h4 className="font-medium text-error">Erro!</h4>
                <p className="text-sm text-error/80 mt-1">
                  Ocorreu um erro ao processar a solicitação.
                </p>
              </div>
            </div>
          </div>

          {/* Alert Info */}
          <div className="bg-info-bg border border-info/20 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 bg-info rounded-full flex-shrink-0 mt-0.5"></div>
              <div>
                <h4 className="font-medium text-info">Informação</h4>
                <p className="text-sm text-info/80 mt-1">
                  Dados atualizados automaticamente.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de Botões */}
        <section className="bg-card border border-light rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold text-primary mb-6">
            Variações de Botões
          </h2>
          
          <div className="flex flex-wrap gap-4">
            <button className="btn-base px-6 py-3 bg-primary text-on-primary hover:bg-primary-700 hover-lift focus-ring">
              Primário
            </button>
            
            <button className="btn-base px-6 py-3 bg-secondary text-white hover:bg-secondary/90 hover-lift focus-ring">
              Secundário
            </button>
            
            <button className="btn-base px-6 py-3 bg-accent text-white hover:bg-accent-warm hover-lift focus-ring">
              Destaque
            </button>
            
            <button className="btn-base px-6 py-3 bg-background-100 text-secondary hover:bg-background-200 border border-medium hover-lift focus-ring">
              Outline
            </button>
            
            <button className="btn-base px-6 py-3 text-primary hover:bg-primary-50 hover-lift focus-ring">
              Ghost
            </button>
          </div>
        </section>

        {/* Seção de Gradientes */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-primary rounded-lg p-6 text-white shadow-colored">
            <h3 className="font-semibold text-lg mb-2">Gradiente Primário</h3>
            <p className="text-white/80">
              Card com gradiente usando as cores primárias do tema.
            </p>
          </div>
          
          <div className="bg-gradient-warm rounded-lg p-6 text-white shadow-lg">
            <h3 className="font-semibold text-lg mb-2">Gradiente Caloroso</h3>
            <p className="text-white/80">
              Card com gradiente usando as cores de destaque.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ThemeExampleComponent;