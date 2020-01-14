/* describe, global, it, cy */

describe("Petgram", function() {
	it("Para ver si la app funciona", function() {
		cy.visit("/");
	});

	it("Navegamos entre categorías y vemos fotos", function() {
		cy.visit("/pet/1");
		cy.get("article");
	});

	it("Navegar con el navbar a la home", function() {
		cy.visit("/pet/1");
		cy.get("nav a")
			.first()
			.click();
		cy.url().should("include", "/");
	});

	it("Los usuarios no registrados ven el formulario de registro e inicio de sesión en favs", function() {
		cy.visit("/favs");
		cy.get("form").should("have.length", 2);
	});
});
