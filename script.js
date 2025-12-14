fetch("http://localhost:5000/api/prd")
  .then(res => res.json())
  .then(data => {
    // Problem
    document.getElementById("problemText").innerText = data.problem;

    // Goals
    data.goals.forEach(goal => {
      const li = document.createElement("li");
      li.innerText = goal;
      document.getElementById("goalsList").appendChild(li);
    });

    // Personas
    data.personas.forEach(persona => {
      const li = document.createElement("li");
      li.innerText = persona;
      document.getElementById("personaList").appendChild(li);
    });

    // Static content (optional demo)
    const journeySteps = [
      "User opens app and selects Smart Pool",
      "System finds matching riders",
      "User sees savings and max delay",
      "Ride starts with optimized route"
    ];

    journeySteps.forEach(step => {
      const li = document.createElement("li");
      li.innerText = step;
      document.getElementById("journeyFlow").appendChild(li);
    });

    const competitors = [
      { name: "Uber Pool", offering: "Ride pooling", gap: "Long detours" },
      { name: "Ola Share", offering: "Low-cost rides", gap: "Poor ETA accuracy" },
      { name: "BlaBlaCar", offering: "Intercity pooling", gap: "Not for daily commute" }
    ];

    competitors.forEach(c => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${c.name}</td>
        <td>${c.offering}</td>
        <td>${c.gap}</td>
      `;
      document.getElementById("competitorTable").appendChild(row);
    });

    const futureItems = [
      "Gender-based pooling",
      "Subscription discounts",
      "Carbon savings display"
    ];

    futureItems.forEach(item => {
      const li = document.createElement("li");
      li.innerText = item;
      document.getElementById("futureScope").appendChild(li);
    });
  })
  .catch(err => console.error("API Error:", err));
