describe("visit homepage and use features", () => {
  let length: number;

  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("displays employees", () => {
    cy.get("[data-cy=mainTable] tr").should("have.length.at.least", 3);
  });

  it("counts employees", () => {
    cy.get("[data-cy=mainTable] tr").then(($value) => (length = $value.length));
  });
  it("opens modal", () => {
    cy.contains("Add User").click();
    cy.get("[data-cy=Modal]").should("contain.text", "Add Employee");
  });

  it("closes modal without adding employee", () => {
    cy.contains("Add User").click();
    cy.contains("Close").click();
    cy.get("[data-cy=mainTable] tr").should("have.length", length);
  });

  it("adds employee", () => {
    cy.contains("Add User").click();
    cy.get("[name='firstName']").type("Hello").should("have.value", "Hello");
    cy.get("[name='lastName']").type("world").should("have.value", "world");
    cy.get("[name='salary']").type("123").should("have.value", "123");
    cy.contains("Create").click();
    cy.get("[data-cy=mainTable] tr").should("have.length", ++length);
  });

  it("edits employee", () => {
    const random = Math.random() * 1234;
    cy.contains("Edit").click();
    cy.get("[name='firstName']")
      .type("{selectall}{backspace}Hello")
      .should("have.value", "Hello");
    cy.get("[name='lastName']")
      .type("{selectall}{backspace}world")
      .should("have.value", "world");
    cy.get("[name='salary']")
      .type(`{selectall}{backspace}${String(random)}`)
      .should("have.value", random);
    cy.contains("Confirm").click();
    cy.get("[data-cy=mainTable] tr").should("have.length", length);
  });

  it("deletes employee", () => {
    cy.contains("Delete").click();
    cy.get("[data-cy=mainTable] tr").should("have.length", --length);
  });
});
