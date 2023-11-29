export default function Post() {
  return (
    <>
      <section className="max-w-xl rounded-xl shadow-xl">
        <img
          className="rounded-t-xl"
          src="https://placeholder.co/600x400"
          alt="placeholder"
        />
        <article className="rounded-b-xl bg-white px-4  py-6">
          <h2 className="text-xl font-bold">Titolo del post</h2>
          <p className="mb-4 pt-4 text-base font-light leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae illo
            quis ratione debitis unde possimus suscipit quae in velit, iure
            laudantium tempora similique distinctio nesciunt laborum adipisci
            officiis libero ullam!
          </p>
          <button className="rounded bg-yellow-400 px-6 py-2.5 transition-colors duration-300 hover:bg-yellow-300">
            Leggi
          </button>
        </article>
      </section>
    </>
  );
}
