import ReactionExperience from "./components/ReactionExperience";
import EmotionalFlow from "./components/EmotionalFlow";
import ResponsePause from "./components/ResponsePause";
import BackToTop from "./components/BackToTop";
import Navigation from "./components/Navigation";
import ScrollIndicator from "./components/ScrollIndicator";
import BrainVisual from "./components/BrainVisual";


export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F8F5] text-[#263238]">
      <Navigation />

     {/* HERO */}
<section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">

  {/* Elemento visual de fundo */}
  <div className="absolute h-96 w-96 rounded-full bg-[#315C72]/10 blur-3xl" />

  {/* Conteúdo principal */}
  <div className="relative z-10 max-w-3xl text-center">

    {/* Nome do projeto */}
    <p className="mb-8 text-2xl font-semibold uppercase tracking-[0.25em] text-[#315C72] md:text-3xl">
      Presença
    </p>

    {/* Mensagem principal */}
    <h1 className="text-3xl font-light leading-tight tracking-tight text-[#263238] md:text-5xl">
      O passado já passou.
      <br />
      O futuro ainda não aconteceu.
      <br />
      <span className="font-medium text-[#315C72]">
        A vida acontece aqui.
      </span>
    </h1>

    {/* Descrição */}
    <p className="mx-auto mt-8 max-w-xl text-base leading-7 text-[#45545A] md:text-lg">
      Inteligência emocional para perceber, compreender e escolher
      como viver o agora.
    </p>

  </div>

  {/* Indicador */}
  <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
  <ScrollIndicator />
</div>

</section>
{/* MANIFESTO */}
<section
  id="manifesto"
  className="flex min-h-[70vh] items-center justify-center bg-white px-6 py-24"
>
  <div className="max-w-3xl text-center">

    <p className="mb-6 text-sm font-medium uppercase tracking-[0.25em] text-[#4F7563]">
      Um espaço para perceber
    </p>

    <h2 className="text-3xl font-light leading-relaxed text-[#263238] md:text-5xl">
      Nem tudo precisa de uma resposta imediata.
    </h2>

    <div className="mx-auto mt-10 max-w-2xl space-y-4 text-lg leading-8 text-[#45545A]">

      <p>
        Às vezes, o primeiro passo é perceber.
      </p>

      <p>
        Perceber o que sentimos.
        <br />
        Compreender o que acontece dentro de nós.
        <br />
        Respirar.
        <br />
        E então escolher como seguir.
      </p>

      <p className="pt-6 text-xl font-medium text-[#315C72]">
        Porque entre o que acontece e o que fazemos existe um espaço.
        <br />
        E esse espaço também é nosso.
      </p>

    </div>

  </div>
</section>

      {/* FRAMEWORK */}
      <section
  id="caminho"
  className="bg-[#F7F8F5] px-6 py-32"
>

        <div className="mx-auto max-w-6xl">

          {/* Título da seção */}
          <div className="mx-auto max-w-2xl text-center">

            <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-[#4F7563]">
              O caminho da presença
            </p>

            <h2 className="text-3xl font-light leading-tight text-[#263238] md:text-5xl">
              Entre sentir e agir,
              <br />
              existe um espaço.
            </h2>

          </div>

          {/* Etapas */}
          <div className="mt-20 grid gap-6 md:grid-cols-4">

            {/* Perceber */}
            <div className="rounded-3xl bg-white p-8">
              <span className="text-sm font-medium text-[#4F7563]">
                01
              </span>

              <h3 className="mt-6 text-2xl font-medium text-[#315C72]">
                Perceber
              </h3>

              <p className="mt-4 leading-7 text-[#45545A]">
                Notar o que está acontecendo dentro e ao redor de você.
              </p>
            </div>

            {/* Compreender */}
            <div className="rounded-3xl bg-white p-8">
              <span className="text-sm font-medium text-[#4F7563]">
                02
              </span>

              <h3 className="mt-6 text-2xl font-medium text-[#315C72]">
                Compreender
              </h3>

              <p className="mt-4 leading-7 text-[#45545A]">
                Dar espaço para entender o que você está sentindo.
              </p>
            </div>

            {/* Respirar */}
            <div className="rounded-3xl bg-white p-8">
              <span className="text-sm font-medium text-[#4F7563]">
                03
              </span>

              <h3 className="mt-6 text-2xl font-medium text-[#315C72]">
                Respirar
              </h3>

              <p className="mt-4 leading-7 text-[#45545A]">
                Criar uma pausa antes de transformar emoção em ação.
              </p>
            </div>

            {/* Escolher */}
            <div className="rounded-3xl bg-white p-8">
              <span className="text-sm font-medium text-[#4F7563]">
                04
              </span>

              <h3 className="mt-6 text-2xl font-medium text-[#315C72]">
                Escolher
              </h3>

              <p className="mt-4 leading-7 text-[#45545A]">
                Responder de forma consciente, de acordo com o que importa.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* EXPERIÊNCIA INTERATIVA */}
<section id="experimente">
  <ReactionExperience />
</section>

<section id="pausa">
  <ResponsePause />
</section>

{/* FLUXO EMOCIONAL */}
<section id="fluxo">
  <EmotionalFlow />
</section>

{/* REFERÊNCIA */}
<section className="bg-white px-6 py-32">
  <div className="mx-auto max-w-5xl">

    <div className="grid items-center gap-12 md:grid-cols-2">

      {/* Texto */}
      <div>
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-[#4F7563]">
          Referência e inspiração
        </p>

        <h2 className="text-3xl font-light leading-tight text-[#263238] md:text-4xl">
          Inteligência emocional
          <br />
          também é consciência.
        </h2>

        <div className="mt-8 space-y-5 text-lg leading-8 text-[#45545A]">

          <p>
            Daniel Goleman ajudou a ampliar a compreensão sobre inteligência
            emocional, mostrando que o sucesso humano não pode ser explicado
            apenas pelo desempenho cognitivo.
          </p>

          <p className="font-medium text-[#315C72]">
            Entre conhecimento, emoção e comportamento existe um espaço de
            consciência — e é nesse espaço que o Presença convida você a
            observar, compreender e escolher.
          </p>

        </div>
      </div>

      {/* Espaço para o cérebro */}
      <div className="flex min-h-[320px] items-center justify-center rounded-3xl bg-[#F7F8F5]">
  <BrainVisual />
</div>

    </div>

  </div>
</section>

{/* ENCERRAMENTO */}
<section className="bg-[#F7F8F5] px-6 py-32">
  <div className="mx-auto max-w-3xl text-center">

    <p className="mb-6 text-sm font-medium uppercase tracking-[0.25em] text-[#4F7563]">
      Presença
    </p>

    <h2 className="text-3xl font-light leading-tight text-[#263238] md:text-5xl">
      Você não precisa controlar
      <br />
      tudo o que sente.
    </h2>

    <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#45545A]">
      Talvez o primeiro passo seja apenas perceber.
      Criar um espaço.
      E escolher, com mais presença, o próximo movimento.
    </p>

    <BackToTop />

  </div>
</section>

</main>
  );
}