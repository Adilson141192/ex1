// Preços dos serviços
const precos = {
    "Corte de cabelo": "R$99",
    "Coloração": "R$150",
    "Manicure e Pedicure": "R$70",
    "Tratamento Capilar": "R$120",
    "Maquiagem": "R$130"
  };
  
  // Atualizar o preço quando mudar o serviço
  document.getElementById('servico').addEventListener('change', function() {
    const servicoSelecionado = this.value;
    const preco = precos[servicoSelecionado] || '';
    
    const precoServico = document.getElementById('precoServico');
    if (preco) {
      precoServico.textContent = `Preço: ${preco}`;
    } else {
      precoServico.textContent = '';
    }
  });
  
  // Enviar dados para o WhatsApp
  document.getElementById('formAgendamento').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const nome = document.getElementById('nome').value.trim();
    const whatsapp = document.getElementById('whatsapp').value.trim();
    const servico = document.getElementById('servico').value;
    const data = document.getElementById('data').value;
    const observacao = document.getElementById('observacao').value.trim();
    const preco = precos[servico] || '';
  
    const mensagem = `Olá! Gostaria de agendar um serviço:
  
  *Nome:* ${nome}
  *WhatsApp:* ${whatsapp}
  *Serviço:* ${servico}
  *Preço:* ${preco}
  *Data:* ${data}
  *Observação:* ${observacao}`;
  
    const mensagemCodificada = encodeURIComponent(mensagem);
  
    const numeroSalao = "5511999999999"; // <-- Trocar para seu número!
    const link = `https://wa.me/${numeroSalao}?text=${mensagemCodificada}`;
  
    window.open(link, '_blank');
  });
  