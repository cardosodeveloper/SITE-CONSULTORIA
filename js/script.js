// TIMELINE EM JAVASCRIPT 
const timelineData = [
    { date: "Imersão", description: "Entendemos o cliente, o mercado e as fontes de dados", url: "#" },
    { date: "Diagnóstico", description: "Avaliamos performance e identificamos oportunidades", url: "#" },
    { date: "Estratégia", description: "Transformamos dados em insights", url: "#" },
    { date: "Entrega", description: "Relatórios, dashboards e guias estratégicos", url: "#" },
    { date: "Workshop", description: "Apresentação executiva e aplicação prática junto à agência", url: "#" }
  ];
  
  const timelineElement = document.getElementById("timeline");
  
  const timelineLine = document.createElement("div");
  timelineLine.classList.add("timeline-line");
  timelineElement.appendChild(timelineLine);
  
  timelineData.forEach((item, index) => {
    const timelinePoint = document.createElement("a");
    timelinePoint.href = item.url;
    timelinePoint.classList.add("timeline-point");
    timelinePoint.style.top = `${(index / (timelineData.length - 1)) * 100}%`;
  
    const date = document.createElement("a");
    date.href = item.url;
    date.classList.add("timeline-item-date");
    date.textContent = item.date;
    date.style.top = `${(index / (timelineData.length - 1)) * 100}%`;
  
    const description = document.createElement("a");
    description.href = item.url;
    description.classList.add("timeline-item-description");
    description.textContent = item.description;
    description.style.top = `${(index / (timelineData.length - 1)) * 100}%`;
  
    timelineElement.appendChild(timelinePoint);
    timelineElement.appendChild(date);
    timelineElement.appendChild(description);
  });
  
  // TIMELINE EM JAVASCRIPT 