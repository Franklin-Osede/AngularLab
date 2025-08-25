# 🚀 Angular Microfrontends Labs

Portfolio profesional demostrando habilidades avanzadas en arquitectura de microfrontends con Angular.

## 📋 Descripción

Este repositorio contiene múltiples proyectos de microfrontends con **separación completa de lógica** y **dominios independientes**, diseñados para demostrar arquitectura de microservicios a nivel senior:

- **Day 01 - E-commerce MF**: Catálogo, órdenes y clientes con dominios completamente separados
- **Day 02 - Analytics MF**: Ingesta de datos, dashboards y administración independientes
- **Day 03 - Realtime MF**: Editor colaborativo con comentarios en tiempo real

## 🏗️ Arquitectura

Cada proyecto implementa **separación completa de dominios**:

### **Independencia Total**
- **Dominios Aislados**: Cada microfrontend es un dominio independiente
- **Sin Dependencias Directas**: No hay imports o referencias entre dominios
- **APIs Independientes**: Cada dominio expone su propia API
- **Bases de Datos Separadas**: Cada dominio maneja su propio estado

### **Comunicación Event-Driven**
- **Event Bus**: Comunicación vía eventos de dominio
- **Contratos Compartidos**: Interfaces sin implementación
- **Module Federation**: Carga remota de microfrontends
- **Debugging Avanzado**: Monitoreo completo de interacciones

## 🚀 Inicio Rápido

### Prerrequisitos
- Node.js >= 18.0.0
- npm >= 9.0.0
- Angular CLI >= 17.0.0

### Instalación
```bash
# Instalar dependencias de todos los proyectos
npm install

# O instalar por proyecto específico
npm run install:all
```

### Ejecutar Proyectos

#### Day 01 - E-commerce
```bash
npm run dev:day01
```
- Shell: http://localhost:4200
- Catalog MF: http://localhost:4201
- Checkout MF: http://localhost:4202
- Orders MF: http://localhost:4203

#### Day 02 - Analytics
```bash
npm run dev:day02
```
- Shell: http://localhost:4200
- Ingestion MF: http://localhost:4201
- Dashboard MF: http://localhost:4202
- Admin MF: http://localhost:4203

#### Day 03 - Realtime
```bash
npm run dev:day03
```
- Shell: http://localhost:4200
- Editor MF: http://localhost:4201
- Comments MF: http://localhost:4202
- Activity MF: http://localhost:4203

## 🐛 Debugging en Vivo

### Configuración VS Code
1. Abre el proyecto en VS Code
2. Ve a "Run and Debug" (Ctrl+Shift+D)
3. Selecciona "Debug All MFs" para el proyecto deseado
4. Coloca breakpoints en cualquier microfrontend

### Herramientas de Debugging
- **Angular DevTools**: Inspección de componentes y estado
- **Source Maps**: Debugging directo en TypeScript
- **Console Logging**: Logger compartido entre microfrontends
- **Network Tab**: Monitoreo de carga de módulos remotos

### Ruta de Debug
Visita `/debug` en cualquier shell para:
- Simular errores y ver logs
- Probar comunicación entre microfrontends
- Verificar carga de módulos remotos

## 🧪 Testing

```bash
# Ejecutar tests de todos los proyectos
npm run test:all

# Tests E2E (requiere que las apps estén corriendo)
npm run e2e
```

## 📦 Build y Deploy

```bash
# Build de todos los proyectos
npm run build:all

# Análisis de bundles
npm run analyze
```

## 🏛️ Estructura del Proyecto

```
angular-mf-labs/
├── day01-ecommerce-mf/
│   ├── apps/
│   │   ├── shell/           # App contenedora
│   │   ├── mf-catalog/      # Microfrontend catálogo
│   │   ├── mf-checkout/     # Microfrontend checkout
│   │   └── mf-orders/       # Microfrontend órdenes
│   └── libs/
│       ├── design-system/   # Componentes compartidos
│       ├── shared-utils/    # Utilidades comunes
│       └── api-types/       # Tipos compartidos
├── day02-analytics-mf/
│   ├── apps/
│   │   ├── shell/
│   │   ├── mf-ingestion/
│   │   ├── mf-dashboard/
│   │   └── mf-admin/
│   └── libs/
├── day03-realtime-mf/
│   ├── apps/
│   │   ├── shell/
│   │   ├── mf-editor/
│   │   ├── mf-comments/
│   │   └── mf-activity/
│   └── libs/
└── .vscode/                 # Configuración de debugging
```

## 🎯 Habilidades Demostradas

### Arquitectura
- ✅ Module Federation con Angular
- ✅ Comunicación entre microfrontends
- ✅ Routing independiente
- ✅ Lazy loading de módulos remotos

### Desarrollo
- ✅ TypeScript estricto
- ✅ Angular standalone components
- ✅ Reactive forms y validaciones
- ✅ State management (Signals/NgRx)

### Testing
- ✅ Unit tests con Jasmine
- ✅ E2E tests con Playwright
- ✅ Contract tests para módulos expuestos

### DevOps
- ✅ CI/CD con GitHub Actions
- ✅ Build optimizado
- ✅ Bundle analysis
- ✅ Deploy independiente

## 📚 Recursos Adicionales

- [Module Federation Documentation](https://webpack.js.org/concepts/module-federation/)
- [Angular Microfrontends Guide](https://angular.io/guide/micro-frontends)
- [Debugging Angular Applications](https://angular.io/guide/devtools)

## 🤝 Contribuir

Este es un proyecto de portfolio personal. Si encuentras bugs o tienes sugerencias, ¡las issues son bienvenidas!

## 📄 Licencia

MIT License - ver [LICENSE](LICENSE) para más detalles.
