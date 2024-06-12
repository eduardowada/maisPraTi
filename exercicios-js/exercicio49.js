function agruparTransacoesPorCategoria(transacoes) {
    let resultado = {};
  
    for (let i = 0; i < transacoes.length; i++) {
      let transacao = transacoes[i];
      let categoria = transacao.categoria;
      let valor = transacao.valor;
  
      // Adiciona a transação à categoria correspondente
      if (!resultado[categoria]) {
        resultado[categoria] = [];
      }
      resultado[categoria].push(transacao);
  
      // Calcula o subtotal da categoria
      if (!resultado[categoria].subtotal) {
        resultado[categoria].subtotal = 0;
      }
      resultado[categoria].subtotal += valor;
    }
  
    return resultado;
  }
  
  // Exemplo de uso:
  const transacoes = [
    { id: 1, valor: 100, data: '2024-06-01', categoria: 'Alimentação' },
    { id: 2, valor: 50, data: '2024-06-02', categoria: 'Transporte' },
    { id: 3, valor: 80, data: '2024-06-03', categoria: 'Alimentação' },
    { id: 4, valor: 120, data: '2024-06-04', categoria: 'Lazer' },
    { id: 5, valor: 60, data: '2024-06-05', categoria: 'Alimentação' }
  ];
  
  const resultado = agruparTransacoesPorCategoria(transacoes);
  console.log(resultado);
  