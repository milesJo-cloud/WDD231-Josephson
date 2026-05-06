export function parkInfoTemplate(park) {
  return `
    <a href="/" class="hero-banner__title">${park.fullName}</a>
    <p class="park-name__subtitle">
      <span>${park.designation}</span>
      <span>${park.states}</span>
    </p>
  `;
}

export function mediaCardTemplate(info) {
  return `
    <div class="media-card">
      <a href="${info.link}">
        <img src="${info.image}" alt="${info.name}" />
      </a>
      <a href="${info.link}"><h2>${info.name}</h2></a>
      <p>${info.description}</p>
    </div>
  `;
}

export function parkFooterTemplate(park) {
  const mailingAddress = park.addresses.find(a => a.type === "Mailing");
  const voicePhone = park.contacts.phoneNumbers.find(p => p.type === "Voice");

  return `
    <div class="footer-info">
    <h2>Contact Info</h2>
        <p>
          <strong>Address:</strong><br />
          ${mailingAddress.line1}<br />
          ${mailingAddress.city}, ${mailingAddress.stateCode} ${mailingAddress.postalCode}
        </p>
        <p>
          <strong>Phone:</strong><br />
          ${voicePhone.phoneNumber}
        </p>
      </div>
    </div>
  `;
}