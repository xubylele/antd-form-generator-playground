# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added [0.1.1] - 2025-09-06

- Add functionality to change form orientation in preview and improve submit button

### Added [0.1.0] - 2025-09-06

- Nothing yet

### Changed [0.1.1] - 2025-09-06

- Change form orientation in preview and improve submit button

### Deprecated [0.1.1] - 2025-09-06

- Nothing yet

### Removed [0.1.1] - 2025-09-06

- Nothing yet

### Fixed [0.1.1] - 2025-09-06

- Nothing yet

### Security [0.1.1] - 2025-09-06

- Nothing yet

## [0.1.1] - 2025-09-06

### Added

- Initial release of antd-form-generator-playground
- Interactive schema editor with visual JSON editing capabilities
- Real-time form preview with live updates
- Multiple pre-built example forms:
  - User (basic) - Complete user form with validation, enums, and custom options
  - User (with custom widgets) - User form demonstrating custom widget types
  - Products (array) - Array field example for managing multiple items
  - Login - Simple authentication form
  - Register - User registration form
  - Profile - User profile management form
  - Contact - Contact information form
  - Empty - Blank template to start from scratch
- Form submission testing with submitted values display
- Orientation toggle between vertical and horizontal form layouts
- Reset functionality to return to original example state
- Example selector dropdown in top navigation
- JSON validation with error handling
- Integration with `@xubylele/antd-form-generator` library
- Modern React 19 with TypeScript support
- Vite build system for fast development and production builds
- ESLint configuration for code quality
- Responsive layout with Ant Design components

### Technical Details

- Built with React 19.1.1 and TypeScript 5.8.3
- Uses Vite 7.1.2 for development and building
- Integrates `@xubylele/antd-form-generator` v0.1.2
- UI components from Ant Design v5.27.1
- Visual JSON editing with `json-edit-react` v1.28.2
- ESLint v9.33.0 with TypeScript support
- Modern ES modules configuration

### Dependencies

- `@xubylele/antd-form-generator`: ^0.1.2
- `antd`: ^5.27.1
- `json-edit-react`: ^1.28.2
- `react`: ^19.1.1
- `react-dom`: ^19.1.1

### Dev Dependencies

- `@eslint/js`: ^9.33.0
- `@types/react`: ^19.1.10
- `@types/react-dom`: ^19.1.7
- `@vitejs/plugin-react`: ^5.0.0
- `eslint`: ^9.33.0
- `eslint-plugin-react-hooks`: ^5.2.0
- `eslint-plugin-react-refresh`: ^0.4.20
- `globals`: ^16.3.0
- `typescript`: ~5.8.3
- `typescript-eslint`: ^8.39.1
- `vite`: ^7.1.2

---

## How to Read This Changelog

- **Added** for new features
- **Changed** for changes in existing functionality
- **Deprecated** for soon-to-be removed features
- **Removed** for now removed features
- **Fixed** for any bug fixes
- **Security** for vulnerability fixes

## Version Numbering

This project follows [Semantic Versioning](https://semver.org/):

- **MAJOR** version when you make incompatible API changes
- **MINOR** version when you add functionality in a backwards compatible manner
- **PATCH** version when you make backwards compatible bug fixes

## Links

- [Keep a Changelog](https://keepachangelog.com/)
- [Semantic Versioning](https://semver.org/)
- [Conventional Commits](https://www.conventionalcommits.org/)
