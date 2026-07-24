const products = {
  "10w30": {
    family: "Passenger Car Motor Oil",
    grade: "10W-30",
    subtitle: "Full Synthetic Gasoline Engine Oil",
    overview: "Premium full synthetic gasoline engine oil developed for modern passenger car applications requiring SAE 10W-30 viscosity and API SQ performance.",
    viscosity: "10W-30",
    performance: "API SQ",
    type: "Full Synthetic",
    document: "https://github.com/87428467/gpt-ai-assistant/raw/refs/heads/main/motox-public/downloads/MOTOX_SQ_10W-30_Typical_Properties.pdf",
    documentName: "MOTOX SQ 10W-30 Technical Data Sheet"
  },
  "10w40": {
    family: "Passenger Car Motor Oil",
    grade: "10W-40",
    subtitle: "Full Synthetic Gasoline Engine Oil",
    overview: "Premium full synthetic gasoline engine oil developed for modern passenger car applications requiring SAE 10W-40 viscosity and API SQ performance.",
    viscosity: "10W-40",
    performance: "API SQ",
    type: "Full Synthetic",
    document: "https://github.com/87428467/gpt-ai-assistant/raw/refs/heads/main/motox-public/downloads/MOTOX_SQ_10W-40_Typical_Properties.pdf",
    documentName: "MOTOX SQ 10W-40 Technical Data Sheet"
  },
  "15w40": {
    family: "Heavy-Duty Diesel Engine Oil",
    grade: "15W-40",
    subtitle: "Heavy-Duty Diesel Engine Oil",
    overview: "High-performance diesel engine oil for heavy-duty service where SAE 15W-40 viscosity and API CI-4 performance are required.",
    viscosity: "15W-40",
    performance: "API CI-4",
    type: "Diesel Engine Oil",
    document: "https://github.com/87428467/gpt-ai-assistant/raw/refs/heads/main/motox-public/downloads/MOTOX_CI-4_15W-40_Typical_Properties.pdf",
    documentName: "MOTOX CI-4 15W-40 Technical Data Sheet"
  },
  "5w40": {
    family: "Passenger Car Motor Oil",
    grade: "5W-40",
    subtitle: "Full Synthetic Engine Oil",
    overview: "MOTOX 5W-40 is part of the passenger car engine oil range. Contact our team for current product specifications and market availability.",
    viscosity: "5W-40",
    performance: "Contact for specification",
    type: "Full Synthetic",
    document: null
  },
  "atf": {
    family: "Transmission Fluid",
    grade: "ATF",
    subtitle: "Automatic Transmission Fluid",
    overview: "MOTOX ATF is part of the transmission fluid range. Contact our team for the correct specification and current market availability.",
    viscosity: "Product dependent",
    performance: "Contact for specification",
    type: "Transmission Fluid",
    document: null
  }
};

function renderProduct() {
  const key = location.hash.slice(1).toLowerCase();
  const product = products[key] || products["10w40"];
  document.title = "MOTOX " + product.grade + " | Product Details";
  document.getElementById("crumb").textContent = product.grade;
  document.getElementById("family").textContent = product.family;
  document.getElementById("grade").textContent = product.grade;
  document.getElementById("subtitle").textContent = product.subtitle;
  document.getElementById("overview").textContent = product.overview;
  document.getElementById("viscosity").textContent = product.viscosity;
  document.getElementById("performance").textContent = product.performance;
  document.getElementById("type").textContent = product.type;
  const area = document.getElementById("document-area");
  if (product.document) {
    area.innerHTML = '<div class="doc-meta"><strong>' + product.documentName + '</strong><span>PDF &middot; Technical Data Sheet</span></div><a class="download-btn" href="' + product.document + '" download>Download TDS (PDF) &darr;</a>';
  } else {
    area.innerHTML = '<div class="doc-meta"><strong>TDS available on request</strong><span>Contact our team for the latest document.</span></div><a class="request-btn" href="https://htmlpreview.github.io/?https://github.com/87428467/gpt-ai-assistant/blob/main/motox-public/index.html#contact">Request Technical Data</a>';
  }
}

window.addEventListener("hashchange", renderProduct);
renderProduct();