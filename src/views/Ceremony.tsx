export default function Ceremony() {
  return (
    <div className="w-full py-4 px-0">
      <div className="md:p-0 my-[1.1em] mx-auto max-w-[550px] text-left font-cormorant tracking-wider text-gray-600 sm:text-base text-[calc(17px * 0.875)] px-4">
        <p className="text-justify">
          La ceremonia tendrá lugar el sábado 30 de noviembre de 2024 a las
          12:30 horas en la Iglesia de la Inmaculada y San Pedro Claver
          (Universidad Pontificia de Comillas), ubicada en la Calle Santa Cruz
          de Marcenado, 22b - 28015 (Madrid).
        </p>
        <p>
          <br />
        </p>
        <p className="text-justify">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.0714904461656!2d-3.7142586238714324!3d40.42941585486686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4228664179ef3b%3A0x33b0767702628ada!2sChurch%20of%20the%20Immaculate%20and%20San%20Pedro%20Claver!5e0!3m2!1ses!2ses!4v1714932545955!5m2!1ses!2ses"
            title="Ubicación de la Iglesia de la Inmaculada y San Pedro Claver (Universidad Pontificia de Comillas) en Madrid"
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
        <p className="text-justify">
          Para llegar al lugar os ofrecemos diferentes maneras.
        </p>
        <p className="mt-4">
          En Transporte Público (Metro):
          <ul className="list-disc list-inside ml-8">
            <li>
              Estación San Bernardo (líneas 2 y 4) salida por C/ Alberto
              Aguilera • 8 minutos a pie (700 metros)
            </li>
            <li>
              Estación Argüelles (línea 6), salida por C/ Alberto Aguilera • A 5
              minutos a pie 350 metros
            </li>
          </ul>
        </p>
        <p className="mt-4"> En coche:</p>
        <p>
          Tener en cuenta que se trata de una zona de bajas emisiones (ZBE) por
          lo que es obligatorio contar con etiqueta <strong>Eco</strong> o{" "}
          <strong>0</strong> de la DGT para poder acceder a la zona, de tener
          otro tipo de etiqueta, ya sea <strong>B</strong> o <strong>C</strong>,
          deberéis dejar el coche fuera de la ZBE o en un parking.
        </p>
        <p>
          <br />
        </p>
        <p className="text-justify">
          Recordad que si no queréis llevar a la Iglesia el coche y tampoco
          podéis o queréis ir en transporte público, puedes ir de forma más
          directa y sin preocupaciones en Taxi, Uber, Cabify o Bolt.
        </p>
        <p>
          <br />
        </p>
      </div>
    </div>
  );
}
