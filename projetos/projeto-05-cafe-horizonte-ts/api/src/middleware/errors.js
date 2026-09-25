export function notFound(request, response) {
  response.status(404).json({
    error: { code: "ROUTE_NOT_FOUND", message: "Rota não encontrada" },
  });
}

export function errorHandler(error, request, response, next) {
  if (error.type === "entity.parse.failed" || error instanceof SyntaxError) {
    return response.status(400).json({
      error: { code: "INVALID_JSON", message: "Corpo da requisição não é um JSON válido" },
    });
  }
  console.error(error);
  if (error.name === "ValidationError") {
    return response.status(400).json({
      error: { code: "VALIDATION_ERROR", message: error.message },
    });
  }
  if (error.name === "CastError") {
    return response.status(400).json({
      error: { code: "INVALID_ID", message: "Identificador inválido" },
    });
  }
  return response.status(500).json({
    error: { code: "INTERNAL_ERROR", message: "Falha interna" },
  });
}
