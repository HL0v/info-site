

export const contact = () => {
  const numero = import.meta.env.VITE_CONTACTINFO
  return (    
    
    window.open(`https://wa.me/${numero}`)
  );
}