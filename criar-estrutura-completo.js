// criar-estrutura.js
// Script pra criar TODA a estrutura de pastas e arquivos vazios do projeto Base44
// Depois é só abrir cada arquivo no VS Code e colar o conteúdo copiado do Base44.
//
// COMO USAR:
// 1. Coloca esse arquivo na pasta onde você quer criar o projeto (ex: pasta vazia clonada do GitHub)
// 2. Abre o terminal do VS Code (Ctrl + ') nessa pasta
// 3. Roda: node criar-estrutura.js
// 4. Pronto! Todas as pastas e arquivos (vazios) vão aparecer no explorador do VS Code

const fs = require('fs');
const path = require('path');

const arquivos = [
  // ---- base44/entities (schemas/definições) ----
  'base44/config.jsonc',
  'base44/entities/Cliente.jsonc',
  'base44/entities/DespesaFixa.jsonc',
  'base44/entities/DespesaVariavel.jsonc',
  'base44/entities/Estoque.jsonc',
  'base44/entities/EstoqueGramatura.jsonc',
  'base44/entities/Funcionario.jsonc',
  'base44/entities/HistoricoEstoque.jsonc',
  'base44/entities/Producao.jsonc',
  'base44/entities/Transacao.jsonc',
  'base44/entities/User.jsonc',

  // ---- src/api ----
  'src/api/base44Client.js',

  // ---- src/components (raiz) ----
  'src/components/AuthLayout.jsx',
  'src/components/GoogleIcon.jsx',
  'src/components/Layout.jsx',
  'src/components/PieChart3D.jsx',
  'src/components/PixModal.jsx',
  'src/components/ProtectedRoute.jsx',
  'src/components/ScrollToTop.jsx',
  'src/components/UserNotRegisteredError.jsx',

  // ---- src/components/ui (biblioteca shadcn/ui) ----
  'src/components/ui/accordion.jsx',
  'src/components/ui/alert-dialog.jsx',
  'src/components/ui/alert.jsx',
  'src/components/ui/aspect-ratio.jsx',
  'src/components/ui/avatar.jsx',
  'src/components/ui/badge.jsx',
  'src/components/ui/breadcrumb.jsx',
  'src/components/ui/button.jsx',
  'src/components/ui/calendar.jsx',
  'src/components/ui/card.jsx',
  'src/components/ui/carousel.jsx',
  'src/components/ui/chart.jsx',
  'src/components/ui/checkbox.jsx',
  'src/components/ui/collapsible.jsx',
  'src/components/ui/command.jsx',
  'src/components/ui/context-menu.jsx',
  'src/components/ui/dialog.jsx',
  'src/components/ui/drawer.jsx',
  'src/components/ui/dropdown-menu.jsx',
  'src/components/ui/form.jsx',
  'src/components/ui/hover-card.jsx',
  'src/components/ui/image.jsx',
  'src/components/ui/input-otp.jsx',
  'src/components/ui/input.jsx',
  'src/components/ui/label.jsx',
  'src/components/ui/menubar.jsx',
  'src/components/ui/navigation-menu.jsx',
  'src/components/ui/pagination.jsx',
  'src/components/ui/popover.jsx',
  'src/components/ui/progress.jsx',
  'src/components/ui/radio-group.jsx',
  'src/components/ui/resizable.jsx',
  'src/components/ui/scroll-area.jsx',
  'src/components/ui/select.jsx',
  'src/components/ui/separator.jsx',
  'src/components/ui/sheet.jsx',
  'src/components/ui/sidebar.jsx',
  'src/components/ui/skeleton.jsx',
  'src/components/ui/slider.jsx',
  'src/components/ui/sonner.jsx',
  'src/components/ui/switch.jsx',
  'src/components/ui/table.jsx',
  'src/components/ui/tabs.jsx',
  'src/components/ui/textarea.jsx',
  'src/components/ui/toast.jsx',
  'src/components/ui/toaster.jsx',
  'src/components/ui/toggle-group.jsx',
  'src/components/ui/toggle.jsx',
  'src/components/ui/tooltip.jsx',
  'src/components/ui/use-toast.js',

  // ---- src/hooks ----
  'src/hooks/use-mobile.js',
  'src/hooks/use-size.js',

  // ---- src/lib ----
  'src/lib/app-params.js',
  'src/lib/AuthContext.jsx',
  'src/lib/format.jsx',
  'src/lib/PageNotFound.jsx',
  'src/lib/pix.jsx',
  'src/lib/query-client.js',
  'src/lib/utils.js',

  // ---- src/pages ----
  'src/pages/Clientes.jsx',
  'src/pages/Dashboard.jsx',
  'src/pages/Estoque.jsx',
  'src/pages/EstoqueGeral.jsx',
  'src/pages/Financeiro.jsx',
  'src/pages/ForgotPassword.jsx',
  'src/pages/Funcionarios.jsx',
  'src/pages/Login.jsx',
  'src/pages/Producao.jsx',
  'src/pages/Register.jsx',
  'src/pages/Relatorios.jsx',
  'src/pages/ResetPassword.jsx',

  // ---- src/utils ----
  'src/utils/index.ts',

  // ---- src raiz ----
  'src/App.jsx',
  'src/index.css',
  'src/main.jsx',

  // ---- raiz do projeto ----
  '.gitignore',
  'AGENTS.md',
  'CLAUDE.md',
  'components.json',
  'eslint.config.js',
  'index.html',
  'jsconfig.json',
  'package.json',
  'postcss.config.js',
  'README.md',
  'tailwind.config.js',
  'vite.config.js',
];

let criados = 0;
let pulados = 0;

arquivos.forEach((caminhoRelativo) => {
  const caminhoCompleto = path.join(process.cwd(), caminhoRelativo);
  const pasta = path.dirname(caminhoCompleto);

  // cria a pasta (e todas as pastas pai) se não existir
  fs.mkdirSync(pasta, { recursive: true });

  // cria o arquivo vazio só se ele ainda não existir (não sobrescreve nada)
  if (!fs.existsSync(caminhoCompleto)) {
    fs.writeFileSync(caminhoCompleto, '');
    console.log('✅ Criado: ' + caminhoRelativo);
    criados++;
  } else {
    console.log('⏭️  Já existe (pulei): ' + caminhoRelativo);
    pulados++;
  }
});

console.log('\n🎉 Total: ' + arquivos.length + ' arquivos.');
console.log('   ' + criados + ' criado(s) agora.');
console.log('   ' + pulados + ' já existiam (não mexi neles).');
console.log('\nAgora é só abrir cada um no VS Code e colar o código copiado do Base44.');
