// Atualiza a data automaticamente
document.getElementById("data-hoje").textContent =
  "Hoje, " + new Date().toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });

// Exemplo de interação: alerta ao clicar em "Novo Paciente"
document.querySelector(".atalhos button").addEventListener("click", () => {
  alert("Cadastro de novo paciente iniciado!");
});

// Exemplo: destacar pacientes atrasados
document.querySelectorAll(".status.atrasado").forEach(el => {
  el.style.fontWeight = "bold";
});
