import type { PlaygroundExample } from './types';

export const EXAMPLES: PlaygroundExample[] = [
  {
    id: "user-basic",
    title: "User (basic)",
    schema: {
      type: "object",
      title: "User",
      properties: {
        name: { type: "string", title: "Name", minLength: 2 },
        age: { type: "number", title: "Age", minimum: 0 },
        role: { type: "string", title: "Role", enum: ["admin", "editor", "viewer"] },
        active: { type: "boolean", title: "Active" },
        color: {
          type: "options",
          title: "Favorite Color",
          options: [
            { label: "Red", value: "red" },
            { label: "Blue", value: "blue" },
            { label: "Green", value: "green" },
          ],
        },
      },
      required: ["name", "role"],
    },
    uiSchema: {
      "ui:layout": { cols: 12, gap: 16, fields: { name: 12, age: 12, role: 12, active: 12, color: 12 } },
      "ui:placeholder": {
        name: "Enter your name",
        age: "Enter age",
        role: "Select role",
        color: "Pick a color",
      },
      "ui:widgets": { role: "select", color: "select" },
      "ui:customClass": { name: "custom-class", age: "custom-class" },
    },
    initialValues: { active: true },
  },
  {
    id: "user-with-custom-widgets",
    title: "User (with custom widgets)",
    schema: {
      type: "object",
      title: "User",
      properties: {
        name: { type: "string", title: "Name", minLength: 2 },
        age: { type: "number", title: "Age", minimum: 0 },
      },
    },
    uiSchema: {
      "ui:widgets": { name: "text", age: "number" },
    },
    initialValues: { name: "John", age: 30 },
  },
  {
    id: "products",
    title: "Products (array)",
    schema: {
      type: "object",
      title: "Products",
      properties: {
        products: { type: "array", title: "Products", items: [{ type: "string", title: "Product" }] },
      },
    },
    uiSchema: {
      "ui:layout": { cols: 12, gap: 16, fields: { products: 12 } },
    },
    initialValues: { products: ["Product 1", "Product 2"] },
  },
  {
    id: "login",
    title: "Login",
    schema: {
      type: "object",
      title: "Login",
      properties: {
        email: { type: "string", title: "Email" },
        password: { type: "string", title: "Password" },
      },
    },
    uiSchema: {
      "ui:layout": { cols: 12, gap: 16, fields: { email: 12, password: 12 } },
    },
    initialValues: { email: "test@test.com", password: "password" },
  },
  {
    id: "register",
    title: "Register",
    schema: {
      type: "object",
      title: "Register",
      properties: {
        email: { type: "string", title: "Email" },
        password: { type: "string", title: "Password" },
      },
    },
    uiSchema: {
      "ui:layout": { cols: 12, gap: 16, fields: { email: 12, password: 12 } },
    },
    initialValues: { email: "test@test.com", password: "password" },
  },
  {
    id: "profile",
    title: "Profile",
    schema: {
      type: "object",
      title: "Profile",
      properties: {
        name: { type: "string", title: "Name" },
        age: { type: "number", title: "Age" },
      },
    },
    uiSchema: {
      "ui:layout": { cols: 12, gap: 16, fields: { name: 12, age: 12 } },
    },
    initialValues: { name: "John", age: 30 },
  },
  {
    id: "contact",
    title: "Contact",
    schema: {
      type: "object",
      title: "Contact",
      properties: {
        email: { type: "string", title: "Email" },
        phone: { type: "string", title: "Phone" },
      },
    },
    uiSchema: {
      "ui:layout": { cols: 12, gap: 16, fields: { email: 12, phone: 12 } },
    },
    initialValues: { email: "test@test.com", phone: "1234567890" },
  },
  {
    id: "empty",
    title: "Empty",
    schema: null,
    uiSchema: null,
  }
];
