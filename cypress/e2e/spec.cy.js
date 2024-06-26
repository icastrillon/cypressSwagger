describe('EJERCICIO 2 | Gestión de una tienda de venta', () => {
	let ordenData;
	let statusApi;

  // Precondición de datos
  before('before', () => {
		cy.fixture('ordenData').then(data => {
			ordenData = data;
		});

		cy.fixture('statusApi').then(data => {
			statusApi = data;
		});
	});

  //Casos de prueba
	it('Validar la consulta de una ordenData de compra ', () => {
		cy.api({
			method: 'GET',
			url: `/9`,
		}).then(response => {
			expect(response.status).to.equal(statusApi.successfulOperation);
		});
	});

	it('Validar creación de una orden de compra ', () => {
		cy.api({
			method: 'POST',
			url: `/`,
			body: {
				id: ordenData.id,
				petId: ordenData.petId,
				quantity: ordenData.quantity,
				shipDate: ordenData.shipDate,
				status: ordenData.status,
				complete: ordenData.complete,
			},
		}).then(response => {
			expect(response.status).to.equal(statusApi.successfulOperation);
			expect(response.body.id).to.equal(ordenData.id);
			expect(response.body.petId).to.equal(ordenData.petId);
			expect(response.body.shipDate).to.equal(ordenData.shipDate);
			expect(response.body.status).to.equal(ordenData.status);
			expect(response.body.complete).to.equal(ordenData.complete);
		});
	});

	it('Validar la consulta de una orden de compra creada ', () => {
		cy.api({
			method: 'GET',
			url: `https://petstore.swagger.io/v2/store/order/${ordenData.id}`,
		}).then(response => {
			expect(response.status).to.equal(200);
			expect(response.body.id).to.equal(ordenData.id);
			expect(response.body.petId).to.equal(ordenData.petId);
			expect(response.body.shipDate).to.equal(ordenData.shipDate);
			expect(response.body.status).to.equal(ordenData.status);
			expect(response.body.complete).to.equal(ordenData.complete);
		});
	});

	it('Verificar inventario de ventas ', () => {
		cy.api({
			method: 'GET',
			url: `https://petstore.swagger.io/v2/store/inventory`,
		}).then(response => {
			expect(response.status).to.equal(statusApi.successfulOperation);
		});
	});

	it('Validar eliminar mascota por ID', () => {
		cy.api({
			method: 'DELETE',
			url: `/${ordenData.id}`,
		}).then(response => {
			expect(response.status).to.equal(statusApi.successfulOperation);
		});
		//Validar que el registro eliminado ya no existe
		cy.api({
			method: 'DELETE',
			url: `/${ordenData.id}`,
			failOnStatusCode: false,
		}).then(response => {
			expect(response.status).to.equal(statusApi.orderNotfound);
		});
	});
});
