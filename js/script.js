document.getElementById('formAgendamento').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Coletar os dados
    const nome = document.getElementById('nome').value.trim();
    const whatsapp = document.getElementById('whatsapp').value.trim();
    const servico = document.getElementById('servico').value;
    const data = document.getElementById('data').value;
    const observacao = document.getElementById('observacao').value.trim();
  
    // Montar a mensagem
    const mensagem = `Olá! Gostaria de agendar um serviço:
    
  *Nome:* ${nome}
  *WhatsApp:* ${whatsapp}
  *Serviço:* ${servico}
  *Data:* ${data}
  *Observação:* ${observacao}`;
  
    // Codificar a mensagem para URL
    const mensagemCodificada = encodeURIComponent(mensagem);
  
    // Número do salão (coloque o número real aqui com DDD)
    const numeroSalao = "5598996215367"; // <-- coloque seu número de WhatsApp aqui!
  
    // Link para o WhatsApp
    const link = `https://wa.me/${numeroSalao}?text=${mensagemCodificada}`;
  
    // Abrir o WhatsApp
    window.open(link, '_blank');
  });
  