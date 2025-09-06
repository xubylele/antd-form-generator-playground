# antd-form-generator-playground

A comprehensive playground application for testing and experimenting with the `@xubylele/antd-form-generator` library. This interactive tool allows you to create, edit, and preview dynamic forms using JSON schemas with real-time validation and form submission testing.

## 🚀 Features

- **Interactive Schema Editor**: Visual JSON editor for both form schema and UI schema
- **Real-time Form Preview**: Live preview of forms as you edit the schemas
- **Multiple Example Forms**: Pre-built examples covering various use cases
- **Form Submission Testing**: Test form submission and view submitted values
- **Orientation Toggle**: Switch between vertical and horizontal form layouts
- **JSON Validation**: Built-in validation for schema syntax
- **Reset Functionality**: Easy reset to original example state

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd antd-form-generator-playground
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📖 Usage

1. **Select an Example**: Choose from the dropdown in the top bar to load a pre-built example
2. **Edit Schemas**: Modify the form schema and UI schema in the left panel using the visual JSON editor
3. **Preview Forms**: See the live form preview in the right panel
4. **Test Submission**: Fill out the form and submit to see the submitted values
5. **Toggle Layout**: Use the "Change Orientation" button to switch between vertical and horizontal layouts
6. **Reset**: Click "Reset" to return to the original example state

## 📋 Available Examples

The playground includes several comprehensive examples:

- **User (basic)** - Complete user form with validation, enums, and custom options
- **User (with custom widgets)** - User form demonstrating custom widget types
- **Products (array)** - Array field example for managing multiple items
- **Login** - Simple authentication form
- **Register** - User registration form
- **Profile** - User profile management form
- **Contact** - Contact information form
- **Empty** - Blank template to start from scratch

## 🏗️ Schema Structure

### Form Schema

Defines the structure, validation rules, and field types for your form:

```json
{
  "type": "object",
  "title": "User",
  "properties": {
    "name": { "type": "string", "title": "Name", "minLength": 2 },
    "age": { "type": "number", "title": "Age", "minimum": 0 },
    "role": { "type": "string", "title": "Role", "enum": ["admin", "editor", "viewer"] }
  },
  "required": ["name", "role"]
}
```

### UI Schema

Defines how form fields should be rendered and styled:

```json
{
  "ui:layout": { "cols": 12, "gap": 16, "fields": { "name": 12, "age": 12, "role": 12 } },
  "ui:placeholder": { "name": "Enter your name", "age": "Enter age" },
  "ui:widgets": { "role": "select" },
  "ui:customClass": { "name": "custom-class" }
}
```

## 🎯 Key Components

- **Editor**: Visual JSON editor for schema editing
- **Preview**: Live form preview with submission testing
- **Topbar**: Example selector and reset functionality
- **Form Generator**: Integration with `@xubylele/antd-form-generator`

## 📦 Dependencies

- `@xubylele/antd-form-generator` - Core form generation library
- `antd` - UI component library
- `json-edit-react` - Visual JSON editor
- `react` - Frontend framework
- `vite` - Build tool and dev server

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Related

- [@xubylele/antd-form-generator](https://www.npmjs.com/package/@xubylele/antd-form-generator) - The core form generation library
- [Ant Design](https://ant.design/) - UI component library
