export default function Celebration() {
  return (
    <div className="w-full py-4 px-0">
      <div className="md:p-0 my-[1.1em] mx-auto max-w-[550px] text-left font-cormorant tracking-wider text-gray-600 sm:text-base text-[calc(17px * 0.875)] px-4">
        <p className="text-justify">
          La celebración posterior tendrá lugar a partir de las 14h en la Finca
          Soto de Cerrolén, ubicada en Ctra. de La Coruña (A-6), Km.33 (La
          Berzosa, Estación de Torrelodones), Vía de Servicio - 28420
          (Galapagar).
        </p>
        <p>
          <br />
        </p>
        <p className="text-justify">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3028.98587700596!2d-3.9754566238638316!3d40.608135243967546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4176f2b6552aab%3A0x9ddc623bf56ad00!2sSoto%20de%20Cerrolen!5e0!3m2!1ses!2ses!4v1714932649269!5m2!1ses!2ses"
            className="w-full h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </p>
        <p>
          <br />
        </p>
        <p className="mt-4">
          La celebración se dividirá en:
          <ul className="list-disc list-inside ml-8">
            <li>
              Cocktail: tendrá comienzo sobre las 14-14:30h y una duración
              aproximada de hora y media. Si se puede se hará en el exterior,
              pero si el tiempo no lo permite contamos con un plan B a la
              altura.
            </li>
            <li>
              Comida: comenzará aproximadamente a las 16h y durará cerca de 2
              horas.
            </li>
            <li>
              Fiesta: una vez terminemos la comida, sobre la 18h, se abrirá la
              barra libre y podréis darlo definitivamente todo, no esperamos
              menos.
            </li>
          </ul>
        </p>
        <p>
          <br />
        </p>
      </div>
    </div>
  );
}
