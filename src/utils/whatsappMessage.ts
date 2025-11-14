interface WhatsappForm {
  name: string;
  email: string;
  message: string;
}

interface WhatsappBuy {
  templateName: string;
  message: string;
}

export function whatsappForm(form: WhatsappForm) {
  const phone = '51901617809'
  const text = `Hola Grobles - Store, quiero ponerme en contacto con ustedes, soy un cliente con la siguiente información: \nNombre: ${form.name}\nEmail: ${form.email}\nMensaje: ${form.message}`;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

  if (typeof window !== 'undefined') {
    window.open(url, '_blank');
  }

  return url;
};

export function whatsappBuy(formBuy: WhatsappBuy) {
  const phone = '51901617809'
   const text = `Hola Grobles - Store, deseo adquirir la plantilla "${formBuy.templateName}".${formBuy.message ? ` ${formBuy.message}` : ''}`
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

  if (typeof window !== 'undefined') {
    window.open(url, '_blank');
  }

  return url;
};
