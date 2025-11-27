import { ERROR_MESSAGES } from 'constants/constants.api';

export interface RTKError {
  status: number | string;
  data: {
    message?: string;
    error?: string;
  };
}

function isRTKError(error: unknown): error is RTKError {
  return typeof error === 'object' && error !== null && 'status' in error;
}

export function errorHanlder(error: unknown, defaultMessage: string) {
  if (isRTKError(error)) {
    console.error(error);
    if (typeof error.status === 'string') {
      const stringStatusMessages: Record<string, string> = {
        'FETCH_ERROR': ERROR_MESSAGES.NETWORK_ERROR,
        'PARSING_ERROR': 'Ошибка обработки ответа от сервера',
        'TIMEOUT_ERROR': 'Превышено время ожидания ответа',
        'CUSTOM_ERROR': 'Произошла ошибка',
      };
      return stringStatusMessages[error.status] || error.data?.message || defaultMessage;
    }

    if (typeof error.status === 'number') {
      const statusMessage: Record<number, string> = {
        400: 'Неверные данные',
        404: ERROR_MESSAGES.NOT_FOUND,
        500: ERROR_MESSAGES.SERVER_ERROR,
        502: 'Ошибка шлюза',
        503: 'Сервис временно недоступен',
      };
      return statusMessage[error.status] || error.data?.message || defaultMessage;
    }
  }

  // Любая другая ошибка
  return defaultMessage;
}
