const handleError = (res, error) => {
  if (error.status && error.body) {
    console.error("Erro do Notion API:", error.body.message);

    return res.status(error.status).json({
      success: false,
      message: error.body.message,
      details: JSON.parse(error.body),
    });
  }

  console.error("Erro inesperado:", error);
  return res.status(500).json({
    success: false,
    message: "Erro Interno do Servidor",
  });
};

export default handleError;
