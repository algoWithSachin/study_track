const API = "/api/subjects/";

async function fetchSubjects() {
  const res = await fetch(API);
  const data = await res.json();

  const container = document.getElementById("subjects");
  container.innerHTML = "";

  data.forEach(sub => {
    const card = document.createElement("div");
    card.className = "card";
    card.id = `card-${sub.id}`;

    card.innerHTML = `
      <h3>${sub.name}</h3>
      <p>${sub.completed_classes} / ${sub.total_classes}</p>

      <div style="display:flex; gap:8px; margin-top:10px;">
        <input id="input-${sub.id}" type="number" placeholder="Add classes">
        <button onclick="updateProgress(${sub.id}, document.getElementById('input-${sub.id}').value)">Enter</button>
      </div>

      <div class="progress-bar">
        <div class="progress" style="width:${sub.progress}%"></div>
      </div>

      <button onclick="deleteSubject(${sub.id})">Delete</button>
    `;

    container.appendChild(card);
  });
}

async function addSubject() {
  const name = document.getElementById("name").value;
  const total = document.getElementById("total").value;

  if (!name || !total) {
    alert("Fill all fields");
    return;
  }

  await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: name,
      total_classes: parseInt(total)
    })
  });

  document.getElementById("name").value = "";
  document.getElementById("total").value = "";

  fetchSubjects();
}

async function updateProgress(id, value) {
  if (!value) return;

  const res = await fetch(API + id + "/");
  const subject = await res.json();

  let newCompleted = subject.completed_classes + (parseInt(value) || 0);

  if (newCompleted > subject.total_classes) {
    alert("completed classes not exceed than total classes");
    return;
  }

  const updateRes = await fetch(API + id + "/", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      completed_classes: newCompleted
    })
  });

  const updated = await updateRes.json();

  // ✅ ONLY UPDATE THAT CARD
  const card = document.getElementById(`card-${id}`);

  card.querySelector("p").innerText =
    `${updated.completed_classes} / ${updated.total_classes}`;

  card.querySelector(".progress").style.width =
    `${updated.progress}%`;

  // input clear
  document.getElementById(`input-${id}`).value = "";
}

async function deleteSubject(id) {
  await fetch(API + id + "/", {
    method: "DELETE"
  });

  fetchSubjects();
}

fetchSubjects();