import type { components, paths } from './openapi-generated';

// ==================== БАЗОВЫЕ ТИПЫ ДАННЫХ ====================
export type Todo = components['schemas']['Task'];
export type CreateTodoDto = components['schemas']['CreateTask'];
export type UpdateTodoDto = components['schemas']['UpdateTask'];
export type ApiError = components['schemas']['Error'];

// ==================== ПАРАМЕТРЫ ====================
export type GetTodoParams = paths['/tasks']['get']['parameters'];
