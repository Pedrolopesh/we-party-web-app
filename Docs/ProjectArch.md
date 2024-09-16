/src
|-- /assets
|   |-- /images           # Imagens estáticas do projeto
|   |-- /icons            # Ícones SVG ou fontes de ícones
|   |-- /fonts            # Arquivos de fontes customizadas
|   |-- /styles           # Arquivos de estilo globais (CSS, SASS, etc.)
|
|-- /modules
|   |-- /common           # Componentes reutilizáveis (Botões, Inputs, Modal, etc.)
|       |-- /Select
|       |-- /Input
|       |-- /Button
|   |-- /Routering
|       |-- /Utils
|       |-- /Types
|       |-- /index.ts
|   |-- /services
|       |-- /api              # Configuração e chamadas para APIs (autenticação, eventos, etc.)
|       |-- /storage          # Serviços de armazenamento (localStorage, sessionStorage)
|
|-- /hooks                # Custom hooks para lógica reutilizável (useAuth, useFetch, etc.)
|
|-- /app
|   |-- /App
|       |-- /Layout
|       |-- /Modules
|           |-- /Feed
|               |-- /Components
|               |-- /Pages
|                   |-- /FeedView
|                       |-- /useFeed.tsx
|                       |-- /index.tsx
|               |-- /Routes
|               |-- /ServiceApi
|               |-- /Store
|               |-- /tests                                              # Arquivos de testes unitários e de integração
|                   |-- /components                                     # Testes dos componentes
|                   |-- /pages                                          # Testes das páginas
|                   |-- /utils                                          # Testes das funções utilitárias
|           |-- /Events                                                 # Página de eventos (lista, detalhes)
|               |-- /Components
|               |-- /Pages
|                   |-- /FavoriteEvents
|                       |-- /useFavoriteEvents.tsx
|                       |-- /index.tsx
|                   |-- /TopEvents
|                       |-- /useTopEvents.tsx
|                       |-- /index.tsx
|               |-- /Routes
|               |-- /ServiceApi
|               |-- /Store
|           |-- /Profile
|               |-- /Components
|               |-- /Pages
|                   |-- /ProfileView
|                       |-- /useProfile.tsx
|                       |-- /index.tsx
|                   |-- /Connections
|                       |-- /useConnections.tsx
|                       |-- /index.tsx
|                   |-- /EventLikesAndComments
|                       |-- /useEventLikesAndComments.tsx
|                       |-- /index.tsx
|               |-- /Routes
|               |-- /ServiceApi
|               |-- /Store
|               |-- index.tsx
|           |-- /Connections
|           |-- /Notifications
|           |-- /Interest
|   |-- /Auth                                                           # Páginas de autenticação (Login, Signup)
|       |-- /Layout
|       |-- /Pages
|           |-- /Login
|           |-- /Signup
|       |-- /Components
|       |-- /Routes
|       |-- /ServiceApi
|       |-- /Store
|   |-- /Public
|       |-- /Layout
|       |-- /Pages
|           |-- /notFound
|           |-- /Introduction
|       |-- /Components
|       |-- /Routes
|       |-- /ServiceApi
|       |-- /Store
|
|-- /utils                # Funções utilitárias (formatação de data, validações, etc.)
|
|-- /i18n                 # Configuração de internacionalização e arquivos de tradução
|
|-- App.tsx               # Componente raiz da aplicação
|-- index.tsx             # Ponto de entrada do React