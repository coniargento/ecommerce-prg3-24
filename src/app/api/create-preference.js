import mercadopago from "mercadopago";

// credenciales de acceso a Mercado Pago
mercadopago.configure({
  access_token: process.env.MERCADO_PAGO_ACCESS_TOKEN, // que esta variable de entorno esté correctamente configurada
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { cart } = req.body; // Solo se envía el carrito

    // ítems de la preferencia con los productos del carrito
    const items = cart.map((product) => ({
      title: product.name,
      unit_price: Number(product.price), // que el precio sea un número
      quantity: Number(product.quantity), // que la cantidad sea un número
    }));

    // preferencia de pago
    try {
      const preference = await mercadopago.preferences.create({
        items,
        back_urls: {
          success: "http://localhost:3000/success", // pago exitoso
          failure: "http://localhost:3000/failure", // pago fallido
          pending: "http://localhost:3000/pending", // pago está pendiente
        },
        auto_return: "approved", // cuando el pago esté aprobado
      });

      // Enviar la URL de redirección a Mercado Pago al frontend
      res.status(200).json({ url: preference.body.init_point });
    } catch (error) {
      console.error("Error al crear la preferencia", error); // Agrega un console.error para más claridad
      res.status(500).json({ error: "Error al crear la preferencia de pago" });
    }
  } else {
    res.status(405).json({ message: "Método no permitido" });
  }
}