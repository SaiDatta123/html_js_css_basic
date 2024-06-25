const fetchPromise = fetch('https://api.restful-api.dev/objects');
fetchPromise
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('mobile-container');
        data.forEach(mobile => {
            const card = document.createElement('div');
            card.className = 'col-md';

            const mobileImage = `path_to_images/${mobile.name.toLowerCase().replaceAll(',', '').replace(/ /g, '_')}.jpg`;

            let extraInfo = '';
            if (mobile.data) {
                if (mobile.data.color) {
                    extraInfo += `<p>Color: ${mobile.data.color}</p>`;
                }
                if (mobile.data.Color) {
                    extraInfo += `<p>Color: ${mobile.data.Color}</p>`;
                }
                if (mobile.data.capacity) {
                    extraInfo += `<p>Capacity: ${mobile.data.capacity}</p>`;
                }
                if (mobile.data.Capacity) {
                    extraInfo += `<p>Capacity: ${mobile.data.Capacity}</p>`;
                }
                if (mobile.data.Generation) {
                    extraInfo += `<p>Generation: ${mobile.data.Generation}</p>`;
                }
                if (mobile.data.generation) {
                    extraInfo += `<p>Generation: ${mobile.data.generation}</p>`;
                }
                if (mobile.data.Price) {
                    extraInfo += `<p>Price: $ ${mobile.data.Price}</p>`;
                }
                if (mobile.data.price) {
                    extraInfo += `<p>Price: $ ${mobile.data.price}</p>`;
                }
                if (mobile.data['Screen size']) {
                    extraInfo += `<p>Screen Size: ${mobile.data['Screen size']}</p>`;
                }
                if (mobile.data.Description) {
                    extraInfo += `<p>Description: ${mobile.data.Description}</p>`;
                }
                if (mobile.data['Strap Colour']) {
                    extraInfo += `<p>Strap Colour: ${mobile.data['Strap Colour']}</p>`;
                }
                if (mobile.data['Case Size']) {
                    extraInfo += `<p>Case Size: ${mobile.data['Case Size']}</p>`;
                }
                if (mobile.data['CPU model']) {
                    extraInfo += `<p>CPU model: ${mobile.data['CPU model']}</p>`;
                }
                if (mobile.data['Hard disk size']) {
                    extraInfo += `<p>Hard disk size: ${mobile.data['Hard disk size']}</p>`;
                }
                if (mobile.data.year) {
                    extraInfo += `<p>Year: ${mobile.data.year}</p>`;
                }
                if (mobile.data['capacity GB']) {
                    extraInfo += `<p>capacity GB: ${mobile.data['capacity GB']}</p>`;
                }
            }

            card.innerHTML = `
                
                    <div class="card" style="width: 18rem;">
                        <img src="${mobileImage}" class="card-img-top" alt="${mobile.name}">
                        <div class="card-body">
                            <h6 class="card-title">${mobile.name}</h6>
                            ${extraInfo ? `
                                <p class="btn-toggle" class="card-text" data-id="${mobile.id}">Read more..</p>
                                <div class="extra-info" id="info-${mobile.id}" style="display:none;">
                                    ${extraInfo}
                                </div>
                            ` : `
                                <p>No data available</p>
                            `}
                        </div>
                    </div>
                
                `;
            container.appendChild(card);
        });

        const toggles = document.querySelectorAll('.btn-toggle');
        toggles.forEach(toggle => {
            toggle.addEventListener('click', function () {
                const id = this.dataset.id;
                const info = document.getElementById(`info-${id}`);
                if (info.style.display === 'none') {
                    this.textContent = 'Show less';
                    info.style.display = 'block';
                } else {
                    this.textContent = 'Read more..';
                    info.style.display = 'none';
                }
            });
        });
    })
    .catch(error => console.error('Error fetching data:', error));

